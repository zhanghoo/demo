window.globalMyObject={
  input:function(){cc.log("input")},
  submit:function(o,i,c,n){
    cc.log("name = "+o),cc.log("phone = "+i)
    cc.log("name = "+i),cc.log("phone = "+o)
    if(o == null || o == '') { 
      alert('请填写您的姓名!');
      n();
      return;
    }
    if(i == null || i == '') {
      alert('请填写您的电话!');
      n();
      return;
    } else {
      var r = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
      if(!r.test(i)){
        alert('请输入有效的手机号!');
        n();
        return;
      }
    }

    var pdata = '';
    pdata = 'activity_id=4&name='+o+'&phone='+i;
    pdata = encodeURI(pdata);

    $.ajax({
      type: 'POST',
      url: '/mgr/apply_do.php',
      data: pdata,
      dataType: 'json',
      success: function(d){
        if(d.code == 200) {
          alert("恭喜您!预约成功~");
           c();
        } else {
          alert(d.msg);
        }
      },
      error: function(){
        alert("预约失败！请稍后再试！");
      }
    });
  },
  playVideo:function(o){
    var canvas = document.getElementById('GameCanvas');
    var cVideo = document.getElementById("cVideo");
    
    var btnMusic = document.getElementById('btnMusic');
    btnMusic.style.display = 'none';
    
    var cAudio = document.getElementById('cAudio');
    cAudio.style.display = 'none';
    cAudio.pause();
    
    var imgMusic = document.getElementById('imgMusic');
    imgMusic.src = './img/musicOpen.png';
    
    canvas.style.display = 'none';
    
    //点击的时候播放
    cVideo.style.zIndex = 9999;
    cVideo.play();
    // 添加微信的ready的自动播放
    document.addEventListener("WeixinJSBridgeReady", function() {
      cVideo.play(); 

    }, false);
    
    var closeEd = false;
    
    //苹果, click 的时候, 标签的时候, 跳到下一个场景
    cVideo.addEventListener("click", function() {
      cVideo.style.display = 'none';
      canvas.style.display = 'block';
   
      if (!closeEd) {
        cVideo.pause();
        cAudio.play();
        closeEd = true;
        o();
      }
      
      btnMusic.style.display = 'block';
      
    })
      
    //视频播放结束的时候, 跳到下一个场景
    cVideo.addEventListener("ended", function() {
      cVideo.style.display = 'none';
      canvas.style.display = 'block';

      if (!closeEd) {
        cVideo.pause();
        cAudio.play();
        closeEd = true;
        o();
      }
      
      btnMusic.style.display = 'block';
      
    })
      
    //视频暂停的时候, 跳到下一个场景
    cVideo.addEventListener("pause", function() {
      cVideo.style.display = 'none';
      canvas.style.display = 'block';
    
      if (!closeEd) {
        cVideo.pause();
        cAudio.play();
        closeEd = true;
        o();
      }
      
      btnMusic.style.display = 'block';
      
      
    })
  },
  playBgMusic:function(){
  },
  stopBgMusic:function(){
  },
  dialogScale1:.4,
  dialogTime:1.5,
  dialogUpRadio: 0.05
};