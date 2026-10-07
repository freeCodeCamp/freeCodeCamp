import { parse } from 'graphql';
export function parseSelectionSet(selectionSet, options) {
    const query = parse(selectionSet, options).definitions[0];
    return query.selectionSet;
}
