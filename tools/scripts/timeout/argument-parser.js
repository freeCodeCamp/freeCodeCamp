function argumentParse(argsArray) {
  // Get the name of the npm script to run
  const scriptToRun = argsArray[2].replace(/-/g, '');

  // Get the timeout duration of the command (in minutes)
  const timeoutArg = argsArray[3].replace(/-/g, '');

  const timeout = Number(timeoutArg) * 60 * 1000;

  const searchStr = argsArray[4].replace(/-/g, '');

  return { scriptToRun, timeout, searchStr };
}

module.exports = argumentParse;
