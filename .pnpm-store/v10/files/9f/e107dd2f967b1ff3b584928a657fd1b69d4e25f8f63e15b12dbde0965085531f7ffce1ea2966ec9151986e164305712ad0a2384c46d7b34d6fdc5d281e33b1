import { addBreadcrumb } from '../../breadcrumbs.js';
import { getBreadcrumbLogLevelFromHttpStatusCode } from '../../utils/breadcrumb-log-level.js';
import { parseUrl, getSanitizedUrlString } from '../../utils/url.js';
import { getRequestUrlFromClientRequest } from './get-request-url.js';

function addOutgoingRequestBreadcrumb(request, response) {
  const url = getRequestUrlFromClientRequest(request);
  const parsedUrl = parseUrl(url);
  const statusCode = response?.statusCode;
  const level = getBreadcrumbLogLevelFromHttpStatusCode(statusCode);
  addBreadcrumb(
    {
      category: "http",
      data: {
        status_code: statusCode,
        url: getSanitizedUrlString(parsedUrl),
        "http.method": request.method || "GET",
        ...parsedUrl.search ? { "http.query": parsedUrl.search } : {},
        ...parsedUrl.hash ? { "http.fragment": parsedUrl.hash } : {}
      },
      type: "http",
      level
    },
    {
      event: "response",
      request,
      response
    }
  );
}

export { addOutgoingRequestBreadcrumb };
//# sourceMappingURL=add-outgoing-request-breadcrumb.js.map
