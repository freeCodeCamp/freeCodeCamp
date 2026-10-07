import {IncomingMessage} from 'http';

/**
Mimic a [Node.js HTTP response stream](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

Makes `toStream` include the properties from `fromStream`.

@param fromStream - The stream to copy the properties from.
@param toStream - The stream to copy the properties to.
@return The same object as `toStream`.
*/
declare function mimicResponse<T extends NodeJS.ReadableStream>(
	fromStream: IncomingMessage, // eslint-disable-line @typescript-eslint/prefer-readonly-parameter-types
	toStream: T,
): T & IncomingMessage;

export = mimicResponse;
