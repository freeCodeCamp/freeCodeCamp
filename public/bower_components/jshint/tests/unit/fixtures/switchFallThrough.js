switch (foo) {
case 1:
    doSomething();
case 2:
    doSomething();
}

switch (foo) {
case 1:
    doSomething();
    /* falls through */
case 2:
    doSomething();
}

switch (foo) {
case 1:
case 2:
default:
    doSomething();
}

switch (foo) {
case 1:
    /* falls through */
case 2:
    /* falls through */
case 3:
    /* fall through */
case 4:
    /* fall through */
default:
    doSomething();
}

(function () {
    switch (foo) {
    case 1:
        return; // Return is a valid alternative to break;
    case 2:: // doubled colon (fix)
    case 3:
        return;
    }
}());

switch (foo) {
case 1:
    // There can be a new line after /* falls through */
    /* falls through */

case 2:
    // There can be a comment after /* falls through */
    /* falls through */
    // comment
    /* comment */
default:
    doSomething();
}
