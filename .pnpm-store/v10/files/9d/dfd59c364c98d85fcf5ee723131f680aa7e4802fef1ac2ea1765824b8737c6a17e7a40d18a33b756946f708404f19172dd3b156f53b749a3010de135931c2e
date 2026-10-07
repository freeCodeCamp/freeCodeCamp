import { Reporter } from "gatsby-cli/lib/reporter/reporter";
import { WebpackError, StatsCompilation } from "webpack";
import { Stage as StageEnum } from "../commands/types";
interface IFileLocation {
    line: number;
    column: number;
}
interface ITransformedWebpackError {
    id: string;
    filePath: string;
    location?: {
        start: IFileLocation;
        end: IFileLocation;
    };
    context: {
        stage: StageEnum;
        stageLabel: string;
        sourceMessage?: string;
        [key: string]: unknown;
    };
}
export declare const structureWebpackErrors: (stage: StageEnum, webpackError: WebpackError | Array<WebpackError>) => Array<ITransformedWebpackError> | ITransformedWebpackError;
export declare const reportWebpackWarnings: (warnings: StatsCompilation["warnings"], reporter: Reporter) => void;
export {};
