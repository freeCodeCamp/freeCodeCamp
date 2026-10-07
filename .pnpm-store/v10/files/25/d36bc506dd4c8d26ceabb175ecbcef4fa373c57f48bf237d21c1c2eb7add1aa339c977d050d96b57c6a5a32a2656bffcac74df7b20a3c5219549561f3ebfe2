import { cleanUrl, extractQueryWithoutFragment } from "../utils.js";
class And {
    kind;
    args;
    constructor(...args) {
        if (args.length === 0) {
            throw new Error('`And` expects at least one operand');
        }
        this.args = args;
        this.kind = 'and';
    }
}
class Or {
    kind;
    args;
    constructor(...args) {
        if (args.length === 0) {
            throw new Error('`Or` expects at least one operand');
        }
        this.args = args;
        this.kind = 'or';
    }
}
class Not {
    kind;
    expr;
    constructor(expr) {
        this.expr = expr;
        this.kind = 'not';
    }
}
class Id {
    kind;
    pattern;
    params;
    constructor(pattern, params) {
        this.pattern = pattern;
        this.kind = 'id';
        this.params = params ?? {
            cleanUrl: false,
        };
    }
}
class ImporterId {
    kind;
    pattern;
    params;
    constructor(pattern, params) {
        this.pattern = pattern;
        this.kind = 'importerId';
        this.params = params ?? {
            cleanUrl: false,
        };
    }
}
class ModuleType {
    kind;
    pattern;
    constructor(pattern) {
        this.pattern = pattern;
        this.kind = 'moduleType';
    }
}
class Code {
    kind;
    pattern;
    constructor(expr) {
        this.pattern = expr;
        this.kind = 'code';
    }
}
class Query {
    kind;
    key;
    pattern;
    constructor(key, pattern) {
        this.pattern = pattern;
        this.key = key;
        this.kind = 'query';
    }
}
class Include {
    kind;
    expr;
    constructor(expr) {
        this.expr = expr;
        this.kind = 'include';
    }
}
class Exclude {
    kind;
    expr;
    constructor(expr) {
        this.expr = expr;
        this.kind = 'exclude';
    }
}
export function and(...args) {
    return new And(...args);
}
export function or(...args) {
    return new Or(...args);
}
export function not(expr) {
    return new Not(expr);
}
export function id(pattern, params) {
    return new Id(pattern, params);
}
export function importerId(pattern, params) {
    return new ImporterId(pattern, params);
}
export function moduleType(pattern) {
    return new ModuleType(pattern);
}
export function code(pattern) {
    return new Code(pattern);
}
/*
 * There are three kinds of conditions are supported:
 * 1. `boolean`: if the value is `true`, the key must exist and be truthy. if the value is `false`, the key must not exist or be falsy.
 * 2. `string`: the key must exist and be equal to the value.
 * 3. `RegExp`: the key must exist and match the value.
 */
export function query(key, pattern) {
    return new Query(key, pattern);
}
export function include(expr) {
    return new Include(expr);
}
export function exclude(expr) {
    return new Exclude(expr);
}
/**
 * convert a queryObject to FilterExpression like
 * ```js
 *   and(query(k1, v1), query(k2, v2))
 * ```
 * @param queryFilterObject The query filter object needs to be matched.
 * @returns a `And` FilterExpression
 */
export function queries(queryFilter) {
    let arr = Object.entries(queryFilter).map(([key, value]) => {
        return new Query(key, value);
    });
    return and(...arr);
}
export function interpreter(exprs, code, id, moduleType, importerId) {
    let arr = [];
    if (Array.isArray(exprs)) {
        arr = exprs;
    }
    else {
        arr = [exprs];
    }
    return interpreterImpl(arr, code, id, moduleType, importerId);
}
export function interpreterImpl(expr, code, id, moduleType, importerId, ctx = {}) {
    let hasInclude = false;
    for (const e of expr) {
        switch (e.kind) {
            case 'include': {
                hasInclude = true;
                if (exprInterpreter(e.expr, code, id, moduleType, importerId, ctx)) {
                    return true;
                }
                break;
            }
            case 'exclude': {
                if (exprInterpreter(e.expr, code, id, moduleType, importerId, ctx)) {
                    return false;
                }
                break;
            }
        }
    }
    return !hasInclude;
}
export function exprInterpreter(expr, code, id, moduleType, importerId, ctx = {}) {
    switch (expr.kind) {
        case 'and': {
            return expr.args.every((e) => exprInterpreter(e, code, id, moduleType, importerId, ctx));
        }
        case 'or': {
            return expr.args.some((e) => exprInterpreter(e, code, id, moduleType, importerId, ctx));
        }
        case 'not': {
            return !exprInterpreter(expr.expr, code, id, moduleType, importerId, ctx);
        }
        case 'id': {
            if (id === undefined) {
                throw new Error('`id` is required for `id` expression');
            }
            let idToMatch = id;
            if (expr.params.cleanUrl) {
                idToMatch = cleanUrl(idToMatch);
            }
            return typeof expr.pattern === 'string'
                ? idToMatch === expr.pattern
                : expr.pattern.test(idToMatch);
        }
        case 'importerId': {
            if (importerId === undefined) {
                return false; // Entry files have no importer, so no match
            }
            let importerIdToMatch = importerId;
            if (expr.params.cleanUrl) {
                importerIdToMatch = cleanUrl(importerIdToMatch);
            }
            return typeof expr.pattern === 'string'
                ? importerIdToMatch === expr.pattern
                : expr.pattern.test(importerIdToMatch);
        }
        case 'moduleType': {
            if (moduleType === undefined) {
                throw new Error('`moduleType` is required for `moduleType` expression');
            }
            return moduleType === expr.pattern;
        }
        case 'code': {
            if (code === undefined) {
                throw new Error('`code` is required for `code` expression');
            }
            return typeof expr.pattern === 'string'
                ? code.includes(expr.pattern)
                : expr.pattern.test(code);
        }
        case 'query': {
            if (id === undefined) {
                throw new Error('`id` is required for `Query` expression');
            }
            if (!ctx.urlSearchParamsCache) {
                let queryString = extractQueryWithoutFragment(id);
                ctx.urlSearchParamsCache = new URLSearchParams(queryString);
            }
            let urlParams = ctx.urlSearchParamsCache;
            if (typeof expr.pattern === 'boolean') {
                if (expr.pattern) {
                    return urlParams.has(expr.key);
                }
                else {
                    return !urlParams.has(expr.key);
                }
            }
            else if (typeof expr.pattern === 'string') {
                return urlParams.get(expr.key) === expr.pattern;
            }
            else {
                return expr.pattern.test(urlParams.get(expr.key) ?? '');
            }
        }
        default: {
            throw new Error(`Expression ${JSON.stringify(expr)} is not expected.`);
        }
    }
}
