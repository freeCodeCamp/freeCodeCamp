import { JSXAttribute, JSXIdentifier, JSXNamespacedName, JSXOpeningElement } from "@babel/types";
import { NodePath as CoreNodePath } from "@babel/core";
import { NodePath as TraverseNodePath } from "@babel/traverse";
export declare function parseIdentifier(identifier: JSXIdentifier | JSXNamespacedName): string;
/**
 * Get all attribute values of a JSX element. This only includes values that can be statically-analysed.
 * Pass the `onError` callback to be notified if an attribute cannot be resolved.
 *
 * @param nodePath The NodePath of the JSX opening element
 * @param onError Called with the attribute name and path if it is present but cannot be resolved
 * @param include If present, only these props are evaluated. Does not apply to spread attributes.
 */
export declare function getAttributeValues(nodePath: CoreNodePath<JSXOpeningElement> | TraverseNodePath<JSXOpeningElement>, onError?: (attributeName: string, attributePath?: CoreNodePath<JSXAttribute>) => void, include?: Set<string>): Record<string, unknown>;
/**
 * Attempt to get the value of a JSX attribute. Returns an object with the
 * properties `confident`, which is false if the value cannot be resolved
 * in the current scope, and `value` which is the value if it can be.
 *
 * If the attribute is empty, then the returned value is `true`, e.g.
 * `<Image eager />` would return `true` for the `eager` attribute.
 *
 * @param nodePath The NodePath of the JSXAttribute
 */
export declare function getAttributeValue<T = unknown>(nodePath: CoreNodePath<JSXAttribute> | TraverseNodePath<JSXAttribute>): {
    confident: boolean;
    value: T | true;
};
