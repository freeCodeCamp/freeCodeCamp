import {IncomingMessage} from 'node:http';

/**
Mimic a [Node.js HTTP response stream](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

Makes `toStream` include the properties from `fromStream`.

@param fromStream - The stream to copy the properties from.
@param toStream - The stream to copy the properties to.
@return The same object as `toStream`.

@example
```
import {PassThrough as PassThroughStream} from 'node:stream';
import mimicResponse from 'mimic-response';

const responseStream = getHttpResponseStream();
const myStream = new PassThroughStream();

mimicResponse(responseStream, myStream);

console.log(myStream.statusCode);
//=> 200
```
*/
export default function mimicResponse<T extends NodeJS.ReadableStream>(
	fromStream: IncomingMessage,
	toStream: T,
): T & IncomingMessage;
