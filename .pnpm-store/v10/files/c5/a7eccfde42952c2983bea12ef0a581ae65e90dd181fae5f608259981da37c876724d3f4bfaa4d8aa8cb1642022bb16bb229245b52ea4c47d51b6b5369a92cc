export const Zero64 = { sign: 1, data: [0, 0] };
export const Unit64 = { sign: 1, data: [0, 1] };
export function isZero64(a) {
    return a.data[0] === 0 && a.data[1] === 0;
}
export function isStrictlyNegative64(a) {
    return a.sign === -1 && !isZero64(a);
}
export function isStrictlyPositive64(a) {
    return a.sign === 1 && !isZero64(a);
}
export function isEqual64(a, b) {
    if (a.data[0] === b.data[0] && a.data[1] === b.data[1]) {
        return a.sign === b.sign || (a.data[0] === 0 && a.data[1] === 0);
    }
    return false;
}
function isStrictlySmaller64Internal(a, b) {
    return a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]);
}
export function isStrictlySmaller64(a, b) {
    if (a.sign === b.sign) {
        return a.sign === 1
            ? isStrictlySmaller64Internal(a.data, b.data)
            : isStrictlySmaller64Internal(b.data, a.data);
    }
    return a.sign === -1 && (!isZero64(a) || !isZero64(b));
}
export function clone64(a) {
    return { sign: a.sign, data: [a.data[0], a.data[1]] };
}
function substract64DataInternal(a, b) {
    let reminderLow = 0;
    let low = a[1] - b[1];
    if (low < 0) {
        reminderLow = 1;
        low = low >>> 0;
    }
    return [a[0] - b[0] - reminderLow, low];
}
function substract64Internal(a, b) {
    if (a.sign === 1 && b.sign === -1) {
        const low = a.data[1] + b.data[1];
        const high = a.data[0] + b.data[0] + (low > 0xffffffff ? 1 : 0);
        return { sign: 1, data: [high >>> 0, low >>> 0] };
    }
    return {
        sign: 1,
        data: a.sign === 1 ? substract64DataInternal(a.data, b.data) : substract64DataInternal(b.data, a.data),
    };
}
export function substract64(arrayIntA, arrayIntB) {
    if (isStrictlySmaller64(arrayIntA, arrayIntB)) {
        const out = substract64Internal(arrayIntB, arrayIntA);
        out.sign = -1;
        return out;
    }
    return substract64Internal(arrayIntA, arrayIntB);
}
export function negative64(arrayIntA) {
    return {
        sign: -arrayIntA.sign,
        data: [arrayIntA.data[0], arrayIntA.data[1]],
    };
}
export function add64(arrayIntA, arrayIntB) {
    if (isZero64(arrayIntB)) {
        if (isZero64(arrayIntA)) {
            return clone64(Zero64);
        }
        return clone64(arrayIntA);
    }
    return substract64(arrayIntA, negative64(arrayIntB));
}
export function halve64(a) {
    return {
        sign: a.sign,
        data: [Math.floor(a.data[0] / 2), (a.data[0] % 2 === 1 ? 0x80000000 : 0) + Math.floor(a.data[1] / 2)],
    };
}
export function logLike64(a) {
    return {
        sign: a.sign,
        data: [0, Math.floor(Math.log(a.data[0] * 0x100000000 + a.data[1]) / Math.log(2))],
    };
}
