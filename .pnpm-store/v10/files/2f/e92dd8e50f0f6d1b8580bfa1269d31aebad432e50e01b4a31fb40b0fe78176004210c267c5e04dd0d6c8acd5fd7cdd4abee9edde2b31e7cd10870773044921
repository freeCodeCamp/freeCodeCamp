/* c8 ignore start */

import type { InputOptions } from "./validation/options.ts";
import getTargets, {
  type InputTargets,
} from "@babel/helper-compilation-targets";

import type { Targets } from "@babel/helper-compilation-targets";

export function resolveBrowserslistConfigFile(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  browserslistConfigFile: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  configFilePath: string,
): string | void {
  return undefined;
}

export function resolveTargets(
  options: InputOptions,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  root: string,
): Targets {
  const optTargets = options.targets;
  let targets: InputTargets;

  if (typeof optTargets === "string" || Array.isArray(optTargets)) {
    targets = { browsers: optTargets };
  } else if (optTargets) {
    if ("esmodules" in optTargets) {
      targets = { ...optTargets, esmodules: "intersect" };
    } else {
      // https://github.com/microsoft/TypeScript/issues/17002
      targets = optTargets as InputTargets;
    }
  }

  return getTargets(targets, {
    ignoreBrowserslistConfig: true,
    browserslistEnv: options.browserslistEnv,
  });
}
