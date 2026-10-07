import { Block } from '../primitives.js';

export type Transform = (Block: Block) => Block;

export function flow(...transforms: Transform[]): Transform {
  return (block: Block): Block =>
    transforms.reduce((block, t) => t(block), block);
}
