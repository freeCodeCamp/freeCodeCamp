import { findClusterBreak as findClusterBreak$1 } from '@marijn/find-cluster-break';

/**
The data structure for documents. @nonabstract
*/
class Text {
    /**
    Get the line description around the given position.
    */
    lineAt(pos) {
        if (pos < 0 || pos > this.length)
            throw new RangeError(`Invalid position ${pos} in document of length ${this.length}`);
        return this.lineInner(pos, false, 1, 0);
    }
    /**
    Get the description for the given (1-based) line number.
    */
    line(n) {
        if (n < 1 || n > this.lines)
            throw new RangeError(`Invalid line number ${n} in ${this.lines}-line document`);
        return this.lineInner(n, true, 1, 0);
    }
    /**
    Replace a range of the text with the given content.
    */
    replace(from, to, text) {
        [from, to] = clip(this, from, to);
        let parts = [];
        this.decompose(0, from, parts, 2 /* Open.To */);
        if (text.length)
            text.decompose(0, text.length, parts, 1 /* Open.From */ | 2 /* Open.To */);
        this.decompose(to, this.length, parts, 1 /* Open.From */);
        return TextNode.from(parts, this.length - (to - from) + text.length);
    }
    /**
    Append another document to this one.
    */
    append(other) {
        return this.replace(this.length, this.length, other);
    }
    /**
    Retrieve the text between the given points.
    */
    slice(from, to = this.length) {
        [from, to] = clip(this, from, to);
        let parts = [];
        this.decompose(from, to, parts, 0);
        return TextNode.from(parts, to - from);
    }
    /**
    Test whether this text is equal to another instance.
    */
    eq(other) {
        if (other == this)
            return true;
        if (other.length != this.length || other.lines != this.lines)
            return false;
        let start = this.scanIdentical(other, 1), end = this.length - this.scanIdentical(other, -1);
        let a = new RawTextCursor(this), b = new RawTextCursor(other);
        for (let skip = start, pos = start;;) {
            a.next(skip);
            b.next(skip);
            skip = 0;
            if (a.lineBreak != b.lineBreak || a.done != b.done || a.value != b.value)
                return false;
            pos += a.value.length;
            if (a.done || pos >= end)
                return true;
        }
    }
    /**
    Iterate over the text. When `dir` is `-1`, iteration happens
    from end to start. This will return lines and the breaks between
    them as separate strings.
    */
    iter(dir = 1) { return new RawTextCursor(this, dir); }
    /**
    Iterate over a range of the text. When `from` > `to`, the
    iterator will run in reverse.
    */
    iterRange(from, to = this.length) { return new PartialTextCursor(this, from, to); }
    /**
    Return a cursor that iterates over the given range of lines,
    _without_ returning the line breaks between, and yielding empty
    strings for empty lines.
    
    When `from` and `to` are given, they should be 1-based line numbers.
    */
    iterLines(from, to) {
        let inner;
        if (from == null) {
            inner = this.iter();
        }
        else {
            if (to == null)
                to = this.lines + 1;
            let start = this.line(from).from;
            inner = this.iterRange(start, Math.max(start, to == this.lines + 1 ? this.length : to <= 1 ? 0 : this.line(to - 1).to));
        }
        return new LineCursor(inner);
    }
    /**
    Return the document as a string, using newline characters to
    separate lines.
    */
    toString() { return this.sliceString(0); }
    /**
    Convert the document to an array of lines (which can be
    deserialized again via [`Text.of`](https://codemirror.net/6/docs/ref/#state.Text^of)).
    */
    toJSON() {
        let lines = [];
        this.flatten(lines);
        return lines;
    }
    /**
    @internal
    */
    constructor() { }
    /**
    Create a `Text` instance for the given array of lines.
    */
    static of(text) {
        if (text.length == 0)
            throw new RangeError("A document must have at least one line");
        if (text.length == 1 && !text[0])
            return Text.empty;
        return text.length <= 32 /* Tree.Branch */ ? new TextLeaf(text) : TextNode.from(TextLeaf.split(text, []));
    }
}
// Leaves store an array of line strings. There are always line breaks
// between these strings. Leaves are limited in size and have to be
// contained in TextNode instances for bigger documents.
class TextLeaf extends Text {
    constructor(text, length = textLength(text)) {
        super();
        this.text = text;
        this.length = length;
    }
    get lines() { return this.text.length; }
    get children() { return null; }
    lineInner(target, isLine, line, offset) {
        for (let i = 0;; i++) {
            let string = this.text[i], end = offset + string.length;
            if ((isLine ? line : end) >= target)
                return new Line(offset, end, line, string);
            offset = end + 1;
            line++;
        }
    }
    decompose(from, to, target, open) {
        let text = from <= 0 && to >= this.length ? this
            : new TextLeaf(sliceText(this.text, from, to), Math.min(to, this.length) - Math.max(0, from));
        if (open & 1 /* Open.From */) {
            let prev = target.pop();
            let joined = appendText(text.text, prev.text.slice(), 0, text.length);
            if (joined.length <= 32 /* Tree.Branch */) {
                target.push(new TextLeaf(joined, prev.length + text.length));
            }
            else {
                let mid = joined.length >> 1;
                target.push(new TextLeaf(joined.slice(0, mid)), new TextLeaf(joined.slice(mid)));
            }
        }
        else {
            target.push(text);
        }
    }
    replace(from, to, text) {
        if (!(text instanceof TextLeaf))
            return super.replace(from, to, text);
        [from, to] = clip(this, from, to);
        let lines = appendText(this.text, appendText(text.text, sliceText(this.text, 0, from)), to);
        let newLen = this.length + text.length - (to - from);
        if (lines.length <= 32 /* Tree.Branch */)
            return new TextLeaf(lines, newLen);
        return TextNode.from(TextLeaf.split(lines, []), newLen);
    }
    sliceString(from, to = this.length, lineSep = "\n") {
        [from, to] = clip(this, from, to);
        let result = "";
        for (let pos = 0, i = 0; pos <= to && i < this.text.length; i++) {
            let line = this.text[i], end = pos + line.length;
            if (pos > from && i)
                result += lineSep;
            if (from < end && to > pos)
                result += line.slice(Math.max(0, from - pos), to - pos);
            pos = end + 1;
        }
        return result;
    }
    flatten(target) {
        for (let line of this.text)
            target.push(line);
    }
    scanIdentical() { return 0; }
    static split(text, target) {
        let part = [], len = -1;
        for (let line of text) {
            part.push(line);
            len += line.length + 1;
            if (part.length == 32 /* Tree.Branch */) {
                target.push(new TextLeaf(part, len));
                part = [];
                len = -1;
            }
        }
        if (len > -1)
            target.push(new TextLeaf(part, len));
        return target;
    }
}
// Nodes provide the tree structure of the `Text` type. They store a
// number of other nodes or leaves, taking care to balance themselves
// on changes. There are implied line breaks _between_ the children of
// a node (but not before the first or after the last child).
class TextNode extends Text {
    constructor(children, length) {
        super();
        this.children = children;
        this.length = length;
        this.lines = 0;
        for (let child of children)
            this.lines += child.lines;
    }
    lineInner(target, isLine, line, offset) {
        for (let i = 0;; i++) {
            let child = this.children[i], end = offset + child.length, endLine = line + child.lines - 1;
            if ((isLine ? endLine : end) >= target)
                return child.lineInner(target, isLine, line, offset);
            offset = end + 1;
            line = endLine + 1;
        }
    }
    decompose(from, to, target, open) {
        for (let i = 0, pos = 0; pos <= to && i < this.children.length; i++) {
            let child = this.children[i], end = pos + child.length;
            if (from <= end && to >= pos) {
                let childOpen = open & ((pos <= from ? 1 /* Open.From */ : 0) | (end >= to ? 2 /* Open.To */ : 0));
                if (pos >= from && end <= to && !childOpen)
                    target.push(child);
                else
                    child.decompose(from - pos, to - pos, target, childOpen);
            }
            pos = end + 1;
        }
    }
    replace(from, to, text) {
        [from, to] = clip(this, from, to);
        if (text.lines < this.lines)
            for (let i = 0, pos = 0; i < this.children.length; i++) {
                let child = this.children[i], end = pos + child.length;
                // Fast path: if the change only affects one child and the
                // child's size remains in the acceptable range, only update
                // that child
                if (from >= pos && to <= end) {
                    let updated = child.replace(from - pos, to - pos, text);
                    let totalLines = this.lines - child.lines + updated.lines;
                    if (updated.lines < (totalLines >> (5 /* Tree.BranchShift */ - 1)) &&
                        updated.lines > (totalLines >> (5 /* Tree.BranchShift */ + 1))) {
                        let copy = this.children.slice();
                        copy[i] = updated;
                        return new TextNode(copy, this.length - (to - from) + text.length);
                    }
                    return super.replace(pos, end, updated);
                }
                pos = end + 1;
            }
        return super.replace(from, to, text);
    }
    sliceString(from, to = this.length, lineSep = "\n") {
        [from, to] = clip(this, from, to);
        let result = "";
        for (let i = 0, pos = 0; i < this.children.length && pos <= to; i++) {
            let child = this.children[i], end = pos + child.length;
            if (pos > from && i)
                result += lineSep;
            if (from < end && to > pos)
                result += child.sliceString(from - pos, to - pos, lineSep);
            pos = end + 1;
        }
        return result;
    }
    flatten(target) {
        for (let child of this.children)
            child.flatten(target);
    }
    scanIdentical(other, dir) {
        if (!(other instanceof TextNode))
            return 0;
        let length = 0;
        let [iA, iB, eA, eB] = dir > 0 ? [0, 0, this.children.length, other.children.length]
            : [this.children.length - 1, other.children.length - 1, -1, -1];
        for (;; iA += dir, iB += dir) {
            if (iA == eA || iB == eB)
                return length;
            let chA = this.children[iA], chB = other.children[iB];
            if (chA != chB)
                return length + chA.scanIdentical(chB, dir);
            length += chA.length + 1;
        }
    }
    static from(children, length = children.reduce((l, ch) => l + ch.length + 1, -1)) {
        let lines = 0;
        for (let ch of children)
            lines += ch.lines;
        if (lines < 32 /* Tree.Branch */) {
            let flat = [];
            for (let ch of children)
                ch.flatten(flat);
            return new TextLeaf(flat, length);
        }
        let chunk = Math.max(32 /* Tree.Branch */, lines >> 5 /* Tree.BranchShift */), maxChunk = chunk << 1, minChunk = chunk >> 1;
        let chunked = [], currentLines = 0, currentLen = -1, currentChunk = [];
        function add(child) {
            let last;
            if (child.lines > maxChunk && child instanceof TextNode) {
                for (let node of child.children)
                    add(node);
            }
            else if (child.lines > minChunk && (currentLines > minChunk || !currentLines)) {
                flush();
                chunked.push(child);
            }
            else if (child instanceof TextLeaf && currentLines &&
                (last = currentChunk[currentChunk.length - 1]) instanceof TextLeaf &&
                child.lines + last.lines <= 32 /* Tree.Branch */) {
                currentLines += child.lines;
                currentLen += child.length + 1;
                currentChunk[currentChunk.length - 1] = new TextLeaf(last.text.concat(child.text), last.length + 1 + child.length);
            }
            else {
                if (currentLines + child.lines > chunk)
                    flush();
                currentLines += child.lines;
                currentLen += child.length + 1;
                currentChunk.push(child);
            }
        }
        function flush() {
            if (currentLines == 0)
                return;
            chunked.push(currentChunk.length == 1 ? currentChunk[0] : TextNode.from(currentChunk, currentLen));
            currentLen = -1;
            currentLines = currentChunk.length = 0;
        }
        for (let child of children)
            add(child);
        flush();
        return chunked.length == 1 ? chunked[0] : new TextNode(chunked, length);
    }
}
Text.empty = /*@__PURE__*/new TextLeaf([""], 0);
function textLength(text) {
    let length = -1;
    for (let line of text)
        length += line.length + 1;
    return length;
}
function appendText(text, target, from = 0, to = 1e9) {
    for (let pos = 0, i = 0, first = true; i < text.length && pos <= to; i++) {
        let line = text[i], end = pos + line.length;
        if (end >= from) {
            if (end > to)
                line = line.slice(0, to - pos);
            if (pos < from)
                line = line.slice(from - pos);
            if (first) {
                target[target.length - 1] += line;
                first = false;
            }
            else
                target.push(line);
        }
        pos = end + 1;
    }
    return target;
}
function sliceText(text, from, to) {
    return appendText(text, [""], from, to);
}
class RawTextCursor {
    constructor(text, dir = 1) {
        this.dir = dir;
        this.done = false;
        this.lineBreak = false;
        this.value = "";
        this.nodes = [text];
        this.offsets = [dir > 0 ? 1 : (text instanceof TextLeaf ? text.text.length : text.children.length) << 1];
    }
    nextInner(skip, dir) {
        this.done = this.lineBreak = false;
        for (;;) {
            let last = this.nodes.length - 1;
            let top = this.nodes[last], offsetValue = this.offsets[last], offset = offsetValue >> 1;
            let size = top instanceof TextLeaf ? top.text.length : top.children.length;
            if (offset == (dir > 0 ? size : 0)) {
                if (last == 0) {
                    this.done = true;
                    this.value = "";
                    return this;
                }
                if (dir > 0)
                    this.offsets[last - 1]++;
                this.nodes.pop();
                this.offsets.pop();
            }
            else if ((offsetValue & 1) == (dir > 0 ? 0 : 1)) {
                this.offsets[last] += dir;
                if (skip == 0) {
                    this.lineBreak = true;
                    this.value = "\n";
                    return this;
                }
                skip--;
            }
            else if (top instanceof TextLeaf) {
                // Move to the next string
                let next = top.text[offset + (dir < 0 ? -1 : 0)];
                this.offsets[last] += dir;
                if (next.length > Math.max(0, skip)) {
                    this.value = skip == 0 ? next : dir > 0 ? next.slice(skip) : next.slice(0, next.length - skip);
                    return this;
                }
                skip -= next.length;
            }
            else {
                let next = top.children[offset + (dir < 0 ? -1 : 0)];
                if (skip > next.length) {
                    skip -= next.length;
                    this.offsets[last] += dir;
                }
                else {
                    if (dir < 0)
                        this.offsets[last]--;
                    this.nodes.push(next);
                    this.offsets.push(dir > 0 ? 1 : (next instanceof TextLeaf ? next.text.length : next.children.length) << 1);
                }
            }
        }
    }
    next(skip = 0) {
        if (skip < 0) {
            this.nextInner(-skip, (-this.dir));
            skip = this.value.length;
        }
        return this.nextInner(skip, this.dir);
    }
}
class PartialTextCursor {
    constructor(text, start, end) {
        this.value = "";
        this.done = false;
        this.cursor = new RawTextCursor(text, start > end ? -1 : 1);
        this.pos = start > end ? text.length : 0;
        this.from = Math.min(start, end);
        this.to = Math.max(start, end);
    }
    nextInner(skip, dir) {
        if (dir < 0 ? this.pos <= this.from : this.pos >= this.to) {
            this.value = "";
            this.done = true;
            return this;
        }
        skip += Math.max(0, dir < 0 ? this.pos - this.to : this.from - this.pos);
        let limit = dir < 0 ? this.pos - this.from : this.to - this.pos;
        if (skip > limit)
            skip = limit;
        limit -= skip;
        let { value } = this.cursor.next(skip);
        this.pos += (value.length + skip) * dir;
        this.value = value.length <= limit ? value : dir < 0 ? value.slice(value.length - limit) : value.slice(0, limit);
        this.done = !this.value;
        return this;
    }
    next(skip = 0) {
        if (skip < 0)
            skip = Math.max(skip, this.from - this.pos);
        else if (skip > 0)
            skip = Math.min(skip, this.to - this.pos);
        return this.nextInner(skip, this.cursor.dir);
    }
    get lineBreak() { return this.cursor.lineBreak && this.value != ""; }
}
class LineCursor {
    constructor(inner) {
        this.inner = inner;
        this.afterBreak = true;
        this.value = "";
        this.done = false;
    }
    next(skip = 0) {
        let { done, lineBreak, value } = this.inner.next(skip);
        if (done && this.afterBreak) {
            this.value = "";
            this.afterBreak = false;
        }
        else if (done) {
            this.done = true;
            this.value = "";
        }
        else if (lineBreak) {
            if (this.afterBreak) {
                this.value = "";
            }
            else {
                this.afterBreak = true;
                this.next();
            }
        }
        else {
            this.value = value;
            this.afterBreak = false;
        }
        return this;
    }
    get lineBreak() { return false; }
}
if (typeof Symbol != "undefined") {
    Text.prototype[Symbol.iterator] = function () { return this.iter(); };
    RawTextCursor.prototype[Symbol.iterator] = PartialTextCursor.prototype[Symbol.iterator] =
        LineCursor.prototype[Symbol.iterator] = function () { return this; };
}
/**
This type describes a line in the document. It is created
on-demand when lines are [queried](https://codemirror.net/6/docs/ref/#state.Text.lineAt).
*/
class Line {
    /**
    @internal
    */
    constructor(
    /**
    The position of the start of the line.
    */
    from, 
    /**
    The position at the end of the line (_before_ the line break,
    or at the end of document for the last line).
    */
    to, 
    /**
    This line's line number (1-based).
    */
    number, 
    /**
    The line's content.
    */
    text) {
        this.from = from;
        this.to = to;
        this.number = number;
        this.text = text;
    }
    /**
    The length of the line (not including any line break after it).
    */
    get length() { return this.to - this.from; }
}
function clip(text, from, to) {
    from = Math.max(0, Math.min(text.length, from));
    return [from, Math.max(from, Math.min(text.length, to))];
}

