import { EventObject, StateValue } from './types';
import { StateNode } from './StateNode';
declare type Configuration<TC, TE extends EventObject> = Iterable<StateNode<TC, any, TE>>;
declare type AdjList<TC, TE extends EventObject> = Map<StateNode<TC, any, TE>, Array<StateNode<TC, any, TE>>>;
export declare const isLeafNode: (stateNode: StateNode<any, any, any, any, any, any>) => boolean;
export declare function getAllChildren<TC, TE extends EventObject>(stateNode: StateNode<TC, any, TE>): Array<StateNode<TC, any, TE>>;
export declare function getChildren<TC, TE extends EventObject>(stateNode: StateNode<TC, any, TE>): Array<StateNode<TC, any, TE>>;
export declare function getAllStateNodes<TC, TE extends EventObject>(stateNode: StateNode<TC, any, TE, any, any, any>): Array<StateNode<TC, any, TE, any, any, any>>;
export declare function getConfiguration<TC, TE extends EventObject>(prevStateNodes: Iterable<StateNode<TC, any, TE, any, any, any>>, stateNodes: Iterable<StateNode<TC, any, TE, any, any, any>>): Set<StateNode<TC, any, TE, any, any, any>>;
export declare function getAdjList<TC, TE extends EventObject>(configuration: Configuration<TC, TE>): AdjList<TC, TE>;
export declare function getValue<TC, TE extends EventObject>(rootNode: StateNode<TC, any, TE, any>, configuration: Configuration<TC, TE>): StateValue;
export declare function has<T>(iterable: Iterable<T>, item: T): boolean;
export declare function nextEvents<TC, TE extends EventObject>(configuration: Array<StateNode<TC, any, TE>>): Array<TE['type']>;
export declare function isInFinalState<TC, TE extends EventObject>(configuration: Array<StateNode<TC, any, TE, any, any, any>>, stateNode: StateNode<TC, any, TE, any, any, any>): boolean;
export declare function getMeta(configuration?: StateNode[]): Record<string, any>;
export declare function getTagsFromConfiguration(configuration: StateNode<any, any, any, any>[]): Set<string>;
export {};
//# sourceMappingURL=stateUtils.d.ts.map