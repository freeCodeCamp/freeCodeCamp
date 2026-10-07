"use strict";

const promisify = require("util.promisify");
const gensync = require("../");

const TEST_ERROR = new Error("TEST_ERROR");

const DID_ERROR = new Error("DID_ERROR");

const doSuccess = gensync({
  sync: () => 42,
  async: () => Promise.resolve(42),
});

const doError = gensync({
  sync: () => {
    throw DID_ERROR;
  },
  async: () => Promise.reject(DID_ERROR),
});

function throwTestError() {
  throw TEST_ERROR;
}

async function expectResult(
  fn,
  arg,
  { error, value, expectSync = false, syncErrback = expectSync }
) {
  if (!expectSync) {
    expect(() => fn.sync(arg)).toThrow(TEST_ERROR);
  } else if (error) {
    expect(() => fn.sync(arg)).toThrow(error);
  } else {
    expect(fn.sync(arg)).toBe(value);
  }

  if (error) {
    await expect(fn.async(arg)).rejects.toBe(error);
  } else {
    await expect(fn.async(arg)).resolves.toBe(value);
  }

  await new Promise((resolve, reject) => {
    let sync = true;
    fn.errback(arg, (err, val) => {
      try {
        expect(err).toBe(error);
        expect(val).toBe(value);
        expect(sync).toBe(syncErrback);

        resolve();
      } catch (e) {
        reject(e);
      }
    });
    sync = false;
  });
}

describe("gensync({})", () => {
  describe("option validation", () => {
    test("disallow async and errback handler together", () => {
      try {
        gensync({
          sync: throwTestError,
          async: throwTestError,
          errback: throwTestError,
        });

        throwTestError();
      } catch (err) {
        expect(err.message).toMatch(
          /Expected one of either opts.async or opts.errback, but got _both_\./
        );
        expect(err.code).toBe("GENSYNC_OPTIONS_ERROR");
      }
    });

    test("disallow missing sync handler", () => {
      try {
        gensync({
          async: throwTestError,
        });

        throwTestError();
      } catch (err) {
        expect(err.message).toMatch(/Expected opts.sync to be a function./);
        expect(err.code).toBe("GENSYNC_OPTIONS_ERROR");
      }
    });

    test("errback callback required", () => {
      const fn = gensync({
        sync: throwTestError,
        async: throwTestError,
      });

      try {
        fn.errback();

        throwTestError();
      } catch (err) {
        expect(err.message).toMatch(/function called without callback/);
        expect(err.code).toBe("GENSYNC_ERRBACK_NO_CALLBACK");
      }
    });
  });

  describe("generator function metadata", () => {
    test("automatic naming", () => {
      expect(
        gensync({
          sync: function readFileSync() {},
          async: () => {},
        }).name
      ).toBe("readFile");
      expect(
        gensync({
          sync: function readFile() {},
          async: () => {},
        }).name
      ).toBe("readFile");
      expect(
        gensync({
          sync: function readFileAsync() {},
          async: () => {},
        }).name
      ).toBe("readFileAsync");

      expect(
        gensync({
          sync: () => {},
          async: function readFileSync() {},
        }).name
      ).toBe("readFileSync");
      expect(
        gensync({
          sync: () => {},
          async: function readFile() {},
        }).name
      ).toBe("readFile");
      expect(
        gensync({
          sync: () => {},
          async: function readFileAsync() {},
        }).name
      ).toBe("readFile");

      expect(
        gensync({
          sync: () => {},
          errback: function readFileSync() {},
        }).name
      ).toBe("readFileSync");
      expect(
        gensync({
          sync: () => {},
          errback: function readFile() {},
        }).name
      ).toBe("readFile");
      expect(
        gensync({
          sync: () => {},
          errback: function readFileAsync() {},
        }).name
      ).toBe("readFileAsync");
    });

    test("explicit naming", () => {
      expect(
        gensync({
          name: "readFile",
          sync: () => {},
          async: () => {},
        }).name
      ).toBe("readFile");
    });

    test("default arity", () => {
      expect(
        gensync({
          sync: function(a, b, c, d, e, f, g) {
            throwTestError();
          },
          async: throwTestError,
        }).length
      ).toBe(7);
    });

    test("explicit arity", () => {
      expect(
        gensync({
          arity: 3,
          sync: throwTestError,
          async: throwTestError,
        }).length
      ).toBe(3);
    });
  });

  describe("'sync' handler", async () => {
    test("success", async () => {
      const fn = gensync({
        sync: (...args) => JSON.stringify(args),
      });

      await expectResult(fn, 42, { value: "[42]", expectSync: true });
    });

    test("failure", async () => {
      const fn = gensync({
        sync: (...args) => {
          throw JSON.stringify(args);
        },
      });

      await expectResult(fn, 42, { error: "[42]", expectSync: true });
    });
  });

  describe("'async' handler", async () => {
    test("success", async () => {
      const fn = gensync({
        sync: throwTestError,
        async: (...args) => Promise.resolve(JSON.stringify(args)),
      });

      await expectResult(fn, 42, { value: "[42]" });
    });

    test("failure", async () => {
      const fn = gensync({
        sync: throwTestError,
        async: (...args) => Promise.reject(JSON.stringify(args)),
      });

      await expectResult(fn, 42, { error: "[42]" });
    });
  });

  describe("'errback' sync handler", async () => {
    test("success", async () => {
      const fn = gensync({
        sync: throwTestError,
        errback: (...args) => args.pop()(null, JSON.stringify(args)),
      });

      await expectResult(fn, 42, { value: "[42]", syncErrback: true });
    });

    test("failure", async () => {
      const fn = gensync({
        sync: throwTestError,
        errback: (...args) => args.pop()(JSON.stringify(args)),
      });

      await expectResult(fn, 42, { error: "[42]", syncErrback: true });
    });
  });

  describe("'errback' async handler", async () => {
    test("success", async () => {
      const fn = gensync({
        sync: throwTestError,
        errback: (...args) =>
          process.nextTick(() => args.pop()(null, JSON.stringify(args))),
      });

      await expectResult(fn, 42, { value: "[42]" });
    });

    test("failure", async () => {
      const fn = gensync({
        sync: throwTestError,
        errback: (...args) =>
          process.nextTick(() => args.pop()(JSON.stringify(args))),
      });

      await expectResult(fn, 42, { error: "[42]" });
    });
  });
});