/**
Returns a next grapheme cluster break _after_ (not equal to)
`pos`, if `forward` is true, or before otherwise. Returns `pos`
itself if no further cluster break is available in the string.
Moves across surrogate pairs, extending characters (when
`includeExtending` is true), characters joined with zero-width
joiners, and flag emoji.
*/
function findClusterBreak(str, pos, forward = true, includeExtending = true) {
    return findClusterBreak$1(str, pos, forward, includeExtending);
}
function surrogateLow(ch) { return ch >= 0xDC00 && ch < 0xE000; }
function surrogateHigh(ch) { return ch >= 0xD800 && ch < 0xDC00; }
/**
Find the code point at the given position in a string (like the
[`codePointAt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
string method).
*/
function codePointAt(str, pos) {
    let code0 = str.charCodeAt(pos);
    if (!surrogateHigh(code0) || pos + 1 == str.length)
        return code0;
    let code1 = str.charCodeAt(pos + 1);
    if (!surrogateLow(code1))
        return code0;
    return ((code0 - 0xd800) << 10) + (code1 - 0xdc00) + 0x10000;
}
/**
Given a Unicode codepoint, return the JavaScript string that
respresents it (like
[`String.fromCodePoint`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)).
*/
function fromCodePoint(code) {
    if (code <= 0xffff)
        return String.fromCharCode(code);
    code -= 0x10000;
    return String.fromCharCode((code >> 10) + 0xd800, (code & 1023) + 0xdc00);
}
/**
The amount of positions a character takes up in a JavaScript string.
*/
function codePointSize(code) { return code < 0x10000 ? 1 : 2; }

const DefaultSplit = /\r\n?|\n/;
/**
Distinguishes different ways in which positions can be mapped.
*/
var MapMode = /*@__PURE__*/(function (MapMode) {
    /**
    Map a position to a valid new position, even when its context
    was deleted.
    */
    MapMode[MapMode["Simple"] = 0] = "Simple";
    /**
    Return null if deletion happens across the position.
    */
    MapMode[MapMode["TrackDel"] = 1] = "TrackDel";
    /**
    Return null if the character _before_ the position is deleted.
    */
    MapMode[MapMode["TrackBefore"] = 2] = "TrackBefore";
    /**
    Return null if the character _after_ the position is deleted.
    */
    MapMode[MapMode["TrackAfter"] = 3] = "TrackAfter";
return MapMode})(MapMode || (MapMode = {}));
/**
A change description is a variant of [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet)
that doesn't store the inserted text. As such, it can't be
applied, but is cheaper to store and manipulate.
*/
class ChangeDesc {
    // Sections are encoded as pairs of integers. The first is the
    // length in the current document, and the second is -1 for
    // unaffected sections, and the length of the replacement content
    // otherwise. So an insertion would be (0, n>0), a deletion (n>0,
    // 0), and a replacement two positive numbers.
    /**
    @internal
    */
    constructor(
    /**
    @internal
    */
    sections) {
        this.sections = sections;
    }
    /**
    The length of the document before the change.
    */
    get length() {
        let result = 0;
        for (let i = 0; i < this.sections.length; i += 2)
            result += this.sections[i];
        return result;
    }
    /**
    The length of the document after the change.
    */
    get newLength() {
        let result = 0;
        for (let i = 0; i < this.sections.length; i += 2) {
            let ins = this.sections[i + 1];
            result += ins < 0 ? this.sections[i] : ins;
        }
        return result;
    }
    /**
    False when there are actual changes in this set.
    */
    get empty() { return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0; }
    /**
    Iterate over the unchanged parts left by these changes. `posA`
    provides the position of the range in the old document, `posB`
    the new position in the changed document.
    */
    iterGaps(f) {
        for (let i = 0, posA = 0, posB = 0; i < this.sections.length;) {
            let len = this.sections[i++], ins = this.sections[i++];
            if (ins < 0) {
                f(posA, posB, len);
                posB += len;
            }
            else {
                posB += ins;
            }
            posA += len;
        }
    }
    /**
    Iterate over the ranges changed by these changes. (See
    [`ChangeSet.iterChanges`](https://codemirror.net/6/docs/ref/#state.ChangeSet.iterChanges) for a
    variant that also provides you with the inserted text.)
    `fromA`/`toA` provides the extent of the change in the starting
    document, `fromB`/`toB` the extent of the replacement in the
    changed document.
    
    When `individual` is true, adjacent changes (which are kept
    separate for [position mapping](https://codemirror.net/6/docs/ref/#state.ChangeDesc.mapPos)) are
    reported separately.
    */
    iterChangedRanges(f, individual = false) {
        iterChanges(this, f, individual);
    }
    /**
    Get a description of the inverted form of these changes.
    */
    get invertedDesc() {
        let sections = [];
        for (let i = 0; i < this.sections.length;) {
            let len = this.sections[i++], ins = this.sections[i++];
            if (ins < 0)
                sections.push(len, ins);
            else
                sections.push(ins, len);
        }
        return new ChangeDesc(sections);
    }
    /**
    Compute the combined effect of applying another set of changes
    after this one. The length of the document after this set should
    match the length before `other`.
    */
    composeDesc(other) { return this.empty ? other : other.empty ? this : composeSets(this, other); }
    /**
    Map this description, which should start with the same document
    as `other`, over another set of changes, so that it can be
    applied after it. When `before` is true, map as if the changes
    in `this` happened before the ones in `other`.
    */
    mapDesc(other, before = false) { return other.empty ? this : mapSet(this, other, before); }
    mapPos(pos, assoc = -1, mode = MapMode.Simple) {
        let posA = 0, posB = 0;
        for (let i = 0; i < this.sections.length;) {
            let len = this.sections[i++], ins = this.sections[i++], endA = posA + len;
            if (ins < 0) {
                if (endA > pos)
                    return posB + (pos - posA);
                posB += len;
            }
            else {
                if (mode != MapMode.Simple && endA >= pos &&
                    (mode == MapMode.TrackDel && posA < pos && endA > pos ||
                        mode == MapMode.TrackBefore && posA < pos ||
                        mode == MapMode.TrackAfter && endA > pos))
                    return null;
                if (endA > pos || endA == pos && assoc < 0 && !len)
                    return pos == posA || assoc < 0 ? posB : posB + ins;
                posB += ins;
            }
            posA = endA;
        }
        if (pos > posA)
            throw new RangeError(`Position ${pos} is out of range for changeset of length ${posA}`);
        return posB;
    }
    /**
    Check whether these changes touch a given range. When one of the
    changes entirely covers the range, the string `"cover"` is
    returned.
    */
    touchesRange(from, to = from) {
        for (let i = 0, pos = 0; i < this.sections.length && pos <= to;) {
            let len = this.sections[i++], ins = this.sections[i++], end = pos + len;
            if (ins >= 0 && pos <= to && end >= from)
                return pos < from && end > to ? "cover" : true;
            pos = end;
        }
        return false;
    }
    /**
    @internal
    */
    toString() {
        let result = "";
        for (let i = 0; i < this.sections.length;) {
            let len = this.sections[i++], ins = this.sections[i++];
            result += (result ? " " : "") + len + (ins >= 0 ? ":" + ins : "");
        }
        return result;
    }
    /**
    Serialize this change desc to a JSON-representable value.
    */
    toJSON() { return this.sections; }
    /**
    Create a change desc from its JSON representation (as produced
    by [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeDesc.toJSON).
    */
    static fromJSON(json) {
        if (!Array.isArray(json) || json.length % 2 || json.some(a => typeof a != "number"))
            throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new ChangeDesc(json);
    }
    /**
    @internal
    */
    static create(sections) { return new ChangeDesc(sections); }
}
/**
A change set represents a group of modifications to a document. It
stores the document length, and can only be applied to documents
with exactly that length.
*/
class ChangeSet extends ChangeDesc {
    constructor(sections, 
    /**
    @internal
    */
    inserted) {
        super(sections);
        this.inserted = inserted;
    }
    /**
    Apply the changes to a document, returning the modified
    document.
    */
    apply(doc) {
        if (this.length != doc.length)
            throw new RangeError("Applying change set to a document with the wrong length");
        iterChanges(this, (fromA, toA, fromB, _toB, text) => doc = doc.replace(fromB, fromB + (toA - fromA), text), false);
        return doc;
    }
    mapDesc(other, before = false) { return mapSet(this, other, before, true); }
    /**
    Given the document as it existed _before_ the changes, return a
    change set that represents the inverse of this set, which could
    be used to go from the document created by the changes back to
    the document as it existed before the changes.
    */
    invert(doc) {
        let sections = this.sections.slice(), inserted = [];
        for (let i = 0, pos = 0; i < sections.length; i += 2) {
            let len = sections[i], ins = sections[i + 1];
            if (ins >= 0) {
                sections[i] = ins;
                sections[i + 1] = len;
                let index = i >> 1;
                while (inserted.length < index)
                    inserted.push(Text.empty);
                inserted.push(len ? doc.slice(pos, pos + len) : Text.empty);
            }
            pos += len;
        }
        return new ChangeSet(sections, inserted);
    }
    /**
    Combine two subsequent change sets into a single set. `other`
    must start in the document produced by `this`. If `this` goes
    `docA` → `docB` and `other` represents `docB` → `docC`, the
    returned value will represent the change `docA` → `docC`.
    */
    compose(other) { return this.empty ? other : other.empty ? this : composeSets(this, other, true); }
    /**
    Given another change set starting in the same document, maps this
    change set over the other, producing a new change set that can be
    applied to the document produced by applying `other`. When
    `before` is `true`, order changes as if `this` comes before
    `other`, otherwise (the default) treat `other` as coming first.
    
    Given two changes `A` and `B`, `A.compose(B.map(A))` and
    `B.compose(A.map(B, true))` will produce the same document. This
    provides a basic form of [operational
    transformation](https://en.wikipedia.org/wiki/Operational_transformation),
    and can be used for collaborative editing.
    */
    map(other, before = false) { return other.empty ? this : mapSet(this, other, before, true); }
    /**
    Iterate over the changed ranges in the document, calling `f` for
    each, with the range in the original document (`fromA`-`toA`)
    and the range that replaces it in the new document
    (`fromB`-`toB`).
    
    When `individual` is true, adjacent changes are reported
    separately.
    */
    iterChanges(f, individual = false) {
        iterChanges(this, f, individual);
    }
    /**
    Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
    set.
    */
    get desc() { return ChangeDesc.create(this.sections); }
    /**
    @internal
    */
    filter(ranges) {
        let resultSections = [], resultInserted = [], filteredSections = [];
        let iter = new SectionIter(this);
        done: for (let i = 0, pos = 0;;) {
            let next = i == ranges.length ? 1e9 : ranges[i++];
            while (pos < next || pos == next && iter.len == 0) {
                if (iter.done)
                    break done;
                let len = Math.min(iter.len, next - pos);
                addSection(filteredSections, len, -1);
                let ins = iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0;
                addSection(resultSections, len, ins);
                if (ins > 0)
                    addInsert(resultInserted, resultSections, iter.text);
                iter.forward(len);
                pos += len;
            }
            let end = ranges[i++];
            while (pos < end) {
                if (iter.done)
                    break done;
                let len = Math.min(iter.len, end - pos);
                addSection(resultSections, len, -1);
                addSection(filteredSections, len, iter.ins == -1 ? -1 : iter.off == 0 ? iter.ins : 0);
                iter.forward(len);
                pos += len;
            }
        }
        return { changes: new ChangeSet(resultSections, resultInserted),
            filtered: ChangeDesc.create(filteredSections) };
    }
    /**
    Serialize this change set to a JSON-representable value.
    */
    toJSON() {
        let parts = [];
        for (let i = 0; i < this.sections.length; i += 2) {
            let len = this.sections[i], ins = this.sections[i + 1];
            if (ins < 0)
                parts.push(len);
            else if (ins == 0)
                parts.push([len]);
            else
                parts.push([len].concat(this.inserted[i >> 1].toJSON()));
        }
        return parts;
    }
    /**
    Create a change set for the given changes, for a document of the
    given length, using `lineSep` as line separator.
    */
    static of(changes, length, lineSep) {
        let sections = [], inserted = [], pos = 0;
        let total = null;
        function flush(force = false) {
            if (!force && !sections.length)
                return;
            if (pos < length)
                addSection(sections, length - pos, -1);
            let set = new ChangeSet(sections, inserted);
            total = total ? total.compose(set.map(total)) : set;
            sections = [];
            inserted = [];
            pos = 0;
        }
        function process(spec) {
            if (Array.isArray(spec)) {
                for (let sub of spec)
                    process(sub);
            }
            else if (spec instanceof ChangeSet) {
                if (spec.length != length)
                    throw new RangeError(`Mismatched change set length (got ${spec.length}, expected ${length})`);
                flush();
                total = total ? total.compose(spec.map(total)) : spec;
            }
            else {
                let { from, to = from, insert } = spec;
                if (from > to || from < 0 || to > length)
                    throw new RangeError(`Invalid change range ${from} to ${to} (in doc of length ${length})`);
                let insText = !insert ? Text.empty : typeof insert == "string" ? Text.of(insert.split(lineSep || DefaultSplit)) : insert;
                let insLen = insText.length;
                if (from == to && insLen == 0)
                    return;
                if (from < pos)
                    flush();
                if (from > pos)
                    addSection(sections, from - pos, -1);
                addSection(sections, to - from, insLen);
                addInsert(inserted, sections, insText);
                pos = to;
            }
        }
        process(changes);
        flush(!total);
        return total;
    }
    /**
    Create an empty changeset of the given length.
    */
    static empty(length) {
        return new ChangeSet(length ? [length, -1] : [], []);
    }
    /**
    Create a changeset from its JSON representation (as produced by
    [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
    */
    static fromJSON(json) {
        if (!Array.isArray(json))
            throw new RangeError("Invalid JSON representation of ChangeSet");
        let sections = [], inserted = [];
        for (let i = 0; i < json.length; i++) {
            let part = json[i];
            if (typeof part == "number") {
                sections.push(part, -1);
            }
            else if (!Array.isArray(part) || typeof part[0] != "number" || part.some((e, i) => i && typeof e != "string")) {
                throw new RangeError("Invalid JSON representation of ChangeSet");
            }
            else if (part.length == 1) {
                sections.push(part[0], 0);
            }
            else {
                while (inserted.length < i)
                    inserted.push(Text.empty);
                inserted[i] = Text.of(part.slice(1));
                sections.push(part[0], inserted[i].length);
            }
        }
        return new ChangeSet(sections, inserted);
    }
    /**
    @internal
    */
    static createSet(sections, inserted) {
        return new ChangeSet(sections, inserted);
    }
}
function addSection(sections, len, ins, forceJoin = false) {
    if (len == 0 && ins <= 0)
        return;
    let last = sections.length - 2;
    if (last >= 0 && ins <= 0 && ins == sections[last + 1])
        sections[last] += len;
    else if (last >= 0 && len == 0 && sections[last] == 0)
        sections[last + 1] += ins;
    else if (forceJoin) {
        sections[last] += len;
        sections[last + 1] += ins;
    }
    else
        sections.push(len, ins);
}
function addInsert(values, sections, value) {
    if (value.length == 0)
        return;
    let index = (sections.length - 2) >> 1;
    if (index < values.length) {
        values[values.length - 1] = values[values.length - 1].append(value);
    }
    else {
        while (values.length < index)
            values.push(Text.empty);
        values.push(value);
    }
}
function iterChanges(desc, f, individual) {
    let inserted = desc.inserted;
    for (let posA = 0, posB = 0, i = 0; i < desc.sections.length;) {
        let len = desc.sections[i++], ins = desc.sections[i++];
        if (ins < 0) {
            posA += len;
            posB += len;
        }
        else {
            let endA = posA, endB = posB, text = Text.empty;
            for (;;) {
                endA += len;
                endB += ins;
                if (ins && inserted)
                    text = text.append(inserted[(i - 2) >> 1]);
                if (individual || i == desc.sections.length || desc.sections[i + 1] < 0)
                    break;
                len = desc.sections[i++];
                ins = desc.sections[i++];
            }
            f(posA, endA, posB, endB, text);
            posA = endA;
            posB = endB;
        }
    }
}
function mapSet(setA, setB, before, mkSet = false) {
    // Produce a copy of setA that applies to the document after setB
    // has been applied (assuming both start at the same document).
    let sections = [], insert = mkSet ? [] : null;
    let a = new SectionIter(setA), b = new SectionIter(setB);
    // Iterate over both sets in parallel. inserted tracks, for changes
    // in A that have to be processed piece-by-piece, whether their
    // content has been inserted already, and refers to the section
    // index.
    for (let inserted = -1;;) {
        if (a.done && b.len || b.done && a.len) {
            throw new Error("Mismatched change set lengths");
        }
        else if (a.ins == -1 && b.ins == -1) {
            // Move across ranges skipped by both sets.
            let len = Math.min(a.len, b.len);
            addSection(sections, len, -1);
            a.forward(len);
            b.forward(len);
        }
        else if (b.ins >= 0 && (a.ins < 0 || inserted == a.i || a.off == 0 && (b.len < a.len || b.len == a.len && !before))) {
            // If there's a change in B that comes before the next change in
            // A (ordered by start pos, then len, then before flag), skip
            // that (and process any changes in A it covers).
            let len = b.len;
            addSection(sections, b.ins, -1);
            while (len) {
                let piece = Math.min(a.len, len);
                if (a.ins >= 0 && inserted < a.i && a.len <= piece) {
                    addSection(sections, 0, a.ins);
                    if (insert)
                        addInsert(insert, sections, a.text);
                    inserted = a.i;
                }
                a.forward(piece);
                len -= piece;
            }
            b.next();
        }
        else if (a.ins >= 0) {
            // Process the part of a change in A up to the start of the next
            // non-deletion change in B (if overlapping).
            let len = 0, left = a.len;
            while (left) {
                if (b.ins == -1) {
                    let piece = Math.min(left, b.len);
                    len += piece;
                    left -= piece;
                    b.forward(piece);
                }
                else if (b.ins == 0 && b.len < left) {
                    left -= b.len;
                    b.next();
                }
                else {
                    break;
                }
            }
            addSection(sections, len, inserted < a.i ? a.ins : 0);
            if (insert && inserted < a.i)
                addInsert(insert, sections, a.text);
            inserted = a.i;
            a.forward(a.len - left);
        }
        else if (a.done && b.done) {
            return insert ? ChangeSet.createSet(sections, insert) : ChangeDesc.create(sections);
        }
        else {
            throw new Error("Mismatched change set lengths");
        }
    }
}
function composeSets(setA, setB, mkSet = false) {
    let sections = [];
    let insert = mkSet ? [] : null;
    let a = new SectionIter(setA), b = new SectionIter(setB);
    for (let open = false;;) {
        if (a.done && b.done) {
            return insert ? ChangeSet.createSet(sections, insert) : ChangeDesc.create(sections);
        }
        else if (a.ins == 0) { // Deletion in A
            addSection(sections, a.len, 0, open);
            a.next();
        }
        else if (b.len == 0 && !b.done) { // Insertion in B
            addSection(sections, 0, b.ins, open);
            if (insert)
                addInsert(insert, sections, b.text);
            b.next();
        }
        else if (a.done || b.done) {
            throw new Error("Mismatched change set lengths");
        }
        else {
            let len = Math.min(a.len2, b.len), sectionLen = sections.length;
            if (a.ins == -1) {
                let insB = b.ins == -1 ? -1 : b.off ? 0 : b.ins;
                addSection(sections, len, insB, open);
                if (insert && insB)
                    addInsert(insert, sections, b.text);
            }
            else if (b.ins == -1) {
                addSection(sections, a.off ? 0 : a.len, len, open);
                if (insert)
                    addInsert(insert, sections, a.textBit(len));
            }
            else {
                addSection(sections, a.off ? 0 : a.len, b.off ? 0 : b.ins, open);
                if (insert && !b.off)
                    addInsert(insert, sections, b.text);
            }
            open = (a.ins > len || b.ins >= 0 && b.len > len) && (open || sections.length > sectionLen);
            a.forward2(len);
            b.forward(len);
        }
    }
}
class SectionIter {
    constructor(set) {
        this.set = set;
        this.i = 0;
        this.next();
    }
    next() {
        let { sections } = this.set;
        if (this.i < sections.length) {
            this.len = sections[this.i++];
            this.ins = sections[this.i++];
        }
        else {
            this.len = 0;
            this.ins = -2;
        }
        this.off = 0;
    }
    get done() { return this.ins == -2; }
    get len2() { return this.ins < 0 ? this.len : this.ins; }
    get text() {
        let { inserted } = this.set, index = (this.i - 2) >> 1;
        return index >= inserted.length ? Text.empty : inserted[index];
    }
    textBit(len) {
        let { inserted } = this.set, index = (this.i - 2) >> 1;
        return index >= inserted.length && !len ? Text.empty
            : inserted[index].slice(this.off, len == null ? undefined : this.off + len);
    }
    forward(len) {
        if (len == this.len)
            this.next();
        else {
            this.len -= len;
            this.off += len;
        }
    }
    forward2(len) {
        if (this.ins == -1)
            this.forward(len);
        else if (len == this.ins)
            this.next();
        else {
            this.ins -= len;
            this.off += len;
        }
    }
}

