type RenderEnv = 'client' | 'server';
type HandoffState = 'pending' | 'complete';
declare class Env {
    current: RenderEnv;
    handoffState: HandoffState;
    currentId: number;
    set(env: RenderEnv): void;
    reset(): void;
    nextId(): number;
    get isServer(): boolean;
    get isClient(): boolean;
    private detect;
    handoff(): void;
    get isHandoffComplete(): boolean;
}
export declare let env: Env;
export {};
