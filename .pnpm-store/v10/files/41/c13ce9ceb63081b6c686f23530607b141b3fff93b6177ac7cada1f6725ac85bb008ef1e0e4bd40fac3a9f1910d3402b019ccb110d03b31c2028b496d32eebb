import type { PluginObj, types as BabelTypes, PluginPass } from "@babel/core";
/**
 * This is a plugin that finds Slice placeholder components and injects the __renderedByLocation prop
 * with filename and location in the file where the placeholder was found. This is later used to provide
 * more useful error messages when the user props are invalid showing codeframe where user tries to render it
 * instead of codeframe of the Slice component itself (internals of gatsby) that is not useful for the user.
 */
export default function addSlicePlaceholderLocation(this: PluginPass, { types: t, }: {
    types: typeof BabelTypes;
}): PluginObj;
