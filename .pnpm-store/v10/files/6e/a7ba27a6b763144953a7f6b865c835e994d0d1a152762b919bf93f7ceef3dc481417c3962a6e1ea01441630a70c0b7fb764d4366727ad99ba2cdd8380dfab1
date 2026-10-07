import { n as HttpResponseInit } from '../../HttpResponse-aGiIzO91.js';
import '@mswjs/interceptors';
import '../internal/isIterable.js';
import '../../typeUtils.js';
import 'graphql';
import '../matching/matchRequestUrl.js';

interface HttpResponseDecoratedInit extends HttpResponseInit {
    status: number;
    statusText: string;
    headers: Headers;
}
declare function normalizeResponseInit(init?: HttpResponseInit): HttpResponseDecoratedInit;
declare function decorateResponse(response: Response, init: HttpResponseDecoratedInit): Response;
declare function getRawSetCookie(response: Response): string | undefined;

export { type HttpResponseDecoratedInit, decorateResponse, getRawSetCookie, normalizeResponseInit };
