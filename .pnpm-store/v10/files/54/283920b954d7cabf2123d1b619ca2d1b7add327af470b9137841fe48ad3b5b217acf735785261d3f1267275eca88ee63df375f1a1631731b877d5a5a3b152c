import type { ASTVisitor } from '../../language/visitor';
import type { ASTValidationContext } from '../ValidationContext';
/**
 * No unused fragments
 *
 * A GraphQL document is only valid if all fragment definitions are spread
 * within operations, or spread within other fragments spread within operations.
 *
 * See https://spec.graphql.org/draft/#sec-Fragments-Must-Be-Used
 */
export declare function NoUnusedFragmentsRule(
  context: ASTValidationContext,
): ASTVisitor;
