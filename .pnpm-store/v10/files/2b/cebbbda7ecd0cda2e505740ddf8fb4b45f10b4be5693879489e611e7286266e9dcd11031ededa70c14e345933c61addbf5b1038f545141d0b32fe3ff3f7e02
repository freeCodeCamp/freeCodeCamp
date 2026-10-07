"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aws4 = void 0;
exports.getKerberos = getKerberos;
exports.getZstdLibrary = getZstdLibrary;
exports.getAwsCredentialProvider = getAwsCredentialProvider;
exports.getGcpMetadata = getGcpMetadata;
exports.getSnappy = getSnappy;
exports.getSocks = getSocks;
exports.getMongoDBClientEncryption = getMongoDBClientEncryption;
const error_1 = require("./error");
function makeErrorModule(error) {
    const props = error ? { kModuleError: error } : {};
    return new Proxy(props, {
        get: (_, key) => {
            if (key === 'kModuleError') {
                return error;
            }
            throw error;
        },
        set: () => {
            throw error;
        }
    });
}
function getKerberos() {
    let kerberos;
    try {
        // Ensure you always wrap an optional require in the try block NODE-3199
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        kerberos = require('kerberos');
    }
    catch (error) {
        kerberos = makeErrorModule(new error_1.MongoMissingDependencyError('Optional module `kerberos` not found. Please install it to enable kerberos authentication', { cause: error, dependencyName: 'kerberos' }));
    }
    return kerberos;
}
function getZstdLibrary() {
    let ZStandard;
    try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        ZStandard = require('@mongodb-js/zstd');
    }
    catch (error) {
        ZStandard = makeErrorModule(new error_1.MongoMissingDependencyError('Optional module `@mongodb-js/zstd` not found. Please install it to enable zstd compression', { cause: error, dependencyName: 'zstd' }));
    }
    return ZStandard;
}
function getAwsCredentialProvider() {
    try {
        // Ensure you always wrap an optional require in the try block NODE-3199
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const credentialProvider = require('@aws-sdk/credential-providers');
        return credentialProvider;
    }
    catch (error) {
        return makeErrorModule(new error_1.MongoMissingDependencyError('Optional module `@aws-sdk/credential-providers` not found.' +
            ' Please install it to enable getting aws credentials via the official sdk.', { cause: error, dependencyName: '@aws-sdk/credential-providers' }));
    }
}
function getGcpMetadata() {
    try {
        // Ensure you always wrap an optional require in the try block NODE-3199
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const credentialProvider = require('gcp-metadata');
        return credentialProvider;
    }
    catch (error) {
        return makeErrorModule(new error_1.MongoMissingDependencyError('Optional module `gcp-metadata` not found.' +
            ' Please install it to enable getting gcp credentials via the official sdk.', { cause: error, dependencyName: 'gcp-metadata' }));
    }
}
function getSnappy() {
    try {
        // Ensure you always wrap an optional require in the try block NODE-3199
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const value = require('snappy');
        return value;
    }
    catch (error) {
        const kModuleError = new error_1.MongoMissingDependencyError('Optional module `snappy` not found. Please install it to enable snappy compression', { cause: error, dependencyName: 'snappy' });
        return { kModuleError };
    }
}
function getSocks() {
    try {
        // Ensure you always wrap an optional require in the try block NODE-3199
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const value = require('socks');
        return value;
    }
    catch (error) {
        const kModuleError = new error_1.MongoMissingDependencyError('Optional module `socks` not found. Please install it to connections over a SOCKS5 proxy', { cause: error, dependencyName: 'socks' });
        return { kModuleError };
    }
}
exports.aws4 = loadAws4();
function loadAws4() {
    let aws4;
    try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        aws4 = require('aws4');
    }
    catch (error) {
        aws4 = makeErrorModule(new error_1.MongoMissingDependencyError('Optional module `aws4` not found. Please install it to enable AWS authentication', { cause: error, dependencyName: 'aws4' }));
    }
    return aws4;
}
/** A utility function to get the instance of mongodb-client-encryption, if it exists. */
function getMongoDBClientEncryption() {
    let mongodbClientEncryption = null;
    try {
        // NOTE(NODE-3199): Ensure you always wrap an optional require literally in the try block
        // Cannot be moved to helper utility function, bundlers search and replace the actual require call
        // in a way that makes this line throw at bundle time, not runtime, catching here will make bundling succeed
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        mongodbClientEncryption = require('mongodb-client-encryption');
    }
    catch (error) {
        const kModuleError = new error_1.MongoMissingDependencyError('Optional module `mongodb-client-encryption` not found. Please install it to use auto encryption or ClientEncryption.', { cause: error, dependencyName: 'mongodb-client-encryption' });
        return { kModuleError };
    }
    return mongodbClientEncryption;
}
//# sourceMappingURL=deps.js.map