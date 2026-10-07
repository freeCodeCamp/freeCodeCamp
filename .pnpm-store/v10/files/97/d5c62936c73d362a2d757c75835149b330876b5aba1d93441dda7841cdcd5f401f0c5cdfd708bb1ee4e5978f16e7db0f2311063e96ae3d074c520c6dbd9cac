import * as superagent from "superagent";

export = supertest;

declare function supertest(app: any, options?: supertest.Options): supertest.SuperTest<supertest.Test>;
declare namespace supertest {
    interface Response extends superagent.Response {}

    interface Request extends superagent.SuperAgentRequest {}

    type CallbackHandler = (err: any, res: Response) => void;
    interface Test extends superagent.SuperAgentRequest {
        app?: any;
        url: string;
        serverAddress(app: any, path: string): string;
        expect(status: number, callback?: CallbackHandler): this;
        expect(status: number, body: any, callback?: CallbackHandler): this;
        expect(checker: (res: Response) => any, callback?: CallbackHandler): this;
        expect(body: string, callback?: CallbackHandler): this;
        expect(body: RegExp, callback?: CallbackHandler): this;
        expect(body: Object, callback?: CallbackHandler): this;
        expect(field: string, val: string, callback?: CallbackHandler): this;
        expect(field: string, val: RegExp, callback?: CallbackHandler): this;
        end(callback?: CallbackHandler): this;
    }

    interface Options {
        http2?: boolean;
    }

    interface AgentOptions extends Options {
        ca?: any;
    }
    function agent(app?: any, options?: AgentOptions): SuperAgentTest;

    interface SuperTest<T extends superagent.SuperAgentRequest> extends superagent.SuperAgent<T> {}
    interface SuperTestWithHost<T extends superagent.SuperAgentRequest> extends SuperTest<T> {
        host(host: string): this;
    }
    type SuperAgentTest =
        & SuperTestWithHost<Test>
        & Pick<
            Request,
            | "use"
            | "on"
            | "set"
            | "query"
            | "type"
            | "accept"
            | "auth"
            | "withCredentials"
            | "retry"
            | "ok"
            | "redirects"
            | "timeout"
            | "buffer"
            | "serialize"
            | "parse"
            | "ca"
            | "key"
            | "pfx"
            | "cert"
        >;
}
