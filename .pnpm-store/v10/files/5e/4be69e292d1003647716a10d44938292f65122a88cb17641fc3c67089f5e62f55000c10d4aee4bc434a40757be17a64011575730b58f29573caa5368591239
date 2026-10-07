<div align="center">
  <br />

  <h3>graphql-http</h3>

  <h6>Simple, pluggable, zero-dependency, <a href="https://graphql.github.io/graphql-over-http">GraphQL over HTTP spec</a> compliant server, client and audit suite.</h6>

[![Continuous integration](https://github.com/graphql/graphql-http/workflows/Continuous%20integration/badge.svg)](https://github.com/graphql/graphql-http/actions?query=workflow%3A%22Continuous+integration%22) [![graphql-http](https://img.shields.io/npm/v/graphql-http.svg?label=graphql-http&logo=npm)](https://www.npmjs.com/package/graphql-http)

<i>Quickly check for compliance? Visit <b>[graphql-http.com](https://graphql-http.com)</b>!</i>

<i>Want a full-featured server? See the <b>[servers section](#servers)</b>!</i>

<i>Need subscriptions? Try <b>[graphql-ws](https://github.com/enisdenjo/graphql-ws)</b> or <b>[graphql-sse](https://github.com/enisdenjo/graphql-sse)</b> instead!</i>

  <br />
</div>

## Getting started

#### Install

```shell
yarn add graphql-http
```

#### Create a GraphQL schema

```js
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
    },
  }),
});
```

#### Start the server

##### With [`http`](https://nodejs.org/api/http.html)

```js
import http from 'http';
import { createHandler } from 'graphql-http/lib/use/http';
import { schema } from './previous-step';

// Create the GraphQL over HTTP Node request handler
const handler = createHandler({ schema });

// Create a HTTP server using the listener on `/graphql`
const server = http.createServer((req, res) => {
  if (req.url.startsWith('/graphql')) {
    handler(req, res);
  } else {
    res.writeHead(404).end();
  }
});

server.listen(4000);
console.log('Listening to port 4000');
```

##### With [`http2`](https://nodejs.org/api/http2.html)

_Browsers might complain about self-signed SSL/TLS certificates. [Help can be found on StackOverflow.](https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate)_

```shell
$ openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout localhost-privkey.pem -out localhost-cert.pem
```

```js
import fs from 'fs';
import http2 from 'http2';
import { createHandler } from 'graphql-http/lib/use/http2';
import { schema } from './previous-step';

// Create the GraphQL over HTTP Node request handler
const handler = createHandler({ schema });

// Create a HTTP/2 server using the handler on `/graphql`
const server = http2.createSecureServer(
  {
    key: fs.readFileSync('localhost-privkey.pem'),
    cert: fs.readFileSync('localhost-cert.pem'),
  },
  (req, res) => {
    if (req.url.startsWith('/graphql')) {
      handler(req, res);
    } else {
      res.writeHead(404).end();
    }
  },
);

server.listen(4000);
console.log('Listening to port 4000');
```

##### With [`express`](https://expressjs.com/)

```js
import express from 'express'; // yarn add express
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './previous-step';

// Create an express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();
app.all('/graphql', createHandler({ schema }));

app.listen({ port: 4000 });
console.log('Listening to port 4000');
```

##### With [`fastify`](https://www.fastify.io/)

```js
import Fastify from 'fastify'; // yarn add fastify
import { createHandler } from 'graphql-http/lib/use/fastify';
import { schema } from './previous-step';

// Create a fastify instance serving all methods on `/graphql`
// where the GraphQL over HTTP fastify request handler is
const fastify = Fastify();
fastify.all('/graphql', createHandler({ schema }));

fastify.listen({ port: 4000 });
console.log('Listening to port 4000');
```

##### With [`Koa`](https://koajs.com/)

```js
import Koa from 'koa'; // yarn add koa
import mount from 'koa-mount'; // yarn add koa-mount
import { createHandler } from 'graphql-http/lib/use/koa';
import { schema } from './previous-step';

const app = new Koa();
app.use(mount('/graphql', createHandler({ schema })));

app.listen({ port: 4000 });
console.log('Listening to port 4000');
```

##### With [`uWebSockets.js`](https://github.com/uNetworking/uWebSockets.js)

```js
import uWS from 'uWebSockets.js'; // yarn add uWebSockets.js@uNetworking/uWebSockets.js#<version>
import { createHandler } from 'graphql-http/lib/use/uWebSockets';
import { schema } from './previous-step';

uWS
  .App()
  .any('/graphql', createHandler({ schema }))
  .listen(4000, () => {
    console.log('Listening to port 4000');
  });
```

##### With [`Deno`](https://deno.land/)

```ts
import { serve } from 'https://deno.land/std@0.151.0/http/server.ts';
import { createHandler } from 'https://esm.sh/graphql-http/lib/use/fetch';
import { schema } from './previous-step';

// Create the GraphQL over HTTP native fetch handler
const handler = createHandler({ schema });

// Start serving on `/graphql` using the handler
await serve(
  (req: Request) => {
    const [path, _search] = req.url.split('?');
    if (path.endsWith('/graphql')) {
      return handler(req);
    } else {
      return new Response(null, { status: 404 });
    }
  },
  {
    port: 4000, // Listening to port 4000
  },
);
```

##### With [`Bun`](https://bun.sh/)

```js
import { createHandler } from 'graphql-http/lib/use/fetch'; // bun install graphql-http
import { schema } from './previous-step';

// Create the GraphQL over HTTP native fetch handler
const handler = createHandler({ schema });

// Start serving on `/graphql` using the handler
export default {
  port: 4000, // Listening to port 4000
  fetch(req) {
    const [path, _search] = req.url.split('?');
    if (path.endsWith('/graphql')) {
      return handler(req);
    } else {
      return new Response(null, { status: 404 });
    }
  },
};
```

##### With [`Netlify Functions`](https://docs.netlify.com/functions/overview/)

```js
import { createHandler } from 'graphql-http/lib/use/@netlify/functions'; // yarn add @netlify/functions
import { schema } from './previous-step';

// Create the GraphQL over HTTP native fetch handler
export const handler = createHandler({ schema });
```

#### Use the client

```js
import { createClient } from 'graphql-http';

const client = createClient({
  url: 'http://localhost:4000/graphql',
});

(async () => {
  let cancel = () => {
    /* abort the request if it is in-flight */
  };

  const result = await new Promise((resolve, reject) => {
    let result;
    cancel = client.subscribe(
      {
        query: '{ hello }',
      },
      {
        next: (data) => (result = data),
        error: reject,
        complete: () => resolve(result),
      },
    );
  });

  expect(result).toEqual({ hello: 'world' });
})();
```

#### Serve [GraphiQL](https://github.com/graphql/graphiql)

Thanks to [`ruru`](https://github.com/graphile/crystal/tree/main/grafast/ruru), serving GraphiQL is as easy as running:

```sh
npx ruru -SP -p 4001 -e http://localhost:4000/graphql
```

Open [http://localhost:4001](http://localhost:4001) in the browser to use it.

## Recipes

<details id="promise">
<summary><a href="#promise">🔗</a> Client usage with Promise</summary>

```ts
import { ExecutionResult } from 'graphql';
import { createClient, RequestParams } from 'graphql-http';
import { getSession } from './my-auth';

const client = createClient({
  url: 'http://hey.there:4000/graphql',
  headers: async () => {
    const session = await getSession();
    if (session) {
      return {
        Authorization: `Bearer ${session.token}`,
      };
    }
  },
});

function execute<Data, Extensions>(
  params: RequestParams,
): [request: Promise<ExecutionResult<Data, Extensions>>, cancel: () => void] {
  let cancel!: () => void;
  const request = new Promise<ExecutionResult<Data, Extensions>>(
    (resolve, reject) => {
      let result: ExecutionResult<Data, Extensions>;
      cancel = client.subscribe<Data, Extensions>(params, {
        next: (data) => (result = data),
        error: reject,
        complete: () => resolve(result),
      });
    },
  );
  return [request, cancel];
}

(async () => {
  const [request, cancel] = execute({
    query: '{ hello }',
  });

  // just an example, not a real function
  onUserLeavePage(() => {
    cancel();
  });

  const result = await request;

  expect(result).toBe({ data: { hello: 'world' } });
})();
```

</details>

</details>

<details id="observable">
<summary><a href="#observable">🔗</a> Client usage with <a href="https://github.com/tc39/proposal-observable">Observable</a></summary>

```js
import { Observable } from 'relay-runtime';
// or
import { Observable } from '@apollo/client/core';
// or
import { Observable } from 'rxjs';
// or
import Observable from 'zen-observable';
// or any other lib which implements Observables as per the ECMAScript proposal: https://github.com/tc39/proposal-observable
import { createClient } from 'graphql-http';
import { getSession } from './my-auth';

const client = createClient({
  url: 'http://graphql.loves:4000/observables',
  headers: async () => {
    const session = await getSession();
    if (session) {
      return {
        Authorization: `Bearer ${session.token}`,
      };
    }
  },
});

const observable = new Observable((observer) =>
  client.subscribe({ query: '{ hello }' }, observer),
);

const subscription = observable.subscribe({
  next: (result) => {
    expect(result).toBe({ data: { hello: 'world' } });
  },
});

// unsubscribe will cancel the request if it is pending
subscription.unsubscribe();
```

</details>

<details id="relay">
<summary><a href="#relay">🔗</a> Client usage with <a href="https://relay.dev">Relay</a></summary>

```ts
import { GraphQLError } from 'graphql';
import {
  Network,
  Observable,
  RequestParameters,
  Variables,
} from 'relay-runtime';
import { createClient } from 'graphql-http';
import { getSession } from './my-auth';

const client = createClient({
  url: 'http://i.love:4000/graphql',
  headers: async () => {
    const session = await getSession();
    if (session) {
      return {
        Authorization: `Bearer ${session.token}`,
      };
    }
  },
});

function fetch(operation: RequestParameters, variables: Variables) {
  return Observable.create((sink) => {
    if (!operation.text) {
      return sink.error(new Error('Operation text cannot be empty'));
    }
    return client.subscribe(
      {
        operationName: operation.name,
        query: operation.text,
        variables,
      },
      sink,
    );
  });
}

export const network = Network.create(fetch);
```

</details>

<details id="apollo-client">
<summary><a href="#apollo-client">🔗</a> Client usage with <a href="https://www.apollographql.com">Apollo</a></summary>

```ts
import {
  ApolloLink,
  Operation,
  FetchResult,
  Observable,
} from '@apollo/client/core';
import { print, GraphQLError } from 'graphql';
import { createClient, ClientOptions, Client } from 'graphql-http';
import { getSession } from './my-auth';

class HTTPLink extends ApolloLink {
  private client: Client;

  constructor(options: ClientOptions) {
    super();
    this.client = createClient(options);
  }

  public request(operation: Operation): Observable<FetchResult> {
    return new Observable((sink) => {
      return this.client.subscribe<FetchResult>(
        { ...operation, query: print(operation.query) },
        {
          next: sink.next.bind(sink),
          complete: sink.complete.bind(sink),
          error: sink.error.bind(sink),
        },
      );
    });
  }
}

const link = new HTTPLink({
  url: 'http://where.is:4000/graphql',
  headers: async () => {
    const session = await getSession();
    if (session) {
      return {
        Authorization: `Bearer ${session.token}`,
      };
    }
  },
});
```

</details>

<details id="request-retries">
<summary><a href="#request-retries">🔗</a> Client usage with request retries</summary>

```ts
import { createClient, NetworkError } from 'graphql-http';

const client = createClient({
  url: 'http://unstable.service:4000/graphql',
  shouldRetry: async (err: NetworkError, retries: number) => {
    if (retries > 3) {
      // max 3 retries and then report service down
      return false;
    }

    // try again when service unavailable, could be temporary
    if (err.response?.status === 503) {
      // wait one second (you can alternatively time the promise resolution to your preference)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return true;
    }

    // otherwise report error immediately
    return false;
  },
});
```

</details>

<details id="browser">
<summary><a href="#browser">🔗</a> Client usage in browser</summary>

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>GraphQL over HTTP</title>
    <script
      type="text/javascript"
      src="https://unpkg.com/graphql-http/umd/graphql-http.min.js"
    ></script>
  </head>
  <body>
    <script type="text/javascript">
      const client = graphqlHttp.createClient({
        url: 'http://umdfor.the:4000/win/graphql',
      });

      // consider other recipes for usage inspiration
    </script>
  </body>
</html>
```

</details>

<details id="node-client">
<summary><a href="#node-client">🔗</a> Client usage in Node</summary>

```js
const fetch = require('node-fetch'); // yarn add node-fetch
const { AbortController } = require('node-abort-controller'); // (node < v15) yarn add node-abort-controller
const { createClient } = require('graphql-http');

const client = createClient({
  url: 'http://no.browser:4000/graphql',
  fetchFn: fetch,
  abortControllerImpl: AbortController, // node < v15
});

// consider other recipes for usage inspiration
```

</details>

<details id="deno-client">
<summary><a href="#deno-client">🔗</a> Client usage in Deno</summary>

```js
import { createClient } from 'https://esm.sh/graphql-http';

const client = createClient({
  url: 'http://deno.earth:4000/graphql',
});

// consider other recipes for usage inspiration
```

</details>

<details id="bun-client">
<summary><a href="#bun-client">🔗</a> Client usage in Bun</summary>

```js
import { createClient } from 'graphql-http'; // bun install graphql-http

const client = createClient({
  url: 'http://bun.bread:4000/graphql',
});

// consider other recipes for usage inspiration
```

</details>

<details id="migrating-express-graphql">
<summary><a href="#migrating-express-graphql">🔗</a> Server handler migration from <a href="https://github.com/graphql/express-graphql">express-graphql</a></summary>

```diff
import express from 'express';
import { schema } from './my-graphql-schema';

-import { graphqlHTTP } from 'express-graphql';
+import { createHandler } from 'graphql-http/lib/use/express';

const app = express();

app.use(
  '/graphql',
-  graphqlHTTP({ schema }),
+  createHandler({ schema }),
);

app.listen(4000);
```

</details>
<details id="auth">
<summary><a href="#auth">🔗</a> Server handler usage with authentication</summary>

Authenticate the user within `graphql-http` during GraphQL execution context assembly. This is a approach is less safe compared to early authentication ([see early authentication in Node](#auth-node-early)) because some GraphQL preparations or operations are executed even if the user is not unauthorized.

```js
import { createHandler } from 'graphql-http';
import {
  schema,
  getUserFromCookies,
  getUserFromAuthorizationHeader,
} from './my-graphql';

const handler = createHandler({
  schema,
  context: async (req) => {
    // process token, authenticate user and attach it to your graphql context
    const userId = await getUserFromCookies(req.headers.cookie);
    // or
    const userId = await getUserFromAuthorizationHeader(
      req.headers.authorization,
    );

    // respond with 401 if the user was not authenticated
    if (!userId) {
      return [null, { status: 401, statusText: 'Unauthorized' }];
    }

    // otherwise attach the user to the graphql context
    return { userId };
  },
});
```

</details>

<details id="context">
<summary><a href="#context">🔗</a> Server handler usage with custom context value</summary>

```js
import { createHandler } from 'graphql-http';
import { schema, getDynamicContext } from './my-graphql';

const handler = createHandler({
  schema,
  context: async (req, args) => {
    return getDynamicContext(req, args);
  },
  // or static context by supplying the value directly
});
```

</details>

<details id="custom-exec">
<summary><a href="#custom-exec">🔗</a> Server handler usage with custom execution arguments</summary>

```js
import { parse } from 'graphql';
import { createHandler } from 'graphql-http';
import { getSchemaForRequest, myValidationRules } from './my-graphql';

const handler = createHandler({
  onSubscribe: async (req, params) => {
    const schema = await getSchemaForRequest(req);

    const args = {
      schema,
      operationName: params.operationName,
      document: parse(params.query),
      variableValues: params.variables,
    };

    return args;
  },
});
```

</details>

<details id="auth-node-early">
<summary><a href="#auth-node-early">🔗</a> Server handler usage in Node with early authentication (recommended)</summary>

Authenticate the user early, before reaching `graphql-http`. This is the recommended approach because no GraphQL preparations or operations are executed if the user is not authorized.

```js
import { createHandler } from 'graphql-http';
import {
  schema,
  getUserFromCookies,
  getUserFromAuthorizationHeader,
} from './my-graphql';

const handler = createHandler({
  schema,
  context: async (req) => {
    // user is authenticated early (see below), simply attach it to the graphql context
    return { userId: req.raw.userId };
  },
});

const server = http.createServer(async (req, res) => {
  if (!req.url.startsWith('/graphql')) {
    return res.writeHead(404).end();
  }

  try {
    // process token, authenticate user and attach it to the request
    req.userId = await getUserFromCookies(req.headers.cookie);
    // or
    req.userId = await getUserFromAuthorizationHeader(
      req.headers.authorization,
    );

    // respond with 401 if the user was not authenticated
    if (!req.userId) {
      return res.writeHead(401, 'Unauthorized').end();
    }

    const [body, init] = await handler({
      url: req.url,
      method: req.method,
      headers: req.headers,
      body: () =>
        new Promise((resolve) => {
          let body = '';
          req.on('data', (chunk) => (body += chunk));
          req.on('end', () => resolve(body));
        }),
      raw: req,
    });
    res.writeHead(init.status, init.statusText, init.headers).end(body);
  } catch (err) {
    res.writeHead(500).end(err.message);
  }
});

server.listen(4000);
console.log('Listening to port 4000');
```

</details>

<details id="graphql-upload-http">
<summary><a href="#graphql-upload-http">🔗</a> Server handler usage with <a href="https://github.com/jaydenseric/graphql-upload">graphql-upload</a> and <a href="https://nodejs.org/api/http.html">http</a></summary>

```js
import http from 'http';
import { createHandler } from 'graphql-http/lib/use/http';
import processRequest from 'graphql-upload/processRequest.mjs'; // yarn add graphql-upload
import { schema } from './my-graphql';

const handler = createHandler({
  schema,
  async parseRequestParams(req) {
    const params = await processRequest(req.raw, req.context.res);
    if (Array.isArray(params)) {
      throw new Error('Batching is not supported');
    }
    return {
      ...params,
      // variables must be an object as per the GraphQL over HTTP spec
      variables: Object(params.variables),
    };
  },
});

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/graphql')) {
    handler(req, res);
  } else {
    res.writeHead(404).end();
  }
});

server.listen(4000);
console.log('Listening to port 4000');
```

</details>

<details id="graphql-upload-express">
<summary><a href="#graphql-upload-express">🔗</a> Server handler usage with <a href="https://github.com/jaydenseric/graphql-upload">graphql-upload</a> and <a href="https://expressjs.com/">express</a></summary>

```js
import express from 'express'; // yarn add express
import { createHandler } from 'graphql-http/lib/use/express';
import processRequest from 'graphql-upload/processRequest.mjs'; // yarn add graphql-upload
import { schema } from './my-graphql';

const app = express();
app.all(
  '/graphql',
  createHandler({
    schema,
    async parseRequestParams(req) {
      const params = await processRequest(req.raw, req.context.res);
      if (Array.isArray(params)) {
        throw new Error('Batching is not supported');
      }
      return {
        ...params,
        // variables must be an object as per the GraphQL over HTTP spec
        variables: Object(params.variables),
      };
    },
  }),
);

app.listen({ port: 4000 });
console.log('Listening to port 4000');
```

</details>

<details id="audit-jest">
<summary><a href="#audit-jest">🔗</a> Audit for servers usage in <a href="https://jestjs.io">Jest</a> environment</summary>

```js
import { fetch } from '@whatwg-node/fetch';
import { serverAudits } from 'graphql-http';

for (const audit of serverAudits({
  url: 'http://localhost:4000/graphql',
  fetchFn: fetch,
})) {
  test(audit.name, async () => {
    const result = await audit.fn();
    if (result.status === 'error') {
      throw result.reason;
    }
    if (result.status === 'warn') {
      console.warn(result.reason); // or throw if you want full compliance (warnings are not requirements)
    }
    // result.status === 'ok'
  });
}
```

</details>

<details id="audit-deno">
<summary><a href="#audit-deno">🔗</a> Audit for servers usage in <a href="https://deno.land">Deno</a> environment</summary>

```ts
import { serverAudits } from 'npm:graphql-http';

for (const audit of serverAudits({
  url: 'http://localhost:4000/graphql',
  fetchFn: fetch,
})) {
  Deno.test(audit.name, async () => {
    const result = await audit.fn();
    if (result.status === 'error') {
      throw result.reason;
    }
    if (result.status === 'warn') {
      console.warn(result.reason); // or throw if you want full compliance (warnings are not requirements)
    }
    // Avoid leaking resources
    if ('body' in result && result.body instanceof ReadableStream) {
      await result.body.cancel();
    }
  });
}
```

Put the above contents in a file and run it with `deno test --allow-net`.

</details>

## Only [GraphQL over HTTP](https://graphql.github.io/graphql-over-http/)

This is the official [GraphQL over HTTP spec](https://graphql.github.io/graphql-over-http/) reference implementation and as such follows the specification strictly without any additional features (like playgrounds or GUIs, file uploads, @stream/@defer directives and subscriptions).

Having said this, graphql-http is mostly aimed for library authors and simple server setups, where the requirements are exact to what the aforementioned spec offers.

## [Servers](/implementations)

If you want a feature-full server with bleeding edge technologies, you're recommended to use one of the following servers.

Their compliance with the [GraphQL over HTTP spec](https://graphql.github.io/graphql-over-http) is checked automatically and updated regularly.

<!-- <ServersTable> -->
<!-- prettier-ignore-start -->
| Name | Audit |
|------|-------|
| [apollo-server](https://www.apollographql.com/docs/apollo-server) | [✅ Compliant](/implementations/apollo-server/README.md) |
| [deno](https://deno.com/blog/build-a-graphql-server-with-deno) | [✅ Compliant](/implementations/deno/README.md) |
| [graph-client](https://github.com/graphprotocol/graph-client) | [✅ Compliant](/implementations/graph-client/README.md) |
| [graphql-helix](https://www.graphql-helix.com) | [✅ Compliant](/implementations/graphql-helix/README.md) |
| [graphql-yoga](https://www.the-guild.dev/graphql/yoga-server) | [✅ Compliant](/implementations/graphql-yoga/README.md) |
| [hotchocolate](https://chillicream.com/docs/hotchocolate) | [✅ Compliant](/implementations/hotchocolate/README.md) |
| [lighthouse](https://lighthouse-php.com) | [✅ Compliant](/implementations/lighthouse/README.md) |
| [pioneer](https://pioneer.dexclaimation.com) | [✅ Compliant](/implementations/pioneer/README.md) |
| [postgraphile](https://www.graphile.org/postgraphile) | [✅ Compliant](/implementations/postgraphile/README.md) |
<!-- prettier-ignore-end -->

<!-- </ServersTable> -->

## [Documentation](docs/)

Check the [docs folder](docs/) out for [TypeDoc](https://typedoc.org) generated documentation.

## [Audits](implementations/)

Inspect audits of other implementations in the [implementations folder](implementations).
Adding your implementation is very welcome, [see how](CONTRIBUTING.md#adding-implementations)!

## Want to help?

File a bug, contribute with code, or improve documentation? [Read more in CONTRIBUTING.md](CONTRIBUTING.md).

If your company benefits from GraphQL and you would like to provide essential financial support for the systems and people that power our community, please also consider membership in the [GraphQL Foundation](https://foundation.graphql.org/join).
