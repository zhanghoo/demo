var gWxy_audio=null,gWxy_isMusicOn=!1,gWxy_isFirstStart=!0;cc.sys.isNative||((gWxy_audio=document.createElement("audio")).src=cc.url.raw("resources/audio/music_bg.mp3"),document.addEventListener("WeixinJSBridgeReady",function(){gWxy_audio.play(),gWxy_audio.loop="loop",gWxy_isMusicOn=!0,gWxy_audio.volume=.5}),gWxy_audio.onLoad=function(){gWxy_audio.play(),gWxy_audio.loop="loop",gWxy_audio.volume=.5});var gWxy_loadAttendUrl=function(){cc.log("报名参加")};