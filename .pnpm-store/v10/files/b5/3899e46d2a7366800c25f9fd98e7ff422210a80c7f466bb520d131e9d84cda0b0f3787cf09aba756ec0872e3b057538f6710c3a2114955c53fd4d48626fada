import type { ASTVisitor } from '../../language/visitor';
import type { ValidationContext } from '../ValidationContext';
/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */
export declare function PossibleFragmentSpreadsRule(
  context: ValidationContext,
): ASTVisitor;
