import { CHANNEL_NAME } from "../preview/relay/constants";
import {
  IPreviewInitMessage,
  IPreviewRequestMessage,
  IPreviewResponseMessage,
  MessageSentToMain,
} from "../preview/relay/types";
import { EXTENSIONS_MAP } from "./mime";
import { generateRandomId } from "./utils";

export type FileContent = string | Uint8Array;
export type GetFileContentFn = (
  filepath: string
) => Promise<FileContent> | FileContent;

export interface IPreviewControllerOptions {
  baseUrl: string;
  getFileContent: GetFileContentFn;
  indexFiles?: string[];
}

export function normalizeFilepath(filepath: string): string {
  const split = filepath.split("/").filter(Boolean);
  const normalized = split.join("/");
  return "/" + normalized;
}

export function joinFilepath(filepath: string, addition: string): string {
  return normalizeFilepath(filepath + "/" + addition);
}

export function getExtension(filepath: string): string {
  const parts = filepath.split(".");
  if (parts.length <= 1) {
    return "";
  } else {
    const ext = parts[parts.length - 1];
    return ext;
  }
}

export class PreviewController {
  private baseUrl: URL;
  private indexFiles: string[];
  private getFileContent: GetFileContentFn;
  private initPromise: null | Promise<
    [string, MessagePort, HTMLIFrameElement]
  > = null;

  constructor(options: IPreviewControllerOptions) {
    this.baseUrl = new URL(options.baseUrl);
    this.getFileContent = options.getFileContent;
    this.indexFiles = options.indexFiles ?? ["index.html", "index.html"];
  }

  private async getIndexAtPath(filepath: string): Promise<string | Uint8Array> {
    for (const index of this.indexFiles) {
      try {
        const content = await this.getFileContent(
          joinFilepath(filepath, index)
        );
        return content;
      } catch (err) {
        // do nothing
      }
    }
    throw new Error("No index file not found");
  }

  private async handleWorkerRequest(
    request: IPreviewRequestMessage
  ): Promise<void> {
    if (!this.initPromise) {
      throw new Error("Init promise is null");
    }

    const [previewRoot, port] = await this.initPromise;
    try {
      const filepath = normalizeFilepath(
        new URL(request.url, previewRoot).pathname
      );
      let body: string | Uint8Array | null = null;
      const headers: Record<string, string> = {};
      try {
        body = await this.getFileContent(filepath);
      } catch (err) {
        // do nothing
      }
      if (body == null) {
        body = await this.getIndexAtPath(filepath);
        headers["Content-Type"] = "text/html; charset=utf-8";
      }
      if (body == null) {
        throw new Error("File not found");
      }
      if (!headers["Content-Type"]) {
        const extension = getExtension(filepath);
        const foundMimetype = EXTENSIONS_MAP.get(extension);
        if (foundMimetype) {
          headers["Content-Type"] = foundMimetype;
        }
      }
      const responseMessage: IPreviewResponseMessage = {
        $channel: CHANNEL_NAME,
        $type: "preview/response",
        id: request.id,
        headers,
        status: 200,
        body,
      };
      port.postMessage(responseMessage);
    } catch (err) {
      const responseMessage: IPreviewResponseMessage = {
        $channel: CHANNEL_NAME,
        $type: "preview/response",
        id: request.id,
        headers: {
          ["Content-Type"]: "text/html; charset=utf-8",
        },
        status: 404,
        body: "File not found",
      };
      port.postMessage(responseMessage);
    }
  }

  private getRelayUrl(previewUrl: string): string {
    const relayUrl = new URL(previewUrl);
    relayUrl.pathname = "/__csb_relay/";
    return relayUrl.toString();
  }

  private async _initPreview(): Promise<
    [string, MessagePort, HTMLIFrameElement]
  > {
    const id = generateRandomId();
    const previewUrl = new URL(this.baseUrl);
    previewUrl.hostname = id + "-" + previewUrl.hostname;
    previewUrl.pathname = "/";
    const relayUrl = this.getRelayUrl(previewUrl.toString());
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", relayUrl.toString());
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    const channel = new MessageChannel();
    const iframeContentWindow = iframe.contentWindow;
    if (!iframeContentWindow) {
      throw new Error("Could not get iframe contentWindow");
    }
    return new Promise((resolve) => {
      const port = channel.port1;
      port.onmessage = (evt: MessageEvent<MessageSentToMain>) => {
        if (
          typeof evt.data === "object" &&
          evt.data.$channel === CHANNEL_NAME
        ) {
          switch (evt.data.$type) {
            case "preview/ready":
              resolve([previewUrl.toString(), port, iframe]);
              break;
            case "preview/request":
              this.handleWorkerRequest(evt.data);
              break;
          }
        }
      };
      iframe.onload = () => {
        const initMsg: IPreviewInitMessage = {
          $channel: CHANNEL_NAME,
          $type: "preview/init",
        };
        iframeContentWindow.postMessage(initMsg, "*", [channel.port2]);
      };
    });
  }

  /**
   * Initialize a preview and return the url at which the preview is being served
   **/
  public initPreview(): Promise<string> {
    if (!this.initPromise) {
      this.initPromise = this._initPreview();
    }
    return this.initPromise.then((v) => v[0]);
  }

  public destroy(): void {
    if (this.initPromise) {
      const p = this.initPromise;
      p.then((val) => {
        val[1].close();
        const url = this.getRelayUrl(val[0]);
        const foundElements = document.body.querySelectorAll(`src="${url}"`);
        foundElements.forEach((el) => el.remove());
      });
      this.initPromise = null;
    }
  }
}
