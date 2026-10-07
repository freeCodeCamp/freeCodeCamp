"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitedSizeDocument = void 0;
exports.isDriverInfoEqual = isDriverInfoEqual;
exports.makeClientMetadata = makeClientMetadata;
exports.addContainerMetadata = addContainerMetadata;
exports.getFAASEnv = getFAASEnv;
const os = require("os");
const process = require("process");
const bson_1 = require("../../bson");
const error_1 = require("../../error");
const utils_1 = require("../../utils");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const NODE_DRIVER_VERSION = require('../../../package.json').version;
/** @internal */
function isDriverInfoEqual(info1, info2) {
    /** for equality comparison, we consider "" as unset */
    const nonEmptyCmp = (s1, s2) => {
        s1 ||= undefined;
        s2 ||= undefined;
        return s1 === s2;
    };
    return (nonEmptyCmp(info1.name, info2.name) &&
        nonEmptyCmp(info1.platform, info2.platform) &&
        nonEmptyCmp(info1.version, info2.version));
}
/** @internal */
class LimitedSizeDocument {
    constructor(maxSize) {
        this.document = new Map();
        /** BSON overhead: Int32 + Null byte */
        this.documentSize = 5;
        this.maxSize = maxSize;
    }
    /** Only adds key/value if the bsonByteLength is less than MAX_SIZE */
    ifItFitsItSits(key, value) {
        // The BSON byteLength of the new element is the same as serializing it to its own document
        // subtracting the document size int32 and the null terminator.
        const newElementSize = bson_1.BSON.serialize(new Map().set(key, value)).byteLength - 5;
        if (newElementSize + this.documentSize > this.maxSize) {
            return false;
        }
        this.documentSize += newElementSize;
        this.document.set(key, value);
        return true;
    }
    toObject() {
        return bson_1.BSON.deserialize(bson_1.BSON.serialize(this.document), {
            promoteLongs: false,
            promoteBuffers: false,
            promoteValues: false,
            useBigInt64: false
        });
    }
}
exports.LimitedSizeDocument = LimitedSizeDocument;
/**
 * From the specs:
 * Implementors SHOULD cumulatively update fields in the following order until the document is under the size limit:
 * 1. Omit fields from `env` except `env.name`.
 * 2. Omit fields from `os` except `os.type`.
 * 3. Omit the `env` document entirely.
 * 4. Truncate `platform`. -- special we do not truncate this field
 */
function makeClientMetadata(driverInfoList, { appName = '' }) {
    const metadataDocument = new LimitedSizeDocument(512);
    // Add app name first, it must be sent
    if (appName.length > 0) {
        const name = Buffer.byteLength(appName, 'utf8') <= 128
            ? appName
            : Buffer.from(appName, 'utf8').subarray(0, 128).toString('utf8');
        metadataDocument.ifItFitsItSits('application', { name });
    }
    const driverInfo = {
        name: 'nodejs',
        version: NODE_DRIVER_VERSION
    };
    // This is where we handle additional driver info added after client construction.
    for (const { name: n = '', version: v = '' } of driverInfoList) {
        if (n.length > 0) {
            driverInfo.name = `${driverInfo.name}|${n}`;
        }
        if (v.length > 0) {
            driverInfo.version = `${driverInfo.version}|${v}`;
        }
    }
    if (!metadataDocument.ifItFitsItSits('driver', driverInfo)) {
        throw new error_1.MongoInvalidArgumentError('Unable to include driverInfo name and version, metadata cannot exceed 512 bytes');
    }
    let runtimeInfo = getRuntimeInfo();
    // This is where we handle additional driver info added after client construction.
    for (const { platform = '' } of driverInfoList) {
        if (platform.length > 0) {
            runtimeInfo = `${runtimeInfo}|${platform}`;
        }
    }
    if (!metadataDocument.ifItFitsItSits('platform', runtimeInfo)) {
        throw new error_1.MongoInvalidArgumentError('Unable to include driverInfo platform, metadata cannot exceed 512 bytes');
    }
    // Note: order matters, os.type is last so it will be removed last if we're at maxSize
    const osInfo = new Map()
        .set('name', process.platform)
        .set('architecture', process.arch)
        .set('version', os.release())
        .set('type', os.type());
    if (!metadataDocument.ifItFitsItSits('os', osInfo)) {
        for (const key of osInfo.keys()) {
            osInfo.delete(key);
            if (osInfo.size === 0)
                break;
            if (metadataDocument.ifItFitsItSits('os', osInfo))
                break;
        }
    }
    const faasEnv = getFAASEnv();
    if (faasEnv != null) {
        if (!metadataDocument.ifItFitsItSits('env', faasEnv)) {
            for (const key of faasEnv.keys()) {
                faasEnv.delete(key);
                if (faasEnv.size === 0)
                    break;
                if (metadataDocument.ifItFitsItSits('env', faasEnv))
                    break;
            }
        }
    }
    return metadataDocument.toObject();
}
let dockerPromise;
/** @internal */
async function getContainerMetadata() {
    const containerMetadata = {};
    dockerPromise ??= (0, utils_1.fileIsAccessible)('/.dockerenv');
    const isDocker = await dockerPromise;
    const { KUBERNETES_SERVICE_HOST = '' } = process.env;
    const isKubernetes = KUBERNETES_SERVICE_HOST.length > 0 ? true : false;
    if (isDocker)
        containerMetadata.runtime = 'docker';
    if (isKubernetes)
        containerMetadata.orchestrator = 'kubernetes';
    return containerMetadata;
}
/**
 * @internal
 * Re-add each metadata value.
 * Attempt to add new env container metadata, but keep old data if it does not fit.
 */
