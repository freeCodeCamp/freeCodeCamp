function foo() {
    try {
        // try something
    } catch (e) {
        // catch any throws
        var e = 10;
    }

    try {
        // do something
    } catch (e) {
        e = 12;
        e <<= 1;
    }
}

function bar() {
    try {
        // Try something
    } catch (e) {
        // Catch any throws
    }

    foo(e);
}
