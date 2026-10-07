/**
 * @fileoverview Package exports for @eslint/eslintrc
 * @author Nicholas C. Zakas
 */
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import {
    ConfigArrayFactory,
    createContext as createConfigArrayFactoryContext,
    loadConfigFile
} from "./config-array-factory.js";

import { CascadingConfigArrayFactory } from "./cascading-config-array-factory.js";
import * as ModuleResolver from "./shared/relative-module-resolver.js";
import { ConfigArray, getUsedExtractedConfigs } from "./config-array/index.js";
import { ConfigDependency } from "./config-array/config-dependency.js";
import { ExtractedConfig } from "./config-array/extracted-config.js";
import { IgnorePattern } from "./config-array/ignore-pattern.js";
import { OverrideTester } from "./config-array/override-tester.js";
import * as ConfigOps from "./shared/config-ops.js";
import ConfigValidator from "./shared/config-validator.js";
import * as naming from "./shared/naming.js";
import { FlatCompat } from "./flat-compat.js";
import environments from "../conf/environments.js";

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

const Legacy = {
    ConfigArray,
    createConfigArrayFactoryContext,
    CascadingConfigArrayFactory,
    ConfigArrayFactory,
    ConfigDependency,
    ExtractedConfig,
    IgnorePattern,
    OverrideTester,
    getUsedExtractedConfigs,
    environments,
    loadConfigFile,

    // shared
    ConfigOps,
    ConfigValidator,
    ModuleResolver,
    naming
};

export {

    Legacy,

    FlatCompat

};
