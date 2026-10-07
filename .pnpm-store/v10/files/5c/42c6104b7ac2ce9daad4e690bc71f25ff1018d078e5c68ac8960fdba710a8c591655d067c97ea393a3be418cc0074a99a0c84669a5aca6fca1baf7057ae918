import { n as HttpResponseInit } from '../../HttpResponse-CxHR1nNN.mjs';
import '@mswjs/interceptors';
import '../internal/isIterable.mjs';
import '../../typeUtils.mjs';
import 'graphql';
import '../matching/matchRequestUrl.mjs';

interface HttpResponseDecoratedInit extends HttpResponseInit {
    status: number;
    statusText: string;
    headers: Headers;
}
declare function normalizeResponseInit(init?: HttpResponseInit): HttpResponseDecoratedInit;
declare function decorateResponse(response: Response, init: HttpResponseDecoratedInit): Response;
declare function getRawSetCookie(response: Response): string | undefined;

export { type HttpResponseDecoratedInit, decorateResponse, getRawSetCookie, normalizeResponseInit };
