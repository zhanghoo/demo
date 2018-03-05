/* AlloyCrop v1.0.1
 * By dntzhang
 * Github: https://github.com/AlloyTeam/AlloyCrop
 * Fork by zhanghoo <zhanghoo@163.com>
 */
;(function(){
    var AlloyFinger = typeof require === 'function'
        ? require('alloyfinger')
        : window.AlloyFinger
    var Transform = typeof require === 'function'
        ? require('css3transform')
        : window.Transform

    var getScaleSize = function(oriW, oriH, dec, psdW) {
      var _clientW = $(window).width();
      var _clientH = $(window).height();
      var _psdW = psdW ? psdW : 750;
      
      var _oriW = oriW ? oriW : 750;
      var _oriH = oriH ? oriH : 1334;
      var _dec = dec ? dec : 2;
      
      var _scaleW = _clientW * _oriW / _psdW;
      var _scaleH = _oriH * _scaleW / _oriW;
      
      return {
        'w': _scaleW.toFixed(_dec),
        'h': _scaleH.toFixed(_dec)
      }
    }
        
    var AlloyCrop = function (option) {
        var _alloyCrop = this;
        this.renderTo = document.body;
        this.canvas = document.createElement("canvas");
        this.output = option.output;
        this.width = option.width;
        this.height = option.height;
        this.canvas.width = option.width * this.output;
        this.canvas.height = option.height * this.output;
        this.circle = option.circle;
        this._fontFamily = option.font_family;
        if (option.width !== option.height && option.circle) {
            throw "can't set circle to true when width is not equal to height"
        }
        this.ctx = this.canvas.getContext("2d");
        this.croppingBox = document.createElement("div");
        this.croppingBox.style.visibility = "hidden";
        this.cover = document.createElement("canvas");
        this.type = option.type || "png";
        this.cover.width = window.innerWidth;
        this.cover.height = window.innerHeight;
        this.cover_ctx = this.cover.getContext("2d");
        this.img = document.createElement("img");

        if(option.image_src.substring(0,4).toLowerCase()==='http') {
            this.img.crossOrigin = 'anonymous';//resolve base64 uri bug in safari:"cross-origin image load denied by cross-origin resource sharing policy."
        }
        this.cancel = option.cancel;
        this.ok = option.ok;

        this.ok_text = option.ok_text || "ok";
        this.cancel_text = option.cancel_text || "cancel";
        
        //添加底色
        this.frameBg = document.createElement("div");
        this.croppingBox.appendChild(this.frameBg);
        this._css(this.frameBg, {
            position: "fixed",
            left: "0",
            top: "0",
            width: window.innerWidth + "px",
            height: window.innerHeight + "px",
            backgroundColor: "#999999"
        });
        
        //添加相框
        this.frameImg = document.createElement("img");
        this.croppingBox.appendChild(this.frameImg);
        this.frameImg.src = option.frame_src;
        this._css(this.frameImg, {
            position: "fixed",
            zIndex: "95",
            left: "50%",
            // error position in meizu when set the top  50%
            top: window.innerHeight / 2 + "px",
            marginLeft: option.width / -2 + "px",
            marginTop: option.height / -2 + "px",
            width: option.width + "px",
            height: option.height + "px"
        });
        
        //添加覆盖和需要裁剪的图片
        this.croppingBox.appendChild(this.img);
        this.croppingBox.appendChild(this.cover);
        this.renderTo.appendChild(this.croppingBox);
        this.img.onload = this.init.bind(this);
        this.img.src = option.image_src;

        /*this.cancel_btn = document.createElement('a');
        this.cancel_btn.innerHTML = this.cancel_text;
        this.ok_btn = document.createElement('a');
        this.ok_btn.innerHTML = this.ok_text;*/
        
        //重新选择和确定按钮
        this.cancel_btn = document.createElement('img');
        this.cancel_btn.src = option.cancel_src;
        this.ok_btn = document.createElement('img');
        this.ok_btn.src = option.ok_src;

        this.croppingBox.appendChild(this.ok_btn);
        this.croppingBox.appendChild(this.cancel_btn);
        
        //编辑框
        this.editBox = document.createElement('textarea');
        this.editBox.className = 'edit-box';
        /*/编辑框placeholder
        this.editHolder = document.createElement('img');
        this.editHolder.src = window.location.href + 'img/imgTip2.png';
        this.croppingBox.appendChild(this.editHolder);
        this._css(this.editHolder, {
          position: "absolute",
          top: 0.65 * this.height + 'px',
          left: "10%",
          width: "40%",
          height: "auto",
          zIndex: "100",
        });*/
        this.croppingBox.appendChild(this.editBox);
        this._css(this.editBox, {
          position: "absolute",
          margin: "0",
          padding: "0",
          top: 0.65 * this.height + 'px',
          left: "10%",
          width: "40%",
          zIndex: "110"
        });
        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 这个尺寸记得对应
        var editHolderSize = getScaleSize(302, 130);
        var _h = parseInt(editHolderSize.h);
        //输入框行间距
        this.editBoxLineHeight = parseInt(_h / 3);
        //输入框字体大小
        this.editBoxFontSize = parseInt(_h / 3) - 6;
        //输入框宽
        this.editBoxWeight = parseInt(editHolderSize.w);
        this.editBox.style.height = _h + 'px';
        this.editBox.style.lineHeight = this.editBoxLineHeight + 'px';
        this.editBox.style.fontSize = this.editBoxFontSize + 'px';
        this.editBox.setAttribute('placeholder', '在此输入你对宝骏530的期待，不多于24个字');
        
        //添加事件
        /*new AlloyFinger(this.editHolder, {
            touchStart:function(){
              _alloyCrop.editHolder.style.display = "none";
              _alloyCrop.editBox.focus();
            }
        });
        this.editBox.addEventListener('blur', function() {
          var _value = (_alloyCrop.editBox.value).replace(/^\s+|\s+$/gm,'');
          if ( _value == '') {
            _alloyCrop.editHolder.style.display = "block";
          }
        });*/
        
        /*this.inputExchage = document.createElement('input');
        this.inputExchage.type = "file";
        this.inputExchage.accept = ".jpg,.jpeg,.png,.gif,.bmp";
        this._css(this.inputExchage, {
          display: 'block',
          position: "absolute",
          top: "38.65%",
          left: "26.89%",
          width: "46.22%",
          height: "9%",
          lineHeight: "9%",
          zIndex: "110",
          opacity: 0
        });
        this.croppingBox.appendChild(this.inputExchage);
        this.inputExchage.addEventListener('change', function() {
          var _self = this;
          var _src = URL.createObjectURL(_self.files[0]);
          _alloyCrop.img.src = _src;
          console.log(_alloyCrop.img, _alloyCrop.img.width);
          _alloyCrop._css(_alloyCrop.img, {
            position: "fixed",
            zIndex: "90",
            left: "50%",
            // error position in meizu when set the top  50%
            top: window.innerHeight / 2 + "px",
            marginLeft: _alloyCrop.img.width / -2 + "px",
            marginTop: _alloyCrop.img.height / -2 + "px"
          });
        });*/
    };

    AlloyCrop.prototype = {
        init: function () {

            this.img_width = this.img.width;
            this.img_height = this.img.height;
            Transform(this.img, true);
            var scaling_x = window.innerWidth / this.img_width,
                scaling_y = window.innerHeight / this.img_height;
            var scaling = scaling_x > scaling_y ? scaling_y : scaling_x;
            /*this.initScale = scaling;
            this.originScale = scaling;
            this.img.scaleX = this.img.scaleY = scaling;*/
            this.initScale = scaling_x;
            this.originScale = scaling_x;
            this.img.scaleX = this.img.scaleY = scaling_x;
            this.first = 1;
            var self = this;
            new AlloyFinger(this.croppingBox, {
                multipointStart: function (evt) {
                    console.log('multipointStart');
                    //reset origin x and y
                    var centerX = (evt.touches[0].pageX + evt.touches[1].pageX) / 2;
                    var centerY = (evt.touches[0].pageY + evt.touches[1].pageY) / 2;
                    var cr = self.img.getBoundingClientRect();
                    var img_centerX = cr.left + cr.width / 2;
                    var img_centerY = cr.top + cr.height / 2;
                    var offX = centerX - img_centerX;
                    var offY = centerY - img_centerY;
                    var preOriginX = self.img.originX
                    var preOriginY = self.img.originY
                    self.img.originX = offX / self.img.scaleX;
                    self.img.originY = offY / self.img.scaleY;
                    //reset translateX and translateY
                    
                    self.img.translateX += offX - preOriginX * self.img.scaleX;
                    self.img.translateY += offY - preOriginY * self.img.scaleX;

                    
                    if(self.first == 1){
                        self.img.scaleX = self.img.scaleY = self.initScale * 1.1;
                        ++self.first;
                    }

                    self.initScale = self.img.scaleX;
                    
                },
                pinch: function (evt) {
                    
                    var cr = self.img.getBoundingClientRect();
                    var boxOffY = (document.documentElement.clientHeight - self.height)/2;
                    
                    var tempo = evt.zoom;
                    var dw = (cr.width * tempo - cr.width)/2;
                    var dh = (cr.height - cr.height * tempo)/2;
                    if( (self.initScale * tempo <= 1.6 ) && (self.initScale * tempo >= self.originScale) && (dw >= cr.left) && (-dw <= (cr.right - self.width) ) && (dh <= (boxOffY - cr.top) ) && (dh <= (cr.bottom-boxOffY-self.height)) ){
                        self.img.scaleX = self.img.scaleY = self.initScale * tempo;
                    }
                },
                pressMove: function (evt) {
                    //console.log('pressMove');
                    var cr = self.img.getBoundingClientRect();
                    var boxOffY = (document.documentElement.clientHeight - self.height)/2;
                    if((cr.left + evt.deltaX <= 0) && (cr.right + evt.deltaX >= self.width)){
                        self.img.translateX += evt.deltaX;  
                    }
                    if((boxOffY - cr.top - evt.deltaY >= 0) && (cr.bottom + evt.deltaY - boxOffY>= self.height)){
                        self.img.translateY += evt.deltaY;
                    }
                    evt.preventDefault();
                }
            });

            new AlloyFinger(this.cancel_btn, {
                /*touchStart:function(){
                    self.cancel_btn.style.backgroundColor = '#ffffff';
                    self.cancel_btn.style.color = '#3B4152';
                },*/
                tap: this._cancel.bind(this)
            });

            new AlloyFinger(this.ok_btn, {
                /*touchStart:function(){
                    self.ok_btn.style.backgroundColor = '#2bcafd';
                    self.ok_btn.style.color = '#ffffff';
                },*/
                tap: this._ok.bind(this)
            });

            /*document.addEventListener('touchend',function(){
                self.cancel_btn.style.backgroundColor = '#ffffff';
                self.ok_btn.style.backgroundColor = '#2bcafd';
            })*/

            this.renderCover();
            this.setStyle();

        },
        _cancel: function () {
            this._css(this.croppingBox, {
                display: "none"
            });
            this.cancel();
        },
        _ok: function () {
          if(this.editBox.value.length > 24) {
            alert('字数已超过24个，请删减^_^');
          } else {
            this.crop();
            /*this._css(this.croppingBox, {
                display: "none"
            });*/
            this.ok(this.canvas.toDataURL("image/" + this.type), this.canvas);
          }
        },
        showItself: function() {
          this._css(this.croppingBox, {
            display: "block"
          });
        },
        emptyEdit: function() {
          console.log(this.editBox.value);
          this.editBox.setValue = '';
          console.log(this.editBox.value);
        },
        renderCover: function () {
            var ctx = this.cover_ctx,
                w = this.cover.width,
                h = this.cover.height,
                cw = this.width,
                ch = this.height;
            ctx.save();
            //ctx.fillStyle = "black";
            ctx.globalAlpha = 0.7;
            ctx.fillRect(0, 0, this.cover.width, this.cover.height);
            ctx.restore();
            ctx.save();
            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            if (this.circle) {
                ctx.arc(w / 2, h / 2, cw / 2 - 4, 0, Math.PI * 2, false);
            } else {
                ctx.rect(w / 2 - cw / 2, h / 2 - ch / 2, cw, ch)
            }
            ctx.fill();
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = "white";
            if (this.circle) {
                ctx.arc(w / 2, h / 2, cw / 2 - 4, 0, Math.PI * 2, false);
            } else {
                ctx.rect(w / 2 - cw / 2, h / 2 - ch / 2, cw, ch)
            }
            ctx.stroke();
        },
        setStyle: function () {
            this._css(this.cover, {
                position: "fixed",
                zIndex: "100",
                left: "0px",
                top: "0px"
            });

            this._css(this.croppingBox, {
                color: "white",
                textAlign: "center",
                fontSize: "18px",
                textDecoration: "none",
                visibility: "visible"
            });

            this._css(this.img, {
                position: "fixed",
                zIndex: "90",
                left: "50%",
                // error position in meizu when set the top  50%
                top: window.innerHeight / 2 + "px",
                marginLeft: this.img_width / -2 + "px",
                marginTop: this.img_height / -2 + "px"
            });


            /*this._css(this.ok_btn, {
                position: "fixed",
                zIndex: "101",
                width: "100px",
                right: "50px",
                lineHeight: "40px",
                height: "40px",
                bottom: "20px",
                borderRadius: "2px",
                color: "#ffffff",
                backgroundColor: "#2bcafd"

            });

            this._css(this.cancel_btn, {
                position: "fixed",
                zIndex: "101",
                width: "100px",
                height: "40px",
                lineHeight: "40px",
                left: "50px",
                bottom: "20px",
                borderRadius: "2px",
                color: "#3B4152",
                backgroundColor: "#ffffff"

            });*/
            this._css(this.ok_btn, {
                position: "absolute",
                top: 0.4964 * this.height + 'px',
                left: "26.89%",
                width: "46.22%",
                height: "auto",
                lineHeight: "9%",
                zIndex: "110"
            });

            this._css(this.cancel_btn, {
                position: "absolute",
                top: 0.3865 * this.height + 'px',
                left: "26.89%",
                width: "46.22%",
                height: "auto",
                lineHeight: "9%",
                zIndex: "110"
            });
        },
        crop: function () {
            this.calculateRect();
            //this.ctx.drawImage(this.img, this.crop_rect[0], this.crop_rect[1], this.crop_rect[2], this.crop_rect[3], 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.img, this.crop_rect[0], this.crop_rect[1], this.crop_rect[2], this.crop_rect[3], 0, 0, this.crop_rect[2]*this.img.scaleX, this.crop_rect[3]*this.img.scaleY);
            //不为空, 合成文字
            if ((this.editBox.value).replace(/^\s+|\s+$/gm,'') != '') {
              this.drawText();
            }
            //将相框覆盖
            this.ctx.drawImage(this.frameImg, 0, 0, this.width, this.height);
        },
        drawText: function() {
          var _lineHeight = this.editBoxLineHeight,
              _fontSize = this.editBoxFontSize,
              _editText = (this.editBox.value.replace(/\n/g, '_@')).replace(/^\s+|\s+$/gm,''),
              _editBoxX = parseInt(this.width * 0.06),
              _editBoxY = parseInt(this.height * 0.61),
              _editBoxWeight = this.editBoxWeight,
              _textOffset = 3,
              row = [];
          var _chr = _editText.split("_@");
          for (var i = 0; i < _chr.length; i++) {
            var chr = _chr[i].split(""),
              temp = "";
            var _font = _fontSize + "px " + this._fontFamily;
  
            this.ctx.font = _font;
            for (var a = 0; a < chr.length; a++) {
              if( this.ctx.measureText(temp).width < _editBoxWeight ){
                ;
              }
              else{
                row.push(temp);
                temp = "";
              }
              temp += chr[a];
            }
            row.push(temp);
          }
          
          //console.log(row);
          //模拟绘制字体阴影 shadow
          this.ctx.fillStyle = "black";
          for (var b = 0; b < row.length; b++) {
            this.ctx.fillText(row[b], _editBoxX+_textOffset, _textOffset+_editBoxY+(b+1)*_lineHeight);
          }
          
          this.ctx.fillStyle = "white";
          for (var b = 0; b < row.length; b++) {
            this.ctx.fillText(row[b], _editBoxX, _editBoxY+(b+1)*_lineHeight);
          }
        },
        calculateRect: function () {
            var cr = this.img.getBoundingClientRect();
            var c_left = window.innerWidth / 2 - this.width / 2;
            var c_top = window.innerHeight / 2 - this.height / 2;
            var cover_rect = [c_left, c_top, this.width + c_left, this.height + c_top];
            var img_rect = [cr.left, cr.top, cr.width + cr.left, cr.height + cr.top];
            var intersect_rect = this.getOverlap.apply(this, cover_rect.concat(img_rect));
            var left = (intersect_rect[0] - img_rect[0]) / this.img.scaleX;
            var top = (intersect_rect[1] - img_rect[1]) / this.img.scaleY;
            var width = intersect_rect[2] / this.img.scaleX;
            var height = intersect_rect[3] / this.img.scaleY;

            if (left < 0) left = 0;
            if (top < 0) top = 0;
            if (left + width > this.img_width) width = this.img_width - left;
            if (top + height > this.img_height) height = this.img_height - top;

            this.crop_rect = [left, top, width, height];
        },
        // top left (x1,y1) and bottom right (x2,y2) coordination
        getOverlap: function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
            if (ax2 < bx1 || ay2 < by1 || ax1 > bx2 || ay1 > by2) return [0, 0, 0, 0];

            var left = Math.max(ax1, bx1);
            var top = Math.max(ay1, by1);
            var right = Math.min(ax2, bx2);
            var bottom = Math.min(ay2, by2);
            return [left, top, right - left, bottom - top]
        },
        _css: function (el, obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    el.style[key] = obj[key];
                }
            }
        }
    };

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = AlloyCrop;
    }else {
        window.AlloyCrop = AlloyCrop;
    }
})();