/**
A single selection range. When
[`allowMultipleSelections`](https://codemirror.net/6/docs/ref/#state.EditorState^allowMultipleSelections)
is enabled, a [selection](https://codemirror.net/6/docs/ref/#state.EditorSelection) may hold
multiple ranges. By default, selections hold exactly one range.
*/
class SelectionRange {
    constructor(
    /**
    The lower boundary of the range.
    */
    from, 
    /**
    The upper boundary of the range.
    */
    to, flags) {
        this.from = from;
        this.to = to;
        this.flags = flags;
    }
    /**
    The anchor of the range—the side that doesn't move when you
    extend it.
    */
    get anchor() { return this.flags & 32 /* RangeFlag.Inverted */ ? this.to : this.from; }
    /**
    The head of the range, which is moved when the range is
    [extended](https://codemirror.net/6/docs/ref/#state.SelectionRange.extend).
    */
    get head() { return this.flags & 32 /* RangeFlag.Inverted */ ? this.from : this.to; }
    /**
    True when `anchor` and `head` are at the same position.
    */
    get empty() { return this.from == this.to; }
    /**
    If this is a cursor that is explicitly associated with the
    character on one of its sides, this returns the side. -1 means
    the character before its position, 1 the character after, and 0
    means no association.
    */
    get assoc() { return this.flags & 8 /* RangeFlag.AssocBefore */ ? -1 : this.flags & 16 /* RangeFlag.AssocAfter */ ? 1 : 0; }
    /**
    The bidirectional text level associated with this cursor, if
    any.
    */
    get bidiLevel() {
        let level = this.flags & 7 /* RangeFlag.BidiLevelMask */;
        return level == 7 ? null : level;
    }
    /**
    The goal column (stored vertical offset) associated with a
    cursor. This is used to preserve the vertical position when
    [moving](https://codemirror.net/6/docs/ref/#view.EditorView.moveVertically) across
    lines of different length.
    */
    get goalColumn() {
        let value = this.flags >> 6 /* RangeFlag.GoalColumnOffset */;
        return value == 16777215 /* RangeFlag.NoGoalColumn */ ? undefined : value;
    }
    /**
    Map this range through a change, producing a valid range in the
    updated document.
    */
    map(change, assoc = -1) {
        let from, to;
        if (this.empty) {
            from = to = change.mapPos(this.from, assoc);
        }
        else {
            from = change.mapPos(this.from, 1);
            to = change.mapPos(this.to, -1);
        }
        return from == this.from && to == this.to ? this : new SelectionRange(from, to, this.flags);
    }
    /**
    Extend this range to cover at least `from` to `to`.
    */
    extend(from, to = from) {
        if (from <= this.anchor && to >= this.anchor)
            return EditorSelection.range(from, to);
        let head = Math.abs(from - this.anchor) > Math.abs(to - this.anchor) ? from : to;
        return EditorSelection.range(this.anchor, head);
    }
    /**
    Compare this range to another range.
    */
    eq(other, includeAssoc = false) {
        return this.anchor == other.anchor && this.head == other.head &&
            (!includeAssoc || !this.empty || this.assoc == other.assoc);
    }
    /**
    Return a JSON-serializable object representing the range.
    */
    toJSON() { return { anchor: this.anchor, head: this.head }; }
    /**
    Convert a JSON representation of a range to a `SelectionRange`
    instance.
    */
    static fromJSON(json) {
        if (!json || typeof json.anchor != "number" || typeof json.head != "number")
            throw new RangeError("Invalid JSON representation for SelectionRange");
        return EditorSelection.range(json.anchor, json.head);
    }
    /**
    @internal
    */
    static create(from, to, flags) {
        return new SelectionRange(from, to, flags);
    }
}
/**
An editor selection holds one or more selection ranges.
*/
class EditorSelection {
    constructor(
    /**
    The ranges in the selection, sorted by position. Ranges cannot
    overlap (but they may touch, if they aren't empty).
    */
    ranges, 
    /**
    The index of the _main_ range in the selection (which is
    usually the range that was added last).
    */
    mainIndex) {
        this.ranges = ranges;
        this.mainIndex = mainIndex;
    }
    /**
    Map a selection through a change. Used to adjust the selection
    position for changes.
    */
    map(change, assoc = -1) {
        if (change.empty)
            return this;
        return EditorSelection.create(this.ranges.map(r => r.map(change, assoc)), this.mainIndex);
    }
    /**
    Compare this selection to another selection. By default, ranges
    are compared only by position. When `includeAssoc` is true,
    cursor ranges must also have the same
    [`assoc`](https://codemirror.net/6/docs/ref/#state.SelectionRange.assoc) value.
    */
    eq(other, includeAssoc = false) {
        if (this.ranges.length != other.ranges.length ||
            this.mainIndex != other.mainIndex)
            return false;
        for (let i = 0; i < this.ranges.length; i++)
            if (!this.ranges[i].eq(other.ranges[i], includeAssoc))
                return false;
        return true;
    }
    /**
    Get the primary selection range. Usually, you should make sure
    your code applies to _all_ ranges, by using methods like
    [`changeByRange`](https://codemirror.net/6/docs/ref/#state.EditorState.changeByRange).
    */
    get main() { return this.ranges[this.mainIndex]; }
    /**
    Make sure the selection only has one range. Returns a selection
    holding only the main range from this selection.
    */
    asSingle() {
        return this.ranges.length == 1 ? this : new EditorSelection([this.main], 0);
    }
    /**
    Extend this selection with an extra range.
    */
    addRange(range, main = true) {
        return EditorSelection.create([range].concat(this.ranges), main ? 0 : this.mainIndex + 1);
    }
    /**
    Replace a given range with another range, and then normalize the
    selection to merge and sort ranges if necessary.
    */
    replaceRange(range, which = this.mainIndex) {
        let ranges = this.ranges.slice();
        ranges[which] = range;
        return EditorSelection.create(ranges, this.mainIndex);
    }
    /**
    Convert this selection to an object that can be serialized to
    JSON.
    */
    toJSON() {
        return { ranges: this.ranges.map(r => r.toJSON()), main: this.mainIndex };
    }
    /**
    Create a selection from a JSON representation.
    */
    static fromJSON(json) {
        if (!json || !Array.isArray(json.ranges) || typeof json.main != "number" || json.main >= json.ranges.length)
            throw new RangeError("Invalid JSON representation for EditorSelection");
        return new EditorSelection(json.ranges.map((r) => SelectionRange.fromJSON(r)), json.main);
    }
    /**
    Create a selection holding a single range.
    */
    static single(anchor, head = anchor) {
        return new EditorSelection([EditorSelection.range(anchor, head)], 0);
    }
    /**
    Sort and merge the given set of ranges, creating a valid
    selection.
    */
    static create(ranges, mainIndex = 0) {
        if (ranges.length == 0)
            throw new RangeError("A selection needs at least one range");
        for (let pos = 0, i = 0; i < ranges.length; i++) {
            let range = ranges[i];
            if (range.empty ? range.from <= pos : range.from < pos)
                return EditorSelection.normalized(ranges.slice(), mainIndex);
            pos = range.to;
        }
        return new EditorSelection(ranges, mainIndex);
    }
    /**
    Create a cursor selection range at the given position. You can
    safely ignore the optional arguments in most situations.
    */
    static cursor(pos, assoc = 0, bidiLevel, goalColumn) {
        return SelectionRange.create(pos, pos, (assoc == 0 ? 0 : assoc < 0 ? 8 /* RangeFlag.AssocBefore */ : 16 /* RangeFlag.AssocAfter */) |
            (bidiLevel == null ? 7 : Math.min(6, bidiLevel)) |
            ((goalColumn !== null && goalColumn !== void 0 ? goalColumn : 16777215 /* RangeFlag.NoGoalColumn */) << 6 /* RangeFlag.GoalColumnOffset */));
    }
    /**
    Create a selection range.
    */
    static range(anchor, head, goalColumn, bidiLevel) {
        let flags = ((goalColumn !== null && goalColumn !== void 0 ? goalColumn : 16777215 /* RangeFlag.NoGoalColumn */) << 6 /* RangeFlag.GoalColumnOffset */) |
            (bidiLevel == null ? 7 : Math.min(6, bidiLevel));
        return head < anchor ? SelectionRange.create(head, anchor, 32 /* RangeFlag.Inverted */ | 16 /* RangeFlag.AssocAfter */ | flags)
            : SelectionRange.create(anchor, head, (head > anchor ? 8 /* RangeFlag.AssocBefore */ : 0) | flags);
    }
    /**
    @internal
    */
    static normalized(ranges, mainIndex = 0) {
        let main = ranges[mainIndex];
        ranges.sort((a, b) => a.from - b.from);
        mainIndex = ranges.indexOf(main);
        for (let i = 1; i < ranges.length; i++) {
            let range = ranges[i], prev = ranges[i - 1];
            if (range.empty ? range.from <= prev.to : range.from < prev.to) {
                let from = prev.from, to = Math.max(range.to, prev.to);
                if (i <= mainIndex)
                    mainIndex--;
                ranges.splice(--i, 2, range.anchor > range.head ? EditorSelection.range(to, from) : EditorSelection.range(from, to));
            }
        }
        return new EditorSelection(ranges, mainIndex);
    }
}
function checkSelection(selection, docLength) {
    for (let range of selection.ranges)
        if (range.to > docLength)
            throw new RangeError("Selection points outside of document");
}

