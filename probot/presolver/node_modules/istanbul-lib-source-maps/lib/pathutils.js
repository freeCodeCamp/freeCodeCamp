var path = require('path'),
    isAbsolute = function (p) {
        if (path.isAbsolute) {
            return path.isAbsolute(p);
        }
        return path.resolve(p) === path.normalize(p);
    };

exports.isAbsolute = isAbsolute;

exports.asAbsolute = function (file, baseDir) {
    return isAbsolute(file) ? file : path.resolve(baseDir || process.cwd, file);
};

exports.relativeTo = function (file, origFile) {
    return isAbsolute(file) ? file : path.resolve(path.dirname(origFile), file);
};
