import { ProviderError } from "@smithy/property-provider";
import { Buffer } from "buffer";
import { request } from "http";
export function httpRequest(options) {
    return new Promise((resolve, reject) => {
        const req = request({
            method: "GET",
            ...options,
            hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1"),
        });
        req.on("error", (err) => {
            reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
            req.destroy();
        });
        req.on("timeout", () => {
            reject(new ProviderError("TimeoutError from instance metadata service"));
            req.destroy();
        });
        req.on("response", (res) => {
            const { statusCode = 400 } = res;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode }));
                req.destroy();
            }
            const chunks = [];
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                resolve(Buffer.concat(chunks));
                req.destroy();
            });
        });
        req.end();
    });
}