let nextID = 0;
/**
A facet is a labeled value that is associated with an editor
state. It takes inputs from any number of extensions, and combines
those into a single output value.

Examples of uses of facets are the [tab
size](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize), [editor
attributes](https://codemirror.net/6/docs/ref/#view.EditorView^editorAttributes), and [update
listeners](https://codemirror.net/6/docs/ref/#view.EditorView^updateListener).

Note that `Facet` instances can be used anywhere where
[`FacetReader`](https://codemirror.net/6/docs/ref/#state.FacetReader) is expected.
*/
class Facet {
    constructor(
    /**
    @internal
    */
    combine, 
    /**
    @internal
    */
    compareInput, 
    /**
    @internal
    */
    compare, isStatic, enables) {
        this.combine = combine;
        this.compareInput = compareInput;
        this.compare = compare;
        this.isStatic = isStatic;
        /**
        @internal
        */
        this.id = nextID++;
        this.default = combine([]);
        this.extensions = typeof enables == "function" ? enables(this) : enables;
    }
    /**
    Returns a facet reader for this facet, which can be used to
    [read](https://codemirror.net/6/docs/ref/#state.EditorState.facet) it but not to define values for it.
    */
    get reader() { return this; }
    /**
    Define a new facet.
    */
    static define(config = {}) {
        return new Facet(config.combine || ((a) => a), config.compareInput || ((a, b) => a === b), config.compare || (!config.combine ? sameArray : (a, b) => a === b), !!config.static, config.enables);
    }
    /**
    Returns an extension that adds the given value to this facet.
    */
    of(value) {
        return new FacetProvider([], this, 0 /* Provider.Static */, value);
    }
    /**
    Create an extension that computes a value for the facet from a
    state. You must take care to declare the parts of the state that
    this value depends on, since your function is only called again
    for a new state when one of those parts changed.
    
    In cases where your value depends only on a single field, you'll
    want to use the [`from`](https://codemirror.net/6/docs/ref/#state.Facet.from) method instead.
    */
    compute(deps, get) {
        if (this.isStatic)
            throw new Error("Can't compute a static facet");
        return new FacetProvider(deps, this, 1 /* Provider.Single */, get);
    }
    /**
    Create an extension that computes zero or more values for this
    facet from a state.
    */
    computeN(deps, get) {
        if (this.isStatic)
            throw new Error("Can't compute a static facet");
        return new FacetProvider(deps, this, 2 /* Provider.Multi */, get);
    }
    from(field, get) {
        if (!get)
            get = x => x;
        return this.compute([field], state => get(state.field(field)));
    }
}
function sameArray(a, b) {
    return a == b || a.length == b.length && a.every((e, i) => e === b[i]);
}
class FacetProvider {
    constructor(dependencies, facet, type, value) {
        this.dependencies = dependencies;
        this.facet = facet;
        this.type = type;
        this.value = value;
        this.id = nextID++;
    }
    dynamicSlot(addresses) {
        var _a;
        let getter = this.value;
        let compare = this.facet.compareInput;
        let id = this.id, idx = addresses[id] >> 1, multi = this.type == 2 /* Provider.Multi */;
        let depDoc = false, depSel = false, depAddrs = [];
        for (let dep of this.dependencies) {
            if (dep == "doc")
                depDoc = true;
            else if (dep == "selection")
                depSel = true;
            else if ((((_a = addresses[dep.id]) !== null && _a !== void 0 ? _a : 1) & 1) == 0)
                depAddrs.push(addresses[dep.id]);
        }
        return {
            create(state) {
                state.values[idx] = getter(state);
                return 1 /* SlotStatus.Changed */;
            },
            update(state, tr) {
                if ((depDoc && tr.docChanged) || (depSel && (tr.docChanged || tr.selection)) || ensureAll(state, depAddrs)) {
                    let newVal = getter(state);
                    if (multi ? !compareArray(newVal, state.values[idx], compare) : !compare(newVal, state.values[idx])) {
                        state.values[idx] = newVal;
                        return 1 /* SlotStatus.Changed */;
                    }
                }
                return 0;
            },
            reconfigure: (state, oldState) => {
                let newVal, oldAddr = oldState.config.address[id];
                if (oldAddr != null) {
                    let oldVal = getAddr(oldState, oldAddr);
                    if (this.dependencies.every(dep => {
                        return dep instanceof Facet ? oldState.facet(dep) === state.facet(dep) :
                            dep instanceof StateField ? oldState.field(dep, false) == state.field(dep, false) : true;
                    }) || (multi ? compareArray(newVal = getter(state), oldVal, compare) : compare(newVal = getter(state), oldVal))) {
                        state.values[idx] = oldVal;
                        return 0;
                    }
                }
                else {
                    newVal = getter(state);
                }
                state.values[idx] = newVal;
                return 1 /* SlotStatus.Changed */;
            }
        };
    }
}
function compareArray(a, b, compare) {
    if (a.length != b.length)
        return false;
    for (let i = 0; i < a.length; i++)
        if (!compare(a[i], b[i]))
            return false;
    return true;
}
function ensureAll(state, addrs) {
    let changed = false;
    for (let addr of addrs)
        if (ensureAddr(state, addr) & 1 /* SlotStatus.Changed */)
            changed = true;
    return changed;
}
function dynamicFacetSlot(addresses, facet, providers) {
    let providerAddrs = providers.map(p => addresses[p.id]);
    let providerTypes = providers.map(p => p.type);
    let dynamic = providerAddrs.filter(p => !(p & 1));
    let idx = addresses[facet.id] >> 1;
    function get(state) {
        let values = [];
        for (let i = 0; i < providerAddrs.length; i++) {
            let value = getAddr(state, providerAddrs[i]);
            if (providerTypes[i] == 2 /* Provider.Multi */)
                for (let val of value)
                    values.push(val);
            else
                values.push(value);
        }
        return facet.combine(values);
    }
    return {
        create(state) {
            for (let addr of providerAddrs)
                ensureAddr(state, addr);
            state.values[idx] = get(state);
            return 1 /* SlotStatus.Changed */;
        },
        update(state, tr) {
            if (!ensureAll(state, dynamic))
                return 0;
            let value = get(state);
            if (facet.compare(value, state.values[idx]))
                return 0;
            state.values[idx] = value;
            return 1 /* SlotStatus.Changed */;
        },
        reconfigure(state, oldState) {
            let depChanged = ensureAll(state, providerAddrs);
            let oldProviders = oldState.config.facets[facet.id], oldValue = oldState.facet(facet);
            if (oldProviders && !depChanged && sameArray(providers, oldProviders)) {
                state.values[idx] = oldValue;
                return 0;
            }
            let value = get(state);
            if (facet.compare(value, oldValue)) {
                state.values[idx] = oldValue;
                return 0;
            }
            state.values[idx] = value;
            return 1 /* SlotStatus.Changed */;
        }
    };
}
const initField = /*@__PURE__*/Facet.define({ static: true });
/**
Fields can store additional information in an editor state, and
keep it in sync with the rest of the state.
*/
class StateField {
    constructor(
    /**
    @internal
    */
    id, createF, updateF, compareF, 
    /**
    @internal
    */
    spec) {
        this.id = id;
        this.createF = createF;
        this.updateF = updateF;
        this.compareF = compareF;
        this.spec = spec;
        /**
        @internal
        */
        this.provides = undefined;
    }
    /**
    Define a state field.
    */
    static define(config) {
        let field = new StateField(nextID++, config.create, config.update, config.compare || ((a, b) => a === b), config);
        if (config.provide)
            field.provides = config.provide(field);
        return field;
    }
    create(state) {
        let init = state.facet(initField).find(i => i.field == this);
        return ((init === null || init === void 0 ? void 0 : init.create) || this.createF)(state);
    }
    /**
    @internal
    */
    slot(addresses) {
        let idx = addresses[this.id] >> 1;
        return {
            create: (state) => {
                state.values[idx] = this.create(state);
                return 1 /* SlotStatus.Changed */;
            },
            update: (state, tr) => {
                let oldVal = state.values[idx];
                let value = this.updateF(oldVal, tr);
                if (this.compareF(oldVal, value))
                    return 0;
                state.values[idx] = value;
                return 1 /* SlotStatus.Changed */;
            },
            reconfigure: (state, oldState) => {
                let init = state.facet(initField), oldInit = oldState.facet(initField), reInit;
                if ((reInit = init.find(i => i.field == this)) && reInit != oldInit.find(i => i.field == this)) {
                    state.values[idx] = reInit.create(state);
                    return 1 /* SlotStatus.Changed */;
                }
                if (oldState.config.address[this.id] != null) {
                    state.values[idx] = oldState.field(this);
                    return 0;
                }
                state.values[idx] = this.create(state);
                return 1 /* SlotStatus.Changed */;
            }
        };
    }
    /**
    Returns an extension that enables this field and overrides the
    way it is initialized. Can be useful when you need to provide a
    non-default starting value for the field.
    */
    init(create) {
        return [this, initField.of({ field: this, create })];
    }
    /**
    State field instances can be used as
    [`Extension`](https://codemirror.net/6/docs/ref/#state.Extension) values to enable the field in a
    given state.
    */
    get extension() { return this; }
}
const Prec_ = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function prec(value) {
    return (ext) => new PrecExtension(ext, value);
}
/**
By default extensions are registered in the order they are found
in the flattened form of nested array that was provided.
Individual extension values can be assigned a precedence to
override this. Extensions that do not have a precedence set get
the precedence of the nearest parent with a precedence, or
[`default`](https://codemirror.net/6/docs/ref/#state.Prec.default) if there is no such parent. The
final ordering of extensions is determined by first sorting by
precedence and then by order within each precedence.
*/
const Prec = {
    /**
    The highest precedence level, for extensions that should end up
    near the start of the precedence ordering.
    */
    highest: /*@__PURE__*/prec(Prec_.highest),
    /**
    A higher-than-default precedence, for extensions that should
    come before those with default precedence.
    */
    high: /*@__PURE__*/prec(Prec_.high),
    /**
    The default precedence, which is also used for extensions
    without an explicit precedence.
    */
    default: /*@__PURE__*/prec(Prec_.default),
    /**
    A lower-than-default precedence.
    */
    low: /*@__PURE__*/prec(Prec_.low),
    /**
    The lowest precedence level. Meant for things that should end up
    near the end of the extension order.
    */
    lowest: /*@__PURE__*/prec(Prec_.lowest)
};
class PrecExtension {
    constructor(inner, prec) {
        this.inner = inner;
        this.prec = prec;
    }
}
/**
Extension compartments can be used to make a configuration
dynamic. By [wrapping](https://codemirror.net/6/docs/ref/#state.Compartment.of) part of your
configuration in a compartment, you can later
[replace](https://codemirror.net/6/docs/ref/#state.Compartment.reconfigure) that part through a
transaction.
*/
class Compartment {
    /**
    Create an instance of this compartment to add to your [state
    configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
    */
    of(ext) { return new CompartmentInstance(this, ext); }
    /**
    Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
    reconfigures this compartment.
    */
    reconfigure(content) {
        return Compartment.reconfigure.of({ compartment: this, extension: content });
    }
    /**
    Get the current content of the compartment in the state, or
    `undefined` if it isn't present.
    */
    get(state) {
        return state.config.compartments.get(this);
    }
}
class CompartmentInstance {
    constructor(compartment, inner) {
        this.compartment = compartment;
        this.inner = inner;
    }
}
class Configuration {
    constructor(base, compartments, dynamicSlots, address, staticValues, facets) {
        this.base = base;
        this.compartments = compartments;
        this.dynamicSlots = dynamicSlots;
        this.address = address;
        this.staticValues = staticValues;
        this.facets = facets;
        this.statusTemplate = [];
        while (this.statusTemplate.length < dynamicSlots.length)
            this.statusTemplate.push(0 /* SlotStatus.Unresolved */);
    }
    staticFacet(facet) {
        let addr = this.address[facet.id];
        return addr == null ? facet.default : this.staticValues[addr >> 1];
    }
    static resolve(base, compartments, oldState) {
        let fields = [];
        let facets = Object.create(null);
        let newCompartments = new Map();
        for (let ext of flatten(base, compartments, newCompartments)) {
            if (ext instanceof StateField)
                fields.push(ext);
            else
                (facets[ext.facet.id] || (facets[ext.facet.id] = [])).push(ext);
        }
        let address = Object.create(null);
        let staticValues = [];
        let dynamicSlots = [];
        for (let field of fields) {
            address[field.id] = dynamicSlots.length << 1;
            dynamicSlots.push(a => field.slot(a));
        }
        let oldFacets = oldState === null || oldState === void 0 ? void 0 : oldState.config.facets;
        for (let id in facets) {
            let providers = facets[id], facet = providers[0].facet;
            let oldProviders = oldFacets && oldFacets[id] || [];
            if (providers.every(p => p.type == 0 /* Provider.Static */)) {
                address[facet.id] = (staticValues.length << 1) | 1;
                if (sameArray(oldProviders, providers)) {
                    staticValues.push(oldState.facet(facet));
                }
                else {
                    let value = facet.combine(providers.map(p => p.value));
                    staticValues.push(oldState && facet.compare(value, oldState.facet(facet)) ? oldState.facet(facet) : value);
                }
            }
            else {
                for (let p of providers) {
                    if (p.type == 0 /* Provider.Static */) {
                        address[p.id] = (staticValues.length << 1) | 1;
                        staticValues.push(p.value);
                    }
                    else {
                        address[p.id] = dynamicSlots.length << 1;
                        dynamicSlots.push(a => p.dynamicSlot(a));
                    }
                }
                address[facet.id] = dynamicSlots.length << 1;
                dynamicSlots.push(a => dynamicFacetSlot(a, facet, providers));
            }
        }
        let dynamic = dynamicSlots.map(f => f(address));
        return new Configuration(base, newCompartments, dynamic, address, staticValues, facets);
    }
}
function flatten(extension, compartments, newCompartments) {
    let result = [[], [], [], [], []];
    let seen = new Map();
    function inner(ext, prec) {
        let known = seen.get(ext);
        if (known != null) {
            if (known <= prec)
                return;
            let found = result[known].indexOf(ext);
            if (found > -1)
                result[known].splice(found, 1);
            if (ext instanceof CompartmentInstance)
                newCompartments.delete(ext.compartment);
        }
        seen.set(ext, prec);
        if (Array.isArray(ext)) {
            for (let e of ext)
                inner(e, prec);
        }
        else if (ext instanceof CompartmentInstance) {
            if (newCompartments.has(ext.compartment))
                throw new RangeError(`Duplicate use of compartment in extensions`);
            let content = compartments.get(ext.compartment) || ext.inner;
            newCompartments.set(ext.compartment, content);
            inner(content, prec);
        }
        else if (ext instanceof PrecExtension) {
            inner(ext.inner, ext.prec);
        }
        else if (ext instanceof StateField) {
            result[prec].push(ext);
            if (ext.provides)
                inner(ext.provides, prec);
        }
        else if (ext instanceof FacetProvider) {
            result[prec].push(ext);
            if (ext.facet.extensions)
                inner(ext.facet.extensions, Prec_.default);
        }
        else {
            let content = ext.extension;
            if (!content)
                throw new Error(`Unrecognized extension value in extension set (${ext}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
            inner(content, prec);
        }
    }
    inner(extension, Prec_.default);
    return result.reduce((a, b) => a.concat(b));
}
function ensureAddr(state, addr) {
    if (addr & 1)
        return 2 /* SlotStatus.Computed */;
    let idx = addr >> 1;
    let status = state.status[idx];
    if (status == 4 /* SlotStatus.Computing */)
        throw new Error("Cyclic dependency between fields and/or facets");
    if (status & 2 /* SlotStatus.Computed */)
        return status;
    state.status[idx] = 4 /* SlotStatus.Computing */;
    let changed = state.computeSlot(state, state.config.dynamicSlots[idx]);
    return state.status[idx] = 2 /* SlotStatus.Computed */ | changed;
}
function getAddr(state, addr) {
    return addr & 1 ? state.config.staticValues[addr >> 1] : state.values[addr >> 1];
}

const languageData = /*@__PURE__*/Facet.define();
const allowMultipleSelections = /*@__PURE__*/Facet.define({
    combine: values => values.some(v => v),
    static: true
});
const lineSeparator = /*@__PURE__*/Facet.define({
    combine: values => values.length ? values[0] : undefined,
    static: true
});
const changeFilter = /*@__PURE__*/Facet.define();
const transactionFilter = /*@__PURE__*/Facet.define();
const transactionExtender = /*@__PURE__*/Facet.define();
const readOnly = /*@__PURE__*/Facet.define({
    combine: values => values.length ? values[0] : false
});

/**
Annotations are tagged values that are used to add metadata to
transactions in an extensible way. They should be used to model
things that effect the entire transaction (such as its [time
stamp](https://codemirror.net/6/docs/ref/#state.Transaction^time) or information about its
[origin](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent)). For effects that happen
_alongside_ the other changes made by the transaction, [state
effects](https://codemirror.net/6/docs/ref/#state.StateEffect) are more appropriate.
*/
class Annotation {
    /**
    @internal
    */
    constructor(
    /**
    The annotation type.
    */
    type, 
    /**
    The value of this annotation.
    */
    value) {
        this.type = type;
        this.value = value;
    }
    /**
    Define a new type of annotation.
    */
    static define() { return new AnnotationType(); }
}
/**
Marker that identifies a type of [annotation](https://codemirror.net/6/docs/ref/#state.Annotation).
*/
class AnnotationType {
    /**
    Create an instance of this annotation.
    */
    of(value) { return new Annotation(this, value); }
}
/**
Representation of a type of state effect. Defined with
[`StateEffect.define`](https://codemirror.net/6/docs/ref/#state.StateEffect^define).
*/
class StateEffectType {
    /**
    @internal
    */
    constructor(
    // The `any` types in these function types are there to work
    // around TypeScript issue #37631, where the type guard on
    // `StateEffect.is` mysteriously stops working when these properly
    // have type `Value`.
    /**
    @internal
    */
    map) {
        this.map = map;
    }
    /**
    Create a [state effect](https://codemirror.net/6/docs/ref/#state.StateEffect) instance of this
    type.
    */
    of(value) { return new StateEffect(this, value); }
}
/**
State effects can be used to represent additional effects
associated with a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction.effects). They
are often useful to model changes to custom [state
fields](https://codemirror.net/6/docs/ref/#state.StateField), when those changes aren't implicit in
document or selection changes.
*/
class StateEffect {
    /**
    @internal
    */
    constructor(
    /**
    @internal
    */
    type, 
    /**
    The value of this effect.
    */
    value) {
        this.type = type;
        this.value = value;
    }
    /**
    Map this effect through a position mapping. Will return
    `undefined` when that ends up deleting the effect.
    */
    map(mapping) {
        let mapped = this.type.map(this.value, mapping);
        return mapped === undefined ? undefined : mapped == this.value ? this : new StateEffect(this.type, mapped);
    }
    /**
    Tells you whether this effect object is of a given
    [type](https://codemirror.net/6/docs/ref/#state.StateEffectType).
    */
    is(type) { return this.type == type; }
    /**
    Define a new effect type. The type parameter indicates the type
    of values that his effect holds. It should be a type that
    doesn't include `undefined`, since that is used in
    [mapping](https://codemirror.net/6/docs/ref/#state.StateEffect.map) to indicate that an effect is
    removed.
    */
    static define(spec = {}) {
        return new StateEffectType(spec.map || (v => v));
    }
    /**
    Map an array of effects through a change set.
    */
    static mapEffects(effects, mapping) {
        if (!effects.length)
            return effects;
        let result = [];
        for (let effect of effects) {
            let mapped = effect.map(mapping);
            if (mapped)
                result.push(mapped);
        }
        return result;
    }
}
/**
This effect can be used to reconfigure the root extensions of
the editor. Doing this will discard any extensions
[appended](https://codemirror.net/6/docs/ref/#state.StateEffect^appendConfig), but does not reset
the content of [reconfigured](https://codemirror.net/6/docs/ref/#state.Compartment.reconfigure)
compartments.
*/
StateEffect.reconfigure = /*@__PURE__*/StateEffect.define();
/**
Append extensions to the top-level configuration of the editor.
*/
StateEffect.appendConfig = /*@__PURE__*/StateEffect.define();
/**
Changes to the editor state are grouped into transactions.
Typically, a user action creates a single transaction, which may
contain any number of document changes, may change the selection,
or have other effects. Create a transaction by calling
[`EditorState.update`](https://codemirror.net/6/docs/ref/#state.EditorState.update), or immediately
dispatch one by calling
[`EditorView.dispatch`](https://codemirror.net/6/docs/ref/#view.EditorView.dispatch).
*/
class Transaction {
    constructor(
    /**
    The state from which the transaction starts.
    */
    startState, 
    /**
    The document changes made by this transaction.
    */
    changes, 
    /**
    The selection set by this transaction, or undefined if it
    doesn't explicitly set a selection.
    */
    selection, 
    /**
    The effects added to the transaction.
    */
    effects, 
    /**
    @internal
    */
    annotations, 
    /**
    Whether the selection should be scrolled into view after this
    transaction is dispatched.
    */
    scrollIntoView) {
        this.startState = startState;
        this.changes = changes;
        this.selection = selection;
        this.effects = effects;
        this.annotations = annotations;
        this.scrollIntoView = scrollIntoView;
        /**
        @internal
        */
        this._doc = null;
        /**
        @internal
        */
        this._state = null;
        if (selection)
            checkSelection(selection, changes.newLength);
        if (!annotations.some((a) => a.type == Transaction.time))
            this.annotations = annotations.concat(Transaction.time.of(Date.now()));
    }
    /**
    @internal
    */
    static create(startState, changes, selection, effects, annotations, scrollIntoView) {
        return new Transaction(startState, changes, selection, effects, annotations, scrollIntoView);
    }
    /**
    The new document produced by the transaction. Contrary to
    [`.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state)`.doc`, accessing this won't
    force the entire new state to be computed right away, so it is
    recommended that [transaction
    filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) use this getter
    when they need to look at the new document.
    */
    get newDoc() {
        return this._doc || (this._doc = this.changes.apply(this.startState.doc));
    }
    /**
    The new selection produced by the transaction. If
    [`this.selection`](https://codemirror.net/6/docs/ref/#state.Transaction.selection) is undefined,
    this will [map](https://codemirror.net/6/docs/ref/#state.EditorSelection.map) the start state's
    current selection through the changes made by the transaction.
    */
    get newSelection() {
        return this.selection || this.startState.selection.map(this.changes);
    }
    /**
    The new state created by the transaction. Computed on demand
    (but retained for subsequent access), so it is recommended not to
    access it in [transaction
    filters](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter) when possible.
    */
    get state() {
        if (!this._state)
            this.startState.applyTransaction(this);
        return this._state;
    }
    /**
    Get the value of the given annotation type, if any.
    */
    annotation(type) {
        for (let ann of this.annotations)
            if (ann.type == type)
                return ann.value;
        return undefined;
    }
    /**
    Indicates whether the transaction changed the document.
    */
    get docChanged() { return !this.changes.empty; }
    /**
    Indicates whether this transaction reconfigures the state
    (through a [configuration compartment](https://codemirror.net/6/docs/ref/#state.Compartment) or
    with a top-level configuration
    [effect](https://codemirror.net/6/docs/ref/#state.StateEffect^reconfigure).
    */
    get reconfigured() { return this.startState.config != this.state.config; }
    /**
    Returns true if the transaction has a [user
    event](https://codemirror.net/6/docs/ref/#state.Transaction^userEvent) annotation that is equal to
    or more specific than `event`. For example, if the transaction
    has `"select.pointer"` as user event, `"select"` and
    `"select.pointer"` will match it.
    */
    isUserEvent(event) {
        let e = this.annotation(Transaction.userEvent);
        return !!(e && (e == event || e.length > event.length && e.slice(0, event.length) == event && e[event.length] == "."));
    }
}
/**
Annotation used to store transaction timestamps. Automatically
added to every transaction, holding `Date.now()`.
*/
Transaction.time = /*@__PURE__*/Annotation.define();
/**
Annotation used to associate a transaction with a user interface
event. Holds a string identifying the event, using a
dot-separated format to support attaching more specific
information. The events used by the core libraries are:

 - `"input"` when content is entered
   - `"input.type"` for typed input
     - `"input.type.compose"` for composition
   - `"input.paste"` for pasted input
   - `"input.drop"` when adding content with drag-and-drop
   - `"input.complete"` when autocompleting
 - `"delete"` when the user deletes content
   - `"delete.selection"` when deleting the selection
   - `"delete.forward"` when deleting forward from the selection
   - `"delete.backward"` when deleting backward from the selection
   - `"delete.cut"` when cutting to the clipboard
 - `"move"` when content is moved
   - `"move.drop"` when content is moved within the editor through drag-and-drop
 - `"select"` when explicitly changing the selection
   - `"select.pointer"` when selecting with a mouse or other pointing device
 - `"undo"` and `"redo"` for history actions

Use [`isUserEvent`](https://codemirror.net/6/docs/ref/#state.Transaction.isUserEvent) to check
whether the annotation matches a given event.
*/
Transaction.userEvent = /*@__PURE__*/Annotation.define();
/**
Annotation indicating whether a transaction should be added to
the undo history or not.
*/
Transaction.addToHistory = /*@__PURE__*/Annotation.define();
/**
Annotation indicating (when present and true) that a transaction
represents a change made by some other actor, not the user. This
is used, for example, to tag other people's changes in
collaborative editing.
*/
Transaction.remote = /*@__PURE__*/Annotation.define();
function joinRanges(a, b) {
    let result = [];
    for (let iA = 0, iB = 0;;) {
        let from, to;
        if (iA < a.length && (iB == b.length || b[iB] >= a[iA])) {
            from = a[iA++];
            to = a[iA++];
        }
        else if (iB < b.length) {
            from = b[iB++];
            to = b[iB++];
        }
        else
            return result;
        if (!result.length || result[result.length - 1] < from)
            result.push(from, to);
        else if (result[result.length - 1] < to)
            result[result.length - 1] = to;
    }
}
function mergeTransaction(a, b, sequential) {
    var _a;
    let mapForA, mapForB, changes;
    if (sequential) {
        mapForA = b.changes;
        mapForB = ChangeSet.empty(b.changes.length);
        changes = a.changes.compose(b.changes);
    }
    else {
        mapForA = b.changes.map(a.changes);
        mapForB = a.changes.mapDesc(b.changes, true);
        changes = a.changes.compose(mapForA);
    }
    return {
        changes,
        selection: b.selection ? b.selection.map(mapForB) : (_a = a.selection) === null || _a === void 0 ? void 0 : _a.map(mapForA),
        effects: StateEffect.mapEffects(a.effects, mapForA).concat(StateEffect.mapEffects(b.effects, mapForB)),
        annotations: a.annotations.length ? a.annotations.concat(b.annotations) : b.annotations,
        scrollIntoView: a.scrollIntoView || b.scrollIntoView
    };
}
function resolveTransactionInner(state, spec, docSize) {
    let sel = spec.selection, annotations = asArray(spec.annotations);
    if (spec.userEvent)
        annotations = annotations.concat(Transaction.userEvent.of(spec.userEvent));
    return {
        changes: spec.changes instanceof ChangeSet ? spec.changes
            : ChangeSet.of(spec.changes || [], docSize, state.facet(lineSeparator)),
        selection: sel && (sel instanceof EditorSelection ? sel : EditorSelection.single(sel.anchor, sel.head)),
        effects: asArray(spec.effects),
        annotations,
        scrollIntoView: !!spec.scrollIntoView
    };
}
function resolveTransaction(state, specs, filter) {
    let s = resolveTransactionInner(state, specs.length ? specs[0] : {}, state.doc.length);
    if (specs.length && specs[0].filter === false)
        filter = false;
    for (let i = 1; i < specs.length; i++) {
        if (specs[i].filter === false)
            filter = false;
        let seq = !!specs[i].sequential;
        s = mergeTransaction(s, resolveTransactionInner(state, specs[i], seq ? s.changes.newLength : state.doc.length), seq);
    }
    let tr = Transaction.create(state, s.changes, s.selection, s.effects, s.annotations, s.scrollIntoView);
    return extendTransaction(filter ? filterTransaction(tr) : tr);
}
// Finish a transaction by applying filters if necessary.
function filterTransaction(tr) {
    let state = tr.startState;
    // Change filters
    let result = true;
    for (let filter of state.facet(changeFilter)) {
        let value = filter(tr);
        if (value === false) {
            result = false;
            break;
        }
        if (Array.isArray(value))
            result = result === true ? value : joinRanges(result, value);
    }
    if (result !== true) {
        let changes, back;
        if (result === false) {
            back = tr.changes.invertedDesc;
            changes = ChangeSet.empty(state.doc.length);
        }
        else {
            let filtered = tr.changes.filter(result);
            changes = filtered.changes;
            back = filtered.filtered.mapDesc(filtered.changes).invertedDesc;
        }
        tr = Transaction.create(state, changes, tr.selection && tr.selection.map(back), StateEffect.mapEffects(tr.effects, back), tr.annotations, tr.scrollIntoView);
    }
    // Transaction filters
    let filters = state.facet(transactionFilter);
    for (let i = filters.length - 1; i >= 0; i--) {
        let filtered = filters[i](tr);
        if (filtered instanceof Transaction)
            tr = filtered;
        else if (Array.isArray(filtered) && filtered.length == 1 && filtered[0] instanceof Transaction)
            tr = filtered[0];
        else
            tr = resolveTransaction(state, asArray(filtered), false);
    }
    return tr;
}
function extendTransaction(tr) {
    let state = tr.startState, extenders = state.facet(transactionExtender), spec = tr;
    for (let i = extenders.length - 1; i >= 0; i--) {
        let extension = extenders[i](tr);
        if (extension && Object.keys(extension).length)
            spec = mergeTransaction(spec, resolveTransactionInner(state, extension, tr.changes.newLength), true);
    }
    return spec == tr ? tr : Transaction.create(state, tr.changes, tr.selection, spec.effects, spec.annotations, spec.scrollIntoView);
}
const none = [];
function asArray(value) {
    return value == null ? none : Array.isArray(value) ? value : [value];
}

/**
The categories produced by a [character
categorizer](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer). These are used
do things like selecting by word.
*/
var CharCategory = /*@__PURE__*/(function (CharCategory) {
    /**
    Word characters.
    */
    CharCategory[CharCategory["Word"] = 0] = "Word";
    /**
    Whitespace.
    */
    CharCategory[CharCategory["Space"] = 1] = "Space";
    /**
    Anything else.
    */
    CharCategory[CharCategory["Other"] = 2] = "Other";
return CharCategory})(CharCategory || (CharCategory = {}));
const nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let wordChar;
try {
    wordChar = /*@__PURE__*/new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
}
catch (_) { }
function hasWordChar(str) {
    if (wordChar)
        return wordChar.test(str);
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (/\w/.test(ch) || ch > "\x80" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch)))
            return true;
    }
    return false;
}
function makeCategorizer(wordChars) {
    return (char) => {
        if (!/\S/.test(char))
            return CharCategory.Space;
        if (hasWordChar(char))
            return CharCategory.Word;
        for (let i = 0; i < wordChars.length; i++)
            if (char.indexOf(wordChars[i]) > -1)
                return CharCategory.Word;
        return CharCategory.Other;
    };
}

