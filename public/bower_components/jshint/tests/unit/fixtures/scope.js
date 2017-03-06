/*jshint undef: true*/

function repeatedloops() {
    for (var i = 0; i < 1; i++) {
        for (var j = 0; j < 1; j++) {
            var x = 2;
        }
    }

    for (i = 0; i < 1; i++) {
        for (j = 0; j < 1; j++) {
            x = i;
        }
    }
    
    while (true) {
        var aa = true;
    }
    while (false) {
        aa = false;
    }
    
    if (true) {
        var bb = true;
    }
    if (false) {
        bb = false;
    }
    
    function xx2() {
        var cc = 3;
        bb = true;
    }
    
    function xx3() {
        bb = true;
        cc = 4;
    }
}

function repeatedloops() {
    bb = 2;
}

function trycatch() {
    try {
        var xx = 1;
    } catch (err) {
    } finally {
        var yy = 1;
    }

    xx++;
    yy++;
}