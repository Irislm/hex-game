import { TILES } from './NewConfig';

const getRandomInt = function(min, max) {
    let ratio = cc.random0To1();
    return min + Math.floor((max - min) * ratio);
};
cc.Class({
    extends: cc.Component,

    properties: {
        shapePic: {
            default: null,
            type: cc.SpriteFrame,
        },
        tileH: 122,
        tileScale: 0.7,
        type1: {
            default: null,
            type: cc.SpriteFrame,
        },
        type2: {
            default: null,
            type: cc.SpriteFrame,
        },
        type3: {
            default: null,
            type: cc.SpriteFrame,
        },
        type4: {
            default: null,
            type: cc.SpriteFrame,
        },
        type5: {
            default: null,
            type: cc.SpriteFrame,
        },
        type6: {
            default: null,
            type: cc.SpriteFrame,
        }
    },

    onLoad () {
        this.setTile();
    },

    start () {

    },

    // update (dt) {},

    setTile() {
        this.tiles = TILES;
        let tileType = this.tiles[getRandomInt(0, this.tiles.length)];
        let hexes = tileType.hexesOfShapes[getRandomInt(0, tileType.hexesOfShapes.length)];
        this.setSpriteFrame(hexes, this[`type${tileType.type}`]);
        this.node.scale = this.tileScale;
    },

    transferHex2Pixel(hex, h) {
        let size = h / 2;
        let x = Math.sqrt(3) * size * (hex.q + hex.r / 2);
        let y = 3/2 * size * hex.r;
        return cc.p(x, y);
    },

    setSpriteFrame(hexes, tilePic) {
        hexes.forEach(hex => {
            const pos = this.transferHex2Pixel({ q: hex[0], r: hex[1]}, this.tileH);
            let node = new cc.Node('shape');
            let sprite = node.addComponent(cc.Sprite);
            sprite.spriteFrame = tilePic;
            node.x = pos.x;
            node.y = pos.y;
            node.parent = this.node;
        });
    }
});
