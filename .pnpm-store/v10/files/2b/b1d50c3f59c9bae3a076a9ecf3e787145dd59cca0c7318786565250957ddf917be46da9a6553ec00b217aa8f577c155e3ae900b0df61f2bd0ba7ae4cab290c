import { stringToHeaders } from "headers-polyfill";
import {} from '../../handlers/RequestHandler.mjs';
function parseContentHeaders(headersString) {
  const headers = stringToHeaders(headersString);
  const contentType = headers.get("content-type") || "text/plain";
  const disposition = headers.get("content-disposition");
  if (!disposition) {
    throw new Error('"Content-Disposition" header is required.');
  }
  const directives = disposition.split(";").reduce((acc, chunk) => {
    const [name2, ...rest] = chunk.trim().split("=");
    acc[name2] = rest.join("=");
    return acc;
  }, {});
  const name = directives.name?.slice(1, -1);
  const filename = directives.filename?.slice(1, -1);
  return {
    name,
    filename,
    contentType
  };
}
function parseMultipartData(data, headers) {
  const contentType = headers?.get("content-type");
  if (!contentType) {
    return void 0;
  }
  const [, ...directives] = contentType.split(/; */);
  const boundary = directives.filter((d) => d.startsWith("boundary=")).map((s) => s.replace(/^boundary=/, ""))[0];
  if (!boundary) {
    return void 0;
  }
  const boundaryRegExp = new RegExp(
    `--+${boundary.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`
  );
  const fields = data.split(boundaryRegExp).filter((chunk) => chunk.startsWith("\r\n") && chunk.endsWith("\r\n")).map((chunk) => chunk.trimStart().replace(/\r\n$/, ""));
  if (!fields.length) {
    return void 0;
  }
  const parsedBody = {};
  try {
    for (const field of fields) {
      const [contentHeaders, ...rest] = field.split("\r\n\r\n");
      const contentBody = rest.join("\r\n\r\n");
      const { contentType: contentType2, filename, name } = parseContentHeaders(contentHeaders);
      const value = filename === void 0 ? contentBody : new File([contentBody], filename, { type: contentType2 });
      const parsedValue = parsedBody[name];
      if (parsedValue === void 0) {
        parsedBody[name] = value;
      } else if (Array.isArray(parsedValue)) {
        parsedBody[name] = [...parsedValue, value];
      } else {
        parsedBody[name] = [parsedValue, value];
      }
    }
    return parsedBody;
  } catch {
    return void 0;
  }
}
export {
  parseMultipartData
};
//# sourceMappingURL=parseMultipartData.mjs.map