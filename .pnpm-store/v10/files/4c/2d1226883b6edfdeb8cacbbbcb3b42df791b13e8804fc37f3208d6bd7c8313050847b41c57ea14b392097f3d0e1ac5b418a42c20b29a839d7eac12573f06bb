import { StateNode, ActionObject, Guard, InvokeDefinition } from './';
interface JSONFunction {
    $function: string;
}
export declare function stringifyFunction(fn: Function): JSONFunction;
interface TransitionConfig {
    target: string[];
    source: string;
    actions: Array<ActionObject<any, any>>;
    cond: Guard<any, any> | undefined;
    eventType: string;
}
interface StateNodeConfig {
    type: StateNode['type'];
    id: string;
    key: string;
    initial?: string;
    entry: Array<ActionObject<any, any>>;
    exit: Array<ActionObject<any, any>>;
    on: {
        [key: string]: TransitionConfig[];
    };
    invoke: Array<InvokeDefinition<any, any>>;
    states: Record<string, StateNodeConfig>;
}
export declare function machineToJSON(stateNode: StateNode): StateNodeConfig;
export declare function stringify(machine: StateNode): string;
export declare function parse(machineString: string): StateNodeConfig;
export declare function jsonify<T extends Record<string, any>>(value: T): T;
export {};
//# sourceMappingURL=json.d.ts.map