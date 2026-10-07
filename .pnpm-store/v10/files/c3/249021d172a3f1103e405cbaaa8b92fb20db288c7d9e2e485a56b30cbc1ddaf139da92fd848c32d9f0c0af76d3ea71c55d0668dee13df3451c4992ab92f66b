export declare const validAttributeName: RegExp;
export declare function disconnectGlobalObserver(): void;
export declare function connectGlobalObserver(): void;
declare function html(selector: HTMLMutation['selector'], mutate: HTMLMutation['mutate']): MutationController;
declare function position(selector: PositionMutation['selector'], mutate: PositionMutation['mutate']): MutationController;
declare function classes(selector: ClassnameMutation['selector'], mutate: ClassnameMutation['mutate']): MutationController;
declare function attribute(selector: AttrMutation['selector'], attribute: AttrMutation['attribute'], mutate: AttrMutation['mutate']): MutationController;
declare function declarative({ selector, action, value, attribute: attr, parentSelector, insertBeforeSelector, }: DeclarativeMutation): MutationController;
export declare type MutationController = {
    revert: () => void;
};
export declare type DeclarativeMutation = {
    selector: string;
    attribute: string;
    action: 'append' | 'set' | 'remove';
    value?: string;
    parentSelector?: string;
    insertBeforeSelector?: string;
};
declare const _default: {
    html: typeof html;
    classes: typeof classes;
    attribute: typeof attribute;
    position: typeof position;
    declarative: typeof declarative;
};
export default _default;
