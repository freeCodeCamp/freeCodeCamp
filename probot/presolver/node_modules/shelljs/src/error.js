var common = require('./common');

//@
//@ ### error()
//@ Tests if error occurred in the last command. Returns a truthy value if an
//@ error returned and a falsy value otherwise.
//@
//@ **Note**: do not rely on the
//@ return value to be an error message. If you need the last error message, use
//@ the `.stderr` attribute from the last command's return value instead.
function error() {
  return common.state.error;
}
module.exports = error;
