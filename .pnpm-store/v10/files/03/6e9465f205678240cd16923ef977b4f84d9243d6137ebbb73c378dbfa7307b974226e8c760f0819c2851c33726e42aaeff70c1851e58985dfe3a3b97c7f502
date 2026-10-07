import type { Localize } from "../../locale/types.js";
import type {
  FirstWeekContainsDateOptions,
  LocalizedOptions,
  WeekOptions,
} from "../../types.js";
type Formatter = (
  date: Date,
  token: string,
  localize: Localize,
  options: Required<
    LocalizedOptions<"options"> & WeekOptions & FirstWeekContainsDateOptions
  >,
) => string;
export declare const formatters: {
  [token: string]: Formatter;
};
export {};
