"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withReturnType = exports.whenOr = exports.whenAnd = exports.when = exports.valueTags = exports.value = exports.typeTags = exports.type = exports.tagsExhaustive = exports.tags = exports.tagStartsWith = exports.tag = exports.orElseAbsurd = exports.orElse = exports.option = exports.not = exports.nonEmptyString = exports.is = exports.instanceOfUnsafe = exports.instanceOf = exports.exhaustive = exports.either = exports.discriminatorsExhaustive = exports.discriminators = exports.discriminatorStartsWith = exports.discriminator = exports.defined = exports.any = exports.TypeId = void 0;
var Either = _interopRequireWildcard(require("../Either.js"));
var _Function = require("../Function.js");
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("@effect/matcher/Matcher");
const TypeMatcherProto = {
  [TypeId]: {
    _input: _Function.identity,
    _filters: _Function.identity,
    _remaining: _Function.identity,
    _result: _Function.identity,
    _return: _Function.identity
  },
  _tag: "TypeMatcher",
  add(_case) {
    return makeTypeMatcher([...this.cases, _case]);
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
function makeTypeMatcher(cases) {
  const matcher = Object.create(TypeMatcherProto);
  matcher.cases = cases;
  return matcher;
}
const ValueMatcherProto = {
  [TypeId]: {
    _input: _Function.identity,
    _filters: _Function.identity,
    _remaining: _Function.identity,
    _result: _Function.identity,
    _provided: _Function.identity,
    _return: _Function.identity
  },
  _tag: "ValueMatcher",
  add(_case) {
    if (this.value._tag === "Right") {
      return this;
    }
    if (_case._tag === "When" && _case.guard(this.provided) === true) {
      return makeValueMatcher(this.provided, Either.right(_case.evaluate(this.provided)));
    } else if (_case._tag === "Not" && _case.guard(this.provided) === false) {
      return makeValueMatcher(this.provided, Either.right(_case.evaluate(this.provided)));
    }
    return this;
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
function makeValueMatcher(provided, value) {
  const matcher = Object.create(ValueMatcherProto);
  matcher.provided = provided;
  matcher.value = value;
  return matcher;
}
const makeWhen = (guard, evaluate) => ({
  _tag: "When",
  guard,
  evaluate
});
const makeNot = (guard, evaluate) => ({
  _tag: "Not",
  guard,
  evaluate
});
const makePredicate = pattern => {
  if (typeof pattern === "function") {
    return pattern;
  } else if (Array.isArray(pattern)) {
    const predicates = pattern.map(makePredicate);
    const len = predicates.length;
    return u => {
      if (!Array.isArray(u)) {
        return false;
      }
      for (let i = 0; i < len; i++) {
        if (predicates[i](u[i]) === false) {
          return false;
        }
      }
      return true;
    };
  } else if (pattern !== null && typeof pattern === "object") {
    const keysAndPredicates = Object.entries(pattern).map(([k, p]) => [k, makePredicate(p)]);
    const len = keysAndPredicates.length;
    return u => {
      if (typeof u !== "object" || u === null) {
        return false;
      }
      for (let i = 0; i < len; i++) {
        const [key, predicate] = keysAndPredicates[i];
        if (!(key in u) || predicate(u[key]) === false) {
          return false;
        }
      }
      return true;
    };
  }
  return u => u === pattern;
};
const makeOrPredicate = patterns => {
  const predicates = patterns.map(makePredicate);
  const len = predicates.length;
  return u => {
    for (let i = 0; i < len; i++) {
      if (predicates[i](u) === true) {
        return true;
      }
    }
    return false;
  };
};
const makeAndPredicate = patterns => {
  const predicates = patterns.map(makePredicate);
  const len = predicates.length;
  return u => {
    for (let i = 0; i < len; i++) {
      if (predicates[i](u) === false) {
        return false;
      }
    }
    return true;
  };
};
/** @internal */
const type = () => makeTypeMatcher([]);
/** @internal */
exports.type = type;
const value = i => makeValueMatcher(i, Either.left(i));
/** @internal */
exports.value = value;
const valueTags = exports.valueTags = /*#__PURE__*/(0, _Function.dual)(2, (input, fields) => {
  const match = tagsExhaustive(fields)(makeTypeMatcher([]));
  return match(input);
});
/** @internal */
const typeTags = () => fields => {
  const match = tagsExhaustive(fields)(makeTypeMatcher([]));
  return input => match(input);
};
/** @internal */
exports.typeTags = typeTags;
const withReturnType = () => self => self;
/** @internal */
exports.withReturnType = withReturnType;
const when = (pattern, f) => self => self.add(makeWhen(makePredicate(pattern), f));
/** @internal */
exports.when = when;
const whenOr = (...args) => self => {
  const onMatch = args[args.length - 1];
  const patterns = args.slice(0, -1);
  return self.add(makeWhen(makeOrPredicate(patterns), onMatch));
};
/** @internal */
exports.whenOr = whenOr;
const whenAnd = (...args) => self => {
  const onMatch = args[args.length - 1];
  const patterns = args.slice(0, -1);
  return self.add(makeWhen(makeAndPredicate(patterns), onMatch));
};
/** @internal */
exports.whenAnd = whenAnd;
const discriminator = field => (...pattern) => {
  const f = pattern[pattern.length - 1];
  const values = pattern.slice(0, -1);
  const pred = values.length === 1 ? _ => _ != null && _[field] === values[0] : _ => _ != null && values.includes(_[field]);
  return self => self.add(makeWhen(pred, f));
};
/** @internal */
exports.discriminator = discriminator;
const discriminatorStartsWith = field => (pattern, f) => {
  const pred = _ => _ != null && typeof _[field] === "string" && _[field].startsWith(pattern);
  return self => self.add(makeWhen(pred, f));
};
/** @internal */
exports.discriminatorStartsWith = discriminatorStartsWith;
const discriminators = field => fields => {
  const predicate = makeWhen(arg => arg != null && arg[field] in fields, data => fields[data[field]](data));
  return self => self.add(predicate);
};
/** @internal */
exports.discriminators = discriminators;
const discriminatorsExhaustive = field => fields => {
  const addCases = discriminators(field)(fields);
  return matcher => exhaustive(addCases(matcher));
};
/** @internal */
exports.discriminatorsExhaustive = discriminatorsExhaustive;
const tag = exports.tag = /*#__PURE__*/discriminator("_tag");
/** @internal */
const tagStartsWith = exports.tagStartsWith = /*#__PURE__*/discriminatorStartsWith("_tag");
/** @internal */
const tags = exports.tags = /*#__PURE__*/discriminators("_tag");
/** @internal */
const tagsExhaustive = exports.tagsExhaustive = /*#__PURE__*/discriminatorsExhaustive("_tag");
/** @internal */
const not = (pattern, f) => self => self.add(makeNot(makePredicate(pattern), f));
/** @internal */
exports.not = not;
const nonEmptyString = u => typeof u === "string" && u.length > 0;
/** @internal */
exports.nonEmptyString = nonEmptyString;
const is = (...literals) => {
  const len = literals.length;
  return u => {
    for (let i = 0; i < len; i++) {
      if (u === literals[i]) {
        return true;
      }
    }
    return false;
  };
};
/** @internal */
exports.is = is;
const any = () => true;
/** @internal */
exports.any = any;
const defined = u => u !== undefined && u !== null;
/** @internal */
exports.defined = defined;
const instanceOf = constructor => u => u instanceof constructor;
/** @internal */
exports.instanceOf = instanceOf;
const instanceOfUnsafe = exports.instanceOfUnsafe = instanceOf;
/** @internal */
const orElse = f => self => {
  const result = either(self);
  if (Either.isEither(result)) {
    // @ts-expect-error
    return result._tag === "Right" ? result.right : f(result.left);
  }
  // @ts-expect-error
  return input => {
    const a = result(input);
    return a._tag === "Right" ? a.right : f(a.left);
  };
};
/** @internal */
exports.orElse = orElse;
const orElseAbsurd = self => orElse(() => {
  throw new Error("effect/Match/orElseAbsurd: absurd");
})(self);
/** @internal */
exports.orElseAbsurd = orElseAbsurd;
const either = self => {
  if (self._tag === "ValueMatcher") {
    return self.value;
  }
  const len = self.cases.length;
  if (len === 1) {
    const _case = self.cases[0];
    return input => {
      if (_case._tag === "When" && _case.guard(input) === true) {
        return Either.right(_case.evaluate(input));
      } else if (_case._tag === "Not" && _case.guard(input) === false) {
        return Either.right(_case.evaluate(input));
      }
      return Either.left(input);
    };
  }
  return input => {
    for (let i = 0; i < len; i++) {
      const _case = self.cases[i];
      if (_case._tag === "When" && _case.guard(input) === true) {
        return Either.right(_case.evaluate(input));
      } else if (_case._tag === "Not" && _case.guard(input) === false) {
        return Either.right(_case.evaluate(input));
      }
    }
    return Either.left(input);
  };
};
/** @internal */
exports.either = either;
const option = self => {
  const toEither = either(self);
  if (Either.isEither(toEither)) {
    return Either.match(toEither, {
      onLeft: () => Option.none(),
      onRight: Option.some
    });
  }
  return input => Either.match(toEither(input), {
    onLeft: () => Option.none(),
    onRight: Option.some
  });
};
exports.option = option;
const getExhaustiveAbsurdErrorMessage = "effect/Match/exhaustive: absurd";
/** @internal */
const exhaustive = self => {
  const toEither = either(self);
  if (Either.isEither(toEither)) {
    if (toEither._tag === "Right") {
      return toEither.right;
    }
    throw new Error(getExhaustiveAbsurdErrorMessage);
  }
  return u => {
    // @ts-expect-error
    const result = toEither(u);
    if (result._tag === "Right") {
      return result.right;
    }
    throw new Error(getExhaustiveAbsurdErrorMessage);
  };
};
exports.exhaustive = exhaustive;
//# sourceMappingURL=matcher.js.map