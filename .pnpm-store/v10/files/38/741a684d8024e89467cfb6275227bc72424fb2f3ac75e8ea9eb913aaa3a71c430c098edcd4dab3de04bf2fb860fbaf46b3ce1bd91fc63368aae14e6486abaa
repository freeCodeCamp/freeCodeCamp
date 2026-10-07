import { mapFilter } from './arrays.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ValidatorBase {
    validateOrThrow(content) {
        const result = this.validate(content);
        if (result.error) {
            throw new Error(result.error.message);
        }
        return result.content;
    }
}
class TypeofValidator extends ValidatorBase {
    constructor(type) {
        super();
        this.type = type;
    }
    validate(content) {
        if (typeof content !== this.type) {
            return { content: undefined, error: { message: `Expected ${this.type}, but got ${typeof content}` } };
        }
        return { content: content, error: undefined };
    }
    getJSONSchema() {
        return { type: this.type };
    }
}
const vStringValidator = new TypeofValidator('string');
function vString() { return vStringValidator; }
new TypeofValidator('number');
const vBooleanValidator = new TypeofValidator('boolean');
function vBoolean() { return vBooleanValidator; }
new TypeofValidator('object');
class UndefinedValidator extends ValidatorBase {
    validate(content) {
        if (content !== undefined) {
            return { content: undefined, error: { message: `Expected undefined, but got ${typeof content}` } };
        }
        return { content: undefined, error: undefined };
    }
    getJSONSchema() {
        return {};
    }
}
function vUndefined() {
    return new UndefinedValidator();
}
class Optional {
    constructor(validator) {
        this.validator = validator;
    }
}
function vOptionalProp(validator) {
    return new Optional(validator);
}
class ObjValidator extends ValidatorBase {
    constructor(properties) {
        super();
        this.properties = properties;
    }
    validate(content) {
        if (typeof content !== 'object' || content === null) {
            return { content: undefined, error: { message: 'Expected object' } };
        }
        // eslint-disable-next-line local/code-no-dangerous-type-assertions
        const result = {};
        for (const key in this.properties) {
            const prop = this.properties[key];
            // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
            const fieldValue = content[key];
            const isOptional = prop instanceof Optional;
            const validator = isOptional ? prop.validator : prop;
            if (isOptional && fieldValue === undefined) {
                // Optional field not provided, skip validation
                continue;
            }
            const { content: value, error } = validator.validate(fieldValue);
            if (error) {
                return { content: undefined, error: { message: `Error in property '${key}': ${error.message}` } };
            }
            // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
            result[key] = value;
        }
        return { content: result, error: undefined };
    }
    getJSONSchema() {
        const requiredFields = [];
        const schemaProperties = {};
        for (const [key, prop] of Object.entries(this.properties)) {
            const isOptional = prop instanceof Optional;
            const validator = isOptional ? prop.validator : prop;
            schemaProperties[key] = validator.getJSONSchema();
            if (!isOptional) {
                requiredFields.push(key);
            }
        }
        const schema = {
            type: 'object',
            properties: schemaProperties,
            ...(requiredFields.length > 0 ? { required: requiredFields } : {})
        };
        return schema;
    }
}
function vObj(properties) {
    return new ObjValidator(properties);
}
class UnionValidator extends ValidatorBase {
    constructor(validators) {
        super();
        this.validators = validators;
    }
    validate(content) {
        let lastError;
        for (const validator of this.validators) {
            const { content: value, error } = validator.validate(content);
            if (!error) {
                // eslint-disable-next-line local/code-no-any-casts, @typescript-eslint/no-explicit-any
                return { content: value, error: undefined };
            }
            lastError = error;
        }
        return { content: undefined, error: lastError };
    }
    getJSONSchema() {
        return {
            oneOf: mapFilter(this.validators, validator => {
                if (validator instanceof UndefinedValidator) {
                    return undefined;
                }
                return validator.getJSONSchema();
            }),
        };
    }
}
function vUnion(...validators) {
    return new UnionValidator(validators);
}
class UseRefSchemaValidator extends ValidatorBase {
    constructor(_ref, _validator) {
        super();
        this._ref = _ref;
        this._validator = _validator;
    }
    validate(content) {
        return this._validator.validate(content);
    }
    getJSONSchema() {
        return { $ref: this._ref };
    }
}
function vWithJsonSchemaRef(ref, validator) {
    return new UseRefSchemaValidator(ref, validator);
}

export { Optional, ValidatorBase, vBoolean, vObj, vOptionalProp, vString, vUndefined, vUnion, vWithJsonSchemaRef };
