import { parse } from '../../../../jsonc-parser/lib/esm/main.js';
import { URI } from '../../../../vscode-uri/lib/esm/index.js';
import { endsWith, extendedRegExp } from '../utils/strings.js';
import { asSchema } from '../parser/jsonParser.js';
import { t } from '../../../../@vscode/l10n/dist/browser.js';
import { createRegex } from '../utils/glob.js';
import { isObject, isString } from '../utils/objects.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const BANG = '!';
const PATH_SEP = '/';
class FilePatternAssociation {
    constructor(pattern, folderUri, uris) {
        this.folderUri = folderUri;
        this.uris = uris;
        this.globWrappers = [];
        try {
            for (let patternString of pattern) {
                const include = patternString[0] !== BANG;
                if (!include) {
                    patternString = patternString.substring(1);
                }
                if (patternString.length > 0) {
                    if (patternString[0] === PATH_SEP) {
                        patternString = patternString.substring(1);
                    }
                    this.globWrappers.push({
                        regexp: createRegex('**/' + patternString, { extended: true, globstar: true }),
                        include: include,
                    });
                }
            }
            ;
            if (folderUri) {
                folderUri = normalizeResourceForMatching(folderUri);
                if (!folderUri.endsWith('/')) {
                    folderUri = folderUri + '/';
                }
                this.folderUri = folderUri;
            }
        }
        catch (e) {
            this.globWrappers.length = 0;
            this.uris = [];
        }
    }
    matchesPattern(fileName) {
        if (this.folderUri && !fileName.startsWith(this.folderUri)) {
            return false;
        }
        let match = false;
        for (const { regexp, include } of this.globWrappers) {
            if (regexp.test(fileName)) {
                match = include;
            }
        }
        return match;
    }
    getURIs() {
        return this.uris;
    }
}
class SchemaHandle {
    constructor(service, uri, unresolvedSchemaContent) {
        this.service = service;
        this.uri = uri;
        this.dependencies = new Set();
        this.anchors = undefined;
        if (unresolvedSchemaContent) {
            this.unresolvedSchema = this.service.promise.resolve(new UnresolvedSchema(unresolvedSchemaContent));
        }
    }
    getUnresolvedSchema() {
        if (!this.unresolvedSchema) {
            this.unresolvedSchema = this.service.loadSchema(this.uri);
        }
        return this.unresolvedSchema;
    }
    getResolvedSchema() {
        if (!this.resolvedSchema) {
            this.resolvedSchema = this.getUnresolvedSchema().then(unresolved => {
                return this.service.resolveSchemaContent(unresolved, this);
            });
        }
        return this.resolvedSchema;
    }
    clearSchema() {
        const hasChanges = !!this.unresolvedSchema;
        this.resolvedSchema = undefined;
        this.unresolvedSchema = undefined;
        this.dependencies.clear();
        this.anchors = undefined;
        return hasChanges;
    }
}
class UnresolvedSchema {
    constructor(schema, errors = []) {
        this.schema = schema;
        this.errors = errors;
    }
}
class ResolvedSchema {
    constructor(schema, errors = [], warnings = [], schemaDraft) {
        this.schema = schema;
        this.errors = errors;
        this.warnings = warnings;
        this.schemaDraft = schemaDraft;
    }
    getSection(path) {
        const schemaRef = this.getSectionRecursive(path, this.schema);
        if (schemaRef) {
            return asSchema(schemaRef);
        }
        return undefined;
    }
    getSectionRecursive(path, schema) {
        if (!schema || typeof schema === 'boolean' || path.length === 0) {
            return schema;
        }
        const next = path.shift();
        if (schema.properties && typeof schema.properties[next]) {
            return this.getSectionRecursive(path, schema.properties[next]);
        }
        else if (schema.patternProperties) {
            for (const pattern of Object.keys(schema.patternProperties)) {
                const regex = extendedRegExp(pattern);
                if (regex?.test(next)) {
                    return this.getSectionRecursive(path, schema.patternProperties[pattern]);
                }
            }
        }
        else if (typeof schema.additionalProperties === 'object') {
            return this.getSectionRecursive(path, schema.additionalProperties);
        }
        else if (next.match('[0-9]+')) {
            if (Array.isArray(schema.items)) {
                const index = parseInt(next, 10);
                if (!isNaN(index) && schema.items[index]) {
                    return this.getSectionRecursive(path, schema.items[index]);
                }
            }
            else if (schema.items) {
                return this.getSectionRecursive(path, schema.items);
            }
        }
        return undefined;
    }
}
class JSONSchemaService {
    constructor(requestService, contextService, promiseConstructor) {
        this.contextService = contextService;
        this.requestService = requestService;
        this.promiseConstructor = promiseConstructor || Promise;
        this.callOnDispose = [];
        this.contributionSchemas = {};
        this.contributionAssociations = [];
        this.schemasById = {};
        this.filePatternAssociations = [];
        this.registeredSchemasIds = {};
    }
    getRegisteredSchemaIds(filter) {
        return Object.keys(this.registeredSchemasIds).filter(id => {
            const scheme = URI.parse(id).scheme;
            return scheme !== 'schemaservice' && (!filter || filter(scheme));
        });
    }
    get promise() {
        return this.promiseConstructor;
    }
    dispose() {
        while (this.callOnDispose.length > 0) {
            this.callOnDispose.pop()();
        }
    }
    onResourceChange(uri) {
        // always clear this local cache when a resource changes
        this.cachedSchemaForResource = undefined;
        let hasChanges = false;
        uri = normalizeId(uri);
        const toWalk = [uri];
        const all = Object.keys(this.schemasById).map(key => this.schemasById[key]);
        while (toWalk.length) {
            const curr = toWalk.pop();
            for (let i = 0; i < all.length; i++) {
                const handle = all[i];
                if (handle && (handle.uri === curr || handle.dependencies.has(curr))) {
                    if (handle.uri !== curr) {
                        toWalk.push(handle.uri);
                    }
                    if (handle.clearSchema()) {
                        hasChanges = true;
                    }
                    all[i] = undefined;
                }
            }
        }
        return hasChanges;
    }
    setSchemaContributions(schemaContributions) {
        if (schemaContributions.schemas) {
            const schemas = schemaContributions.schemas;
            for (const id in schemas) {
                const normalizedId = normalizeId(id);
                this.contributionSchemas[normalizedId] = this.addSchemaHandle(normalizedId, schemas[id]);
            }
        }
        if (Array.isArray(schemaContributions.schemaAssociations)) {
            const schemaAssociations = schemaContributions.schemaAssociations;
            for (let schemaAssociation of schemaAssociations) {
                const uris = schemaAssociation.uris.map(normalizeId);
                const association = this.addFilePatternAssociation(schemaAssociation.pattern, schemaAssociation.folderUri, uris);
                this.contributionAssociations.push(association);
            }
        }
    }
    addSchemaHandle(id, unresolvedSchemaContent) {
        const schemaHandle = new SchemaHandle(this, id, unresolvedSchemaContent);
        this.schemasById[id] = schemaHandle;
        return schemaHandle;
    }
    getOrAddSchemaHandle(id, unresolvedSchemaContent) {
        return this.schemasById[id] || this.addSchemaHandle(id, unresolvedSchemaContent);
    }
    addFilePatternAssociation(pattern, folderUri, uris) {
        const fpa = new FilePatternAssociation(pattern, folderUri, uris);
        this.filePatternAssociations.push(fpa);
        return fpa;
    }
    registerExternalSchema(config) {
        const id = normalizeId(config.uri);
        this.registeredSchemasIds[id] = true;
        this.cachedSchemaForResource = undefined;
        if (config.fileMatch && config.fileMatch.length) {
            this.addFilePatternAssociation(config.fileMatch, config.folderUri, [id]);
        }
        return config.schema ? this.addSchemaHandle(id, config.schema) : this.getOrAddSchemaHandle(id);
    }
    clearExternalSchemas() {
        this.schemasById = {};
        this.filePatternAssociations = [];
        this.registeredSchemasIds = {};
        this.cachedSchemaForResource = undefined;
        for (const id in this.contributionSchemas) {
            this.schemasById[id] = this.contributionSchemas[id];
            this.registeredSchemasIds[id] = true;
        }
        for (const contributionAssociation of this.contributionAssociations) {
            this.filePatternAssociations.push(contributionAssociation);
        }
    }
    getResolvedSchema(schemaId) {
        const id = normalizeId(schemaId);
        const schemaHandle = this.schemasById[id];
        if (schemaHandle) {
            return schemaHandle.getResolvedSchema();
        }
        return this.promise.resolve(undefined);
    }
    loadSchema(url) {
        if (!this.requestService) {
            const errorMessage = t('Unable to load schema from \'{0}\'. No schema request service available', toDisplayString(url));
            return this.promise.resolve(new UnresolvedSchema({}, [errorMessage]));
        }
        if (url.startsWith('http://json-schema.org/')) {
            url = 'https' + url.substring(4); // always access json-schema.org with https. See https://github.com/microsoft/vscode/issues/195189
        }
        return this.requestService(url).then(content => {
            if (!content) {
                const errorMessage = t('Unable to load schema from \'{0}\': No content.', toDisplayString(url));
                return new UnresolvedSchema({}, [errorMessage]);
            }
            const errors = [];
            if (content.charCodeAt(0) === 65279) {
                errors.push(t('Problem reading content from \'{0}\': UTF-8 with BOM detected, only UTF 8 is allowed.', toDisplayString(url)));
                content = content.trimStart();
            }
            let schemaContent = {};
            const jsonErrors = [];
            schemaContent = parse(content, jsonErrors);
            if (jsonErrors.length) {
                errors.push(t('Unable to parse content from \'{0}\': Parse error at offset {1}.', toDisplayString(url), jsonErrors[0].offset));
            }
            return new UnresolvedSchema(schemaContent, errors);
        }, (error) => {
            let errorMessage = error.toString();
            const errorSplit = error.toString().split('Error: ');
            if (errorSplit.length > 1) {
                // more concise error message, URL and context are attached by caller anyways
                errorMessage = errorSplit[1];
            }
            if (endsWith(errorMessage, '.')) {
                errorMessage = errorMessage.substr(0, errorMessage.length - 1);
            }
            return new UnresolvedSchema({}, [t('Unable to load schema from \'{0}\': {1}.', toDisplayString(url), errorMessage)]);
        });
    }
    resolveSchemaContent(schemaToResolve, handle) {
        const resolveErrors = schemaToResolve.errors.slice(0);
        const schema = schemaToResolve.schema;
        let schemaDraft = schema.$schema ? normalizeId(schema.$schema) : undefined;
        if (schemaDraft === 'http://json-schema.org/draft-03/schema') {
            return this.promise.resolve(new ResolvedSchema({}, [t("Draft-03 schemas are not supported.")], [], schemaDraft));
        }
        let usesUnsupportedFeatures = new Set();
        const contextService = this.contextService;
        const findSectionByJSONPointer = (schema, path) => {
            path = decodeURIComponent(path);
            let current = schema;
            if (path[0] === '/') {
                path = path.substring(1);
            }
            path.split('/').some((part) => {
                part = part.replace(/~1/g, '/').replace(/~0/g, '~');
                current = current[part];
                return !current;
            });
            return current;
        };
        const findSchemaById = (schema, handle, id) => {
            if (!handle.anchors) {
                handle.anchors = collectAnchors(schema);
            }
            return handle.anchors.get(id);
        };
        const merge = (target, section) => {
            for (const key in section) {
                if (section.hasOwnProperty(key) && key !== 'id' && key !== '$id') {
                    target[key] = section[key];
                }
            }
        };
        const mergeRef = (target, sourceRoot, sourceHandle, refSegment) => {
            let section;
            if (refSegment === undefined || refSegment.length === 0) {
                section = sourceRoot;
            }
            else if (refSegment.charAt(0) === '/') {
                // A $ref to a JSON Pointer (i.e #/definitions/foo)
                section = findSectionByJSONPointer(sourceRoot, refSegment);
            }
            else {
                // A $ref to a sub-schema with an $id (i.e #hello)
                section = findSchemaById(sourceRoot, sourceHandle, refSegment);
            }
            if (section) {
                merge(target, section);
            }
            else {
                resolveErrors.push(t('$ref \'{0}\' in \'{1}\' can not be resolved.', refSegment || '', sourceHandle.uri));
            }
        };
        const resolveExternalLink = (node, uri, refSegment, parentHandle) => {
            if (contextService && !/^[A-Za-z][A-Za-z0-9+\-.+]*:\/\/.*/.test(uri)) {
                uri = contextService.resolveRelativePath(uri, parentHandle.uri);
            }
            uri = normalizeId(uri);
            const referencedHandle = this.getOrAddSchemaHandle(uri);
            return referencedHandle.getUnresolvedSchema().then(unresolvedSchema => {
                parentHandle.dependencies.add(uri);
                if (unresolvedSchema.errors.length) {
                    const loc = refSegment ? uri + '#' + refSegment : uri;
                    resolveErrors.push(t('Problems loading reference \'{0}\': {1}', loc, unresolvedSchema.errors[0]));
                }
                mergeRef(node, unresolvedSchema.schema, referencedHandle, refSegment);
                return resolveRefs(node, unresolvedSchema.schema, referencedHandle);
            });
        };
        const resolveRefs = (node, parentSchema, parentHandle) => {
            const openPromises = [];
            this.traverseNodes(node, next => {
                const seenRefs = new Set();
                while (next.$ref) {
                    const ref = next.$ref;
                    const segments = ref.split('#', 2);
                    delete next.$ref;
                    if (segments[0].length > 0) {
                        // This is a reference to an external schema
                        openPromises.push(resolveExternalLink(next, segments[0], segments[1], parentHandle));
                        return;
                    }
                    else {
                        // This is a reference inside the current schema
                        if (!seenRefs.has(ref)) {
                            const id = segments[1];
                            mergeRef(next, parentSchema, parentHandle, id);
                            seenRefs.add(ref);
                        }
                    }
                }
                if (next.$recursiveRef) {
                    usesUnsupportedFeatures.add('$recursiveRef');
                }
                if (next.$dynamicRef) {
                    usesUnsupportedFeatures.add('$dynamicRef');
                }
            });
            return this.promise.all(openPromises);
        };
        const collectAnchors = (root) => {
            const result = new Map();
            this.traverseNodes(root, next => {
                const id = next.$id || next.id;
                const anchor = isString(id) && id.charAt(0) === '#' ? id.substring(1) : next.$anchor;
                if (anchor) {
                    if (result.has(anchor)) {
                        resolveErrors.push(t('Duplicate anchor declaration: \'{0}\'', anchor));
                    }
                    else {
                        result.set(anchor, next);
                    }
                }
                if (next.$recursiveAnchor) {
                    usesUnsupportedFeatures.add('$recursiveAnchor');
                }
                if (next.$dynamicAnchor) {
                    usesUnsupportedFeatures.add('$dynamicAnchor');
                }
            });
            return result;
        };
        return resolveRefs(schema, schema, handle).then(_ => {
            let resolveWarnings = [];
            if (usesUnsupportedFeatures.size) {
                resolveWarnings.push(t('The schema uses meta-schema features ({0}) that are not yet supported by the validator.', Array.from(usesUnsupportedFeatures.keys()).join(', ')));
            }
            return new ResolvedSchema(schema, resolveErrors, resolveWarnings, schemaDraft);
        });
    }
    traverseNodes(root, handle) {
        if (!root || typeof root !== 'object') {
            return Promise.resolve(null);
        }
        const seen = new Set();
        const collectEntries = (...entries) => {
            for (const entry of entries) {
                if (isObject(entry)) {
                    toWalk.push(entry);
                }
            }
        };
        const collectMapEntries = (...maps) => {
            for (const map of maps) {
                if (isObject(map)) {
                    for (const k in map) {
                        const key = k;
                        const entry = map[key];
                        if (isObject(entry)) {
                            toWalk.push(entry);
                        }
                    }
                }
            }
        };
        const collectArrayEntries = (...arrays) => {
            for (const array of arrays) {
                if (Array.isArray(array)) {
                    for (const entry of array) {
                        if (isObject(entry)) {
                            toWalk.push(entry);
                        }
                    }
                }
            }
        };
        const collectEntryOrArrayEntries = (items) => {
            if (Array.isArray(items)) {
                for (const entry of items) {
                    if (isObject(entry)) {
                        toWalk.push(entry);
                    }
                }
            }
            else if (isObject(items)) {
                toWalk.push(items);
            }
        };
        const toWalk = [root];
        let next = toWalk.pop();
        while (next) {
            if (!seen.has(next)) {
                seen.add(next);
                handle(next);
                collectEntries(next.additionalItems, next.additionalProperties, next.not, next.contains, next.propertyNames, next.if, next.then, next.else, next.unevaluatedItems, next.unevaluatedProperties);
                collectMapEntries(next.definitions, next.$defs, next.properties, next.patternProperties, next.dependencies, next.dependentSchemas);
                collectArrayEntries(next.anyOf, next.allOf, next.oneOf, next.prefixItems);
                collectEntryOrArrayEntries(next.items);
            }
            next = toWalk.pop();
        }
    }
    ;
    getSchemaFromProperty(resource, document) {
        if (document.root?.type === 'object') {
            for (const p of document.root.properties) {
                if (p.keyNode.value === '$schema' && p.valueNode?.type === 'string') {
                    let schemaId = p.valueNode.value;
                    if (this.contextService && !/^\w[\w\d+.-]*:/.test(schemaId)) { // has scheme
                        schemaId = this.contextService.resolveRelativePath(schemaId, resource);
                    }
                    return schemaId;
                }
            }
        }
        return undefined;
    }
    getAssociatedSchemas(resource) {
        const seen = Object.create(null);
        const schemas = [];
        const normalizedResource = normalizeResourceForMatching(resource);
        for (const entry of this.filePatternAssociations) {
            if (entry.matchesPattern(normalizedResource)) {
                for (const schemaId of entry.getURIs()) {
                    if (!seen[schemaId]) {
                        schemas.push(schemaId);
                        seen[schemaId] = true;
                    }
                }
            }
        }
        return schemas;
    }
    getSchemaURIsForResource(resource, document) {
        let schemeId = document && this.getSchemaFromProperty(resource, document);
        if (schemeId) {
            return [schemeId];
        }
        return this.getAssociatedSchemas(resource);
    }
    getSchemaForResource(resource, document) {
        if (document) {
            // first use $schema if present
            let schemeId = this.getSchemaFromProperty(resource, document);
            if (schemeId) {
                const id = normalizeId(schemeId);
                return this.getOrAddSchemaHandle(id).getResolvedSchema();
            }
        }
        if (this.cachedSchemaForResource && this.cachedSchemaForResource.resource === resource) {
            return this.cachedSchemaForResource.resolvedSchema;
        }
        const schemas = this.getAssociatedSchemas(resource);
        const resolvedSchema = schemas.length > 0 ? this.createCombinedSchema(resource, schemas).getResolvedSchema() : this.promise.resolve(undefined);
        this.cachedSchemaForResource = { resource, resolvedSchema };
        return resolvedSchema;
    }
    createCombinedSchema(resource, schemaIds) {
        if (schemaIds.length === 1) {
            return this.getOrAddSchemaHandle(schemaIds[0]);
        }
        else {
            const combinedSchemaId = 'schemaservice://combinedSchema/' + encodeURIComponent(resource);
            const combinedSchema = {
                allOf: schemaIds.map(schemaId => ({ $ref: schemaId }))
            };
            return this.addSchemaHandle(combinedSchemaId, combinedSchema);
        }
    }
    getMatchingSchemas(document, jsonDocument, schema) {
        if (schema) {
            const id = schema.id || ('schemaservice://untitled/matchingSchemas/' + idCounter++);
            const handle = this.addSchemaHandle(id, schema);
            return handle.getResolvedSchema().then(resolvedSchema => {
                return jsonDocument.getMatchingSchemas(resolvedSchema.schema).filter(s => !s.inverted);
            });
        }
        return this.getSchemaForResource(document.uri, jsonDocument).then(schema => {
            if (schema) {
                return jsonDocument.getMatchingSchemas(schema.schema).filter(s => !s.inverted);
            }
            return [];
        });
    }
}
let idCounter = 0;
function normalizeId(id) {
    // remove trailing '#', normalize drive capitalization
    try {
        return URI.parse(id).toString(true);
    }
    catch (e) {
        return id;
    }
}
function normalizeResourceForMatching(resource) {
    // remove queries and fragments, normalize drive capitalization
    try {
        return URI.parse(resource).with({ fragment: null, query: null }).toString(true);
    }
    catch (e) {
        return resource;
    }
}
function toDisplayString(url) {
    try {
        const uri = URI.parse(url);
        if (uri.scheme === 'file') {
            return uri.fsPath;
        }
    }
    catch (e) {
        // ignore
    }
    return url;
}

export { JSONSchemaService, ResolvedSchema, UnresolvedSchema };
