/**
 * @fileoverview HTML reporter
 * @author Julian Laval
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const encodeHTML = (function() {
    const encodeHTMLRules = {
        "&": "&#38;",
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;"
    };
    const matchHTML = /[&<>"']/ug;

    return function(code) {
        return code
            ? code.toString().replace(matchHTML, m => encodeHTMLRules[m] || m)
            : "";
    };
}());

/**
 * Get the final HTML document.
 * @param {Object} it data for the document.
 * @returns {string} HTML document.
 */
function pageTemplate(it) {
    const { reportColor, reportSummary, date, results } = it;

    return `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>ESLint Report</title>
        <style>
            body {
                font-family:Arial, "Helvetica Neue", Helvetica, sans-serif;
                font-size:16px;
                font-weight:normal;
                margin:0;
                padding:0;
                color:#333
            }
            #overview {
                padding:20px 30px
            }
            td, th {
                padding:5px 10px
            }
            h1 {
                margin:0
            }
            table {
                margin:30px;
                width:calc(100% - 60px);
                max-width:1000px;
                border-radius:5px;
                border:1px solid #ddd;
                border-spacing:0px;
            }
            th {
                font-weight:400;
                font-size:medium;
                text-align:left;
                cursor:pointer
            }
            td.clr-1, td.clr-2, th span {
                font-weight:700
            }
            th span {
                float:right;
                margin-left:20px
            }
            th span:after {
                content:"";
                clear:both;
                display:block
            }
            tr:last-child td {
                border-bottom:none
            }
            tr td:first-child, tr td:last-child {
                color:#9da0a4
            }
            #overview.bg-0, tr.bg-0 th {
                color:#468847;
                background:#dff0d8;
                border-bottom:1px solid #d6e9c6
            }
            #overview.bg-1, tr.bg-1 th {
                color:#f0ad4e;
                background:#fcf8e3;
                border-bottom:1px solid #fbeed5
            }
            #overview.bg-2, tr.bg-2 th {
                color:#b94a48;
                background:#f2dede;
                border-bottom:1px solid #eed3d7
            }
            td {
                border-bottom:1px solid #ddd
            }
            td.clr-1 {
                color:#f0ad4e
            }
            td.clr-2 {
                color:#b94a48
            }
            td a {
                color:#3a33d1;
                text-decoration:none
            }
            td a:hover {
                color:#272296;
                text-decoration:underline
            }
        </style>
    </head>
    <body>
        <div id="overview" class="bg-${reportColor}">
            <h1>ESLint Report</h1>
            <div>
                <span>${reportSummary}</span> - Generated on ${date}
            </div>
        </div>
        <table>
            <tbody>
                ${results}
            </tbody>
        </table>
        <script type="text/javascript">
            var groups = document.querySelectorAll("tr[data-group]");
            for (i = 0; i < groups.length; i++) {
                groups[i].addEventListener("click", function() {
                    var inGroup = document.getElementsByClassName(this.getAttribute("data-group"));
                    this.innerHTML = (this.innerHTML.indexOf("+") > -1) ? this.innerHTML.replace("+", "-") : this.innerHTML.replace("-", "+");
                    for (var j = 0; j < inGroup.length; j++) {
                        inGroup[j].style.display = (inGroup[j].style.display !== "none") ? "none" : "table-row";
                    }
                });
            }
        </script>
    </body>
</html>
`.trimLeft();
}

/**
 * Given a word and a count, append an s if count is not one.
 * @param {string} word A word in its singular form.
 * @param {int} count A number controlling whether word should be pluralized.
 * @returns {string} The original word with an s on the end if count is not one.
 */
function pluralize(word, count) {
    return (count === 1 ? word : `${word}s`);
}

/**
 * Renders text along the template of x problems (x errors, x warnings)
 * @param {string} totalErrors Total errors
 * @param {string} totalWarnings Total warnings
 * @returns {string} The formatted string, pluralized where necessary
 */
function renderSummary(totalErrors, totalWarnings) {
    const totalProblems = totalErrors + totalWarnings;
    let renderedText = `${totalProblems} ${pluralize("problem", totalProblems)}`;

    if (totalProblems !== 0) {
        renderedText += ` (${totalErrors} ${pluralize("error", totalErrors)}, ${totalWarnings} ${pluralize("warning", totalWarnings)})`;
    }
    return renderedText;
}

