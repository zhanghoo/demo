var gWxy_audio=null,gWxy_isMusicOn=!1,gWxy_isFirstStart=!0;cc.sys.isNative||((gWxy_audio=document.createElement("audio")).src=cc.url.raw("resources/audio/music_bg.mp3"),document.addEventListener("WeixinJSBridgeReady",function(){gWxy_audio.play(),gWxy_audio.loop="loop",gWxy_isMusicOn=!0,gWxy_audio.volume=.5}),gWxy_audio.onLoad=function(){gWxy_audio.play(),gWxy_audio.loop="loop",gWxy_audio.volume=.5}),window.meter=0;
var gWxy_loadAttendUrl=function(){console.log("报名参加")},
	gWxy_onStartGame=function(){console.log("一键启动")},
	gWxy_againGame=function(){console.log("再漂一次",window.meter)},
	gWxy_share=function(){console.log("分享: ",window.meter)};
setInterval(function() {
	console.log(window.meter)
	interShare(window.meter)
}, 1000)