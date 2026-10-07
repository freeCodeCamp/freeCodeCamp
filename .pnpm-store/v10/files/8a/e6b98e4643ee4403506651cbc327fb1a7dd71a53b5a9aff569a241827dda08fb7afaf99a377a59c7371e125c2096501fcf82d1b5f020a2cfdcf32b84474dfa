import { ErrorCode } from '../jsonLanguageTypes.js';
import { t } from '../../../../@vscode/l10n/dist/browser.js';
import { isBoolean } from '../utils/objects.js';
import { DiagnosticSeverity, Diagnostic, Range } from '../../../../vscode-languageserver-types/lib/esm/main.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class JSONValidation {
    constructor(jsonSchemaService, promiseConstructor) {
        this.jsonSchemaService = jsonSchemaService;
        this.promise = promiseConstructor;
        this.validationEnabled = true;
    }
    configure(raw) {
        if (raw) {
            this.validationEnabled = raw.validate !== false;
            this.commentSeverity = raw.allowComments ? undefined : DiagnosticSeverity.Error;
        }
    }
    doValidation(textDocument, jsonDocument, documentSettings, schema) {
        if (!this.validationEnabled) {
            return this.promise.resolve([]);
        }
        const diagnostics = [];
        const added = {};
        const addProblem = (problem) => {
            // remove duplicated messages
            const signature = problem.range.start.line + ' ' + problem.range.start.character + ' ' + problem.message;
            if (!added[signature]) {
                added[signature] = true;
                diagnostics.push(problem);
            }
        };
        const getDiagnostics = (schema) => {
            let trailingCommaSeverity = documentSettings?.trailingCommas ? toDiagnosticSeverity(documentSettings.trailingCommas) : DiagnosticSeverity.Error;
            let commentSeverity = documentSettings?.comments ? toDiagnosticSeverity(documentSettings.comments) : this.commentSeverity;
            let schemaValidation = documentSettings?.schemaValidation ? toDiagnosticSeverity(documentSettings.schemaValidation) : DiagnosticSeverity.Warning;
            let schemaRequest = documentSettings?.schemaRequest ? toDiagnosticSeverity(documentSettings.schemaRequest) : DiagnosticSeverity.Warning;
            if (schema) {
                const addSchemaProblem = (errorMessage, errorCode) => {
                    if (jsonDocument.root && schemaRequest) {
                        const astRoot = jsonDocument.root;
                        const property = astRoot.type === 'object' ? astRoot.properties[0] : undefined;
                        if (property && property.keyNode.value === '$schema') {
                            const node = property.valueNode || property;
                            const range = Range.create(textDocument.positionAt(node.offset), textDocument.positionAt(node.offset + node.length));
                            addProblem(Diagnostic.create(range, errorMessage, schemaRequest, errorCode));
                        }
                        else {
                            const range = Range.create(textDocument.positionAt(astRoot.offset), textDocument.positionAt(astRoot.offset + 1));
                            addProblem(Diagnostic.create(range, errorMessage, schemaRequest, errorCode));
                        }
                    }
                };
                if (schema.errors.length) {
                    addSchemaProblem(schema.errors[0], ErrorCode.SchemaResolveError);
                }
                else if (schemaValidation) {
                    for (const warning of schema.warnings) {
                        addSchemaProblem(warning, ErrorCode.SchemaUnsupportedFeature);
                    }
                    const semanticErrors = jsonDocument.validate(textDocument, schema.schema, schemaValidation, documentSettings?.schemaDraft);
                    if (semanticErrors) {
                        semanticErrors.forEach(addProblem);
                    }
                }
                if (schemaAllowsComments(schema.schema)) {
                    commentSeverity = undefined;
                }
                if (schemaAllowsTrailingCommas(schema.schema)) {
                    trailingCommaSeverity = undefined;
                }
            }
            for (const p of jsonDocument.syntaxErrors) {
                if (p.code === ErrorCode.TrailingComma) {
                    if (typeof trailingCommaSeverity !== 'number') {
                        continue;
                    }
                    p.severity = trailingCommaSeverity;
                }
                addProblem(p);
            }
            if (typeof commentSeverity === 'number') {
                const message = t('Comments are not permitted in JSON.');
                jsonDocument.comments.forEach(c => {
                    addProblem(Diagnostic.create(c, message, commentSeverity, ErrorCode.CommentNotPermitted));
                });
            }
            return diagnostics;
        };
        if (schema) {
            const uri = schema.id || ('schemaservice://untitled/' + idCounter++);
            const handle = this.jsonSchemaService.registerExternalSchema({ uri, schema });
            return handle.getResolvedSchema().then(resolvedSchema => {
                return getDiagnostics(resolvedSchema);
            });
        }
        return this.jsonSchemaService.getSchemaForResource(textDocument.uri, jsonDocument).then(schema => {
            return getDiagnostics(schema);
        });
    }
    getLanguageStatus(textDocument, jsonDocument) {
        return { schemas: this.jsonSchemaService.getSchemaURIsForResource(textDocument.uri, jsonDocument) };
    }
}
let idCounter = 0;
function schemaAllowsComments(schemaRef) {
    if (schemaRef && typeof schemaRef === 'object') {
        if (isBoolean(schemaRef.allowComments)) {
            return schemaRef.allowComments;
        }
        if (schemaRef.allOf) {
            for (const schema of schemaRef.allOf) {
                const allow = schemaAllowsComments(schema);
                if (isBoolean(allow)) {
                    return allow;
                }
            }
        }
    }
    return undefined;
}
function schemaAllowsTrailingCommas(schemaRef) {
    if (schemaRef && typeof schemaRef === 'object') {
        if (isBoolean(schemaRef.allowTrailingCommas)) {
            return schemaRef.allowTrailingCommas;
        }
        const deprSchemaRef = schemaRef;
        if (isBoolean(deprSchemaRef['allowsTrailingCommas'])) { // deprecated
            return deprSchemaRef['allowsTrailingCommas'];
        }
        if (schemaRef.allOf) {
            for (const schema of schemaRef.allOf) {
                const allow = schemaAllowsTrailingCommas(schema);
                if (isBoolean(allow)) {
                    return allow;
                }
            }
        }
    }
    return undefined;
}
function toDiagnosticSeverity(severityLevel) {
    switch (severityLevel) {
        case 'error': return DiagnosticSeverity.Error;
        case 'warning': return DiagnosticSeverity.Warning;
        case 'ignore': return undefined;
    }
    return undefined;
}

export { JSONValidation };
