# Standard Schema Utils

There are two common tasks that third-party libraries perform after validation fails. The first is to flatten the issues by creating a dot path to more easily associate the issues with the input data. This is commonly used in form libraries. The second is to throw an error that contains all the issue information. To simplify both tasks, Standard Schema also ships a utils package that provides a `getDotPath` function and a `SchemaError` class.

```sh
npm install @standard-schema/utils   # npm
yarn add @standard-schema/utils      # yarn
pnpm add @standard-schema/utils      # pnpm
bun add @standard-schema/utils       # bun
deno add jsr:@standard-schema/utils  # deno
```

## Get Dot Path

To generate a dot path, simply pass an issue to the `getDotPath` function. If the issue does not contain a path or the path contains a key that is not of type `string` or `number`, the function returns `null`.

```ts
import type { StandardSchemaV1 } from "@standard-schema/spec";
import { getDotPath } from "@standard-schema/utils";

async function getFormErrors(schema: StandardSchemaV1, data: unknown) {
  const result = await schema["~standard"].validate(data);
  const formErrors: string[] = [];
  const fieldErrors: Record<string, string[]> = {};
  if (result.issues) {
    for (const issue of result.issues) {
      const dotPath = getDotPath(issue);
      if (dotPath) {
        if (fieldErrors[dotPath]) {
          fieldErrors[dotPath].push(issue.message);
        } else {
          fieldErrors[dotPath] = [issue.message];
        }
      } else {
        formErrors.push(issue.message);
      }
    }
  }
  return { formErrors, fieldErrors };
}
```

## Schema Error

To throw an error that contains all issue information, simply pass the issues of the failed schema validation to the `SchemaError` class. The `SchemaError` class extends the `Error` class with an `issues` property that contains all the issues.

```ts
import type { StandardSchemaV1 } from "@standard-schema/spec";
import { SchemaError } from "@standard-schema/utils";

async function validateInput<TSchema extends StandardSchemaV1>(
  schema: TSchema,
  data: unknown,
): Promise<StandardSchemaV1.InferOutput<TSchema>> {
  const result = await schema["~standard"].validate(data);
  if (result.issues) {
    throw new SchemaError(result.issues);
  }
  return result.value;
}
```