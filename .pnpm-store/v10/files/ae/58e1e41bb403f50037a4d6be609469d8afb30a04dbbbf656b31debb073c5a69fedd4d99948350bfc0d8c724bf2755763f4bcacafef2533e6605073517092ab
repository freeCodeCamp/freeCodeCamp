import { happyDomTypes, jsdomTypes } from 'vitest/optional-types.js';

type Awaitable<T> = T | PromiseLike<T>;
type Nullable<T> = T | null | undefined;
type Arrayable<T> = T | Array<T>;
type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never;
type MutableArray<T extends readonly any[]> = { -readonly [k in keyof T] : T[k] };
interface Constructable {
	new (...args: any[]): any;
}
type TransformMode = "web" | "ssr";
/** @deprecated not used */
interface ModuleCache {
	promise?: Promise<any>;
	exports?: any;
	code?: string;
}
interface AfterSuiteRunMeta {
	coverage?: unknown;
	testFiles: string[];
	transformMode: TransformMode | "browser";
	projectName?: string;
}
interface UserConsoleLog {
	content: string;
	origin?: string;
	browser?: boolean;
	type: "stdout" | "stderr";
	taskId?: string;
	time: number;
	size: number;
}
interface ModuleGraphData {
	graph: Record<string, string[]>;
	externalized: string[];
	inlined: string[];
}
interface ProvidedContext {}
// These need to be compatible with Tinyrainbow's bg-colors, and CSS's background-color
type LabelColor = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white";

type HappyDOMOptions = Omit<NonNullable<ConstructorParameters<typeof happyDomTypes.Window>[0]>, "console">;

type JSDOMOptions = ConstructorOptionsOverride & Omit<jsdomTypes.ConstructorOptions, keyof ConstructorOptionsOverride>;
interface ConstructorOptionsOverride {
	/**
	* The html content for the test.
	*
	* @default '<!DOCTYPE html>'
	*/
	html?: string | ArrayBufferLike;
	/**
	* userAgent affects the value read from navigator.userAgent, as well as the User-Agent header sent while fetching subresources.
	*
	* @default `Mozilla/5.0 (${process.platform}) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/${jsdomVersion}`
	*/
	userAgent?: string;
	/**
	* url sets the value returned by window.location, document.URL, and document.documentURI,
	* and affects things like resolution of relative URLs within the document
	* and the same-origin restrictions and referrer used while fetching subresources.
	*
	* @default 'http://localhost:3000'.
	*/
	url?: string;
	/**
	* Enable console?
	*
	* @default false
	*/
	console?: boolean;
	/**
	* jsdom does not have the capability to render visual content, and will act like a headless browser by default.
	* It provides hints to web pages through APIs such as document.hidden that their content is not visible.
	*
	* When the `pretendToBeVisual` option is set to `true`, jsdom will pretend that it is rendering and displaying
	* content.
	*
	* @default true
	*/
	pretendToBeVisual?: boolean;
	/**
	* Enable CookieJar
	*
	* @default false
	*/
	cookieJar?: boolean;
	resources?: "usable";
}

interface EnvironmentReturn {
	teardown: (global: any) => Awaitable<void>;
}
interface VmEnvironmentReturn {
	getVmContext: () => {
		[key: string]: any
	};
	teardown: () => Awaitable<void>;
}
interface Environment {
	name: string;
	transformMode: "web" | "ssr";
	setupVM?: (options: Record<string, any>) => Awaitable<VmEnvironmentReturn>;
	setup: (global: any, options: Record<string, any>) => Awaitable<EnvironmentReturn>;
}
interface EnvironmentOptions {
	/**
	* jsdom options.
	*/
	jsdom?: JSDOMOptions;
	happyDOM?: HappyDOMOptions;
	[x: string]: unknown;
}
interface ResolvedTestEnvironment {
	environment: Environment;
	options: Record<string, any> | null;
}

export type { AfterSuiteRunMeta as A, Constructable as C, Environment as E, HappyDOMOptions as H, JSDOMOptions as J, LabelColor as L, ModuleGraphData as M, Nullable as N, ProvidedContext as P, ResolvedTestEnvironment as R, TransformMode as T, UserConsoleLog as U, VmEnvironmentReturn as V, EnvironmentReturn as a, Awaitable as b, Arrayable as c, ArgumentsType as d, MutableArray as e, EnvironmentOptions as f, ModuleCache as g };
