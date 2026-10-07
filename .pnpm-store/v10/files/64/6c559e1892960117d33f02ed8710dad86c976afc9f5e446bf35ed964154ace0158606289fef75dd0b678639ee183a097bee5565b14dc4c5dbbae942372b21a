'use strict';

function getTreeDiff(a, b) {
    const treeA = [];
    for(let el = a; el; el = el.parentElement){
        treeA.push(el);
    }
    const treeB = [];
    for(let el = b; el; el = el.parentElement){
        treeB.push(el);
    }
    let i = 0;
    for(;; i++){
        if (i >= treeA.length || i >= treeB.length || treeA[treeA.length - 1 - i] !== treeB[treeB.length - 1 - i]) {
            break;
        }
    }
    return [
        treeA.slice(0, treeA.length - i),
        treeB.slice(0, treeB.length - i),
        treeB.slice(treeB.length - i)
    ];
}

exports.getTreeDiff = getTreeDiff;
