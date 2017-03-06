undef(); // this line will generate a warning
if (typeof undef) {} // this line won't because typeof accepts a reference
                     // even when the base object of that reference is null

if (typeof undef['attr' + 0]) {
    delete undef['attr' + 0];
}
if (typeof undef.attr) {
    delete undef.attr;
}

var fn = function () {
    localUndef();

    if (typeof localUndef)
        return;

    if (typeof localUndef['attr' + 0]) {
        delete localUndef['attr' + 0];
    }
    if (typeof localUndef.attr) {
        delete localUndef.attr;
    }
};

// Extraneous grouping operators will not cause a warning
if (typeof(undef)) {}
if (typeof((undef))) {}

// Any other expression that includes the null reference should trigger an
// error
if (typeof undef()) {}
if (typeof +undef) {}
if (typeof(undef, 0)) {}

function a() {
    return a;
}
