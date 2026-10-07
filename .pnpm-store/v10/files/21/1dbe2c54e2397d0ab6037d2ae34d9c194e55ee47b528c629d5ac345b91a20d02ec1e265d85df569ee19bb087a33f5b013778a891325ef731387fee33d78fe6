import { expectType, expectAssignable } from "tsd";
import slowRedact from ".";
import type { redactFn, redactFnNoSerialize } from ".";

// should return redactFn
expectType<redactFn>(slowRedact());
expectType<redactFn>(slowRedact({ paths: [] }));
expectType<redactFn>(slowRedact({ paths: ["some.path"] }));
expectType<redactFn>(slowRedact({ paths: [], censor: "[REDACTED]" }));
expectType<redactFn>(slowRedact({ paths: [], strict: true }));
expectType<redactFn>(slowRedact({ paths: [], serialize: JSON.stringify }));
expectType<redactFn>(slowRedact({ paths: [], serialize: true }));
expectType<redactFnNoSerialize>(slowRedact({ paths: [], serialize: false }));
expectType<redactFn>(slowRedact({ paths: [], remove: true }));

// should return string
expectType<string>(slowRedact()(""));

// should return string or T
expectAssignable<string | { someField: string }>(
  slowRedact()({ someField: "someValue" })
);
