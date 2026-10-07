'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get parseJsonEventStream () {
        return parseJsonEventStream;
    },
    get processStream () {
        return processStream;
    }
});
function parseJsonEventStream(stream) {
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
function processStream(stream, onChunk, onDone, onError) {
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
