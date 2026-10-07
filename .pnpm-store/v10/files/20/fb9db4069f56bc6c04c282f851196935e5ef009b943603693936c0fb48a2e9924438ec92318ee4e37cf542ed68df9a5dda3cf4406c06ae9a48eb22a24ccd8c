import { getNodePath, getNodeValue } from '../parser/jsonParser.js';
import '../jsonLanguageTypes.js';
import { Range } from '../../../../vscode-languageserver-types/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class JSONHover {
    constructor(schemaService, contributions = [], promiseConstructor) {
        this.schemaService = schemaService;
        this.contributions = contributions;
        this.promise = promiseConstructor || Promise;
    }
    doHover(document, position, doc) {
        const offset = document.offsetAt(position);
        let node = doc.getNodeFromOffset(offset);
        if (!node || (node.type === 'object' || node.type === 'array') && offset > node.offset + 1 && offset < node.offset + node.length - 1) {
            return this.promise.resolve(null);
        }
        const hoverRangeNode = node;
        // use the property description when hovering over an object key
        if (node.type === 'string') {
            const parent = node.parent;
            if (parent && parent.type === 'property' && parent.keyNode === node) {
                node = parent.valueNode;
                if (!node) {
                    return this.promise.resolve(null);
                }
            }
        }
        const hoverRange = Range.create(document.positionAt(hoverRangeNode.offset), document.positionAt(hoverRangeNode.offset + hoverRangeNode.length));
        const createHover = (contents) => {
            const result = {
                contents: contents,
                range: hoverRange
            };
            return result;
        };
        const location = getNodePath(node);
        for (let i = this.contributions.length - 1; i >= 0; i--) {
            const contribution = this.contributions[i];
            const promise = contribution.getInfoContribution(document.uri, location);
            if (promise) {
                return promise.then(htmlContent => createHover(htmlContent));
            }
        }
        return this.schemaService.getSchemaForResource(document.uri, doc).then((schema) => {
            if (schema && node) {
                const matchingSchemas = doc.getMatchingSchemas(schema.schema, node.offset);
                let title = undefined;
                let markdownDescription = undefined;
                let markdownEnumValueDescription = undefined, enumValue = undefined;
                matchingSchemas.every((s) => {
                    if (s.node === node && !s.inverted && s.schema) {
                        title = title || s.schema.title;
                        markdownDescription = markdownDescription || s.schema.markdownDescription || toMarkdown(s.schema.description);
                        if (s.schema.enum) {
                            const idx = s.schema.enum.indexOf(getNodeValue(node));
                            if (s.schema.markdownEnumDescriptions) {
                                markdownEnumValueDescription = s.schema.markdownEnumDescriptions[idx];
                            }
                            else if (s.schema.enumDescriptions) {
                                markdownEnumValueDescription = toMarkdown(s.schema.enumDescriptions[idx]);
                            }
                            if (markdownEnumValueDescription) {
                                enumValue = s.schema.enum[idx];
                                if (typeof enumValue !== 'string') {
                                    enumValue = JSON.stringify(enumValue);
                                }
                            }
                        }
                    }
                    return true;
                });
                let result = '';
                if (title) {
                    result = toMarkdown(title);
                }
                if (markdownDescription) {
                    if (result.length > 0) {
                        result += "\n\n";
                    }
                    result += markdownDescription;
                }
                if (markdownEnumValueDescription) {
                    if (result.length > 0) {
                        result += "\n\n";
                    }
                    result += `\`${toMarkdownCodeBlock(enumValue)}\`: ${markdownEnumValueDescription}`;
                }
                return createHover([result]);
            }
            return null;
        });
    }
}
function toMarkdown(plain) {
    if (plain) {
        const res = plain.replace(/([^\n\r])(\r?\n)([^\n\r])/gm, '$1\n\n$3'); // single new lines to \n\n (Markdown paragraph)
        return res.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&"); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
    }
    return undefined;
}
function toMarkdownCodeBlock(content) {
    // see https://daringfireball.net/projects/markdown/syntax#precode
    if (content.indexOf('`') !== -1) {
        return '`` ' + content + ' ``';
    }
    return content;
}

export { JSONHover };
