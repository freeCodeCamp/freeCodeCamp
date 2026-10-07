import { chain, memoize } from "@smithy/property-provider";
import { fromEnv } from "./fromEnv";
import { fromSharedConfigFiles } from "./fromSharedConfigFiles";
import { fromStatic } from "./fromStatic";
export const loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => memoize(chain(fromEnv(environmentVariableSelector), fromSharedConfigFiles(configFileSelector, configuration), fromStatic(defaultValue)));
