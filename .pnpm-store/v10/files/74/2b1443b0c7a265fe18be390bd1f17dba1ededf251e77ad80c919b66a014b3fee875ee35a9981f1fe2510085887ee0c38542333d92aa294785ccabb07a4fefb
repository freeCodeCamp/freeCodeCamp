import { checkSync } from "recheck";
import { expect, test } from "vitest";
import * as z from "zod/v4";

test("basic datetime parsing", () => {
  const datetime = z.string().datetime();
  datetime.parse("1970-01-01T00:00:00.000Z");
  datetime.parse("2022-10-13T09:52:31.816Z");
  datetime.parse("2022-10-13T09:52:31.8162314Z");
  datetime.parse("1970-01-01T00:00:00Z");
  datetime.parse("2022-10-13T09:52:31Z");
  expect(() => datetime.parse("")).toThrow();
  expect(() => datetime.parse("foo")).toThrow();
  expect(() => datetime.parse("2020-10-14")).toThrow();
  expect(() => datetime.parse("T18:45:12.123")).toThrow();
  expect(() => datetime.parse("2020-10-14T17:42:29+00:00")).toThrow();
});

test("datetime parsing with precision -1", () => {
  const datetimeNoMs = z.string().datetime({ precision: -1, offset: true, local: true });
  datetimeNoMs.parse("1970-01-01T00:00Z");
  datetimeNoMs.parse("2022-10-13T09:52Z");
  datetimeNoMs.parse("2022-10-13T09:52+02:00");

  datetimeNoMs.parse("2022-10-13T09:52");
  expect(() => datetimeNoMs.parse("tuna")).toThrow();
  expect(() => datetimeNoMs.parse("2022-10-13T09:52+02")).toThrow();
  expect(() => datetimeNoMs.parse("1970-01-01T00:00:00.000Z")).toThrow();
  expect(() => datetimeNoMs.parse("1970-01-01T00:00:00.Z")).toThrow();
  expect(() => datetimeNoMs.parse("2022-10-13T09:52:31.816Z")).toThrow();
});

test("datetime parsing with precision 0", () => {
  const datetimeNoMs = z.string().datetime({ precision: 0 });
  datetimeNoMs.parse("1970-01-01T00:00:00Z");
  datetimeNoMs.parse("2022-10-13T09:52:31Z");
  expect(() => datetimeNoMs.parse("tuna")).toThrow();
  expect(() => datetimeNoMs.parse("1970-01-01T00:00:00.000Z")).toThrow();
  expect(() => datetimeNoMs.parse("1970-01-01T00:00:00.Z")).toThrow();
  expect(() => datetimeNoMs.parse("2022-10-13T09:52:31.816Z")).toThrow();
});

test("datetime parsing with precision 3", () => {
  const datetime3Ms = z.string().datetime({ precision: 3 });
  datetime3Ms.parse("1970-01-01T00:00:00.000Z");
  datetime3Ms.parse("2022-10-13T09:52:31.123Z");
  expect(() => datetime3Ms.parse("tuna")).toThrow();
  expect(() => datetime3Ms.parse("1970-01-01T00:00:00.1Z")).toThrow();
  expect(() => datetime3Ms.parse("1970-01-01T00:00:00.12Z")).toThrow();
  expect(() => datetime3Ms.parse("2022-10-13T09:52:31Z")).toThrow();
});

test("datetime parsing with offset", () => {
  const datetimeOffset = z.string().datetime({ offset: true });
  datetimeOffset.parse("1970-01-01T00:00:00.000Z");
  datetimeOffset.parse("2022-10-13T09:52:31.816234134Z");
  datetimeOffset.parse("1970-01-01T00:00:00Z");
  datetimeOffset.parse("2022-10-13T09:52:31.4Z");
  datetimeOffset.parse("2020-10-14T17:42:29+00:00");
  datetimeOffset.parse("2020-10-14T17:42:29+03:15");
  expect(() => datetimeOffset.parse("2020-10-14T17:42:29+0315")).toThrow();
  expect(() => datetimeOffset.parse("2020-10-14T17:42:29+03")).toThrow();
  expect(() => datetimeOffset.parse("tuna")).toThrow();
  expect(() => datetimeOffset.parse("2022-10-13T09:52:31.Z")).toThrow();
});

test("datetime parsing with offset and precision 0", () => {
  const datetimeOffsetNoMs = z.string().datetime({ offset: true, precision: 0 });
  datetimeOffsetNoMs.parse("1970-01-01T00:00:00Z");
  datetimeOffsetNoMs.parse("2022-10-13T09:52:31Z");
  datetimeOffsetNoMs.parse("2020-10-14T17:42:29+00:00");
  expect(() => datetimeOffsetNoMs.parse("2020-10-14T17:42:29+0000")).toThrow();
  expect(() => datetimeOffsetNoMs.parse("2020-10-14T17:42:29+00")).toThrow();
  expect(() => datetimeOffsetNoMs.parse("tuna")).toThrow();
  expect(() => datetimeOffsetNoMs.parse("1970-01-01T00:00:00.000Z")).toThrow();
  expect(() => datetimeOffsetNoMs.parse("1970-01-01T00:00:00.Z")).toThrow();
  expect(() => datetimeOffsetNoMs.parse("2022-10-13T09:52:31.816Z")).toThrow();
  expect(() => datetimeOffsetNoMs.parse("2020-10-14T17:42:29.124+00:00")).toThrow();
});

