require=function e(t,o,n){function c(d,r){if(!o[d]){if(!t[d]){var l="function"==typeof require&&require;if(!r&&l)return l(d,!0);if(i)return i(d,!0);var a=new Error("Cannot find module '"+d+"'");throw a.code="MODULE_NOT_FOUND",a}var s=o[d]={exports:{}};t[d][0].call(s.exports,function(e){var o=t[d][1][e];return c(o||e)},s,s.exports,e,t,o,n)}return o[d].exports}for(var i="function"==typeof require&&require,d=0;d<n.length;d++)c(n[d]);return c}({HelloWorld:[function(e,t,o){"use strict";cc._RF.push(t,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({extends:cc.Component,properties:{label:{default:null,type:cc.Label},text:"Hello, World!"},onLoad:function(){this.label.string=this.text},update:function(e){}}),cc._RF.pop()},{}],handMove:[function(e,t,o){"use strict";cc._RF.push(t,"82fcfmi5UJKkILM+GYeEuCr","handMove"),cc.Class({extends:cc.Component,properties:{},start:function(){var e=cc.moveBy(.1,cc.p(0,-25)),t=cc.moveBy(.5,cc.p(0,25));this.node.runAction(cc.sequence(e,t).repeatForever())}}),cc._RF.pop()},{}],mainJs:[function(e,t,o){"use strict";cc._RF.push(t,"d264f+mnh5JhIyKol/kG+AG","mainJs"),cc.Class({extends:cc.Component,properties:{m_fisrtStart:{default:null,type:cc.Node},m_nodeNote:{default:null,type:cc.Node},m_nodeBg1:{default:null,type:cc.Node},m_nodeBg2:{default:null,type:cc.Node},m_firstStart:{default:null,type:cc.Node},m_nodeBg:{default:null,type:cc.Node},m_nodeBgAfter:{default:null,type:cc.Node},m_nodeBgGround:{default:null,type:cc.Node},m_nodeBgBefore:{default:null,type:cc.Node},m_nodeRule:{default:null,type:cc.Node},m_nodeCar:{default:null,type:cc.Node},m_nodePerson:{default:null,type:cc.Node},m_nodeWheelL:{default:null,type:cc.Node},m_nodeWheelR:{default:null,type:cc.Node},m_nodeBtnComeOn:{default:null,type:cc.Node},m_nodeLoaddingB:{default:null,type:cc.Node},m_nodeLoadingT:{default:null,type:cc.Node},m_nodePercent:{default:null,type:cc.Label},m_nodeGold:{default:null,type:cc.Node},m_nodeDialogEnergyEmpty:{default:null,type:cc.Node},m_nodeDialogQA1:{default:null,type:cc.Node},m_nodeDialogQA2:{default:null,type:cc.Node},m_nodeDialogQA3:{default:null,type:cc.Node},m_nodeResult:{default:null,type:cc.Node},m_lblResult:{default:null,type:cc.Label},m_nodeCover:{default:null,type:cc.Node},m_nodeNextNote2:{default:null,type:cc.Node},m_nodeNextNote3:{default:null,type:cc.Node},m_nodeImgCover:{default:null,type:cc.Node},m_nodeImgTipText1:{default:null,type:cc.Node},m_nodeImgTipText2:{default:null,type:cc.Node},m_nodeImgTipText3:{default:null,type:cc.Node},m_nodeWonResult:{default:null,type:cc.Node},m_ebName:{default:null,type:cc.EditBox},m_ebPhone:{default:null,type:cc.EditBox},m_ebAddress:{default:null,type:cc.EditBox},m_nodeSubSuc:{default:null,type:cc.Node},m_nodeShareBg:{default:null,type:cc.Node},m_nodeDetail:{default:null,type:cc.Node},m_nodeTipArrowAfter:{default:null,type:cc.Node},m_nodeTipArrowBefore:{default:null,type:cc.Node},m_firstClickAble:!1,m_curPercent:100,m_curQustion:0,m_curComeOn:1,m_totalResult:0,m_arrayAnswer:null,m_clickAble:!1},start:function(){var e=this;e.m_arrayAnswer=[[2,1,3],[2,3,1],[1,2,3]];var t=null;window.GlobalObject.firstLoad?(clearInterval(t),t=setInterval(function(){window.GlobalObject.firstHp?(clearInterval(t),e.scheduleOnce(function(){e.m_nodeBg2.active=!0;var t=cc.fadeIn(1);e.m_nodeNote.opacity=0,e.m_nodeNote.active=!0,e.m_nodeNote.runAction(t),e.m_firstClickAble=!0},window.GlobalObject.lightTime)):console.log("尚未第一次横屏")},200)):e.loadMainScene()},firstStart:function(){var e=this;e.m_firstClickAble&&(window.GlobalObject.playMusic(),e.loadMainScene())},loadMainScene:function(){var e=this;e.m_fisrtStart.active=!1,this.m_nodeBgAfter.getChildren()[0].active=!0,this.m_nodeBgAfter.getChildren()[1].active=!0,this.m_nodeBgAfter.getChildren()[2].active=!0,this.m_nodeBgAfter.getChildren()[3].active=!0,this.m_nodeBgAfter.getChildren()[4].active=!0,this.m_nodeBgGround.getChildren()[0].active=!0,this.m_nodeBgGround.getChildren()[1].active=!0,this.m_nodeBgGround.getChildren()[2].active=!0,this.m_nodeBgGround.getChildren()[3].active=!0,this.m_nodeBgGround.getChildren()[4].active=!0,this.m_nodeBgBefore.getChildren()[0].active=!0,this.m_nodeBgBefore.getChildren()[1].active=!0,this.m_nodeBgBefore.getChildren()[2].active=!0,this.m_nodeBgBefore.getChildren()[3].active=!0,this.m_nodeBgBefore.getChildren()[4].active=!0,e.setCarAndPerson(),e.carAndRoleEnter()},startMoveBg:function(){var e=this,t=this.m_nodeBgAfter.getContentSize(),o=this.m_nodeBgAfter.getPosition().x,n=this.m_nodeBgAfter.getChildren()[1].getContentSize(),c=this.m_nodeBgAfter.getChildren()[2].getContentSize(),i=this.m_nodeBgAfter.getChildren()[3].getContentSize(),d=cc.moveBy(t.width/window.GlobalObject.bgAfterSpeed,cc.p(-t.width,0)),r=cc.moveBy(n.width/window.GlobalObject.bgAfterSpeed,cc.p(-n.width,0)),l=cc.moveBy(c.width/window.GlobalObject.bgAfterSpeed,cc.p(-c.width,0)),a=cc.moveBy(i.width/window.GlobalObject.bgAfterSpeed,cc.p(-i.width,0));this.m_nodeBgAfter.runAction(cc.sequence(d,r,l,a,cc.callFunc(function(){e.m_nodeBgAfter.setPositionX(o)})).repeatForever());var s=this.m_nodeBgGround.getContentSize(),u=this.m_nodeBgGround.getPosition().x,m=this.m_nodeBgGround.getChildren()[1].getContentSize(),h=this.m_nodeBgGround.getChildren()[2].getContentSize(),_=this.m_nodeBgGround.getChildren()[3].getContentSize(),g=cc.moveBy(s.width/window.GlobalObject.bgGroundSpeed,cc.p(-s.width,0)),f=cc.moveBy(m.width/window.GlobalObject.bgGroundSpeed,cc.p(-m.width,0)),v=cc.moveBy(h.width/window.GlobalObject.bgGroundSpeed,cc.p(-h.width,0)),w=cc.moveBy(_.width/window.GlobalObject.bgGroundSpeed,cc.p(-_.width,0));this.m_nodeBgGround.runAction(cc.sequence(g,f,v,w,cc.callFunc(function(){e.m_nodeBgGround.setPositionX(u)})).repeatForever());var p=this.m_nodeBgBefore.getContentSize(),b=this.m_nodeBgBefore.getPosition().x,C=this.m_nodeBgBefore.getChildren()[1].getContentSize(),B=this.m_nodeBgBefore.getChildren()[2].getContentSize(),y=this.m_nodeBgBefore.getChildren()[3].getContentSize(),A=cc.moveBy(p.width/window.GlobalObject.bgBeforeSpeed,cc.p(-p.width,0)),N=cc.moveBy(C.width/window.GlobalObject.bgBeforeSpeed,cc.p(-C.width,0)),O=cc.moveBy(B.width/window.GlobalObject.bgBeforeSpeed,cc.p(-B.width,0)),P=cc.moveBy(y.width/window.GlobalObject.bgBeforeSpeed,cc.p(-y.width,0));this.m_nodeBgBefore.runAction(cc.sequence(A,N,O,P,cc.callFunc(function(){e.m_nodeBgBefore.setPositionX(b)})).repeatForever())},closeRule:function(){var e=this;this.m_nodeRule.destroy(),e.m_nodeBtnComeOn.active=!0,e.m_clickAble=!0,e.m_nodePercent.node.active=!0,e.m_nodePercent.node.color=new cc.Color(241,198,106),e.m_nodeGold.active=!0,e.cutTime(),e.addArrow()},addArrow:function(){this.m_nodeTipArrowAfter.active=!0,this.m_nodeTipArrowBefore.active=!0;var e=cc.moveBy(.5,cc.p(25,0)),t=cc.moveBy(.5,cc.p(-25,0));this.m_nodeTipArrowAfter.runAction(cc.sequence(e,t).repeatForever()),this.m_nodeTipArrowBefore.runAction(cc.sequence(e.clone(),t.clone()).repeatForever())},deleteArrow:function(){this.m_nodeTipArrowAfter&&(this.m_nodeTipArrowAfter.destroy(),this.m_nodeTipArrowBefore.destroy(),this.m_nodeTipArrowAfter=null)},deleteHand:function(){this.m_nodeBtnComeOn.getChildren()[0]&&this.m_nodeBtnComeOn.getChildren()[0].destroy()},cutTime:function(){var e=this;e.m_nodeImgCover.active=!0,e.m_nodeCover.active=!0;var t=3;e.m_nodeImgCover.getChildByName("imgNum"+t).active=!0,e.schedule(function(){t--;for(var o=0;o<4;++o)e.m_nodeImgCover.getChildByName("imgNum"+o).active=!1;e.m_nodeImgCover.getChildByName("imgNum"+t).active=!0,0==t&&e.scheduleOnce(function(){e.m_nodeImgCover.active=!1,e.m_nodeCover.active=!1,e.m_nodeImgCover.getChildByName("imgNum0").active=!1},.5)},1,2,1)},changePercent:function(e){this.m_nodePercent.string=Math.floor(100*e)+"%",this.showPercentGold(e)},showPercentGold:function(e){var t=this,o=Math.ceil(10*e);t.m_nodeGold.setPositionX(30*(10-o)*.5);for(var n=1;n<11;++n)t.m_nodeGold.getChildByName("imgGold"+n).active=n<=o},showRule:function(){window.GlobalObject.firstLoad?this.m_nodeRule.active=!0:(console.log("第二次游戏不需要弹出规则页"),this.closeRule())},setCarAndPerson:function(){var e=cc.director.getVisibleOrigin(),t=this.m_nodeCar.getContentSize(),o=e.x-.5*t.width,n=this.m_nodeCar.getParent().convertToNodeSpaceAR(cc.p(o,0));this.m_nodeCar.setPositionX(n.x),this.m_nodePerson.setPositionX(n.x)},carAndRoleEnter:function(){var e=this,t=cc.director.getVisibleSize(),o=cc.director.getVisibleOrigin(),n=this.m_nodeCar.getPosition(),c=this.m_nodeCar.getParent().convertToWorldSpaceAR(n),i=o.x+t.width*window.GlobalObject.firstRadioPosX-c.x,d=i/window.GlobalObject.carSpeed,r=cc.moveBy(d,cc.p(i,0));this.m_nodeCar.runAction(cc.sequence(r,cc.callFunc(function(){e.startMoveBg(),e.showRule()}))),this.m_nodePerson.runAction(cc.sequence(r.clone(),cc.callFunc(function(){})));var l=cc.rotateBy(1,window.GlobalObject.wheelAngularV);this.m_nodeWheelL.runAction(l.repeatForever()),this.m_nodeWheelR.runAction(l.clone().repeatForever())},setPercentBar:function(e){this.m_nodeLoadingT.setScale(e,1),this.changePercent(e)},btnComeOn:function(){if(this.m_clickAble){this.deleteArrow(),this.m_nodeBtnComeOn.getChildren()[0].active=!1,this.m_clickAble=!1;var e=this,t=cc.director.getVisibleSize(),o=cc.director.getVisibleOrigin(),n=this.m_nodeCar.getPosition(),c=this.m_nodeCar.getParent().convertToWorldSpaceAR(n),i=o.x+t.width*window.GlobalObject.firstJiaYouPosX,d=this.m_nodeCar.getParent().convertToNodeSpaceAR(cc.p(i,c.y)),r=cc.moveTo(window.GlobalObject.firstJiaYouMoveTime,d);this.m_nodeCar.runAction(cc.sequence(r.easing(cc.easeSineIn(window.GlobalObject.firstJiaYouMoveTime)),cc.callFunc(function(){e.carBack(window.GlobalObject.personFront,window.GlobalObject.carBack,window.GlobalObject.carBackTime,window.GlobalObject.downPercent)})));var l=function(){var t=e.m_nodeLoadingT.getScaleX();e.changePercent(t)};this.schedule(l,0);var a=cc.scaleTo(window.GlobalObject.firstJiaYouMoveTime,window.GlobalObject.firstJiaYouPercent,1);this.m_nodeLoadingT.runAction(cc.sequence(a,cc.callFunc(function(){e.unschedule(l),e.changePercent(window.GlobalObject.firstJiaYouPercent)})))}},carBack:function(e,t,o,n,c){var i=this,d=cc.director.getVisibleSize(),r=cc.director.getVisibleOrigin();e=r.x+d.width*e,t=r.x+d.width*t;var l=this.m_nodePerson.getPosition(),a=this.m_nodeCar.getPosition(),s=this.m_nodePerson.getParent().convertToWorldSpaceAR(l),u=this.m_nodeCar.getParent().convertToWorldSpaceAR(a),m=this.m_nodePerson.getParent().convertToNodeSpaceAR(cc.p(e,s.y)),h=this.m_nodeCar.getParent().convertToNodeSpaceAR(cc.p(t,u.y)),_=cc.moveTo(o,m),g=cc.moveTo(o,h);if(this.m_nodeCar.runAction(cc.sequence(g.easing(cc.easeSineIn(o)),cc.callFunc(function(){c?c():i.showAddNote()}))),this.m_nodePerson.runAction(_),n){var f=function(){var e=i.m_nodeLoadingT.getScaleX();i.changePercent(e)};this.schedule(f,0);var v=cc.scaleTo(o,n,1);this.m_nodeLoadingT.runAction(cc.sequence(v,cc.callFunc(function(){i.unschedule(f),i.changePercent(n)})))}},showAddNote:function(){this.m_nodeImgCover.active=!0,this.m_nodeDialogEnergyEmpty.active=!0},refresh:function(){},getEnergy:function(e){this.m_nodeDialogEnergyEmpty.active=!1,this["m_nodeDialogQA"+ ++this.m_curQustion].active=!0},answerQues:function(e,t){var o=this;o.m_nodeCover.active=!0,e.target.getChildByName("imgDialog1").active=!1,e.target.getChildByName("imgDialogAns2").active=!0,o.scheduleOnce(function(){o.m_nodeImgCover.active=!1,o.m_nodeCover.active=!1,o.showComeOnNote(),e.target.getParent().destroy();var n=o.m_arrayAnswer[o.m_curQustion-1][t-1];switch(o.m_curComeOn=n,o.m_curComeOn){case 1:o.m_totalResult+=6;break;case 2:case 3:o.m_totalResult+=3}o.carFront(window.GlobalObject["personBack"+n],window.GlobalObject["carFront"+n],window.GlobalObject["carFrontTime"+n],window.GlobalObject["upPercent"+n])},1)},showComeOnNote:function(){var e=this;e["m_nodeImgTipText"+e.m_curQustion].active=!0},hideComeOnNote:function(){var e=this;e["m_nodeImgTipText"+e.m_curQustion].destroy()},showNextNote:function(){var e=this;e["m_nodeNextNote"+(e.m_curQustion+1)].opacity=255},hideNextNote:function(){var e=this;e["m_nodeNextNote"+(e.m_curQustion+1)].opacity=0},showWon:function(){},carFront:function(e,t,o,n){var c=this,i=cc.director.getVisibleSize(),d=cc.director.getVisibleOrigin();e=d.x+i.width*e,t=d.x+i.width*t;var r=this.m_nodePerson.getPosition(),l=this.m_nodeCar.getPosition(),a=this.m_nodePerson.getParent().convertToWorldSpaceAR(r),s=this.m_nodeCar.getParent().convertToWorldSpaceAR(l),u=this.m_nodePerson.getParent().convertToNodeSpaceAR(cc.p(e,a.y)),m=this.m_nodeCar.getParent().convertToNodeSpaceAR(cc.p(t,s.y)),h=cc.moveTo(o,u),_=cc.moveTo(o,m);this.m_nodeCar.runAction(cc.sequence(_.easing(cc.easeSineIn(o)),cc.callFunc(function(){var e=.5*-c.m_nodePerson.getContentSize().width/i.width;c.carBack(e,window.GlobalObject.carBack0,window.GlobalObject.carBackTime0,window.GlobalObject.downPercent0,function(){c.m_curQustion<3?c.personEnter():c.showResultNode()}),c.hideComeOnNote(),1==c.m_curComeOn&&c.showWon()}))),this.m_nodePerson.runAction(h);var g=function(){var e=c.m_nodeLoadingT.getScaleX();c.changePercent(e)};this.schedule(g,0);var f=cc.scaleTo(o,n,1);this.m_nodeLoadingT.runAction(cc.sequence(f,cc.callFunc(function(){c.unschedule(g),c.changePercent(n)})))},personEnter:function(){var e=this;e.setPercentBar(1),e.showNextNote();var t=cc.director.getVisibleSize(),o=cc.director.getVisibleOrigin(),n=e.m_nodePerson.getContentSize(),c=o.x+t.width+.5*n.width,i=e.m_nodePerson.getParent().convertToNodeSpaceAR(cc.p(c,0));e.m_nodePerson.setPositionX(i.x);var d=t.width*(1-window.GlobalObject.firstRadioPosX)+.5*n.width,r=d/window.GlobalObject.personEntorSpeed,l=cc.moveBy(r,cc.p(-d,0));e.m_nodePerson.getComponent("cc.Animation").play("personAni_"+(this.m_curQustion+1)),e.scheduleOnce(function(){e.hideNextNote()},window.GlobalObject.nextToTipHideTime),e.m_nodePerson.runAction(cc.sequence(l,cc.callFunc(function(){e.m_nodeBtnComeOn.getChildren()[0].active=!0,e.m_nodeBtnComeOn.active=!0,e.m_clickAble=!0})))},showResultNode:function(){this.m_nodePerson.destroy(),this.m_nodeBtnComeOn.active=!1,this.m_clickAble=!1,this.m_nodeWonResult.active=!0,18==this.m_totalResult?this.m_nodeWonResult.getChildren()[1].active=!0:9==this.m_totalResult?this.m_nodeWonResult.getChildren()[3].active=!0:this.m_nodeWonResult.getChildren()[2].active=!0,window.GlobalObject.totalResult=this.m_totalResult,console.log("最后答题的分数: ",window.GlobalObject.totalResult),window.GlobalObject.showResult(this.m_totalResult);var e=this;e.m_lblResult.string=this.m_totalResult,e.scheduleOnce(function(){e.m_nodeWonResult.destroy(),e.m_nodeResult.active=!0},window.GlobalObject.showResultTime)},input:function(e){var t=this;window.GlobalObject.submitInfo(this.m_ebName.string,this.m_ebPhone.string,this.m_ebAddress.string,function(){t.m_ebName.string="",t.m_ebPhone.string="",t.m_ebAddress.string=""},function(){})},again:function(e){window.GlobalObject.firstLoad=!1,cc.director.loadScene("mainScene")},share:function(e){this.m_nodeShareBg.active=!0},shareClose:function(e){this.m_nodeShareBg.active=!1},detail:function(e){window.GlobalObject.detail(),this.m_nodeResult.active=!1,this.m_nodeDetail.active=!0},detailClose:function(e){this.m_nodeDetail.active=!1,this.m_nodeResult.active=!0}}),cc._RF.pop()},{}],startJs:[function(e,t,o){"use strict";cc._RF.push(t,"5cb4et3V4VM7KpXBfMvMZ8G","startJs"),cc.Class({extends:cc.Component,properties:{m_nodeNote:{default:null,type:cc.Node},m_nodeBg1:{default:null,type:cc.Node},m_nodeBg2:{default:null,type:cc.Node}},start:function(){var e=this;e.scheduleOnce(function(){e.m_nodeBg2.active=!0,e.m_nodeNote.active=!0},window.GlobalObject.lightTime)},onStart:function(e){cc.director.loadScene("mainScene")}}),cc._RF.pop()},{}]},{},["HelloWorld","handMove","mainJs","startJs"]);