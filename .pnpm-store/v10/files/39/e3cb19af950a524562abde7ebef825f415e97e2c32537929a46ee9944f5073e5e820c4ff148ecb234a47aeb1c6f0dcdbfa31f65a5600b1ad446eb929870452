"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
var Benchmark = require("benchmark");
var mod_js_1 = require("./mod.js");
var fast_levenshtein_1 = require("fast-levenshtein");
var fs = require("fs");
var jslevenshtein = require("js-levenshtein");
var leven = require("leven");
var levenshteinEditDistance = require("levenshtein-edit-distance");
var suite = new Benchmark.Suite();
var randomstring = function (length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
var randomstringArr = function (stringSize, arraySize) {
    var i = 0;
    var arr = [];
    for (i = 0; i < arraySize; i++) {
        arr.push(randomstring(stringSize));
    }
    return arr;
};
var arrSize = 1000;
if (!fs.existsSync("data.json")) {
    var data_1 = [
        randomstringArr(4, arrSize),
        randomstringArr(8, arrSize),
        randomstringArr(16, arrSize),
        randomstringArr(32, arrSize),
        randomstringArr(64, arrSize),
        randomstringArr(128, arrSize),
        randomstringArr(256, arrSize),
        randomstringArr(512, arrSize),
        randomstringArr(1024, arrSize),
    ];
    fs.writeFileSync("data.json", JSON.stringify(data_1));
}
var data = JSON.parse(fs.readFileSync("data.json", "utf8"));
var _loop_1 = function (i) {
    var datapick = data[i];
    if (process.argv[2] !== "no") {
        suite
            .add("".concat(i, " - js-levenshtein"), function () {
            for (var j = 0; j < arrSize - 1; j += 2) {
                jslevenshtein(datapick[j], datapick[j + 1]);
            }
        })
            .add("".concat(i, " - leven"), function () {
            for (var j = 0; j < arrSize - 1; j += 2) {
                leven(datapick[j], datapick[j + 1]);
            }
        })
            .add("".concat(i, " - fast-levenshtein"), function () {
            for (var j = 0; j < arrSize - 1; j += 2) {
                (0, fast_levenshtein_1.get)(datapick[j], datapick[j + 1]);
            }
        })
            .add("".concat(i, " - levenshtein-edit-distance"), function () {
            for (var j = 0; j < arrSize - 1; j += 2) {
                levenshteinEditDistance(datapick[j], datapick[j + 1]);
            }
        });
    }
    suite.add("".concat(i, " - fastest-levenshtein"), function () {
        for (var j = 0; j < arrSize - 1; j += 2) {
            (0, mod_js_1.distance)(datapick[j], datapick[j + 1]);
        }
    });
};
// BENCHMARKS
for (var i = 0; i < 9; i++) {
    _loop_1(i);
}
var results = new Map();
suite
    .on("cycle", function (event) {
    console.log(String(event.target));
    if (results.has(event.target.name[0])) {
        results.get(event.target.name[0]).push(event.target.hz);
    }
    else {
        results.set(event.target.name[0], [event.target.hz]);
    }
})
    .on("complete", function () {
    console.log(results);
})
    // run async
    .run({ async: true });
