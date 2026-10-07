import type { ASTVisitor } from '../../language/visitor';
import type { ValidationContext } from '../ValidationContext';
/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 *
 * See https://spec.graphql.org/draft/#sec-Fragments-On-Composite-Types
 */
export declare function FragmentsOnCompositeTypesRule(
  context: ValidationContext,
): ASTVisitor;
