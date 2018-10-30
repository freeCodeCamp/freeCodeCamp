/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
/*jshint maxlen: 300 */
var fs = require('fs'),
    path = require('path'),
    handlebars = require('handlebars').create(),
    annotator = require('./annotator'),
    helpers = require('./helpers'),
    templateFor = function (name) {
        return handlebars.compile(fs.readFileSync(path.resolve(__dirname, 'templates', name + '.txt'), 'utf8'));
    },
    headerTemplate = templateFor('head'),
    footerTemplate = templateFor('foot'),
    detailTemplate = handlebars.compile([
        '<tr>',
        '<td class="line-count quiet">{{#show_lines}}{{maxLines}}{{/show_lines}}</td>',
        '<td class="line-coverage quiet">{{#show_line_execution_counts lineCoverage}}{{maxLines}}{{/show_line_execution_counts}}</td>',
        '<td class="text"><pre class="prettyprint lang-js">{{#show_code annotatedCode}}{{/show_code}}</pre></td>',
        '</tr>\n'
    ].join('')),
    summaryTableHeader = [
        '<div class="pad1">',
        '<table class="coverage-summary">',
        '<thead>',
        '<tr>',
        '   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>',
        '   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>',
        '   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>',
        '   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>',
        '   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>',
        '   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>',
        '   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>',
        '   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>',
        '   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>',
        '   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>',
        '</tr>',
        '</thead>',
        '<tbody>'
    ].join('\n'),
    summaryLineTemplate = handlebars.compile([
        '<tr>',
        '<td class="file {{reportClasses.statements}}" data-value="{{file}}"><a href="{{output}}">{{file}}</a></td>',
        '<td data-value="{{metrics.statements.pct}}" class="pic {{reportClasses.statements}}"><div class="chart">{{#show_picture}}{{metrics.statements.pct}}{{/show_picture}}</div></td>',
        '<td data-value="{{metrics.statements.pct}}" class="pct {{reportClasses.statements}}">{{metrics.statements.pct}}%</td>',
        '<td data-value="{{metrics.statements.total}}" class="abs {{reportClasses.statements}}">{{metrics.statements.covered}}/{{metrics.statements.total}}</td>',
        '<td data-value="{{metrics.branches.pct}}" class="pct {{reportClasses.branches}}">{{metrics.branches.pct}}%</td>',
        '<td data-value="{{metrics.branches.total}}" class="abs {{reportClasses.branches}}">{{metrics.branches.covered}}/{{metrics.branches.total}}</td>',
        '<td data-value="{{metrics.functions.pct}}" class="pct {{reportClasses.functions}}">{{metrics.functions.pct}}%</td>',
        '<td data-value="{{metrics.functions.total}}" class="abs {{reportClasses.functions}}">{{metrics.functions.covered}}/{{metrics.functions.total}}</td>',
        '<td data-value="{{metrics.lines.pct}}" class="pct {{reportClasses.lines}}">{{metrics.lines.pct}}%</td>',
        '<td data-value="{{metrics.lines.total}}" class="abs {{reportClasses.lines}}">{{metrics.lines.covered}}/{{metrics.lines.total}}</td>',
        '</tr>\n'
    ].join('\n\t')),
    summaryTableFooter = [
        '</tbody>',
        '</table>',
        '</div>'
    ].join('\n');

helpers.registerHelpers(handlebars);

var standardLinkMapper = {

    getPath: function (node) {
        if (typeof node === 'string') {
            return node;
        }
        var filePath = node.getQualifiedName();
        if (node.isSummary()) {
            if (filePath !== '') {
                filePath += "/index.html";
            } else {
                filePath = "index.html";
            }
        } else {
            filePath += ".html";
        }
        return filePath;
    },

    relativePath: function (source, target) {
        var targetPath = this.getPath(target),
            sourcePath = path.dirname(this.getPath(source));
        return path.relative(sourcePath, targetPath);
    },

    assetPath: function (node, name) {
        return this.relativePath(this.getPath(node), name);
    }
};

