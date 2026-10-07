import type { request as nodeRequest } from "http";
import type { UrlWithStringQuery } from "url";

export type RequestFnType = (
  url: string,
  data: Record<string, unknown>
) => Promise<boolean>;

export const requestWithXMLHttpRequest: RequestFnType = (url, data) => {
  return new Promise((resolve, reject) => {
    const serializedData = JSON.stringify(data);
    const req = new XMLHttpRequest();
    req.addEventListener("readystatechange", () => {
      if (req.readyState === 4 && req.status === 200) {
        resolve(true);
      } else if (req.readyState === 4) {
        resolve(false);
      }
    });

    /* eslint-disable prefer-promise-reject-errors */
    req.addEventListener("error", () => reject());
    /* eslint-enable */
    req.addEventListener("timeout", () => resolve(false));
    req.open("POST", url);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(serializedData);
  });
};

export const requestWithSendBeacon: RequestFnType = (url, data) => {
  const serializedData = JSON.stringify(data);
  const beacon = navigator.sendBeacon(url, serializedData);
  return Promise.resolve(beacon ? true : requestWithXMLHttpRequest(url, data));
};

export const requestWithNodeHttpModule: RequestFnType = (url, data) => {
  return new Promise((resolve, reject) => {
    const serializedData = JSON.stringify(data);
    /* eslint-disable @typescript-eslint/no-var-requires */
    const { protocol, host, path }: UrlWithStringQuery =
      require("url").parse(url);
    /* eslint-enable */
    const options = {
      protocol,
      host,
      path,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": serializedData.length
      }
    };

    const { request }: { request: typeof nodeRequest } = url.startsWith(
      "https://"
    )
      ? require("https")
      : require("http");
    const req = request(options, ({ statusCode }) => {
      if (statusCode === 200) {
        resolve(true);
      } else {
        resolve(false);
      }
    });

    req.on("error", (error) => {
      /* eslint-disable no-console */
      console.error(error);
      /* eslint-enable */
      reject(error);
    });
    req.on("timeout", () => resolve(false));

    req.write(serializedData);
    req.end();
  });
};

export const requestWithNativeFetch: RequestFnType = (url, data) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        resolve(response.status === 200);
      })
      .catch((e: Error) => {
        reject(e);
      });
  });
};
