import * as z from "zod/v3";

export const filePath = __filename;

// z.object()

export const Test = z.object({
  f1: z.number(),
});

export type Test = z.infer<typeof Test>;

export const instanceOfTest: Test = {
  f1: 1,
};

// z.object().merge()

export const TestMerge = z
  .object({
    f2: z.string().optional(),
  })
  .merge(Test);

export type TestMerge = z.infer<typeof TestMerge>;

export const instanceOfTestMerge: TestMerge = {
  f1: 1,
  f2: "string",
};

// z.union()

export const TestUnion = z.union([
  z.object({
    f2: z.string().optional(),
  }),
  Test,
]);

export type TestUnion = z.infer<typeof TestUnion>;

export const instanceOfTestUnion: TestUnion = {
  f1: 1,
  f2: "string",
};

// z.object().partial()

export const TestPartial = Test.partial();

export type TestPartial = z.infer<typeof TestPartial>;

export const instanceOfTestPartial: TestPartial = {
  f1: 1,
};

// z.object().pick()

export const TestPick = TestMerge.pick({ f1: true });

export type TestPick = z.infer<typeof TestPick>;

export const instanceOfTestPick: TestPick = {
  f1: 1,
};

// z.object().omit()

export const TestOmit = TestMerge.omit({ f2: true });

export type TestOmit = z.infer<typeof TestOmit>;

export const instanceOfTestOmit: TestOmit = {
  f1: 1,
};
