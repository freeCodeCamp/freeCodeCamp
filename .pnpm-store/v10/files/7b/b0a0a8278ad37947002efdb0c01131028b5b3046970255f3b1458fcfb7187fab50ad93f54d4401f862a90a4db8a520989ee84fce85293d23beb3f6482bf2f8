"use strict";
exports.ValueSetter = exports.Setter = exports.DateTimezoneSetter = void 0;
var _index = require("../../constructFrom.cjs");
var _index2 = require("../../transpose.cjs");

const TIMEZONE_UNIT_PRIORITY = 10;

class Setter {
  subPriority = 0;

  validate(_utcDate, _options) {
    return true;
  }
}
exports.Setter = Setter;

class ValueSetter extends Setter {
  constructor(
    value,

    validateValue,

    setValue,

    priority,
    subPriority,
  ) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }

  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }

  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
  }
}
exports.ValueSetter = ValueSetter;

class DateTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;

  constructor(context, reference) {
    super();
    this.context =
      context || ((date) => (0, _index.constructFrom)(reference, date));
  }

  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return (0, _index.constructFrom)(
      date,
      (0, _index2.transpose)(date, this.context),
    );
  }
}
exports.DateTimezoneSetter = DateTimezoneSetter;
