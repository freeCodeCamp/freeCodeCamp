class Nil {
    [Symbol.iterator]() {
        return this;
    }
    next(value) {
        return { value, done: true };
    }
}
Nil.nil = new Nil();
export function nilHelper() {
    return Nil.nil;
}
export function* mapHelper(g, f) {
    for (const v of g) {
        yield f(v);
    }
}
export function* flatMapHelper(g, f) {
    for (const v of g) {
        yield* f(v);
    }
}
export function* filterHelper(g, f) {
    for (const v of g) {
        if (f(v)) {
            yield v;
        }
    }
}
export function* takeNHelper(g, n) {
    for (let i = 0; i < n; ++i) {
        const cur = g.next();
        if (cur.done) {
            break;
        }
        yield cur.value;
    }
}
export function* takeWhileHelper(g, f) {
    let cur = g.next();
    while (!cur.done && f(cur.value)) {
        yield cur.value;
        cur = g.next();
    }
}
export function* joinHelper(g, others) {
    for (let cur = g.next(); !cur.done; cur = g.next()) {
        yield cur.value;
    }
    for (const s of others) {
        for (let cur = s.next(); !cur.done; cur = s.next()) {
            yield cur.value;
        }
    }
}
