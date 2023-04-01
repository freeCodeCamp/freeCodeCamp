import { Static, Type } from '@sinclair/typebox';

// The schema that TypeBox generates is compatible with ajv, e.g. the
// Type.Object call below puts the following object into subSchema.
/*
{
  type: 'object',
  properties: {
    bat: { type: 'number' },
    baz: { type: 'string' }
  },
  required: ['bat', 'baz']
}
  */

export const subSchema = Type.Object({
  bat: Type.Integer(),
  baz: Type.String()
});

export const responseSchema = Type.Object({
  value: Type.String(),
  otherValue: Type.Boolean(),
  optional: Type.Optional(Type.String())
});

// The schema types would be the only code the client needs to import
// { value: string; otherValue: boolean; optional?: string | undefined;}
export type ResponseSchema = Static<typeof responseSchema>;
// { bat: number; baz: string; }
export type SubSchema = Static<typeof subSchema>;
