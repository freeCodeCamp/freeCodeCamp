/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var path = require('path'),
    mkdirp = require('mkdirp'),
    once = require('once'),
    async = require('async'),
    fs = require('fs'),
    filesFor = require('./file-matcher').filesFor,
    libInstrument = require('istanbul-lib-instrument'),
    libCoverage = require('istanbul-lib-coverage'),
    inputError = require('./input-error');

/*
 * Chunk file size to use when reading non JavaScript files in memory
 * and copying them over when using complete-copy flag.
 */
var READ_FILE_CHUNK_SIZE = 64 * 1024;

function BaselineCollector(instrumenter) {
    this.instrumenter = instrumenter;
    this.map = libCoverage.createCoverageMap();
    this.instrument = instrumenter.instrument.bind(this.instrumenter);

    var origInstrumentSync = instrumenter.instrumentSync;
    this.instrumentSync = function () {
        var args = Array.prototype.slice.call(arguments),
            ret = origInstrumentSync.apply(this.instrumenter, args),
            baseline = this.instrumenter.lastFileCoverage();
        this.map.addFileCoverage(baseline);
        return ret;
    };
    //monkey patch the instrumenter to call our version instead
    instrumenter.instrumentSync = this.instrumentSync.bind(this);
}

BaselineCollector.prototype.getCoverage = function () {
    return this.map.toJSON();
};


function processFiles(instrumenter, opts, callback) {
    var inputDir = opts.inputDir,
        outputDir = opts.outputDir,
        relativeNames = opts.names,
        extensions = opts.extensions,
        verbose = opts.verbose;

    var processor = function (name, callback) {
            var inputFile = path.resolve(inputDir, name),
                outputFile = path.resolve(outputDir, name),
                inputFileExtension = path.extname(inputFile),
                isJavaScriptFile = extensions.indexOf(inputFileExtension) > -1,
                oDir = path.dirname(outputFile),
                readStream, writeStream;

            callback = once(callback);
            mkdirp.sync(oDir);

            /* istanbul ignore if */
            if (fs.statSync(inputFile).isDirectory()) {
                return callback(null, name);
            }

            if (isJavaScriptFile) {
                fs.readFile(inputFile, 'utf8', function (err, data) {
                    /* istanbul ignore if */ if (err) { return callback(err, name); }
                    instrumenter.instrument(data, inputFile, function (iErr, instrumented) {
                        if (iErr) { return callback(iErr, name); }
                        fs.writeFile(outputFile, instrumented, 'utf8', function (err) {
                            return callback(err, name);
                        });
                    });
                });
            }
            else {
                // non JavaScript file, copy it as is
                readStream = fs.createReadStream(inputFile, {'bufferSize': READ_FILE_CHUNK_SIZE});
                writeStream = fs.createWriteStream(outputFile);

                readStream.on('error', callback);
                writeStream.on('error', callback);

                readStream.pipe(writeStream);
                readStream.on('end', function() {
                    callback(null, name);
                });
            }
        },
        q = async.queue(processor, 10),
        errors = [],
        count = 0,
        startTime = new Date().getTime();

    q.push(relativeNames, function (err, name) {
        var inputFile, outputFile;
        if (err) {
            errors.push({ file: name, error: err.message || /* istanbul ignore next */ err.toString() });
            inputFile = path.resolve(inputDir, name);
            outputFile = path.resolve(outputDir, name);
            fs.writeFileSync(outputFile, fs.readFileSync(inputFile));
        }
        if (verbose) {
            console.error('Processed: ' + name);
        } else {
            if (count % 100 === 0) { process.stdout.write('.'); }
        }
        count += 1;
    });

    q.drain = function () {
        var endTime = new Date().getTime();
        console.error('\nProcessed [' + count + '] files in ' + Math.floor((endTime - startTime) / 1000) + ' secs');
        if (errors.length > 0) {
            console.error('The following ' + errors.length + ' file(s) had errors and were copied as-is');
            console.error(errors);
        }
        return callback();
    };
}


function run(config, opts, callback) {
    opts = opts || {};
    var iOpts = config.instrumentation,
        input = opts.input,
        output = opts.output,
        excludes = opts.excludes,
        file,
        stats,
        stream,
        includes,
        instrumenter,
        origCallback = callback,
        needBaseline = iOpts.saveBaseline(),
        baselineFile = path.resolve(iOpts.baselineFile());

    if (iOpts.completeCopy()) {
        includes = ['**/*'];
    }
    else {
        includes = iOpts.extensions().map(function(ext) {
            return '**/*' + ext;
        });
    }

    if (!input) {
        return callback(new Error('No input specified'));
    }

    instrumenter = libInstrument.createInstrumenter(iOpts.getInstrumenterOpts());

    if (needBaseline) {
        mkdirp.sync(path.dirname(baselineFile));
        instrumenter = new BaselineCollector(instrumenter);
        callback = function (err) {
            /* istanbul ignore else */
            if (!err) {
                console.error('Saving baseline coverage at ' + baselineFile);
                fs.writeFileSync(baselineFile, JSON.stringify(instrumenter.getCoverage()), 'utf8');
            }
            return origCallback(err);
        };
    }

    file = path.resolve(input);
    stats = fs.statSync(file);
    if (stats.isDirectory()) {
        if (!output) { return callback(inputError.create('Need an output directory when input is a directory!')); }
        if (output === file) { return callback(inputError.create('Cannot instrument into the same directory/ file as input!')); }
        mkdirp.sync(output);
        filesFor({
            root: file,
            includes: includes,
            excludes: excludes || iOpts.excludes(false),
            relative: true
        }, function (err, files) {
            /* istanbul ignore if */
            if (err) { return callback(err); }
            processFiles(instrumenter, {
                inputDir: file,
                outputDir: output,
                names: files,
                extensions: iOpts.extensions(),
                verbose: config.verbose
            }, callback);
        });
    } else {
        if (output) {
            stream = fs.createWriteStream(output);
        } else {
            stream = process.stdout;
        }
        stream.write(instrumenter.instrumentSync(fs.readFileSync(file, 'utf8'), file));
        if (stream !== process.stdout) {
            stream.end();
        }
        return callback();
    }
}

module.exports = {
    run: run
};



