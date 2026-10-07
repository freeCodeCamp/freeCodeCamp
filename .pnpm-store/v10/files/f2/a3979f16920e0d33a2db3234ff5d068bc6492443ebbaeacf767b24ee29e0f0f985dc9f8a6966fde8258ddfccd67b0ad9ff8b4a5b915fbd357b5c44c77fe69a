// deno-fmt-ignore-file
import { Arguments } from '../system/arguments/index.mjs';
import { Build } from '../schema/index.mjs';
// ------------------------------------------------------------------
// Comments and Formatting
// ------------------------------------------------------------------
function TsIgnore() {
    return `// @ts-ignore`;
}
function Separator() {
    return ``;
}
// ------------------------------------------------------------------
// ImportSection
// ------------------------------------------------------------------
function ImportSection(build) {
    const context = build.UseUnevaluated() ? [`import { CheckContext } from "typebox/schema"`] : [];
    const hashing = `import { Hashing } from "typebox/system"`;
    const format = `import { Format } from "typebox/format"`;
    const guard = `import { Guard } from "typebox/guard"`;
    return [...context, hashing, format, guard];
}
// ------------------------------------------------------------------
// ExternalSection
// ------------------------------------------------------------------
function ExternalSection(build) {
    const { identifier } = build.External();
    return [
        Separator(),
        TsIgnore(),
        `let ${identifier} = []`,
        Separator(),
        TsIgnore(),
        `export function SetExternal(external) { ${identifier} = external.variables }`
    ];
}
// ------------------------------------------------------------------
// FunctionSection
// ------------------------------------------------------------------
function FunctionSection(build) {
    return build.Functions().map((func) => [Separator(), TsIgnore(), `${func};`].join('\n'));
}
// ------------------------------------------------------------------
// ExportSection
// ------------------------------------------------------------------
function ExportSection(build) {
    const body = build.UseUnevaluated()
        ? `const context = new CheckContext({}, {}); return ${build.Call()}`
        : `return ${build.Call()}`;
    return [
        Separator(),
        TsIgnore(),
        `export function Check(value) { ${body} }`
    ];
}
/** Creates a standalone ESM validation module for the given type. */
export function Code(...args) {
    const [context, type] = Arguments.Match(args, {
        2: (context, type) => [context, type],
        1: (type) => [{}, type]
    });
    const build = Build(context, type);
    const code = [...ImportSection(build), ...ExternalSection(build), ...FunctionSection(build), ...ExportSection(build)].join('\n');
    return { External: build.External(), Code: code };
}
