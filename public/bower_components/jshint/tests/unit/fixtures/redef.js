(function () {
    if (b) {
        var a = 1;
    } else {
        var a = 2;
    }
}());

function test(foo) {
    var foo = foo || false;
}

function z() {
    var b = 1;
    function y() {
        function x() {
            var b = 2;
        }
    }
}