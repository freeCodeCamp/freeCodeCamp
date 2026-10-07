import type { Stats } from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";

declare namespace sirv {
	type Arrayable<T> = T | T[];

	export type NextHandler = () => void | Promise<void>;

	export type RequestHandler = (
		req: IncomingMessage,
		res: ServerResponse,
		next?: NextHandler,
	) => void;

	export interface Options {
		dev?: boolean;
		etag?: boolean;
		maxAge?: number;
		immutable?: boolean;
		single?: string | boolean;
		ignores?: false | Arrayable<string | RegExp>;
		extensions?: string[];
		dotfiles?: boolean;
		brotli?: boolean;
		gzip?: boolean;
		onNoMatch?: (req: IncomingMessage, res: ServerResponse) => void;
		setHeaders?: (res: ServerResponse, pathname: string, stats: Stats) => void;
	}
}

declare function sirv(dir?: string, opts?: sirv.Options): sirv.RequestHandler;

export = sirv;
