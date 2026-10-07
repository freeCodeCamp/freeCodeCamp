'use strict';

module.exports = prompt => {
  prompt.timers = prompt.timers || {};

  let timers = prompt.options.timers;
  if (!timers) return;

  for (let key of Object.keys(timers)) {
    let opts = timers[key];
    if (typeof opts === 'number') {
      opts = { interval: opts };
    }
    create(prompt, key, opts);
  }
};

function create(prompt, name, options = {}) {
  let timer = prompt.timers[name] = { name, start: Date.now(), ms: 0, tick: 0 };
  let ms = options.interval || 120;
  timer.frames = options.frames || [];
  timer.loading = true;

  let interval = setInterval(() => {
    timer.ms = Date.now() - timer.start;
    timer.tick++;
    prompt.render();
  }, ms);

  timer.stop = () => {
    timer.loading = false;
    clearInterval(interval);
  };

  Reflect.defineProperty(timer, 'interval', { value: interval });
  prompt.once('close', () => timer.stop());
  return timer.stop;
}
