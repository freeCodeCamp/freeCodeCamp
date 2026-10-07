import type { ASTVisitor } from '../../language/visitor';
import type { ValidationContext } from '../ValidationContext';
/**
 * Subscriptions must only include a non-introspection field.
 *
 * A GraphQL subscription is valid only if it contains a single root field and
 * that root field is not an introspection field.
 *
 * See https://spec.graphql.org/draft/#sec-Single-root-field
 */
export declare function SingleFieldSubscriptionsRule(
  context: ValidationContext,
): ASTVisitor;
