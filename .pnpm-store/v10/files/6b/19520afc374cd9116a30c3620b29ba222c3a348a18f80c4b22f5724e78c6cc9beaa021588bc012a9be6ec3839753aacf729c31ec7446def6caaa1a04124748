import { l as HttpRequestEventMap, r as Interceptor } from "./Interceptor-soD-WpQO.mjs";
import net from "node:net";

//#region src/interceptors/Socket/utils/normalizeSocketWriteArgs.d.ts
type WriteCallback = (error?: Error | null) => void;
//#endregion
//#region src/interceptors/Socket/MockSocket.d.ts
interface MockSocketOptions {
  write: (chunk: Buffer | string, encoding: BufferEncoding | undefined, callback?: WriteCallback) => void;
  read: (chunk: Buffer, encoding: BufferEncoding | undefined) => void;
}
declare class MockSocket extends net.Socket {
  protected readonly options: MockSocketOptions;
  connecting: boolean;
  constructor(options: MockSocketOptions);
  connect(): this;
  write(...args: Array<unknown>): boolean;
  end(...args: Array<unknown>): this;
  push(chunk: any, encoding?: BufferEncoding): boolean;
}
//#endregion
//#region src/interceptors/ClientRequest/MockHttpSocket.d.ts
type HttpConnectionOptions = any;
type MockHttpSocketRequestCallback = (args: {
  requestId: string;
  request: Request;
  socket: MockHttpSocket;
}) => void;
type MockHttpSocketResponseCallback = (args: {
  requestId: string;
  request: Request;
  response: Response;
  isMockedResponse: boolean;
  socket: MockHttpSocket;
}) => Promise<void>;
interface MockHttpSocketOptions {
  connectionOptions: HttpConnectionOptions;
  createConnection: () => net.Socket;
  onRequest: MockHttpSocketRequestCallback;
  onResponse: MockHttpSocketResponseCallback;
}
declare class MockHttpSocket extends MockSocket {
  private connectionOptions;
  private createConnection;
  private baseUrl;
  private onRequest;
  private onResponse;
  private responseListenersPromise?;
  private requestRawHeadersBuffer;
  private responseRawHeadersBuffer;
  private writeBuffer;
  private request?;
  private requestParser;
  private requestStream?;
  private shouldKeepAlive?;
  private socketState;
  private responseParser;
  private responseStream?;
  private originalSocket?;
  constructor(options: MockHttpSocketOptions);
  emit(event: string | symbol, ...args: any[]): boolean;
  destroy(error?: Error | undefined): this;
  /**
   * Establish this Socket connection as-is and pipe
   * its data/events through this Socket.
   */
  passthrough(): void;
  /**
   * Convert the given Fetch API `Response` instance to an
   * HTTP message and push it to the socket.
   */
  respondWith(response: Response): Promise<void>;
  /**
   * Close this socket connection with the given error.
   */
  errorWith(error?: Error): void;
  private mockConnect;
  private flushWriteBuffer;
  /**
   * This callback might be called when the request is "slow":
   * - Request headers were fragmented across multiple TCP packages;
   * - Request headers were too large to be processed in a single run
   * (e.g. more than 30 request headers).
   * @note This is called before request start.
   */
  private onRequestHeaders;
  private onRequestStart;
  private onRequestBody;
  private onRequestEnd;
  /**
   * This callback might be called when the response is "slow":
   * - Response headers were fragmented across multiple TCP packages;
   * - Response headers were too large to be processed in a single run
   * (e.g. more than 30 response headers).
   * @note This is called before response start.
   */
  private onResponseHeaders;
  private onResponseStart;
  private onResponseBody;
  private onResponseEnd;
}
//#endregion
//#region src/interceptors/ClientRequest/index.d.ts
declare class ClientRequestInterceptor extends Interceptor<HttpRequestEventMap> {
  static symbol: symbol;
  constructor();
  protected setup(): void;
  private onRequest;
  onResponse: MockHttpSocketResponseCallback;
}
//#endregion
export { ClientRequestInterceptor as t };
//# sourceMappingURL=index-DfoF45ih.d.mts.map