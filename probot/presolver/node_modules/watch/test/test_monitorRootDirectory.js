var fs, watch, watch_original;
watch = require('../main');
watch_original = require('watch');
fs = require('fs');

watch.createMonitor(__dirname, function (monitor) {
    monitor.on("created", function (f, stat) {
        console.log(f + " created");
    });
    monitor.on("changed", function (f, curr, prev) {
        console.log(f + " changed");
    });
    monitor.on("removed", function (f, stat) {
        console.log(f + " removed");
    });
});

watch_original.createMonitor(__dirname, function (monitor) {
    monitor.on("created", function (f, stat) {
        console.log("ORIGINAL: " + f + " created");
    });
    monitor.on("changed", function (f, curr, prev) {
        console.log("ORIGINAL: " + f + " changed");
    });
    monitor.on("removed", function (f, stat) {
        console.log("ORIGINAL: " + f + " removed");
    });
});