test("datetime parsing with offset and precision 4", () => {
  const datetimeOffset4Ms = z.string().datetime({ offset: true, precision: 4 });
  datetimeOffset4Ms.parse("1970-01-01T00:00:00.1234Z");
  datetimeOffset4Ms.parse("2020-10-14T17:42:29.1234+00:00");
  expect(() => datetimeOffset4Ms.parse("2020-10-14T17:42:29.1234+0000")).toThrow();
  expect(() => datetimeOffset4Ms.parse("2020-10-14T17:42:29.1234+00")).toThrow();
  expect(() => datetimeOffset4Ms.parse("tuna")).toThrow();
  expect(() => datetimeOffset4Ms.parse("1970-01-01T00:00:00.123Z")).toThrow();
  expect(() => datetimeOffset4Ms.parse("2020-10-14T17:42:29.124+00:00")).toThrow();
});

test("datetime offset normalization", () => {
  const a = z.iso.datetime({ offset: true });

  expect(a.safeParse("2020-10-14T17:42:29+02")).toMatchObject({ success: false });
  expect(a.safeParse("2020-10-14T17:42:29+0200")).toMatchObject({ success: false });
  a.safeParse("2020-10-14T17:42:29+02:00");
});

test("datetime parsing with local option", () => {
  const a = z.string().datetime({ local: true });

  expect(a.safeParse("1970-01-01T00:00")).toMatchObject({ success: true });
  expect(a.safeParse("1970-01-01T00:00:00")).toMatchObject({ success: true });
  expect(a.safeParse("2022-10-13T09:52:31.816")).toMatchObject({ success: true });
  expect(a.safeParse("1970-01-01T00:00:00.000")).toMatchObject({ success: true });
  expect(a.safeParse("1970-01-01T00")).toMatchObject({ success: false });

  // Should reject timezone indicators and invalid formats

  expect(() => a.parse("2022-10-13T09:52:31+00:00")).toThrow();
  expect(() => a.parse("2022-10-13 09:52:31")).toThrow();
  expect(() => a.parse("2022-10-13T24:52:31")).toThrow();
  expect(() => a.parse("2022-10-13T24:52")).toThrow();
  expect(() => a.parse("2022-10-13T24:52Z")).toThrow();
});

test("datetime parsing with local and offset", () => {
  const a = z.string().datetime({ local: true, offset: true });

  // expect(a.parse("2022-10-13T12:52")).toEqual("2022-10-13T12:52:00");
  a.parse("2022-10-13T12:52:00");
  a.parse("2022-10-13T12:52:00Z");
  a.parse("2022-10-13T12:52Z");
  a.parse("2022-10-13T12:52");
  a.parse("2022-10-13T12:52+02:00");
  expect(() => a.parse("2022-10-13T12:52:00+02")).toThrow();
  // expect(() => a.parse("2022-10-13T12:52Z")).toThrow();
  // expect(() => a.parse("2022-10-13T12:52+02:00")).toThrow();
});

test("date parsing", () => {
  const date = z.string().date();
  date.parse("1970-01-01");
  date.parse("2022-01-31");
  date.parse("2022-03-31");
  date.parse("2022-04-30");
  date.parse("2022-05-31");
  date.parse("2022-06-30");
  date.parse("2022-07-31");
  date.parse("2022-08-31");
  date.parse("2022-09-30");
  date.parse("2022-10-31");
  date.parse("2022-11-30");
  date.parse("2022-12-31");

  date.parse("2000-02-29");
  date.parse("2400-02-29");
  expect(() => date.parse("2022-02-29")).toThrow();
  expect(() => date.parse("2100-02-29")).toThrow();
  expect(() => date.parse("2200-02-29")).toThrow();
  expect(() => date.parse("2300-02-29")).toThrow();
  expect(() => date.parse("2500-02-29")).toThrow();

  expect(() => date.parse("")).toThrow();
  expect(() => date.parse("foo")).toThrow();
  expect(() => date.parse("200-01-01")).toThrow();
  expect(() => date.parse("20000-01-01")).toThrow();
  expect(() => date.parse("2000-0-01")).toThrow();
  expect(() => date.parse("2000-011-01")).toThrow();
  expect(() => date.parse("2000-01-0")).toThrow();
  expect(() => date.parse("2000-01-011")).toThrow();
  expect(() => date.parse("2000/01/01")).toThrow();
  expect(() => date.parse("01-01-2022")).toThrow();
  expect(() => date.parse("01/01/2022")).toThrow();
  expect(() => date.parse("2000-01-01 00:00:00Z")).toThrow();
  expect(() => date.parse("2020-10-14T17:42:29+00:00")).toThrow();
  expect(() => date.parse("2020-10-14T17:42:29Z")).toThrow();
  expect(() => date.parse("2020-10-14T17:42:29")).toThrow();
  expect(() => date.parse("2020-10-14T17:42:29.123Z")).toThrow();

  expect(() => date.parse("2000-00-12")).toThrow();
  expect(() => date.parse("2000-12-00")).toThrow();
  expect(() => date.parse("2000-01-32")).toThrow();
  expect(() => date.parse("2000-13-01")).toThrow();
  expect(() => date.parse("2000-21-01")).toThrow();

  expect(() => date.parse("2000-02-30")).toThrow();
  expect(() => date.parse("2000-02-31")).toThrow();
  expect(() => date.parse("2000-04-31")).toThrow();
  expect(() => date.parse("2000-06-31")).toThrow();
  expect(() => date.parse("2000-09-31")).toThrow();
  expect(() => date.parse("2000-11-31")).toThrow();
});