async function addContainerMetadata(originalMetadata) {
    const containerMetadata = await getContainerMetadata();
    if (Object.keys(containerMetadata).length === 0)
        return originalMetadata;
    const extendedMetadata = new LimitedSizeDocument(512);
    const extendedEnvMetadata = { ...originalMetadata?.env, container: containerMetadata };
    for (const [key, val] of Object.entries(originalMetadata)) {
        if (key !== 'env') {
            extendedMetadata.ifItFitsItSits(key, val);
        }
        else {
            if (!extendedMetadata.ifItFitsItSits('env', extendedEnvMetadata)) {
                // add in old data if newer / extended metadata does not fit
                extendedMetadata.ifItFitsItSits('env', val);
            }
        }
    }
    if (!('env' in originalMetadata)) {
        extendedMetadata.ifItFitsItSits('env', extendedEnvMetadata);
    }
    return extendedMetadata.toObject();
}
/**
 * Collects FaaS metadata.
 * - `name` MUST be the last key in the Map returned.
 */
function getFAASEnv() {
    const { AWS_EXECUTION_ENV = '', AWS_LAMBDA_RUNTIME_API = '', FUNCTIONS_WORKER_RUNTIME = '', K_SERVICE = '', FUNCTION_NAME = '', VERCEL = '', AWS_LAMBDA_FUNCTION_MEMORY_SIZE = '', AWS_REGION = '', FUNCTION_MEMORY_MB = '', FUNCTION_REGION = '', FUNCTION_TIMEOUT_SEC = '', VERCEL_REGION = '' } = process.env;
    const isAWSFaaS = AWS_EXECUTION_ENV.startsWith('AWS_Lambda_') || AWS_LAMBDA_RUNTIME_API.length > 0;
    const isAzureFaaS = FUNCTIONS_WORKER_RUNTIME.length > 0;
    const isGCPFaaS = K_SERVICE.length > 0 || FUNCTION_NAME.length > 0;
    const isVercelFaaS = VERCEL.length > 0;
    // Note: order matters, name must always be the last key
    const faasEnv = new Map();
    // When isVercelFaaS is true so is isAWSFaaS; Vercel inherits the AWS env
    if (isVercelFaaS && !(isAzureFaaS || isGCPFaaS)) {
        if (VERCEL_REGION.length > 0) {
            faasEnv.set('region', VERCEL_REGION);
        }
        faasEnv.set('name', 'vercel');
        return faasEnv;
    }
    if (isAWSFaaS && !(isAzureFaaS || isGCPFaaS || isVercelFaaS)) {
        if (AWS_REGION.length > 0) {
            faasEnv.set('region', AWS_REGION);
        }
        if (AWS_LAMBDA_FUNCTION_MEMORY_SIZE.length > 0 &&
            Number.isInteger(+AWS_LAMBDA_FUNCTION_MEMORY_SIZE)) {
            faasEnv.set('memory_mb', new bson_1.Int32(AWS_LAMBDA_FUNCTION_MEMORY_SIZE));
        }
        faasEnv.set('name', 'aws.lambda');
        return faasEnv;
    }
    if (isAzureFaaS && !(isGCPFaaS || isAWSFaaS || isVercelFaaS)) {
        faasEnv.set('name', 'azure.func');
        return faasEnv;
    }
    if (isGCPFaaS && !(isAzureFaaS || isAWSFaaS || isVercelFaaS)) {
        if (FUNCTION_REGION.length > 0) {
            faasEnv.set('region', FUNCTION_REGION);
        }
        if (FUNCTION_MEMORY_MB.length > 0 && Number.isInteger(+FUNCTION_MEMORY_MB)) {
            faasEnv.set('memory_mb', new bson_1.Int32(FUNCTION_MEMORY_MB));
        }
        if (FUNCTION_TIMEOUT_SEC.length > 0 && Number.isInteger(+FUNCTION_TIMEOUT_SEC)) {
            faasEnv.set('timeout_sec', new bson_1.Int32(FUNCTION_TIMEOUT_SEC));
        }
        faasEnv.set('name', 'gcp.func');
        return faasEnv;
    }
    return null;
}
/**
 * @internal
 * Get current JavaScript runtime platform
 *
 * NOTE: The version information fetching is intentionally written defensively
 * to avoid having a released driver version that becomes incompatible
 * with a future change to these global objects.
 */
function getRuntimeInfo() {
    if ('Deno' in globalThis) {
        const version = typeof Deno?.version?.deno === 'string' ? Deno?.version?.deno : '0.0.0-unknown';
        return `Deno v${version}, ${os.endianness()}`;
    }
    if ('Bun' in globalThis) {
        const version = typeof Bun?.version === 'string' ? Bun?.version : '0.0.0-unknown';
        return `Bun v${version}, ${os.endianness()}`;
    }
    return `Node.js ${process.version}, ${os.endianness()}`;
}
//# sourceMappingURL=client_metadata.js.map