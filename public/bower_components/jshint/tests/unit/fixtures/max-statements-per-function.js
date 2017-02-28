function functionWith8Statements() {
    var i = 0;
    var s = 0;

    // function declarations count 1
    function innerFunction() {
        // this does not count for the outer function
        var i2 = 1;
        i2 = 2;
    }

    i = 2;
    if (i > 0) {
        while(i<10) {
            s +=i;
        }
    }
    return i;
}