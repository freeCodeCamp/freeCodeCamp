/**
 * @fileoverview HTML reporter
 * @author Julian Laval
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const encodeHTML = (function () {
	const encodeHTMLRules = {
		"&": "&#38;",
		"<": "&#60;",
		">": "&#62;",
		'"': "&#34;",
		"'": "&#39;",
	};
	const matchHTML = /[&<>"']/gu;

	return function (code) {
		return code
			? code.toString().replace(matchHTML, m => encodeHTMLRules[m] || m)
			: "";
	};
})();

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
        <link rel="icon" type="image/png" sizes="any" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAHaAAAB2gGFomX7AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABD1JREFUWMPFl11sk2UUx3/nbYtjxS1MF7MLMTECMgSTtSSyrQkLhAj7UBPnDSEGoxegGzMwojhXVpmTAA5iYpSoMQa8GBhFOrMFk03buei6yRAlcmOM0SEmU9d90b19jxcM1o5+sGnsc/e+z/l6ztf/HFFVMnns6QieeOCHBePGsHM+wrOtvLG2C4WRVDSSygNV7sCjlspxwDnPB44aols/DXk+mbMBmx/6OseITF1CuOtfevkPh2Uu+/jbdX8lujSScRlT5r7/QDlAfsRmfzmpnkQ/H3H13gf6bBrBn1uqK8WylgEnU8eZmk1repbfchJG1TyKyIKEwuBHFd3lD3naY3O1siiwXsVoBV2VgM1ht/QQUJk2ByqKghsQziYQ8ifKgexIXmuyzC4r67Y7R+xPAfuB/Nn3Cpva+0s7khpQVtZtd4bt51BWxtBYAiciprG7c7D4SixzU9PYalDL6110Ifb/w8W9eY7JqFeFHbO8fPGyLHwwFHJNJTSgwtVTB9oaw9BlQ+tO93vOxypoaQnfEYlI43SeCHDC4TDq9+51/h5fxr33q0ZfV9g04wat9Q943rjJgCp3952W2i8Bi6eDvdsfKj0cK/DYMRyXL4/sUJUmIHd2zYMezsvLaamp4WpcWN3BXSiHpuMwbGbZlnZ8tXY4rgosy+G7oRwQ0cAsd28YGgqfU5UjCZQDLALxDg+Hv/P5Rqvj4hwrS8izXzWb4spwc1GgENFnkpWRzxeuB+ssUHgLdb9UVdt8vpGdKQpze7n7y1U3DBChNRUuqOo9c+0+qpKKxyZqtAIYla7gY4JszAAQri93BSsMRZoyBcUC+w3Q3AyOA4sNhAOZ0q7Iq0b2vUNvK5zPgP+/H8+Zetdoa6uOikhdGurxebwvJY8Iz3V1rTMNAH+opEuQj5KTT/qA1yC+wyUjBm12OidaUtCcPNNX2h0Hx2JG69VulANZAJZJwfU7rzd/FHixuXniTdM0m4GtSQT7bTartqEh9yfImUEzkwKZmTwmo5a5JwkYBfcDL01/RkR5y8iWhtPBknB8ZxwtU9UjwOrrKCeizzc25nTGg1F/turEHoU9wMLpDvWKf8DTmNCAKnd/tqUTF4ElMXJ+A5rWDJS+41WsGWzALhJ+ErBWrLj9g+pqojHxlXJX8HGUg0BsR/x1yhxf3jm4cSzpQFLp6tmi6PEE7g1ZhtZ91ufpSZUAFa6gC+UoQslNaSmypT1U8mHKiUgEKS8KfgF4EpYunFI16tsHin+OG0LcgQK7yj7g6cSzpva2D3hKVNG0Y3mVO1BkqfSlmJrHBQ4uvM12gJHc6ETW8HZVfMRmXvyxxNC1Z/o839zyXlDuCr4nsC11J+MXueaVJWn6yPv+/pJtc9oLTNN4AeTvNGByd3rlhE2x9s5pLwDoHCy+grDzWmOZ95lUtLYj5Bma126Y8eX0/zj/ADxGyViSg4BXAAAAAElFTkSuQmCC">
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjk0LjgyNSAyNTguOTgyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPg0KPHBhdGggZmlsbD0nIzgwODBGMicgZD0nTTk3LjAyMSw5OS4wMTZsNDguNDMyLTI3Ljk2MmMxLjIxMi0wLjcsMi43MDYtMC43LDMuOTE4LDBsNDguNDMzLDI3Ljk2MiBjMS4yMTEsMC43LDEuOTU5LDEuOTkzLDEuOTU5LDMuMzkzdjU1LjkyNGMwLDEuMzk5LTAuNzQ4LDIuNjkzLTEuOTU5LDMuMzk0bC00OC40MzMsMjcuOTYyYy0xLjIxMiwwLjctMi43MDYsMC43LTMuOTE4LDAgbC00OC40MzItMjcuOTYyYy0xLjIxMi0wLjctMS45NTktMS45OTQtMS45NTktMy4zOTR2LTU1LjkyNEM5NS4wNjMsMTAxLjAwOSw5NS44MSw5OS43MTYsOTcuMDIxLDk5LjAxNicvPg0KPHBhdGggZmlsbD0nIzRCMzJDMycgZD0nTTI3My4zMzYsMTI0LjQ4OEwyMTUuNDY5LDIzLjgxNmMtMi4xMDItMy42NC01Ljk4NS02LjMyNS0xMC4xODgtNi4zMjVIODkuNTQ1IGMtNC4yMDQsMC04LjA4OCwyLjY4NS0xMC4xOSw2LjMyNWwtNTcuODY3LDEwMC40NWMtMi4xMDIsMy42NDEtMi4xMDIsOC4yMzYsMCwxMS44NzdsNTcuODY3LDk5Ljg0NyBjMi4xMDIsMy42NCw1Ljk4Niw1LjUwMSwxMC4xOSw1LjUwMWgxMTUuNzM1YzQuMjAzLDAsOC4wODctMS44MDUsMTAuMTg4LTUuNDQ2bDU3Ljg2Ny0xMDAuMDEgQzI3NS40MzksMTMyLjM5NiwyNzUuNDM5LDEyOC4xMjgsMjczLjMzNiwxMjQuNDg4IE0yMjUuNDE5LDE3Mi44OThjMCwxLjQ4LTAuODkxLDIuODQ5LTIuMTc0LDMuNTlsLTczLjcxLDQyLjUyNyBjLTEuMjgyLDAuNzQtMi44ODgsMC43NC00LjE3LDBsLTczLjc2Ny00Mi41MjdjLTEuMjgyLTAuNzQxLTIuMTc5LTIuMTA5LTIuMTc5LTMuNTlWODcuODQzYzAtMS40ODEsMC44ODQtMi44NDksMi4xNjctMy41OSBsNzMuNzA3LTQyLjUyN2MxLjI4Mi0wLjc0MSwyLjg4Ni0wLjc0MSw0LjE2OCwwbDczLjc3Miw0Mi41MjdjMS4yODMsMC43NDEsMi4xODYsMi4xMDksMi4xODYsMy41OVYxNzIuODk4eicvPg0KPC9zdmc+">
        <style>
            body {
                font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
                font-size: 16px;
                font-weight: normal;
                margin: 0;
                padding: 0;
                color: #333;
            }

            #overview {
                padding: 20px 30px;
            }

            td,
            th {
                padding: 5px 10px;
            }

            h1 {
                margin: 0;
            }

            table {
                margin: 30px;
                width: calc(100% - 60px);
                max-width: 1000px;
                border-radius: 5px;
                border: 1px solid #ddd;
                border-spacing: 0;
            }

            th {
                font-weight: 400;
                font-size: medium;
                text-align: left;
                cursor: pointer;
            }

            td.clr-1,
            td.clr-2,
            th span {
                font-weight: 700;
            }

            th span {
                float: right;
                margin-left: 20px;
            }

            th span::after {
                content: "";
                clear: both;
                display: block;
            }

            tr:last-child td {
                border-bottom: none;
            }

            tr td:first-child,
            tr td:last-child {
                color: #9da0a4;
            }

            #overview.bg-0,
            tr.bg-0 th {
                color: #468847;
                background: #dff0d8;
                border-bottom: 1px solid #d6e9c6;
            }

            #overview.bg-1,
            tr.bg-1 th {
                color: #f0ad4e;
                background: #fcf8e3;
                border-bottom: 1px solid #fbeed5;
            }

            #overview.bg-2,
            tr.bg-2 th {
                color: #b94a48;
                background: #f2dede;
                border-bottom: 1px solid #eed3d7;
            }

            td {
                border-bottom: 1px solid #ddd;
            }

            td.clr-1 {
                color: #f0ad4e;
            }

            td.clr-2 {
                color: #b94a48;
            }

            td a {
                color: #3a33d1;
                text-decoration: none;
            }

            td a:hover {
                color: #272296;
                text-decoration: underline;
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
`.trimStart();
}

/**
 * Given a word and a count, append an s if count is not one.
 * @param {string} word A word in its singular form.
 * @param {number} count A number controlling whether word should be pluralized.
 * @returns {string} The original word with an s on the end if count is not one.
 */
