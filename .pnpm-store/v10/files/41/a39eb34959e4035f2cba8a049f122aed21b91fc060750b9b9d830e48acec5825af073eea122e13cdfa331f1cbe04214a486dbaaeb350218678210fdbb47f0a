import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { formatNumber } from './formatNumber.js';
import highlight from '../helpers/highlight.js';
import reverseHighlight from '../helpers/reverseHighlight.js';
import snippet from '../helpers/snippet.js';
import reverseSnippet from '../helpers/reverseSnippet.js';
import insights from '../helpers/insights.js';

function hoganHelpers(param) {
    var numberLocale = param.numberLocale;
    return {
        formatNumber: function formatNumber1(value, render) {
            return formatNumber(Number(render(value)), numberLocale);
        },
        highlight: function highlight1(options, render) {
            try {
                var highlightOptions = JSON.parse(options);
                return render(highlight(_(_$1({}, highlightOptions), {
                    hit: this
                })));
            } catch (error) {
                throw new Error('\nThe highlight helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
            }
        },
        reverseHighlight: function reverseHighlight1(options, render) {
            try {
                var reverseHighlightOptions = JSON.parse(options);
                return render(reverseHighlight(_(_$1({}, reverseHighlightOptions), {
                    hit: this
                })));
            } catch (error) {
                throw new Error('\n  The reverseHighlight helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }');
            }
        },
        snippet: function snippet1(options, render) {
            try {
                var snippetOptions = JSON.parse(options);
                return render(snippet(_(_$1({}, snippetOptions), {
                    hit: this
                })));
            } catch (error) {
                throw new Error('\nThe snippet helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
            }
        },
        reverseSnippet: function reverseSnippet1(options, render) {
            try {
                var reverseSnippetOptions = JSON.parse(options);
                return render(reverseSnippet(_(_$1({}, reverseSnippetOptions), {
                    hit: this
                })));
            } catch (error) {
                throw new Error('\n  The reverseSnippet helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }');
            }
        },
        insights: function insights1(options, render) {
            try {
                var _JSON_parse = JSON.parse(options), method = _JSON_parse.method, payload = _JSON_parse.payload;
                return render(insights(method, _$1({
                    objectIDs: [
                        this.objectID
                    ]
                }, payload)));
            } catch (error) {
                throw new Error('\nThe insights helper expects a JSON object of the format:\n{ "method": "method-name", "payload": { "eventName": "name of the event" } }');
            }
        }
    };
}

export { hoganHelpers as default };
