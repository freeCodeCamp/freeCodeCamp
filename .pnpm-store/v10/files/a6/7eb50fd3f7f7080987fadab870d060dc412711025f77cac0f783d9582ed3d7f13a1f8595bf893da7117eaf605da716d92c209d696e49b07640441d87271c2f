import { _toBool, _toNum, _toStr } from "./coercing-serializers";

const consoleWarn = console.warn;

beforeAll(() => {
  console.warn = () => {};
});

afterAll(() => {
  console.warn = consoleWarn;
});

describe(_toBool.name, () => {
  it("ignores nullish", () => {
    expect(_toBool(null)).toBe(null);
    expect(_toBool(undefined)).toBe(undefined);
  });

  it("converts strings", () => {
    expect(_toBool("false")).toEqual(false);
    expect(_toBool("true")).toEqual(true);

    expect(_toBool("False")).toEqual(false);
    expect(_toBool("True")).toEqual(true);

    expect(_toBool("")).toEqual(false);
    expect(_toBool("a")).toEqual(true); // warns
  });

  it("does not convert numbers", () => {
    expect(_toBool(0)).toEqual(0);
    expect(_toBool(1)).toEqual(1);
  });
});

describe(_toStr.name, () => {
  it("ignores nullish", () => {
    expect(_toStr(null)).toBe(null);
    expect(_toStr(undefined)).toBe(undefined);
  });

  it("converts numbers", () => {
    expect(_toStr(0)).toEqual("0");
    expect(_toStr(1)).toEqual("1");
  });

  it("converts booleans", () => {
    expect(_toStr(false)).toEqual("false");
    expect(_toStr(true)).toEqual("true");
  });
});

describe(_toNum.name, () => {
  it("ignores nullish", () => {
    expect(_toNum(null)).toBe(null);
    expect(_toNum(undefined)).toBe(undefined);
  });

  it("converts numeric strings", () => {
    expect(_toNum("1234")).toEqual(1234);
    expect(_toNum("1234.56")).toEqual(1234.56);
  });

  it("does not convert prefix-numeric strings", () => {
    expect(_toNum("1234abc")).toEqual("1234abc");
    expect(_toNum("1234.56abc")).toEqual("1234.56abc");
  });

  it("does not convert non-numeric strings", () => {
    expect(_toNum("abcdef")).toEqual("abcdef");
  });
  it("does not convert bools", () => {
    expect(_toNum(false)).toEqual(false);
    expect(_toNum(true)).toEqual(true);
  });
});
