import type { IncomingMessage } from 'http';

export interface ParsedURL {
	pathname: string;
	search: string;
	query: Record<string, string | string[]> | undefined;
	hash: string | undefined;
	raw: string;
}

export function parse(req: IncomingMessage): ParsedURL;
