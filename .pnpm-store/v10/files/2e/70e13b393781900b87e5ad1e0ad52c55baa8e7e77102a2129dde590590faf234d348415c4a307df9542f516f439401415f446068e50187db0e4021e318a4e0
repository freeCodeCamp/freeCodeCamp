const Fraction = require('fraction.js');
const assert = require('assert');

var DivisionByZero = function () { return new Error("Division by Zero"); };
var InvalidParameter = function () { return new Error("Invalid argument"); };
var NonIntegerParameter = function () { return new Error("Parameters must be integer"); };

var tests = [{
  set: "",
  expectError: InvalidParameter()
}, {
  set: "foo",
  expectError: InvalidParameter()
}, {
  set: " 123",
  expectError: InvalidParameter()
}, {
  set: 0,
  expect: 0
}, {
  set: .2,
  expect: "0.2"
}, {
  set: .333,
  expect: "0.333"
}, {
  set: 1.1,
  expect: "1.1"
}, {
  set: 1.2,
  expect: "1.2"
}, {
  set: 1.3,
  expect: "1.3"
}, {
  set: 1.4,
  expect: "1.4"
}, {
  set: 1.5,
  expect: "1.5"
}, {
  set: 2.555,
  expect: "2.555"
}, {
  set: 1e12,
  expect: "1000000000000"
}, {
  set: " - ",
  expectError: InvalidParameter()
}, {
  set: ".5",
  expect: "0.5"
}, {
  set: "2_000_000",
  expect: "2000000"
}, {
  set: "-.5",
  expect: "-0.5"
}, {
  set: "123",
  expect: "123"
}, {
  set: "-123",
  expect: "-123"
}, {
  set: "123.4",
  expect: "123.4"
}, {
  set: "-123.4",
  expect: "-123.4"
}, {
  set: "123.",
  expect: "123"
}, {
  set: "-123.",
  expect: "-123"
}, {
  set: "123.4(56)",
  expect: "123.4(56)"
}, {
  set: "-123.4(56)",
  expect: "-123.4(56)"
}, {
  set: "123.(4)",
  expect: "123.(4)"
}, {
  set: "-123.(4)",
  expect: "-123.(4)"
}, {
  set: "0/0",
  expectError: DivisionByZero()
}, {
  set: "9/0",
  expectError: DivisionByZero()
}, {
  label: "0/1+0/1",
  set: "0/1",
  param: "0/1",
  expect: "0"
}, {
  label: "1/9+0/1",
  set: "1/9",
  param: "0/1",
  expect: "0.(1)"
}, {
  set: "123/456",
  expect: "0.269(736842105263157894)"
}, {
  set: "-123/456",
  expect: "-0.269(736842105263157894)"
}, {
  set: "19 123/456",
  expect: "19.269(736842105263157894)"
}, {
  set: "-19 123/456",
  expect: "-19.269(736842105263157894)"
}, {
  set: "123.(22)123",
  expectError: InvalidParameter()
}, {
  set: "+33.3(3)",
  expect: "33.(3)"
}, {
  set: "3.'09009'",
  expect: "3.(09009)"
}, {
  set: "123.(((",
  expectError: InvalidParameter()
}, {
  set: "123.((",
  expectError: InvalidParameter()
}, {
  set: "123.()",
  expectError: InvalidParameter()
}, {
  set: null,
  expect: "0" // I would say it's just fine
}, {
  set: [22, 7],
  expect: '3.(142857)' // We got Pi! - almost ;o
}, {
  set: "355/113",
  expect: "3.(1415929203539823008849557522123893805309734513274336283185840707964601769911504424778761061946902654867256637168)" // Yay, a better PI
}, {
  set: "3 1/7",
  expect: '3.(142857)'
}, {
  set: [36, -36],
  expect: "-1"
}, {
  set: [1n, 3n],
  expect: "0.(3)"
}, {
  set: 1n,
  set2: 3n,
  expect: "0.(3)"
}, {
  set: { n: 1n, d: 3n },
  expect: "0.(3)"
}, {
  set: { n: 1n, d: 3n },
  expect: "0.(3)"
}, {
  set: [1n, 3n],
  expect: "0.(3)"
}, {
  set: "9/12",
  expect: "0.75"
}, {
  set: "0.09(33)",
  expect: "0.09(3)"
}, {
  set: 1 / 2,
  expect: "0.5"
}, {
  set: 1 / 3,
  expect: "0.(3)"
}, {
  set: "0.'3'",
  expect: "0.(3)"
}, {
  set: "0.00002",
  expect: "0.00002"
}, {
  set: 7 / 8,
  expect: "0.875"
}, {
  set: 0.003,
  expect: "0.003"
}, {
  set: 4,
  expect: "4"
}, {
  set: -99,
  expect: "-99"
}, {
  set: "-92332.1192",
  expect: "-92332.1192"
}, {
  set: '88.92933(12111)',
  expect: "88.92933(12111)"
}, {
  set: '-192322.823(123)',
  expect: "-192322.8(231)"
}, {
  label: "-99.12 % 0.09(34)",
  set: '-99.12',
  fn: "mod",
  param: "0.09(34)",
  expect: "-0.07(95)"
}, {
  label: "0.4 / 0.1",
  set: .4,
  fn: "div",
  param: ".1",
  expect: "4"
}, {
  label: "1 / -.1",
  set: 1,
  fn: "div",
  param: "-.1",
  expect: "-10"
}, {
  label: "1 - (-1)",
  set: 1,
  fn: "sub",
  param: "-1",
  expect: "2"
}, {
  label: "1 + (-1)",
  set: 1,
  fn: "add",
  param: "-1",
  expect: "0"
}, {
  label: "-187 % 12",
  set: '-187',
  fn: "mod",
  param: "12",
  expect: "-7"
}, {
  label: "Negate by 99 * -1",
  set: '99',
  fn: "mul",
  param: "-1",
  expect: "-99"
}, {
  label: "0.5050000000000000000000000",
  set: "0.5050000000000000000000000",
  expect: "101/200",
  fn: "toFraction",
  param: true
}, {
  label: "0.505000000(0000000000)",
  set: "0.505000000(0000000000)",
  expect: "101/200",
  fn: "toFraction",
  param: true
}, {
  set: [20, -5],
  expect: "-4",
  fn: "toFraction",
  param: true
}, {
  set: [-10, -7],
  expect: "1 3/7",
  fn: "toFraction",
  param: true
}, {
  set: [21, -6],
  expect: "-3 1/2",
  fn: "toFraction",
  param: true
}, {
  set: "10/78",
  expect: "5/39",
  fn: "toFraction",
  param: true
}, {
  set: "0/91",
  expect: "0",
  fn: "toFraction",
  param: true
}, {
  set: "-0/287",
  expect: "0",
  fn: "toFraction",
  param: true
}, {
  set: "-5/20",
  expect: "-1/4",
  fn: "toFraction",
  param: true
}, {
  set: "42/9",
  expect: "4 2/3",
  fn: "toFraction",
  param: true
}, {
  set: "71/23",
  expect: "3 2/23",
  fn: "toFraction",
  param: true
}, {
  set: "6/3",
  expect: "2",
  fn: "toFraction",
  param: true
}, {
  set: "28/4",
  expect: "7",
  fn: "toFraction",
  param: true
}, {
  set: "105/35",
  expect: "3",
  fn: "toFraction",
  param: true
}, {
  set: "4/6",
  expect: "2/3",
  fn: "toFraction",
  param: true
}, {
  label: "99.(9) + 66",
  set: '99.(999999)',
  fn: "add",
  param: "66",
  expect: "166"
}, {
  label: "123.32 / 33.'9821'",
  set: '123.32',
  fn: "div",
  param: "33.'9821'",
  expect: "3.628958880242975"
}, {
  label: "-82.124 / 66.(3)",
  set: '-82.124',
  fn: "div",
  param: "66.(3)",
  expect: "-1.238(050251256281407035175879396984924623115577889447236180904522613065326633165829145728643216080402010)"
}, {
  label: "100 - .91",
  set: '100',
  fn: "sub",
  param: ".91",
  expect: "99.09"
}, {
  label: "381.(33411) % 11.119(356)",
  set: '381.(33411)',
  fn: "mod",
  param: "11.119(356)",
  expect: "3.275(997225017295217)"
}, {
  label: "13/26 mod 1",
  set: '13/26',
  fn: "mod",
  param: "1.000",
  expect: "0.5"
}, {
  label: "381.(33411) % 1", // Extract fraction part of a number
  set: '381.(33411)',
  fn: "mod",
  param: "1",
  expect: "0.(33411)"
}, {
  label: "-222/3",
  set: {
    n: 3,
    d: 222,
    s: -1
  },
  fn: "inverse",
  param: null,
  expect: "-74"
}, {
  label: "inverse",
  set: 1 / 2,
  fn: "inverse",
  param: null,
  expect: "2"
}, {
  label: "abs(-222/3)",
  set: {
    n: -222,
    d: 3
  },
  fn: "abs",
  param: null,
  expect: "74"
}, {
  label: "9 % -2",
  set: 9,
  fn: "mod",
  param: "-2",
  expect: "1"
}, {
  label: "-9 % 2",
  set: '-9',
  fn: "mod",
  param: "-2",
  expect: "-1"
}, {
  label: "1 / 195312500",
  set: '1',
  fn: "div",
  param: "195312500",
  expect: "0.00000000512"
}, {
  label: "10 / 0",
  set: 10,
  fn: "div",
  param: 0,
  expectError: DivisionByZero()
}, {
  label: "-3 / 4",
  set: [-3, 4],
  fn: "inverse",
  param: null,
  expect: "-1.(3)"
}, {
  label: "-19.6",
  set: [-98, 5],
  fn: "equals",
  param: '-19.6',
  expect: "true" // actually, we get a real bool but we call toString() in the test below
}, {
  label: "-19.6",
  set: [98, -5],
  fn: "equals",
  param: '-19.6',
  expect: "true"
}, {
  label: "99/88",
  set: [99, 88],
  fn: "equals",
  param: [88, 99],
  expect: "false"
}, {
  label: "99/88",
  set: [99, -88],
  fn: "equals",
  param: [9, 8],
  expect: "false"
}, {
  label: "12.5",
  set: 12.5,
  fn: "add",
  param: 0,
  expect: "12.5"
}, {
  label: "0/1 -> 1/0",
  set: 0,
  fn: "inverse",
  param: null,
  expectError: DivisionByZero()
}, {
  label: "abs(-100.25)",
  set: -100.25,
  fn: "abs",
  param: null,
  expect: "100.25"
}, {
  label: "0.022222222",
  set: '0.0(22222222)',
  fn: "abs",
  param: null,
  expect: "0.0(2)"
}, {
  label: "1.5 | 100.5",
  set: 100.5,
  fn: "divisible",
  param: '1.5',
  expect: "true"
}, {
  label: "1.5 | 100.6",
  set: 100.6,
  fn: "divisible",
  param: 1.6,
  expect: "false"
}, {
  label: "(1/6) | (2/3)", // == 4
  set: [2, 3],
  fn: "divisible",
  param: [1, 6],
  expect: "true"
}, {
  label: "(1/6) | (2/5)",
  set: [2, 5],
  fn: "divisible",
  param: [1, 6],
  expect: "false"
}, {
  label: "0 | (2/5)",
  set: [2, 5],
  fn: "divisible",
  param: 0,
  expect: "false"
}, {
  label: "6 | 0",
  set: 0,
  fn: "divisible",
  param: 6,
  expect: "true"
}, {
  label: "fmod(4.55, 0.05)", // http://phpjs.org/functions/fmod/ (comment section)
  set: 4.55,
  fn: "mod",
  param: 0.05,
  expect: "0"
}, {
  label: "fmod(99.12, 0.4)",
  set: 99.12,
  fn: "mod",
  param: "0.4",
  expect: "0.32"
}, {
  label: "fmod(fmod(1.0,0.1))", // http://stackoverflow.com/questions/4218961/why-fmod1-0-0-1-1
  set: 1.0,
  fn: "mod",
  param: 0.1,
  expect: "0"
}, {
  label: "bignum",
  set: [5385020324, 1673196525],
  fn: "add",
  param: 0,
  expect: "3.21(840276592733181776121606516006839065124164060763872313206005492988936251824931324190982287630557922656455433410609073551596098372245902196097377144624418820138297860736950789447760776337973807350574075570710380240599651018280712721418065340531352107607323652551812465663589637206543923464101146157950573080469432602963360804254598843372567965379918536467197121390148715495330113717514444395585868193217769203770011415724163065662594535928766646225254382476081224230369471990147720394052336440275597631903998844367669243157195775313960803259497565595290726533154854597848271290188102679689703515252041298615534717298077104242133182771222884293284077911887845930112722413166618308629346454087334421161315763550250022184333666363549254920906556389124702491239037207539024741878423396797336762338781453063321417070239253574830368476888869943116813489676593728283053898883754853602746993512910863832926021645903191198654921901657666901979730085800889408373591978384009612977172541043856160291750546158945674358246709841810124486123947693472528578195558946669459524487119048971249805817042322628538808374587079661786890216019304725725509141850506771761314768448972244907094819599867385572056456428511886850828834945135927771544947477105237234460548500123140047759781236696030073335228807028510891749551057667897081007863078128255137273847732859712937785356684266362554153643129279150277938809369688357439064129062782986595074359241811119587401724970711375341877428295519559485099934689381452068220139292962014728066686607540019843156200674036183526020650801913421377683054893985032630879985)"
}, {
  label: "ceil(0.4)",
  set: 0.4,
  fn: "ceil",
  param: null,
  expect: "1"
},


{
  label: "1 < 2",
  set: 1,
  fn: "lt",
  param: 2,
  expect: "true"
}, {
  label: "2 < 2",
  set: 2,
  fn: "lt",
  param: 2,
  expect: "false"
}, {
  label: "3 > 2",
  set: 3,
  fn: "gt",
  param: 2,
  expect: "true"
}, {
  label: "2 > 2",
  set: 2,
  fn: "gt",
  param: 2,
  expect: "false"
}, {
  label: "1 <= 2",
  set: 1,
  fn: "lte",
  param: 2,
  expect: "true"
}, {
  label: "2 <= 2",
  set: 2,
  fn: "lte",
  param: 2,
  expect: "true"
}, {
  label: "3 <= 2",
  set: 3,
  fn: "lte",
  param: 2,
  expect: "false"
}, {
  label: "3 >= 2",
  set: 3,
  fn: "gte",
  param: 2,
  expect: "true"
}, {
  label: "2 >= 2",
  set: 2,
  fn: "gte",
  param: 2,
  expect: "true"
}, {
  label: "ceil(0.5)",
  set: 0.5,
  fn: "ceil",
  param: null,
  expect: "1"
}, {
  label: "ceil(0.23, 2)",
  set: 0.23,
  fn: "ceil",
  param: 2,
  expect: "0.23"
}, {
  label: "ceil(0.6)",
  set: 0.6,
  fn: "ceil",
  param: null,
  expect: "1"
}, {
  label: "ceil(-0.4)",
  set: -0.4,
  fn: "ceil",
  param: null,
  expect: "0"
}, {
  label: "ceil(-0.5)",
  set: -0.5,
  fn: "ceil",
  param: null,
  expect: "0"
}, {
  label: "ceil(-0.6)",
  set: -0.6,
  fn: "ceil",
  param: null,
  expect: "0"
}, {
  label: "floor(0.4)",
  set: 0.4,
  fn: "floor",
  param: null,
  expect: "0"
}, {
  label: "floor(0.4, 1)",
  set: 0.4,
  fn: "floor",
  param: 1,
  expect: "0.4"
}, {
  label: "floor(0.5)",
  set: 0.5,
  fn: "floor",
  param: null,
  expect: "0"
}, {
  label: "floor(0.6)",
  set: 0.6,
  fn: "floor",
  param: null,
  expect: "0"
}, {
  label: "floor(-0.4)",
  set: -0.4,
  fn: "floor",
  param: null,
  expect: "-1"
}, {
  label: "floor(-0.5)",
  set: -0.5,
  fn: "floor",
  param: null,
  expect: "-1"
}, {
  label: "floor(-0.6)",
  set: -0.6,
  fn: "floor",
  param: null,
  expect: "-1"
}, {
  label: "floor(10.4)",
  set: 10.4,
  fn: "floor",
  param: null,
  expect: "10"
}, {
  label: "floor(10.4, 1)",
  set: 10.4,
  fn: "floor",
  param: 1,
  expect: "10.4"
}, {
  label: "floor(10.5)",
  set: 10.5,
  fn: "floor",
  param: null,
  expect: "10"
}, {
  label: "floor(10.6)",
  set: 10.6,
  fn: "floor",
  param: null,
  expect: "10"
}, {
  label: "floor(-10.4)",
  set: -10.4,
  fn: "floor",
  param: null,
  expect: "-11"
}, {
  label: "floor(-10.5)",
  set: -10.5,
  fn: "floor",
  param: null,
  expect: "-11"
}, {
  label: "floor(-10.6)",
  set: -10.6,
  fn: "floor",
  param: null,
  expect: "-11"
}, {
  label: "floor(-10.543,3)",
  set: -10.543,
  fn: "floor",
  param: 3,
  expect: "-10.543"
}, {
  label: "floor(10.543,3)",
  set: 10.543,
  fn: "floor",
  param: 3,
  expect: "10.543"
}, {
  label: "round(-10.543,3)",
  set: -10.543,
  fn: "round",
  param: 3,
  expect: "-10.543"
}, {
  label: "round(10.543,3)",
  set: 10.543,
  fn: "round",
  param: 3,
  expect: "10.543"
}, {
  label: "round(10.4)",
  set: 10.4,
  fn: "round",
  param: null,
  expect: "10"
}, {
  label: "round(10.5)",
  set: 10.5,
  fn: "round",
  param: null,
  expect: "11"
}, {
  label: "round(10.5, 1)",
  set: 10.5,
  fn: "round",
  param: 1,
  expect: "10.5"
}, {
  label: "round(10.6)",
  set: 10.6,
  fn: "round",
  param: null,
  expect: "11"
}, {
  label: "round(-10.4)",
  set: -10.4,
  fn: "round",
  param: null,
  expect: "-10"
}, {
  label: "round(-10.5)",
  set: -10.5,
  fn: "round",
  param: null,
  expect: "-10"
}, {
  label: "round(-10.6)",
  set: -10.6,
  fn: "round",
  param: null,
  expect: "-11"
}, {
  label: "round(-0.4)",
  set: -0.4,
  fn: "round",
  param: null,
  expect: "0"
}, {
  label: "round(-0.5)",
  set: -0.5,
  fn: "round",
  param: null,
  expect: "0"
}, {
  label: "round(-0.6)",
  set: -0.6,
  fn: "round",
  param: null,
  expect: "-1"
}, {
  label: "round(-0)",
  set: -0,
  fn: "round",
  param: null,
  expect: "0"
}, {
  label: "round(big fraction)",
  set: [
    '409652136432929109317120'.repeat(100),
    '63723676445298091081155'.repeat(100)
  ],
  fn: "round",
  param: null,
  expect: "6428570341270001560623330590225448467479093479780591305451264291405695842465355472558570608574213642"
}, {
  label: "round(big numerator)",
  set: ['409652136432929109317'.repeat(100), 10],
  fn: "round",
  param: null,
  expect: '409652136432929109317'.repeat(99) + '40965213643292910932'
}, {
  label: "17402216385200408/5539306332998545",
  set: [17402216385200408, 5539306332998545],
  fn: "add",
  param: 0,
  expect: "3.141587653589870"
}, {
  label: "17402216385200401/553930633299855",
  set: [17402216385200401, 553930633299855],
  fn: "add",
  param: 0,
  expect: "31.415876535898660"
}, {
  label: "1283191/418183",
  set: [1283191, 418183],
  fn: "add",
  param: 0,
  expect: "3.068491545567371"
}, {
  label: "1.001",
  set: "1.001",
  fn: "add",
  param: 0,
  expect: "1.001"
}, {
  label: "99+1",
  set: [99, 1],
  fn: "add",
  param: 1,
  expect: "100"
}, {
  label: "gcd(5/8, 3/7)",
  set: [5, 8],
  fn: "gcd",
  param: [3, 7],
  expect: "0.017(857142)" // == 1/56
}, {
  label: "gcd(52, 39)",
  set: 52,
  fn: "gcd",
  param: 39,
  expect: "13"
}, {
  label: "gcd(51357, 3819)",
  set: 51357,
  fn: "gcd",
  param: 3819,
  expect: "57"
}, {
  label: "gcd(841, 299)",
  set: 841,
  fn: "gcd",
  param: 299,
  expect: "1"
}, {
  label: "gcd(2/3, 7/5)",
  set: [2, 3],
  fn: "gcd",
  param: [7, 5],
  expect: "0.0(6)" // == 1/15
}, {
  label: "lcm(-3, 3)",
  set: -3,
  fn: "lcm",
  param: 3,
  expect: "3"
}, {
  label: "lcm(3,-3)",
  set: 3,
  fn: "lcm",
  param: -3,
  expect: "3"
}, {
  label: "lcm(0,3)",
  set: 0,
  fn: "lcm",
  param: 3,
  expect: "0"
}, {
  label: "lcm(3, 0)",
  set: 3,
  fn: "lcm",
  param: 0,
  expect: "0"
}, {
  label: "lcm(0, 0)",
  set: 0,
  fn: "lcm",
  param: 0,
  expect: "0"
}, {
  label: "lcm(200, 333)",
  set: 200,
  fn: "lcm",
  param: 333, expect: "66600"
},
{
  label: "1 + -1",
  set: 1,
  fn: "add",
  param: -1,
  expect: "0"
}, {
  label: "3/10+3/14",
  set: "3/10",
  fn: "add",
  param: "3/14",
  expect: "0.5(142857)"
}, {
  label: "3/10-3/14",
  set: "3/10",
  fn: "sub",
  param: "3/14",
  expect: "0.0(857142)"
}, {
  label: "3/10*3/14",
  set: "3/10",
  fn: "mul",
  param: "3/14",
  expect: "0.06(428571)"
}, {
  label: "3/10 / 3/14",
  set: "3/10",
  fn: "div",
  param: "3/14",
  expect: "1.4"
}, {
  label: "1-2",
  set: "1",
  fn: "sub",
  param: "2",
  expect: "-1"
}, {
  label: "1--1",
  set: "1",
  fn: "sub",
  param: "-1",
  expect: "2"
}, {
  label: "0/1*1/3",
  set: "0/1",
  fn: "mul",
  param: "1/3",
  expect: "0"
}, {
  label: "3/10 * 8/12",
  set: "3/10",
  fn: "mul",
  param: "8/12",
  expect: "0.2"
}, {
  label: ".5+5",
  set: ".5",
  fn: "add",
  param: 5, expect: "5.5"
},
{
  label: "10/12-5/60",
  set: "10/12",
  fn: "sub",
  param: "5/60",
  expect: "0.75"
}, {
  label: "10/15 / 3/4",
  set: "10/15",
  fn: "div",
  param: "3/4",
  expect: "0.(8)"
}, {
  label: "1/4 + 3/8",
  set: "1/4",
  fn: "add",
  param: "3/8",
  expect: "0.625"
}, {
  label: "2-1/3",
  set: "2",
  fn: "sub",
  param: "1/3",
  expect: "1.(6)"
}, {
  label: "5*6",
  set: "5",
  fn: "mul",
  param: 6,
  expect: "30"
}, {
  label: "1/2-1/5",
  set: "1/2",
  fn: "sub",
  param: "1/5",
  expect: "0.3"
}, {
  label: "1/2-5",
  set: "1/2",
  fn: "add",
  param: -5,
  expect: "-4.5"
}, {
  label: "1*-1",
  set: "1",
  fn: "mul",
  param: -1,
  expect: "-1"
}, {
  label: "5/10",
  set: 5.0,
  fn: "div",
  param: 10,
  expect: "0.5"
}, {
  label: "1/-1",
  set: "1",
  fn: "div",
  param: -1,
  expect: "-1"
}, {
  label: "4/5 + 13/2",
  set: "4/5",
  fn: "add",
  param: "13/2",
  expect: "7.3"
}, {
  label: "4/5 + 61/2",
  set: "4/5",
  fn: "add",
  param: "61/2",
  expect: "31.3"
}, {
  label: "0.8 + 6.5",
  set: "0.8",
  fn: "add",
  param: "6.5",
  expect: "7.3"
}, {
  label: "2/7 inverse",
  set: "2/7",
  fn: "inverse",
  param: null,
  expect: "3.5"
}, {
  label: "neg 1/3",
  set: "1/3",
  fn: "neg",
  param: null,
  expect: "-0.(3)"
}, {
  label: "1/2+1/3",
  set: "1/2",
  fn: "add",
  param: "1/3",
  expect: "0.8(3)"
}, {
  label: "1/2+3",
  set: ".5",
  fn: "add",
  param: 3,
  expect: "3.5"
}, {
  label: "1/2+3.14",
  set: "1/2",
  fn: "add",
  param: "3.14",
  expect: "3.64"
}, {
  label: "3.5 < 4.1",
  set: 3.5,
  fn: "compare",
  param: 4.1,
  expect: "-1"
}, {
  label: "3.5 > 4.1",
  set: 4.1,
  fn: "compare",
  param: 3.1,
  expect: "1"
}, {
  label: "-3.5 > -4.1",
  set: -3.5,
  fn: "compare",
  param: -4.1,
  expect: "1"
}, {
  label: "-3.5 > -4.1",
  set: -4.1,
  fn: "compare",
  param: -3.5,
  expect: "-1"
}, {
  label: "4.3 == 4.3",
  set: 4.3,
  fn: "compare",
  param: 4.3,
  expect: "0"
}, {
  label: "-4.3 == -4.3",
  set: -4.3,
  fn: "compare",
  param: -4.3,
  expect: "0"
}, {
  label: "-4.3 < 4.3",
  set: -4.3,
  fn: "compare",
  param: 4.3,
  expect: "-1"
}, {
  label: "4.3 == -4.3",
  set: 4.3,
  fn: "compare",
  param: -4.3,
  expect: "1"
}, {
  label: "2^0.5",
  set: 2,
  fn: "pow",
  param: 0.5,
  expect: "null"
}, {
  label: "(-8/27)^(1/3)",
  set: [-8, 27],
  fn: "pow",
  param: [1, 3],
  expect: "null"
}, {
  label: "(-8/27)^(2/3)",
  set: [-8, 27],
  fn: "pow",
  param: [2, 3],
  expect: "null"
}, {
  label: "(-32/243)^(5/3)",
  set: [-32, 243],
  fn: "pow",
  param: [5, 3],
  expect: "null"
}, {
  label: "sqrt(0)",
  set: 0,
  fn: "pow",
  param: 0.5,
  expect: "0"
}, {
  label: "27^(2/3)",
  set: 27,
  fn: "pow",
  param: "2/3",
  expect: "9"
}, {
  label: "(243/1024)^(2/5)",
  set: "243/1024",
  fn: "pow",
  param: "2/5",
  expect: "0.5625"
}, {
  label: "-0.5^-3",
  set: -0.5,
  fn: "pow",
  param: -3,
  expect: "-8"
}, {
  label: "",
  set: -3,
  fn: "pow",
  param: -3,
  expect: "-0.(037)"
}, {
  label: "-3",
  set: -3,
  fn: "pow",
  param: 2,
  expect: "9"
}, {
  label: "-3",
  set: -3,
  fn: "pow",
  param: 3,
  expect: "-27"
}, {
  label: "0^0",
  set: 0,
  fn: "pow",
  param: 0,
  expect: "1"
}, {
  label: "2/3^7",
  set: [2, 3],
  fn: "pow",
  param: 7,
  expect: "0.(058527663465935070873342478280749885688157293095564700502972107910379515317786922725194330132601737540009144947416552354823959762231367169638774577046181984453589391860996799268404206675811614083219021490626428898033836305441243712848651120256)"
}, {
  label: "-0.6^4",
  set: -0.6,
  fn: "pow",
  param: 4,
  expect: "0.1296"
}, {
  label: "8128371:12394 - 8128371/12394",
  set: "8128371:12394",
  fn: "sub",
  param: "8128371/12394",
  expect: "0"
}, {
  label: "3/4 + 1/4",
  set: "3/4",
  fn: "add",
  param: "1/4",
  expect: "1"
}, {
  label: "1/10 + 2/10",
  set: "1/10",
  fn: "add",
  param: "2/10",
  expect: "0.3"
}, {
  label: "5/10 + 2/10",
  set: "5/10",
  fn: "add",
  param: "2/10",
  expect: "0.7"
}, {
  label: "18/10 + 2/10",
  set: "18/10",
  fn: "add",
  param: "2/10",
  expect: "2"
}, {
  label: "1/3 + 1/6",
  set: "1/3",
  fn: "add",
  param: "1/6",
  expect: "0.5"
}, {
  label: "1/3 + 2/6",
  set: "1/3",
  fn: "add",
  param: "2/6",
  expect: "0.(6)"
}, {
  label: "3/4 / 1/4",
  set: "3/4",
  fn: "div",
  param: "1/4",
  expect: "3"
}, {
  label: "1/10 / 2/10",
  set: "1/10",
  fn: "div",
  param: "2/10",
  expect: "0.5"
}, {
  label: "5/10 / 2/10",
  set: "5/10",
  fn: "div",
  param: "2/10",
  expect: "2.5"
}, {
  label: "18/10 / 2/10",
  set: "18/10",
  fn: "div",
  param: "2/10",
  expect: "9"
}, {
  label: "1/3 / 1/6",
  set: "1/3",
  fn: "div",
  param: "1/6",
  expect: "2"
}, {
  label: "1/3 / 2/6",
  set: "1/3",
  fn: "div",
  param: "2/6",
  expect: "1"
}, {
  label: "3/4 * 1/4",
  set: "3/4",
  fn: "mul",
  param: "1/4",
  expect: "0.1875"
}, {
  label: "1/10 * 2/10",
  set: "1/10",
  fn: "mul",
  param: "2/10",
  expect: "0.02"
}, {
  label: "5/10 * 2/10",
  set: "5/10",
  fn: "mul",
  param: "2/10",
  expect: "0.1"
}, {
  label: "18/10 * 2/10",
  set: "18/10",
  fn: "mul",
  param: "2/10",
  expect: "0.36"
}, {
  label: "1/3 * 1/6",
  set: "1/3",
  fn: "mul",
  param: "1/6",
  expect: "0.0(5)"
}, {
  label: "1/3 * 2/6",
  set: "1/3",
  fn: "mul",
  param: "2/6",
  expect: "0.(1)"
}, {
  label: "5/4 - 1/4",
  set: "5/4",
  fn: "sub",
  param: "1/4",
  expect: "1"
}, {
  label: "5/10 - 2/10",
  set: "5/10",
  fn: "sub",
  param: "2/10",
  expect: "0.3"
}, {
  label: "9/10 - 2/10",
  set: "9/10",
  fn: "sub",
  param: "2/10",
  expect: "0.7"
}, {
  label: "22/10 - 2/10",
  set: "22/10",
  fn: "sub",
  param: "2/10",
  expect: "2"
}, {
  label: "2/3 - 1/6",
  set: "2/3",
  fn: "sub",
  param: "1/6",
  expect: "0.5"
}, {
  label: "3/3 - 2/6",
  set: "3/3",
  fn: "sub",
  param: "2/6",
  expect: "0.(6)"
}, {
  label: "0.006999999999999999",
  set: 0.006999999999999999,
  fn: "add",
  param: 0,
  expect: "0.007"
}, {
  label: "1/7 - 1",
  set: 1 / 7,
  fn: "add",
  param: -1,
  expect: "-0.(857142)"
}, {
  label: "0.0065 + 0.0005",
  set: 0.0065,
  fn: "add",
  param: 0.0005,
  expect: "0.007"
}, {
  label: "6.5/.5",
  set: 6.5,
  fn: "div",
  param: .5,
  expect: "13"
}, {
  label: "0.999999999999999999999999999",
  set: 0.999999999999999999999999999,
  fn: "sub",
  param: 1,
  expect: "0"
}, {
  label: "0.5833333333333334",
  set: 0.5833333333333334,
  fn: "add",
  param: 0,
  expect: "0.58(3)"
}, {
  label: "1.75/3",
  set: 1.75 / 3,
  fn: "add",
  param: 0,
  expect: "0.58(3)"
}, {
  label: "3.3333333333333",
  set: 3.3333333333333,
  fn: "add",
  param: 0,
  expect: "3.(3)"
}, {
  label: "4.285714285714285714285714",
  set: 4.285714285714285714285714,
  fn: "add",
  param: 0,
  expect: "4.(285714)"
}, {
  label: "-4",
  set: -4,
  fn: "neg",
  param: 0,
  expect: "4"
}, {
  label: "4",
  set: 4,
  fn: "neg",
  param: 0,
  expect: "-4"
}, {
  label: "0",
  set: 0,
  fn: "neg",
  param: 0,
  expect: "0"
}, {
  label: "6869570742453802/5329686054127205",
  set: "6869570742453802/5329686054127205",
  fn: "neg",
  param: 0,
  expect: "-1.288925965373540"
}, {
  label: "686970702/53212205",
  set: "686970702/53212205",
  fn: "neg",
  param: 0,
  expect: "-12.910021338149772"
}, {
  label: "1/3000000000000000",
  set: "1/3000000000000000",
  fn: "add",
  param: 0,
  expect: "0.000000000000000(3)"
}, {
  label: "toString(15) .0000000000000003",
  set: ".0000000000000003",
  fn: "toString",
  param: 15,
  expect: "0.000000000000000"
}, {
  label: "toString(16) .0000000000000003",
  set: ".0000000000000003",
  fn: "toString",
  param: 16,
  expect: "0.0000000000000003"
}, {
  label: "12 / 4.3",
  set: 12,
  set2: 4.3,
  fn: "toString",
  param: null,
  expectError: NonIntegerParameter()
}, {
  label: "12.5 / 4",
  set: 12.5,
  set2: 4,
  fn: "toString",
  param: null,
  expectError: NonIntegerParameter()
}, {
  label: "0.9 round to multiple of 1/8",
  set: .9,
  fn: "roundTo",
  param: "1/8",
  expect: "0.875"
}, {
  label: "1/3 round to multiple of 1/16",
  set: 1 / 3,
  fn: "roundTo",
  param: "1/16",
  expect: "0.3125"
}, {
  label: "1/3 round to multiple of 1/16",
  set: -1 / 3,
  fn: "roundTo",
  param: "1/16",
  expect: "-0.3125"
}, {
  label: "1/2 round to multiple of 1/4",
  set: 1 / 2,
  fn: "roundTo",
  param: "1/4",
  expect: "0.5"
}, {
  label: "1/4 round to multiple of 1/2",
  set: 1 / 4,
  fn: "roundTo",
  param: "1/2",
  expect: "0.5"
}, {
  label: "10/3 round to multiple of 1/2",
  set: "10/3",
  fn: "roundTo",
  param: "1/2",
  expect: "3.5"
}, {
  label: "-10/3 round to multiple of 1/2",
  set: "-10/3",
  fn: "roundTo",
  param: "1/2",
  expect: "-3.5"
}, {
  label: "log_2(8)",
  set: "8",
  fn: "log",
  param: "2",
  expect: "3" // because 2^3 = 8
}, {
  label: "log_2(3)",
  set: "3",
  fn: "log",
  param: "2",
  expect: 'null' // because 2^(p/q) != 3
}, {
  label: "log_10(1000)",
  set: "1000",
  fn: "log",
  param: "10",
  expect: "3" // because 10^3 = 1000
}, {
  label: "log_27(81)",
  set: "81",
  fn: "log",
  param: "27",
  expect: "1.(3)" // because 27^(4/3) = 81
}, {
  label: "log_27(9)",
  set: "9",
  fn: "log",
  param: "27",
  expect: "0.(6)" // because 27^(2/3) = 9
}, {
  label: "log_9/4(27/8)",
  set: "27/8",
  fn: "log",
  param: "9/4",
  expect: "1.5" // because (9/4)^(3/2) = 27/8
}];

