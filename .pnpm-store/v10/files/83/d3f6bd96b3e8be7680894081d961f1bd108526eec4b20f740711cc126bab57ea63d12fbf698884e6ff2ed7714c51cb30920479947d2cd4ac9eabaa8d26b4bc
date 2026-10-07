export const _json = (obj) => {
    if (obj == null) {
        return {};
    }
    if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null).map(_json);
    }
    if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
            if (obj[key] == null) {
                continue;
            }
            target[key] = _json(obj[key]);
        }
        return target;
    }
    return obj;
};
