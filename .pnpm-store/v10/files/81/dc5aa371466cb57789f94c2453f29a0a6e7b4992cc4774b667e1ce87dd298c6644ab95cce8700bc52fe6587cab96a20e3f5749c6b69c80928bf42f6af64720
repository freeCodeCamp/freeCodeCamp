import { Disposables } from '../../utils/disposables.js';
interface DocEntry {
    doc: Document;
    count: number;
    d: Disposables;
    meta: Set<MetaFn>;
}
export type MetaFn = (meta: Record<string, any>) => Record<string, any>;
export interface Context<MetaType extends Record<string, any> = any> {
    doc: Document;
    d: Disposables;
    meta: MetaType;
}
export interface ScrollLockStep<MetaType extends Record<string, any> = any> {
    before?(ctx: Context<MetaType>): void;
    after?(ctx: Context<MetaType>): void;
}
export declare let overflows: import('../../utils/store.js').Store<Map<Document, DocEntry>, "PUSH" | "POP" | "SCROLL_PREVENT" | "SCROLL_ALLOW" | "TEARDOWN">;
export {};
