import { getSkewCorrectedDate } from "./getSkewCorrectedDate";
import { isClockSkewed } from "./isClockSkewed";

jest.mock("./getSkewCorrectedDate");

describe(isClockSkewed.name, () => {
  const mockSystemClockOffset = 100;
  const mockSkewCorrectedDate = new Date();

  beforeEach(() => {
    (getSkewCorrectedDate as jest.Mock).mockReturnValue(mockSkewCorrectedDate);
  });

  afterEach(() => {
    expect(getSkewCorrectedDate).toHaveBeenCalledWith(mockSystemClockOffset);
    jest.clearAllMocks();
  });

  describe("returns true for time difference >=300000", () => {
    it.each([300000, 500000])("difference: %d", (difference) => {
      expect(isClockSkewed(mockSkewCorrectedDate.getTime() + difference, mockSystemClockOffset)).toBe(true);
      expect(isClockSkewed(mockSkewCorrectedDate.getTime() - difference, mockSystemClockOffset)).toBe(true);
    });
  });

  describe("returns false for time difference <300000", () => {
    it.each([299999, 100000, 0])("difference: %d", (difference) => {
      expect(isClockSkewed(mockSkewCorrectedDate.getTime() + difference, mockSystemClockOffset)).toBe(false);
      expect(isClockSkewed(mockSkewCorrectedDate.getTime() - difference, mockSystemClockOffset)).toBe(false);
    });
  });
});
