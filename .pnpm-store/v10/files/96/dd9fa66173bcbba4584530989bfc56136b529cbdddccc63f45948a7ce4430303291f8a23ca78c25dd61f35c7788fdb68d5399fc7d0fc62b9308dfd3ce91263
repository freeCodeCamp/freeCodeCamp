'use strict';
var { fromEvent } = require('rxjs');
var { filter, map, share, takeUntil } = require('rxjs/operators');

function normalizeKeypressEvents(value, key) {
  return { value: value, key: key || {} };
}

module.exports = function (rl) {
  var keypress = fromEvent(rl.input, 'keypress', normalizeKeypressEvents)
    .pipe(takeUntil(fromEvent(rl, 'close')))
    // Ignore `enter` key. On the readline, we only care about the `line` event.
    .pipe(filter(({ key }) => key.name !== 'enter' && key.name !== 'return'));

  return {
    line: fromEvent(rl, 'line'),
    keypress: keypress,

    normalizedUpKey: keypress.pipe(
      filter(
        ({ key }) =>
          key.name === 'up' || key.name === 'k' || (key.name === 'p' && key.ctrl)
      ),
      share()
    ),

    normalizedDownKey: keypress.pipe(
      filter(
        ({ key }) =>
          key.name === 'down' || key.name === 'j' || (key.name === 'n' && key.ctrl)
      ),
      share()
    ),

    numberKey: keypress.pipe(
      filter((e) => e.value && '123456789'.indexOf(e.value) >= 0),
      map((e) => Number(e.value)),
      share()
    ),

    spaceKey: keypress.pipe(
      filter(({ key }) => key && key.name === 'space'),
      share()
    ),
    aKey: keypress.pipe(
      filter(({ key }) => key && key.name === 'a'),
      share()
    ),
    iKey: keypress.pipe(
      filter(({ key }) => key && key.name === 'i'),
      share()
    ),
  };
};