describe('Fraction', function () {
  for (var i = 0; i < tests.length; i++) {

    (function (i) {
      var action;

      if (tests[i].fn) {
        action = function () {
          var x = Fraction(tests[i].set, tests[i].set2)[tests[i].fn](tests[i].param);
          if (x === null) return "null";
          return x.toString();
        };
      } else {
        action = function () {
          var x = new Fraction(tests[i].set, tests[i].set2);
          if (x === null) return "null";
          return x.toString();
        };
      }

      it(String(tests[i].label || tests[i].set), function () {
        if (tests[i].expectError) {
          assert.throws(action, tests[i].expectError);
        } else {
          assert.equal(action(), tests[i].expect);
        }
      });

    })(i);
  }
});

describe('JSON', function () {

  it("Should be possible to stringify the object", function () {

    if (typeof Fraction(1).n !== 'number') {
      return;
    }
    assert.equal('{"s":1,"n":14623,"d":330}', JSON.stringify(new Fraction("44.3(12)")));
    assert.equal('{"s":-1,"n":2,"d":1}', JSON.stringify(new Fraction(-1 / 2).inverse()));
  });
});

describe('Arguments', function () {

  it("Should be possible to use different kind of params", function () {

    // String
    var fraction = new Fraction("0.1");
    assert.equal("1/10", fraction.n + "/" + fraction.d);

    var fraction = new Fraction("6234/6460");
    assert.equal("3117/3230", fraction.n + "/" + fraction.d);

    // Two params
    var fraction = new Fraction(1, 2);
    assert.equal("1/2", fraction.n + "/" + fraction.d);

    // Object
    var fraction = new Fraction({ n: 1, d: 3 });
    assert.equal("1/3", fraction.n + "/" + fraction.d);

    // Array
    var fraction = new Fraction([1, 4]);
    assert.equal("1/4", fraction.n + "/" + fraction.d);
  });
});

