var watch = require('../main')
  , assert = require('assert')
  , path = require('path')
  , fs = require('fs')
  , target = path.join(__dirname, "d/t")
  ;

function clearFile() {
  fs.writeFileSync(target, '')
}

clearFile()

// test if changed event is fired correctly
watch.createMonitor(__dirname, { interval: 150 },
  function (monitor) {
    monitor.once('changed', function (f) {
      assert.equal(f, target);
      clearFile();
      process.exit(0)
    })

    fs.writeFile(target, 'Test Write\n', function (err) {
      if (err) throw err;

      setTimeout(function () {
        // should have got the other assert done by now
        assert.ok(false);
      }, 300);
    })
});
