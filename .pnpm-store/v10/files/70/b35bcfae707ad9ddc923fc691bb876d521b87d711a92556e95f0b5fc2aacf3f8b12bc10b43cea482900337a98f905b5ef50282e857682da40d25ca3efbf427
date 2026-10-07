// @ts-ignore TS6133
import { test } from "vitest";

import type { ZodFirstPartySchemaTypes, ZodFirstPartyTypeKind } from "zod/v3";
import { util } from "../helpers/util.js";

test("Identify missing [ZodFirstPartySchemaTypes]", () => {
  type ZodFirstPartySchemaForType<T extends ZodFirstPartyTypeKind> = ZodFirstPartySchemaTypes extends infer Schema
    ? Schema extends { _def: { typeName: T } }
      ? Schema
      : never
    : never;
  type ZodMappedTypes = {
    [key in ZodFirstPartyTypeKind]: ZodFirstPartySchemaForType<key>;
  };
  type ZodFirstPartySchemaTypesMissingFromUnion = keyof {
    [key in keyof ZodMappedTypes as ZodMappedTypes[key] extends { _def: never } ? key : never]: unknown;
  };

  util.assertEqual<ZodFirstPartySchemaTypesMissingFromUnion, never>(true);
});
