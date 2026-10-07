var escapeCarriageReturn = require('../index');

var carriageText = 'hasrn\r\nhasn\n\nabcdef\rhello\nab3\rx2\r\r1\r'.repeat(100);
var simpleText = 'That sentence will make you pause.\n'.repeat(5000);

// Timing code from https://github.com/nteract/nteract/blob/master/example-notebooks/immutable-revival.ipynb
[a, o, ms, s, log] = (function*() {
  yield* [
    process.hrtime(),
    process.hrtime,
    ms => (ms[0] * 1e9 + ms[1]) / 1000000,
    s => s / 1000,
    () => {
      const f = o(a), msf = ms(f), sf = s(msf);
      return { a, o: f, ms: msf, s: sf };
    }
  ];
})();

// Calculate the milliseconds it takes to run f
function measure(f) {
  start = log();
  f();
  end = log();
  return end.ms - start.ms;
}

// measure the function run n times, return the mean
function runTrials(f, n = 10000) {
  values = [];
  for (var ii = 0; ii < n; ii++) {
    values.push(measure(f));
  }
  return values.reduce((a, b) => a + b, 0) / n;
}

function carriageBenchmark() {
  escapeCarriageReturn(carriageText);
}

function simpleBenchmark() {
  escapeCarriageReturn(simpleText);
}

console.log('With carriage:', runTrials(carriageBenchmark));
console.log('Without carriage:', runTrials(simpleBenchmark));
