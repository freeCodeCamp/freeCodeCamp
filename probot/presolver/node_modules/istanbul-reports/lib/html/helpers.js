/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
function registerHelpers(handlebars) {

    handlebars.registerHelper('show_picture', function (opts) {
        var num = Number(opts.fn(this)),
            rest,
            cls = '';
        if (isFinite(num)) {
            if (num === 100) {
                cls = ' cover-full';
            }
            num = Math.floor(num);
            rest = 100 - num;
            return '<div class="cover-fill' + cls + '" style="width: ' + num + '%;"></div>' +
                '<div class="cover-empty" style="width:' + rest + '%;"></div>';
        } else {
            return '';
        }
    });

    handlebars.registerHelper('if_has_ignores', function (metrics, opts) {
        return (metrics.statements.skipped +
        metrics.functions.skipped +
        metrics.branches.skipped) === 0 ? '' : opts.fn(this);
    });

    handlebars.registerHelper('show_ignores', function (metrics) {
        var statements = metrics.statements.skipped,
            functions = metrics.functions.skipped,
            branches = metrics.branches.skipped,
            result;

        if (statements === 0 && functions === 0 && branches === 0) {
            return '<span class="ignore-none">none</span>';
        }

        result = [];
        if (statements > 0) {
            result.push(statements === 1 ? '1 statement' : statements + ' statements');
        }
        if (functions > 0) {
            result.push(functions === 1 ? '1 function' : functions + ' functions');
        }
        if (branches > 0) {
            result.push(branches === 1 ? '1 branch' : branches + ' branches');
        }

        return result.join(', ');
    });

    handlebars.registerHelper('show_lines', function (opts) {
        var maxLines = Number(opts.fn(this)),
            i,
            array = [];
        for (i = 0; i < maxLines; i += 1) {
            array[i] = i + 1;
        }
        return array.join('\n');
    });

    handlebars.registerHelper('show_line_execution_counts', function (context) {
        var array = [];
        context.forEach(function (data) {
            array.push('<span class="cline-any cline-' + data.covered + '">' + data.hits + '</span>');
        });
        return array.join('\n');
    });

    handlebars.registerHelper('show_code', function (context /*, opts */) {
        return context.join('\n');
    });
}

module.exports = {
    registerHelpers: registerHelpers
};
