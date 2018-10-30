/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    rules: {
        "exports-style": require("./lib/rules/exports-style"),
        "no-deprecated-api": require("./lib/rules/no-deprecated-api"),
        "no-hide-core-modules": require("./lib/rules/no-hide-core-modules"),
        "no-missing-import": require("./lib/rules/no-missing-import"),
        "no-missing-require": require("./lib/rules/no-missing-require"),
        "no-unpublished-bin": require("./lib/rules/no-unpublished-bin"),
        "no-unpublished-import": require("./lib/rules/no-unpublished-import"),
        "no-unpublished-require": require("./lib/rules/no-unpublished-require"),
        "no-unsupported-features": require("./lib/rules/no-unsupported-features"),
        "process-exit-as-throw": require("./lib/rules/process-exit-as-throw"),
        "shebang": require("./lib/rules/shebang"),
    },
    rulesConfig: {
        "exports-style": "off",
        "no-deprecated-api": "off",
        "no-hide-core-modules": "off",
        "no-missing-import": "off",
        "no-missing-require": "off",
        "no-unpublished-bin": "off",
        "no-unpublished-import": "off",
        "no-unpublished-require": "off",
        "no-unsupported-features": "off",
        "process-exit-as-throw": "off",
        "shebang": "off",
    },
    configs: {recommended: require("./conf/recommended.json")},
}