describe('fractions', function () {

  it("Should pass 0.08 = 2/25", function () {

    var fraction = new Fraction("0.08");
    assert.equal("2/25", fraction.n + "/" + fraction.d);
  });

  it("Should pass 0.200 = 1/5", function () {

    var fraction = new Fraction("0.200");
    assert.equal("1/5", fraction.n + "/" + fraction.d);
  });

  it("Should pass 0.125 = 1/8", function () {

    var fraction = new Fraction("0.125");
    assert.equal("1/8", fraction.n + "/" + fraction.d);
  });

  it("Should pass 8.36 = 209/25", function () {

    var fraction = new Fraction(8.36);
    assert.equal("209/25", fraction.n + "/" + fraction.d);
  });

});

describe('constructors', function () {

  it("Should pass 0.08 = 2/25", function () {

    var tmp = new Fraction({ d: 4, n: 2, s: -1 });
    assert.equal("-1/2", tmp.s * tmp.n + "/" + tmp.d);

    var tmp = new Fraction(-88.3);
    assert.equal("-883/10", tmp.s * tmp.n + "/" + tmp.d);

    var tmp = new Fraction(-88.3).clone();
    assert.equal("-883/10", tmp.s * tmp.n + "/" + tmp.d);

    var tmp = new Fraction("123.'3'");
    assert.equal("370/3", tmp.s * tmp.n + "/" + tmp.d);

    var tmp = new Fraction("123.'3'").clone();
    assert.equal("370/3", tmp.s * tmp.n + "/" + tmp.d);

    var tmp = new Fraction([-1023461776, 334639305]);
    tmp = tmp.add([4, 25]);
    assert.equal("-4849597436/1673196525", tmp.s * tmp.n + "/" + tmp.d);
  });
});

