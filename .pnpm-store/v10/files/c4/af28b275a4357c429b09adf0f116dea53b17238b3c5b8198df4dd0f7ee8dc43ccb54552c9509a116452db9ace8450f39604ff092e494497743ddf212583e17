"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scope_1 = require("../compile/codegen/scope");
const code_1 = require("../compile/codegen/code");
function standaloneCode(ajv, refsOrFunc) {
    if (!ajv.opts.code.source) {
        throw new Error("moduleCode: ajv instance must have code.source option");
    }
    const { _n } = ajv.scope.opts;
    return typeof refsOrFunc == "function"
        ? funcExportCode(refsOrFunc.source)
        : refsOrFunc !== undefined
            ? multiExportsCode(refsOrFunc, getValidate)
            : multiExportsCode(ajv.schemas, (sch) => sch.meta ? undefined : ajv.compile(sch.schema));
    function getValidate(id) {
        const v = ajv.getSchema(id);
        if (!v)
            throw new Error(`moduleCode: no schema with id ${id}`);
        return v;
    }
    function funcExportCode(source) {
        const usedValues = {};
        const n = source === null || source === void 0 ? void 0 : source.validateName;
        const vCode = validateCode(usedValues, source);
        if (ajv.opts.code.esm) {
            // Always do named export as `validate` rather than the variable `n` which is `validateXX` for known export value
            return `"use strict";${_n}export const validate = ${n};${_n}export default ${n};${_n}${vCode}`;
        }
        return `"use strict";${_n}module.exports = ${n};${_n}module.exports.default = ${n};${_n}${vCode}`;
    }
    function multiExportsCode(schemas, getValidateFunc) {
        var _a;
        const usedValues = {};
        let code = (0, code_1._) `"use strict";`;
        for (const name in schemas) {
            const v = getValidateFunc(schemas[name]);
            if (v) {
                const vCode = validateCode(usedValues, v.source);
                const exportSyntax = ajv.opts.code.esm
                    ? (0, code_1._) `export const ${(0, code_1.getEsmExportName)(name)}`
                    : (0, code_1._) `exports${(0, code_1.getProperty)(name)}`;
                code = (0, code_1._) `${code}${_n}${exportSyntax} = ${(_a = v.source) === null || _a === void 0 ? void 0 : _a.validateName};${_n}${vCode}`;
            }
        }
        return `${code}`;
    }
    function validateCode(usedValues, s) {
        if (!s)
            throw new Error('moduleCode: function does not have "source" property');
        if (usedState(s.validateName) === scope_1.UsedValueState.Completed)
            return code_1.nil;
        setUsedState(s.validateName, scope_1.UsedValueState.Started);
        const scopeCode = ajv.scope.scopeCode(s.scopeValues, usedValues, refValidateCode);
        const code = new code_1._Code(`${scopeCode}${_n}${s.validateCode}`);
        return s.evaluated ? (0, code_1._) `${code}${s.validateName}.evaluated = ${s.evaluated};${_n}` : code;
        function refValidateCode(n) {
            var _a;
            const vRef = (_a = n.value) === null || _a === void 0 ? void 0 : _a.ref;
            if (n.prefix === "validate" && typeof vRef == "function") {
                const v = vRef;
                return validateCode(usedValues, v.source);
            }
            else if ((n.prefix === "root" || n.prefix === "wrapper") && typeof vRef == "object") {
                const { validate, validateName } = vRef;
                if (!validateName)
                    throw new Error("ajv internal error");
                const def = ajv.opts.code.es5 ? scope_1.varKinds.var : scope_1.varKinds.const;
                const wrapper = (0, code_1._) `${def} ${n} = {validate: ${validateName}};`;
                if (usedState(validateName) === scope_1.UsedValueState.Started)
                    return wrapper;
                const vCode = validateCode(usedValues, validate === null || validate === void 0 ? void 0 : validate.source);
                return (0, code_1._) `${wrapper}${_n}${vCode}`;
            }
            return undefined;
        }
        function usedState(name) {
            var _a;
            return (_a = usedValues[name.prefix]) === null || _a === void 0 ? void 0 : _a.get(name);
        }
        function setUsedState(name, state) {
            const { prefix } = name;
            const names = (usedValues[prefix] = usedValues[prefix] || new Map());
            names.set(name, state);
        }
    }
}
module.exports = exports = standaloneCode;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = standaloneCode;
//# sourceMappingURL=index.js.map