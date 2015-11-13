window.common = (function(global) {
  const {
    jailed,
    document: doc,
    common = { init: [] }
  } = global;

  if (!jailed) {
    return (code, cb) => cb(new Error('Could not load jailed plugin'));
  }

  // obtaining absolute path of this script
  var scripts = doc.getElementsByTagName('script');
  var path = scripts[scripts.length - 1].src
    .split('?')[0]
    .split('/')
    .slice(0, -1)
    .join('/') + '/';

  var sandbox = {
    timeoutId: null,

    startTimeout() {
      this.timeoutId = setTimeout(() => {
        this.disconnect();
      }, 3000);
    },
    endTimeout() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    },
    createPlugin() {
      this.plugin = new jailed.Plugin(path + 'plugin.js');
      this.plugin.whenDisconnected(() => {
        this.endTimeout();
      });
    },
    destroyPlugin() {
      this.plugin.disconnect();
    }
  };


  // sends the input to the plugin for evaluation
  common.detectLoops = function detectLoops(code, callback) {
    sandbox.createPlugin();
    sandbox.plugin.whenConnected(() => {
      this.endTimeout();

      sandbox.plugin.remote.run(code, callback);
    });
  };

  return common;
}(window));
