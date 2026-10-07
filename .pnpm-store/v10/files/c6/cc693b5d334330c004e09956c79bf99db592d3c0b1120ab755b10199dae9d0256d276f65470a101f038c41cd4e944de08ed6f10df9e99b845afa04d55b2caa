import Benchmark from "benchmark";

import { z } from "zod/v3";

const shortSuite = new Benchmark.Suite("realworld");

const People = z.array(
  z.object({
    type: z.literal("person"),
    hair: z.enum(["blue", "brown"]),
    active: z.boolean(),
    name: z.string(),
    age: z.number().int(),
    hobbies: z.array(z.string()),
    address: z.object({
      street: z.string(),
      zip: z.string(),
      country: z.string(),
    }),
  })
);

let i = 0;

function num() {
  return ++i;
}

function str() {
  return (++i % 100).toString(16);
}

function array<T>(fn: () => T): T[] {
  return Array.from({ length: ++i % 10 }, () => fn());
}

const people = Array.from({ length: 100 }, () => {
  return {
    type: "person",
    hair: i % 2 ? "blue" : "brown",
    active: !!(i % 2),
    name: str(),
    age: num(),
    hobbies: array(str),
    address: {
      street: str(),
      zip: str(),
      country: str(),
    },
  };
});

shortSuite
  .add("valid", () => {
    People.parse(people);
  })
  .on("cycle", (e: Benchmark.Event) => {
    console.log(`${(shortSuite as any).name}: ${e.target}`);
  });

export default {
  suites: [shortSuite],
};