/**
The editor state class is a persistent (immutable) data structure.
To update a state, you [create](https://codemirror.net/6/docs/ref/#state.EditorState.update) a
[transaction](https://codemirror.net/6/docs/ref/#state.Transaction), which produces a _new_ state
instance, without modifying the original object.

As such, _never_ mutate properties of a state directly. That'll
just break things.
*/
class EditorState {
    constructor(
    /**
    @internal
    */
    config, 
    /**
    The current document.
    */
    doc, 
    /**
    The current selection.
    */
    selection, 
    /**
    @internal
    */
    values, computeSlot, tr) {
        this.config = config;
        this.doc = doc;
        this.selection = selection;
        this.values = values;
        this.status = config.statusTemplate.slice();
        this.computeSlot = computeSlot;
        // Fill in the computed state immediately, so that further queries
        // for it made during the update return this state
        if (tr)
            tr._state = this;
        for (let i = 0; i < this.config.dynamicSlots.length; i++)
            ensureAddr(this, i << 1);
        this.computeSlot = null;
    }
    field(field, require = true) {
        let addr = this.config.address[field.id];
        if (addr == null) {
            if (require)
                throw new RangeError("Field is not present in this state");
            return undefined;
        }
        ensureAddr(this, addr);
        return getAddr(this, addr);
    }
    /**
    Create a [transaction](https://codemirror.net/6/docs/ref/#state.Transaction) that updates this
    state. Any number of [transaction specs](https://codemirror.net/6/docs/ref/#state.TransactionSpec)
    can be passed. Unless
    [`sequential`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.sequential) is set, the
    [changes](https://codemirror.net/6/docs/ref/#state.TransactionSpec.changes) (if any) of each spec
    are assumed to start in the _current_ document (not the document
    produced by previous specs), and its
    [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection) and
    [effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) are assumed to refer
    to the document created by its _own_ changes. The resulting
    transaction contains the combined effect of all the different
    specs. For [selection](https://codemirror.net/6/docs/ref/#state.TransactionSpec.selection), later
    specs take precedence over earlier ones.
    */
    update(...specs) {
        return resolveTransaction(this, specs, true);
    }
    /**
    @internal
    */
    applyTransaction(tr) {
        let conf = this.config, { base, compartments } = conf;
        for (let effect of tr.effects) {
            if (effect.is(Compartment.reconfigure)) {
                if (conf) {
                    compartments = new Map;
                    conf.compartments.forEach((val, key) => compartments.set(key, val));
                    conf = null;
                }
                compartments.set(effect.value.compartment, effect.value.extension);
            }
            else if (effect.is(StateEffect.reconfigure)) {
                conf = null;
                base = effect.value;
            }
            else if (effect.is(StateEffect.appendConfig)) {
                conf = null;
                base = asArray(base).concat(effect.value);
            }
        }
        let startValues;
        if (!conf) {
            conf = Configuration.resolve(base, compartments, this);
            let intermediateState = new EditorState(conf, this.doc, this.selection, conf.dynamicSlots.map(() => null), (state, slot) => slot.reconfigure(state, this), null);
            startValues = intermediateState.values;
        }
        else {
            startValues = tr.startState.values.slice();
        }
        let selection = tr.startState.facet(allowMultipleSelections) ? tr.newSelection : tr.newSelection.asSingle();
        new EditorState(conf, tr.newDoc, selection, startValues, (state, slot) => slot.update(state, tr), tr);
    }
    /**
    Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
    replaces every selection range with the given content.
    */
    replaceSelection(text) {
        if (typeof text == "string")
            text = this.toText(text);
        return this.changeByRange(range => ({ changes: { from: range.from, to: range.to, insert: text },
            range: EditorSelection.cursor(range.from + text.length) }));
    }
    /**
    Create a set of changes and a new selection by running the given
    function for each range in the active selection. The function
    can return an optional set of changes (in the coordinate space
    of the start document), plus an updated range (in the coordinate
    space of the document produced by the call's own changes). This
    method will merge all the changes and ranges into a single
    changeset and selection, and return it as a [transaction
    spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec), which can be passed to
    [`update`](https://codemirror.net/6/docs/ref/#state.EditorState.update).
    */
    changeByRange(f) {
        let sel = this.selection;
        let result1 = f(sel.ranges[0]);
        let changes = this.changes(result1.changes), ranges = [result1.range];
        let effects = asArray(result1.effects);
        for (let i = 1; i < sel.ranges.length; i++) {
            let result = f(sel.ranges[i]);
            let newChanges = this.changes(result.changes), newMapped = newChanges.map(changes);
            for (let j = 0; j < i; j++)
                ranges[j] = ranges[j].map(newMapped);
            let mapBy = changes.mapDesc(newChanges, true);
            ranges.push(result.range.map(mapBy));
            changes = changes.compose(newMapped);
            effects = StateEffect.mapEffects(effects, newMapped).concat(StateEffect.mapEffects(asArray(result.effects), mapBy));
        }
        return {
            changes,
            selection: EditorSelection.create(ranges, sel.mainIndex),
            effects
        };
    }
    /**
    Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
    description, taking the state's document length and line
    separator into account.
    */
    changes(spec = []) {
        if (spec instanceof ChangeSet)
            return spec;
        return ChangeSet.of(spec, this.doc.length, this.facet(EditorState.lineSeparator));
    }
    /**
    Using the state's [line
    separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
    [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
    */
    toText(string) {
        return Text.of(string.split(this.facet(EditorState.lineSeparator) || DefaultSplit));
    }
    /**
    Return the given range of the document as a string.
    */
    sliceDoc(from = 0, to = this.doc.length) {
        return this.doc.sliceString(from, to, this.lineBreak);
    }
    /**
    Get the value of a state [facet](https://codemirror.net/6/docs/ref/#state.Facet).
    */
    facet(facet) {
        let addr = this.config.address[facet.id];
        if (addr == null)
            return facet.default;
        ensureAddr(this, addr);
        return getAddr(this, addr);
    }
    /**
    Convert this state to a JSON-serializable object. When custom
    fields should be serialized, you can pass them in as an object
    mapping property names (in the resulting object, which should
    not use `doc` or `selection`) to fields.
    */
    toJSON(fields) {
        let result = {
            doc: this.sliceDoc(),
            selection: this.selection.toJSON()
        };
        if (fields)
            for (let prop in fields) {
                let value = fields[prop];
                if (value instanceof StateField && this.config.address[value.id] != null)
                    result[prop] = value.spec.toJSON(this.field(fields[prop]), this);
            }
        return result;
    }
    /**
    Deserialize a state from its JSON representation. When custom
    fields should be deserialized, pass the same object you passed
    to [`toJSON`](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) when serializing as
    third argument.
    */
    static fromJSON(json, config = {}, fields) {
        if (!json || typeof json.doc != "string")
            throw new RangeError("Invalid JSON representation for EditorState");
        let fieldInit = [];
        if (fields)
            for (let prop in fields) {
                if (Object.prototype.hasOwnProperty.call(json, prop)) {
                    let field = fields[prop], value = json[prop];
                    fieldInit.push(field.init(state => field.spec.fromJSON(value, state)));
                }
            }
        return EditorState.create({
            doc: json.doc,
            selection: EditorSelection.fromJSON(json.selection),
            extensions: config.extensions ? fieldInit.concat([config.extensions]) : fieldInit
        });
    }
    /**
    Create a new state. You'll usually only need this when
    initializing an editor—updated states are created by applying
    transactions.
    */
    static create(config = {}) {
        let configuration = Configuration.resolve(config.extensions || [], new Map);
        let doc = config.doc instanceof Text ? config.doc
            : Text.of((config.doc || "").split(configuration.staticFacet(EditorState.lineSeparator) || DefaultSplit));
        let selection = !config.selection ? EditorSelection.single(0)
            : config.selection instanceof EditorSelection ? config.selection
                : EditorSelection.single(config.selection.anchor, config.selection.head);
        checkSelection(selection, doc.length);
        if (!configuration.staticFacet(allowMultipleSelections))
            selection = selection.asSingle();
        return new EditorState(configuration, doc, selection, configuration.dynamicSlots.map(() => null), (state, slot) => slot.create(state), null);
    }
    /**
    The size (in columns) of a tab in the document, determined by
    the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
    */
    get tabSize() { return this.facet(EditorState.tabSize); }
    /**
    Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
    string for this state.
    */
    get lineBreak() { return this.facet(EditorState.lineSeparator) || "\n"; }
    /**
    Returns true when the editor is
    [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
    */
    get readOnly() { return this.facet(readOnly); }
    /**
    Look up a translation for the given phrase (via the
    [`phrases`](https://codemirror.net/6/docs/ref/#state.EditorState^phrases) facet), or return the
    original string if no translation is found.
    
    If additional arguments are passed, they will be inserted in
    place of markers like `$1` (for the first value) and `$2`, etc.
    A single `$` is equivalent to `$1`, and `$$` will produce a
    literal dollar sign.
    */
    phrase(phrase, ...insert) {
        for (let map of this.facet(EditorState.phrases))
            if (Object.prototype.hasOwnProperty.call(map, phrase)) {
                phrase = map[phrase];
                break;
            }
        if (insert.length)
            phrase = phrase.replace(/\$(\$|\d*)/g, (m, i) => {
                if (i == "$")
                    return "$";
                let n = +(i || 1);
                return !n || n > insert.length ? m : insert[n - 1];
            });
        return phrase;
    }
    /**
    Find the values for a given language data field, provided by the
    the [`languageData`](https://codemirror.net/6/docs/ref/#state.EditorState^languageData) facet.
    
    Examples of language data fields are...
    
    - [`"commentTokens"`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) for specifying
      comment syntax.
    - [`"autocomplete"`](https://codemirror.net/6/docs/ref/#autocomplete.autocompletion^config.override)
      for providing language-specific completion sources.
    - [`"wordChars"`](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) for adding
      characters that should be considered part of words in this
      language.
    - [`"closeBrackets"`](https://codemirror.net/6/docs/ref/#autocomplete.CloseBracketConfig) controls
      bracket closing behavior.
    */
    languageDataAt(name, pos, side = -1) {
        let values = [];
        for (let provider of this.facet(languageData)) {
            for (let result of provider(this, pos, side)) {
                if (Object.prototype.hasOwnProperty.call(result, name))
                    values.push(result[name]);
            }
        }
        return values;
    }
    /**
    Return a function that can categorize strings (expected to
    represent a single [grapheme cluster](https://codemirror.net/6/docs/ref/#state.findClusterBreak))
    into one of:
    
     - Word (contains an alphanumeric character or a character
       explicitly listed in the local language's `"wordChars"`
       language data, which should be a string)
     - Space (contains only whitespace)
     - Other (anything else)
    */
    charCategorizer(at) {
        return makeCategorizer(this.languageDataAt("wordChars", at).join(""));
    }
    /**
    Find the word at the given position, meaning the range
    containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
    around it. If no word characters are adjacent to the position,
    this returns null.
    */
    wordAt(pos) {
        let { text, from, length } = this.doc.lineAt(pos);
        let cat = this.charCategorizer(pos);
        let start = pos - from, end = pos - from;
        while (start > 0) {
            let prev = findClusterBreak(text, start, false);
            if (cat(text.slice(prev, start)) != CharCategory.Word)
                break;
            start = prev;
        }
        while (end < length) {
            let next = findClusterBreak(text, end);
            if (cat(text.slice(end, next)) != CharCategory.Word)
                break;
            end = next;
        }
        return start == end ? null : EditorSelection.range(start + from, end + from);
    }
}
/**
A facet that, when enabled, causes the editor to allow multiple
ranges to be selected. Be careful though, because by default the
editor relies on the native DOM selection, which cannot handle
multiple selections. An extension like
[`drawSelection`](https://codemirror.net/6/docs/ref/#view.drawSelection) can be used to make
secondary selections visible to the user.
*/
EditorState.allowMultipleSelections = allowMultipleSelections;
/**
Configures the tab size to use in this state. The first
(highest-precedence) value of the facet is used. If no value is
given, this defaults to 4.
*/
EditorState.tabSize = /*@__PURE__*/Facet.define({
    combine: values => values.length ? values[0] : 4
});
/**
The line separator to use. By default, any of `"\n"`, `"\r\n"`
and `"\r"` is treated as a separator when splitting lines, and
lines are joined with `"\n"`.

When you configure a value here, only that precise separator
will be used, allowing you to round-trip documents through the
editor without normalizing line separators.
*/
EditorState.lineSeparator = lineSeparator;
/**
This facet controls the value of the
[`readOnly`](https://codemirror.net/6/docs/ref/#state.EditorState.readOnly) getter, which is
consulted by commands and extensions that implement editing
functionality to determine whether they should apply. It
defaults to false, but when its highest-precedence value is
`true`, such functionality disables itself.

Not to be confused with
[`EditorView.editable`](https://codemirror.net/6/docs/ref/#view.EditorView^editable), which
controls whether the editor's DOM is set to be editable (and
thus focusable).
*/
EditorState.readOnly = readOnly;
/**
Registers translation phrases. The
[`phrase`](https://codemirror.net/6/docs/ref/#state.EditorState.phrase) method will look through
all objects registered with this facet to find translations for
its argument.
*/
EditorState.phrases = /*@__PURE__*/Facet.define({
    compare(a, b) {
        let kA = Object.keys(a), kB = Object.keys(b);
        return kA.length == kB.length && kA.every(k => a[k] == b[k]);
    }
});
/**
A facet used to register [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt) providers.
*/
EditorState.languageData = languageData;
/**
Facet used to register change filters, which are called for each
transaction (unless explicitly
[disabled](https://codemirror.net/6/docs/ref/#state.TransactionSpec.filter)), and can suppress
part of the transaction's changes.

Such a function can return `true` to indicate that it doesn't
want to do anything, `false` to completely stop the changes in
the transaction, or a set of ranges in which changes should be
suppressed. Such ranges are represented as an array of numbers,
with each pair of two numbers indicating the start and end of a
range. So for example `[10, 20, 100, 110]` suppresses changes
between 10 and 20, and between 100 and 110.
*/
EditorState.changeFilter = changeFilter;
/**
Facet used to register a hook that gets a chance to update or
replace transaction specs before they are applied. This will
only be applied for transactions that don't have
[`filter`](https://codemirror.net/6/docs/ref/#state.TransactionSpec.filter) set to `false`. You
can either return a single transaction spec (possibly the input
transaction), or an array of specs (which will be combined in
the same way as the arguments to
[`EditorState.update`](https://codemirror.net/6/docs/ref/#state.EditorState.update)).

When possible, it is recommended to avoid accessing
[`Transaction.state`](https://codemirror.net/6/docs/ref/#state.Transaction.state) in a filter,
since it will force creation of a state that will then be
discarded again, if the transaction is actually filtered.

(This functionality should be used with care. Indiscriminately
modifying transaction is likely to break something or degrade
the user experience.)
*/
EditorState.transactionFilter = transactionFilter;
/**
This is a more limited form of
[`transactionFilter`](https://codemirror.net/6/docs/ref/#state.EditorState^transactionFilter),
which can only add
[annotations](https://codemirror.net/6/docs/ref/#state.TransactionSpec.annotations) and
[effects](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects). _But_, this type
of filter runs even if the transaction has disabled regular
[filtering](https://codemirror.net/6/docs/ref/#state.TransactionSpec.filter), making it suitable
for effects that don't need to touch the changes or selection,
but do want to process every transaction.

Extenders run _after_ filters, when both are present.
*/
EditorState.transactionExtender = transactionExtender;
Compartment.reconfigure = /*@__PURE__*/StateEffect.define();

