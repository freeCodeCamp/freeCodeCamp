import * as React from "./";
export { Fragment, JSX } from "./";

export interface JSXSource {
    /**
     * The source file where the element originates from.
     */
    fileName?: string | undefined;

    /**
     * The line number where the element was created.
     */
    lineNumber?: number | undefined;

    /**
     * The column number where the element was created.
     */
    columnNumber?: number | undefined;
}

/**
 * Create a React element.
 *
 * You should not use this function directly. Use JSX and a transpiler instead.
 */
export function jsxDEV(
    type: React.ElementType,
    props: unknown,
    key: React.Key | undefined,
    isStatic: boolean,
    source?: JSXSource,
    self?: unknown,
): React.ReactElement;