function pluralize(word, count) {
	return count === 1 ? word : `${word}s`;
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
 * @returns {number} The color code (0 = green, 1 = yellow, 2 = red)
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
		ruleId,
	} = it;

	return `
<tr style="display: none;" class="f-${parentIndex}">
    <td>${lineNumber}:${columnNumber}</td>
    <td class="clr-${severityNumber}">${severityName}</td>
    <td>${encodeHTML(message)}</td>
    <td>
        <a href="${ruleUrl ? ruleUrl : ""}" target="_blank" rel="noopener noreferrer">${ruleId ? ruleId : ""}</a>
    </td>
</tr>
`.trimStart();
}

/**
 * Get HTML (table rows) describing the messages.
 * @param {Array} messages Messages.
 * @param {number} parentIndex Index of the parent HTML row.
 * @param {Object} rulesMeta Dictionary containing metadata for each rule executed by the analysis.
 * @returns {string} HTML (table rows) describing the messages.
 */
function renderMessages(messages, parentIndex, rulesMeta) {
	/**
	 * Get HTML (table row) describing a message.
	 * @param {Object} message Message.
	 * @returns {string} HTML (table row) describing a message.
	 */
	return messages
		.map(message => {
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
				ruleUrl,
			});
		})
		.join("\n");
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
`.trimStart();
}

/**
 * Render the results.
 * @param {Array} results Test results.
 * @param {Object} rulesMeta Dictionary containing metadata for each rule executed by the analysis.
 * @returns {string} HTML string describing the results.
 */
function renderResults(results, rulesMeta) {
	return results
		.map(
			(result, index) =>
				resultTemplate({
					index,
					color: renderColor(result.errorCount, result.warningCount),
					filePath: result.filePath,
					summary: renderSummary(
						result.errorCount,
						result.warningCount,
					),
				}) + renderMessages(result.messages, index, rulesMeta),
		)
		.join("\n");
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = function (results, data) {
	let totalErrors, totalWarnings;

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
		results: renderResults(results, metaData),
	});
};
