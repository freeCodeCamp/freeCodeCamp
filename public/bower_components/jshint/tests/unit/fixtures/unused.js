var a = 1;
var b = 2;

b += 1;

function main(e, f) {
    var c = 3;
    var d = 4;

    return d - e;
}

main(b);

function foo(err, cb) {
    main();
    cb();
}

function bar(g, h) {
  //jshint unused:true, es3:false
  var i = 1;
  var char;
  char = 1;
  return h;
}

function baz(a, b, c) {
  return 1;
}

baz();

const aa = 1;
const bb = aa + 1;
const cc = 2;

function bazbaz() {
  const dd = 1;
  baz(bb);
}

bazbaz();

// GH-1881 "jshint considers user delete() function as keyword, not function,
// yields 'function not used' for argument"
var c = {};
c.typeof(hoistedTypeof);
c.delete(hoistedDelete);

// These functions should be recognized as "in use" even though they are being
// passed to methods that look like unresolvable-reference-accepting operators.
function hoistedDelete() {}
function hoistedTypeof() {}

const constUsed = "this is used";
while(constUsed) {
    const constUsed = "unused";
}
let letUsed = "this is used";
if (letUsed) {
    let letUsed = "unused",
        anotherUnused;
}

// GH-2345 - Unused arrow-function parameters should be ignored if "unused" is set to "vars"
let x = y => y;
x = y => {};
x = (y) => {};
x = (y, z) => y;
x = (y, z) => z;

function throwAwayFuncA() { if (testLateDef) {} }
let testLateDef = true;
function throwAwayFuncB() { if (testLateDefConst) {} }
const testLateDefConst = true;
throwAwayFuncA();
try {
    var inTry = true;
} catch(e){
    var inCatch = true;
}
if (inTry) {
    throwAwayFuncA();
}
if (inCatch) {
    throwAwayFuncB();
}
(function() {
    var inTry5 = 1;
    var inTry6 = 1;
    let inTry7 = 1;
    const inTry8 = 1;
    let inTry9 = 1;
    const inTry10 = 1;
    try {
        var inTry2 = 1;
        var inTry3 = 1;
        var inTry4 = 1;
    } catch(e){}
    inTry2++;
    (function() {
        inTry3++;
        inTry5++;
        if (inTry8) {
            inTry7++;
        }
    })();
    (function() {
        inTry4++;
        var inTry4 = 1;
        inTry6++;
        var inTry6 = 1;
        if (inTry10) {
            inTry9++;
        }
        let inTry9 = 1;
        const inTry10 = 1;
    })();
}());

function unusedRecurringFunc() {
    unusedRecurringFunc();
}
