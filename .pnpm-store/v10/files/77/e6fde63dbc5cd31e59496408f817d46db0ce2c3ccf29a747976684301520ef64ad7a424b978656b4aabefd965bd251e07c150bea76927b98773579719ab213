import {
} from './handlers/RequestHandler.mjs';
import {
  HttpMethods,
  HttpHandler
} from './handlers/HttpHandler.mjs';
function createHttpHandler(method) {
  return (predicate, resolver, options = {}) => {
    return new HttpHandler(method, predicate, resolver, options);
  };
}
const http = {
  all: createHttpHandler(/.+/),
  head: createHttpHandler(HttpMethods.HEAD),
  get: createHttpHandler(HttpMethods.GET),
  post: createHttpHandler(HttpMethods.POST),
  put: createHttpHandler(HttpMethods.PUT),
  delete: createHttpHandler(HttpMethods.DELETE),
  patch: createHttpHandler(HttpMethods.PATCH),
  options: createHttpHandler(HttpMethods.OPTIONS)
};
export {
  http
};
//# sourceMappingURL=http.mjs.map