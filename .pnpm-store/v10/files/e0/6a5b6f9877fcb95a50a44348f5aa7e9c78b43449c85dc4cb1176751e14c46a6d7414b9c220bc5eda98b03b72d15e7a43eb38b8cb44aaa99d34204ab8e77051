import yargs = require("./index.js");
interface RequireType {
    (path: string): Function;
    main: MainType;
}

interface MainType {
    filename: string;
    children: MainType[];
}
declare const _instanceFactory: (
    processArgs?: ReadonlyArray<string> | string,
    cwd?: string,
    parentRequire?: RequireType,
) => yargs.Argv;
export default _instanceFactory;

export type {
    Arguments,
    ArgumentsCamelCase,
    Argv,
    AsyncCompletionFunction,
    BuilderArguments,
    BuilderCallback,
    Choices,
    CommandBuilder,
    CommandModule,
    CompletionCallback,
    Defined,
    FallbackCompletionFunction,
    InferredOptionType,
    InferredOptionTypeInner,
    InferredOptionTypePrimitive,
    InferredOptionTypes,
    MiddlewareFunction,
    Options,
    ParseCallback,
    ParserConfigurationOptions,
    PositionalOptions,
    PositionalOptionsType,
    PromiseCompletionFunction,
    RequireDirectoryOptions,
    SyncCompletionFunction,
    ToArray,
    ToNumber,
    ToString,
} from "./index.js";