/**
 * Get the color based on whether there are errors/warnings...
 * @param {string} totalErrors Total errors
 * @param {string} totalWarnings Total warnings
 * @returns {int} The color code (0 = green, 1 = yellow, 2 = red)
 */
function renderColor(totalErrors, totalWarnings) {
    if (totalErrors !== 0) {
        return 2;
    }
    if (totalWarnings !== 0) {
        return 1;
    }
    return 0;
}

/**
 * Get HTML (table row) describing a single message.
 * @param {Object} it data for the message.
 * @returns {string} HTML (table row) describing the message.
 */
function messageTemplate(it) {
    const {
        parentIndex,
        lineNumber,
        columnNumber,
        severityNumber,
        severityName,
        message,
        ruleUrl,
        ruleId
    } = it;

    return `
<tr style="display:none" class="f-${parentIndex}">
    <td>${lineNumber}:${columnNumber}</td>
    <td class="clr-${severityNumber}">${severityName}</td>
    <td>${encodeHTML(message)}</td>
    <td>
        <a href="${ruleUrl ? ruleUrl : ""}" target="_blank" rel="noopener noreferrer">${ruleId ? ruleId : ""}</a>
    </td>
</tr>
`.trimLeft();
}

/**
 * Get HTML (table rows) describing the messages.
 * @param {Array} messages Messages.
 * @param {int} parentIndex Index of the parent HTML row.
 * @param {Object} rulesMeta Dictionary containing metadata for each rule executed by the analysis.
 * @returns {string} HTML (table rows) describing the messages.
 */
function renderMessages(messages, parentIndex, rulesMeta) {

    /**
     * Get HTML (table row) describing a message.
     * @param {Object} message Message.
     * @returns {string} HTML (table row) describing a message.
     */
    return messages.map(message => {
        const lineNumber = message.line || 0;
        const columnNumber = message.column || 0;
        let ruleUrl;

        if (rulesMeta) {
            const meta = rulesMeta[message.ruleId];

            if (meta && meta.docs && meta.docs.url) {
                ruleUrl = meta.docs.url;
            }
        }

        return messageTemplate({
            parentIndex,
            lineNumber,
            columnNumber,
            severityNumber: message.severity,
            severityName: message.severity === 1 ? "Warning" : "Error",
            message: message.message,
            ruleId: message.ruleId,
            ruleUrl
        });
    }).join("\n");
}

/**
 * Get HTML (table row) describing the result for a single file.
 * @param {Object} it data for the file.
 * @returns {string} HTML (table row) describing the result for the file.
 */
function resultTemplate(it) {
    const { color, index, filePath, summary } = it;

    return `
<tr class="bg-${color}" data-group="f-${index}">
    <th colspan="4">
        [+] ${encodeHTML(filePath)}
        <span>${encodeHTML(summary)}</span>
    </th>
</tr>
`.trimLeft();
}

// eslint-disable-next-line jsdoc/require-description
/**
 * @param {Array} results Test results.
 * @param {Object} rulesMeta Dictionary containing metadata for each rule executed by the analysis.
 * @returns {string} HTML string describing the results.
 */
function renderResults(results, rulesMeta) {
    return results.map((result, index) => resultTemplate({
        index,
        color: renderColor(result.errorCount, result.warningCount),
        filePath: result.filePath,
        summary: renderSummary(result.errorCount, result.warningCount)
    }) + renderMessages(result.messages, index, rulesMeta)).join("\n");
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = function(results, data) {
    let totalErrors,
        totalWarnings;

    const metaData = data ? data.rulesMeta : {};

    totalErrors = 0;
    totalWarnings = 0;

    // Iterate over results to get totals
    results.forEach(result => {
        totalErrors += result.errorCount;
        totalWarnings += result.warningCount;
    });

    return pageTemplate({
        date: new Date(),
        reportColor: renderColor(totalErrors, totalWarnings),
        reportSummary: renderSummary(totalErrors, totalWarnings),
        results: renderResults(results, metaData)
    });
};
