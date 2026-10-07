export function merge(...sets) {
    if (sets.length > 1) {
        sets[0] = sets[0].slice(0, -1);
        const xl = sets.length - 1;
        for (let x = 1; x < xl; ++x) {
            sets[x] = sets[x].slice(1, -1);
        }
        sets[xl] = sets[xl].slice(1);
        return sets.join('');
    }
    else {
        return sets[0];
    }
}
export function subexp(str) {
    return "(?:" + str + ")";
}
export function typeOf(o) {
    return o === undefined ? "undefined" : (o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase());
}
export function toUpperCase(str) {
    return str.toUpperCase();
}
export function toArray(obj) {
    return obj !== undefined && obj !== null ? (obj instanceof Array ? obj : (typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj))) : [];
}
export function assign(target, source) {
    const obj = target;
    if (source) {
        for (const key in source) {
            obj[key] = source[key];
        }
    }
    return obj;
}
//# sourceMappingURL=util.js.map