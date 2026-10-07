'use strict';

var os = require('os');

// adapted from https://github.com/sindresorhus/os-homedir/blob/11e089f4754db38bb535e5a8416320c4446e8cfd/index.js

module.exports = os.homedir || function homedir() {
    var home = process.env.HOME;
    var user = process.env.LOGNAME || process.env.USER || process.env.LNAME || process.env.USERNAME;

    if (process.platform === 'win32') {
        return process.env.USERPROFILE || process.env.HOMEDRIVE + process.env.HOMEPATH || home || null;
    }

    if (process.platform === 'darwin') {
        return home || (user ? '/Users/' + user : null);
    }

    if (process.platform === 'linux') {
        return home || (process.getuid() === 0 ? '/root' : (user ? '/home/' + user : null)); // eslint-disable-line no-extra-parens
    }

    return home || null;
};
