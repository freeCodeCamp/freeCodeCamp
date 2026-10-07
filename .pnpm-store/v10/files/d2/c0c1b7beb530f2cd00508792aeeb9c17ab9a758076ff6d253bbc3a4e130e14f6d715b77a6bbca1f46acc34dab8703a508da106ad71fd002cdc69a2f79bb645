import Benchmark from "benchmark";

const datetimeValidationSuite = new Benchmark.Suite("datetime");

const DATA = "2021-01-01";
const MONTHS_31 = new Set([1, 3, 5, 7, 8, 10, 12]);
const MONTHS_30 = new Set([4, 6, 9, 11]);

const simpleDatetimeRegex = /^(\d{4})-(\d{2})-(\d{2})$/;
const datetimeRegexNoLeapYearValidation =
  /^\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d))$/;
const datetimeRegexWithLeapYearValidation =
  /^((\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\d|3[01])|(0[469]|11)-(0[1-9]|[12]\d|30)|(02)-(0[1-9]|1\d|2[0-8])))$/;

datetimeValidationSuite
  .add("new Date()", () => {
    return !Number.isNaN(new Date(DATA).getTime());
  })
  .add("regex (no validation)", () => {
    return simpleDatetimeRegex.test(DATA);
  })
  .add("regex (no leap year)", () => {
    return datetimeRegexNoLeapYearValidation.test(DATA);
  })
  .add("regex (w/ leap year)", () => {
    return datetimeRegexWithLeapYearValidation.test(DATA);
  })
  .add("capture groups + code", () => {
    const match = DATA.match(simpleDatetimeRegex);
    if (!match) return false;

    // Extract year, month, and day from the capture groups
    const year = Number.parseInt(match[1], 10);
    const month = Number.parseInt(match[2], 10); // month is 0-indexed in JavaScript Date, so subtract 1
    const day = Number.parseInt(match[3], 10);

    if (month === 2) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return day <= 29;
      }
      return day <= 28;
    }
    if (MONTHS_30.has(month)) {
      return day <= 30;
    }
    if (MONTHS_31.has(month)) {
      return day <= 31;
    }
    return false;
  })

  .on("cycle", (e: Benchmark.Event) => {
    console.log(`${datetimeValidationSuite.name!}: ${e.target}`);
  });

export default {
  suites: [datetimeValidationSuite],
};
