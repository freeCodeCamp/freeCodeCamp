import { AnyInterpreter } from './types';
declare type ServiceListener = (service: AnyInterpreter) => void;
export interface XStateDevInterface {
    register: (service: AnyInterpreter) => void;
    unregister: (service: AnyInterpreter) => void;
    onRegister: (listener: ServiceListener) => {
        unsubscribe: () => void;
    };
    services: Set<AnyInterpreter>;
}
export declare function getGlobal(): typeof globalThis | undefined;
export declare function registerService(service: AnyInterpreter): void;
export {};
//# sourceMappingURL=devTools.d.ts.map