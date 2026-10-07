import { Spec } from '../../primitives.js';
/**
 * Splits `spect.lines[].token.description` into other tokens,
 * and populates the spec.{tag, name, type, description}. Invoked in a chaing
 * with other tokens, operations listed above can be moved to separate tokenizers
 */
export type Tokenizer = (spec: Spec) => Spec;
