require('./global');

global.config.fatal = true;
global.target = {};

var args = process.argv.slice(2),
  targetArgs,
  dashesLoc = args.indexOf('--');

// split args, everything after -- if only for targets
if (dashesLoc > -1) {
  targetArgs = args.slice(dashesLoc + 1, args.length);
  args = args.slice(0, dashesLoc);
}

// This ensures we only execute the script targets after the entire script has
// been evaluated
setTimeout(function() {
  var t;

  if (args.length === 1 && args[0] === '--help') {
    console.log('Available targets:');
    for (t in global.target)
      console.log('  ' + t);
    return;
  }

  // Wrap targets to prevent duplicate execution
  for (t in global.target) {
    (function(t, oldTarget){

      // Wrap it
      global.target[t] = function() {
        if (!oldTarget.done){
          oldTarget.done = true;
          oldTarget.result = oldTarget.apply(oldTarget, arguments);
        }
        return oldTarget.result;
      };

    })(t, global.target[t]);
  }

  // Execute desired targets
  if (args.length > 0) {
    args.forEach(function(arg) {
      if (arg in global.target)
        global.target[arg](targetArgs);
      else {
        console.log('no such target: ' + arg);
      }
    });
  } else if ('all' in global.target) {
    global.target.all(targetArgs);
  }

}, 0);
