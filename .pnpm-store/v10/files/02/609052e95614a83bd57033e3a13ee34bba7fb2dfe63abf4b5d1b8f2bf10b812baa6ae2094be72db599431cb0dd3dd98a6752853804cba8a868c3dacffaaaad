import { Globals } from "webidl-conversions";
import { implementation as URLSearchParamsImpl } from "./URLSearchParams-impl";

declare class URLImpl {
    constructor(globalObject: Globals, constructorArgs: readonly [url: string, base?: string]);

    href: string;
    readonly origin: string;
    protocol: string;
    username: string;
    password: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    readonly searchParams: URLSearchParamsImpl;
    hash: string;

    toJSON(): string;
}
export { URLImpl as implementation };
