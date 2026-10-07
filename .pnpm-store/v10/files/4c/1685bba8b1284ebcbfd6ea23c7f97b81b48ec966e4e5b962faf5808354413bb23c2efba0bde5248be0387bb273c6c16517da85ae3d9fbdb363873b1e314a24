import { CHANNEL_NAME } from "./constants";

export interface IPreviewReadyMessage {
  $channel: typeof CHANNEL_NAME;
  $type: "preview/ready";
}

export interface IPreviewInitMessage {
  $channel: typeof CHANNEL_NAME;
  $type: "preview/init";
}

export interface IPreviewRequestMessage {
  $channel: typeof CHANNEL_NAME;
  $type: "preview/request";
  id: string;
  method: string;
  url: string;
}

export interface IPreviewResponseMessage {
  $channel: typeof CHANNEL_NAME;
  $type: "preview/response";
  id: string;
  status: number;
  headers: Record<string, string>;
  body: string | Uint8Array;
}

export interface IWorkerPingMessage {
  $channel: typeof CHANNEL_NAME;
  $type: "worker/ping";
}

export interface IWorkerPongMessage {
  $channel: typeof CHANNEL_NAME;
  $type: "worker/pong";
}

export interface IWorkerInitMessage {
  $channel: typeof CHANNEL_NAME;
  $type: "worker/init";
}

export type MessageSentToWorker =
  | IWorkerPingMessage
  | IPreviewResponseMessage
  | IWorkerInitMessage;
export type MessageReceivedFromWorker =
  | IPreviewRequestMessage
  | IWorkerPongMessage;
export type MessageSentToMain = IPreviewRequestMessage | IPreviewReadyMessage;