describe('Latex Output', function () {

  it("Should pass 123.'3' = \\frac{370}{3}", function () {

    var tmp = new Fraction("123.'3'");
    assert.equal("\\frac{370}{3}", tmp.toLatex());
  });

  it("Should pass 1.'3' = \\frac{4}{3}", function () {

    var tmp = new Fraction("1.'3'");
    assert.equal("\\frac{4}{3}", tmp.toLatex());
  });

  it("Should pass -1.0000000000 = -1", function () {

    var tmp = new Fraction("-1.0000000000");
    assert.equal('-1', tmp.toLatex());
  });

  it("Should pass -0.0000000000 = 0", function () {

    var tmp = new Fraction("-0.0000000000");
    assert.equal('0', tmp.toLatex());
  });
});

describe('Fraction Output', function () {

  it("Should pass 123.'3' = 123 1/3", function () {

    var tmp = new Fraction("123.'3'");
    assert.equal('370/3', tmp.toFraction());
  });

  it("Should pass 1.'3' = 1 1/3", function () {

    var tmp = new Fraction("1.'3'");
    assert.equal('4/3', tmp.toFraction());
  });

  it("Should pass -1.0000000000 = -1", function () {

    var tmp = new Fraction("-1.0000000000");
    assert.equal('-1', tmp.toFraction());
  });

  it("Should pass -0.0000000000 = 0", function () {

    var tmp = new Fraction("-0.0000000000");
    assert.equal('0', tmp.toFraction());
  });

  it("Should pass 1/-99/293 = -1/29007", function () {

    var tmp = new Fraction(-99).inverse().div(293);
    assert.equal('-1/29007', tmp.toFraction());
  });

  it('Should work with large calculations', function () {
    var x = Fraction(1123875);
    var y = Fraction(1238750184);
    var z = Fraction(1657134);
    var r = Fraction(77344464613500, 92063);
    assert.equal(x.mul(y).div(z).toFraction(), r.toFraction());
  });
});

