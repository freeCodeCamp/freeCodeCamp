import Ajv, {AnySchema, AnyValidateFunction, ErrorObject} from "../core"
import standaloneCode from "."
import * as requireFromString from "require-from-string"

export default class AjvPack {
  errors?: ErrorObject[] | null // errors from the last validation
  constructor(readonly ajv: Ajv) {}

  validate(schemaKeyRef: AnySchema | string, data: unknown): boolean | Promise<unknown> {
    return Ajv.prototype.validate.call(this, schemaKeyRef, data)
  }

  compile<T = unknown>(schema: AnySchema, meta?: boolean): AnyValidateFunction<T> {
    return this.getStandalone(this.ajv.compile<T>(schema, meta))
  }

  getSchema<T = unknown>(keyRef: string): AnyValidateFunction<T> | undefined {
    const v = this.ajv.getSchema<T>(keyRef)
    if (!v) return undefined
    return this.getStandalone(v)
  }

  private getStandalone<T = unknown>(v: AnyValidateFunction<T>): AnyValidateFunction<T> {
    return requireFromString(standaloneCode(this.ajv, v)) as AnyValidateFunction<T>
  }

  addSchema(...args: Parameters<typeof Ajv.prototype.addSchema>): AjvPack {
    this.ajv.addSchema.call(this.ajv, ...args)
    return this
  }

  addKeyword(...args: Parameters<typeof Ajv.prototype.addKeyword>): AjvPack {
    this.ajv.addKeyword.call(this.ajv, ...args)
    return this
  }
}
