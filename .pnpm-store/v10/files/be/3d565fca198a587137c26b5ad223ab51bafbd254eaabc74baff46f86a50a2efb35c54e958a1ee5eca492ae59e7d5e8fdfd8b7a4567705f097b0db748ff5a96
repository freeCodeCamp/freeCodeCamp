import { TypedEvent } from "rettime";
import { until } from "until-async";
import { createRequestId } from "@mswjs/interceptors";
import {
  NetworkFrame
} from './network-frame.mjs';
import { toPublicUrl } from '../../utils/request/toPublicUrl.mjs';
import { executeHandlers } from '../../utils/executeHandlers.mjs';
import { storeResponseCookies } from '../../utils/request/storeResponseCookies.mjs';
import { isPassthroughResponse, shouldBypassRequest } from '../request-utils.mjs';
import { devUtils } from '../../utils/internal/devUtils.mjs';
import {
  executeUnhandledFrameHandle
} from '../on-unhandled-frame.mjs';
import {} from '../handlers-controller.mjs';
import {} from '../../handlers/RequestHandler.mjs';
class RequestEvent extends TypedEvent {
  requestId;
  request;
  constructor(type, data) {
    super(...[type, {}]);
    this.requestId = data.requestId;
    this.request = data.request;
  }
}
class ResponseEvent extends TypedEvent {
  requestId;
  request;
  response;
  constructor(type, data) {
    super(...[type, {}]);
    this.requestId = data.requestId;
    this.request = data.request;
    this.response = data.response;
  }
}
class UnhandledExceptionEvent extends TypedEvent {
  error;
  requestId;
  request;
  constructor(type, data) {
    super(...[type, {}]);
    this.error = data.error;
    this.requestId = data.requestId;
    this.request = data.request;
  }
}
class HttpNetworkFrame extends NetworkFrame {
  constructor(options) {
    const id = options.id || createRequestId();
    super("http", { id, request: options.request });
  }
  getHandlers(controller) {
    return controller.getHandlersByKind("request");
  }
  async getUnhandledMessage() {
    const { request } = this.data;
    const url = new URL(request.url);
    const publicUrl = toPublicUrl(url) + url.search;
    const requestBody = request.body == null ? null : await request.clone().text();
    const details = `

  \u2022 ${request.method} ${publicUrl}

${requestBody ? `  \u2022 Request body: ${requestBody}

` : ""}`;
    const message = `intercepted a request without a matching request handler:${details}If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`;
    return message;
  }
  async resolve(handlers, onUnhandledFrame, resolutionContext) {
    const { id: requestId, request } = this.data;
    const requestCloneForLogs = resolutionContext?.quiet ? null : request.clone();
    this.events.emit(new RequestEvent("request:start", { requestId, request }));
    if (shouldBypassRequest(request)) {
      this.events.emit(new RequestEvent("request:end", { requestId, request }));
      this.passthrough();
      return null;
    }
    const [lookupError, lookupResult] = await until(() => {
      return executeHandlers({
        requestId,
        request,
        handlers,
        resolutionContext: {
          baseUrl: resolutionContext?.baseUrl?.toString(),
          quiet: resolutionContext?.quiet
        }
      });
    });
    if (lookupError != null) {
      if (!this.events.emit(
        new UnhandledExceptionEvent("unhandledException", {
          error: lookupError,
          requestId,
          request
        })
      )) {
        console.error(lookupError);
        devUtils.error(
          'Encountered an unhandled exception during the handler lookup for "%s %s". Please see the original error above.',
          request.method,
          request.url
        );
      }
      this.errorWith(lookupError);
      return null;
    }
    if (lookupResult == null) {
      this.events.emit(
        new RequestEvent("request:unhandled", {
          requestId,
          request
        })
      );
      await executeUnhandledFrameHandle(this, onUnhandledFrame).then(
        () => this.passthrough(),
        (error) => this.errorWith(error)
      );
      this.events.emit(
        new RequestEvent("request:end", {
          requestId,
          request
        })
      );
      return false;
    }
    const { response, handler, parsedResult } = lookupResult;
    this.events.emit(
      new RequestEvent("request:match", {
        requestId,
        request
      })
    );
    if (response == null) {
      this.events.emit(
        new RequestEvent("request:end", {
          requestId,
          request
        })
      );
      this.passthrough();
      return null;
    }
    if (isPassthroughResponse(response)) {
      this.events.emit(
        new RequestEvent("request:end", {
          requestId,
          request
        })
      );
      this.passthrough();
      return null;
    }
    const responseCloneForLogs = resolutionContext?.quiet ? null : response.clone();
    await storeResponseCookies(request, response);
    this.respondWith(response);
    this.events.emit(
      new RequestEvent("request:end", {
        requestId,
        request
      })
    );
    if (!resolutionContext?.quiet) {
      handler.log({
        request: requestCloneForLogs,
        response: responseCloneForLogs,
        parsedResult
      });
    }
    return true;
  }
}
export {
  HttpNetworkFrame,
  RequestEvent,
  ResponseEvent,
  UnhandledExceptionEvent
};
//# sourceMappingURL=http-frame.mjs.map