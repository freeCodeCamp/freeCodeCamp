import type { ASTVisitor } from '../../language/visitor';
import type { ASTValidationContext } from '../ValidationContext';
/**
 * No fragment cycles
 *
 * The graph of fragment spreads must not form any cycles including spreading itself.
 * Otherwise an operation could infinitely spread or infinitely execute on cycles in the underlying data.
 *
 * See https://spec.graphql.org/draft/#sec-Fragment-spreads-must-not-form-cycles
 */
export declare function NoFragmentCyclesRule(
  context: ASTValidationContext,
): ASTVisitor;
