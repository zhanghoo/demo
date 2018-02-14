$(function() {
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
  
  /*var cBox0Size = getScaleSize(274, 269);
  $('.loadingDesc').css({'width': cBox0Size.w + 'px', 'height': cBox0Size.h + 'px'});*/

  if (window.orientation === 180 || window.orientation === 0) {  
    var cBox0Size = getScaleSize(274, 269);
    $('.loadingDesc').css({'width': cBox0Size.w + 'px', 'height': cBox0Size.h + 'px'});
  } 
  if (window.orientation === 90 || window.orientation === -90 ){   
    var cBox0Size = getScaleSize(274, 269, 2, 1334);
    $('.loadingDesc').css({'width': cBox0Size.w + 'px', 'height': cBox0Size.h + 'px'});
    //初始即横屏
    if(!$('#splash').hasClass('firstHped')) {
      $('#splash').addClass('firstHped');
    }
  }
 
  $('.cover-0').addClass('show');
  
  $('.cover').each(function() {
    $(this).on('animationend', function() {
      var _this = $(this),
        _next = _this.next('.cover'),
        _index = _this.index();
        _next.addClass('show');
        if(_index == $('.cover').length) {
          $('#splash').addClass('end');
        }
    });
  });
  
  //判断手机横竖屏状态：
  window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) { 

    } 
    if (window.orientation === 90 || window.orientation === -90 ){
      if(!$('#splash').hasClass('firstHped')) {
        $('#splash').addClass('firstHped');
        //第一次从竖屏到横屏
        if ($('#splash').hasClass('loaded')) {
          // 如果已经加载完了 
          $('#splash').hide();
          $('.bigCover').addClass('firstHped');
          // 触发车灯开启
          window.GlobalObject.firstHp = true;
        }
      }
      if($('.bigCover').hasClass('loaded') && $('#splash').hasClass('firstHped')) {
        // 如果已经加载完了, 并且已经 是 第一次横屏 或者 初始是横屏了
        $('.bigCover').addClass('loaded')
      }
    } 
  }, false); 
  
})