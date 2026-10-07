import type Benchmark from "benchmark";

import datetimeBenchmarks from "./datetime.js";
import discriminatedUnionBenchmarks from "./discriminatedUnion.js";
import ipv4Benchmarks from "./ipv4.js";
import objectBenchmarks from "./object.js";
import primitiveBenchmarks from "./primitives.js";
import realworld from "./realworld.js";
import stringBenchmarks from "./string.js";
import unionBenchmarks from "./union.js";

const argv = process.argv.slice(2);
let suites: Benchmark.Suite[] = [];

if (!argv.length) {
  suites = [
    ...realworld.suites,
    ...primitiveBenchmarks.suites,
    ...stringBenchmarks.suites,
    ...objectBenchmarks.suites,
    ...unionBenchmarks.suites,
    ...discriminatedUnionBenchmarks.suites,
  ];
} else {
  if (argv.includes("--realworld")) {
    suites.push(...realworld.suites);
  }
  if (argv.includes("--primitives")) {
    suites.push(...primitiveBenchmarks.suites);
  }
  if (argv.includes("--string")) {
    suites.push(...stringBenchmarks.suites);
  }
  if (argv.includes("--object")) {
    suites.push(...objectBenchmarks.suites);
  }
  if (argv.includes("--union")) {
    suites.push(...unionBenchmarks.suites);
  }
  if (argv.includes("--discriminatedUnion")) {
    suites.push(...datetimeBenchmarks.suites);
  }
  if (argv.includes("--datetime")) {
    suites.push(...datetimeBenchmarks.suites);
  }
  if (argv.includes("--ipv4")) {
    suites.push(...ipv4Benchmarks.suites);
  }
}

for (const suite of suites) {
  suite.run({});
}

// exit on Ctrl-C
process.on("SIGINT", function () {
  console.log("Exiting...");
  process.exit();
});