describe('Fraction toContinued', function () {

  it("Should pass 415/93", function () {

    var tmp = new Fraction(415, 93);
    assert.equal('4,2,6,7', tmp.toContinued().toString());
  });

  it("Should pass 0/2", function () {

    var tmp = new Fraction(0, 2);
    assert.equal('0', tmp.toContinued().toString());
  });

  it("Should pass 1/7", function () {

    var tmp = new Fraction(1, 7);
    assert.equal('0,7', tmp.toContinued().toString());
  });

  it("Should pass 23/88", function () {

    var tmp = new Fraction('23/88');
    assert.equal('0,3,1,4,1,3', tmp.toContinued().toString());
  });

  it("Should pass 1/99", function () {

    var tmp = new Fraction('1/99');
    assert.equal('0,99', tmp.toContinued().toString());
  });

  it("Should pass 1768/99", function () {

    var tmp = new Fraction('1768/99');
    assert.equal('17,1,6,14', tmp.toContinued().toString());
  });

  it("Should pass 1768/99", function () {

    var tmp = new Fraction('7/8');
    assert.equal('0,1,7', tmp.toContinued().toString());
  });

});


describe('Fraction simplify', function () {

  it("Should pass 415/93", function () {

    var tmp = new Fraction(415, 93);
    assert.equal('9/2', tmp.simplify(0.1).toFraction());
    assert.equal('58/13', tmp.simplify(0.01).toFraction());
    assert.equal('415/93', tmp.simplify(0.0001).toFraction());
  });

});
