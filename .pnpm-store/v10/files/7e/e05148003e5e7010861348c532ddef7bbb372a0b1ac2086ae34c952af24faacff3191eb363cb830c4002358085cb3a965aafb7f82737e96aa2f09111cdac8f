var SourceMapGenerator = require('source-map/lib/source-map-generator').SourceMapGenerator;
var trackNodes = {
    Atrule: true,
    Selector: true,
    Declaration: true
};

module.exports = function generateSourceMap(handlers) {
    var map = new SourceMapGenerator();
    var line = 1;
    var column = 0;
    var generated = {
        line: 1,
        column: 0
    };
    var original = {
        line: 0, // should be zero to add first mapping
        column: 0
    };
    var sourceMappingActive = false;
    var activatedGenerated = {
        line: 1,
        column: 0
    };
    var activatedMapping = {
        generated: activatedGenerated
    };

    var handlersNode = handlers.node;
    handlers.node = function(node) {
        if (node.loc && node.loc.start && trackNodes.hasOwnProperty(node.type)) {
            var nodeLine = node.loc.start.line;
            var nodeColumn = node.loc.start.column - 1;

            if (original.line !== nodeLine ||
                original.column !== nodeColumn) {
                original.line = nodeLine;
                original.column = nodeColumn;

                generated.line = line;
                generated.column = column;

                if (sourceMappingActive) {
                    sourceMappingActive = false;
                    if (generated.line !== activatedGenerated.line ||
                        generated.column !== activatedGenerated.column) {
                        map.addMapping(activatedMapping);
                    }
                }

                sourceMappingActive = true;
                map.addMapping({
                    source: node.loc.source,
                    original: original,
                    generated: generated
                });
            }
        }

        handlersNode.call(this, node);

        if (sourceMappingActive && trackNodes.hasOwnProperty(node.type)) {
            activatedGenerated.line = line;
            activatedGenerated.column = column;
        }
    };

    var handlersChunk = handlers.chunk;
    handlers.chunk = function(chunk) {
        for (var i = 0; i < chunk.length; i++) {
            if (chunk.charCodeAt(i) === 10) { // \n
                line++;
                column = 0;
            } else {
                column++;
            }
        }

        handlersChunk(chunk);
    };

    var handlersResult = handlers.result;
    handlers.result = function() {
        if (sourceMappingActive) {
            map.addMapping(activatedMapping);
        }

        return {
            css: handlersResult(),
            map: map
        };
    };

    return handlers;
};
