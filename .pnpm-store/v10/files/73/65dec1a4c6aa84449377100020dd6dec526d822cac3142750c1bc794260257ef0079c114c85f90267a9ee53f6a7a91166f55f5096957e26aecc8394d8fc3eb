declare const KNOWN_ASSET_TYPES: string[];
declare const KNOWN_ASSET_RE: RegExp;
declare const CSS_LANGS_RE: RegExp;
/**
* Prefix for resolved Ids that are not valid browser import specifiers
*/
declare const VALID_ID_PREFIX = "/@id/";
/**
* Plugins that use 'virtual modules' (e.g. for helper functions), prefix the
* module ID with `\0`, a convention from the rollup ecosystem.
* This prevents other plugins from trying to process the id (like node resolution),
* and core features like sourcemaps can use this info to differentiate between
* virtual modules and regular files.
* `\0` is not a permitted char in import URLs so we have to replace them during
* import analysis. The id will be decoded back before entering the plugins pipeline.
* These encoded virtual ids are also prefixed by the VALID_ID_PREFIX, so virtual
* modules in the browser end up encoded as `/@id/__x00__{id}`
*/
declare const NULL_BYTE_PLACEHOLDER = "__x00__";

export { CSS_LANGS_RE, KNOWN_ASSET_RE, KNOWN_ASSET_TYPES, NULL_BYTE_PLACEHOLDER, VALID_ID_PREFIX };
