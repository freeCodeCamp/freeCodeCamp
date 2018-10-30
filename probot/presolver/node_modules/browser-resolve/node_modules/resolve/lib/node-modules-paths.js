var path = require('path');

module.exports = function (start, opts) {
    var modules = opts.moduleDirectory
        ? [].concat(opts.moduleDirectory)
        : ['node_modules']
    ;

    // ensure that `start` is an absolute path at this point,
    // resolving against the process' current working directory
    start = path.resolve(start);

    var prefix = '/';
    if (/^([A-Za-z]:)/.test(start)) {
        prefix = '';
    } else if (/^\\\\/.test(start)) {
        prefix = '\\\\';
    }

    var splitRe = process.platform === 'win32' ? /[\/\\]/ : /\/+/;

    var parts = start.split(splitRe);

    var dirs = [];
    for (var i = parts.length - 1; i >= 0; i--) {
        if (modules.indexOf(parts[i]) !== -1) continue;
        dirs = dirs.concat(modules.map(function(module_dir) {
            return prefix + path.join(
                path.join.apply(path, parts.slice(0, i + 1)),
                module_dir
            );
        }));
    }
    if (process.platform === 'win32'){
        dirs[dirs.length-1] = dirs[dirs.length-1].replace(":", ":\\");
    }
    return dirs.concat(opts.paths);
}
