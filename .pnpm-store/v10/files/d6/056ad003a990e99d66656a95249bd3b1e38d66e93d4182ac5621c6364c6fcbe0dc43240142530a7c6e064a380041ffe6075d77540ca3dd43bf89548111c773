import { IMatch } from "../types";
import { SourceLocation } from "graphql";
interface IErrorParser {
    message: string;
    filePath: string | undefined;
    location: {
        start: SourceLocation;
        end?: SourceLocation;
    } | undefined;
    error?: Error;
}
declare const errorParser: ({ message, filePath, location, error, }: IErrorParser) => IMatch;
export default errorParser;
interface ILocOfGraphQLDocInSrcFile {
    start: SourceLocation;
    end: SourceLocation;
    fileName: boolean;
}
export declare const locInGraphQlToLocInFile: (locationOfGraphQLDocInSourceFile: ILocOfGraphQLDocInSrcFile, graphqlLocation: SourceLocation) => SourceLocation;
