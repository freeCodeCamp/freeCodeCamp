import type { Node } from 'estree';

declare function visit(
    node: Node,
    keys: { [k in Node['type']]?: (keyof Node)[] },
    visitorSpec: { [k in Node['type'] | `${Node['type']}:Exit`]?: Function }
): void;

export default visit;
