/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { createWriteStream } from 'node:fs';
import * as http from 'node:http';
import * as https from 'node:https';
import { URL, urlToHttpOptions } from 'node:url';
export async function headHttpRequest(url) {
    return await new Promise(resolve => {
        httpRequest(url, 'HEAD', response => {
            // consume response data free node process
            response.resume();
            resolve(response.statusCode === 200);
        }, false)
            .then(request => {
            request.on('error', () => {
                resolve(false);
            });
        })
            .catch(() => {
            resolve(false);
        });
    });
}
export async function httpRequest(url, method, response, keepAlive = true) {
    let agent;
    try {
        const { ProxyAgent } = await import('proxy-agent');
        agent = new ProxyAgent();
    }
    catch {
        // Standard Node.js agents will be used.
    }
    const options = {
        protocol: url.protocol,
        hostname: url.hostname,
        port: url.port,
        path: url.pathname + url.search,
        method,
        headers: keepAlive ? { Connection: 'keep-alive' } : undefined,
        auth: urlToHttpOptions(url).auth,
        agent,
    };
    const requestCallback = (res) => {
        if (res.statusCode &&
            res.statusCode >= 300 &&
            res.statusCode < 400 &&
            res.headers.location) {
            void httpRequest(new URL(res.headers.location), method, response);
            // consume response data to free up memory
            // And prevents the connection from being kept alive
            res.resume();
        }
        else {
            response(res);
        }
    };
    const request = options.protocol === 'https:'
        ? https.request(options, requestCallback)
        : http.request(options, requestCallback);
    request.end();
    return request;
}
/**
 * @internal
 */
export function downloadFile(url, destinationPath, progressCallback) {
    return new Promise(async (resolve, reject) => {
        let downloadedBytes = 0;
        let totalBytes = 0;
        function onData(chunk) {
            downloadedBytes += chunk.length;
            progressCallback(downloadedBytes, totalBytes);
        }
        try {
            const request = await httpRequest(url, 'GET', response => {
                if (response.statusCode !== 200) {
                    const error = new Error(`Download failed: server returned code ${response.statusCode}. URL: ${url}`);
                    // consume response data to free up memory
                    response.resume();
                    reject(error);
                    return;
                }
                const file = createWriteStream(destinationPath);
                file.on('close', () => {
                    // The 'close' event is emitted when the stream and any of its
                    // underlying resources (a file descriptor, for example) have been
                    // closed. The event indicates that no more events will be emitted, and
                    // no further computation will occur.
                    return resolve();
                });
                file.on('error', error => {
                    // The 'error' event may be emitted by a Readable implementation at any
                    // time. Typically, this may occur if the underlying stream is unable to
                    // generate data due to an underlying internal failure, or when a stream
                    // implementation attempts to push an invalid chunk of data.
                    return reject(error);
                });
                response.pipe(file);
                totalBytes = parseInt(response.headers['content-length'], 10);
                if (progressCallback) {
                    response.on('data', onData);
                }
            });
            request.on('error', error => {
                return reject(error);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
export async function getJSON(url) {
    const text = await getText(url);
    try {
        return JSON.parse(text);
    }
    catch {
        throw new Error('Could not parse JSON from ' + url.toString());
    }
}
export function getText(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const request = await httpRequest(url, 'GET', response => {
                let data = '';
                if (response.statusCode && response.statusCode >= 400) {
                    return reject(new Error(`Got status code ${response.statusCode}`));
                }
                response.on('data', chunk => {
                    data += chunk;
                });
                response.on('end', () => {
                    try {
                        return resolve(String(data));
                    }
                    catch {
                        return reject(new Error(`Failed to read text response from ${url}`));
                    }
                });
            }, false);
            request.on('error', err => {
                reject(err);
            });
        }
        catch (err) {
            reject(err);
        }
    });
}
//# sourceMappingURL=httpUtil.js.map