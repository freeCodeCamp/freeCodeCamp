/*jshint undef: true, globalstrict: true*/
"use strict"
function foo () {
    if (true) return
    var x = 1
}

for (var i = 0; i < 10; i++) {
    if (i === 0) continue
    var y = 2
    if (i === 1) break
    var z = 3

    switch (z) {
        case 3:
            var m = ""
            return
        case 2:
            break
        default:
            break
    }
}

foo()
var a = 1
var b = '1'
var c = "1"
