/**
 * @fileoverview Common helpers for naming of plugins, formatters and configs
 */
"use strict";

const NAMESPACE_REGEX = /^@.*\//iu;

/**
 * Brings package name to correct format based on prefix
 * @param {string} name The name of the package.
 * @param {string} prefix Can be either "eslint-plugin", "eslint-config" or "eslint-formatter"
 * @returns {string} Normalized name of the package
 * @private
 */
function normalizePackageName(name, prefix) {
    let normalizedName = name;

    /**
     * On Windows, name can come in with Windows slashes instead of Unix slashes.
     * Normalize to Unix first to avoid errors later on.
     * https://github.com/eslint/eslint/issues/5644
     */
    if (normalizedName.includes("\\")) {
        normalizedName = normalizedName.replace(/\\/gu, "/");
    }

    if (normalizedName.charAt(0) === "@") {

        /**
         * it's a scoped package
         * package name is the prefix, or just a username
         */
        const scopedPackageShortcutRegex = new RegExp(`^(@[^/]+)(?:/(?:${prefix})?)?$`, "u"),
            scopedPackageNameRegex = new RegExp(`^${prefix}(-|$)`, "u");

        if (scopedPackageShortcutRegex.test(normalizedName)) {
            normalizedName = normalizedName.replace(scopedPackageShortcutRegex, `$1/${prefix}`);
        } else if (!scopedPackageNameRegex.test(normalizedName.split("/")[1])) {

            /**
             * for scoped packages, insert the prefix after the first / unless
             * the path is already @scope/eslint or @scope/eslint-xxx-yyy
             */
            normalizedName = normalizedName.replace(/^@([^/]+)\/(.*)$/u, `@$1/${prefix}-$2`);
        }
    } else if (!normalizedName.startsWith(`${prefix}-`)) {
        normalizedName = `${prefix}-${normalizedName}`;
    }

    return normalizedName;
}

/**
 * Removes the prefix from a fullname.
 * @param {string} fullname The term which may have the prefix.
 * @param {string} prefix The prefix to remove.
 * @returns {string} The term without prefix.
 */
function getShorthandName(fullname, prefix) {
    if (fullname[0] === "@") {
        let matchResult = new RegExp(`^(@[^/]+)/${prefix}$`, "u").exec(fullname);

        if (matchResult) {
            return matchResult[1];
        }

        matchResult = new RegExp(`^(@[^/]+)/${prefix}-(.+)$`, "u").exec(fullname);
        if (matchResult) {
            return `${matchResult[1]}/${matchResult[2]}`;
        }
    } else if (fullname.startsWith(`${prefix}-`)) {
        return fullname.slice(prefix.length + 1);
    }

    return fullname;
}

/**
 * Gets the scope (namespace) of a term.
 * @param {string} term The term which may have the namespace.
 * @returns {string} The namespace of the term if it has one.
 */
function getNamespaceFromTerm(term) {
    const match = term.match(NAMESPACE_REGEX);

    return match ? match[0] : "";
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    normalizePackageName,
    getShorthandName,
    getNamespaceFromTerm
};
