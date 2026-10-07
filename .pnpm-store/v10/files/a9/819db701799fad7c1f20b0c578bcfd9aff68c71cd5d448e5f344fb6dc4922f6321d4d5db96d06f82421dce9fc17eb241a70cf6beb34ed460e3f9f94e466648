'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "resolveSearchParameters", {
    enumerable: true,
    get: function() {
        return resolveSearchParameters;
    }
});
function resolveSearchParameters(current) {
    var parent = current.getParent();
    var states = [
        current.getHelper().state
    ];
    while(parent !== null){
        states = [
            parent.getHelper().state
        ].concat(states);
        parent = parent.getParent();
    }
    return states;
}
