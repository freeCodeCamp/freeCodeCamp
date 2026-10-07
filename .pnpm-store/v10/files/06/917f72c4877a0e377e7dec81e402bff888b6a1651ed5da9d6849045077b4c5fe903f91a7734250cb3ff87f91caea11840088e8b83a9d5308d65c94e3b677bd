import { HttpResponse } from "@smithy/types";
export {
  Endpoint,
  HeaderBag,
  HttpHandlerOptions,
  HttpMessage,
  HttpRequest,
  HttpResponse,
  QueryParameterBag,
} from "@smithy/types";
export interface Headers extends Map<string, string> {
  withHeader(headerName: string, headerValue: string): Headers;
  withoutHeader(headerName: string): Headers;
}
export interface ResolvedHttpResponse extends HttpResponse {
  body: string;
}
