import { HttpResponse } from "@smithy/protocol-http";
export const getDateHeader = (response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;
