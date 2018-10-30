/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

var Path = require('./path'),
    util = require('util'),
    tree = require('./tree'),
    coverage = require('istanbul-lib-coverage'),
    BaseNode = tree.Node,
    BaseTree = tree.Tree;

function ReportNode(path, fileCoverage) {
    this.path = path;
    this.parent = null;
    this.fileCoverage = fileCoverage;
    this.children = [];
}

util.inherits(ReportNode, BaseNode);

ReportNode.prototype.addChild = function (child) {
    child.parent = this;
    this.children.push(child);
};

ReportNode.prototype.asRelative = function (p) {
    /* istanbul ignore if */
    if (p.substring(0,1) === '/') {
        return p.substring(1);
    }
    return p;
};

ReportNode.prototype.getQualifiedName = function () {
    return this.asRelative(this.path.toString());
};

ReportNode.prototype.getRelativeName = function () {
    var parent = this.getParent(),
        myPath = this.path,
        relPath,
        i,
        parentPath = parent ? parent.path : new Path([]);
    if (parentPath.ancestorOf(myPath)) {
        relPath = new Path(myPath.elements());
        for (i = 0; i < parentPath.length; i += 1) {
            relPath.shift();
        }
        return this.asRelative(relPath.toString());
    }
    return this.asRelative(this.path.toString());
};

ReportNode.prototype.getParent = function () {
    return this.parent;
};

ReportNode.prototype.getChildren = function () {
    return this.children;
};

ReportNode.prototype.isSummary = function () {
    return !this.fileCoverage;
};

ReportNode.prototype.getFileCoverage = function () {
    return this.fileCoverage;
};

ReportNode.prototype.getCoverageSummary = function (filesOnly) {
    var cacheProp = 'c_' + (filesOnly ? 'files' : 'full'),
        summary;

    if (this.hasOwnProperty(cacheProp)) {
        return this[cacheProp];
    }

    if (!this.isSummary()) {
        summary = this.getFileCoverage().toSummary();
    } else {
        var count = 0;
        summary = coverage.createCoverageSummary();
        this.getChildren().forEach(function (child) {
            if (filesOnly && child.isSummary()) {
                return;
            }
            count += 1;
            summary.merge(child.getCoverageSummary(filesOnly));
        });
        if (count === 0 && filesOnly) {
            summary = null;
        }
    }
    this[cacheProp] = summary;
    return summary;
};

function treeFor(root, childPrefix) {
    var tree = new BaseTree(),
        visitor,
        maybePrefix = function (node) {
            if (childPrefix && !node.isRoot()) {
                node.path.unshift(childPrefix);
            }
        };
    tree.getRoot = function () {
        return root;
    };
    visitor = {
        onDetail: function (node) {
            maybePrefix(node);
        },
        onSummary: function (node) {
            maybePrefix(node);
            node.children.sort(function (a, b) {
                var astr = a.path.toString(),
                    bstr = b.path.toString();
                return astr < bstr ? -1 : astr > bstr ? 1: /* istanbul ignore next */ 0;
            });
        }
    };
    tree.visit(visitor);
    return tree;
}

function findCommonParent(paths) {
    if (paths.length === 0) {
        return new Path([]);
    }
    var common = paths[0],
        i;

    for (i = 1; i < paths.length; i += 1) {
        common = common.commonPrefixPath(paths[i]);
        if (common.length === 0) {
            break;
        }
    }
    return common;
}

function toInitialList(coverageMap) {
    var ret = [],
        commonParent;
    coverageMap.files().forEach(function (filePath) {
        var p = new Path(filePath),
            coverage = coverageMap.fileCoverageFor(filePath);
        ret.push({
            filePath: filePath,
            path: p,
            fileCoverage: coverage
        });
    });
    commonParent = findCommonParent(ret.map(function (o) { return o.path.parent(); }));
    if (commonParent.length > 0) {
        ret.forEach(function (o) {
            o.path.splice(0, commonParent.length);
        });
    }
    return {
        list: ret,
        commonParent: commonParent
    };
}

function toDirParents(list) {
    var nodeMap = {},
        parentNodeList = [];
    list.forEach(function (o) {
        var node = new ReportNode(o.path, o.fileCoverage),
            parentPath = o.path.parent(),
            parent = nodeMap[parentPath.toString()];

        if (!parent) {
            parent = new ReportNode(parentPath);
            nodeMap[parentPath.toString()] = parent;
            parentNodeList.push(parent);
        }
        parent.addChild(node);
    });
    return parentNodeList;
}

function foldIntoParents(nodeList) {
    var ret = [], i, j;

    // sort by longest length first
    nodeList.sort(function (a, b) {
        return -1 * Path.compare(a.path , b.path);
    });

    for (i = 0; i < nodeList.length; i += 1) {
        var first = nodeList[i],
            inserted = false;

        for (j = i + 1; j < nodeList.length; j += 1) {
            var second = nodeList[j];
            if (second.path.ancestorOf(first.path)) {
                second.addChild(first);
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            ret.push(first);
        }
    }
    return ret;
}

function createRoot() {
    return new ReportNode(new Path([]));
}

function createNestedSummary(coverageMap) {
    var flattened = toInitialList(coverageMap),
        dirParents = toDirParents(flattened.list),
        topNodes = foldIntoParents(dirParents),
        root;

    if (topNodes.length === 0) {
        return treeFor(new ReportNode([]));
    }

    if (topNodes.length === 1) {
        return treeFor(topNodes[0]);
    }

    root = createRoot();
    topNodes.forEach(function (node) {
        root.addChild(node);
    });
    return treeFor(root);
}

function createPackageSummary(coverageMap) {
    var flattened = toInitialList(coverageMap),
        dirParents = toDirParents(flattened.list),
        common = flattened.commonParent,
        prefix,
        root;

    if (dirParents.length === 1) {
        root = dirParents[0];
    } else {
        root = createRoot();
        // if one of the dirs is itself the root,
        // then we need to create a top-level dir
        dirParents.forEach(function (dp) {
           if (dp.path.length === 0) {
               prefix = 'root';
           }
        });
        if (prefix && common.length > 0) {
            prefix = common.elements()[common.elements().length - 1];
        }
        dirParents.forEach(function (node) {
            root.addChild(node);
        });
    }
    return treeFor(root, prefix);
}

function createFlatSummary(coverageMap) {
    var flattened = toInitialList(coverageMap),
        list = flattened.list,
        root;

    root = createRoot();
    list.forEach(function (o) {
        var node = new ReportNode(o.path, o.fileCoverage);
        root.addChild(node);
    });
    return treeFor(root);
}

module.exports = {
    createNestedSummary:  createNestedSummary,
    createPackageSummary: createPackageSummary,
    createFlatSummary: createFlatSummary
};
