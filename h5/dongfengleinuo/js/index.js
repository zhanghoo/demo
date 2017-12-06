$(function() {
	// var loadPerctNum = 0;
	// // document.addEventListener('DOMContentLoaded', function(){
	// var imgs = document.querySelectorAll('img'), //所有图片资源
	// 	show = 0, //百分比
	// 	num = 0; //加载完成的个数
	// var loadPerct = document.getElementById('loadPerct');
	// var all = imgs.length;
	// loadPerct.innerHTML = 10;
	// [].slice.call(imgs).forEach(function(element,index){
	// 	//不管是否加载成功，都num+1
	// 	element.addEventListener('load',function(){
	// 		num++;
	// 		show = Math.floor(100*num/all);
	// 		loadPerct.innerHTML = show;
	// 		loadPerctNum = show;
	// 	})
	// 	element.addEventListener('error',function(){
	// 		num++;
	// 		show = Math.floor(100*num/all);
	// 		loadPerct.innerHTML = show;
	// 		loadPerctNum = show;
	// 	})
	// })
	// // })

	var client_w = $(window).width();
	var client_h = $(window).height();
	var r_h=1207*(client_w/750);

	// common
	$('.logo').css('top', r_h * 0.0191 + 'px');

	// page1
	$('.mailbox').css('top', r_h * 0.2046 + 'px');
	$('.mailbox').css('height', r_h * 0.2601 + 'px');

	$('.text').css('top', r_h * 0.5104 + 'px');
	$('.text').css('height', r_h * 0.145 + 'px');
	$('.text>li').css('height', r_h * 0.03625 + 'px');
	$('.text>li').css('line-height', r_h * 0.03625 + 'px');

	$('.loading').css('bottom', r_h * 0.058 + 'px');
	$('.loading').css('height', $('.loading').width() + 'px');
	$('.loading').css('line-height', $('.loading').width() + 'px');

	// page2
	$('.title2').css('height', r_h * 0.2534 + 'px');

	$('.envelope').css('top', r_h * 0.2682 + 'px');
	$('.envelope').css('height', r_h * 0.4703 + 'px');

	$('.page2-img0').css('top', r_h * 0.7088 + 'px');
	$('.page2-img0').css('height', r_h * 0.049 + 'px');

	$('.page2-img1').css('top', r_h * 0.665 + 'px');
	$('.page2-img1').css('height', r_h * 0.084 + 'px');

	$('.fingerprint').css('bottom', r_h * 0.0282 + 'px');
	$('.fingerprint').css('height', r_h * 0.1185 + 'px');

	$('.page2-bottom').css('height', r_h * 0.0563 + 'px');

	// page6
	$('.page6-img0').css('top', r_h * 0.2299 + 'px');
	$('.page6-img0').css('height', r_h * 0.304 + 'px');
	$('.page6-img1').css('top', r_h * 0.1847 + 'px');
	$('.page6-img1').css('height', r_h * 0.2411 + 'px');
	$('.page6-img2').css('top', r_h * 0.0886 + 'px');
	$('.page6-img2').css('height', r_h * 0.261 + 'px');
	$('.page6-img3').css('top', r_h * 0.0456 + 'px');
	$('.page6-img3').css('height', r_h * 0.2585 + 'px');

	$('.desc6').css('bottom', r_h * 0.3272 + 'px');
	$('.desc6').css('height', r_h * 0.1707 + 'px');

	$('.page6-btn0').css('bottom', r_h * 0.0655 + 'px');
	$('.page6-btn0').css('height', r_h * 0.079 + 'px');

	$('.page6-btn1').css('bottom', r_h * 0.1649 + 'px');
	$('.page6-btn1').css('height', r_h * 0.079 + 'px');

	// page7
	$('.page7-envelope').css('top', r_h * 0.1193 + 'px');
	$('.page7-envelope').css('height', r_h * 0.7829 + 'px');

	$('.close').css('top', r_h * 0.319 + 'px');

	$('.input-box').css('top', r_h * 0.4656 + 'px');
	$('.input-box').css('height', r_h * 0.3049 + 'px');

	$('.page7-btn0').css('top', r_h * 0.7821 + 'px');
	$('.page7-btn0').css('height', r_h * 0.0688 + 'px');

	//page1
	var loadPerctNum = 0;
	var int = null
	clearInterval(int);
	int = setInterval(function() {
		if(loadPerctNum >= 100) {
			clearInterval(int);
			setTimeout(function() {
				$('.text').addClass('enter');
				setTimeout(function() {
					$('#page1').addClass('leave');
					$('#page2').show();
					setTimeout(function() {
						$('#page1').hide().removeClass('leave');
					}, 2000);
				}, 4000)
			}, 2000);
		}
		loadPerctNum += 10;
		loadPerctNum = loadPerctNum > 100 ? 100 : loadPerctNum;
		$('#loadPerct').text(loadPerctNum);
	}, 100);

	//page2
	var int2;
	$('#btn-finger').off().on('touchstart', function(e) {
		if(e.cancelable){
			if(!e.defaultPrevented){
				e.preventDefault();
			};
		};
		int2 = setTimeout(function() {
			$('.envelope').addClass('leave');
				setTimeout(function() {
					$('#page2').addClass('leave');
					setTimeout(function() {
						$('#page2').hide().removeClass('leave');
						eraseCanvas('eraseBox3', 'eraseCanvas3', 'img/img-page3-top.jpg', function() {
							$('#eraseBox3').hide();
						});	
					}, 2000);
				}, 2000);
		}, 2000);
	}).on('touchend', function(e) {
		clearTimeout(int2);
	}).on('contextmenu', function(e) {
		if(e.cancelable){
			if(!e.defaultPrevented){
				e.preventDefault();
			};
		};
	});

	//page3
	touchSwiper('#page3', '#page3 .bg-bottom', function() {
		$('#page4').show(function() {
			eraseCanvas('eraseBox4', 'eraseCanvas4', 'img/img-page4-top.jpg', function() {
				$('#eraseBox4').hide();
			});
		});
		setTimeout(function() {
			$('#page3').hide();
		}, 2000)
	});
	$('#slideDown3').off().on('touchstart', function() {
		$('#page4').show(function() {
			eraseCanvas('eraseBox4', 'eraseCanvas4', 'img/img-page4-top.jpg', function() {
				$('#eraseBox4').hide();
			});
		});
		$('#page3').css('transform', 'translateY(100%)').css('transition', 'transform 2s ease');
		setTimeout(function() {
			$('#page3').hide();
		}, 2000);
	});

	//page4
	touchSwiper('#page4', '#page4 .bg-bottom', function() {
		$('#page5').show(function() {
			eraseCanvas('eraseBox5', 'eraseCanvas5', 'img/img-page5-top.jpg', function() {
				$('#eraseBox5').hide();
			});
		});
		setTimeout(function() {
			$('#page4').hide();
		}, 2000);
	});
	$('#slideDown4').off().on('touchstart', function() {
		$('#page5').show(function() {
			eraseCanvas('eraseBox5', 'eraseCanvas5', 'img/img-page5-top.jpg', function() {
				$('#eraseBox5').hide();
			});
		});
		$('#page4').css('transform', 'translateY(100%)').css('transition', 'transform 2s ease');
		setTimeout(function() {
			$('#page4').hide();
		}, 2000);
	});

	//page5
	touchSwiper('#page5', '#page5 .bg-bottom', function() {
		$('#page6').show();
		setTimeout(function() {
			$('#page5').hide();
			$('.img-box').addClass('enter');
		}, 2000);
	})
	$('#slideDown5').off().on('touchstart', function() {
		$('#page6').show();
		$('#page5').css('transform', 'translateY(100%)').css('transition', 'transform 2s ease');
		setTimeout(function() {
			$('#page5').hide();
			$('.img-box').addClass('enter');
		}, 2000);
	});

	//page6
	$('#btn-contect').off().on('touchstart', function(e) {
		e.preventDefault();
		$('#page7').show();
	});

	//page7
	$('#btn-close').off().on('touchstart', function(e) {
		e.preventDefault();
		$('#page7').hide();
	});

})