describe("gensync(function* () {})", () => {
  test("sync throw before body", async () => {
    const fn = gensync(function*(arg = throwTestError()) {});

    await expectResult(fn, undefined, {
      error: TEST_ERROR,
      syncErrback: true,
    });
  });

  test("sync throw inside body", async () => {
    const fn = gensync(function*() {
      throwTestError();
    });

    await expectResult(fn, undefined, {
      error: TEST_ERROR,
      syncErrback: true,
    });
  });

  test("async throw inside body", async () => {
    const fn = gensync(function*() {
      const val = yield* doSuccess();
      throwTestError();
    });

    await expectResult(fn, undefined, {
      error: TEST_ERROR,
    });
  });

  test("error inside body", async () => {
    const fn = gensync(function*() {
      yield* doError();
    });

    await expectResult(fn, undefined, {
      error: DID_ERROR,
      expectSync: true,
      syncErrback: false,
    });
  });

  test("successful return value", async () => {
    const fn = gensync(function*() {
      const value = yield* doSuccess();

      expect(value).toBe(42);

      return 84;
    });

    await expectResult(fn, undefined, {
      value: 84,
      expectSync: true,
      syncErrback: false,
    });
  });

  test("successful final value", async () => {
    const fn = gensync(function*() {
      return 42;
    });

    await expectResult(fn, undefined, {
      value: 42,
      expectSync: true,
    });
  });

  test("yield unexpected object", async () => {
    const fn = gensync(function*() {
      yield {};
    });

    try {
      await fn.async();

      throwTestError();
    } catch (err) {
      expect(err.message).toMatch(
        /Got unexpected yielded value in gensync generator/
      );
      expect(err.code).toBe("GENSYNC_EXPECTED_START");
    }
  });

  test("yield suspend yield", async () => {
    const fn = gensync(function*() {
      yield Symbol.for("gensync:v1:start");

      // Should be "yield*" for no error.
      yield {};
    });

    try {
      await fn.async();

      throwTestError();
    } catch (err) {
      expect(err.message).toMatch(/Expected GENSYNC_SUSPEND, got {}/);
      expect(err.code).toBe("GENSYNC_EXPECTED_SUSPEND");
    }
  });

  test("yield suspend return", async () => {
    const fn = gensync(function*() {
      yield Symbol.for("gensync:v1:start");

      // Should be "yield*" for no error.
      return {};
    });

    try {
      await fn.async();

      throwTestError();
    } catch (err) {
      expect(err.message).toMatch(/Unexpected generator completion/);
      expect(err.code).toBe("GENSYNC_EXPECTED_SUSPEND");
    }
  });
});

describe("gensync.all()", () => {
  test("success", async () => {
    const fn = gensync(function*() {
      const result = yield* gensync.all([doSuccess(), doSuccess()]);

      expect(result).toEqual([42, 42]);
    });

    await expectResult(fn, undefined, {
      value: undefined,
      expectSync: true,
      syncErrback: false,
    });
  });

  test("error first", async () => {
    const fn = gensync(function*() {
      yield* gensync.all([doError(), doSuccess()]);
    });

    await expectResult(fn, undefined, {
      error: DID_ERROR,
      expectSync: true,
      syncErrback: false,
    });
  });

  test("error last", async () => {
    const fn = gensync(function*() {
      yield* gensync.all([doSuccess(), doError()]);
    });

    await expectResult(fn, undefined, {
      error: DID_ERROR,
      expectSync: true,
      syncErrback: false,
    });
  });

  test("empty list", async () => {
    const fn = gensync(function*() {
      yield* gensync.all([]);
    });

    await expectResult(fn, undefined, {
      value: undefined,
      expectSync: true,
      syncErrback: false,
    });
  });
});

describe("gensync.race()", () => {
  test("success", async () => {
    const fn = gensync(function*() {
      const result = yield* gensync.race([doSuccess(), doError()]);

      expect(result).toEqual(42);
    });

    await expectResult(fn, undefined, {
      value: undefined,
      expectSync: true,
      syncErrback: false,
    });
  });

  test("error", async () => {
    const fn = gensync(function*() {
      yield* gensync.race([doError(), doSuccess()]);
    });

    await expectResult(fn, undefined, {
      error: DID_ERROR,
      expectSync: true,
      syncErrback: false,
    });
  });
});
