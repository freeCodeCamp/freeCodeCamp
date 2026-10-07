### TypeScript VFS

A Map based TypeScript Virtual File System.

Useful when you need to:

- Run TypeScript in the browser
- Run virtual TypeScript environments where files on disk aren't the source of truth

### Usage

You start with creating a map which represents all the files in the virtual `ts.System`:

```ts
import { createSystem } from "@typescript/vfs"

const fsMap = new Map<string, string>()
fsMap.set("index.ts", 'const a = "Hello World"')

const system = createSystem(fsMap)
```

Then you can create a virtual TypeScript Environment:

```ts
import { createSystem, createVirtualTypeScriptEnvironment } from "@typescript/vfs"
import ts from "typescript"

const fsMap = new Map<string, string>()
const system = createSystem(fsMap)

const compilerOpts = {}
const env = createVirtualTypeScriptEnvironment(system, ["index.ts"], ts, compilerOpts)

// You can then interact with the languageService to introspect the code
env.languageService.getDocumentHighlights("index.ts", 0, ["index.ts"])
```

When working in tests, or in environments with file system access, you can switch your virtual system with `ts.sys` to use the real filesystem with the virtual environment.

## API

You're most likely interested in the API available in `env.languageService`, here it is as of 3.7.4:

<!-- prettier-ignore-start -->