test("time parsing", () => {
  const time = z.string().time();
  time.parse("00:00:00");
  time.parse("23:00:00");
  time.parse("00:59:00");
  time.parse("00:00:59");
  time.parse("23:59:59");
  time.parse("09:52:31");
  time.parse("23:59:59.9999999");
  time.parse("00:00");
  expect(() => time.parse("")).toThrow();
  expect(() => time.parse("foo")).toThrow();
  expect(() => time.parse("00:00:00Z")).toThrow();
  expect(() => time.parse("0:00:00")).toThrow();
  expect(() => time.parse("00:0:00")).toThrow();
  expect(() => time.parse("00:00:0")).toThrow();
  expect(() => time.parse("00:00:00.000+00:00")).toThrow();
  expect(() => time.parse("24:00:00")).toThrow();
  expect(() => time.parse("00:60:00")).toThrow();
  expect(() => time.parse("00:00:60")).toThrow();
  expect(() => time.parse("24:60:60")).toThrow();

  const time2 = z.string().time({ precision: 2 });
  time2.parse("00:00:00.00");
  time2.parse("09:52:31.12");
  time2.parse("23:59:59.99");
  expect(() => time2.parse("")).toThrow();
  expect(() => time2.parse("foo")).toThrow();
  expect(() => time2.parse("00:00:00")).toThrow();
  expect(() => time2.parse("00:00:00.00Z")).toThrow();
  expect(() => time2.parse("00:00:00.0")).toThrow();
  expect(() => time2.parse("00:00:00.000")).toThrow();
  expect(() => time2.parse("00:00:00.00+00:00")).toThrow();

  const time3 = z.string().time({ precision: z.TimePrecision.Minute });
  time3.parse("00:00");
  expect(() => time3.parse("00:00:00")).toThrow();
});

test("duration", () => {
  const duration = z.string().duration();

  const validDurations = [
    "P3Y6M4DT12H30M5S",
    "P2Y9M3DT12H31M8.001S",
    // "+P3Y6M4DT12H30M5S",
    // "-PT0.001S",
    // "+PT0.001S",
    "PT0,001S",
    "PT12H30M5S",
    // "-P2M1D",
    // "P-2M-1D",
    // "-P5DT10H",
    // "P-5DT-10H",
    "P1Y",
    "P2MT30M",
    "PT6H",
    "P5W",
    // "P0.5Y",
    // "P0,5Y",
    // "P42YT7.004M",
  ];

  const invalidDurations = [
    "foo bar",
    "",
    " ",
    "P",
    "PT",
    "P1Y2MT",
    "T1H",
    "P0.5Y1D",
    "P0,5Y6M",
    "P1YT",
    "P-2M-1D",
    "P-5DT-10H",
    "P1W2D",
    "-P1D",
  ];

  for (const val of validDurations) {
    const result = duration.safeParse(val);
    if (!result.success) {
      throw Error(`Valid duration could not be parsed: ${val}`);
    }
  }

  for (const val of invalidDurations) {
    const result = duration.safeParse(val);

    if (result.success) {
      throw Error(`Invalid duration was successful parsed: ${val}`);
    }

    expect(result.error.issues[0].message).toEqual("Invalid ISO duration");
  }
});

test("redos checker", () => {
  const a = z.iso.datetime();
  const b = z.string().datetime({ offset: true });
  const c = z.string().datetime({ local: true });
  const d = z.string().datetime({ local: true, offset: true, precision: 3 });
  const e = z.string().date();
  const f = z.string().time();
  const g = z.string().duration();
  for (const schema of [a, b, c, d, e, f, g]) {
    const result = checkSync(schema._zod.pattern.source, "");
    if (result.status !== "safe") throw Error("ReDoS issue");
  }
});
