import { readFileSync } from "fs";
import { createServer as createHttpServer } from "http";
import { createServer as createHttp2Server } from "http2";
import { createServer as createHttpsServer } from "https";
import { join } from "path";
import { Readable } from "stream";
const fixturesDir = join(__dirname, "..", "fixtures");
const setResponseHeaders = (response, headers) => {
    for (const [key, value] of Object.entries(headers)) {
        response.setHeader(key, value);
    }
};
const setResponseBody = (response, body) => {
    if (body instanceof Readable) {
        body.pipe(response);
    }
    else {
        response.end(body);
    }
};
export const createResponseFunction = (httpResp) => (request, response) => {
    response.statusCode = httpResp.statusCode;
    setResponseHeaders(response, httpResp.headers);
    setResponseBody(response, httpResp.body);
};
export const createResponseFunctionWithDelay = (httpResp, delay) => (request, response) => {
    response.statusCode = httpResp.statusCode;
    setResponseHeaders(response, httpResp.headers);
    setTimeout(() => setResponseBody(response, httpResp.body), delay);
};
export const createContinueResponseFunction = (httpResp) => (request, response) => {
    response.writeContinue();
    setTimeout(() => {
        createResponseFunction(httpResp)(request, response);
    }, 100);
};
export const createMockHttpsServer = () => {
    const server = createHttpsServer({
        key: readFileSync(join(fixturesDir, "test-server-key.pem")),
        cert: readFileSync(join(fixturesDir, "test-server-cert.pem")),
    });
    return server;
};
export const createMockHttpServer = () => {
    const server = createHttpServer();
    return server;
};
export const createMockHttp2Server = () => {
    const server = createHttp2Server();
    return server;
};
export const createMirrorResponseFunction = (httpResp) => (request, response) => {
    const bufs = [];
    request.on("data", (chunk) => {
        bufs.push(chunk);
    });
    request.on("end", () => {
        response.statusCode = httpResp.statusCode;
        setResponseHeaders(response, httpResp.headers);
        setResponseBody(response, Buffer.concat(bufs));
    });
    request.on("error", (err) => {
        response.statusCode = 500;
        setResponseHeaders(response, httpResp.headers);
        setResponseBody(response, err.message);
    });
};
export const getResponseBody = (response) => {
    return new Promise((resolve, reject) => {
        const bufs = [];
        response.body.on("data", function (d) {
            bufs.push(d);
        });
        response.body.on("end", function () {
            resolve(Buffer.concat(bufs).toString());
        });
        response.body.on("error", (err) => {
            reject(err);
        });
    });
};
