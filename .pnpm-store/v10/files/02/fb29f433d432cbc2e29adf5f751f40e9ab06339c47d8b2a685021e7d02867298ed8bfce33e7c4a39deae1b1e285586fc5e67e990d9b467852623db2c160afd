import { getAbsoluteMappingEntries } from "../mapping-entry";
import { join } from "path";

describe("mapping-entry", () => {
  it("should change to absolute paths and sort in longest prefix order", () => {
    const result = getAbsoluteMappingEntries(
      "/absolute/base/url",
      {
        "*": ["/foo1", "/foo2"],
        "longest/pre/fix/*": ["/foo2/bar"],
        "pre/fix/*": ["/foo3"],
      },
      true
    );
    // assert.deepEqual(result, [
    //   {
    //     pattern: "longest/pre/fix/*",
    //     paths: [join("/absolute", "base", "url", "foo2", "bar")],
    //   },
    //   {
    //     pattern: "pre/fix/*",
    //     paths: [join("/absolute", "base", "url", "foo3")],
    //   },
    //   {
    //     pattern: "*",
    //     paths: [
    //       join("/absolute", "base", "url", "foo1"),
    //       join("/absolute", "base", "url", "foo2"),
    //     ],
    //   },
    // ]);
    expect(result).toEqual([
      {
        pattern: "longest/pre/fix/*",
        paths: [join("/absolute", "base", "url", "foo2", "bar")],
      },
      {
        pattern: "pre/fix/*",
        paths: [join("/absolute", "base", "url", "foo3")],
      },
      {
        pattern: "*",
        paths: [
          join("/absolute", "base", "url", "foo1"),
          join("/absolute", "base", "url", "foo2"),
        ],
      },
    ]);
  });

  it("should should add a match-all pattern when requested", () => {
    let result = getAbsoluteMappingEntries("/absolute/base/url", {}, true);
    // assert.deepEqual(result, [
    //   {
    //     pattern: "*",
    //     paths: [join("/absolute", "base", "url", "*")],
    //   },
    // ]);
    expect(result).toEqual([
      {
        pattern: "*",
        paths: [join("/absolute", "base", "url", "*")],
      },
    ]);

    result = getAbsoluteMappingEntries("/absolute/base/url", {}, false);
    // assert.deepEqual(result, []);
    expect(result).toEqual([]);
  });
});
