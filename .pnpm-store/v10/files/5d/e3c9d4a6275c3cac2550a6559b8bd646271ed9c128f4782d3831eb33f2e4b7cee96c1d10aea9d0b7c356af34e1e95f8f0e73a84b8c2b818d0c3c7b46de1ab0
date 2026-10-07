import { RemarkStringifyOptions } from 'remark-stringify/types';
import { Attacher, Compiler } from 'unified';
import { Node } from 'unist';

interface Stringify extends Attacher {
  Compiler: Compiler;
  (options: RemarkStringifyOptions): void;
}
declare const stringify: Stringify;
export = stringify;
