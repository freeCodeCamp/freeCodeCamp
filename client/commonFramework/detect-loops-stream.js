window.common = (function(global) {
  const {
    jailed,
    document: doc,
    Rx: { Observable, Disposable },
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

  var Sandbox = {
    startTimeout() {
      this.timeoutId = setTimeout(() => {
        this.error = new Error('Plugin failed to initialize');
        this.destroyPlugin();
      }, 3000);
    },
    cancelTimout() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    },
    createPlugin() {
      this.plugin = new jailed.Plugin(path + 'plugin.js');
      this.startTimeout();
      this.plugin.whenConnected(() => {
        this.endTimeout();
      });
    },
    destroyPlugin() {
      this.plugin.disconnect();
    }
  };


  // sends the input to the plugin for evaluation
  common.detectLoops = function detectLoops({ code = '', ...rest }) {
    return new Observable(function(observer) {
      const sandbox = Object.create(Sandbox);

      sandbox.createPlugin();
      sandbox.plugin.whenConnected(() => {
        sandbox.plugin.remote.run(code, (err, data) => {
          observer.onNext({ ...rest, err, code, data });
          observer.onCompleted();
        });
      });

      sandbox.plugin.whenDisconnected(() => {
        if (sandbox.disposed) {
          return null;
        }

        if (sandbox.error) {
          observer.onNext({ ...rest, err: sandbox.error, code, data: {} });
        }
        observer.onCompleted();
      });

      return new Disposable(() => {
        sandbox.disposed = true;
        sandbox.destroyPlugin();
      });
    });
  };

  return common;
}(window));
