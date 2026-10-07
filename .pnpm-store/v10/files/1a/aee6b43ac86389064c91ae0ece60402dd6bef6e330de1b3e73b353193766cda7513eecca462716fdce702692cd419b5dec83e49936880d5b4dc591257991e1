import { HttpResponse } from "@smithy/protocol-http";

/**
 * @internal
 */
export const getDateHeader = (response: unknown): string | undefined =>
  HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;
