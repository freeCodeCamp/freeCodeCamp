import { ImmerBaseState, ImmerState, Drafted, AnyObject, AnyArray, Objectish, ProxyType } from "../internal";
interface ProxyBaseState extends ImmerBaseState {
    assigned_: {
        [property: string]: boolean;
    };
    parent_?: ImmerState;
    revoke_(): void;
}
export interface ProxyObjectState extends ProxyBaseState {
    type_: ProxyType.ProxyObject;
    base_: any;
    copy_: any;
    draft_: Drafted<AnyObject, ProxyObjectState>;
}
export interface ProxyArrayState extends ProxyBaseState {
    type_: ProxyType.ProxyArray;
    base_: AnyArray;
    copy_: AnyArray | null;
    draft_: Drafted<AnyArray, ProxyArrayState>;
}
declare type ProxyState = ProxyObjectState | ProxyArrayState;
/**
 * Returns a new draft of the `base` object.
 *
 * The second argument is the parent draft-state (used internally).
 */
export declare function createProxyProxy<T extends Objectish>(base: T, parent?: ImmerState): Drafted<T, ProxyState>;
/**
 * Object drafts
 */
export declare const objectTraps: ProxyHandler<ProxyState>;
export declare function markChanged(state: ImmerState): void;
export declare function prepareCopy(state: {
    base_: any;
    copy_: any;
}): void;
export {};
//# sourceMappingURL=proxy.d.ts.map