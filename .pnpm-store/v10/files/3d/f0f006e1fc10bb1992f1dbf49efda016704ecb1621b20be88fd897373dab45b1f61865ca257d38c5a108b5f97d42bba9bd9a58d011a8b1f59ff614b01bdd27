"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zonedOffsetIso = exports.zonedOffset = exports.zoneUnsafeMakeNamed = exports.zoneToString = exports.zoneMakeOffset = exports.zoneMakeNamedEffect = exports.zoneMakeNamed = exports.zoneMakeLocal = exports.zoneFromString = exports.withDateUtc = exports.withDate = exports.unsafeSetZoneNamed = exports.unsafeNow = exports.unsafeMakeZoned = exports.unsafeMake = exports.unsafeIsPast = exports.unsafeIsFuture = exports.unsafeFromDate = exports.toUtc = exports.toPartsUtc = exports.toParts = exports.toEpochMillis = exports.toDateUtc = exports.toDate = exports.subtractDuration = exports.subtract = exports.startOf = exports.setZoneOffset = exports.setZoneNamed = exports.setZone = exports.setPartsUtc = exports.setParts = exports.removeTime = exports.nowAsDate = exports.now = exports.nearest = exports.mutateUtc = exports.mutate = exports.min = exports.max = exports.match = exports.mapEpochMillis = exports.makeZonedProto = exports.makeZonedFromString = exports.makeZoned = exports.make = exports.lessThanOrEqualTo = exports.lessThan = exports.isZoned = exports.isUtc = exports.isTimeZoneOffset = exports.isTimeZoneNamed = exports.isTimeZone = exports.isPast = exports.isFuture = exports.isDateTime = exports.greaterThanOrEqualTo = exports.greaterThan = exports.getPartUtc = exports.getPart = exports.formatUtc = exports.formatLocal = exports.formatIsoZoned = exports.formatIsoOffset = exports.formatIsoDateUtc = exports.formatIsoDate = exports.formatIso = exports.formatIntl = exports.format = exports.endOf = exports.distanceDurationEither = exports.distanceDuration = exports.distance = exports.clamp = exports.between = exports.addDuration = exports.add = exports.TypeId = exports.TimeZoneTypeId = exports.Order = exports.Equivalence = void 0;
var _Cause = require("../Cause.js");
var Clock = _interopRequireWildcard(require("../Clock.js"));
var Duration = _interopRequireWildcard(require("../Duration.js"));
var Either = _interopRequireWildcard(require("../Either.js"));
var Equal = _interopRequireWildcard(require("../Equal.js"));
var equivalence = _interopRequireWildcard(require("../Equivalence.js"));
var _Function = require("../Function.js");
var _GlobalValue = require("../GlobalValue.js");
var Hash = _interopRequireWildcard(require("../Hash.js"));
var Inspectable = _interopRequireWildcard(require("../Inspectable.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var order = _interopRequireWildcard(require("../Order.js"));
var _Pipeable = require("../Pipeable.js");
var Predicate = _interopRequireWildcard(require("../Predicate.js"));
var internalEffect = _interopRequireWildcard(require("./core-effect.js"));
var core = _interopRequireWildcard(require("./core.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("effect/DateTime");
/** @internal */
const TimeZoneTypeId = exports.TimeZoneTypeId = /*#__PURE__*/Symbol.for("effect/DateTime/TimeZone");
const Proto = {
  [TypeId]: TypeId,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  },
  [Inspectable.NodeInspectSymbol]() {
    return this.toString();
  },
  toJSON() {
    return toDateUtc(this).toJSON();
  }
};
const ProtoUtc = {
  ...Proto,
  _tag: "Utc",
  [Hash.symbol]() {
    return Hash.cached(this, Hash.number(this.epochMillis));
  },
  [Equal.symbol](that) {
    return isDateTime(that) && that._tag === "Utc" && this.epochMillis === that.epochMillis;
  },
  toString() {
    return `DateTime.Utc(${toDateUtc(this).toJSON()})`;
  }
};
const ProtoZoned = {
  ...Proto,
  _tag: "Zoned",
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.number(this.epochMillis), Hash.combine(Hash.hash(this.zone)), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isDateTime(that) && that._tag === "Zoned" && this.epochMillis === that.epochMillis && Equal.equals(this.zone, that.zone);
  },
  toString() {
    return `DateTime.Zoned(${formatIsoZoned(this)})`;
  }
};
const ProtoTimeZone = {
  [TimeZoneTypeId]: TimeZoneTypeId,
  [Inspectable.NodeInspectSymbol]() {
    return this.toString();
  }
};
const ProtoTimeZoneNamed = {
  ...ProtoTimeZone,
  _tag: "Named",
  [Hash.symbol]() {
    return Hash.cached(this, Hash.string(`Named:${this.id}`));
  },
  [Equal.symbol](that) {
    return isTimeZone(that) && that._tag === "Named" && this.id === that.id;
  },
  toString() {
    return `TimeZone.Named(${this.id})`;
  },
  toJSON() {
    return {
      _id: "TimeZone",
      _tag: "Named",
      id: this.id
    };
  }
};
const ProtoTimeZoneOffset = {
  ...ProtoTimeZone,
  _tag: "Offset",
  [Hash.symbol]() {
    return Hash.cached(this, Hash.string(`Offset:${this.offset}`));
  },
  [Equal.symbol](that) {
    return isTimeZone(that) && that._tag === "Offset" && this.offset === that.offset;
  },
  toString() {
    return `TimeZone.Offset(${offsetToString(this.offset)})`;
  },
  toJSON() {
    return {
      _id: "TimeZone",
      _tag: "Offset",
      offset: this.offset
    };
  }
};
/** @internal */
const makeZonedProto = (epochMillis, zone, partsUtc) => {
  const self = Object.create(ProtoZoned);
  self.epochMillis = epochMillis;
  self.zone = zone;
  Object.defineProperty(self, "partsUtc", {
    value: partsUtc,
    enumerable: false,
    writable: true
  });
  Object.defineProperty(self, "adjustedEpochMillis", {
    value: undefined,
    enumerable: false,
    writable: true
  });
  Object.defineProperty(self, "partsAdjusted", {
    value: undefined,
    enumerable: false,
    writable: true
  });
  return self;
};
// =============================================================================
// guards
// =============================================================================
/** @internal */
exports.makeZonedProto = makeZonedProto;
const isDateTime = u => Predicate.hasProperty(u, TypeId);
exports.isDateTime = isDateTime;
const isDateTimeArgs = args => isDateTime(args[0]);
/** @internal */
const isTimeZone = u => Predicate.hasProperty(u, TimeZoneTypeId);
/** @internal */
exports.isTimeZone = isTimeZone;
const isTimeZoneOffset = u => isTimeZone(u) && u._tag === "Offset";
/** @internal */
exports.isTimeZoneOffset = isTimeZoneOffset;
const isTimeZoneNamed = u => isTimeZone(u) && u._tag === "Named";
/** @internal */
exports.isTimeZoneNamed = isTimeZoneNamed;
const isUtc = self => self._tag === "Utc";
/** @internal */
exports.isUtc = isUtc;
const isZoned = self => self._tag === "Zoned";
// =============================================================================
// instances
// =============================================================================
/** @internal */
exports.isZoned = isZoned;
const Equivalence = exports.Equivalence = /*#__PURE__*/equivalence.make((a, b) => a.epochMillis === b.epochMillis);
/** @internal */
const Order = exports.Order = /*#__PURE__*/order.make((self, that) => self.epochMillis < that.epochMillis ? -1 : self.epochMillis > that.epochMillis ? 1 : 0);
/** @internal */
const clamp = exports.clamp = /*#__PURE__*/order.clamp(Order);
// =============================================================================
// constructors
// =============================================================================
const makeUtc = epochMillis => {
  const self = Object.create(ProtoUtc);
  self.epochMillis = epochMillis;
  Object.defineProperty(self, "partsUtc", {
    value: undefined,
    enumerable: false,
    writable: true
  });
  return self;
};
/** @internal */
const unsafeFromDate = date => {
  const epochMillis = date.getTime();
  if (Number.isNaN(epochMillis)) {
    throw new _Cause.IllegalArgumentException("Invalid date");
  }
  return makeUtc(epochMillis);
};
/** @internal */
exports.unsafeFromDate = unsafeFromDate;
const unsafeMake = input => {
  if (isDateTime(input)) {
    return input;
  } else if (input instanceof Date) {
    return unsafeFromDate(input);
  } else if (typeof input === "object") {
    const date = new Date(0);
    setPartsDate(date, input);
    return unsafeFromDate(date);
  } else if (typeof input === "string" && !hasZone(input)) {
    return unsafeFromDate(new Date(input + "Z"));
  }
  return unsafeFromDate(new Date(input));
};
exports.unsafeMake = unsafeMake;
const hasZone = input => /Z|[+-]\d{2}$|[+-]\d{2}:?\d{2}$|\]$/.test(input);
const minEpochMillis = -8640000000000000 + 12 * 60 * 60 * 1000;
const maxEpochMillis = 8640000000000000 - 14 * 60 * 60 * 1000;
/** @internal */
const unsafeMakeZoned = (input, options) => {
  if (options?.timeZone === undefined && isDateTime(input) && isZoned(input)) {
    return input;
  }
  const self = unsafeMake(input);
  if (self.epochMillis < minEpochMillis || self.epochMillis > maxEpochMillis) {
    throw new RangeError(`Epoch millis out of range: ${self.epochMillis}`);
  }
  let zone;
  if (options?.timeZone === undefined) {
    const offset = new Date(self.epochMillis).getTimezoneOffset() * -60 * 1000;
    zone = zoneMakeOffset(offset);
  } else if (isTimeZone(options?.timeZone)) {
    zone = options.timeZone;
  } else if (typeof options?.timeZone === "number") {
    zone = zoneMakeOffset(options.timeZone);
  } else {
    const parsedZone = zoneFromString(options.timeZone);
    if (Option.isNone(parsedZone)) {
      throw new _Cause.IllegalArgumentException(`Invalid time zone: ${options.timeZone}`);
    }
    zone = parsedZone.value;
  }
  if (options?.adjustForTimeZone !== true) {
    return makeZonedProto(self.epochMillis, zone, self.partsUtc);
  }
  return makeZonedFromAdjusted(self.epochMillis, zone, options?.disambiguation ?? "compatible");
};
/** @internal */
exports.unsafeMakeZoned = unsafeMakeZoned;
const makeZoned = exports.makeZoned = /*#__PURE__*/Option.liftThrowable(unsafeMakeZoned);
/** @internal */
const make = exports.make = /*#__PURE__*/Option.liftThrowable(unsafeMake);
const zonedStringRegex = /^(.{17,35})\[(.+)\]$/;
/** @internal */
const makeZonedFromString = input => {
  const match = zonedStringRegex.exec(input);
  if (match === null) {
    const offset = parseOffset(input);
    return offset !== null ? makeZoned(input, {
      timeZone: offset
    }) : Option.none();
  }
  const [, isoString, timeZone] = match;
  return makeZoned(isoString, {
    timeZone
  });
};
/** @internal */
exports.makeZonedFromString = makeZonedFromString;
const now = exports.now = /*#__PURE__*/core.map(Clock.currentTimeMillis, makeUtc);
/** @internal */
const nowAsDate = exports.nowAsDate = /*#__PURE__*/core.map(Clock.currentTimeMillis, millis => new Date(millis));
/** @internal */
const unsafeNow = () => makeUtc(Date.now());
// =============================================================================
// time zones
// =============================================================================
/** @internal */
exports.unsafeNow = unsafeNow;
const toUtc = self => makeUtc(self.epochMillis);
/** @internal */
exports.toUtc = toUtc;
const setZone = exports.setZone = /*#__PURE__*/(0, _Function.dual)(isDateTimeArgs, (self, zone, options) => options?.adjustForTimeZone === true ? makeZonedFromAdjusted(self.epochMillis, zone, options?.disambiguation ?? "compatible") : makeZonedProto(self.epochMillis, zone, self.partsUtc));
/** @internal */
const setZoneOffset = exports.setZoneOffset = /*#__PURE__*/(0, _Function.dual)(isDateTimeArgs, (self, offset, options) => setZone(self, zoneMakeOffset(offset), options));
const validZoneCache = /*#__PURE__*/(0, _GlobalValue.globalValue)("effect/DateTime/validZoneCache", () => new Map());
const formatOptions = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "longOffset",
  fractionalSecondDigits: 3,
  hourCycle: "h23"
};
const zoneMakeIntl = format => {
  const zoneId = format.resolvedOptions().timeZone;
  if (validZoneCache.has(zoneId)) {
    return validZoneCache.get(zoneId);
  }
  const zone = Object.create(ProtoTimeZoneNamed);
  zone.id = zoneId;
  zone.format = format;
  validZoneCache.set(zoneId, zone);
  return zone;
};
/** @internal */
const zoneUnsafeMakeNamed = zoneId => {
  if (validZoneCache.has(zoneId)) {
    return validZoneCache.get(zoneId);
  }
  try {
    return zoneMakeIntl(new Intl.DateTimeFormat("en-US", {
      ...formatOptions,
      timeZone: zoneId
    }));
  } catch {
    throw new _Cause.IllegalArgumentException(`Invalid time zone: ${zoneId}`);
  }
};
/** @internal */
exports.zoneUnsafeMakeNamed = zoneUnsafeMakeNamed;
const zoneMakeOffset = offset => {
  const zone = Object.create(ProtoTimeZoneOffset);
  zone.offset = offset;
  return zone;
};
/** @internal */
exports.zoneMakeOffset = zoneMakeOffset;
const zoneMakeNamed = exports.zoneMakeNamed = /*#__PURE__*/Option.liftThrowable(zoneUnsafeMakeNamed);
/** @internal */
const zoneMakeNamedEffect = zoneId => internalEffect.try_({
  try: () => zoneUnsafeMakeNamed(zoneId),
  catch: e => e
});
/** @internal */
exports.zoneMakeNamedEffect = zoneMakeNamedEffect;
const zoneMakeLocal = () => zoneMakeIntl(new Intl.DateTimeFormat("en-US", formatOptions));
exports.zoneMakeLocal = zoneMakeLocal;
const offsetZoneRegex = /^(?:GMT|[+-])/;
/** @internal */
const zoneFromString = zone => {
  if (offsetZoneRegex.test(zone)) {
    const offset = parseOffset(zone);
    return offset === null ? Option.none() : Option.some(zoneMakeOffset(offset));
  }
  return zoneMakeNamed(zone);
};
/** @internal */
exports.zoneFromString = zoneFromString;
const zoneToString = self => {
  if (self._tag === "Offset") {
    return offsetToString(self.offset);
  }
  return self.id;
};
/** @internal */
exports.zoneToString = zoneToString;
const setZoneNamed = exports.setZoneNamed = /*#__PURE__*/(0, _Function.dual)(isDateTimeArgs, (self, zoneId, options) => Option.map(zoneMakeNamed(zoneId), zone => setZone(self, zone, options)));
/** @internal */
const unsafeSetZoneNamed = exports.unsafeSetZoneNamed = /*#__PURE__*/(0, _Function.dual)(isDateTimeArgs, (self, zoneId, options) => setZone(self, zoneUnsafeMakeNamed(zoneId), options));
// =============================================================================
// comparisons
// =============================================================================
/** @internal */
const distance = exports.distance = /*#__PURE__*/(0, _Function.dual)(2, (self, other) => toEpochMillis(other) - toEpochMillis(self));
/** @internal */
const distanceDurationEither = exports.distanceDurationEither = /*#__PURE__*/(0, _Function.dual)(2, (self, other) => {
  const diffMillis = distance(self, other);
  return diffMillis > 0 ? Either.right(Duration.millis(diffMillis)) : Either.left(Duration.millis(-diffMillis));
});
/** @internal */
const distanceDuration = exports.distanceDuration = /*#__PURE__*/(0, _Function.dual)(2, (self, other) => Duration.millis(Math.abs(distance(self, other))));
/** @internal */
const min = exports.min = /*#__PURE__*/order.min(Order);
/** @internal */
const max = exports.max = /*#__PURE__*/order.max(Order);
/** @internal */
const greaterThan = exports.greaterThan = /*#__PURE__*/order.greaterThan(Order);
/** @internal */
const greaterThanOrEqualTo = exports.greaterThanOrEqualTo = /*#__PURE__*/order.greaterThanOrEqualTo(Order);
/** @internal */
const lessThan = exports.lessThan = /*#__PURE__*/order.lessThan(Order);
/** @internal */
const lessThanOrEqualTo = exports.lessThanOrEqualTo = /*#__PURE__*/order.lessThanOrEqualTo(Order);
/** @internal */
const between = exports.between = /*#__PURE__*/order.between(Order);
/** @internal */
const isFuture = self => core.map(now, lessThan(self));
/** @internal */
exports.isFuture = isFuture;
const unsafeIsFuture = self => lessThan(unsafeNow(), self);
/** @internal */
exports.unsafeIsFuture = unsafeIsFuture;
const isPast = self => core.map(now, greaterThan(self));
/** @internal */
exports.isPast = isPast;
const unsafeIsPast = self => greaterThan(unsafeNow(), self);
// =============================================================================
// conversions
// =============================================================================
/** @internal */
exports.unsafeIsPast = unsafeIsPast;
const toDateUtc = self => new Date(self.epochMillis);
/** @internal */
exports.toDateUtc = toDateUtc;
const toDate = self => {
  if (self._tag === "Utc") {
    return new Date(self.epochMillis);
  } else if (self.zone._tag === "Offset") {
    return new Date(self.epochMillis + self.zone.offset);
  } else if (self.adjustedEpochMillis !== undefined) {
    return new Date(self.adjustedEpochMillis);
  }
  const parts = self.zone.format.formatToParts(self.epochMillis).filter(_ => _.type !== "literal");
  const date = new Date(0);
  date.setUTCFullYear(Number(parts[2].value), Number(parts[0].value) - 1, Number(parts[1].value));
  date.setUTCHours(Number(parts[3].value), Number(parts[4].value), Number(parts[5].value), Number(parts[6].value));
  self.adjustedEpochMillis = date.getTime();
  return date;
};
/** @internal */
exports.toDate = toDate;
const zonedOffset = self => {
  const date = toDate(self);
  return date.getTime() - toEpochMillis(self);
};
exports.zonedOffset = zonedOffset;
const offsetToString = offset => {
  const abs = Math.abs(offset);
  let hours = Math.floor(abs / (60 * 60 * 1000));
  let minutes = Math.round(abs % (60 * 60 * 1000) / (60 * 1000));
  if (minutes === 60) {
    hours += 1;
    minutes = 0;
  }
  return `${offset < 0 ? "-" : "+"}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
};
/** @internal */
const zonedOffsetIso = self => offsetToString(zonedOffset(self));
/** @internal */
exports.zonedOffsetIso = zonedOffsetIso;
const toEpochMillis = self => self.epochMillis;
/** @internal */
exports.toEpochMillis = toEpochMillis;
const removeTime = self => withDate(self, date => {
  date.setUTCHours(0, 0, 0, 0);
  return makeUtc(date.getTime());
});
// =============================================================================
// parts
// =============================================================================
exports.removeTime = removeTime;
const dateToParts = date => ({
  millis: date.getUTCMilliseconds(),
  seconds: date.getUTCSeconds(),
  minutes: date.getUTCMinutes(),
  hours: date.getUTCHours(),
  day: date.getUTCDate(),
  weekDay: date.getUTCDay(),
  month: date.getUTCMonth() + 1,
  year: date.getUTCFullYear()
});
/** @internal */
const toParts = self => {
  if (self._tag === "Utc") {
    return toPartsUtc(self);
  } else if (self.partsAdjusted !== undefined) {
    return self.partsAdjusted;
  }
  self.partsAdjusted = withDate(self, dateToParts);
  return self.partsAdjusted;
};
/** @internal */
exports.toParts = toParts;
const toPartsUtc = self => {
  if (self.partsUtc !== undefined) {
    return self.partsUtc;
  }
  self.partsUtc = withDateUtc(self, dateToParts);
  return self.partsUtc;
};
/** @internal */
exports.toPartsUtc = toPartsUtc;
const getPartUtc = exports.getPartUtc = /*#__PURE__*/(0, _Function.dual)(2, (self, part) => toPartsUtc(self)[part]);
/** @internal */
const getPart = exports.getPart = /*#__PURE__*/(0, _Function.dual)(2, (self, part) => toParts(self)[part]);
const setPartsDate = (date, parts) => {
  if (parts.year !== undefined) {
    date.setUTCFullYear(parts.year);
  }
  if (parts.month !== undefined) {
    date.setUTCMonth(parts.month - 1);
  }
  if (parts.day !== undefined) {
    date.setUTCDate(parts.day);
  }
  if (parts.weekDay !== undefined) {
    const diff = parts.weekDay - date.getUTCDay();
    date.setUTCDate(date.getUTCDate() + diff);
  }
  if (parts.hours !== undefined) {
    date.setUTCHours(parts.hours);
  }
  if (parts.minutes !== undefined) {
    date.setUTCMinutes(parts.minutes);
  }
  if (parts.seconds !== undefined) {
    date.setUTCSeconds(parts.seconds);
  }
  if (parts.millis !== undefined) {
    date.setUTCMilliseconds(parts.millis);
  }
};
/** @internal */
const setParts = exports.setParts = /*#__PURE__*/(0, _Function.dual)(2, (self, parts) => mutate(self, date => setPartsDate(date, parts)));
/** @internal */
const setPartsUtc = exports.setPartsUtc = /*#__PURE__*/(0, _Function.dual)(2, (self, parts) => mutateUtc(self, date => setPartsDate(date, parts)));
// =============================================================================
// mapping
// =============================================================================
const constDayMillis = 24 * 60 * 60 * 1000;
const makeZonedFromAdjusted = (adjustedMillis, zone, disambiguation) => {
  if (zone._tag === "Offset") {
    return makeZonedProto(adjustedMillis - zone.offset, zone);
  }
  const beforeOffset = calculateNamedOffset(adjustedMillis - constDayMillis, adjustedMillis, zone);
  const afterOffset = calculateNamedOffset(adjustedMillis + constDayMillis, adjustedMillis, zone);
  // If there is no transition, we can return early
  if (beforeOffset === afterOffset) {
    return makeZonedProto(adjustedMillis - beforeOffset, zone);
  }
  const isForwards = beforeOffset < afterOffset;
  const transitionMillis = beforeOffset - afterOffset;
  // If the transition is forwards, we only need to check if we should move the
  // local wall clock time forward if it is inside the gap
  if (isForwards) {
    const currentAfterOffset = calculateNamedOffset(adjustedMillis - afterOffset, adjustedMillis, zone);
    if (currentAfterOffset === afterOffset) {
      return makeZonedProto(adjustedMillis - afterOffset, zone);
    }
    const before = makeZonedProto(adjustedMillis - beforeOffset, zone);
    const beforeAdjustedMillis = toDate(before).getTime();
    // If the wall clock time has changed, we are inside the gap
    if (adjustedMillis !== beforeAdjustedMillis) {
      switch (disambiguation) {
        case "reject":
          {
            const formatted = new Date(adjustedMillis).toISOString();
            throw new RangeError(`Gap time: ${formatted} does not exist in time zone ${zone.id}`);
          }
        case "earlier":
          return makeZonedProto(adjustedMillis - afterOffset, zone);
        case "compatible":
        case "later":
          return before;
      }
    }
    // The wall clock time is in the earlier offset, so we use that
    return before;
  }
  const currentBeforeOffset = calculateNamedOffset(adjustedMillis - beforeOffset, adjustedMillis, zone);
  // The wall clock time is in the earlier offset, so we use that
  if (currentBeforeOffset === beforeOffset) {
    if (disambiguation === "earlier" || disambiguation === "compatible") {
      return makeZonedProto(adjustedMillis - beforeOffset, zone);
    }
    const laterOffset = calculateNamedOffset(adjustedMillis - beforeOffset + transitionMillis, adjustedMillis + transitionMillis, zone);
    if (laterOffset === beforeOffset) {
      return makeZonedProto(adjustedMillis - beforeOffset, zone);
    }
    // If the offset changed in this period, then we are inside the period where
    // the wall clock time occurs twice, once in the earlier offset and once in
    // the later offset.
    if (disambiguation === "reject") {
      const formatted = new Date(adjustedMillis).toISOString();
      throw new RangeError(`Ambiguous time: ${formatted} occurs twice in time zone ${zone.id}`);
    }
    // If the disambiguation is "later", we return the later offset below
  }
  return makeZonedProto(adjustedMillis - afterOffset, zone);
};
const offsetRegex = /([+-])(\d{2}):(\d{2})$/;
const parseOffset = offset => {
  const match = offsetRegex.exec(offset);
  if (match === null) {
    return null;
  }
  const [, sign, hours, minutes] = match;
  return (sign === "+" ? 1 : -1) * (Number(hours) * 60 + Number(minutes)) * 60 * 1000;
};
const calculateNamedOffset = (utcMillis, adjustedMillis, zone) => {
  const offset = zone.format.formatToParts(utcMillis).find(_ => _.type === "timeZoneName")?.value ?? "";
  if (offset === "GMT") {
    return 0;
  }
  const result = parseOffset(offset);
  if (result === null) {
    // fallback to using the adjusted date
    return zonedOffset(makeZonedProto(adjustedMillis, zone));
  }
  return result;
};
/** @internal */
const mutate = exports.mutate = /*#__PURE__*/(0, _Function.dual)(isDateTimeArgs, (self, f, options) => {
  if (self._tag === "Utc") {
    const date = toDateUtc(self);
    f(date);
    return makeUtc(date.getTime());
  }
  const adjustedDate = toDate(self);
  const newAdjustedDate = new Date(adjustedDate.getTime());
  f(newAdjustedDate);
  return makeZonedFromAdjusted(newAdjustedDate.getTime(), self.zone, options?.disambiguation ?? "compatible");
});
/** @internal */
const mutateUtc = exports.mutateUtc = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => mapEpochMillis(self, millis => {
  const date = new Date(millis);
  f(date);
  return date.getTime();
}));
/** @internal */
const mapEpochMillis = exports.mapEpochMillis = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const millis = f(toEpochMillis(self));
  return self._tag === "Utc" ? makeUtc(millis) : makeZonedProto(millis, self.zone);
});
/** @internal */
const withDate = exports.withDate = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => f(toDate(self)));
/** @internal */
const withDateUtc = exports.withDateUtc = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => f(toDateUtc(self)));
/** @internal */
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => self._tag === "Utc" ? options.onUtc(self) : options.onZoned(self));
// =============================================================================
// math
// =============================================================================
/** @internal */
const addDuration = exports.addDuration = /*#__PURE__*/(0, _Function.dual)(2, (self, duration) => mapEpochMillis(self, millis => millis + Duration.toMillis(duration)));
/** @internal */
const subtractDuration = exports.subtractDuration = /*#__PURE__*/(0, _Function.dual)(2, (self, duration) => mapEpochMillis(self, millis => millis - Duration.toMillis(duration)));
const addMillis = (date, amount) => {
  date.setTime(date.getTime() + amount);
};
/** @internal */
const add = exports.add = /*#__PURE__*/(0, _Function.dual)(2, (self, parts) => mutate(self, date => {
  if (parts.millis) {
    addMillis(date, parts.millis);
  }
  if (parts.seconds) {
    addMillis(date, parts.seconds * 1000);
  }
  if (parts.minutes) {
    addMillis(date, parts.minutes * 60 * 1000);
  }
  if (parts.hours) {
    addMillis(date, parts.hours * 60 * 60 * 1000);
  }
  if (parts.days) {
    date.setUTCDate(date.getUTCDate() + parts.days);
  }
  if (parts.weeks) {
    date.setUTCDate(date.getUTCDate() + parts.weeks * 7);
  }
  if (parts.months) {
    const day = date.getUTCDate();
    date.setUTCMonth(date.getUTCMonth() + parts.months + 1, 0);
    if (day < date.getUTCDate()) {
      date.setUTCDate(day);
    }
  }
  if (parts.years) {
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    date.setUTCFullYear(date.getUTCFullYear() + parts.years, month + 1, 0);
    if (day < date.getUTCDate()) {
      date.setUTCDate(day);
    }
  }
}));
/** @internal */
const subtract = exports.subtract = /*#__PURE__*/(0, _Function.dual)(2, (self, parts) => {
  const newParts = {};
  for (const key in parts) {
    newParts[key] = -1 * parts[key];
  }
  return add(self, newParts);
});
const startOfDate = (date, part, options) => {
  switch (part) {
    case "second":
      {
        date.setUTCMilliseconds(0);
        break;
      }
    case "minute":
      {
        date.setUTCSeconds(0, 0);
        break;
      }
    case "hour":
      {
        date.setUTCMinutes(0, 0, 0);
        break;
      }
    case "day":
      {
        date.setUTCHours(0, 0, 0, 0);
        break;
      }
    case "week":
      {
        const weekStartsOn = options?.weekStartsOn ?? 0;
        const day = date.getUTCDay();
        const diff = (day - weekStartsOn + 7) % 7;
        date.setUTCDate(date.getUTCDate() - diff);
        date.setUTCHours(0, 0, 0, 0);
        break;
      }
    case "month":
      {
        date.setUTCDate(1);
        date.setUTCHours(0, 0, 0, 0);
        break;
      }
    case "year":
      {
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
        break;
      }
  }
};
/** @internal */
const startOf = exports.startOf = /*#__PURE__*/(0, _Function.dual)(isDateTimeArgs, (self, part, options) => mutate(self, date => startOfDate(date, part, options)));
const endOfDate = (date, part, options) => {
  switch (part) {
    case "second":
      {
        date.setUTCMilliseconds(999);
        break;
      }
    case "minute":
      {
        date.setUTCSeconds(59, 999);
        break;
      }
    case "hour":
      {
        date.setUTCMinutes(59, 59, 999);
        break;
      }
    case "day":
      {
        date.setUTCHours(23, 59, 59, 999);
        break;
      }
    case "week":
      {
        const weekStartsOn = options?.weekStartsOn ?? 0;
        const day = date.getUTCDay();
        const diff = (day - weekStartsOn + 7) % 7;
        date.setUTCDate(date.getUTCDate() - diff + 6);
        date.setUTCHours(23, 59, 59, 999);
        break;
      }
    case "month":
      {
        date.setUTCMonth(date.getUTCMonth() + 1, 0);
        date.setUTCHours(23, 59, 59, 999);
        break;
      }
    case "year":
      {
        date.setUTCMonth(11, 31);
        date.setUTCHours(23, 59, 59, 999);
        break;
      }
  }
};
/** @internal */
const endOf = exports.endOf = /*#__PURE__*/(0, _Function.dual)(isDateTimeArgs, (self, part, options) => mutate(self, date => endOfDate(date, part, options)));
/** @internal */
const nearest = exports.nearest = /*#__PURE__*/(0, _Function.dual)(isDateTimeArgs, (self, part, options) => mutate(self, date => {
  if (part === "milli") return;
  const millis = date.getTime();
  const start = new Date(millis);
  startOfDate(start, part, options);
  const startMillis = start.getTime();
  const end = new Date(millis);
  endOfDate(end, part, options);
  const endMillis = end.getTime() + 1;
  const diffStart = millis - startMillis;
  const diffEnd = endMillis - millis;
  if (diffStart < diffEnd) {
    date.setTime(startMillis);
  } else {
    date.setTime(endMillis);
  }
}));
// =============================================================================
// formatting
// =============================================================================
const intlTimeZone = self => {
  if (self._tag === "Named") {
    return self.id;
  }
  return offsetToString(self.offset);
};
/** @internal */
const format = exports.format = /*#__PURE__*/(0, _Function.dual)(isDateTimeArgs, (self, options) => {
  try {
    return new Intl.DateTimeFormat(options?.locale, {
      timeZone: self._tag === "Utc" ? "UTC" : intlTimeZone(self.zone),
      ...options
    }).format(self.epochMillis);
  } catch {
    return new Intl.DateTimeFormat(options?.locale, {
      timeZone: "UTC",
      ...options
    }).format(toDate(self));
  }
});
/** @internal */
const formatLocal = exports.formatLocal = /*#__PURE__*/(0, _Function.dual)(isDateTimeArgs, (self, options) => new Intl.DateTimeFormat(options?.locale, options).format(self.epochMillis));
/** @internal */
const formatUtc = exports.formatUtc = /*#__PURE__*/(0, _Function.dual)(isDateTimeArgs, (self, options) => new Intl.DateTimeFormat(options?.locale, {
  ...options,
  timeZone: "UTC"
}).format(self.epochMillis));
/** @internal */
const formatIntl = exports.formatIntl = /*#__PURE__*/(0, _Function.dual)(2, (self, format) => format.format(self.epochMillis));
/** @internal */
const formatIso = self => toDateUtc(self).toISOString();
/** @internal */
exports.formatIso = formatIso;
const formatIsoDate = self => toDate(self).toISOString().slice(0, 10);
/** @internal */
exports.formatIsoDate = formatIsoDate;
const formatIsoDateUtc = self => toDateUtc(self).toISOString().slice(0, 10);
/** @internal */
exports.formatIsoDateUtc = formatIsoDateUtc;
const formatIsoOffset = self => {
  const date = toDate(self);
  return self._tag === "Utc" ? date.toISOString() : `${date.toISOString().slice(0, -1)}${zonedOffsetIso(self)}`;
};
/** @internal */
exports.formatIsoOffset = formatIsoOffset;
const formatIsoZoned = self => self.zone._tag === "Offset" ? formatIsoOffset(self) : `${formatIsoOffset(self)}[${self.zone.id}]`;
exports.formatIsoZoned = formatIsoZoned;
//# sourceMappingURL=dateTime.js.map