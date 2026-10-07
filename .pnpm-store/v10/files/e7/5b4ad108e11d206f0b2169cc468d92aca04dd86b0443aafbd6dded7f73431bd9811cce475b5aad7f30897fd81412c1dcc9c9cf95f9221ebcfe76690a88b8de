"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFileSync = exports.loadFile = void 0;
const utils_1 = require("@graphql-tools/utils");
const process_1 = require("process");
async function loadFile(pointer, options) {
    var _a;
    if (process_1.env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: loadFile ${pointer}`);
    }
    let results = (_a = options.cache) === null || _a === void 0 ? void 0 : _a[pointer];
    if (!results) {
        results = [];
        const errors = [];
        await Promise.all(options.loaders.map(async (loader) => {
            try {
                const loaderResults = await loader.load(pointer, options);
                loaderResults === null || loaderResults === void 0 ? void 0 : loaderResults.forEach(result => results.push(result));
            }
            catch (error) {
                if (process_1.env['DEBUG']) {
                    console.error(error);
                }
                if (error instanceof utils_1.AggregateError) {
                    for (const errorElement of error.errors) {
                        errors.push(errorElement);
                    }
                }
                else {
                    errors.push(error);
                }
            }
        }));
        if (results.length === 0 && errors.length > 0) {
            if (errors.length === 1) {
                throw errors[0];
            }
            throw new utils_1.AggregateError(errors, `Failed to find any GraphQL type definitions in: ${pointer};\n - ${errors
                .map(error => error.message)
                .join('\n  - ')}`);
        }
        if (options.cache) {
            options.cache[pointer] = results;
        }
    }
    if (process_1.env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: loadFile ${pointer}`);
    }
    return results;
}
exports.loadFile = loadFile;
function loadFileSync(pointer, options) {
    var _a;
    if (process_1.env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: loadFileSync ${pointer}`);
    }
    let results = (_a = options.cache) === null || _a === void 0 ? void 0 : _a[pointer];
    if (!results) {
        results = [];
        const errors = [];
        for (const loader of options.loaders) {
            try {
                // We check for the existence so it is okay to force non null
                const loaderResults = loader.loadSync(pointer, options);
                loaderResults === null || loaderResults === void 0 ? void 0 : loaderResults.forEach(result => results.push(result));
            }
            catch (error) {
                if (process_1.env['DEBUG']) {
                    console.error(error);
                }
                if (error instanceof utils_1.AggregateError) {
                    for (const errorElement of error.errors) {
                        errors.push(errorElement);
                    }
                }
                else {
                    errors.push(error);
                }
            }
        }
        if (results.length === 0 && errors.length > 0) {
            if (errors.length === 1) {
                throw errors[0];
            }
            throw new utils_1.AggregateError(errors, `Failed to find any GraphQL type definitions in: ${pointer};\n - ${errors
                .map(error => error.message)
                .join('\n  - ')}`);
        }
        if (options.cache) {
            options.cache[pointer] = results;
        }
    }
    if (process_1.env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: loadFileSync ${pointer}`);
    }
    return results;
}
exports.loadFileSync = loadFileSync;
