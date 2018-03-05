;(function() {
  var bgPlayFlag = null;
  var playMusic = function() {
    var audioBg = document.getElementById('audioBg');
    audioBg.play();
    bgPlayFlag = true;
    $('#btnMusic').on('click', function() {
      var _this = $(this);
      if(audioBg.paused) {
        audioBg.play();
        bgPlayFlag = true;
        _this.attr('src', './img/imgMusicOpen.png');
      } else {
        audioBg.pause();
        bgPlayFlag = false;
        _this.attr('src', './img/imgMusicClose.png');
      }
    });
    
    var hidden, state, visibilityChange; 
    if (typeof document.hidden !== "undefined") {
      hidden = "hidden";
      visibilityChange = "visibilitychange";
      state = "visibilityState";
    } else if (typeof document.mozHidden !== "undefined") {
      hidden = "mozHidden";
      visibilityChange = "mozvisibilitychange";
      state = "mozVisibilityState";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
      state = "msVisibilityState";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
      state = "webkitVisibilityState";
    }

    document.addEventListener(visibilityChange, function() {
      if (document[state] == 'hidden') {
        audioBg.pause();
        $('#btnMusic').attr('src', './img/imgMusicClose.png');
      } else {
        if (bgPlayFlag) {
          audioBg.play();
          $('#btnMusic').attr('src', './img/imgMusicOpen.png');
        } else {
          audioBg.pause();
          $('#btnMusic').attr('src', './img/imgMusicClose.png');
        }
      }
    }, false);
  }
  
  var t_img; // 定时器
  var isLoad = true; // 控制变量
  var loaded = 0;
  
  // 判断图片加载的函数
  function isImgLoad(callback){
    // 查找所有封面图，迭代处理
    $('.img').each(function() {
      // 找到为0就将isLoad设为false，并退出each
      if(this.height === 0){
        isLoad = false;
        loaded++;
        return false;
      }
    });
    // 为true，没有发现为0的。加载完毕
    if(isLoad){
      clearTimeout(t_img); // 清除定时器
      // 回调函数
      callback();
      // 为false，因为找到了没有加载完成的图，将调用定时器递归
    }else{
      isLoad = true;
      t_img = setTimeout(function(){
        isImgLoad(callback); // 递归扫描
      }, 60);
    }
  }
  
  
  /* var loading = function() {
    $('#imgLoading1').on('animationend', function() {
      $('#pageLoading').hide();
    });
  }
  loading(); */
  
  // 判断图片加载状况，加载完成后回调
  isImgLoad(function(){
    // 加载完成
    //$('#pageLoading').hide();
    //console.log(isLoad);
  });
  var _int = null, _total = 0;
  _int = setInterval(function() {
    _total +=  parseInt(Math.random() * 10);
    _total = _total >= 100 ? 100 : _total;
    $('#loadText').text(_total + '%');
    if (_total == 100) {
      if (isLoad) {
        clearInterval(_int);
        $('#pageLoading').hide();
        $('#pageIndex').addClass('fadeIn');
      }
    }
  }, 300);
  

  var client_w = $(window).width();
  var client_h = $(window).height();
  
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
  
  var loadingTextSize = getScaleSize(625, 826);
  var btnMusicSize = getScaleSize(40, 36);
  var showBoxSize = getScaleSize(750, 950);
  var bgShowSize = getScaleSize(626, 1066);
  var cropCoverBoxSize = getScaleSize(690, 1162);
  
  $('#loadingText').css({'width': loadingTextSize.w + 'px', 'height': loadingTextSize.h + 'px'});
  $('.btnMusic').css({'width': btnMusicSize.w + 'px', 'height': btnMusicSize.h + 'px'});
  $('.showBox').css({'width': showBoxSize.w + 'px', 'height': showBoxSize.h + 'px'});
  $('.bgShow, .bgShowOpen').css({'width': bgShowSize.w + 'px', 'height': bgShowSize.h + 'px'});
  $('.cropCoverBox').css({'width': cropCoverBoxSize.w + 'px', 'height': cropCoverBoxSize.h + 'px'});
  
  $('#ani1').on('animationend', function() {
    $('#bgShow').css('z-index', '300');
  });
  
  $('#btnEnter').on('click', function() {
    $('#pageIndex').removeClass('fadeIn').addClass('fadeOut');
      $('.page1').on('animationend', function() {
        $('#pageIndex, #pageB').hide();
        playMusic();
      });
  });
  
  $('#btnClickFind1, #btnClickFind2, #btnClickFind3').on('click', function() {
    var _index = $(this).attr('data-index');
    $('#showDetailBox').show().addClass('open');
    var _src = './img/bgShow' + _index + '.jpg';
    $('#bgShowImg').attr('src', _src);
  });
  
  $('#btnClose').on('click', function() {
    $('#showDetailBox').hide().removeClass('open');
    $('#bgShow').css('z-index', '100');
  });
  
  $('#btnGo').on('click', function() {
    $('#pageShow').hide();
    $('#pagePreview').show();
  });

  var pageCrop = document.querySelector("#pageCrop");
  var alloycrop = null;
  var cancelFlag = false;
  
  $('#inputUpload').on('change', function(e) {
    e.stopPropagation();
    $('#pagePreview').hide();
    
    if($(this)[0].files.length > 0) {
      var _src = URL.createObjectURL($(this)[0].files[0]),
          _frameSrc = window.location.href + $('#bgCrop').attr('src'),
          _okSrc = window.location.href + 'img/btnOk.png',
          _cancelSrc = window.location.href + 'img/btnExchage.png';
      
      if (window.location.hostname == 'www.skyengine.cn') {
        _frameSrc = window.location.protocol + '//' + window.location.hostname + '/bj530/' + $('#bgCrop').attr('src'),
        _okSrc = window.location.protocol + '//' + window.location.hostname + '/bj530/' + './img/btnOk.png',
        _cancelSrc = window.location.protocol + '//' + window.location.hostname + '/bj530/' + './img/btnExchage.png';
      }
      console.log(_frameSrc, _okSrc, _cancelSrc);
      var cropBoxSize = getScaleSize(690, 1162),
          cropBoxW = parseInt(cropBoxSize.w),
          cropBoxH = parseInt(cropBoxSize.h);
      
      alloycrop = new AlloyCrop({
        image_src: _src,
        frame_src: _frameSrc,
        ok_src: _okSrc,
        cancel_src: _cancelSrc,
        width: cropBoxW,
        height: cropBoxH,
        output: 1,
        font_family: "FZLanTingHeiS",
        ok: function (base64, canvas) {
          pageCrop.style.display = "block";
          pageCrop.innerHTML = '<img src="'+base64+'" class="imgCrop pa"><img src="./img/imgTip1.png" class="imgTip1 pa">';
          $('#pageCrop').on('touchstart', function() {
            $('.imgTip1').hide();
          });
        },
        cancel: function () {
          $('#pagePreview').show();
          $('#imgUpload').attr('src', './img/btnExchage.png');
          $('#inputUpload').trigger('click');
          $('#btnOk').show();
        }
      });
    } else {
      if (alloycrop) {
        alloycrop.showItself();
        $('#btnOk').off('click').on('click', function() {
          if (!cancelFlag) {
            console.log('cancel one, click ok first')
          } else {
            console.log('cancel two, click ok more');
            alert('请选择一张图片');
          }
        })
        cancelFlag = true;
      }
    }
  });
  
  
})();