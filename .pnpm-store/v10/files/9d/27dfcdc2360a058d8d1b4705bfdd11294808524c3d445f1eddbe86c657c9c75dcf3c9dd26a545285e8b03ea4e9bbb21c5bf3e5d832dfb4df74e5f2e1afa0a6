import { getSkewCorrectedDate } from "./getSkewCorrectedDate";
export const isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 300000;
