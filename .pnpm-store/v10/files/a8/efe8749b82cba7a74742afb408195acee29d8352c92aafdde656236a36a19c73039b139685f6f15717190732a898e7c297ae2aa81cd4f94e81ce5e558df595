import { Kinesis } from "@aws-sdk/client-kinesis";
import { S3 } from "@aws-sdk/client-s3";
import { TranscribeStreaming } from "@aws-sdk/client-transcribe-streaming";
import { WebSocketFetchHandler } from "@aws-sdk/middleware-websocket";
import { XhrHttpHandler } from "@aws-sdk/xhr-http-handler";
import { FetchHttpHandler } from "@smithy/fetch-http-handler";
import { NodeHttp2Handler, NodeHttpHandler } from "@smithy/node-http-handler";
import { Agent } from "https";

describe("request handler initialization", () => {
  describe("http", () => {
    it("should init with instances", async () => {
      let instance: NodeHttpHandler;
      let agentInstance: Agent;
      const client = new S3({
        requestHandler: (instance = new NodeHttpHandler({
          requestTimeout: 2_000,
          httpsAgent: (agentInstance = new Agent({ maxSockets: 25 })),
        })),
      });
      expect(client.config.requestHandler).toBe(instance);
      (instance as any).config = await (instance as any).configProvider;
      expect((instance as any).config.httpsAgent).toBe(agentInstance);
      expect((instance as any).config.requestTimeout).toEqual(2_000);
      expect(agentInstance.maxSockets).toEqual(25);
    });
    it("should init with Agent pass-through", async () => {
      let instance: NodeHttpHandler;
      const client = new S3({
        requestHandler: (instance = new NodeHttpHandler({
          requestTimeout: 2_000,
          httpsAgent: { maxSockets: 25 },
        })),
      });
      expect(client.config.requestHandler).toBe(instance);
      (instance as any).config = await (instance as any).configProvider;
      expect((instance as any).config.requestTimeout).toEqual(2_000);
      expect((instance as any).config.httpsAgent.maxSockets).toEqual(25);
    });
    it("should init with ctor pass-through with Agent instance", async () => {
      let agentInstance: Agent;
      const client = new S3({
        requestHandler: {
          requestTimeout: 2_000,
          httpsAgent: (agentInstance = new Agent({ maxSockets: 25 })),
        },
      });
      expect(client.config.requestHandler).toBeInstanceOf(NodeHttpHandler);
      const instance = client.config.requestHandler;
      (instance as any).config = await (instance as any).configProvider;
      expect((instance as any).config.httpsAgent).toBe(agentInstance);
      expect((instance as any).config.requestTimeout).toEqual(2_000);
      expect(agentInstance.maxSockets).toEqual(25);
    });
    it("should init with ctor and Agent pass-through", async () => {
      const client = new S3({
        requestHandler: {
          requestTimeout: 2_000,
          httpsAgent: {
            maxSockets: 25,
          },
        },
      });
      expect(client.config.requestHandler).toBeInstanceOf(NodeHttpHandler);
      const instance = client.config.requestHandler;
      (instance as any).config = await (instance as any).configProvider;
      expect((instance as any).config.httpsAgent).toBeInstanceOf(Agent);
      const agentInstance = (instance as any).config.httpsAgent;
      expect((instance as any).config.requestTimeout).toEqual(2_000);
      expect(agentInstance.maxSockets).toEqual(25);
    });
  });

  describe("http2", () => {
    it("should init with instances", async () => {
      let instance: NodeHttp2Handler;
      const client = new Kinesis({
        requestHandler: (instance = new NodeHttp2Handler({
          requestTimeout: 2_000,
        })),
      });
      expect(client.config.requestHandler).toBe(instance);
      (instance as any).config = await (instance as any).configProvider;
      expect((instance as any).config.requestTimeout).toEqual(2_000);
    });
    it("should init with ctor pass-through", async () => {
      const client = new Kinesis({
        requestHandler: {
          requestTimeout: 2_000,
        },
      });
      expect(client.config.requestHandler).toBeInstanceOf(NodeHttp2Handler);
      const instance = client.config.requestHandler;
      (instance as any).config = await (instance as any).configProvider;
      expect((instance as any).config.requestTimeout).toEqual(2_000);
    });
  });

  describe("fetch", () => {
    it("should init with instances", async () => {
      let instance: FetchHttpHandler;
      const handler = FetchHttpHandler.create((instance = new FetchHttpHandler({ requestTimeout: 2_000 })));
      expect(handler).toBe(instance);
      expect((instance as any).config.requestTimeout).toEqual(2_000);
    });
    it("should init with ctor pass-through", async () => {
      const handler = FetchHttpHandler.create({ requestTimeout: 2_000 });
      expect(handler).toBeInstanceOf(FetchHttpHandler);
      expect((handler as any).config.requestTimeout).toEqual(2_000);
    });
  });

  describe("websocket", () => {
    it("should init with instances", async () => {
      let instance: WebSocketFetchHandler;
      const handler = WebSocketFetchHandler.create(
        (instance = new WebSocketFetchHandler({ connectionTimeout: 2_000 }))
      );
      const client = new TranscribeStreaming({
        requestHandler: handler,
      });
      expect(client.config.requestHandler).toBe(instance);
      expect(handler).toBe(instance);
      expect((await (handler as any).configPromise).connectionTimeout).toEqual(2_000);
    });
    it("should init with ctor pass-through", async () => {
      const handler = WebSocketFetchHandler.create({ connectionTimeout: 2_000 });
      const client = new TranscribeStreaming({
        requestHandler: handler,
      });
      expect(client.config.requestHandler).toBe(handler);
      expect(handler).toBeInstanceOf(WebSocketFetchHandler);
      expect((await (handler as any).configPromise).connectionTimeout).toEqual(2_000);
    });
  });

  describe("xhr", () => {
    it("should init with instances", async () => {
      let instance: XhrHttpHandler;
      const handler = XhrHttpHandler.create((instance = new XhrHttpHandler({ requestTimeout: 2_000 })));
      const client = new S3({
        requestHandler: instance,
      });
      expect(client.config.requestHandler).toBe(handler);
      expect(handler).toBe(instance);
      expect((handler as any).config.requestTimeout).toEqual(2_000);
    });
    it("should init with ctor pass-through", async () => {
      const handler = XhrHttpHandler.create({ requestTimeout: 2_000 });
      const client = new S3({
        requestHandler: handler,
      });
      expect(client.config.requestHandler).toBe(handler);
      expect(handler).toBeInstanceOf(XhrHttpHandler);
      expect((handler as any).config.requestTimeout).toEqual(2_000);
    });
  });
});
