"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConfig = void 0;
const validators_1 = __importDefault(require("./generated/validators"));
const validateConfig = (schemaId, config) => {
    const validate = validators_1.default[schemaId];
    if (!validate(config) && validate.errors) {
        // eslint-disable-next-line promise/prefer-await-to-callbacks
        const errors = validate.errors.map((error) => {
            return {
                message: error.message,
                params: error.params,
                schemaPath: error.schemaPath,
            };
        });
        /* eslint-disable no-console */
        console.log('config', config);
        console.log('errors', errors);
        /* eslint-enable no-console */
        throw new Error('Invalid config.');
    }
};
exports.validateConfig = validateConfig;
//# sourceMappingURL=validateConfig.js.map