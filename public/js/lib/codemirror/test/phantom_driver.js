var page = require('webpage').create();

page.open("http://localhost:3000/test/index.html", function (status) {
  if (status != "success") {
    console.log("page couldn't be loaded successfully");
    phantom.exit(1);
  }
  waitFor(function () {
    return page.evaluate(function () {
      var output = document.getElementById('status');
      if (!output) { return false; }
      return (/^(\d+ failures?|all passed)/i).test(output.innerText);
    });
  }, function () {
    var failed = page.evaluate(function () { return window.failed; });
    var output = page.evaluate(function () {
      return document.getElementById('output').innerText + "\n" +
        document.getElementById('status').innerText;
    });
    console.log(output);
    phantom.exit(failed > 0 ? 1 : 0);
  });
});

function waitFor (test, cb) {
  if (test()) {
    cb();
  } else {
    setTimeout(function () { waitFor(test, cb); }, 250);
  }
}
