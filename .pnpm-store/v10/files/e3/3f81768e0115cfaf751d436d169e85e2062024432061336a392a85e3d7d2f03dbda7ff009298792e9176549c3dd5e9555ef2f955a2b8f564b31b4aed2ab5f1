import type AjvCore from "../core"
import type {AnyValidateFunction, SourceCode} from "../types"
import type {SchemaEnv} from "../compile"
import {UsedScopeValues, UsedValueState, ValueScopeName, varKinds} from "../compile/codegen/scope"
import {_, nil, _Code, Code, getProperty, getEsmExportName} from "../compile/codegen/code"

function standaloneCode(
  ajv: AjvCore,
  refsOrFunc?: {[K in string]?: string} | AnyValidateFunction
): string {
  if (!ajv.opts.code.source) {
    throw new Error("moduleCode: ajv instance must have code.source option")
  }
  const {_n} = ajv.scope.opts
  return typeof refsOrFunc == "function"
    ? funcExportCode(refsOrFunc.source)
    : refsOrFunc !== undefined
    ? multiExportsCode<string>(refsOrFunc, getValidate)
    : multiExportsCode<SchemaEnv>(ajv.schemas, (sch) =>
        sch.meta ? undefined : ajv.compile(sch.schema)
      )

  function getValidate(id: string): AnyValidateFunction {
    const v = ajv.getSchema(id)
    if (!v) throw new Error(`moduleCode: no schema with id ${id}`)
    return v
  }

  function funcExportCode(source?: SourceCode): string {
    const usedValues: UsedScopeValues = {}
    const n = source?.validateName
    const vCode = validateCode(usedValues, source)
    if (ajv.opts.code.esm) {
      // Always do named export as `validate` rather than the variable `n` which is `validateXX` for known export value
      return `"use strict";${_n}export const validate = ${n};${_n}export default ${n};${_n}${vCode}`
    }
    return `"use strict";${_n}module.exports = ${n};${_n}module.exports.default = ${n};${_n}${vCode}`
  }

  function multiExportsCode<T extends SchemaEnv | string>(
    schemas: {[K in string]?: T},
    getValidateFunc: (schOrId: T) => AnyValidateFunction | undefined
  ): string {
    const usedValues: UsedScopeValues = {}
    let code = _`"use strict";`
    for (const name in schemas) {
      const v = getValidateFunc(schemas[name] as T)
      if (v) {
        const vCode = validateCode(usedValues, v.source)
        const exportSyntax = ajv.opts.code.esm
          ? _`export const ${getEsmExportName(name)}`
          : _`exports${getProperty(name)}`
        code = _`${code}${_n}${exportSyntax} = ${v.source?.validateName};${_n}${vCode}`
      }
    }
    return `${code}`
  }

  function validateCode(usedValues: UsedScopeValues, s?: SourceCode): Code {
    if (!s) throw new Error('moduleCode: function does not have "source" property')
    if (usedState(s.validateName) === UsedValueState.Completed) return nil
    setUsedState(s.validateName, UsedValueState.Started)

    const scopeCode = ajv.scope.scopeCode(s.scopeValues, usedValues, refValidateCode)
    const code = new _Code(`${scopeCode}${_n}${s.validateCode}`)
    return s.evaluated ? _`${code}${s.validateName}.evaluated = ${s.evaluated};${_n}` : code

    function refValidateCode(n: ValueScopeName): Code | undefined {
      const vRef = n.value?.ref
      if (n.prefix === "validate" && typeof vRef == "function") {
        const v = vRef as AnyValidateFunction
        return validateCode(usedValues, v.source)
      } else if ((n.prefix === "root" || n.prefix === "wrapper") && typeof vRef == "object") {
        const {validate, validateName} = vRef as SchemaEnv
        if (!validateName) throw new Error("ajv internal error")
        const def = ajv.opts.code.es5 ? varKinds.var : varKinds.const
        const wrapper = _`${def} ${n} = {validate: ${validateName}};`
        if (usedState(validateName) === UsedValueState.Started) return wrapper
        const vCode = validateCode(usedValues, validate?.source)
        return _`${wrapper}${_n}${vCode}`
      }
      return undefined
    }

    function usedState(name: ValueScopeName): UsedValueState | undefined {
      return usedValues[name.prefix]?.get(name)
    }

    function setUsedState(name: ValueScopeName, state: UsedValueState): void {
      const {prefix} = name
      const names = (usedValues[prefix] = usedValues[prefix] || new Map())
      names.set(name, state)
    }
  }
}

module.exports = exports = standaloneCode
Object.defineProperty(exports, "__esModule", {value: true})

export default standaloneCode
