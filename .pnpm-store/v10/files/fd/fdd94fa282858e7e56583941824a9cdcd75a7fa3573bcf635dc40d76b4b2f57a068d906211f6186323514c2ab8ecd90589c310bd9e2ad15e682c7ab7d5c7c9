import { DirectiveUsage } from './types.cjs';
import { DocumentNode } from 'graphql';
export type ArgumentToDirectives = {
    [argumentName: string]: DirectiveUsage[];
};
export type TypeAndFieldToArgumentDirectives = {
    [typeAndField: string]: ArgumentToDirectives;
};
export declare function getArgumentsWithDirectives(documentNode: DocumentNode): TypeAndFieldToArgumentDirectives;
