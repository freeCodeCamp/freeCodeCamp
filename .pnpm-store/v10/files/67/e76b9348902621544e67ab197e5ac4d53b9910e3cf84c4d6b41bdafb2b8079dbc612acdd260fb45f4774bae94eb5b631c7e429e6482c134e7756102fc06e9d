import type {
  LocalizedOptions,
  FirstWeekContainsDateOptions,
  WeekOptions,
} from "../../types.js";
export interface ParseFlags {
  timestampIsSet?: boolean;
  era?: number;
}
export type ParserOptions = Required<
  LocalizedOptions<"options"> & FirstWeekContainsDateOptions & WeekOptions
>;
export type ParseResult<TValue> = {
  value: TValue;
  rest: string;
} | null;
