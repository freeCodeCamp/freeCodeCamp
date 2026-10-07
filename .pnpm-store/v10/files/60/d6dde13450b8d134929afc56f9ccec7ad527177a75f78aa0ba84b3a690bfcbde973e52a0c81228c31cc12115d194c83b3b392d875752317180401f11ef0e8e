import type { ASTVisitor } from '../../language/visitor';
import type { ASTValidationContext } from '../ValidationContext';
/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 *
 * See https://spec.graphql.org/draft/#sec-Lone-Anonymous-Operation
 */
export declare function LoneAnonymousOperationRule(
  context: ASTValidationContext,
): ASTVisitor;
