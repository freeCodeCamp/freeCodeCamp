import {IncomingMessage, ServerResponse} from "http";
import {
  err,
  errWithCause,
  req,
  res,
  SerializedError,
  SerializedRequest,
  wrapErrorSerializer,
  wrapRequestSerializer,
  wrapResponseSerializer,
  SerializedResponse
} from '../../';

const customErrorSerializer = (error: SerializedError) => {
  return {
    myOwnError: {
      data: `${error.type}-${error.message}\n\n${error.stack}`,
    }
  };
};

const customRequestSerializer = (req: SerializedRequest) => {
  const {
    headers,
    id,
    method,
    raw,
    remoteAddress,
    remotePort,
    url,
    query,
    params,
  } = req;
  return {
    myOwnRequest: {
      data: `${method}-${id}-${remoteAddress}-${remotePort}-${url}`,
      headers,
      raw,
    }
  };
};

const customResponseSerializer = (res: SerializedResponse) => {
  const {headers, raw, statusCode} = res;
  return {
    myOwnResponse: {
      data: statusCode,
      headers,
      raw,
    }
  };
};

const fakeError = new Error('A fake error for testing');
const serializedError: SerializedError = err(fakeError);
const mySerializer = wrapErrorSerializer(customErrorSerializer);

const fakeErrorWithCause = new Error('A fake error for testing with cause', { cause: new Error('An inner fake error') });
const serializedErrorWithCause: SerializedError = errWithCause(fakeError);

const request: IncomingMessage = {} as IncomingMessage
const serializedRequest: SerializedRequest = req(request);
const myReqSerializer = wrapRequestSerializer(customRequestSerializer);

const response: ServerResponse = {} as ServerResponse
const myResSerializer = wrapResponseSerializer(customResponseSerializer);
const serializedResponse = res(response);

myResSerializer(response)

