export interface ICommonAudioContext {
    readonly baseLatency: number;

    close(): Promise<void>;

    // @todo This should be part of the IMinimalBaseAudioContext.
    resume(): Promise<void>;

    suspend(): Promise<void>;
}
