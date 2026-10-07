import { SCHEMES } from "../uri";
const NID$ = "(?:[0-9A-Za-z][0-9A-Za-z\\-]{1,31})";
const PCT_ENCODED$ = "(?:\\%[0-9A-Fa-f]{2})";
const TRANS$$ = "[0-9A-Za-z\\(\\)\\+\\,\\-\\.\\:\\=\\@\\;\\$\\_\\!\\*\\'\\/\\?\\#]";
const NSS$ = "(?:(?:" + PCT_ENCODED$ + "|" + TRANS$$ + ")+)";
const URN_SCHEME = new RegExp("^urn\\:(" + NID$ + ")$");
const URN_PATH = new RegExp("^(" + NID$ + ")\\:(" + NSS$ + ")$");
const URN_PARSE = /^([^\:]+)\:(.*)/;
const URN_EXCLUDED = /[\x00-\x20\\\"\&\<\>\[\]\^\`\{\|\}\~\x7F-\xFF]/g;
//RFC 2141
const handler = {
    scheme: "urn",
    parse: function (components, options) {
        const matches = components.path && components.path.match(URN_PARSE);
        let urnComponents = components;
        if (matches) {
            const scheme = options.scheme || urnComponents.scheme || "urn";
            const nid = matches[1].toLowerCase();
            const nss = matches[2];
            const urnScheme = `${scheme}:${options.nid || nid}`;
            const schemeHandler = SCHEMES[urnScheme];
            urnComponents.nid = nid;
            urnComponents.nss = nss;
            urnComponents.path = undefined;
            if (schemeHandler) {
                urnComponents = schemeHandler.parse(urnComponents, options);
            }
        }
        else {
            urnComponents.error = urnComponents.error || "URN can not be parsed.";
        }
        return urnComponents;
    },
    serialize: function (urnComponents, options) {
        const scheme = options.scheme || urnComponents.scheme || "urn";
        const nid = urnComponents.nid;
        const urnScheme = `${scheme}:${options.nid || nid}`;
        const schemeHandler = SCHEMES[urnScheme];
        if (schemeHandler) {
            urnComponents = schemeHandler.serialize(urnComponents, options);
        }
        const uriComponents = urnComponents;
        const nss = urnComponents.nss;
        uriComponents.path = `${nid || options.nid}:${nss}`;
        return uriComponents;
    },
};
export default handler;
//# sourceMappingURL=urn.js.map