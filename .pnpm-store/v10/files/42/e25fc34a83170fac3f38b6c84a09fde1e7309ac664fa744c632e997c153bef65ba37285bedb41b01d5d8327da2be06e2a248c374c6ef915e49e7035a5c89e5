// ------------------------------------------------------------------
// PunyCode (RFC 3492)
// ------------------------------------------------------------------
const PUNYCODE_BASE = 36;
const PUNYCODE_TMIN = 1;
const PUNYCODE_TMAX = 26;
const PUNYCODE_SKEW = 38;
const PUNYCODE_DAMP = 700;
const PUNYCODE_INITIAL_BIAS = 72;
const PUNYCODE_INITIAL_N = 128;
// ------------------------------------------------------------------
// Adapt
// ------------------------------------------------------------------
function Adapt(delta, numPoints, firstTime) {
    delta = firstTime ? Math.floor(delta / PUNYCODE_DAMP) : delta >> 1;
    delta += Math.floor(delta / numPoints);
    let k = 0;
    while (delta > (((PUNYCODE_BASE - PUNYCODE_TMIN) * PUNYCODE_TMAX) >> 1)) {
        delta = Math.floor(delta / (PUNYCODE_BASE - PUNYCODE_TMIN));
        k += PUNYCODE_BASE;
    }
    return k + Math.floor(((PUNYCODE_BASE - PUNYCODE_TMIN + 1) * delta) / (delta + PUNYCODE_SKEW));
}
// ------------------------------------------------------------------
// Decode
// ------------------------------------------------------------------
export function Decode(value) {
    const output = [];
    let n = PUNYCODE_INITIAL_N;
    let i = 0;
    let bias = PUNYCODE_INITIAL_BIAS;
    const delimIdx = value.lastIndexOf('-');
    if (delimIdx > 0) {
        for (let j = 0; j < delimIdx; j++) {
            const cp = value.charCodeAt(j);
            if (cp >= 128)
                throw new Error('Invalid punycode: non-basic before delimiter');
            output.push(cp);
        }
    }
    let inIdx = delimIdx < 0 ? 0 : delimIdx + 1;
    while (inIdx < value.length) {
        const oldi = i;
        let w = 1;
        let k = PUNYCODE_BASE;
        while (true) {
            if (inIdx >= value.length)
                throw new Error('Invalid punycode: unexpected end of input');
            const ch = value.charCodeAt(inIdx++);
            let digit;
            if (ch >= 0x61 && ch <= 0x7a)
                digit = ch - 0x61; // a-z => 0-25
            else if (ch >= 0x30 && ch <= 0x39)
                digit = ch - 0x30 + 26; // 0-9 => 26-35
            else if (ch >= 0x41 && ch <= 0x5a)
                digit = ch - 0x41; // A-Z => 0-25
            else
                throw new Error('Invalid punycode: bad digit character');
            i += digit * w;
            const t = k <= bias ? PUNYCODE_TMIN : k >= bias + PUNYCODE_TMAX ? PUNYCODE_TMAX : k - bias;
            if (digit < t)
                break;
            w *= PUNYCODE_BASE - t;
            k += PUNYCODE_BASE;
        }
        const outLen = output.length + 1;
        bias = Adapt(i - oldi, outLen, oldi === 0);
        n += Math.floor(i / outLen);
        i %= outLen;
        output.splice(i, 0, n);
        i++;
    }
    return globalThis.String.fromCodePoint(...output);
}