```ts
interface LanguageService {
    cleanupSemanticCache(): void;
    getSyntacticDiagnostics(fileName: string): DiagnosticWithLocation[];
    getSemanticDiagnostics(fileName: string): Diagnostic[];
    getSuggestionDiagnostics(fileName: string): DiagnosticWithLocation[];
    getCompilerOptionsDiagnostics(): Diagnostic[];
    getEncodedSyntacticClassifications(fileName: string, span: TextSpan): Classifications;
    getEncodedSemanticClassifications(fileName: string, span: TextSpan): Classifications;
    getCompletionsAtPosition(fileName: string, position: number, options: GetCompletionsAtPositionOptions | undefined): WithMetadata<CompletionInfo> | undefined;
    getCompletionEntryDetails(fileName: string, position: number, name: string, formatOptions: FormatCodeOptions | FormatCodeSettings | undefined, source: string | undefined, preferences: UserPreferences | undefined): CompletionEntryDetails | undefined;
    getCompletionEntrySymbol(fileName: string, position: number, name: string, source: string | undefined): Symbol | undefined;
    getQuickInfoAtPosition(fileName: string, position: number): QuickInfo | undefined;
    getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): TextSpan | undefined;
    getBreakpointStatementAtPosition(fileName: string, position: number): TextSpan | undefined;
    getSignatureHelpItems(fileName: string, position: number, options: SignatureHelpItemsOptions | undefined): SignatureHelpItems | undefined;
    getRenameInfo(fileName: string, position: number, options?: RenameInfoOptions): RenameInfo;
    findRenameLocations(fileName: string, position: number, findInStrings: boolean, findInComments: boolean, providePrefixAndSuffixTextForRename?: boolean): readonly RenameLocation[] | undefined;
    getSmartSelectionRange(fileName: string, position: number): SelectionRange;
    getDefinitionAtPosition(fileName: string, position: number): readonly DefinitionInfo[] | undefined;
    getDefinitionAndBoundSpan(fileName: string, position: number): DefinitionInfoAndBoundSpan | undefined;
    getTypeDefinitionAtPosition(fileName: string, position: number): readonly DefinitionInfo[] | undefined;
    getImplementationAtPosition(fileName: string, position: number): readonly ImplementationLocation[] | undefined;
    getReferencesAtPosition(fileName: string, position: number): ReferenceEntry[] | undefined;
    findReferences(fileName: string, position: number): ReferencedSymbol[] | undefined;
    getDocumentHighlights(fileName: string, position: number, filesToSearch: string[]): DocumentHighlights[] | undefined;
    getNavigateToItems(searchValue: string, maxResultCount?: number, fileName?: string, excludeDtsFiles?: boolean): NavigateToItem[];
    getNavigationBarItems(fileName: string): NavigationBarItem[];
    getNavigationTree(fileName: string): NavigationTree;
    getOutliningSpans(fileName: string): OutliningSpan[];
    getTodoComments(fileName: string, descriptors: TodoCommentDescriptor[]): TodoComment[];
    getBraceMatchingAtPosition(fileName: string, position: number): TextSpan[];
    getIndentationAtPosition(fileName: string, position: number, options: EditorOptions | EditorSettings): number;
    getFormattingEditsForRange(fileName: string, start: number, end: number, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
    getFormattingEditsForDocument(fileName: string, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
    getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
    getDocCommentTemplateAtPosition(fileName: string, position: number): TextInsertion | undefined;
    isValidBraceCompletionAtPosition(fileName: string, position: number, openingBrace: number): boolean;
    getJsxClosingTagAtPosition(fileName: string, position: number): JsxClosingTagInfo | undefined;
    getSpanOfEnclosingComment(fileName: string, position: number, onlyMultiLine: boolean): TextSpan | undefined;
    toLineColumnOffset(fileName: string, position: number): LineAndCharacter;
    getCodeFixesAtPosition(fileName: string, start: number, end: number, errorCodes: readonly number[], formatOptions: FormatCodeSettings, preferences: UserPreferences): readonly CodeFixAction[];
    getCombinedCodeFix(scope: CombinedCodeFixScope, fixId: {}, formatOptions: FormatCodeSettings, preferences: UserPreferences): CombinedCodeActions;
    applyCodeActionCommand(action: CodeActionCommand, formatSettings?: FormatCodeSettings): Promise<ApplyCodeActionCommandResult>;
    applyCodeActionCommand(action: CodeActionCommand[], formatSettings?: FormatCodeSettings): Promise<ApplyCodeActionCommandResult[]>;
    applyCodeActionCommand(action: CodeActionCommand | CodeActionCommand[], formatSettings?: FormatCodeSettings): Promise<ApplyCodeActionCommandResult | ApplyCodeActionCommandResult[]>;
    getApplicableRefactors(fileName: string, positionOrRange: number | TextRange, preferences: UserPreferences | undefined): ApplicableRefactorInfo[];
    getEditsForRefactor(fileName: string, formatOptions: FormatCodeSettings, positionOrRange: number | TextRange, refactorName: string, actionName: string, preferences: UserPreferences | undefined): RefactorEditInfo | undefined;
    organizeImports(scope: OrganizeImportsScope, formatOptions: FormatCodeSettings, preferences: UserPreferences | undefined): readonly FileTextChanges[];
    getEditsForFileRename(oldFilePath: string, newFilePath: string, formatOptions: FormatCodeSettings, preferences: UserPreferences | undefined): readonly FileTextChanges[];
    getEmitOutput(fileName: string, emitOnlyDtsFiles?: boolean, forceDtsEmit?: boolean): EmitOutput;
    getProgram(): Program | undefined;
}
```
<!-- prettier-ignore-end -->

## Usage

#### When working with Web

It's **very** likely that you will need to set up your lib `*.d.ts` files to use this.

If you are running in an environment where you have access to the `node_modules` folder, then you can can write some code like this:

```ts
const getLib = (name: string) => {
  const lib = dirname(require.resolve("typescript"))
  return readFileSync(join(lib, name), "utf8")
}

const addLib = (name: string, map: Map<string, string>) => {
  map.set("/" + name, getLib(name))
}

const createDefaultMap2015 = () => {
  const fsMap = new Map<string, string>()
  addLib("lib.es2015.d.ts", fsMap)
  addLib("lib.es2015.collection.d.ts", fsMap)
  addLib("lib.es2015.core.d.ts", fsMap)
  addLib("lib.es2015.generator.d.ts", fsMap)
  addLib("lib.es2015.iterable.d.ts", fsMap)
  addLib("lib.es2015.promise.d.ts", fsMap)
  addLib("lib.es2015.proxy.d.ts", fsMap)
  addLib("lib.es2015.reflect.d.ts", fsMap)
  addLib("lib.es2015.symbol.d.ts", fsMap)
  addLib("lib.es2015.symbol.wellknown.d.ts", fsMap)
  addLib("lib.es5.d.ts", fsMap)
  return fsMap
}
```