/**
Utility function for combining behaviors to fill in a config
object from an array of provided configs. `defaults` should hold
default values for all optional fields in `Config`.

The function will, by default, error
when a field gets two values that aren't `===`-equal, but you can
provide combine functions per field to do something else.
*/
function combineConfig(configs, defaults, // Should hold only the optional properties of Config, but I haven't managed to express that
combine = {}) {
    let result = {};
    for (let config of configs)
        for (let key of Object.keys(config)) {
            let value = config[key], current = result[key];
            if (current === undefined)
                result[key] = value;
            else if (current === value || value === undefined) ; // No conflict
            else if (Object.hasOwnProperty.call(combine, key))
                result[key] = combine[key](current, value);
            else
                throw new Error("Config merge conflict for field " + key);
        }
    for (let key in defaults)
        if (result[key] === undefined)
            result[key] = defaults[key];
    return result;
}

/**
Each range is associated with a value, which must inherit from
this class.
*/
class RangeValue {
    /**
    Compare this value with another value. Used when comparing
    rangesets. The default implementation compares by identity.
    Unless you are only creating a fixed number of unique instances
    of your value type, it is a good idea to implement this
    properly.
    */
    eq(other) { return this == other; }
    /**
    Create a [range](https://codemirror.net/6/docs/ref/#state.Range) with this value.
    */
    range(from, to = from) { return Range.create(from, to, this); }
}
RangeValue.prototype.startSide = RangeValue.prototype.endSide = 0;
RangeValue.prototype.point = false;
RangeValue.prototype.mapMode = MapMode.TrackDel;
/**
A range associates a value with a range of positions.
*/
class Range {
    constructor(
    /**
    The range's start position.
    */
    from, 
    /**
    Its end position.
    */
    to, 
    /**
    The value associated with this range.
    */
    value) {
        this.from = from;
        this.to = to;
        this.value = value;
    }
    /**
    @internal
    */
    static create(from, to, value) {
        return new Range(from, to, value);
    }
}
function cmpRange(a, b) {
    return a.from - b.from || a.value.startSide - b.value.startSide;
}
class Chunk {
    constructor(from, to, value, 
    // Chunks are marked with the largest point that occurs
    // in them (or -1 for no points), so that scans that are
    // only interested in points (such as the
    // heightmap-related logic) can skip range-only chunks.
    maxPoint) {
        this.from = from;
        this.to = to;
        this.value = value;
        this.maxPoint = maxPoint;
    }
    get length() { return this.to[this.to.length - 1]; }
    // Find the index of the given position and side. Use the ranges'
    // `from` pos when `end == false`, `to` when `end == true`.
    findIndex(pos, side, end, startAt = 0) {
        let arr = end ? this.to : this.from;
        for (let lo = startAt, hi = arr.length;;) {
            if (lo == hi)
                return lo;
            let mid = (lo + hi) >> 1;
            let diff = arr[mid] - pos || (end ? this.value[mid].endSide : this.value[mid].startSide) - side;
            if (mid == lo)
                return diff >= 0 ? lo : hi;
            if (diff >= 0)
                hi = mid;
            else
                lo = mid + 1;
        }
    }
    between(offset, from, to, f) {
        for (let i = this.findIndex(from, -1000000000 /* C.Far */, true), e = this.findIndex(to, 1000000000 /* C.Far */, false, i); i < e; i++)
            if (f(this.from[i] + offset, this.to[i] + offset, this.value[i]) === false)
                return false;
    }
    map(offset, changes) {
        let value = [], from = [], to = [], newPos = -1, maxPoint = -1;
        for (let i = 0; i < this.value.length; i++) {
            let val = this.value[i], curFrom = this.from[i] + offset, curTo = this.to[i] + offset, newFrom, newTo;
            if (curFrom == curTo) {
                let mapped = changes.mapPos(curFrom, val.startSide, val.mapMode);
                if (mapped == null)
                    continue;
                newFrom = newTo = mapped;
                if (val.startSide != val.endSide) {
                    newTo = changes.mapPos(curFrom, val.endSide);
                    if (newTo < newFrom)
                        continue;
                }
            }
            else {
                newFrom = changes.mapPos(curFrom, val.startSide);
                newTo = changes.mapPos(curTo, val.endSide);
                if (newFrom > newTo || newFrom == newTo && val.startSide > 0 && val.endSide <= 0)
                    continue;
            }
            if ((newTo - newFrom || val.endSide - val.startSide) < 0)
                continue;
            if (newPos < 0)
                newPos = newFrom;
            if (val.point)
                maxPoint = Math.max(maxPoint, newTo - newFrom);
            value.push(val);
            from.push(newFrom - newPos);
            to.push(newTo - newPos);
        }
        return { mapped: value.length ? new Chunk(from, to, value, maxPoint) : null, pos: newPos };
    }
}
/**
A range set stores a collection of [ranges](https://codemirror.net/6/docs/ref/#state.Range) in a
way that makes them efficient to [map](https://codemirror.net/6/docs/ref/#state.RangeSet.map) and
[update](https://codemirror.net/6/docs/ref/#state.RangeSet.update). This is an immutable data
structure.
*/
class RangeSet {
    constructor(
    /**
    @internal
    */
    chunkPos, 
    /**
    @internal
    */
    chunk, 
    /**
    @internal
    */
    nextLayer, 
    /**
    @internal
    */
    maxPoint) {
        this.chunkPos = chunkPos;
        this.chunk = chunk;
        this.nextLayer = nextLayer;
        this.maxPoint = maxPoint;
    }
    /**
    @internal
    */
    static create(chunkPos, chunk, nextLayer, maxPoint) {
        return new RangeSet(chunkPos, chunk, nextLayer, maxPoint);
    }
    /**
    @internal
    */
    get length() {
        let last = this.chunk.length - 1;
        return last < 0 ? 0 : Math.max(this.chunkEnd(last), this.nextLayer.length);
    }
    /**
    The number of ranges in the set.
    */
    get size() {
        if (this.isEmpty)
            return 0;
        let size = this.nextLayer.size;
        for (let chunk of this.chunk)
            size += chunk.value.length;
        return size;
    }
    /**
    @internal
    */
    chunkEnd(index) {
        return this.chunkPos[index] + this.chunk[index].length;
    }
    /**
    Update the range set, optionally adding new ranges or filtering
    out existing ones.
    
    (Note: The type parameter is just there as a kludge to work
    around TypeScript variance issues that prevented `RangeSet<X>`
    from being a subtype of `RangeSet<Y>` when `X` is a subtype of
    `Y`.)
    */
    update(updateSpec) {
        let { add = [], sort = false, filterFrom = 0, filterTo = this.length } = updateSpec;
        let filter = updateSpec.filter;
        if (add.length == 0 && !filter)
            return this;
        if (sort)
            add = add.slice().sort(cmpRange);
        if (this.isEmpty)
            return add.length ? RangeSet.of(add) : this;
        let cur = new LayerCursor(this, null, -1).goto(0), i = 0, spill = [];
        let builder = new RangeSetBuilder();
        while (cur.value || i < add.length) {
            if (i < add.length && (cur.from - add[i].from || cur.startSide - add[i].value.startSide) >= 0) {
                let range = add[i++];
                if (!builder.addInner(range.from, range.to, range.value))
                    spill.push(range);
            }
            else if (cur.rangeIndex == 1 && cur.chunkIndex < this.chunk.length &&
                (i == add.length || this.chunkEnd(cur.chunkIndex) < add[i].from) &&
                (!filter || filterFrom > this.chunkEnd(cur.chunkIndex) || filterTo < this.chunkPos[cur.chunkIndex]) &&
                builder.addChunk(this.chunkPos[cur.chunkIndex], this.chunk[cur.chunkIndex])) {
                cur.nextChunk();
            }
            else {
                if (!filter || filterFrom > cur.to || filterTo < cur.from || filter(cur.from, cur.to, cur.value)) {
                    if (!builder.addInner(cur.from, cur.to, cur.value))
                        spill.push(Range.create(cur.from, cur.to, cur.value));
                }
                cur.next();
            }
        }
        return builder.finishInner(this.nextLayer.isEmpty && !spill.length ? RangeSet.empty
            : this.nextLayer.update({ add: spill, filter, filterFrom, filterTo }));
    }
    /**
    Map this range set through a set of changes, return the new set.
    */
    map(changes) {
        if (changes.empty || this.isEmpty)
            return this;
        let chunks = [], chunkPos = [], maxPoint = -1;
        for (let i = 0; i < this.chunk.length; i++) {
            let start = this.chunkPos[i], chunk = this.chunk[i];
            let touch = changes.touchesRange(start, start + chunk.length);
            if (touch === false) {
                maxPoint = Math.max(maxPoint, chunk.maxPoint);
                chunks.push(chunk);
                chunkPos.push(changes.mapPos(start));
            }
            else if (touch === true) {
                let { mapped, pos } = chunk.map(start, changes);
                if (mapped) {
                    maxPoint = Math.max(maxPoint, mapped.maxPoint);
                    chunks.push(mapped);
                    chunkPos.push(pos);
                }
            }
        }
        let next = this.nextLayer.map(changes);
        return chunks.length == 0 ? next : new RangeSet(chunkPos, chunks, next || RangeSet.empty, maxPoint);
    }
    /**
    Iterate over the ranges that touch the region `from` to `to`,
    calling `f` for each. There is no guarantee that the ranges will
    be reported in any specific order. When the callback returns
    `false`, iteration stops.
    */
    between(from, to, f) {
        if (this.isEmpty)
            return;
        for (let i = 0; i < this.chunk.length; i++) {
            let start = this.chunkPos[i], chunk = this.chunk[i];
            if (to >= start && from <= start + chunk.length &&
                chunk.between(start, from - start, to - start, f) === false)
                return;
        }
        this.nextLayer.between(from, to, f);
    }
    /**
    Iterate over the ranges in this set, in order, including all
    ranges that end at or after `from`.
    */
    iter(from = 0) {
        return HeapCursor.from([this]).goto(from);
    }
    /**
    @internal
    */
    get isEmpty() { return this.nextLayer == this; }
    /**
    Iterate over the ranges in a collection of sets, in order,
    starting from `from`.
    */
    static iter(sets, from = 0) {
        return HeapCursor.from(sets).goto(from);
    }
    /**
    Iterate over two groups of sets, calling methods on `comparator`
    to notify it of possible differences.
    */
    static compare(oldSets, newSets, 
    /**
    This indicates how the underlying data changed between these
    ranges, and is needed to synchronize the iteration.
    */
    textDiff, comparator, 
    /**
    Can be used to ignore all non-point ranges, and points below
    the given size. When -1, all ranges are compared.
    */
    minPointSize = -1) {
        let a = oldSets.filter(set => set.maxPoint > 0 || !set.isEmpty && set.maxPoint >= minPointSize);
        let b = newSets.filter(set => set.maxPoint > 0 || !set.isEmpty && set.maxPoint >= minPointSize);
        let sharedChunks = findSharedChunks(a, b, textDiff);
        let sideA = new SpanCursor(a, sharedChunks, minPointSize);
        let sideB = new SpanCursor(b, sharedChunks, minPointSize);
        textDiff.iterGaps((fromA, fromB, length) => compare(sideA, fromA, sideB, fromB, length, comparator));
        if (textDiff.empty && textDiff.length == 0)
            compare(sideA, 0, sideB, 0, 0, comparator);
    }
    /**
    Compare the contents of two groups of range sets, returning true
    if they are equivalent in the given range.
    */
    static eq(oldSets, newSets, from = 0, to) {
        if (to == null)
            to = 1000000000 /* C.Far */ - 1;
        let a = oldSets.filter(set => !set.isEmpty && newSets.indexOf(set) < 0);
        let b = newSets.filter(set => !set.isEmpty && oldSets.indexOf(set) < 0);
        if (a.length != b.length)
            return false;
        if (!a.length)
            return true;
        let sharedChunks = findSharedChunks(a, b);
        let sideA = new SpanCursor(a, sharedChunks, 0).goto(from), sideB = new SpanCursor(b, sharedChunks, 0).goto(from);
        for (;;) {
            if (sideA.to != sideB.to ||
                !sameValues(sideA.active, sideB.active) ||
                sideA.point && (!sideB.point || !sideA.point.eq(sideB.point)))
                return false;
            if (sideA.to > to)
                return true;
            sideA.next();
            sideB.next();
        }
    }
    /**
    Iterate over a group of range sets at the same time, notifying
    the iterator about the ranges covering every given piece of
    content. Returns the open count (see
    [`SpanIterator.span`](https://codemirror.net/6/docs/ref/#state.SpanIterator.span)) at the end
    of the iteration.
    */
    static spans(sets, from, to, iterator, 
    /**
    When given and greater than -1, only points of at least this
    size are taken into account.
    */
    minPointSize = -1) {
        let cursor = new SpanCursor(sets, null, minPointSize).goto(from), pos = from;
        let openRanges = cursor.openStart;
        for (;;) {
            let curTo = Math.min(cursor.to, to);
            if (cursor.point) {
                let active = cursor.activeForPoint(cursor.to);
                let openCount = cursor.pointFrom < from ? active.length + 1
                    : cursor.point.startSide < 0 ? active.length
                        : Math.min(active.length, openRanges);
                iterator.point(pos, curTo, cursor.point, active, openCount, cursor.pointRank);
                openRanges = Math.min(cursor.openEnd(curTo), active.length);
            }
            else if (curTo > pos) {
                iterator.span(pos, curTo, cursor.active, openRanges);
                openRanges = cursor.openEnd(curTo);
            }
            if (cursor.to > to)
                return openRanges + (cursor.point && cursor.to > to ? 1 : 0);
            pos = cursor.to;
            cursor.next();
        }
    }
    /**
    Create a range set for the given range or array of ranges. By
    default, this expects the ranges to be _sorted_ (by start
    position and, if two start at the same position,
    `value.startSide`). You can pass `true` as second argument to
    cause the method to sort them.
    */
    static of(ranges, sort = false) {
        let build = new RangeSetBuilder();
        for (let range of ranges instanceof Range ? [ranges] : sort ? lazySort(ranges) : ranges)
            build.add(range.from, range.to, range.value);
        return build.finish();
    }
    /**
    Join an array of range sets into a single set.
    */
    static join(sets) {
        if (!sets.length)
            return RangeSet.empty;
        let result = sets[sets.length - 1];
        for (let i = sets.length - 2; i >= 0; i--) {
            for (let layer = sets[i]; layer != RangeSet.empty; layer = layer.nextLayer)
                result = new RangeSet(layer.chunkPos, layer.chunk, result, Math.max(layer.maxPoint, result.maxPoint));
        }
        return result;
    }
}
/**
The empty set of ranges.
*/
RangeSet.empty = /*@__PURE__*/new RangeSet([], [], null, -1);
function lazySort(ranges) {
    if (ranges.length > 1)
        for (let prev = ranges[0], i = 1; i < ranges.length; i++) {
            let cur = ranges[i];
            if (cmpRange(prev, cur) > 0)
                return ranges.slice().sort(cmpRange);
            prev = cur;
        }
    return ranges;
}
RangeSet.empty.nextLayer = RangeSet.empty;
/**
A range set builder is a data structure that helps build up a
[range set](https://codemirror.net/6/docs/ref/#state.RangeSet) directly, without first allocating
an array of [`Range`](https://codemirror.net/6/docs/ref/#state.Range) objects.
*/
class RangeSetBuilder {
    finishChunk(newArrays) {
        this.chunks.push(new Chunk(this.from, this.to, this.value, this.maxPoint));
        this.chunkPos.push(this.chunkStart);
        this.chunkStart = -1;
        this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint);
        this.maxPoint = -1;
        if (newArrays) {
            this.from = [];
            this.to = [];
            this.value = [];
        }
    }
    /**
    Create an empty builder.
    */
    constructor() {
        this.chunks = [];
        this.chunkPos = [];
        this.chunkStart = -1;
        this.last = null;
        this.lastFrom = -1000000000 /* C.Far */;
        this.lastTo = -1000000000 /* C.Far */;
        this.from = [];
        this.to = [];
        this.value = [];
        this.maxPoint = -1;
        this.setMaxPoint = -1;
        this.nextLayer = null;
    }
    /**
    Add a range. Ranges should be added in sorted (by `from` and
    `value.startSide`) order.
    */
    add(from, to, value) {
        if (!this.addInner(from, to, value))
            (this.nextLayer || (this.nextLayer = new RangeSetBuilder)).add(from, to, value);
    }
    /**
    @internal
    */
    addInner(from, to, value) {
        let diff = from - this.lastTo || value.startSide - this.last.endSide;
        if (diff <= 0 && (from - this.lastFrom || value.startSide - this.last.startSide) < 0)
            throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        if (diff < 0)
            return false;
        if (this.from.length == 250 /* C.ChunkSize */)
            this.finishChunk(true);
        if (this.chunkStart < 0)
            this.chunkStart = from;
        this.from.push(from - this.chunkStart);
        this.to.push(to - this.chunkStart);
        this.last = value;
        this.lastFrom = from;
        this.lastTo = to;
        this.value.push(value);
        if (value.point)
            this.maxPoint = Math.max(this.maxPoint, to - from);
        return true;
    }
    /**
    @internal
    */
    addChunk(from, chunk) {
        if ((from - this.lastTo || chunk.value[0].startSide - this.last.endSide) < 0)
            return false;
        if (this.from.length)
            this.finishChunk(true);
        this.setMaxPoint = Math.max(this.setMaxPoint, chunk.maxPoint);
        this.chunks.push(chunk);
        this.chunkPos.push(from);
        let last = chunk.value.length - 1;
        this.last = chunk.value[last];
        this.lastFrom = chunk.from[last] + from;
        this.lastTo = chunk.to[last] + from;
        return true;
    }
    /**
    Finish the range set. Returns the new set. The builder can't be
    used anymore after this has been called.
    */
    finish() { return this.finishInner(RangeSet.empty); }
    /**
    @internal
    */
    finishInner(next) {
        if (this.from.length)
            this.finishChunk(false);
        if (this.chunks.length == 0)
            return next;
        let result = RangeSet.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(next) : next, this.setMaxPoint);
        this.from = null; // Make sure further `add` calls produce errors
        return result;
    }
}
function findSharedChunks(a, b, textDiff) {
    let inA = new Map();
    for (let set of a)
        for (let i = 0; i < set.chunk.length; i++)
            if (set.chunk[i].maxPoint <= 0)
                inA.set(set.chunk[i], set.chunkPos[i]);
    let shared = new Set();
    for (let set of b)
        for (let i = 0; i < set.chunk.length; i++) {
            let known = inA.get(set.chunk[i]);
            if (known != null && (textDiff ? textDiff.mapPos(known) : known) == set.chunkPos[i] &&
                !(textDiff === null || textDiff === void 0 ? void 0 : textDiff.touchesRange(known, known + set.chunk[i].length)))
                shared.add(set.chunk[i]);
        }
    return shared;
}
class LayerCursor {
    constructor(layer, skip, minPoint, rank = 0) {
        this.layer = layer;
        this.skip = skip;
        this.minPoint = minPoint;
        this.rank = rank;
    }
    get startSide() { return this.value ? this.value.startSide : 0; }
    get endSide() { return this.value ? this.value.endSide : 0; }
    goto(pos, side = -1000000000 /* C.Far */) {
        this.chunkIndex = this.rangeIndex = 0;
        this.gotoInner(pos, side, false);
        return this;
    }
    gotoInner(pos, side, forward) {
        while (this.chunkIndex < this.layer.chunk.length) {
            let next = this.layer.chunk[this.chunkIndex];
            if (!(this.skip && this.skip.has(next) ||
                this.layer.chunkEnd(this.chunkIndex) < pos ||
                next.maxPoint < this.minPoint))
                break;
            this.chunkIndex++;
            forward = false;
        }
        if (this.chunkIndex < this.layer.chunk.length) {
            let rangeIndex = this.layer.chunk[this.chunkIndex].findIndex(pos - this.layer.chunkPos[this.chunkIndex], side, true);
            if (!forward || this.rangeIndex < rangeIndex)
                this.setRangeIndex(rangeIndex);
        }
        this.next();
    }
    forward(pos, side) {
        if ((this.to - pos || this.endSide - side) < 0)
            this.gotoInner(pos, side, true);
    }
    next() {
        for (;;) {
            if (this.chunkIndex == this.layer.chunk.length) {
                this.from = this.to = 1000000000 /* C.Far */;
                this.value = null;
                break;
            }
            else {
                let chunkPos = this.layer.chunkPos[this.chunkIndex], chunk = this.layer.chunk[this.chunkIndex];
                let from = chunkPos + chunk.from[this.rangeIndex];
                this.from = from;
                this.to = chunkPos + chunk.to[this.rangeIndex];
                this.value = chunk.value[this.rangeIndex];
                this.setRangeIndex(this.rangeIndex + 1);
                if (this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint)
                    break;
            }
        }
    }
    setRangeIndex(index) {
        if (index == this.layer.chunk[this.chunkIndex].value.length) {
            this.chunkIndex++;
            if (this.skip) {
                while (this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]))
                    this.chunkIndex++;
            }
            this.rangeIndex = 0;
        }
        else {
            this.rangeIndex = index;
        }
    }
    nextChunk() {
        this.chunkIndex++;
        this.rangeIndex = 0;
        this.next();
    }
    compare(other) {
        return this.from - other.from || this.startSide - other.startSide || this.rank - other.rank ||
            this.to - other.to || this.endSide - other.endSide;
    }
}
class HeapCursor {
    constructor(heap) {
        this.heap = heap;
    }
    static from(sets, skip = null, minPoint = -1) {
        let heap = [];
        for (let i = 0; i < sets.length; i++) {
            for (let cur = sets[i]; !cur.isEmpty; cur = cur.nextLayer) {
                if (cur.maxPoint >= minPoint)
                    heap.push(new LayerCursor(cur, skip, minPoint, i));
            }
        }
        return heap.length == 1 ? heap[0] : new HeapCursor(heap);
    }
    get startSide() { return this.value ? this.value.startSide : 0; }
    goto(pos, side = -1000000000 /* C.Far */) {
        for (let cur of this.heap)
            cur.goto(pos, side);
        for (let i = this.heap.length >> 1; i >= 0; i--)
            heapBubble(this.heap, i);
        this.next();
        return this;
    }
    forward(pos, side) {
        for (let cur of this.heap)
            cur.forward(pos, side);
        for (let i = this.heap.length >> 1; i >= 0; i--)
            heapBubble(this.heap, i);
        if ((this.to - pos || this.value.endSide - side) < 0)
            this.next();
    }
    next() {
        if (this.heap.length == 0) {
            this.from = this.to = 1000000000 /* C.Far */;
            this.value = null;
            this.rank = -1;
        }
        else {
            let top = this.heap[0];
            this.from = top.from;
            this.to = top.to;
            this.value = top.value;
            this.rank = top.rank;
            if (top.value)
                top.next();
            heapBubble(this.heap, 0);
        }
    }
}
function heapBubble(heap, index) {
    for (let cur = heap[index];;) {
        let childIndex = (index << 1) + 1;
        if (childIndex >= heap.length)
            break;
        let child = heap[childIndex];
        if (childIndex + 1 < heap.length && child.compare(heap[childIndex + 1]) >= 0) {
            child = heap[childIndex + 1];
            childIndex++;
        }
        if (cur.compare(child) < 0)
            break;
        heap[childIndex] = cur;
        heap[index] = child;
        index = childIndex;
    }
}
class SpanCursor {
    constructor(sets, skip, minPoint) {
        this.minPoint = minPoint;
        this.active = [];
        this.activeTo = [];
        this.activeRank = [];
        this.minActive = -1;
        // A currently active point range, if any
        this.point = null;
        this.pointFrom = 0;
        this.pointRank = 0;
        this.to = -1000000000 /* C.Far */;
        this.endSide = 0;
        // The amount of open active ranges at the start of the iterator.
        // Not including points.
        this.openStart = -1;
        this.cursor = HeapCursor.from(sets, skip, minPoint);
    }
    goto(pos, side = -1000000000 /* C.Far */) {
        this.cursor.goto(pos, side);
        this.active.length = this.activeTo.length = this.activeRank.length = 0;
        this.minActive = -1;
        this.to = pos;
        this.endSide = side;
        this.openStart = -1;
        this.next();
        return this;
    }
    forward(pos, side) {
        while (this.minActive > -1 && (this.activeTo[this.minActive] - pos || this.active[this.minActive].endSide - side) < 0)
            this.removeActive(this.minActive);
        this.cursor.forward(pos, side);
    }
    removeActive(index) {
        remove(this.active, index);
        remove(this.activeTo, index);
        remove(this.activeRank, index);
        this.minActive = findMinIndex(this.active, this.activeTo);
    }
    addActive(trackOpen) {
        let i = 0, { value, to, rank } = this.cursor;
        // Organize active marks by rank first, then by size
        while (i < this.activeRank.length && (rank - this.activeRank[i] || to - this.activeTo[i]) > 0)
            i++;
        insert(this.active, i, value);
        insert(this.activeTo, i, to);
        insert(this.activeRank, i, rank);
        if (trackOpen)
            insert(trackOpen, i, this.cursor.from);
        this.minActive = findMinIndex(this.active, this.activeTo);
    }
    // After calling this, if `this.point` != null, the next range is a
    // point. Otherwise, it's a regular range, covered by `this.active`.
    next() {
        let from = this.to, wasPoint = this.point;
        this.point = null;
        let trackOpen = this.openStart < 0 ? [] : null;
        for (;;) {
            let a = this.minActive;
            if (a > -1 && (this.activeTo[a] - this.cursor.from || this.active[a].endSide - this.cursor.startSide) < 0) {
                if (this.activeTo[a] > from) {
                    this.to = this.activeTo[a];
                    this.endSide = this.active[a].endSide;
                    break;
                }
                this.removeActive(a);
                if (trackOpen)
                    remove(trackOpen, a);
            }
            else if (!this.cursor.value) {
                this.to = this.endSide = 1000000000 /* C.Far */;
                break;
            }
            else if (this.cursor.from > from) {
                this.to = this.cursor.from;
                this.endSide = this.cursor.startSide;
                break;
            }
            else {
                let nextVal = this.cursor.value;
                if (!nextVal.point) { // Opening a range
                    this.addActive(trackOpen);
                    this.cursor.next();
                }
                else if (wasPoint && this.cursor.to == this.to && this.cursor.from < this.cursor.to) {
                    // Ignore any non-empty points that end precisely at the end of the prev point
                    this.cursor.next();
                }
                else { // New point
                    this.point = nextVal;
                    this.pointFrom = this.cursor.from;
                    this.pointRank = this.cursor.rank;
                    this.to = this.cursor.to;
                    this.endSide = nextVal.endSide;
                    this.cursor.next();
                    this.forward(this.to, this.endSide);
                    break;
                }
            }
        }
        if (trackOpen) {
            this.openStart = 0;
            for (let i = trackOpen.length - 1; i >= 0 && trackOpen[i] < from; i--)
                this.openStart++;
        }
    }
    activeForPoint(to) {
        if (!this.active.length)
            return this.active;
        let active = [];
        for (let i = this.active.length - 1; i >= 0; i--) {
            if (this.activeRank[i] < this.pointRank)
                break;
            if (this.activeTo[i] > to || this.activeTo[i] == to && this.active[i].endSide >= this.point.endSide)
                active.push(this.active[i]);
        }
        return active.reverse();
    }
    openEnd(to) {
        let open = 0;
        for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > to; i--)
            open++;
        return open;
    }
}
function compare(a, startA, b, startB, length, comparator) {
    a.goto(startA);
    b.goto(startB);
    let endB = startB + length;
    let pos = startB, dPos = startB - startA;
    for (;;) {
        let dEnd = (a.to + dPos) - b.to, diff = dEnd || a.endSide - b.endSide;
        let end = diff < 0 ? a.to + dPos : b.to, clipEnd = Math.min(end, endB);
        if (a.point || b.point) {
            if (!(a.point && b.point && (a.point == b.point || a.point.eq(b.point)) &&
                sameValues(a.activeForPoint(a.to), b.activeForPoint(b.to))))
                comparator.comparePoint(pos, clipEnd, a.point, b.point);
        }
        else {
            if (clipEnd > pos && !sameValues(a.active, b.active))
                comparator.compareRange(pos, clipEnd, a.active, b.active);
        }
        if (end > endB)
            break;
        if ((dEnd || a.openEnd != b.openEnd) && comparator.boundChange)
            comparator.boundChange(end);
        pos = end;
        if (diff <= 0)
            a.next();
        if (diff >= 0)
            b.next();
    }
}
function sameValues(a, b) {
    if (a.length != b.length)
        return false;
    for (let i = 0; i < a.length; i++)
        if (a[i] != b[i] && !a[i].eq(b[i]))
            return false;
    return true;
}
function remove(array, index) {
    for (let i = index, e = array.length - 1; i < e; i++)
        array[i] = array[i + 1];
    array.pop();
}
function insert(array, index, value) {
    for (let i = array.length - 1; i >= index; i--)
        array[i + 1] = array[i];
    array[index] = value;
}
function findMinIndex(value, array) {
    let found = -1, foundPos = 1000000000 /* C.Far */;
    for (let i = 0; i < array.length; i++)
        if ((array[i] - foundPos || value[i].endSide - value[found].endSide) < 0) {
            found = i;
            foundPos = array[i];
        }
    return found;
}

