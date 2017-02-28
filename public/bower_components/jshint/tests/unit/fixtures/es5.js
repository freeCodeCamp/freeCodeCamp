var a = [
    1,
    2,
];

var b = {
    a: 1,
    b: 2,
};

(function () {
    var _x;

    var obj = {
        get x() { return _x; },
        set x(value) { _x = value; }
    };

    var obj2 = {
        get x() { return _x; },
        name: 'jshint',
        set x(value) { _x = value; }
    };

    var onlyGetter1 = {
        get x() { return _x; }
    };

    var onlyGetter2 = {
        get x() { return _x; },
        get y() { return _x; },
        a: 1
    };

    var onlySetter = {
        set x(value) { _x = value; }
    };

    // Check for duplicate members
    var dup = {
        get x() { return _x; },
        set x(value) { _x = value; },
        x: 'sup?'
    };

    var dup2 = {
        get x() { return _x; },
        get x() { return _x + 1; }
    };

    var dup3 = {
        get x() { return _x; },
        set x(value) { _x = value; },
        set x(value) { _x = value - 1; }
    };

    var parameters = {
        get x(a) { return _x; },
        get y(a, b) { return _x; },
        get z() { return _x; },
        
        set x() { _x = 1; },
        set y(a) { _x = a; },
        set z(a, b) { _x = a; }
    };
    
    var nameless = {
        get () { return _x; },
        set (value) { _x = value; }
    };
    
    // Regression test for a bug when a getter followed a setter produced a faulty
    // Duplicate Member warning.
    var setThenGet = {
        set x(value) { _x = value; },
        get x() { return _x; }
    };

    var onlySetter2 = {
        set x
            (value) { this._x = value; }
    };
}());
