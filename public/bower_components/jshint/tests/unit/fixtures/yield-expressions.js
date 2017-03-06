function* F() {
    // comma
    //  9   13  17  21  25  29  33  37
    a, yield b;
    yield c, d;
    e, yield f, g;
    yield h, yield i;
    // comma, no yield value
    //  9   13  17  21  25  29  33  37
    a, yield;
    yield, d;
    e, yield, g;
    yield, yield;

    // yield in yield
    //  9   13  17  21  25  29  33  37
    yield a;
    yield yield b;
    yield yield yield c;
    yield yield d, yield e;
    yield yield f, yield yield g;
    yield hv = yield yield h;
    yield yield i || yield j;
    // yield in yield, no yield value
    //  9   13  17  21  25  29  33  37
    yield;
    yield yield;
    yield yield yield;
    yield yield, yield;
    yield yield, yield yield;
    yield fv = yield yield;
    yield yield || yield;

    // assign
    //  9   13  17  21  25  29  33  37
    a, bv = yield b;
    cv = yield c, d;
    e, fv = yield f, g;
    hv = yield h, iv = yield i;
    jv = yield j;
    // assign, no yield value
    //  9   13  17  21  25  29  33  37
    a, bv = yield;
    cv = yield, d;
    e, fv = yield, g;
    hv = yield, iv = yield;
    jv = yield;

    // infix
    //  9   13  17  21  25  29  33  37
    a || yield b;
    yield c || d;
    e || yield f || g;
    yield h || yield i;
    // infix, no yield value
    //  9   13  17  21  25  29  33  37
    a || yield;
    yield || d;
    e || yield || g;
    yield || yield;

    // prefix
    //  9   13  17  21  25  29  33  37
    !yield a;
    !!yield b;
    !yield !c;
    !!yield !!d;
    // prefix, no yield value
    //  9   13  17  21  25  29  33  37
    !yield;
    !!yield;
}

function* G() {
    //  ternary operator
    //  9   13  17  21  25  29  33  37  41  45  49  53  57
    yield ? yield a : yield b;
    yield ? yield ? yield c : yield d : yield e;
    yield ? yield ? yield f : yield g : yield ? yield h : yield i;
    //  ternary operator, no yield value
    //  9   13  17  21  25  29  33  37  41  45  49  53  57
    yield ? yield : yield;
    yield ? yield ? yield : yield : yield;
    yield ? yield ? yield : yield : yield ? yield : yield;
}
