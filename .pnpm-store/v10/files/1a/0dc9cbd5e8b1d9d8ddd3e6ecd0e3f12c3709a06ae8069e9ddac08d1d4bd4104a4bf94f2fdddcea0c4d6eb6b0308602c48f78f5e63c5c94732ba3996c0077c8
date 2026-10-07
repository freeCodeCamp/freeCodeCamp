// See https://github.com/facebook/jest/issues/2549
// eslint-disable-next-line node/prefer-global/url
import {URL} from 'url';
import {EventEmitter} from 'events';
import tls = require('tls');
import http = require('http');
import https = require('https');
import http2 = require('http2');

// Note: do not convert this to import from.
import QuickLRU = require('quick-lru');

export interface RequestOptions extends Omit<https.RequestOptions, 'session' | 'agent'> {
	tlsSession?: tls.ConnectionOptions['session'];
	h2session?: http2.ClientHttp2Session;
	agent?: Agent | false;

	// Required because @types/node is missing types
	ALPNProtocols?: string[];
}

export interface AutoRequestOptions extends Omit<RequestOptions, 'agent' | 'h2session'> {
	agent?: {
		http?: http.Agent | false;
		https?: https.Agent | false;
		http2?: Agent | false;
	};
	resolveProtocol?: ResolveProtocolFunction;
}

export interface EntryFunction {
	(): Promise<void>;

	completed: boolean;
	destroyed: boolean;
	listeners: PromiseListeners;
}

export interface AgentOptions {
	timeout?: number;
	maxSessions?: number;
	maxEmptySessions?: number;
	maxCachedTlsSessions?: number;
}

export interface PromiseListeners {
	resolve: (value: unknown) => void;
	reject: (error: Error) => void;
}

export class Agent extends EventEmitter {
	sessions: Record<string, http2.ClientHttp2Session[]>;
	queue: Record<string, Record<string, EntryFunction>>;

	timeout: number;
	maxSessions: number;
	maxEmptySessions: number;
	protocol: string;
	settings: http2.Settings;

	tlsSessionCache: QuickLRU<string, string>;

	emptySessionCount: number;
	pendingSessionCount: number;
	sessionCount: number;

	constructor(options?: AgentOptions);

	static connect(origin: URL, options: http2.SecureClientSessionOptions): tls.TLSSocket;

	normalizeOptions(options: http2.ClientSessionRequestOptions): string;

	getSession(origin: string | URL, options?: http2.SecureClientSessionOptions, listeners?: PromiseListeners): Promise<http2.ClientHttp2Session>;
	request(origin: string | URL, options?: http2.SecureClientSessionOptions, headers?: http2.OutgoingHttpHeaders, streamOptions?: http2.ClientSessionRequestOptions): Promise<http2.ClientHttp2Stream>;

	createConnection(origin: URL, options: http2.SecureClientSessionOptions): Promise<tls.TLSSocket>;

	closeEmptySessions(count?: number): void;
	destroy(reason?: Error): void;
}

export interface ProxyOptions {
	headers?: http2.OutgoingHttpHeaders;
	raw?: boolean;
	url: URL | string;
}

export namespace proxies {
	class HttpOverHttp2 extends http.Agent {
		constructor(options: http.AgentOptions & {proxyOptions: ProxyOptions});
	}

	class HttpsOverHttp2 extends https.Agent {
		constructor(options: https.AgentOptions & {proxyOptions: ProxyOptions});
	}

	class Http2OverHttp2 extends Agent {
		constructor(options: AgentOptions & {proxyOptions: ProxyOptions});
	}

	class Http2OverHttp extends Agent {
		constructor(options: AgentOptions & {proxyOptions: ProxyOptions});
	}

	class Http2OverHttps extends Agent {
		constructor(options: AgentOptions & {proxyOptions: ProxyOptions});
	}
}

export type RequestFunction<T, O = RequestOptions> =
	((url: string | URL, options?: O, callback?: (response: http.IncomingMessage) => void) => T) &
	((url: string | URL, callback?: (response: http.IncomingMessage) => void) => T) &
	((options: O, callback?: (response: http.IncomingMessage) => void) => T);

export const globalAgent: Agent;

export type ResolveProtocolResult = {
	alpnProtocol: string;
	socket?: tls.TLSSocket;
	timeout?: boolean;
};
export type ResolveProtocolFunction = (options: AutoRequestOptions) => Promise<ResolveProtocolResult>;

type Promisable<T> = T | Promise<T>;

export type ResolveProtocolConnectFunction = (options: tls.ConnectionOptions, callback: () => void) => Promisable<tls.TLSSocket>;

export const request: RequestFunction<http.ClientRequest>;
export const get: RequestFunction<http.ClientRequest>;
export const auto: RequestFunction<Promise<http.ClientRequest>, AutoRequestOptions> & {
	protocolCache: QuickLRU<string, string>;
	resolveProtocol: ResolveProtocolFunction;
	createResolveProtocol: (cache: Map<string, string>, queue: Map<string, Promise<ResolveProtocolResult>>, connect?: ResolveProtocolConnectFunction) => ResolveProtocolFunction;
};

export {
	ClientRequest,
	IncomingMessage
} from 'http';

export * from 'http2';
