import { Headers as Headers_2 } from '@algolia/transporter';
import { HostOptions } from '@algolia/transporter';
import { QueryParameters } from '@algolia/transporter';
import { RequestOptions } from '@algolia/transporter';
import { Transporter } from '@algolia/transporter';
import { TransporterOptions } from '@algolia/transporter';

declare type AddedMethods<TBase, TMethods extends Methods<TBase>> = TBase & {
    [TKey in keyof TMethods extends string ? keyof TMethods : never]: ReturnType<TMethods[TKey]>;
};

export declare function addMethods<TBase extends {}, TMethods extends Methods<TBase>>(base: TBase, methods?: TMethods): AddedMethods<TBase, TMethods>;

export declare type Auth = {
    /**
     * Returns the headers related to auth. Should be
     * merged to the transporter headers.
     */
    readonly headers: () => Readonly<Record<string, string>>;
    /**
     * Returns the query parameters related to auth. Should be
     * merged to the query parameters headers.
     */
    readonly queryParameters: () => Readonly<Record<string, string>>;
};

export declare const AuthMode: Readonly<Record<string, AuthModeType>>;

export declare type AuthModeType = 0 | 1;

export declare type ClientTransporterOptions = Pick<TransporterOptions, Exclude<keyof TransporterOptions, 'headers'> & Exclude<keyof TransporterOptions, 'queryParameters'> & Exclude<keyof TransporterOptions, 'hosts'>> & {
    /**
     * The hosts used by the requester.
     */
    readonly hosts?: readonly HostOptions[];
    /**
     * The headers used by the requester. The transporter
     * layer may add some extra headers during the request
     * for the user agent, and others.
     */
    readonly headers?: Headers_2;
    /**
     * The query parameters used by the requester. The transporter
     * layer may add some extra headers during the request
     * for the user agent, and others.
     */
    readonly queryParameters?: QueryParameters;
};

export declare function createAuth(authMode: AuthModeType, appId: string, apiKey: string): Auth;

export declare type CreateClient<TClient, TOptions> = <TMethods extends {
    readonly [key: string]: (base: TClient) => (...args: any) => any;
}>(options: TOptions & {
    readonly methods?: TMethods;
}) => TClient & {
    [key in keyof TMethods extends string ? keyof TMethods : never]: ReturnType<TMethods[key]>;
};

export declare function createRetryablePromise<TResponse>(callback: (retry: () => Promise<TResponse>) => Promise<TResponse>): Promise<TResponse>;

export declare function createWaitablePromise<TResponse>(promise: Readonly<Promise<TResponse>>, wait?: Wait<TResponse>): Readonly<WaitablePromise<TResponse>>;

export declare const destroy: (base: {
    readonly transporter: Transporter;
}) => () => Readonly<Promise<void>>;

export declare function encode(format: string, ...args: readonly any[]): string;

declare type Methods<TBase> = {
    readonly [key: string]: (base: TBase) => (...args: any[]) => any;
};

export declare function shuffle<TData>(array: TData[]): TData[];

export declare const version = "4.26.0";

export declare type Wait<TResponse> = (
/**
 * The original response.
 */
response: TResponse, 
/**
 * The custom request options.
 */
requestOptions?: RequestOptions) => Readonly<Promise<any>>;

export declare type WaitablePromise<TResponse> = Readonly<Promise<TResponse>> & {
    /**
     * Wait for a task to complete before executing the next line of code, to synchronize index updates.
     *
     * All write operations in Algolia are asynchronous by design. It means that when you add or
     * update an object to your index, our servers will reply to your request with a taskID as
     * soon as they understood the write operation. The actual insert and indexing will be
     * done after replying to your code.
     *
     * You can wait for a task to complete by using this method.
     */
    readonly wait: (requestOptions?: RequestOptions) => Readonly<WaitablePromise<TResponse>>;
};

export { }
