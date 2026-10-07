import http2 from "http2";
import { NodeHttp2ConnectionPool } from "./node-http2-connection-pool";
export class NodeHttp2ConnectionManager {
    constructor(config) {
        this.sessionCache = new Map();
        this.config = config;
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
            throw new RangeError("maxConcurrency must be greater than zero.");
        }
    }
    lease(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const existingPool = this.sessionCache.get(url);
        if (existingPool) {
            const existingSession = existingPool.poll();
            if (existingSession && !this.config.disableConcurrency) {
                return existingSession;
            }
        }
        const session = http2.connect(url);
        if (this.config.maxConcurrency) {
            session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err) => {
                if (err) {
                    throw new Error("Fail to set maxConcurrentStreams to " +
                        this.config.maxConcurrency +
                        "when creating new session for " +
                        requestContext.destination.toString());
                }
            });
        }
        session.unref();
        const destroySessionCb = () => {
            session.destroy();
            this.deleteSession(url, session);
        };
        session.on("goaway", destroySessionCb);
        session.on("error", destroySessionCb);
        session.on("frameError", destroySessionCb);
        session.on("close", () => this.deleteSession(url, session));
        if (connectionConfiguration.requestTimeout) {
            session.setTimeout(connectionConfiguration.requestTimeout, destroySessionCb);
        }
        const connectionPool = this.sessionCache.get(url) || new NodeHttp2ConnectionPool();
        connectionPool.offerLast(session);
        this.sessionCache.set(url, connectionPool);
        return session;
    }
    deleteSession(authority, session) {
        const existingConnectionPool = this.sessionCache.get(authority);
        if (!existingConnectionPool) {
            return;
        }
        if (!existingConnectionPool.contains(session)) {
            return;
        }
        existingConnectionPool.remove(session);
        this.sessionCache.set(authority, existingConnectionPool);
    }
    release(requestContext, session) {
        const cacheKey = this.getUrlString(requestContext);
        this.sessionCache.get(cacheKey)?.offerLast(session);
    }
    destroy() {
        for (const [key, connectionPool] of this.sessionCache) {
            for (const session of connectionPool) {
                if (!session.destroyed) {
                    session.destroy();
                }
                connectionPool.remove(session);
            }
            this.sessionCache.delete(key);
        }
    }
    setMaxConcurrentStreams(maxConcurrentStreams) {
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
            throw new RangeError("maxConcurrentStreams must be greater than zero.");
        }
        this.config.maxConcurrency = maxConcurrentStreams;
    }
    setDisableConcurrentStreams(disableConcurrentStreams) {
        this.config.disableConcurrency = disableConcurrentStreams;
    }
    getUrlString(request) {
        return request.destination.toString();
    }
}
