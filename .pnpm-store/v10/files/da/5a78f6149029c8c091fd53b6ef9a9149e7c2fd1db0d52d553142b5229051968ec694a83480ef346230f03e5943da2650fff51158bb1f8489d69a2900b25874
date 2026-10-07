export interface Segment {
	old: string;
	type: number;
	val: string;
}

export type Route = Segment[];

export function exec(url: string, match: Route): Record<string, string>;
export function match(path: string, routes: Route[]): Route;
export function parse(path: string): Route;
