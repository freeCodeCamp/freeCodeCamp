"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TypeScriptEmbeddedExtension_1 = require("../TypeScriptEmbeddedExtension");
const fs_extra_1 = __importDefault(require("fs-extra"));
function createTypeScriptVueExtension(configuration) {
    function loadVueTemplateCompiler() {
        return require(configuration.compiler);
    }
    function isVueTemplateCompilerV2(compiler) {
        return typeof compiler.parseComponent === 'function';
    }
    function isVueTemplateCompilerV3(compiler) {
        return typeof compiler.parse === 'function';
    }
    function getExtensionByLang(lang) {
        if (lang === true) {
            return '.js';
        }
        switch (lang) {
            case 'ts':
                return '.ts';
            case 'tsx':
                return '.tsx';
            case 'js':
            case 'jsx':
            default:
                return '.js';
        }
    }
    function createVueNoScriptEmbeddedSource() {
        return {
            sourceText: 'export default {};\n',
            extension: '.js',
        };
    }
    function createVueSrcScriptEmbeddedSource(src, lang) {
        // Import path cannot be end with '.ts[x]'
        src = src.replace(/\.tsx?$/i, '');
        // For now, ignore the error when the src file is not found since it will produce incorrect code location.
        // It's not a large problem since it's handled on webpack side.
        const text = [
            '// @ts-ignore',
            `export { default } from '${src}';`,
            '// @ts-ignore',
            `export * from '${src}';`,
        ].join('\n');
        return {
            sourceText: text,
            extension: getExtensionByLang(lang),
        };
    }
    function createVueInlineScriptEmbeddedSource(text, lang) {
        return {
            sourceText: text,
            extension: getExtensionByLang(lang),
        };
    }
    function getVueEmbeddedSource(fileName) {
        if (!fs_extra_1.default.existsSync(fileName)) {
            return undefined;
        }
        const compiler = loadVueTemplateCompiler();
        const vueSourceText = fs_extra_1.default.readFileSync(fileName, { encoding: 'utf-8' });
        let script;
        if (isVueTemplateCompilerV2(compiler)) {
            const parsed = compiler.parseComponent(vueSourceText, {
                pad: 'space',
            });
            script = parsed.script;
        }
        else if (isVueTemplateCompilerV3(compiler)) {
            const parsed = compiler.parse(vueSourceText);
            if (parsed.descriptor && parsed.descriptor.script) {
                const scriptV3 = parsed.descriptor.script;
                // map newer version of SFCScriptBlock to the generic one
                script = {
                    content: scriptV3.content,
                    attrs: scriptV3.attrs,
                    start: scriptV3.loc.start.offset,
                    end: scriptV3.loc.end.offset,
                    lang: scriptV3.lang,
                    src: scriptV3.src,
                };
            }
        }
        else {
            throw new Error('Unsupported vue template compiler. Compiler should provide `parse` or `parseComponent` function.');
        }
        if (!script) {
            // No <script> block
            return createVueNoScriptEmbeddedSource();
        }
        else if (script.attrs.src) {
            // <script src="file.ts" /> block
            if (typeof script.attrs.src === 'string') {
                return createVueSrcScriptEmbeddedSource(script.attrs.src, script.attrs.lang);
            }
        }
        else {
            // <script lang="ts"></script> block
            // pad blank lines to retain diagnostics location
            const lineOffset = vueSourceText.slice(0, script.start).split(/\r?\n/g).length;
            const paddedSourceText = Array(lineOffset).join('\n') + vueSourceText.slice(script.start, script.end);
            return createVueInlineScriptEmbeddedSource(paddedSourceText, script.attrs.lang);
        }
    }
    return TypeScriptEmbeddedExtension_1.createTypeScriptEmbeddedExtension({
        embeddedExtensions: ['.vue'],
        getEmbeddedSource: getVueEmbeddedSource,
    });
}
exports.createTypeScriptVueExtension = createTypeScriptVueExtension;
