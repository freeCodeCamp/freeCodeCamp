Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');

function debugLog(...args) {
  core.debug.log("[https-proxy-agent:parse-proxy-response]", ...args);
}
function parseProxyResponse(socket) {
  return new Promise((resolve, reject) => {
    let buffersLength = 0;
    const buffers = [];
    function read() {
      const b = socket.read();
      if (b) ondata(b);
      else socket.once("readable", read);
    }
    function cleanup() {
      socket.removeListener("end", onend);
      socket.removeListener("error", onerror);
      socket.removeListener("readable", read);
    }
    function onend() {
      cleanup();
      debugLog("onend");
      reject(new Error("Proxy connection ended before receiving CONNECT response"));
    }
    function onerror(err) {
      cleanup();
      debugLog("onerror %o", err);
      reject(err);
    }
    function ondata(b) {
      buffers.push(b);
      buffersLength += b.length;
      const buffered = Buffer.concat(buffers, buffersLength);
      const endOfHeaders = buffered.indexOf("\r\n\r\n");
      if (endOfHeaders === -1) {
        debugLog("have not received end of HTTP headers yet...");
        read();
        return;
      }
      const headerParts = buffered.subarray(0, endOfHeaders).toString("ascii").split("\r\n");
      const firstLine = headerParts.shift();
      if (!firstLine) {
        socket.destroy();
        return reject(new Error("No header received from proxy CONNECT response"));
      }
      const firstLineParts = firstLine.split(" ");
      const statusCode = +(firstLineParts[1] || 0);
      const statusText = firstLineParts.slice(2).join(" ");
      const headers = {};
      for (const header of headerParts) {
        if (!header) continue;
        const firstColon = header.indexOf(":");
        if (firstColon === -1) {
          socket.destroy();
          return reject(new Error(`Invalid header from proxy CONNECT response: "${header}"`));
        }
        const key = header.slice(0, firstColon).toLowerCase();
        const value = header.slice(firstColon + 1).trimStart();
        const current = headers[key];
        if (typeof current === "string") {
          headers[key] = [current, value];
        } else if (Array.isArray(current)) {
          current.push(value);
        } else {
          headers[key] = value;
        }
      }
      debugLog("got proxy server response: %o %o", firstLine, headers);
      cleanup();
      resolve({
        connect: {
          statusCode,
          statusText,
          headers
        },
        buffered
      });
    }
    socket.on("error", onerror);
    socket.on("end", onend);
    read();
  });
}

exports.parseProxyResponse = parseProxyResponse;
//# sourceMappingURL=parse-proxy-response.js.map
