/**
 * Find a return statement in the current node
 *
 * @param {ASTNode} node The AST node being checked
 * @returns {ASTNode | false}
 */
export function findReturnStatement(node: ASTNode): ASTNode | false;
/**
 * Get properties for a given AST node
 * @param {ASTNode} node The AST node being checked.
 * @returns {Array} Properties array.
 */
export function getComponentProperties(node: ASTNode): any[];
/**
 * Gets the first node in a line from the initial node, excluding whitespace.
 * @param {Object} context The node to check
 * @param {ASTNode} node The node to check
 * @return {ASTNode} the first node in the line
 */
export function getFirstNodeInLine(context: any, node: ASTNode): ASTNode;
/**
 * Retrieve the name of a key node
 * @param {Context} context The AST node with the key.
 * @param {any} node The AST node with the key.
 * @return {string | undefined} the name of the key
 */
export function getKeyValue(context: Context, node: any): string | undefined;
/**
 * Get properties name
 * @param {Object} node - Property.
 * @returns {string} Property name.
 */
export function getPropertyName(node: any): string;
/**
 * Get node with property's name
 * @param {Object} node - Property.
 * @returns {Object} Property name node.
 */
export function getPropertyNameNode(node: any): any;
/**
 * Check if we are in a class constructor
 * @param {Context} context
 * @param {ASTNode} node The AST node being checked.
 * @return {boolean}
 */
export function inConstructor(context: Context, node: ASTNode): boolean;
/**
 * Checks if a node is being assigned a value: props.bar = 'bar'
 * @param {ASTNode} node The AST node being checked.
 * @returns {boolean}
 */
export function isAssignmentLHS(node: ASTNode): boolean;
/**
 * Matcher used to check whether given node is a `CallExpression`
 * @param {ASTNode} node The AST node
 * @returns {boolean} True if node is a `CallExpression`, false if not
 */
export function isCallExpression(node: ASTNode): boolean;
/**
 * Checks if the node is a class.
 * @param {ASTNode} node The node to check
 * @return {boolean} true if it's a class
 */
export function isClass(node: ASTNode): boolean;
/**
 * Checks if the node is a function.
 * @param {ASTNode} node The node to check
 * @return {boolean} true if it's a function
 */
export function isFunction(node: ASTNode): boolean;
/**
 * Checks if node is a function declaration or expression or arrow function.
 * @param {ASTNode} node The node to check
 * @return {boolean} true if it's a function-like
 */
export function isFunctionLike(node: ASTNode): boolean;
/**
 * Checks if the node is a function or arrow function expression.
 * @param {ASTNode} node The node to check
 * @return {boolean} true if it's a function-like expression
 */
export function isFunctionLikeExpression(node: ASTNode): boolean;
/**
 * Checks if the node is the first in its line, excluding whitespace.
 * @param {Object} context The node to check
 * @param {ASTNode} node The node to check
 * @return {boolean} true if it's the first node in its line
 */
export function isNodeFirstInLine(context: any, node: ASTNode): boolean;
/**
 * Checks if a node is surrounded by parenthesis.
 *
 * @param {object} context - Context from the rule
 * @param {ASTNode} node - Node to be checked
 * @returns {boolean}
 */
export function isParenthesized(context: object, node: ASTNode): boolean;
export function isTSAsExpression(node: any): boolean;
export function isTSFunctionType(node: any): boolean;
export function isTSInterfaceDeclaration(node: any): boolean;
export function isTSInterfaceHeritage(node: any): boolean;
export function isTSIntersectionType(node: any): boolean;
export function isTSParenthesizedType(node: any): boolean;
export function isTSTypeAliasDeclaration(node: any): boolean;
export function isTSTypeAnnotation(node: any): boolean;
export function isTSTypeDeclaration(node: any): boolean;
export function isTSTypeLiteral(node: any): boolean;
export function isTSTypeParameterInstantiation(node: any): boolean;
export function isTSTypeQuery(node: any): boolean;
export function isTSTypeReference(node: any): boolean;
/**
 * Wrapper for estraverse.traverse
 *
 * @param {ASTNode} ASTnode The AST node being checked
 * @param {Object} visitor Visitor Object for estraverse
 */
export function traverse(ASTnode: ASTNode, visitor: any): void;
/**
 * Helper function for traversing "returns" (return statements or the
 * returned expression in the case of an arrow function) of a function
 *
 * @param {ASTNode} ASTNode The AST node being checked
 * @param {Context} context The context of `ASTNode`.
 * @param {(returnValue: ASTNode, breakTraverse: () => void) => void} onReturn
 *   Function to execute for each returnStatement found
 * @returns {undefined}
 */
export function traverseReturns(ASTNode: ASTNode, context: Context, onReturn: (returnValue: ASTNode, breakTraverse: () => void) => void): undefined;
/**
 * Extracts the expression node that is wrapped inside a TS type assertion
 *
 * @param {ASTNode} node - potential TS node
 * @returns {ASTNode} - unwrapped expression node
 */
export function unwrapTSAsExpression(node: ASTNode): ASTNode;
//# sourceMappingURL=ast.d.ts.map