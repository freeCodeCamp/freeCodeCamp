Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

function getBreadcrumbLogLevelFromHttpStatusCode(statusCode) {
  if (statusCode === void 0) {
    return void 0;
  } else if (statusCode >= 400 && statusCode < 500) {
    return "warning";
  } else if (statusCode >= 500) {
    return "error";
  } else {
    return void 0;
  }
}

exports.getBreadcrumbLogLevelFromHttpStatusCode = getBreadcrumbLogLevelFromHttpStatusCode;
//# sourceMappingURL=breadcrumb-log-level.js.map
