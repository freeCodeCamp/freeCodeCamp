const UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
const UUID_PARSE = /^[0-9A-Fa-f\-]{36}/;
//RFC 4122
const handler = {
    scheme: "urn:uuid",
    parse: function (urnComponents, options) {
        const uuidComponents = urnComponents;
        uuidComponents.uuid = uuidComponents.nss;
        uuidComponents.nss = undefined;
        if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
            uuidComponents.error = uuidComponents.error || "UUID is not valid.";
        }
        return uuidComponents;
    },
    serialize: function (uuidComponents, options) {
        const urnComponents = uuidComponents;
        //normalize UUID
        urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
        return urnComponents;
    },
};
export default handler;
//# sourceMappingURL=urn-uuid.js.map