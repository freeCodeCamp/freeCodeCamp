import gensync, { type Handler } from "gensync";

import loadConfig from "./config/index.ts";
import type { InputOptions, ResolvedConfig } from "./config/index.ts";
import { run } from "./transformation/index.ts";
import type { FileResult, FileResultCallback } from "./transformation/index.ts";
import * as fs from "./gensync-utils/fs.ts";

type transformFileBrowserType = typeof import("./transform-file-browser");
type transformFileType = typeof import("./transform-file");

// Kind of gross, but essentially asserting that the exports of this module are the same as the
// exports of transform-file-browser, since this file may be replaced at bundle time with
// transform-file-browser.
({}) as any as transformFileBrowserType as transformFileType;

const transformFileRunner = gensync(function* (
  filename: string,
  opts?: InputOptions,
): Handler<FileResult | null> {
  const options = { ...opts, filename };

  const config: ResolvedConfig | null = yield* loadConfig(options);
  if (config === null) return null;

  const code = yield* fs.readFile(filename, "utf8");
  return yield* run(config, code);
});

// @ts-expect-error TS doesn't detect that this signature is compatible
export function transformFile(
  filename: string,
  callback: FileResultCallback,
): void;
export function transformFile(
  filename: string,
  opts: InputOptions | undefined | null,
  callback: FileResultCallback,
): void;
export function transformFile(
  ...args: Parameters<typeof transformFileRunner.errback>
) {
  transformFileRunner.errback(...args);
}

export function transformFileSync(
  ...args: Parameters<typeof transformFileRunner.sync>
) {
  return transformFileRunner.sync(...args);
}
export function transformFileAsync(
  ...args: Parameters<typeof transformFileRunner.async>
) {
  return transformFileRunner.async(...args);
}
