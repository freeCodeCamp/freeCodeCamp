import { getUpdatedSystemClockOffset } from "./getUpdatedSystemClockOffset";
import { isClockSkewed } from "./isClockSkewed";

jest.mock("./isClockSkewed");

describe(getUpdatedSystemClockOffset.name, () => {
  // Mock ServerTime is accurate to last second, to remove milliseconds information.
  const mockClockTime = new Date(Math.floor(Date.now() / 1000) * 1000);
  const mockSystemClockOffset = 100;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns passed systemClockOffset when clock is not skewed", () => {
    (isClockSkewed as jest.Mock).mockReturnValue(false);
    expect(getUpdatedSystemClockOffset(mockClockTime.toString(), mockSystemClockOffset)).toEqual(mockSystemClockOffset);
  });

  describe("returns difference between serverTime and current time when clock is skewed", () => {
    const dateDotNowFn = Date.now;

    beforeEach(() => {
      (isClockSkewed as jest.Mock).mockReturnValue(true);
      jest.spyOn(Date, "now").mockReturnValueOnce(mockClockTime.getTime());
    });

    afterEach(() => {
      Date.now = dateDotNowFn;
    });

    it.each([1000, 100000])("difference: %d", (difference) => {
      const updatedClockTime = new Date(mockClockTime.getTime() + difference);
      expect(getUpdatedSystemClockOffset(updatedClockTime.toString(), mockSystemClockOffset)).toEqual(difference);
    });
  });
});
