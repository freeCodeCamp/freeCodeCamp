import { SourceData } from "@aws-sdk/types";

export function isEmptyData(data: SourceData): boolean {
  if (typeof data === "string") {
    return data.length === 0;
  }

  return data.byteLength === 0;
}
