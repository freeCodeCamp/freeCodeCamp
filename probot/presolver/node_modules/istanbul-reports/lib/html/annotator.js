/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

var InsertionText = require('./insertion-text'),
    lt = '\u0001',
    gt = '\u0002',
    RE_LT = /</g,
    RE_GT = />/g,
    RE_AMP = /&/g,
    RE_lt = /\u0001/g,
    RE_gt = /\u0002/g;

function title(str) {
    return ' title="' + str + '" ';
}

function customEscape(text) {
    text = String(text);
    return text.replace(RE_AMP, '&amp;')
        .replace(RE_LT, '&lt;')
        .replace(RE_GT, '&gt;')
        .replace(RE_lt, '<')
        .replace(RE_gt, '>');
}

function annotateLines(fileCoverage, structuredText) {
    var lineStats = fileCoverage.getLineCoverage();
    if (!lineStats) {
        return;
    }
    Object.keys(lineStats).forEach(function (lineNumber) {
        var count = lineStats[lineNumber];
        if (structuredText[lineNumber]) {
            structuredText[lineNumber].covered = count > 0 ? 'yes' : 'no';
            structuredText[lineNumber].hits = count;
        }
    });
}

function annotateStatements(fileCoverage, structuredText) {
    var statementStats = fileCoverage.s,
        statementMeta = fileCoverage.statementMap;
    Object.keys(statementStats).forEach(function (stName) {
        var count = statementStats[stName],
            meta = statementMeta[stName],
            type = count > 0 ? 'yes' : 'no',
            startCol = meta.start.column,
            endCol = meta.end.column + 1,
            startLine = meta.start.line,
            endLine = meta.end.line,
            openSpan = lt + 'span class="' + (meta.skip ? 'cstat-skip' : 'cstat-no') + '"' + title('statement not covered') + gt,
            closeSpan = lt + '/span' + gt,
            text;

        if (type === 'no' && structuredText[startLine]) {
            if (endLine !== startLine) {
                endCol = structuredText[startLine].text.originalLength();
            }
            text = structuredText[startLine].text;
            text.wrap(startCol,
                openSpan,
                startCol < endCol ? endCol : text.originalLength(),
                closeSpan);
        }
    });
}

function annotateFunctions(fileCoverage, structuredText) {

    var fnStats = fileCoverage.f,
        fnMeta = fileCoverage.fnMap;
    if (!fnStats) {
        return;
    }
    Object.keys(fnStats).forEach(function (fName) {
        var count = fnStats[fName],
            meta = fnMeta[fName],
            type = count > 0 ? 'yes' : 'no',
            startCol = meta.decl.start.column,
            endCol = meta.decl.end.column + 1,
            startLine = meta.decl.start.line,
            endLine = meta.decl.end.line,
            openSpan = lt + 'span class="' + (meta.skip ? 'fstat-skip' : 'fstat-no') + '"' + title('function not covered') + gt,
            closeSpan = lt + '/span' + gt,
            text;

        if (type === 'no' && structuredText[startLine]) {
            if (endLine !== startLine) {
                endCol = structuredText[startLine].text.originalLength();
            }
            text = structuredText[startLine].text;
            text.wrap(startCol,
                openSpan,
                startCol < endCol ? endCol : text.originalLength(),
                closeSpan);
        }
    });
}

function annotateBranches(fileCoverage, structuredText) {
    var branchStats = fileCoverage.b,
        branchMeta = fileCoverage.branchMap;
    if (!branchStats) {
        return;
    }

    Object.keys(branchStats).forEach(function (branchName) {
        var branchArray = branchStats[branchName],
            sumCount = branchArray.reduce(function (p, n) {
                return p + n;
            }, 0),
            metaArray = branchMeta[branchName].locations,
            i,
            count,
            meta,
            type,
            startCol,
            endCol,
            startLine,
            endLine,
            openSpan,
            closeSpan,
            text;

        // only highlight if partial branches are missing or if there is a
        // single uncovered branch.
        if (sumCount > 0 || (sumCount === 0 && branchArray.length === 1)) {
            for (i = 0; i < branchArray.length && i < metaArray.length; i += 1) {
                count = branchArray[i];
                meta = metaArray[i];
                type = count > 0 ? 'yes' : 'no';
                startCol = meta.start.column;
                endCol = meta.end.column + 1;
                startLine = meta.start.line;
                endLine = meta.end.line;
                openSpan = lt + 'span class="branch-' + i + ' ' +
                    (meta.skip ? 'cbranch-skip' : 'cbranch-no') + '"'
                    + title('branch not covered') + gt;
                closeSpan = lt + '/span' + gt;

                if (count === 0 && structuredText[startLine]) { //skip branches taken
                    if (endLine !== startLine) {
                        endCol = structuredText[startLine].text.originalLength();
                    }
                    text = structuredText[startLine].text;
                    if (branchMeta[branchName].type === 'if') {
                    // 'if' is a special case
                    // since the else branch might not be visible, being non-existent
                        text.insertAt(startCol, lt + 'span class="' +
                            (meta.skip ? 'skip-if-branch' : 'missing-if-branch') + '"' +
                            title((i === 0 ? 'if' : 'else') + ' path not taken') + gt +
                            (i === 0 ? 'I' : 'E') + lt + '/span' + gt, true, false);
                    } else {
                        text.wrap(startCol,
                            openSpan,
                            startCol < endCol ? endCol : text.originalLength(),
                            closeSpan);
                    }
                }
            }
        }
    });
}

function annotateSourceCode(fileCoverage, sourceStore) {
    var codeArray,
        lineCoverageArray;
    try {
        var sourceText = sourceStore.getSource(fileCoverage.path),
            code = sourceText.split(/(?:\r?\n)|\r/),
            count = 0,
            structured = code.map(function (str) {
                count += 1;
                return {
                    line: count,
                    covered: 'neutral',
                    hits: 0,
                    text: new InsertionText(str, true)
                };
            });
        structured.unshift({line: 0, covered: null, text: new InsertionText("")});
        annotateLines(fileCoverage, structured);
        //note: order is important, since statements typically result in spanning the whole line and doing branches late
        //causes mismatched tags
        annotateBranches(fileCoverage, structured);
        annotateFunctions(fileCoverage, structured);
        annotateStatements(fileCoverage, structured);
        structured.shift();

        codeArray = structured.map(function (item) {
            return customEscape(item.text.toString()) || '&nbsp;';
        });

        lineCoverageArray = structured.map(function (item) {
            return {
                covered: item.covered,
                hits: item.hits > 0 ? item.hits + 'x' : '&nbsp;'
            };
        });

        return {
            annotatedCode: codeArray,
            lineCoverage: lineCoverageArray,
            maxLines: structured.length
        };
    } catch (ex) {
        codeArray = [ ex.message ];
        lineCoverageArray = [ { covered: 'no', hits: 0 } ];
        String(ex.stack || '').split(/\r?\n/).forEach(function (line) {
            codeArray.push(line);
            lineCoverageArray.push({ covered: 'no', hits: 0 });
        });
        return {
            annotatedCode: codeArray,
            lineCoverage: lineCoverageArray,
            maxLines: codeArray.length
        };
    }
}

module.exports = {
    annotateSourceCode: annotateSourceCode
};

