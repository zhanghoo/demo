require = function t(e, r, c) {
    function o(a, n) {
        if (!r[a]) {
            if (!e[a]) {
                var s = "function" == typeof require && require;
                if (!n && s) return s(a, !0);
                if (i) return i(a, !0);
                var h = new Error("Cannot find module '" + a + "'");
                throw h.code = "MODULE_NOT_FOUND", h;
            }
            var _ = r[a] = {
                exports: {}
            };
            e[a][0].call(_.exports, function(t) {
                var r = e[a][1][t];
                return o(r || t);
            }, _, _.exports, t, e, r, c);
        }
        return r[a].exports;
    }
    for (var i = "function" == typeof require && require, a = 0; a < c.length; a++) o(c[a]);
    return o;
}({
    Avg_Black_White: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "79bf5Zsr4ZA7ow7351wvmf1", "Avg_Black_White");
        var c = t("../Shaders/ccShader_Default_Vert.js"), o = t("../Shaders/ccShader_Default_Vert_noMVP.js"), i = t("../Shaders/ccShader_Avg_Black_White_Frag.js"), a = cc.Class({
            "extends": cc.Component,
            properties: {
                isAllChildrenUser: !1
            },
            onLoad: function() {
                this._use();
            },
            _use: function() {
                this._program = new cc.GLProgram(), cc.sys.isNative ? (cc.log("use native GLProgram"), 
                this._program.initWithString(o, i), this._program.link(), this._program.updateUniforms()) : (this._program.initWithVertexShaderByteArray(c, i), 
                this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION), 
                this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR), 
                this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS), 
                this._program.link(), this._program.updateUniforms()), this.setProgram(this.node._sgNode, this._program);
            },
            setProgram: function(t, e) {
                if (cc.sys.isNative) {
                    var r = cc.GLProgramState.getOrCreateWithGLProgram(e);
                    t.setGLProgramState(r);
                } else t.setShaderProgram(e);
                var c = t.children;
                if (c) for (var o = 0; o < c.length; o++) this.setProgram(c[o], e);
            },
            update: function(t) {}
        });
        cc.BlackWhite = e.exports = a, cc._RF.pop();
    }, {
        "../Shaders/ccShader_Avg_Black_White_Frag.js": "ccShader_Avg_Black_White_Frag",
        "../Shaders/ccShader_Default_Vert.js": "ccShader_Default_Vert",
        "../Shaders/ccShader_Default_Vert_noMVP.js": "ccShader_Default_Vert_noMVP"
    } ],
    againGame: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "c40d7oYRjJEarBE6hIrYGQb", "againGame"), cc.Class({
            "extends": cc.Component,
            properties: {},
            start: function() {},
            againGame: function() {
                cc.director.loadScene("mainScene");
            }
        }), cc._RF.pop();
    }, {} ],
    carMoveFinish: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "df445uuT9dLUrskJD7jRu81", "carMoveFinish"), cc.Class({
            "extends": cc.Component,
            properties: {
                m_resultAllNode: cc.Node,
                m_titleSprite: cc.Node
            },
            start: function() {},
            carMoveFinish: function() {
                this.m_titleSprite.active = !1, this.m_resultAllNode.active = !0;
            }
        }), cc._RF.pop();
    }, {} ],
    ccShader_Avg_Black_White_Frag: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "11788Yo6thBEq80gkh4qAb9", "ccShader_Avg_Black_White_Frag"), e.exports = "\n#ifdef GL_ES\nprecision mediump float;\n#endif\nvarying vec2 v_texCoord;\n\nvoid main()\n{\n    vec4 v = texture2D(CC_Texture0, v_texCoord).rgba;\n    float f = (v.r + v.g + v.b) / 3.0;\n    gl_FragColor = vec4(f , f ,f , v);\n}\n", 
        cc._RF.pop();
    }, {} ],
    ccShader_Default_Vert_noMVP: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "d2453OTnAFMl5ZMrhOSbBce", "ccShader_Default_Vert_noMVP"), e.exports = "\nattribute vec4 a_position;\n attribute vec2 a_texCoord;\n attribute vec4 a_color;\n varying vec2 v_texCoord;\n varying vec4 v_fragmentColor;\n void main()\n {\n     gl_Position = CC_PMatrix  * a_position;\n     v_fragmentColor = a_color;\n     v_texCoord = a_texCoord;\n }\n", 
        cc._RF.pop();
    }, {} ],
    ccShader_Default_Vert: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "94501T0G2BE4Jz625dUK0h/", "ccShader_Default_Vert"), e.exports = "\nattribute vec4 a_position;\nattribute vec2 a_texCoord;\nattribute vec4 a_color;\nvarying vec2 v_texCoord;\nvarying vec4 v_fragmentColor;\nvoid main()\n{\n    gl_Position = CC_PMatrix * a_position;\n    v_fragmentColor = a_color;\n    v_texCoord = a_texCoord;\n}\n", 
        cc._RF.pop();
    }, {} ],
    moveDisNode_result: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "0323a8xet1HaY7DfWOq1U8c", "moveDisNode_result"), cc.Class({
            "extends": cc.Component,
            properties: {},
            start: function() {},
            changeOverScene: function() {
                cc.director.getScheduler().schedule(function(t) {
                    cc.director.loadScene("overScene");
                }, this, 1, 0, 2, !1);
            }
        }), cc._RF.pop();
    }, {} ],
    overGame: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "515falvzWhIs6Ufet/klgC4", "overGame"), cc.Class({
            "extends": cc.Component,
            properties: {},
            onLoad: function() {},
            start: function() {}
        }), cc._RF.pop();
    }, {} ],
    playTitle1: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "7d959E+7f9M6KJL1EJbEGt5", "playTitle1"), cc.Class({
            "extends": cc.Component,
            properties: {
                m_aniPlayTitle2: cc.Animation
            },
            onLoad: function() {},
            start: function() {},
            playTitle2: function() {
                this.m_aniPlayTitle2.play("titileAction2");
            }
        }), cc._RF.pop();
    }, {} ],
    removeShareReturn: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "691b9RXHExF9L5qEV4grD4o", "removeShareReturn"), cc.Class({
            "extends": cc.Component,
            properties: {},
            start: function() {},
            removeSelf: function() {
                this.node.active = !1;
            },
            addSelf: function() {
                this.node.active = !0;
            }
        }), cc._RF.pop();
    }, {} ],
    startGame: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "e6617Q6zOhMtLncRh2RDyq0", "startGame"), cc.Class({
            "extends": cc.Component,
            properties: {
                m_btnStart: cc.Node,
                m_circle: cc.Node
            },
            start: function() {},
            onStartGame: function() {
                this.m_btnStart.active = !1, this.m_circle.active = !0;
            }
        }), cc._RF.pop();
    }, {} ],
    testDrawLine: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "73e08x94vFNKqnF7buAJZXQ", "testDrawLine"), cc.Class({
            "extends": cc.Component,
            properties: {
                m_arrayPoint: null,
                m_arrayPoint2: null
            },
            onLoad: function() {
                this.m_arrayPoint = [], this.m_arrayPoint2 = [], this.m_arrayPoint = [ cc.p(100, 100), cc.p(200, 200), cc.p(150, 300), cc.p(180, 400) ], 
                this.m_arrayPoint2 = [ cc.p(300, 100), cc.p(400, 200), cc.p(350, 300), cc.p(380, 400) ];
                for (var t = 0; t < 10; ++t) this.m_arrayPoint2.push(cc.p(640 * Math.random(), 960 * Math.random()));
                this.drawLine1(), this.drawLine3();
            },
            drawLine1: function() {
                var t = this.getComponent(cc.Graphics);
                t.moveTo(this.m_arrayPoint[0].x, this.m_arrayPoint[0].y);
                for (var e = 1; e < this.m_arrayPoint.length; ++e) t.lineTo(this.m_arrayPoint[e].x, this.m_arrayPoint[e].y), 
                cc.log(this.m_arrayPoint[e].x);
                t.stroke();
            },
            drawLine2: function() {
                var t = this.getComponent(cc.Graphics);
                t.moveTo(this.m_arrayPoint2[0].x, this.m_arrayPoint2[0].y);
                for (var e = 0; e < this.m_arrayPoint2.length; ++e) t.lineTo(this.m_arrayPoint2[e].x, this.m_arrayPoint2[e].y), 
                t.stroke(), t.moveTo(this.m_arrayPoint2[e].x, this.m_arrayPoint2[e].y);
            },
            drawLine3: function() {
                var t = this.getComponent(cc.Graphics);
                this.drawArrayLine(t, this.m_arrayPoint2);
            },
            drawArrayLine: function(t, e) {
                e.length;
                return;
            },
            getNormalVector: function(t) {
                var e = Math.sqrt(t.x * t.x + t.y * t.y);
                return cc.p(t.x / e, t.y / e);
            },
            getControlPoint: function(t, e) {
                var r = this.getNormalVector(cc.p(e.x - t.x, e.y - t.y));
                return cc.p(e.x + 20 * r.x, e.y + 20 * r.y);
            },
            getControlPointX: function(t, e) {
                return e.x + 20 * this.getNormalVector(cc.p(e.x - t.x, e.y - t.y)).x;
            },
            getControlPointY: function(t, e) {
                return e.y + 20 * this.getNormalVector(cc.p(e.x - t.x, e.y - t.y)).y;
            },
            start: function() {}
        }), cc._RF.pop();
    }, {} ],
    titleActFinich: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "453850B42FDgY0UD/TvsSDq", "titleActFinich"), cc.Class({
            "extends": cc.Component,
            properties: {
                m_btn_again: cc.Node,
                m_btn_attend: cc.Node
            },
            start: function() {},
            titleActFinish: function() {
                this.m_btn_again.active = !0, this.m_btn_attend.active = !0, cc.log("titleActFinish---------------------");
            }
        }), cc._RF.pop();
    }, {} ],
    touchMove: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "c7ecfAsZJZNpJAxv/45JSGP", "touchMove"), cc.Class({
            "extends": cc.Component,
            properties: {
                car: cc.Node,
                carSpeed: 1e3,
                curIndex: 0,
                drawNode: cc.Node,
                posLeftNode: cc.Node,
                posRightNode: cc.Node,
                drawLeftNode: cc.Node,
                drawRightNode: cc.Node,
                m_particleSmoke: cc.Prefab,
                m_arrayPos: 0,
                m_carMoving: !1,
                m_isTouchOne: !0,
                m_leftPSmoke: null,
                m_rightPSmoke: null,
                m_preLeftDrawPos: cc.p,
                m_preRightDrawPos: cc.p,
                m_arrayLeftDrawPos: [],
                m_arrayRightDrawPos: [],
                m_isTouchFinish: !1,
                m_carTotalDis: 0,
                m_moveDisNode: cc.Node,
                m_scoreNum1: cc.Node,
                m_scoreNum2: cc.Node,
                m_moveDisRadio: .01,
                m_countSprite: cc.Node
            },
            onLoad: function() {
                var t = this;
                this.m_arrayPos = [];
                var e = this.getComponent(cc.Graphics), r = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !0,
                    onTouchBegan: function(r, c) {
                        if (cc.log("onTouchBegan"), 0 == t.m_carMoving && 0 == t.m_isTouchFinish && t.m_isTouchOne) {
                            t.m_isTouchOne = !1, e.clear();
                            var o = c.getTouches()[0].getLocation();
                            return t.m_arrayPos = [], t.curIndex = 0, t.m_arrayPos.push(t.getWorldToNodePos(t.car, o)), 
                            t.startTime(), !0;
                        }
                        return !1;
                    },
                    onTouchMoved: function(e, r) {
                        if (0 == t.m_carMoving && 0 == t.m_isTouchFinish) {
                            var c = r.getTouches()[0].getLocation();
                            t.isPushPos(t.m_arrayPos[t.m_arrayPos.length - 1], c) && t.m_arrayPos.push(t.getWorldToNodePos(t.car, c));
                        }
                    },
                    onTouchEnded: function(e, r) {
                        if (0 == t.m_carMoving && 0 == t.m_isTouchFinish) {
                            t.m_isTouchOne = !0;
                            var c = r.getTouches()[0].getLocation();
                            t.m_arrayPos.push(t.getWorldToNodePos(t.car, c)), t.touchFinish();
                        }
                    },
                    onTouchCancelled: function(e, r) {
                        if (0 == t.m_carMoving && 0 == t.m_isTouchFinish) {
                            t.m_isTouchOne = !0;
                            var c = r.getTouches()[0].getLocation();
                            t.m_arrayPos.push(t.getWorldToNodePos(t.car, c)), t.touchFinish();
                        }
                    }
                });
                cc.eventManager.addListener(r, this.node);
            },
            getWorldToNodePos: function(t, e) {
                return t.parent.convertToNodeSpaceAR(e);
            },
            isPushPos: function(t, e) {
                return Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y)) > 5;
            },
            touchFinish: function() {
                this.m_isTouchFinish = !0, this.carStartMove();
            },
            endTime: function() {
                0 == this.m_isTouchFinish && (this.m_isTouchFinish = !0, this.carStartMove());
            },
            startTime: function() {
                var t = this, e = 3;
                cc.loader.loadRes("textures/countdown_num_" + e + ".png", cc.SpriteFrame, function(e, r) {
                    t.m_countSprite.getComponent(cc.Sprite).spriteFrame = r;
                }), cc.director.getScheduler().schedule(function(r) {
                    e--, cc.loader.loadRes("textures/countdown_num_" + e + ".png", cc.SpriteFrame, function(e, r) {
                        t.m_countSprite.getComponent(cc.Sprite).spriteFrame = r;
                    }), 0 == e && t.endTime();
                }, this, 1, 2, 1, !1);
            },
            carStartMove: function() {
                this.m_countSprite.active = !1;
                var t = this.m_arrayPos[0], e = this.m_arrayPos[1], r = cc.p(e.x - t.x, e.y - t.y), c = this.getACosAngle(cc.p(0, 1), r);
                r.x < 0 ? this.car.setRotation(-c) : this.car.setRotation(c), this.car.setPosition(this.m_arrayPos[0].x, this.m_arrayPos[0].y);
                var o = this.drawLeftNode.getComponent(cc.Graphics), i = this.drawRightNode.getComponent(cc.Graphics), a = this.posLeftNode.convertToWorldSpace(cc.p(0, 0)), n = this.posRightNode.convertToWorldSpace(cc.p(0, 0));
                o.clear(), i.clear(), this.m_preLeftDrawPos = cc.p(a.x, a.y), this.m_preRightDrawPos = cc.p(n.x, n.y), 
                this.m_arrayLeftDrawPos = [], this.m_arrayLeftDrawPos.push(this.m_preLeftDrawPos), 
                this.m_arrayRightDrawPos = [], this.m_arrayRightDrawPos.push(this.m_preRightDrawPos), 
                this.initParticle(), this.m_carMoving = !0, this.carMoveDis();
            },
            carMoveDis: function() {
                var t = this;
                if (++this.curIndex < this.m_arrayPos.length) {
                    var e = this.m_arrayPos[this.curIndex - 1], r = this.m_arrayPos[this.curIndex];
                    if (this.curIndex < this.m_arrayPos.length - 1) {
                        var c = cc.p(r.x - e.x, r.y - e.y), o = this.getACosAngle(cc.p(0, 1), c);
                        c.x < 0 ? this.car.runAction(cc.rotateTo(.1, -o)) : this.car.runAction(cc.rotateTo(.1, o));
                    }
                    var i = Math.sqrt((r.x - e.x) * (r.x - e.x) + (r.y - e.y) * (r.y - e.y)), a = cc.moveTo(i / this.carSpeed, cc.p(r.x, r.y));
                    this.car.runAction(cc.sequence(a, cc.callFunc(function() {
                        t.drawLineTracks(), t.carMoveDis();
                    })));
                } else this.endGame();
            },
            endGame: function() {
                this.m_carMoving = !1, this.car.stopAllActions(), this.smallParticle();
                var t = this.m_carTotalDis * this.m_moveDisRadio;
                t > 99 && (t = 99);
                var e = Math.floor(.1 * t), r = t - 10 * e, c = this;
                cc.loader.loadRes("textures/num_" + e + ".png", cc.SpriteFrame, function(t, e) {
                    c.m_scoreNum1.getComponent(cc.Sprite).spriteFrame = e;
                }), cc.loader.loadRes("textures/num_" + r + ".png", cc.SpriteFrame, function(t, e) {
                    c.m_scoreNum2.getComponent(cc.Sprite).spriteFrame = e;
                }), cc.log("您行驶了" + Math.floor(this.m_carTotalDis) + "米"), this.m_moveDisNode.active = !0;
            },
            drawLineTracks: function() {
                var t = this.drawLeftNode.getComponent(cc.Graphics), e = this.drawRightNode.getComponent(cc.Graphics), r = this.drawLeftNode.convertToNodeSpaceAR(this.posLeftNode.convertToWorldSpace(cc.p(0, 0))), c = this.drawRightNode.convertToNodeSpaceAR(this.posRightNode.convertToWorldSpace(cc.p(0, 0)));
                this.m_preLeftDrawPos = r, this.m_arrayLeftDrawPos.push(cc.p(r.x, r.y)), t.clear(), 
                this.drawArrayLine(t, this.m_arrayLeftDrawPos), this.m_preRightDrawPos = c, this.m_arrayRightDrawPos.push(cc.p(c.x, c.y)), 
                e.clear(), this.drawArrayLine(e, this.m_arrayRightDrawPos);
            },
            getNormalVector: function(t) {
                var e = Math.sqrt(t.x * t.x + t.y * t.y);
                return cc.p(t.x / e, t.y / e);
            },
            drawArrayLine: function(t, e) {
                var r = e.length;
                t.moveTo(e[0].x, e[0].y);
                for (var c = 1; c < r; ++c) t.lineTo(e[c].x, e[c].y);
                t.stroke();
            },
            getACosAngle: function(t, e) {
                var r = Math.sqrt(t.x * t.x + t.y * t.y) * Math.sqrt(e.x * e.x + e.y * e.y);
                this.m_carTotalDis += r;
                var c = (t.x * e.x + t.y * e.y) / r;
                return Math.acos(c) * (180 / 3.1415926);
            },
            start: function() {},
            initParticle: function() {
                this.m_leftPSmoke = cc.instantiate(this.m_particleSmoke), this.m_rightPSmoke = cc.instantiate(this.m_particleSmoke), 
                this.m_leftPSmoke.parent = this.node, this.m_rightPSmoke.parent = this.node;
            },
            setParticle: function() {
                var t = this.posLeftNode.convertToWorldSpace(cc.p(0, 0)), e = this.posRightNode.convertToWorldSpace(cc.p(0, 0)), r = this.getWorldToNodePos(this.m_leftPSmoke, t), c = this.getWorldToNodePos(this.m_rightPSmoke, e);
                this.m_leftPSmoke.setPosition(r), this.m_rightPSmoke.setPosition(c);
            },
            smallParticle: function() {
                this.m_leftPSmoke.getComponent(cc.ParticleSystem).stopSystem(), this.m_rightPSmoke.getComponent(cc.ParticleSystem).stopSystem();
            },
            update: function(t) {
                this.m_carMoving && this.setParticle();
            }
        }), cc._RF.pop();
    }, {} ],
    trueStartGame: [ function(t, e, r) {
        "use strict";
        cc._RF.push(e, "90469NTNAZCbbD+fq5+1S3G", "trueStartGame"), cc.Class({
            "extends": cc.Component,
            properties: {},
            start: function() {},
            trueStartGame: function() {
                cc.director.loadScene("mainScene");
            }
        }), cc._RF.pop();
    }, {} ]
}, {}, [ "Avg_Black_White", "againGame", "carMoveFinish", "moveDisNode_result", "overGame", "playTitle1", "removeShareReturn", "startGame", "testDrawLine", "titleActFinich", "touchMove", "trueStartGame", "ccShader_Avg_Black_White_Frag", "ccShader_Default_Vert", "ccShader_Default_Vert_noMVP" ]);