function getBreadcrumbHtml(node, linkMapper) {
    var parent = node.getParent(),
        nodePath = [],
        linkPath;

    while (parent) {
        nodePath.push(parent);
        parent = parent.getParent();
    }

    linkPath = nodePath.map(function (ancestor) {
        var target = linkMapper.relativePath(node, ancestor),
            name = ancestor.getRelativeName() ||  'All files';
        return '<a href="' + target + '">' + name + '</a>';
    });

    linkPath.reverse();
    return linkPath.length > 0 ? linkPath.join(' / ') + ' ' +
        node.getRelativeName() : 'All files';
}

function fillTemplate(node, templateData, linkMapper, context) {
    var summary = node.getCoverageSummary();
    templateData.entity = node.getQualifiedName() || 'All files';
    templateData.metrics = summary;
    templateData.reportClass = context.classForPercent('statements', summary.statements.pct);
    templateData.pathHtml = getBreadcrumbHtml(node, linkMapper);
    templateData.base = {
        css: linkMapper.assetPath(node, 'base.css')
    };
    templateData.sorter = {
        js: linkMapper.assetPath(node, 'sorter.js'),
        image: linkMapper.assetPath(node, 'sort-arrow-sprite.png')
    };
    templateData.prettify = {
        js: linkMapper.assetPath(node, 'prettify.js'),
        css: linkMapper.assetPath(node, 'prettify.css')
    };
}

function HtmlReport(opts) {
    this.verbose = opts.verbose;
    this.linkMapper = opts.linkMapper || standardLinkMapper;
    this.subdir = opts.subdir || '';
    this.date = Date();
}

HtmlReport.prototype.getTemplateData = function () {
    return { datetime: this.date };
};

HtmlReport.prototype.getWriter = function (context) {
    if (!this.subdir) {
        return context.writer;
    }
    return context.writer.writerForDir(this.subdir);
};

HtmlReport.prototype.onStart = function (root, context) {
    var that = this,
        copyAssets = function (subdir, writer) {
            var srcDir = path.resolve(__dirname, 'assets', subdir);
            fs.readdirSync(srcDir).forEach(function (f) {
                var resolvedSource = path.resolve(srcDir, f),
                    resolvedDestination = '.',
                    stat = fs.statSync(resolvedSource),
                    dest;

                if (stat.isFile()) {
                    dest = resolvedDestination + '/' + f;
                    if (this.verbose) {
                        console.log('Write asset: ' + dest);
                    }
                    writer.copyFile(resolvedSource, dest);
                }
            });
        };

    ['.', 'vendor'].forEach(function (subdir) {
        copyAssets(subdir, that.getWriter(context));
    });
};

HtmlReport.prototype.onSummary = function (node, context) {
    var linkMapper = this.linkMapper,
        templateData = this.getTemplateData(),
        children = node.getChildren(),
        cw;

    fillTemplate(node, templateData, linkMapper, context);
    cw = this.getWriter(context).writeFile(linkMapper.getPath(node));
    cw.write(headerTemplate(templateData));
    cw.write(summaryTableHeader);
    children.forEach(function (child) {
        var metrics = child.getCoverageSummary(),
            reportClasses = {
                statements: context.classForPercent('statements', metrics.statements.pct),
                lines: context.classForPercent('lines', metrics.lines.pct),
                functions: context.classForPercent('functions', metrics.functions.pct),
                branches: context.classForPercent('branches', metrics.branches.pct)
            },
            data = {
                metrics: metrics,
                reportClasses: reportClasses,
                file: child.getRelativeName(),
                output: linkMapper.relativePath(node, child)
            };
        cw.write(summaryLineTemplate(data) + '\n');
    });
    cw.write(summaryTableFooter);
    cw.write(footerTemplate(templateData));
    cw.close();
};

HtmlReport.prototype.onDetail = function (node, context) {
    var linkMapper = this.linkMapper,
        templateData = this.getTemplateData(),
        cw;

    fillTemplate(node, templateData, linkMapper, context);
    cw = this.getWriter(context).writeFile(linkMapper.getPath(node));
    cw.write(headerTemplate(templateData));
    cw.write('<pre><table class="coverage">\n');
    cw.write(detailTemplate(annotator.annotateSourceCode(node.getFileCoverage(), context)));
    cw.write('</table></pre>\n');
    cw.write(footerTemplate(templateData));
    cw.close();
};

module.exports = HtmlReport;

