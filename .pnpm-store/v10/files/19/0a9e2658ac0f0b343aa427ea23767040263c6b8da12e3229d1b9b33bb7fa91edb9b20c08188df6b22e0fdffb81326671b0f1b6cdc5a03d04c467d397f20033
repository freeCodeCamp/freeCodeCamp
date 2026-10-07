import { DirectiveUsage } from './types.cjs';
import { DocumentNode } from 'graphql';
export declare type ArgumentToDirectives = {
    [argumentName: string]: DirectiveUsage[];
};
export declare type TypeAndFieldToArgumentDirectives = {
    [typeAndField: string]: ArgumentToDirectives;
};
export declare function getArgumentsWithDirectives(documentNode: DocumentNode): TypeAndFieldToArgumentDirectives;
