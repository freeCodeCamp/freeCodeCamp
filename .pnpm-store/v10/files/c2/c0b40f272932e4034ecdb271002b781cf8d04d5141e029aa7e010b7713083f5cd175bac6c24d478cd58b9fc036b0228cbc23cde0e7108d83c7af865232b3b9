/**
 * Stream parser for parsing SSE (Server-Sent Events) streams.
 * The AI SDK 5 format uses SSE with JSON payloads prefixed by "data: ".
 */ /**
 * Parse a stream of bytes as SSE (Server-Sent Events) and convert to UIMessageChunk events.
 * Handles the "data: " prefix used by the AI SDK 5 streaming format.
 *
 * @param stream - The input stream of raw bytes
 * @returns A ReadableStream of parsed UIMessageChunk events
 */ function parseJsonEventStream(stream) {
    var decoder = new TextDecoder();
    var buffer = '';
    return new ReadableStream({
        start: function start(controller) {
            var reader = stream.getReader();
            var processChunk = function processChunk1() {
                reader.read().then(function(param) {
                    var done = param.done, value = param.value;
                    if (done) {
                        // Process any remaining data in the buffer
                        if (buffer.trim()) {
                            var jsonData = extractJsonFromLine(buffer.trim());
                            if (jsonData) {
                                try {
                                    var chunk = JSON.parse(jsonData);
                                    controller.enqueue(chunk);
                                } catch (unused) {
                                // Ignore parsing errors for incomplete data at end
                                }
                            }
                        }
                        controller.close();
                        return;
                    }
                    // Decode the chunk and add to buffer
                    buffer += decoder.decode(value, {
                        stream: true
                    });
                    // Process complete lines
                    var lines = buffer.split('\n');
                    // Keep the last potentially incomplete line in the buffer
                    buffer = lines.pop() || '';
                    for(var i = 0; i < lines.length; i++){
                        var trimmedLine = lines[i].trim();
                        // eslint-disable-next-line no-continue
                        if (!trimmedLine) continue;
                        // Extract JSON from SSE data line or plain JSON
                        var jsonData1 = extractJsonFromLine(trimmedLine);
                        // eslint-disable-next-line no-continue
                        if (!jsonData1) continue;
                        try {
                            var chunk1 = JSON.parse(jsonData1);
                            controller.enqueue(chunk1);
                        } catch (unused) {
                        // Skip malformed lines
                        }
                    }
                    // Continue reading
                    processChunk();
                }, function(error) {
                    controller.error(error);
                });
            };
            processChunk();
        }
    });
}
/**
 * Extract JSON data from an SSE line or plain JSON line.
 * Handles both "data: {...}" SSE format and plain "{...}" NDJSON format.
 */ function extractJsonFromLine(line) {
    // Handle SSE format: "data: {...}"
    if (line.startsWith('data:')) {
        var data = line.slice(5).trim();
        // Skip SSE stream termination signal
        if (data === '[DONE]') return null;
        return data;
    }
    // Handle plain JSON (NDJSON format)
    if (line.startsWith('{')) {
        return line;
    }
    // Skip other SSE fields (event:, id:, retry:, etc.)
    return null;
}
/**
 * Process a ReadableStream using a callback for each value.
 * This is a non-async alternative to for-await-of iteration.
 */ function processStream(stream, onChunk, onDone, onError) {
    var reader = stream.getReader();
    var read = function read1() {
        reader.read().then(function(param) {
            var done = param.done, value = param.value;
            if (done) {
                reader.releaseLock();
                onDone();
                return;
            }
            var result = onChunk(value);
            if (result && typeof result.then === 'function') {
                result.then(function() {
                    return read();
                }, function(error) {
                    reader.releaseLock();
                    onError(error);
                });
            } else {
                read();
            }
        }, function(error) {
            reader.releaseLock();
            onError(error);
        });
    };
    read();
}

export { parseJsonEventStream, processStream };