function eraseCanvas(box, el, pic, callback) {
	var canvas = document.getElementById(el), 
		ctx = canvas.getContext("2d");
	var x1, y1, a = 30, timeout, totimes = 100, distance = 30;
	var saveDot = [];
	var canvasBox = document.getElementById(box);
	canvas.width = canvasBox.clientWidth;
	canvas.height = canvasBox.clientHeight;
	var img = new Image();
	img.src = pic;
	img.onload = function () {
		var w = canvas.height*img.width/img.height;
		ctx.drawImage(img, (canvas.width-w)/2, 0, w, canvas.height);
		tapClip()
	};
	function getClipArea(e, hastouch){
		var x = hastouch ? e.targetTouches[0].pageX : e.clientX;
		var y = hastouch ? e.targetTouches[0].pageY : e.clientY;
		var ndom = canvas;
		while(ndom.tagName!=="BODY"){
			x -= ndom.offsetLeft;
			y -= ndom.offsetTop;
			ndom = ndom.parentNode;
		}
		return {
			x: x,
			y: y
		}
	}
	//通过修改globalCompositeOperation来达到擦除的效果
	function tapClip() {
		var hastouch = "ontouchstart" in window ? true : false,
			tapstart = hastouch ? "touchstart" : "mousedown",
			tapmove = hastouch ? "touchmove" : "mousemove",
			tapend = hastouch ? "touchend" : "mouseup";
		var area;
		var x2,y2;
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.lineWidth = a * 2;
		ctx.globalCompositeOperation = "destination-out";
		window.addEventListener(tapstart, tapstartHandler);
		window.addEventListener(tapend, function() {
			window.removeEventListener(tapstart, tapstartHandler);
		});
		function tapstartHandler(e) {
			clearTimeout(timeout);
			if(e.cancelable){
				if(!e.defaultPrevented){
					e.preventDefault();
				};
			};
			area = getClipArea(e, hastouch);
			x1 = area.x;
			y1 = area.y;
			drawLine(x1, y1);
			this.addEventListener(tapmove, tapmoveHandler);
			this.addEventListener(tapend, function () {
				this.removeEventListener(tapmove, tapmoveHandler);
				//检测擦除状态
				timeout = setTimeout(function () {
					var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
					var dd = 0;
					for (var x = 0; x < imgData.width; x += distance) {
						for (var y = 0; y < imgData.height; y += distance) {
							var i = (y * imgData.width + x) * 4;
							if (imgData.data[i + 3] > 0) { dd++ }
						}
					}
					if (dd / (imgData.width * imgData.height / (distance * distance)) < 0.8) {
						canvas.className = "noOp";
						callback();
					}
				}, totimes)
			});
			function tapmoveHandler(e) {
				clearTimeout(timeout);
				if(e.cancelable){
					if(!e.defaultPrevented){
						e.preventDefault();
					};
				};
				area = getClipArea(e, hastouch);
				x2 = area.x;
				y2 = area.y;
				drawLine(x1, y1, x2, y2);
				x1 = x2;
				y1 = y2;
			}
		}
	}
	function drawLine(x1, y1, x2, y2){
		ctx.save();
		ctx.beginPath();
		if(arguments.length==2){
			ctx.arc(x1, y1, a, 0, 2 * Math.PI);
			ctx.fill();
		}else {
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.stroke();
		}
		ctx.restore();
	}
	//使用clip来达到擦除效果
	function otherClip() {
		var hastouch = "ontouchstart" in window ? true : false,
			tapstart = hastouch ? "touchstart" : "mousedown",
			tapmove = hastouch ? "touchmove" : "mousemove",
			tapend = hastouch ? "touchend" : "mouseup";
		var area;
		canvas.addEventListener(tapstart, function (e) {
			clearTimeout(timeout);
			if(e.cancelable){
				if(!e.defaultPrevented){
					e.preventDefault();
				};
			};
			area = getClipArea(e, hastouch);
			x1 = area.x;
			y1 = area.y;
			ctx.save();
			ctx.beginPath();
			ctx.arc(x1, y1, a, 0, 2 * Math.PI);
			ctx.clip();
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.restore();
			canvas.addEventListener(tapmove, tapmoveHandler);
			canvas.addEventListener(tapend, function () {
				canvas.removeEventListener(tapmove, tapmoveHandler);
				timeout = setTimeout(function () {
					var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
					var dd = 0;
					for (var x = 0; x < imgData.width; x += distance) {
						for (var y = 0; y < imgData.height; y += distance) {
							var i = (y * imgData.width + x) * 4;
							if (imgData.data[i + 3] > 0) {
								dd++
							}
						}
					}
					if (dd / (imgData.width * imgData.height / (distance * distance)) < 0.4) {
						canvas.className = "noOp";
					}
				}, totimes)
			});
			function tapmoveHandler(e) {
				if(e.cancelable){
					if(!e.defaultPrevented){
						e.preventDefault();
					};
				};
				area = getClipArea(e, hastouch);
				x2 = area.x;
				y2 = area.y;
				var asin = a * Math.sin(Math.atan((y2 - y1) / (x2 - x1)));
				var acos = a * Math.cos(Math.atan((y2 - y1) / (x2 - x1)));
				var x3 = x1 + asin;
				var y3 = y1 - acos;
				var x4 = x1 - asin;
				var y4 = y1 + acos;
				var x5 = x2 + asin;
				var y5 = y2 - acos;
				var x6 = x2 - asin;
				var y6 = y2 + acos;
				ctx.save();
				ctx.beginPath();
				ctx.arc(x2, y2, a, 0, 2 * Math.PI);
				ctx.clip();
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.restore();
				ctx.save();
				ctx.beginPath();
				ctx.moveTo(x3, y3);
				ctx.lineTo(x5, y5);
				ctx.lineTo(x6, y6);
				ctx.lineTo(x4, y4);
				ctx.closePath();
				ctx.clip();
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.restore();
				x1 = x2;
				y1 = y2;
			}
		})
	}
}

function touchSwiper(box, el, callback) {
	$(el).off().on('touchstart', function(e) {
        var _el = $(this), _box = $(box);
        e.preventDefault();
        var startY = e.originalEvent.changedTouches[0].pageY;
        _el.off().on('touchmove', function(e) {
            e.preventDefault();
            var moveY = e.originalEvent.changedTouches[0].pageY;
            var distance = moveY - startY, direction = distance > 0 ? 'down' : 'up';
            if(direction == 'down') {
                _box.css('transform', 'translateY(' + distance + 'px)');
            }
        }).on('touchend', function(e) {
            e.preventDefault();
            var endY = e.originalEvent.changedTouches[0].pageY;
            var distance = endY - startY, direction = distance > 0 ? 'down' : 'up';
            if(direction == 'down' && distance > 200) {
                _box.css('transform', 'translateY(100%)');
                callback();
            } else {
                _box.css('transform', 'translateY(0px)');
            }
        })
    });
}

// JavaScript Document
//判断客户终端是ios 还是android 控制字号大小
var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
}

//判断是否是ipad
if(browser.versions.trident){
    //alert("is ie");
	
}
if(browser.versions.android){
    document.getElementById('text').style.fontSize=14+'px';
}