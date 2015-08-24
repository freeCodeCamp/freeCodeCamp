var printCallback;
// sends the input to the plugin for evaluation
var submit = function(code,callback) {
    printCallback = callback;
    // postpone the evaluation until the plugin is initialized
    plugin.whenConnected(
        function() {
            if (requests == 0) {
                startLoading();
            }

            requests++;
            plugin.remote.run(code);
        }
    );
};

// puts the message on the terminal
var print = function(cls, msg) {
    printCallback(cls,msg);
};


// will restart the plugin if it does not respond
var disconnectTimeout = null;
var startLoading = function() {
    disconnectTimeout = setTimeout(disconnect, 3000);
};

var endLoading = function() {
    clearTimeout(disconnectTimeout);
};

var disconnect = function() {
    plugin.disconnect();
};


// interface provided to the plugin
var api = {
    output: function(data) {
      endLoading();
      //print('input', data.input);
      if (data.error) {
          print('Error', data);
          reset();
      } else {
          print(null, data);
          reset();
      }
    }
};


// obtaining absolute path of this script
var scripts = document.getElementsByTagName('script');
var path = scripts[scripts.length-1].src
        .split('?')[0]
        .split('/')
        .slice(0, -1)
        .join('/')+'/';



var requests;

// (re)initializes the plugin
var reset = function() {
    requests = 0;
    plugin = new jailed.Plugin(path+'plugin_v0.1.5.js', api);
    plugin.whenDisconnected( function() {
        // give some time to handle the last responce
        setTimeout( function() {
            endLoading();
            console.log("resetting on fatal plugin error");
            if(challengeType === 0){
                codeOutput.setValue("Sorry, your code is either too slow, has a fatal error, or contains an infinite loop.");
            }
            reset();
        }, 10);
    });
};



// initialize everything
var plugin = null;

reset();
