window.GlobalObject = 
{
    totalResult: 0,     //结果
    bgPlayFlag: null,
    firstHp: false,     //是否已经横屏
  
    firstLoad: true,         //第一次加载
    lightTime:1,            //开始页面灯亮之前的延时时间
    showResultTime:3,       //金奖显示时间

    bgAfterSpeed:400,
    bgBeforeSpeed:600,
    bgGroundSpeed:500,
    carSpeed:500, 
    bgSpeed:500,                //背景移动速度（车和人初始进入的速度）

    nextToTipHideTime: 2.5,       //进入下一个场景提示停留的时间
    
    firstRadioPosX:0.25,         //人和车初始进入的相对屏幕位置
    wheelAngularV:360,          //车子匀速行驶的车轮角速度

    firstJiaYouPosX:0.75,       //第一次加油后车移动到的位置
    firstJiaYouMoveTime:1.5,      //第一次加油后车运动的时间
    firstJiaYouPercent:1,       //第一次加油百分比

    //踩油门后
    personFront:0.45,            //人在前面的时候移动的位置
    carBack:0.25,               //车在后面移动的位置
    carBackTime:5,              //车减速的时间（人往前移动的时间）
    downPercent:0.4,            //减速百分比

    // + 不同能量对应的位置 允许有三种能量值
    personBack1:0.25,            //能量6  人往后移动的位置
    carFront1:0.85,               //能量6  车往前移动的位置
    carFrontTime1:2,              //能量6  车加速的时间（人往往后的时间）
    upPercent1:1,                //能量6  加速到百分比

    personBack2:0.25,            //能量3 人往后移动的位置
    carFront2:0.75,               //能量3  车往前移动的位置
    carFrontTime2:2,              //能量3  车加速的时间（人往往后的时间）
    upPercent2:0.7,                //能量3  加速到百分比

    personBack3:0.25,            //能量3  人往后移动的位置
    carFront3:0.75,               //能量3  车往前移动的位置
    carFrontTime3:2,              //能量3  车加速的时间（人往往后的时间）
    upPercent3:0.7,                //能量3  加速到百分比

    //答题后, 人移除去时的参数
    carBack0:0.25,               //车在后面移动的位置
    carBackTime0:5,              //车减速的时间（人往前移动的时间）
    downPercent0:null,            //减速百分比

    personEntorSpeed:100,       //换人进入时的速度

    playMusic:function(){
      var self = this;
      $('.musicControl').show();
      var audioBg = document.getElementById('audioBg');
      audioBg.play();
      self.bgPlayFlag = audioBg.paused ? false : true;
      document.addEventListener("WeixinJSBridgeReady", function () {
        audioBg.play();
        self.bgPlayFlag = audioBg.paused ? false : true;
      }, false);
      
      $('.musicControl').on('click', function() {
        if(audioBg.paused) {
          audioBg.play();
          self.bgPlayFlag = true;
          $('.musicControl .img').attr('src', './img/btnMusicOpen.png');
        } else {
          audioBg.pause();
          self.bgPlayFlag = false;
          $('.musicControl .img').attr('src', './img/btnMusicClose.png');
        }
      });
      
      // 各种浏览器兼容
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
          $('.musicControl .img').attr('src', './img/btnMusicClose.png');
        } else {
          if (self.bgPlayFlag) {
            audioBg.play();
            $('.musicControl .img').attr('src', './img/btnMusicOpen.png');
          } else {
            audioBg.pause();
            $('.musicControl .img').attr('src', './img/btnMusicClose.png');
          }
        }
        
      }, false);
      
    },

    submitInfo:function(name,phone,address,callbackSuc,callbackFail){
      if(name == null || name == '') { 
        alert('请填写您的姓名!');
        return;
      }

      if(phone == null || phone == '') {
        alert('请填写您的电话!');
        return;
      } else {
        var r = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
        if(!r.test(phone)){
          alert('请输入有效的手机号!');
          return;
        }
      }

      if(address == null || address == '') { 
        alert('请填写联系地址!');
        return;
      }
      //alert(1);

      var pdata = '';
  
      pdata = 'activity_id=2&name='+name+'&phone='+phone + '&address='+ address;
      //alert(pdata);
      pdata = encodeURI(pdata);
      $.ajax({
        type: 'POST',
        url: '/actmgr/apply_do.php',
        data: pdata,
        dataType: 'json',
        success: function(d){
          if(d.code == 200) {
            alert("预约成功！");
            callbackSuc();
          } else {
            alert(d.msg);
            callbackFail();
          }
        },
        error: function(){
          alert("预约失败！请稍后再试！");
          callbackFail();
        }
      });
      /*callbackSuc();
      if(true)
      {
          //提交成功

          callbackSuc();
      }
      else{
          //提交失败
          callbackFail();
      }*/
    },

    detail:function(){

    },

    showResult:function(total){/*
      if(!!wx && !!olympics_title && !!olympics_imgUrl && !!olympics_link && !!olympics_desc) {
        //根据得分分享不同内容
        var shareParam = {
          "title": olympics_title,
          "imgUrl": olympics_imgUrl,
          "link": olympics_link
        };
        if(total == 9){
          shareParam.desc = olympics_desc.replace('%level%','【脑洞清奇老司机】');
        }else if(total == 18){
          shareParam.desc = olympics_desc.replace('%level%','【冰上运动独孤求败】');
        }else {
          shareParam.desc = olympics_desc.replace('%level%','【freestyle 自成一派】');
        }
        
        wx.onMenuShareAppMessage(shareParam);
      }/**/
    }
    
}