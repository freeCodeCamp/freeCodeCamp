import Benchmark from "benchmark";

import { z } from "zod/v3";

const emptySuite = new Benchmark.Suite("z.object: empty");
const shortSuite = new Benchmark.Suite("z.object: short");
const longSuite = new Benchmark.Suite("z.object: long");

const empty = z.object({});
const short = z.object({
  string: z.string(),
});
const long = z.object({
  string: z.string(),
  number: z.number(),
  boolean: z.boolean(),
});

emptySuite
  .add("valid", () => {
    empty.parse({});
  })
  .add("valid: extra keys", () => {
    empty.parse({ string: "string" });
  })
  .add("invalid: null", () => {
    try {
      empty.parse(null);
    } catch (_err) {}
  })
  .on("cycle", (e: Benchmark.Event) => {
    console.log(`${(emptySuite as any).name}: ${e.target}`);
  });

shortSuite
  .add("valid", () => {
    short.parse({ string: "string" });
  })
  .add("valid: extra keys", () => {
    short.parse({ string: "string", number: 42 });
  })
  .add("invalid: null", () => {
    try {
      short.parse(null);
    } catch (_err) {}
  })
  .on("cycle", (e: Benchmark.Event) => {
    console.log(`${(shortSuite as any).name}: ${e.target}`);
  });

longSuite
  .add("valid", () => {
    long.parse({ string: "string", number: 42, boolean: true });
  })
  .add("valid: extra keys", () => {
    long.parse({ string: "string", number: 42, boolean: true, list: [] });
  })
  .add("invalid: null", () => {
    try {
      long.parse(null);
    } catch (_err) {}
  })
  .on("cycle", (e: Benchmark.Event) => {
    console.log(`${(longSuite as any).name}: ${e.target}`);
  });

export default {
  suites: [emptySuite, shortSuite, longSuite],
};
