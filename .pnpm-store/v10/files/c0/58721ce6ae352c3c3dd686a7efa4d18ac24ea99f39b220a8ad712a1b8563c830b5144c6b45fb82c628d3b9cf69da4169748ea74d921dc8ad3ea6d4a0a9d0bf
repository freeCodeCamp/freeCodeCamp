/**
 * These are types for things that are present in the `experimental` builds of React but not yet
 * on a stable build.
 *
 * Once they are promoted to stable they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,
 * is to add `"react-dom/experimental"` to the `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'react-dom/experimental'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="react-dom/experimental" />
 * ```
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/main/packages/react-dom/index.experimental.js to see how the exports are declared,
// but confirm with published source code (e.g. https://unpkg.com/react-dom@experimental) that these exports end up in the published code

import React = require("react");
import ReactDOM = require("./canary");

export {};

declare module "." {
}