/**
Count the column position at the given offset into the string,
taking extending characters and tab size into account.
*/
function countColumn(string, tabSize, to = string.length) {
    let n = 0;
    for (let i = 0; i < to && i < string.length;) {
        if (string.charCodeAt(i) == 9) {
            n += tabSize - (n % tabSize);
            i++;
        }
        else {
            n++;
            i = findClusterBreak(string, i);
        }
    }
    return n;
}
/**
Find the offset that corresponds to the given column position in a
string, taking extending characters and tab size into account. By
default, the string length is returned when it is too short to
reach the column. Pass `strict` true to make it return -1 in that
situation.
*/
function findColumn(string, col, tabSize, strict) {
    for (let i = 0, n = 0;;) {
        if (n >= col)
            return i;
        if (i == string.length)
            break;
        n += string.charCodeAt(i) == 9 ? tabSize - (n % tabSize) : 1;
        i = findClusterBreak(string, i);
    }
    return strict === true ? -1 : string.length;
}

export { Annotation, AnnotationType, ChangeDesc, ChangeSet, CharCategory, Compartment, EditorSelection, EditorState, Facet, Line, MapMode, Prec, Range, RangeSet, RangeSetBuilder, RangeValue, SelectionRange, StateEffect, StateEffectType, StateField, Text, Transaction, codePointAt, codePointSize, combineConfig, countColumn, findClusterBreak, findColumn, fromCodePoint };
