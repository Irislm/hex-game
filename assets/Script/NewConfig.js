// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

export const TILES = [
    {
        type: 1,
        hexesOfShapes: [
            [[0,0]]
        ]
    }, 
    {
        type: 2,
        hexesOfShapes: [
            [[0, 0], [0, 1], [1, 0], [1, -1]],
            [[0, 0], [0, 1], [1, 0], [1, 1]],
            [[0, 0], [-1, 1], [1, 0], [0, 1]],
        ]
    },
    {
        type: 3,
        hexesOfShapes: [
            [[0, 0], [1, -1], [-1, 1], [-2, 2]],
            [[0, 0], [0, 1], [0, 2], [0, -1]],
            [[0, 0], [1, 0], [2, 0], [-1, 0]],
        ]
    },
    {
        type: 4,
        hexesOfShapes: [
            [[0, 0], [1, 0], [1, -1], [-1, 1]],
            [[0, 0], [0, 1], [0, -1], [1, -1]],
            [[0, 0], [0, 1], [1, 0], [2, -1]],
            [[0, 0], [1, 0], [-1, 0], [0, -1]],
            [[0, 0], [1, 0], [-1, 0], [0, 1]],
            [[0, 0], [0, 1], [0, -1], [-1 ,1]],
        ]
    },
    {
        type: 5,
        hexesOfShapes: [
            [[0, 0], [1, 0], [0, 1], [-1, 2]],
            [[0, 0], [0, 1], [0, 2], [1, 1]],
            [[0, 0], [0, 1], [0, 2], [-1, 1]],
            [[0, 0], [1, 0], [2, 0], [2, -1]],
            [[0, 0], [1, 0], [1, -1], [2, -2]],
        ]
    },
    {
        type: 6,
        hexesOfShapes: [
            [[0, 0], [0, 1], [-1, 2], [-2, 2]],
            [[0, 0], [1, 0], [1, 1], [-1, 1]],
            [[0, 0], [0, 1], [1, 1], [1, -1]],
            [[0, 0], [-1, 0], [0, 1], [-1, 2]],
            [[0, 0], [0, -1], [1, 0], [2, -1]],
        ]
    }
]
