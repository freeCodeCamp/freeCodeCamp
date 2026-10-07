export type TMutable = {
    [key: string]: unknown;
} | unknown[];
/**
 * Performs a deep structural assignment, applying values from next to current while retaining internal references. This function
 * is written for use in infrastructure that interprets reference changes as a signal to perform some action (i.e. React redraw), this
 * function can mitigate this by applying mutable updates deep within a value, ensuring parent references are retained.
 *
 * @deprecated This function is being removed in the next version but will be retained as a reference under examples.
 */
export declare function Mutate(current: TMutable, next: TMutable): void;
