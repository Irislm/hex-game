// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        hexSide: 5,
        tileH: 12,
        tilePic: {
          // 棋盘背景
          default: null,
          type: cc.SpriteFrame
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.setBoardGrid();

    },

    start () {

    },

    // update (dt) {},

    setBoardGrid() {
      this.hexes = [];
      this.boardFrameList = [];
      let q = this.hexSide - 1;
      let maxRowLength = 2 * this.hexSide - 1;
      let boundary = [];
      for (let i = 0; i < maxRowLength; i++) {
        if (i < this.hexSide) {
          boundary.push([-this.hexSide + 1, i]);
        } else {
          boundary.push([i - maxRowLength + 1, this.hexSide - 1]);
        }
      }
      boundary.forEach(v => {
        let oneRow = [];
        for (let r = v[0]; r <= v[1]; r++) {

          oneRow.push(this.transferHex2Pixel({q, r}, this.tileH));
        }
        q--;
        this.hexes.push(oneRow);
      })
      this.hexes.forEach(hexes => {
        this.setSpriteFrame(hexes);
      });
    },

    transferHex2Pixel(hex, h) {
        let size = h / 2;
        let x = Math.sqrt(3) * size * (hex.q + hex.r / 2);
        let y = 3/2 * size * hex.r;
        return cc.p(x, y);
    },

    setSpriteFrame(hexes) {
      for (let index = 0; index < hexes.length; index++) {
        let node = new cc.Node('frame');
        let sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = this.tilePic;
        node.x = hexes[index].x;
        node.y = hexes[index].y;
        node.parent = this.node;
        hexes[index].spriteFrame = node;
        this.setShadowNode(node);
        this.setFillNode(node);
        // 保存当前棋盘格子的信息，用于后面落子判定及消除逻辑等。
        this.boardFrameList.push(node);
      }
    },
      
    setShadowNode(node) {
      const newNode = new cc.Node('frame');
      newNode.addComponent(cc.Sprite);
      newNode.name = 'shadowNode';
      newNode.opacity = 150;
      newNode.parent = node;
    },

    setFillNode(node) {
      const newNode = new cc.Node('frame');
      newNode.addComponent(cc.Sprite);
      newNode.name = 'fillNode';
      newNode.parent = node;
    }
});
