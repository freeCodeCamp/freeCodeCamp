/**
 * This file is a copy of the resolver from the `codesandbox-api` package.
 * We wanted to avoid to reference codesandbox-api because of the code that runs on load in the package.
 * The plan is to take some time and refactor codesandbox-api into what it was supposed to be in the first place,
 * an abstraction over the actions that can be dispatched between the bundler and the iframe.
 */
import type { IFrameProtocol } from "./iframe-protocol";
import type { ProtocolRequestMessage } from "../../types";
export default class Protocol {
    private type;
    private handleMessage;
    private protocol;
    private _disposeMessageListener;
    constructor(type: string, handleMessage: (message: ProtocolRequestMessage) => any, protocol: IFrameProtocol);
    getTypeId(): string;
    dispose(): void;
}
