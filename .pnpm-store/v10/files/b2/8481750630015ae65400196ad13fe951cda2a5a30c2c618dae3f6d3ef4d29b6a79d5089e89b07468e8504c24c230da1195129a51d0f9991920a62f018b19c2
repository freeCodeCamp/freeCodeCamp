import type { PgPoolClient } from './pg-types';
export interface PgPool {
    readonly totalCount: number;
    readonly idleCount: number;
    readonly waitingCount: number;
    readonly expiredCount: number;
    readonly ending: boolean;
    readonly ended: boolean;
    options: any;
    connect(): Promise<PgPoolClient>;
    connect(callback: (err: Error | undefined, client: PgPoolClient | undefined, done: (release?: any) => void) => void): void;
    end(): Promise<void>;
    end(callback: () => void): void;
    query(...args: any[]): any;
    on(event: 'release' | 'error', listener: (err: Error, client: PgPoolClient) => void): this;
    on(event: 'connect' | 'acquire' | 'remove', listener: (client: PgPoolClient) => void): this;
    on(event: string, listener: (...args: any[]) => void): this;
    [key: string]: any;
}
//# sourceMappingURL=pg-pool-types.d.ts.map