export declare type Destroyable = {
    /**
     * Destroy any sockets that are currently in use by the agent.
     *
     * It is usually not necessary to do this. However, if using an agent with keepAlive enabled, then
     * it is best to explicitly shut down the agent when it will no longer be used. Otherwise, sockets
     * may hang open for quite a long time before the server terminates them.
     */
    readonly destroy: () => Readonly<Promise<void>>;
};

export declare const MethodEnum: Readonly<Record<string, MethodType>>;

export declare type MethodType = 'DELETE' | 'GET' | 'POST' | 'PUT';

declare type Request_2 = {
    /**
     * The headers of the request.
     */
    readonly headers: Readonly<Record<string, string>>;
    /**
     * The method of the request. `GET`, etc.
     */
    readonly method: MethodType;
    /**
     * The complete url of the request, with the protocol.
     */
    readonly url: string;
    /**
     * The timeout to stablish a connection with the server.
     */
    readonly connectTimeout: number;
    /**
     * The timeout to receive the response.
     */
    readonly responseTimeout: number;
    /**
     * The data to be transfered to the server.
     */
    readonly data: string | undefined;
};
export { Request_2 as Request }

export declare type Requester = {
    /**
     * Sends the given `request` to the server.
     */
    readonly send: (request: Request_2) => Readonly<Promise<Response_2>>;
};

declare type Response_2 = {
    /**
     * The raw response from the server.
     */
    content: string;
    /**
     * If the request timeouted.
     */
    isTimedOut: boolean;
    /**
     * The http status code.
     */
    status: number;
};
export { Response_2 as Response }

export { }
