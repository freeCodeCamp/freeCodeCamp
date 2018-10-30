var util = require('util'),
    os = require('os'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    rimraf = require('rimraf'),
    fs = require('fs');

function SourceStore(/*opts*/) {
}

SourceStore.prototype.registerSource = function (/* filePath, sourceText */) {
    throw new Error('registerSource must be overridden');
};

SourceStore.prototype.getSource = function (/* filePath */) {
    throw new Error('getSource must be overridden');
};

SourceStore.prototype.dispose = function () {
};

function MemoryStore() {
    this.data = {};
}

util.inherits(MemoryStore, SourceStore);

MemoryStore.prototype.registerSource = function (filePath, sourceText) {
    this.data[filePath] = sourceText;
};

MemoryStore.prototype.getSource = function (filePath) {
    return this.data[filePath] || null;
};

function FileStore(opts) {
    opts = opts || {};
    var tmpDir = opts.tmpdir || os.tmpdir();
    this.counter = 0;
    this.mappings = [];
    this.basePath = path.resolve(tmpDir, '.istanbul', 'cache_');
    mkdirp.sync(path.dirname(this.basePath));
}

util.inherits(FileStore, SourceStore);

FileStore.prototype.registerSource = function (filePath, sourceText) {
    if (this.mappings[filePath]) {
        return;
    }
    this.counter += 1;
    var mapFile = this.basePath + this.counter;
    this.mappings[filePath] = mapFile;
    fs.writeFileSync(mapFile, sourceText, 'utf8');
};

FileStore.prototype.getSource = function (filePath) {
    var mapFile = this.mappings[filePath];
    if (!mapFile) {
        return null;
    }
    return fs.readFileSync(mapFile, 'utf8');
};

FileStore.prototype.dispose = function () {
    this.mappings = [];
    rimraf.sync(path.dirname(this.basePath));
};

module.exports = {
    create: function (type, opts) {
        opts = opts || {};
        type = (type || 'memory').toLowerCase();

        if (type === 'file') {
            return new FileStore(opts);
        }
        return new MemoryStore(opts);
    }
};
