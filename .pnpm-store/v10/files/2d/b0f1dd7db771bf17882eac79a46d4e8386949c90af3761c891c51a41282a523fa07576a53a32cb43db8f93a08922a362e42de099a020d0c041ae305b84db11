import { awsExpectUnion } from "./awsExpectUnion";

describe(awsExpectUnion.name, () => {
  it("ignores the __type field", () => {
    expect(
      awsExpectUnion({
        K: "V",
        __type: "X",
      })
    ).toEqual({
      K: "V",
    });
  });

  it("throws when there are extra keys or no keys", () => {
    expect(() =>
      awsExpectUnion({
        __type: "X",
      })
    ).toThrowError();

    expect(() =>
      awsExpectUnion({
        K: "V",
        I: "S",
        __type: "X",
      })
    ).toThrowError();
  });
});
