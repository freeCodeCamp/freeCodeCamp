import type { StandardSchemaV1 } from '@standard-schema/spec'
import { SchemaError } from '@standard-schema/utils'
import type { SchemaType } from './endpointDefinitions'

export class NamedSchemaError extends SchemaError {
  constructor(
    issues: readonly StandardSchemaV1.Issue[],
    public readonly value: any,
    public readonly schemaName: `${SchemaType}Schema`,
    public readonly _bqMeta: any,
  ) {
    super(issues)
  }
}

export const shouldSkip = (
  skipSchemaValidation: boolean | SchemaType[] | undefined,
  schemaName: SchemaType,
) =>
  Array.isArray(skipSchemaValidation)
    ? skipSchemaValidation.includes(schemaName)
    : !!skipSchemaValidation

export async function parseWithSchema<Schema extends StandardSchemaV1>(
  schema: Schema,
  data: unknown,
  schemaName: `${SchemaType}Schema`,
  bqMeta: any,
): Promise<StandardSchemaV1.InferOutput<Schema>> {
  const result = await schema['~standard'].validate(data)
  if (result.issues) {
    throw new NamedSchemaError(result.issues, data, schemaName, bqMeta)
  }
  return result.value
}
