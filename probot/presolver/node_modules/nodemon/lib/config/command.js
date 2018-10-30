module.exports = command;

/**
 * command constructs the executable command to run in a shell including the
 * user script, the command arguments.
 *
 * @param  {Object} settings Object as:
 *                           { execOptions: {
 *                               exec: String,
 *                               [script: String],
 *                               [scriptPosition: Number],
 *                               [execArgs: Array<string>]
 *                             }
 *                           }
 * @return {Object}          an object with the node executable and the
 *                           arguments to the command
 */
function command(settings) {
  var options = settings.execOptions;
  var executable = options.exec;
  var args = [];

  // after "executable" go the exec args (like --debug, etc)
  if (options.execArgs) {
    [].push.apply(args, options.execArgs);
  }

  // then goes the user's script arguments
  if (options.args) {
    [].push.apply(args, options.args);
  }

  // after the "executable" goes the user's script
  if (options.script) {
    args.splice((options.scriptPosition || 0) +
      options.execArgs.length, 0, options.script);
  }

  return {
    executable: executable,
    args: args,
  };
}
