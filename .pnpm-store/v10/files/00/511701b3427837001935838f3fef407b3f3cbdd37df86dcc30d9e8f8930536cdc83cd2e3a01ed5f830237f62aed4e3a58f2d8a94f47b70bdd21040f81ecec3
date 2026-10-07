/***********************************************************************

  A JavaScript tokenizer / parser / beautifier / compressor.
  https://github.com/mishoo/UglifyJS2

  -------------------------------- (C) ---------------------------------

                           Author: Mihai Bazon
                         <mihai.bazon@gmail.com>
                       http://mihai.bazon.net/blog

  Distributed under the BSD license:

    Copyright 2012 (c) Mihai Bazon <mihai.bazon@gmail.com>

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:

        * Redistributions of source code must retain the above
          copyright notice, this list of conditions and the following
          disclaimer.

        * Redistributions in binary form must reproduce the above
          copyright notice, this list of conditions and the following
          disclaimer in the documentation and/or other materials
          provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
    OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
    THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

 ***********************************************************************/

"use strict";

import {SourceMapConsumer, SourceMapGenerator} from "@jridgewell/source-map";
import {defaults, HOP} from "./utils/index.js";

// a small wrapper around source-map and @jridgewell/source-map
function* SourceMap(options) {
    options = defaults(options, {
        file : null,
        root : null,
        orig : null,
        files: {},
    });

    var orig_map;
    var generator = new SourceMapGenerator({
        file       : options.file,
        sourceRoot : options.root
    });

    let sourcesContent = {__proto__: null};
    let files = options.files;
    for (var name in files) if (HOP(files, name)) {
        sourcesContent[name] = files[name];
    }
    if (options.orig) {
        // We support both @jridgewell/source-map (which has a sync
        // SourceMapConsumer) and source-map (which has an async
        // SourceMapConsumer).
        orig_map = yield new SourceMapConsumer(options.orig);
        if (orig_map.sourcesContent) {
            orig_map.sources.forEach(function(source, i) {
                var content = orig_map.sourcesContent[i];
                if (content) {
                    sourcesContent[source] = content;
                }
            });
        }
    }

    function add(source, gen_line, gen_col, orig_line, orig_col, name) {
        let generatedPos = { line: gen_line, column: gen_col };

        if (orig_map) {
            var info = orig_map.originalPositionFor({
                line: orig_line,
                column: orig_col
            });
            if (info.source === null) {
                generator.addMapping({
                    generated: generatedPos,
                    original: null,
                    source: null,
                    name: null
                });
                return;
            }
            source = info.source;
            orig_line = info.line;
            orig_col = info.column;
            name = info.name || name;
        }
        generator.addMapping({
            generated : generatedPos,
            original  : { line: orig_line, column: orig_col },
            source    : source,
            name      : name
        });
        generator.setSourceContent(source, sourcesContent[source]);
    }

    function clean(map) {
        const allNull = map.sourcesContent && map.sourcesContent.every(c => c == null);
        if (allNull) delete map.sourcesContent;
        if (map.file === undefined) delete map.file;
        if (map.sourceRoot === undefined) delete map.sourceRoot;
        return map;
    }

    function getDecoded() {
        if (!generator.toDecodedMap) return null;
        return clean(generator.toDecodedMap());
    }

    function getEncoded() {
        return clean(generator.toJSON());
    }

    function destroy() {
        // @jridgewell/source-map's SourceMapConsumer does not need to be
        // manually freed.
        if (orig_map && orig_map.destroy) orig_map.destroy();
    }

    return {
        add,
        getDecoded,
        getEncoded,
        destroy,
    };
}

export {
    SourceMap,
};
