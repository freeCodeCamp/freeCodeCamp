var x = 0;
var foo = {
    x: 1
};
with( foo) {
    x = 2;
}

function tt() {
    "use strict";

    var foo;
    with (foo = 2 ){
        x = 3;
    }
}