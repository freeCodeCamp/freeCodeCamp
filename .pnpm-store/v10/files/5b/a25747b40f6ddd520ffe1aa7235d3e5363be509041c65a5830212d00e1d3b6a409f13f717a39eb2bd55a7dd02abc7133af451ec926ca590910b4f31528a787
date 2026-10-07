import type { ASTVisitor } from '../../language/visitor';
import type { ValidationContext } from '../ValidationContext';
/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 *
 * See https://spec.graphql.org/draft/#sec-Field-Selection-Merging
 */
export declare function OverlappingFieldsCanBeMergedRule(
  context: ValidationContext,
): ASTVisitor;
