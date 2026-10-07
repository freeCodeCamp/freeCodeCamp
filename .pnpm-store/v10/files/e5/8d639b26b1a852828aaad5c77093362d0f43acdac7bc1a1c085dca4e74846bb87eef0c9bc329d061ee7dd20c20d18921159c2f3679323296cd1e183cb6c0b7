var adoptBuffer = require('./adopt-buffer');
var isBOM = require('../tokenizer').isBOM;

var N = 10;
var F = 12;
var R = 13;

function computeLinesAndColumns(host, source) {
    var sourceLength = source.length;
    var lines = adoptBuffer(host.lines, sourceLength); // +1
    var line = host.startLine;
    var columns = adoptBuffer(host.columns, sourceLength);
    var column = host.startColumn;
    var startOffset = source.length > 0 ? isBOM(source.charCodeAt(0)) : 0;

    for (var i = startOffset; i < sourceLength; i++) { // -1
        var code = source.charCodeAt(i);

        lines[i] = line;
        columns[i] = column++;

        if (code === N || code === R || code === F) {
            if (code === R && i + 1 < sourceLength && source.charCodeAt(i + 1) === N) {
                i++;
                lines[i] = line;
                columns[i] = column;
            }

            line++;
            column = 1;
        }
    }

    lines[i] = line;
    columns[i] = column;

    host.lines = lines;
    host.columns = columns;
}

var OffsetToLocation = function() {
    this.lines = null;
    this.columns = null;
    this.linesAndColumnsComputed = false;
};

OffsetToLocation.prototype = {
    setSource: function(source, startOffset, startLine, startColumn) {
        this.source = source;
        this.startOffset = typeof startOffset === 'undefined' ? 0 : startOffset;
        this.startLine = typeof startLine === 'undefined' ? 1 : startLine;
        this.startColumn = typeof startColumn === 'undefined' ? 1 : startColumn;
        this.linesAndColumnsComputed = false;
    },

    ensureLinesAndColumnsComputed: function() {
        if (!this.linesAndColumnsComputed) {
            computeLinesAndColumns(this, this.source);
            this.linesAndColumnsComputed = true;
        }
    },
    getLocation: function(offset, filename) {
        this.ensureLinesAndColumnsComputed();

        return {
            source: filename,
            offset: this.startOffset + offset,
            line: this.lines[offset],
            column: this.columns[offset]
        };
    },
    getLocationRange: function(start, end, filename) {
        this.ensureLinesAndColumnsComputed();

        return {
            source: filename,
            start: {
                offset: this.startOffset + start,
                line: this.lines[start],
                column: this.columns[start]
            },
            end: {
                offset: this.startOffset + end,
                line: this.lines[end],
                column: this.columns[end]
            }
        };
    }
};

module.exports = OffsetToLocation;
