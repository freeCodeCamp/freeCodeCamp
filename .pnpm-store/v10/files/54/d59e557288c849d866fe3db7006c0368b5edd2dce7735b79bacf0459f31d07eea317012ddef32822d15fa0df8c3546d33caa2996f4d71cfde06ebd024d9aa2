import { Kind } from 'graphql';
import { env } from 'process';
/**
 * @internal
 */
export const filterKind = (content, filterKinds) => {
    if (content && content.definitions && content.definitions.length && filterKinds && filterKinds.length > 0) {
        const invalidDefinitions = [];
        const validDefinitions = [];
        for (const definitionNode of content.definitions) {
            if (filterKinds.includes(definitionNode.kind)) {
                invalidDefinitions.push(definitionNode);
            }
            else {
                validDefinitions.push(definitionNode);
            }
        }
        if (invalidDefinitions.length > 0) {
            if (env['DEBUG']) {
                for (const d of invalidDefinitions) {
                    console.log(`Filtered document of kind ${d.kind} due to filter policy (${filterKinds.join(', ')})`);
                }
            }
        }
        return {
            kind: Kind.DOCUMENT,
            definitions: validDefinitions,
        };
    }
    return content;
};
