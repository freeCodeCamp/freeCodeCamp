import { TypeScriptExtension } from './TypeScriptExtension';
interface TypeScriptEmbeddedSource {
    sourceText: string;
    extension: '.ts' | '.tsx' | '.js';
}
interface TypeScriptEmbeddedExtensionHost {
    embeddedExtensions: string[];
    getEmbeddedSource(fileName: string): TypeScriptEmbeddedSource | undefined;
}
/**
 * It handles most of the logic required to process embedded TypeScript code (like in Vue components or MDX)
 *
 * @param embeddedExtensions List of file extensions that should be treated as an embedded TypeScript source
 *                           (for example ['.vue'])
 * @param getEmbeddedSource  Function that returns embedded TypeScript source text and extension that this file
 *                           would have if it would be a regular TypeScript file
 */
declare function createTypeScriptEmbeddedExtension({ embeddedExtensions, getEmbeddedSource, }: TypeScriptEmbeddedExtensionHost): TypeScriptExtension;
export { TypeScriptEmbeddedExtensionHost, TypeScriptEmbeddedSource, createTypeScriptEmbeddedExtension, };
