import { constructFrom } from "../../constructFrom.js";
import { transpose } from "../../transpose.js";

const TIMEZONE_UNIT_PRIORITY = 10;

export class Setter {
  subPriority = 0;

  validate(_utcDate, _options) {
    return true;
  }
}

export class ValueSetter extends Setter {
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

export class DateTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;

  constructor(context, reference) {
    super();
    this.context = context || ((date) => constructFrom(reference, date));
  }

  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return constructFrom(date, transpose(date, this.context));
  }
}
