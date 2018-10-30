/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

var PCT_COLS = 9,
    MISSING_COL = 18,
    TAB_SIZE = 1,
    DELIM = ' |',
    COL_DELIM = '-|';

function padding(num, ch) {
    var str = '',
        i;
    ch = ch || ' ';
    for (i = 0; i < num; i += 1) {
        str += ch;
    }
    return str;
}

function fill(str, width, right, tabs) {
    tabs = tabs || 0;
    str = String(str);

    var leadingSpaces = tabs * TAB_SIZE,
        remaining = width - leadingSpaces,
        leader = padding(leadingSpaces),
        fmtStr = '',
        fillStr,
        strlen = str.length;

    if (remaining > 0) {
        if (remaining >= strlen) {
            fillStr = padding(remaining - strlen);
            fmtStr = right ? fillStr + str : str + fillStr;
        } else {
            fmtStr = str.substring(strlen - remaining);
            fmtStr = '... ' + fmtStr.substring(4);
        }
    }

    return leader + fmtStr;
}

function formatName(name, maxCols, level) {
    return fill(name, maxCols, false, level);
}

function formatPct(pct, width) {
    return fill(pct, width || PCT_COLS, true, 0);
}

function nodeName(node) {
    return node.getRelativeName() || 'All files';
}

function depthFor(node) {
    var ret = 0;
    node = node.getParent();
    while (node) {
        ret += 1;
        node = node.getParent();
    }
    return ret;
}

function findNameWidth(node, context) {
    var last = 0,
        compareWidth = function (node) {
            var depth = depthFor(node),
                idealWidth = TAB_SIZE * depth + nodeName(node).length;
            if (idealWidth > last) {
                last = idealWidth;
            }
        },
        visitor = {
            onSummary: function (node) {
                compareWidth(node);
            },
            onDetail: function (node) {
                compareWidth(node);
            }
        };
    node.visit(context.getVisitor(visitor));
    return last;
}

function makeLine(nameWidth) {
    var name = padding(nameWidth, '-'),
        pct = padding(PCT_COLS, '-'),
        elements = [];

    elements.push(name);
    elements.push(pct);
    elements.push(pct);
    elements.push(pct);
    elements.push(pct);
    elements.push(padding(MISSING_COL, '-'));
    return elements.join(COL_DELIM) + COL_DELIM;
}

function tableHeader(maxNameCols) {
    var elements = [];
    elements.push(formatName('File', maxNameCols, 0));
    elements.push(formatPct('% Stmts'));
    elements.push(formatPct('% Branch'));
    elements.push(formatPct('% Funcs'));
    elements.push(formatPct('% Lines'));
    elements.push(formatPct('Uncovered Line #s', MISSING_COL));
    return elements.join(' |') + ' |';
}

function missingLines (node, colorizer) {
    var missingLines = node.isSummary() ? [] : node.getFileCoverage().getUncoveredLines();
    return colorizer(formatPct(missingLines.join(','), MISSING_COL), 'low');
}

function missingBranches (node, colorizer) {
    var branches = node.isSummary() ? {} : node.getFileCoverage().getBranchCoverageByLine(),
        missingLines = Object.keys(branches).filter(function (key) {
            return branches[key].coverage < 100;
        }).map(function (key) {
            return key;
        });
    return colorizer(formatPct(missingLines.join(','), MISSING_COL), 'medium');
}

function tableRow(node, context, colorizer, maxNameCols, level) {
    var name = nodeName(node),
        metrics = node.getCoverageSummary(),
        mm = {
            statements: metrics.statements.pct,
            branches: metrics.branches.pct,
            functions: metrics.functions.pct,
            lines: metrics.lines.pct,
        },
        colorize = function (str, key) {
            return colorizer(str, context.classForPercent(key, mm[key]));
        },
        elements = [];

    elements.push(colorize(formatName(name, maxNameCols, level),'statements'));
    elements.push(colorize(formatPct(mm.statements),'statements'));
    elements.push(colorize(formatPct(mm.branches), 'branches'));
    elements.push(colorize(formatPct(mm.functions), 'functions'));
    elements.push(colorize(formatPct(mm.lines), 'lines'));
    if (mm.lines === 100) {
        elements.push(missingBranches(node, colorizer));
    } else {
        elements.push(missingLines(node, colorizer));
    }
    return elements.join(DELIM) + DELIM;
}

function TextReport(opts) {
    opts = opts || {};
    this.file = opts.file || null;
    this.maxCols = opts.maxCols || 0;
    this.cw = null;
}

TextReport.prototype.onStart = function (root, context) {
    var line,
        statsWidth = 4 * (PCT_COLS + 2) + MISSING_COL,
        maxRemaining;

    this.cw = context.writer.writeFile(this.file);
    this.nameWidth = findNameWidth(root, context);
    if (this.maxCols > 0) {
        maxRemaining = this.maxCols - statsWidth - 2;
        if (this.nameWidth > maxRemaining) {
            this.nameWidth = maxRemaining;
        }
    }
    line = makeLine(this.nameWidth);
    this.cw.println(line);
    this.cw.println(tableHeader(this.nameWidth));
    this.cw.println(line);
};

TextReport.prototype.onSummary = function (node, context) {
    var nodeDepth = depthFor(node);
    this.cw.println(tableRow(node, context, this.cw.colorize.bind(this.cw),this.nameWidth, nodeDepth));
};

TextReport.prototype.onDetail = function (node, context) {
    return this.onSummary(node, context);
};

TextReport.prototype.onEnd = function () {
    this.cw.println(makeLine(this.nameWidth));
    this.cw.close();
};

module.exports = TextReport;
