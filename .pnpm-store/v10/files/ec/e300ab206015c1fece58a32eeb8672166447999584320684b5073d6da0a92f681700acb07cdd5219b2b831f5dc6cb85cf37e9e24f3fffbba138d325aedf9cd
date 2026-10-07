import { MomentInput } from "moment";
import { GraphQLScalarType, GraphQLFieldConfig } from "graphql";
interface IDateResolverOption {
    locale?: string;
    formatString?: string;
    fromNow?: boolean;
    difference?: string;
    from?: string;
    fromNode?: boolean;
}
type DateResolverFieldConfig = GraphQLFieldConfig<any, any, any>;
type DateResolver = (source: any, args: any, context: any, info: any) => Promise<null | string | number | Array<string | number>>;
export declare const GraphQLDate: GraphQLScalarType<string | undefined, string>;
/**
 * looksLikeADate isn't a 100% valid check if it is a real date but at least it's something that looks like a date.
 * It won't catch values like 2010-02-30
 * 1) is it a number?
 * 2) does the length of the value comply with any of our formats
 * 3) does the str starts with 4 digites (YYYY)
 * 4) does the str ends with something that looks like a date
 * 5) Small regex to see if it matches any of the formats
 * 6) check momentjs
 *
 * @param {*} value
 * @return {boolean}
 */
export declare function looksLikeADate(value?: string): boolean;
/**
 * @param {*} value
 * @return {boolean}
 */
export declare function isDate(value: MomentInput): boolean;
export declare const getDateResolver: (options: IDateResolverOption | undefined, fieldConfig: DateResolverFieldConfig) => {
    args: Record<string, any>;
    resolve: DateResolver;
};
export {};
