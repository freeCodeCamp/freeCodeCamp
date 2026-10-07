import { SourceMapGenerator } from 'source-map-js/lib/source-map-generator.js';

const trackNodes = new Set(['Atrule', 'Selector', 'Declaration']);

export function generateSourceMap(handlers) {
    const map = new SourceMapGenerator();
    const generated = {
        line: 1,
        column: 0
    };
    const original = {
        line: 0, // should be zero to add first mapping
        column: 0
    };
    const activatedGenerated = {
        line: 1,
        column: 0
    };
    const activatedMapping = {
        generated: activatedGenerated
    };
    let line = 1;
    let column = 0;
    let sourceMappingActive = false;

    const origHandlersNode = handlers.node;
    handlers.node = function(node) {
        if (node.loc && node.loc.start && trackNodes.has(node.type)) {
            const nodeLine = node.loc.start.line;
            const nodeColumn = node.loc.start.column - 1;

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
                    original,
                    generated
                });
            }
        }

        origHandlersNode.call(this, node);

        if (sourceMappingActive && trackNodes.has(node.type)) {
            activatedGenerated.line = line;
            activatedGenerated.column = column;
        }
    };

    const origHandlersEmit = handlers.emit;
    handlers.emit = function(value, type, auto) {
        for (let i = 0; i < value.length; i++) {
            if (value.charCodeAt(i) === 10) { // \n
                line++;
                column = 0;
            } else {
                column++;
            }
        }

        origHandlersEmit(value, type, auto);
    };

    const origHandlersResult = handlers.result;
    handlers.result = function() {
        if (sourceMappingActive) {
            map.addMapping(activatedMapping);
        }

        return {
            css: origHandlersResult(),
            map
        };
    };

    return handlers;
};
