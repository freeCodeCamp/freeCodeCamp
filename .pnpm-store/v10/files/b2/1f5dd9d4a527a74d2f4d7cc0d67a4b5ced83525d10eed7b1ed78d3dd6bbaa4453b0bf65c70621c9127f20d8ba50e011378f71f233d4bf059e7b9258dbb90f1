"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoCryptKMSRequestNetworkTimeoutError = exports.MongoCryptAzureKMSRequestError = exports.MongoCryptCreateEncryptedCollectionError = exports.MongoCryptCreateDataKeyError = exports.MongoCryptInvalidArgumentError = exports.MongoCryptError = void 0;
const error_1 = require("../error");
/**
 * @public
 * An error indicating that something went wrong specifically with MongoDB Client Encryption
 */
class MongoCryptError extends error_1.MongoError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message, options = {}) {
        super(message, options);
    }
    get name() {
        return 'MongoCryptError';
    }
}
exports.MongoCryptError = MongoCryptError;
/**
 * @public
 *
 * An error indicating an invalid argument was provided to an encryption API.
 */
class MongoCryptInvalidArgumentError extends MongoCryptError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message) {
        super(message);
    }
    get name() {
        return 'MongoCryptInvalidArgumentError';
    }
}
exports.MongoCryptInvalidArgumentError = MongoCryptInvalidArgumentError;
/**
 * @public
 * An error indicating that `ClientEncryption.createEncryptedCollection()` failed to create data keys
 */
class MongoCryptCreateDataKeyError extends MongoCryptError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(encryptedFields, { cause }) {
        super(`Unable to complete creating data keys: ${cause.message}`, { cause });
        this.encryptedFields = encryptedFields;
    }
    get name() {
        return 'MongoCryptCreateDataKeyError';
    }
}
exports.MongoCryptCreateDataKeyError = MongoCryptCreateDataKeyError;
/**
 * @public
 * An error indicating that `ClientEncryption.createEncryptedCollection()` failed to create a collection
 */
class MongoCryptCreateEncryptedCollectionError extends MongoCryptError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(encryptedFields, { cause }) {
        super(`Unable to create collection: ${cause.message}`, { cause });
        this.encryptedFields = encryptedFields;
    }
    get name() {
        return 'MongoCryptCreateEncryptedCollectionError';
    }
}
exports.MongoCryptCreateEncryptedCollectionError = MongoCryptCreateEncryptedCollectionError;
/**
 * @public
 * An error indicating that mongodb-client-encryption failed to auto-refresh Azure KMS credentials.
 */
class MongoCryptAzureKMSRequestError extends MongoCryptError {
    /**
     * **Do not use this constructor!**
     *
     * Meant for internal use only.
     *
     * @remarks
     * This class is only meant to be constructed within the driver. This constructor is
     * not subject to semantic versioning compatibility guarantees and may change at any time.
     *
     * @public
     **/
    constructor(message, body) {
        super(message);
        this.body = body;
    }
    get name() {
        return 'MongoCryptAzureKMSRequestError';
    }
}
exports.MongoCryptAzureKMSRequestError = MongoCryptAzureKMSRequestError;
/** @public */
class MongoCryptKMSRequestNetworkTimeoutError extends MongoCryptError {
    get name() {
        return 'MongoCryptKMSRequestNetworkTimeoutError';
    }
}
exports.MongoCryptKMSRequestNetworkTimeoutError = MongoCryptKMSRequestNetworkTimeoutError;
//# sourceMappingURL=errors.js.map