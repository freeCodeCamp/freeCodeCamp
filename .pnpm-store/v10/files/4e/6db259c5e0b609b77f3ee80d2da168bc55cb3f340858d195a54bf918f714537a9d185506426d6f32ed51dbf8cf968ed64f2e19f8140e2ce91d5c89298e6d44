// translate the various posix character classes into unicode properties
// this works across all unicode locales
// { <posix class>: [<translation>, /u flag required, negated]
const posixClasses = {
    '[:alnum:]': ['\\p{L}\\p{Nl}\\p{Nd}', true],
    '[:alpha:]': ['\\p{L}\\p{Nl}', true],
    '[:ascii:]': ['\\x' + '00-\\x' + '7f', false],
    '[:blank:]': ['\\p{Zs}\\t', true],
    '[:cntrl:]': ['\\p{Cc}', true],
    '[:digit:]': ['\\p{Nd}', true],
    '[:graph:]': ['\\p{Z}\\p{C}', true, true],
    '[:lower:]': ['\\p{Ll}', true],
    '[:print:]': ['\\p{C}', true],
    '[:punct:]': ['\\p{P}', true],
    '[:space:]': ['\\p{Z}\\t\\r\\n\\v\\f', true],
    '[:upper:]': ['\\p{Lu}', true],
    '[:word:]': ['\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}', true],
    '[:xdigit:]': ['A-Fa-f0-9', false],
};
// only need to escape a few things inside of brace expressions
// escapes: [ \ ] -
const braceEscape = (s) => s.replace(/[[\]\\-]/g, '\\$&');
// escape all regexp magic characters
const regexpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
// everything has already been escaped, we just have to join
const rangesToString = (ranges) => ranges.join('');
// takes a glob string at a posix brace expression, and returns
// an equivalent regular expression source, and boolean indicating
// whether the /u flag needs to be applied, and the number of chars
// consumed to parse the character class.
// This also removes out of order ranges, and returns ($.) if the
// entire class just no good.
export const parseClass = (glob, position) => {
    const pos = position;
    /* c8 ignore start */
    if (glob.charAt(pos) !== '[') {
        throw new Error('not in a brace expression');
    }
    /* c8 ignore stop */
    const ranges = [];
    const negs = [];
    let i = pos + 1;
    let sawStart = false;
    let uflag = false;
    let escaping = false;
    let negate = false;
    let endPos = pos;
    let rangeStart = '';
    WHILE: while (i < glob.length) {
        const c = glob.charAt(i);
        if ((c === '!' || c === '^') && i === pos + 1) {
            negate = true;
            i++;
            continue;
        }
        if (c === ']' && sawStart && !escaping) {
            endPos = i + 1;
            break;
        }
        sawStart = true;
        if (c === '\\') {
            if (!escaping) {
                escaping = true;
                i++;
                continue;
            }
            // escaped \ char, fall through and treat like normal char
        }
        if (c === '[' && !escaping) {
            // either a posix class, a collation equivalent, or just a [
            for (const [cls, [unip, u, neg]] of Object.entries(posixClasses)) {
                if (glob.startsWith(cls, i)) {
                    // invalid, [a-[] is fine, but not [a-[:alpha]]
                    if (rangeStart) {
                        return ['$.', false, glob.length - pos, true];
                    }
                    i += cls.length;
                    if (neg)
                        negs.push(unip);
                    else
                        ranges.push(unip);
                    uflag = uflag || u;
                    continue WHILE;
                }
            }
        }
        // now it's just a normal character, effectively
        escaping = false;
        if (rangeStart) {
            // throw this range away if it's not valid, but others
            // can still match.
            if (c > rangeStart) {
                ranges.push(braceEscape(rangeStart) + '-' + braceEscape(c));
            }
            else if (c === rangeStart) {
                ranges.push(braceEscape(c));
            }
            rangeStart = '';
            i++;
            continue;
        }
        // now might be the start of a range.
        // can be either c-d or c-] or c<more...>] or c] at this point
        if (glob.startsWith('-]', i + 1)) {
            ranges.push(braceEscape(c + '-'));
            i += 2;
            continue;
        }
        if (glob.startsWith('-', i + 1)) {
            rangeStart = c;
            i += 2;
            continue;
        }
        // not the start of a range, just a single character
        ranges.push(braceEscape(c));
        i++;
    }
    if (endPos < i) {
        // didn't see the end of the class, not a valid class,
        // but might still be valid as a literal match.
        return ['', false, 0, false];
    }
    // if we got no ranges and no negates, then we have a range that
    // cannot possibly match anything, and that poisons the whole glob
    if (!ranges.length && !negs.length) {
        return ['$.', false, glob.length - pos, true];
    }
    // if we got one positive range, and it's a single character, then that's
    // not actually a magic pattern, it's just that one literal character.
    // we should not treat that as "magic", we should just return the literal
    // character. [_] is a perfectly valid way to escape glob magic chars.
    if (negs.length === 0 &&
        ranges.length === 1 &&
        /^\\?.$/.test(ranges[0]) &&
        !negate) {
        const r = ranges[0].length === 2 ? ranges[0].slice(-1) : ranges[0];
        return [regexpEscape(r), false, endPos - pos, false];
    }
    const sranges = '[' + (negate ? '^' : '') + rangesToString(ranges) + ']';
    const snegs = '[' + (negate ? '' : '^') + rangesToString(negs) + ']';
    const comb = ranges.length && negs.length ? '(' + sranges + '|' + snegs + ')'
        : ranges.length ? sranges
            : snegs;
    return [comb, uflag, endPos - pos, true];
};
//# sourceMappingURL=brace-expressions.js.map