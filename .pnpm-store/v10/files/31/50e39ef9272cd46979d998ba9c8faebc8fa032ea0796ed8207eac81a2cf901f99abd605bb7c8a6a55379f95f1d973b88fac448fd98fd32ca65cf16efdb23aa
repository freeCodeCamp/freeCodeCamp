import type {ErrorObject} from "../types"

export default class ValidationError extends Error {
  readonly errors: Partial<ErrorObject>[]
  readonly ajv: true
  readonly validation: true

  constructor(errors: Partial<ErrorObject>[]) {
    super("validation failed")
    this.errors = errors
    this.ajv = this.validation = true
  }
}
