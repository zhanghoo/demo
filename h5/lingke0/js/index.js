$(function() {

  var mainSwiper = new Swiper('.swiper-main',{
    direction : 'vertical',
    on: {
      slideChangeTransitionStart: function(){
        if(this.activeIndex == 0) {
          $('.bg').show();
          $('.top-box, .bottom-box').show();
        } else if(this.activeIndex == 1) {
          $('.bg').hide();
          $('.top-box, .bottom-box').hide();
        }
      },
    },
  });

  var paginationSwiper = new  Swiper('.swiper-pagination', {
    direction : 'vertical',
    slidesPerView: 3,
    centeredSlides: true
  });
  
  var contentSwiper = new Swiper('.swiper-content', {
    direction : 'vertical',
    nested:true,
    resistanceRatio: 0,
    controller:{
      control: paginationSwiper,
      by: 'slide'
    },
    on: {
      slideChangeTransitionStart: function() {
        if(this.activeIndex == 0) {
          $('.bg').hide();
        } else {
          $('.bg').show();
        }
      },
      slideChangeTransitionEnd: function(){
        $('.c-box').removeClass('in');
        var _boxNum = this.activeIndex - 1;
        $('.c-box-' + _boxNum).addClass('in');
      }
    }
  });
  
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
  
  var cBox0Size = getScaleSize(591, 719),
      cBox1Size = getScaleSize(591, 719),
      cBox2Size = getScaleSize(610, 833),
      cBox3Size = getScaleSize(590, 662),
      cBox4Size = getScaleSize(591, 847),
      cBox5Size = getScaleSize(589, 835),
      cBox6Size = getScaleSize(559, 848),
      cBox7Size = getScaleSize(693, 826),
      cBox8Size = getScaleSize(679, 729),
      cBox9Size = getScaleSize(516, 860);
  
  $('.c-box-0').css({'width': cBox0Size.w + 'px', 'height': cBox0Size.h + 'px'});
  $('.c-box-1').css({'width': cBox1Size.w + 'px', 'height': cBox1Size.h + 'px'});
  $('.c-box-2').css({'width': cBox2Size.w + 'px', 'height': cBox2Size.h + 'px'});
  $('.c-box-3').css({'width': cBox3Size.w + 'px', 'height': cBox3Size.h + 'px'});
  $('.c-box-4').css({'width': cBox4Size.w + 'px', 'height': cBox4Size.h + 'px'});
  $('.c-box-5').css({'width': cBox5Size.w + 'px', 'height': cBox5Size.h + 'px'});
  $('.c-box-6').css({'width': cBox6Size.w + 'px', 'height': cBox6Size.h + 'px'});
  $('.c-box-7').css({'width': cBox7Size.w + 'px', 'height': cBox7Size.h + 'px'});
  $('.c-box-8').css({'width': cBox8Size.w + 'px', 'height': cBox8Size.h + 'px'});
  $('.c-box-9').css({'width': cBox9Size.w + 'px', 'height': cBox9Size.h + 'px'});
  
  var imgDialog1W = 582;
  var imgDialog1H = 907;
  var imgDialog1BoxW = client_w * imgDialog1W / psdW;
  var imgDialog1BoxH = imgDialog1H * imgDialog1BoxW / imgDialog1W;
  var _intScale = 0.2;
  var _intdialog1W = imgDialog1BoxW.toFixed(2) * _intScale + 'px';
  var _intdialog1H = imgDialog1BoxH.toFixed(2) * _intScale + 'px';
  var dialog1W = imgDialog1BoxW.toFixed(2) + 'px';
  var dialog1H = imgDialog1BoxH.toFixed(2) + 'px';
  $('.dialog-1').css({'width': _intdialog1W, 'height': _intdialog1H});
  $('.d-box-item').hide();
  
  $('.btn-gift').on('click', function() {
    $('.d1-box').show();
    $('.d2-box').hide();
    $('.aside-box').css('display', 'flex');
    $('.dialog-1').animate({'width': dialog1W, 'height': dialog1H}, 500, function() {
      $('.d-box-item').show();
    })
  });
  
  $('.btn-get-gift').on('click', function() {
    $('.d1-box').show();
    $('.d2-box').hide();
    $('.aside-box').css('display', 'flex');
    $('.dialog-1').animate({'width': dialog1W, 'height': dialog1H}, 500, function() {
      $('.d-box-item').show();
    })
  });
  
  //点击提交按钮
  $('.btn-submit').on('click', function() {
    applySubmit();
    //提交成功之后的动作
    $('.d1-box').hide();
    $('.d2-box').show();
  });
  
  $('.btn-close-1').on('click', function() {
    $('.aside-box').hide();
    $('.dialog-1').css({'width': _intdialog1W, 'height': _intdialog1H});
    $('.d-box-item').hide();
    $('.input-name, .input-phone').val('');
  });
  
  $('.btn-close-2').on('click', function() {
    $('.aside-box').hide();
    $('.dialog-1').css({'width': _intdialog1W, 'height': _intdialog1H});
    $('.d-box-item').hide();
    $('.input-name, .input-phone').val('');
  });
  
  $('.pic-box').on('click', function() {
    var _this = $(this),
        _src = _this.attr('data-src');
    if (_this.hasClass('audio') && _src) {
      var audioBg = $('#audioBg')[0];
      $('.audio-box').show();
      var _audio = $('.video');
      _audio.attr('src', _src);
      _audio[0].play();
      audioBg.pause();
      $('.btn-music').removeClass('rotate');
      
      var _playFlag = audioBg.paused ? false : true;
      
      $('.audio-box').off('click').on('click', function(e) {
        e.stopPropagation();
        _audio[0].pause();
        $('.btn-music').removeClass('rotate');
        if (_playFlag) {
          audioBg.play();
          $('.btn-music').addClass('rotate');
        }
        $(this).hide();
      })
      
      _audio[0].addEventListener("pause", function() {
        if (_playFlag) {
          audioBg.play();
          $('.btn-music').addClass('rotate');
        }
        $('.audio-box').hide();
      })
      
    } else if(_src) {
      $('.image-box').show();
      var _img = $('.image-box').find('.img');
      _img.attr('src', _src);
      
      $('.image-box').off('click').on('click', function(e) {
        e.stopPropagation();
        $(this).hide();
      })
    } else {
      console.log('_src null: ', _src);
    }
  })
  
  function applySubmit(){
    var name = $('#apply_name').val();
    var phone = $('#apply_phone').val();
    console.log("name",name)
    console.log("phone",phone)
    if(name == null || name == '') { 
      alert('请填写您的姓名!');
      n();
      return;
    }
    if(phone == null || phone == '') {
      alert('请填写您的电话!');
      n();
      return;
    } else {
      var r = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
      if(!r.test(phone)){
        alert('请输入有效的手机号!');
        n();
        return;
      }
    }

    var pdata = '';
    pdata = 'activity_id=1&name='+name+'&phone='+phone;
    pdata = encodeURI(pdata);

    $.ajax({
      type: 'POST',
      url: '/actmgr/apply_do.php',
      data: pdata,
      dataType: 'json',
      success: function(d){
        if(d.code == 200) {
          //alert("恭喜您!预约成功~");
        } else {
          alert(d.msg);
        }
      },
      error: function(){
        alert("预约失败！请稍后再试！");
      }
    });
  }
  
})