import { getSkewCorrectedDate } from "./getSkewCorrectedDate";

describe(getSkewCorrectedDate.name, () => {
  const mockDateNow = Date.now();

  beforeEach(() => {
    jest.spyOn(Date, "now").mockReturnValue(mockDateNow);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each([-100000, -100, 0, 100, 100000])("systemClockOffset: %d", (systemClockOffset) => {
    expect(getSkewCorrectedDate(systemClockOffset)).toStrictEqual(new Date(mockDateNow + systemClockOffset));
  });
});
