import EventTarget from './events';

const config = {
  instrument: false
};

EventTarget['mixin'](config);

function configure(name, value) {
  if (arguments.length === 2) {
    config[name] = value;
  } else {
    return config[name];
  }
}

export {
  config,
  configure
};
