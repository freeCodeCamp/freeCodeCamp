import { RequestContext } from "../transfer";
import { ConnectConfiguration } from "./config";
export interface ConnectionManagerConfiguration {
    /**
     * Maximum number of allowed concurrent requests per connection.
     */
    maxConcurrency?: number;
    /**
     * Disables concurrent requests per connection.
     */
    disableConcurrency?: boolean;
}
export interface ConnectionManager<T> {
    /**
     * Retrieves a connection from the connection pool if available,
     * otherwise establish a new connection
     */
    lease(requestContext: RequestContext, connectionConfiguration: ConnectConfiguration): T;
    /**
     * Releases the connection back to the pool making it potentially
     * re-usable by other requests.
     */
    release(requestContext: RequestContext, connection: T): void;
    /**
     * Destroys the connection manager. All connections will be closed.
     */
    destroy(): void;
}