This list is the default set of definitions (it's important to note that different options for `target` or `lib` will affect what this list looks like) and you are grabbing the library's content from the local dependency of TypeScript.

Keeping on top of this list is quite a lot of work, so this library ships functions for generating a map with with these pre-filled from a version of TypeScript available on disk.

Note: it's possible for this list to get out of sync with TypeScript over time. It was last synced with TypeScript 3.8.0-rc.

```ts
import { createDefaultMapFromNodeModules } from "@typescript/vfs"
import ts from "typescript"

const fsMap = createDefaultMapFromNodeModules({ target: ts.ScriptTarget.ES2015 })
fsMap.set("index.ts", "const hello = 'hi'")
// ...
```

If you don't have access to `node_modules`, then you can use the TypeScript CDN or unpkg to fetch the lib files. This could be up to about 1.5MB, and you should probably store the values in `localStorage` so that users only have to grab it once.

This is handled for you via `createDefaultMapFromCDN`.

```ts
import { createDefaultMapFromCDN } from "@typescript/vfs"
import ts from "typescript"
import lzstring from "lz-string"

const start = async () => {
  const shouldCache = true
  // This caches the lib files in the site's localStorage
  const fsMap = await createDefaultMapFromCDN({ target: ts.ScriptTarget.ES2015 }, "3.7.3", shouldCache, ts)

  // This stores the lib files as a zipped string to save space in the cache
  const otherMap = await createDefaultMapFromCDN({ target: ts.ScriptTarget.ES2015 }, "3.7.3", shouldCache, ts, lzstring)

  fsMap.set("index.ts", "const hello = 'hi'")
  // ...
}

start()
```

The CDN cache:

- Automatically purges items which use a different version of TypeScript to save space
- Can use a copy of the lz-string module for compressing/decompressing the lib files

#### When working with node

If you can reliably access the file-system, then you can have a simpler time:

```ts
const compilerOpts: ts.CompilerOptions = { target: ts.ScriptTarget.ES2016, esModuleInterop: true }
const fsMap = new Map<string, string>()

// If using imports where the types don't directly match up to their FS representation (like the
// imports for node) then use triple-slash directives to make sure globals are set up first.
const content = `/// <reference types="node" />\nimport * as path from 'path';\npath.`
fsMap.set("index.ts", content)

// By providing a project root, then the system knows how to resolve node_modules correctly
const projectRoot = path.join(__dirname, "..")
const system = createFSBackedSystem(fsMap, projectRoot)
const env = createVirtualTypeScriptEnvironment(system, ["index.ts"], ts, compilerOpts)

// Requests auto-completions at `path.|`
const completions = env.languageService.getCompletionsAtPosition("index.ts", content.length, {})
```

`createFSBackedSystem` will let you hover a virtual environment on top of the file system at a particular path.

### A full example

What does a full example look like? This comes basically verbatim from the TypeScript Sandbox codebase:

```ts
import ts from "typescript"
import tsvfs from "@typescript/vfs"
import lzstring from "lz-string"

const fsMap = await tsvfs.createDefaultMapFromCDN(compilerOptions, ts.version, true, ts, lzstring)
fsMap.set("index.ts", "// main TypeScript file content")

const system = tsvfs.createSystem(fsMap)
const host = tsvfs.createVirtualCompilerHost(system, compilerOptions, ts)

const program = ts.createProgram({
  rootNames: [...fsMap.keys()],
  options: compilerOptions,
  host: host.compilerHost,
})

// This will update the fsMap with new files
// for the .d.ts and .js files
program.emit()

// Now I can look at the AST for the .ts file too
const index = program.getSourceFile("index.ts")
```

## Using this Dependency

This package can be used as a commonjs import, an esmodule and directly via a script tag which edits the global namespace. All of these files are embedded inside the released packages.
