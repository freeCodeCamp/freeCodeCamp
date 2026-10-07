import type { Directives } from '../doc/directives';
import { Document } from '../doc/Document';
import type { ParsedNode } from '../nodes/Node';
import type { DocumentOptions, ParseOptions, SchemaOptions } from '../options';
import type * as CST from '../parse/cst';
import type { ComposeErrorHandler } from './composer';
export declare function composeDoc<Contents extends ParsedNode = ParsedNode, Strict extends boolean = true>(options: ParseOptions & DocumentOptions & SchemaOptions, directives: Directives, { offset, start, value, end }: CST.Document, onError: ComposeErrorHandler): Document.Parsed<Contents, Strict>;
