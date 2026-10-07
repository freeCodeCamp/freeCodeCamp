(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.graphqlHttpAudits = {}));
})(this, (function (exports) { 'use strict';

    /**
     *
     * utils
     *
     */
    /** @private */
    function extendedTypeof(val) {
        if (val === null) {
            return 'null';
        }
        if (Array.isArray(val)) {
            return 'array';
        }
        return typeof val;
    }

    /**
     *
     * audit/utils
     *
     */
    /**
     * Wrap and prepare an audit for testing.
     *
     * @private
     */
    function audit(id, name, fn) {
        return {
            id,
            name,
            fn: async () => {
                try {
                    await fn();
                    return {
                        id,
                        name,
                        status: 'ok',
                    };
                }
                catch (err) {
                    if (!(err instanceof AuditError)) {
                        // anything thrown that is not an assertion error is considered fatal
                        throw err;
                    }
                    return {
                        id,
                        name,
                        status: name.startsWith('MUST')
                            ? // failing MUSTs are considered errors
                                'error'
                            : name.startsWith('SHOULD')
                                ? // recommendations are warnings
                                    'warn'
                                : // everything else is truly optional
                                    'notice',
                        reason: err.reason,
                        response: err.response,
                    };
                }
            },
        };
    }
    /**
     * Error thrown when an assertion test fails.
     *
     * @private
     */
    class AuditError {
        constructor(response, reason) {
            this.response = response;
            this.reason = reason;
        }
    }
    /**
     * Will throw an AuditError if the assertion on Response fails.
     *
     * All fatal problems will throw an instance of an Error.
     *
     * The name "ressert" is a wordplay combining "response" and "assert".
     *
     * @private
     */
    function ressert(res) {
        return {
            status: {
                toBe(code) {
                    if (res.status !== code) {
                        throw new AuditError(res, `Response status code is not ${code}`);
                    }
                },
                toBeBetween: (min, max) => {
                    if (!(min <= res.status && res.status <= max)) {
                        throw new AuditError(res, `Response status is not between ${min} and ${max}`);
                    }
                },
            },
            header(key) {
                return {
                    toContain(part) {
                        var _a;
                        if (!((_a = res.headers.get(key)) === null || _a === void 0 ? void 0 : _a.includes(part))) {
                            throw new AuditError(res, `Response header ${key} does not contain ${part}`);
                        }
                    },
                    notToContain(part) {
                        var _a;
                        if ((_a = res.headers.get(key)) === null || _a === void 0 ? void 0 : _a.includes(part)) {
                            throw new AuditError(res, `Response header ${key} contains ${part}`);
                        }
                    },
                };
            },
            bodyAsExecutionResult: {
                data: {
                    async toBe(val) {
                        const clonedRes = res.clone(); // allow the body to be re-read
                        const body = await assertBodyAsExecutionResult(res);
                        if (body.data !== val) {
                            throw new AuditError(clonedRes, `Response body execution result data is not "${val}"`);
                        }
                    },
                },
                async toHaveProperty(key) {
                    const clonedRes = res.clone(); // allow the body to be re-read
                    const body = await assertBodyAsExecutionResult(res);
                    if (!(key in body)) {
                        throw new AuditError(clonedRes, `Response body execution result does not have a property "${key}"`);
                    }
                },
                async notToHaveProperty(key) {
                    const clonedRes = res.clone(); // allow the body to be re-read
                    const body = await assertBodyAsExecutionResult(res);
                    if (key in body) {
                        throw new AuditError(clonedRes, `Response body execution result has a property "${key}"`);
                    }
                },
            },
        };
    }
    /** @private */
    async function assertBodyAsExecutionResult(res) {
        let decoded;
        try {
            const decoder = new TextDecoder('utf-8');
            const buff = await res.arrayBuffer();
            decoded = decoder.decode(buff);
        }
        catch (err) {
            throw new AuditError(res, 'Response body is not UTF-8 encoded');
        }
        let body;
        try {
            body = JSON.parse(decoded);
        }
        catch (err) {
            throw new AuditError(res, 'Response body is not valid JSON');
        }
        return body;
    }

    /**
     *
     * audit/server
     *
     */
    /**
     * List of server audits required to check GraphQL over HTTP spec conformance.
     *
     * @category Audits
     */
    function serverAudits(opts) {
        const fetchFn = (opts.fetchFn || fetch);
        return [
            // Media Types
            audit(
            // TODO: convert to MUST after watershed
            '22EB', 'SHOULD accept application/graphql-response+json and match the content-type', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/graphql-response+json',
                    },
                    body: JSON.stringify({ query: '{ __typename }' }),
                });
                ressert(res).status.toBe(200);
                ressert(res)
                    .header('content-type')
                    .toContain('application/graphql-response+json');
            }),
            audit('4655', 'MUST accept application/json and match the content-type', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/json',
                    },
                    body: JSON.stringify({ query: '{ __typename }' }),
                });
                ressert(res).status.toBe(200);
                ressert(res).header('content-type').toContain('application/json');
            }),
            audit('47DE', 'SHOULD accept */* and use application/json for the content-type', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: '*/*',
                    },
                    body: JSON.stringify({ query: '{ __typename }' }),
                });
                ressert(res).status.toBe(200);
                ressert(res).header('content-type').toContain('application/json');
            }),
            audit('80D8', 'SHOULD assume application/json content-type when accept is missing', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({ query: '{ __typename }' }),
                });
                ressert(res).status.toBe(200);
                ressert(res).header('content-type').toContain('application/json');
            }),
            audit('82A3', 'MUST use utf-8 encoding when responding', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({ query: '{ __typename }' }),
                });
                ressert(res).status.toBe(200);
                try {
                    const decoder = new TextDecoder('utf-8');
                    decoder.decode(await res.arrayBuffer());
                }
                catch (_a) {
                    throw new AuditError(res, 'Response body is not UTF-8 encoded');
                }
            }),
            audit('BF61', 'MUST accept utf-8 encoded request', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json; charset=utf-8',
                    },
                    body: JSON.stringify({
                        query: '{ __type(name: "Run🏃Swim🏊") { name } }',
                    }),
                });
                ressert(res).status.toBe(200);
            }),
            audit('78D5', 'MUST assume utf-8 in request if encoding is unspecified', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({ query: '{ __typename }' }),
                });
                ressert(res).status.toBe(200);
            }),
            // Request
            audit('2C94', 'MUST accept POST requests', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ query: '{ __typename }' }),
                });
                ressert(res).status.toBe(200);
            }),
            audit('5A70', 'MAY accept application/x-www-form-urlencoded formatted GET requests', async () => {
                const url = new URL(await getUrl(opts.url));
                url.searchParams.set('query', '{ __typename }');
                const res = await fetchFn(url.toString());
                ressert(res).status.toBe(200);
            }),
            // Request GET
            // TODO: this is a MUST if the server supports GET requests
            audit('9C48', 'MAY NOT allow executing mutations on GET requests', async () => {
                const url = new URL(await getUrl(opts.url));
                url.searchParams.set('query', 'mutation { __typename }');
                const res = await fetchFn(url.toString(), {
                    headers: {
                        accept: 'application/graphql-response+json',
                    },
                });
                ressert(res).status.toBeBetween(400, 499);
            }),
            // Request POST
            audit('9ABE', 'MAY respond with 4xx status code if content-type is not supplied on POST requests', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                });
                ressert(res).status.toBeBetween(400, 499);
            }),
            audit('03D4', 'MUST accept application/json POST requests', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ query: '{ __typename }' }),
                });
                ressert(res).status.toBe(200);
            }),
            audit('A5BF', 'MAY use 400 status code when request body is missing on POST', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                });
                ressert(res).status.toBe(400);
            }),
            // Request Parameters
            audit('423L', 'MAY use 400 status code on missing {query} parameter', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/graphql-response+json',
                    },
                    body: JSON.stringify({ notquery: '{ __typename }' }),
                });
                ressert(res).status.toBe(400);
            }),
            ...[{ obj: 'ect' }, 0, false, ['array']].map((invalid, index) => audit(`LKJ${index}`, `MAY use 400 status code on ${extendedTypeof(invalid)} {query} parameter`, async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: invalid,
                    }),
                });
                ressert(res).status.toBe(400);
            })),
            audit(
            // TODO: convert to MUST after watershed
            '34A2', 'SHOULD allow string {query} parameter when accepting application/graphql-response+json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/graphql-response+json',
                    },
                    body: JSON.stringify({
                        query: '{ __typename }',
                    }),
                });
                ressert(res).status.toBe(200);
            }),
            audit('13EE', 'MUST allow string {query} parameter when accepting application/json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/json',
                    },
                    body: JSON.stringify({
                        query: '{ __typename }',
                    }),
                });
                ressert(res).status.toBe(200);
                await ressert(res).bodyAsExecutionResult.notToHaveProperty('errors');
            }),
            ...[{ obj: 'ect' }, 0, false, ['array']].map((invalid, index) => audit(`6C0${index}`, `MAY use 400 status code on ${extendedTypeof(invalid)} {operationName} parameter`, async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        operationName: invalid,
                        query: '{ __typename }',
                    }),
                });
                ressert(res).status.toBe(400);
            })),
            audit(
            // TODO: convert to MUST after watershed
            '8161', 'SHOULD allow string {operationName} parameter when accepting application/graphql-response+json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/graphql-response+json',
                    },
                    body: JSON.stringify({
                        operationName: 'Query',
                        query: 'query Query { __typename }',
                    }),
                });
                ressert(res).status.toBe(200);
            }),
            audit('B8B3', 'MUST allow string {operationName} parameter when accepting application/json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/json',
                    },
                    body: JSON.stringify({
                        operationName: 'Query',
                        query: 'query Query { __typename }',
                    }),
                });
                ressert(res).status.toBe(200);
                await ressert(res).bodyAsExecutionResult.notToHaveProperty('errors');
            }),
            ...['variables', 'operationName', 'extensions'].flatMap((parameter, index) => [
                audit(`94B${index}`, 
                // TODO: convert to MUST after watershed
                `SHOULD allow null {${parameter}} parameter when accepting application/graphql-response+json`, async () => {
                    const res = await fetchFn(await getUrl(opts.url), {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            accept: 'application/graphql-response+json',
                        },
                        body: JSON.stringify({
                            query: '{ __typename }',
                            [parameter]: null,
                        }),
                    });
                    ressert(res).status.toBe(200);
                    await ressert(res).bodyAsExecutionResult.notToHaveProperty('errors');
                }),
                audit(`022${index}`, `MUST allow null {${parameter}} parameter when accepting application/json`, async () => {
                    const res = await fetchFn(await getUrl(opts.url), {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            accept: 'application/json',
                        },
                        body: JSON.stringify({
                            query: '{ __typename }',
                            [parameter]: null,
                        }),
                    });
                    ressert(res).status.toBe(200);
                    await ressert(res).bodyAsExecutionResult.notToHaveProperty('errors');
                }),
            ]),
            ...['string', 0, false, ['array']].map((invalid, index) => audit(`476${index}`, `MAY use 400 status code on ${extendedTypeof(invalid)} {variables} parameter`, async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: '{ __typename }',
                        variables: invalid,
                    }),
                });
                ressert(res).status.toBe(400);
            })),
            audit(
            // TODO: convert to MUST after watershed
            '2EA1', 'SHOULD allow map {variables} parameter when accepting application/graphql-response+json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/graphql-response+json',
                    },
                    body: JSON.stringify({
                        query: 'query Type($name: String!) { __type(name: $name) { name } }',
                        variables: { name: 'sometype' },
                    }),
                });
                ressert(res).status.toBe(200);
            }),
            audit('28B9', 'MUST allow map {variables} parameter when accepting application/json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/json',
                    },
                    body: JSON.stringify({
                        query: 'query Type($name: String!) { __type(name: $name) { name } }',
                        variables: { name: 'sometype' },
                    }),
                });
                ressert(res).status.toBe(200);
                await ressert(res).bodyAsExecutionResult.notToHaveProperty('errors');
            }),
            audit('D6D5', 'MAY allow URL-encoded JSON string {variables} parameter in GETs when accepting application/graphql-response+json', async () => {
                const url = new URL(await getUrl(opts.url));
                url.searchParams.set('query', 'query Type($name: String!) { __type(name: $name) { name } }');
                url.searchParams.set('variables', JSON.stringify({ name: 'sometype' }));
                const res = await fetchFn(url.toString(), {
                    method: 'GET',
                    headers: {
                        accept: 'application/graphql-response+json',
                    },
                });
                ressert(res).status.toBe(200);
            }),
            audit('6A70', 'MAY allow URL-encoded JSON string {variables} parameter in GETs when accepting application/json', async () => {
                const url = new URL(await getUrl(opts.url));
                url.searchParams.set('query', 'query Type($name: String!) { __type(name: $name) { name } }');
                url.searchParams.set('variables', JSON.stringify({ name: 'sometype' }));
                const res = await fetchFn(url.toString(), {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                    },
                });
                ressert(res).status.toBe(200);
                await ressert(res).bodyAsExecutionResult.notToHaveProperty('errors');
            }),
            ...['string', 0, false, ['array']].map((invalid, index) => audit(`58B${index}`, 
            // TODO: convert to MUST after watershed
            `MAY use 400 status code on ${extendedTypeof(invalid)} {extensions} parameter`, async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: '{ __typename }',
                        extensions: invalid,
                    }),
                });
                ressert(res).status.toBe(400);
            })),
            audit(
            // TODO: convert to MUST after watershed
            '428F', 'SHOULD allow map {extensions} parameter when accepting application/graphql-response+json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/graphql-response+json',
                    },
                    body: JSON.stringify({
                        query: '{ __typename }',
                        extensions: { some: 'value' },
                    }),
                });
                ressert(res).status.toBe(200);
            }),
            audit('1B7A', 'MUST allow map {extensions} parameter when accepting application/json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/json',
                    },
                    body: JSON.stringify({
                        query: '{ __typename }',
                        extensions: { some: 'value' },
                    }),
                });
                ressert(res).status.toBe(200);
                await ressert(res).bodyAsExecutionResult.notToHaveProperty('errors');
            }),
            audit('B6DC', 'MAY use 4xx or 5xx status codes on JSON parsing failure', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: '{ "not a JSON',
                });
                ressert(res).status.toBeBetween(400, 499);
            }),
            audit('BCF8', 'MAY use 400 status code on JSON parsing failure', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: '{ "not a JSON',
                });
                ressert(res).status.toBe(400);
            }),
            audit('8764', 'MAY use 4xx or 5xx status codes if parameters are invalid', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        qeury /* typo */: '{ __typename }',
                    }),
                });
                ressert(res).status.toBeBetween(400, 599);
            }),
            audit('3E3A', 'MAY use 400 status code if parameters are invalid', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        qeury: /* typo */ '{ __typename }',
                    }),
                });
                ressert(res).status.toBe(400);
            }),
            // TODO: audit('39AA', 'MUST accept a map for the {extensions} parameter'),
            // Response application/json
            audit('572B', 'SHOULD use 200 status code on document parsing failure when accepting application/json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/json',
                    },
                    body: JSON.stringify({ query: '{' }),
                });
                ressert(res).status.toBe(200);
            }),
            audit('FDE2', 'SHOULD use 200 status code on document validation failure when accepting application/json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/json',
                    },
                    body: JSON.stringify({
                        query: '{ 8f31403dfe404bccbb0e835f2629c6a7 }', // making sure the field doesnt exist
                    }),
                });
                ressert(res).status.toBe(200);
            }),
            audit('7B9B', 'SHOULD use a status code of 200 on variable coercion failure when accepting application/json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/json',
                    },
                    body: JSON.stringify({
                        query: 'query CoerceFailure($id: ID!){ __typename }',
                        variables: { id: null },
                    }),
                });
                ressert(res).status.toBe(200);
            }),
            // Response application/graphql-response+json
            audit(
            // TODO: convert to MUST after watershed
            '865D', 'SHOULD use 4xx or 5xx status codes on document parsing failure when accepting application/graphql-response+json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/graphql-response+json',
                    },
                    body: JSON.stringify({
                        query: '{',
                    }),
                });
                ressert(res).status.toBeBetween(400, 599);
            }),
            audit('556A', 'SHOULD use 400 status code on document parsing failure when accepting application/graphql-response+json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/graphql-response+json',
                    },
                    body: JSON.stringify({
                        query: '{',
                    }),
                });
                ressert(res).status.toBe(400);
            }),
            audit('D586', 'SHOULD not contain the data entry on document parsing failure when accepting application/graphql-response+json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/graphql-response+json',
                    },
                    body: JSON.stringify({
                        query: '{',
                    }),
                });
                await ressert(res).bodyAsExecutionResult.data.toBe(undefined);
            }),
            audit(
            // TODO: convert to MUST after watershed
            '51FE', 'SHOULD use 4xx or 5xx status codes on document validation failure when accepting application/graphql-response+json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/graphql-response+json',
                    },
                    body: JSON.stringify({
                        query: '{ 8f31403dfe404bccbb0e835f2629c6a7 }', // making sure the field doesnt exist
                    }),
                });
                ressert(res).status.toBeBetween(400, 599);
            }),
            audit('74FF', 'SHOULD use 400 status code on document validation failure when accepting application/graphql-response+json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/graphql-response+json',
                    },
                    body: JSON.stringify({
                        query: '{ 8f31403dfe404bccbb0e835f2629c6a7 }', // making sure the field doesnt exist
                    }),
                });
                ressert(res).status.toBe(400);
            }),
            audit('5E5B', 'SHOULD not contain the data entry on document validation failure when accepting application/graphql-response+json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/graphql-response+json',
                    },
                    body: JSON.stringify({
                        query: '{ 8f31403dfe404bccbb0e835f2629c6a7 }', // making sure the field doesnt exist
                    }),
                });
                await ressert(res).bodyAsExecutionResult.data.toBe(undefined);
            }),
            audit('86EE', 'SHOULD use a status code of 400 on variable coercion failure when accepting application/graphql-response+json', async () => {
                const res = await fetchFn(await getUrl(opts.url), {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        accept: 'application/graphql-response+json',
                    },
                    body: JSON.stringify({
                        query: 'query CoerceFailure($id: ID!){ __typename }',
                        variables: { id: null },
                    }),
                });
                ressert(res).status.toBe(400);
            }),
            // TODO: how to fail and have the data entry?
            // audit('EE52', 'MUST use 2xx status code if response contains the data entry and it is not null when accepting application/graphql-response+json'),
            // TODO: how to make an unauthorized request?
            // https://graphql.github.io/graphql-over-http/draft/#sel-EANNNDTAAEVBAAqqc
            // audit('BC58', 'SHOULD use 401 or 403 status codes when the request is not permitted')
        ];
    }
    /**
     * Performs the full list of server audits required for GraphQL over HTTP spec conformance.
     *
     * Please consult the `AuditResult` for more information.
     *
     * @category Audits
     */
    async function auditServer(opts) {
        const audits = serverAudits(opts);
        // audit tests will throw only on fatal errors, tests are contained within the AuditResult
        return await Promise.all(audits.map(({ fn }) => fn()));
    }
    /** @private */
    async function getUrl(url) {
        if (typeof url === 'function') {
            return await url();
        }
        return url;
    }

    /**
     * Renders the provided audit results to well-formatted and valid HTML.
     *
     * Do note that the rendered result is not an HTML document, it's rather
     * just a component with results.
     */
    async function renderAuditResultsToHTML(results) {
        const grouped = {
            total: 0,
            ok: [],
            notice: [],
            warn: [],
            error: [],
        };
        for (const result of results) {
            grouped.total++;
            if (result.status === 'ok') {
                grouped[result.status].push(result);
            }
            else {
                grouped[result.status].push(result);
            }
        }
        let report = '<i>* This report was auto-generated by graphql-http</i>\n';
        report += '\n';
        report += '<h1>GraphQL over HTTP audit report</h1>\n';
        report += '\n';
        report += '<ul>\n';
        report += `<li><b>${grouped.total}</b> audits in total</li>\n`;
        // font-family: monospace helps render native emojis in HTML
        if (grouped.ok.length) {
            report += `<li><span style="font-family: monospace">✅</span> <b>${grouped.ok.length}</b> pass</li>\n`;
        }
        if (grouped.notice.length) {
            report += `<li><span style="font-family: monospace">💡</span> <b>${grouped.notice.length}</b> notices (suggestions)</li>\n`;
        }
        if (grouped.warn.length) {
            report += `<li><span style="font-family: monospace">❗️</span> <b>${grouped.warn.length}</b> warnings (optional)</li>\n`;
        }
        if (grouped.error.length) {
            report += `<li><span style="font-family: monospace">❌</span> <b>${grouped.error.length}</b> errors (required)</li>\n`;
        }
        report += '</ul>\n';
        report += '\n';
        if (grouped.ok.length) {
            report += '<h2>Passing</h2>\n';
            report += '<ol>\n';
            for (const [, result] of grouped.ok.entries()) {
                report += `<li><code>${result.id}</code> ${result.name}</li>\n`;
            }
            report += '</ol>\n';
            report += '\n';
        }
        if (grouped.notice.length) {
            report += `<h2>Notices</h2>\n`;
            report +=
                'The server <i>MAY</i> support these, but are truly optional. These are suggestions following recommended conventions.\n';
            report += '<ol>\n';
            for (const [, result] of grouped.notice.entries()) {
                report += await printAuditFail(result);
            }
            report += '</ol>\n';
            report += '\n';
        }
        if (grouped.warn.length) {
            report += `<h2>Warnings</h2>\n`;
            report += 'The server <i>SHOULD</i> support these, but is not required.\n';
            report += '<ol>\n';
            for (const [, result] of grouped.warn.entries()) {
                report += await printAuditFail(result);
            }
            report += '</ol>\n';
            report += '\n';
        }
        if (grouped.error.length) {
            report += `<h2>Errors</h2>\n`;
            report += 'The server <b>MUST</b> support these.\n';
            report += '<ol>\n';
            for (const [, result] of grouped.error.entries()) {
                report += await printAuditFail(result);
            }
            report += '</ol>\n';
        }
        return report;
    }
    async function printAuditFail(result) {
        var _a;
        let report = '';
        report += `<li><code>${result.id}</code> ${result.name}\n`;
        report += '<details>\n';
        report += `<summary>${truncate(result.reason)}</summary>\n`;
        report += '<pre><code class="lang-json">'; // no "\n" because they count in HTML pre tags
        const res = result.response;
        const headers = {};
        for (const [key, val] of res.headers.entries()) {
            // some headers change on each run, dont report it
            if (key === 'date') {
                headers[key] = '<timestamp>';
            }
            else if (['cf-ray', 'server-timing', 'set-cookie'].includes(key)) {
                headers[key] = '<omitted>';
            }
            else {
                headers[key] = val;
            }
        }
        let text = '', json;
        try {
            text = await res.text();
            json = JSON.parse(text);
            // is json, there shouldnt be nothing to sanitize (hopefully)
        }
        catch (_b) {
            // is not json, avoid rendering html (rest is allowed)
            if ((_a = res.headers.get('content-type')) === null || _a === void 0 ? void 0 : _a.includes('text/html')) {
                text = '<html omitted>';
            }
        }
        const stringified = JSON.stringify({
            status: res.status,
            statusText: res.statusText,
            headers,
            body: json || ((text === null || text === void 0 ? void 0 : text.length) > 5120 ? '<body is too long>' : text) || null,
        }, (_k, v) => {
            if (v != null && typeof v === 'object' && !Array.isArray(v)) {
                // sort object fields for stable stringify
                const acc = {};
                return Object.keys(v)
                    .sort()
                    .reverse() // body on bottom
                    .reduce((acc, k) => {
                    acc[k] = v[k];
                    return acc;
                }, acc);
            }
            return v;
        }, 2);
        report += stringified + '\n';
        report += '</code></pre>\n';
        report += '</details>\n';
        report += '</li>\n';
        return report;
    }
    function truncate(str, len = 1024) {
        if (str.length > len) {
            return str.substring(0, len) + '...';
        }
        return str;
    }

    exports.auditServer = auditServer;
    exports.renderAuditResultsToHTML = renderAuditResultsToHTML;
    exports.serverAudits = serverAudits;

}));
