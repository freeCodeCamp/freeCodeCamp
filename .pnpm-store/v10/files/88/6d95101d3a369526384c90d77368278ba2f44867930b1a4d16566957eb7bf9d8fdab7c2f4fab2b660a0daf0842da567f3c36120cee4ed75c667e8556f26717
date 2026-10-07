# graphql-type-json [![Travis][build-badge]][build] [![npm][npm-badge]][npm]

JSON scalar types for [GraphQL.js](https://github.com/graphql/graphql-js).

[![Codecov][codecov-badge]][codecov]

## Usage

This package exports a JSON value scalar GraphQL.js type:

```js
import GraphQLJSON from 'graphql-type-json';
```

It also exports a JSON object scalar type:

```js
import { GraphQLJSONObject } from 'graphql-type-json';
```

These types can also be imported as follows using CommonJS:

```js
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');
```

`GraphQLJSON` can represent any JSON-serializable value, including scalars, arrays, and objects. `GraphQLJSONObject` represents specifically JSON objects, which covers many practical use cases for JSON scalars.

### Programmatically-constructed schemas

You can use this in a programmatically-constructed schema as with any other scalar type:

```js
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

export default new GraphQLObjectType({
  name: 'MyType',

  fields: {
    myValue: { type: GraphQLJSON },
    myObject: { type: GraphQLJSONObject },
  },
});
```

### SDL with [GraphQL-tools](https://github.com/apollographql/graphql-tools)

When using the SDL with GraphQL-tools, define `GraphQLJSON` as the resolver for the appropriate scalar type in your schema:

```js
import { makeExecutableSchema } from 'graphql-tools';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

const typeDefs = `
scalar JSON
scalar JSONObject

type MyType {
  myValue: JSON
  myObject: JSONObject
}

# ...
`;

const resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
};

export default makeExecutableSchema({ typeDefs, resolvers });
```

[build-badge]: https://img.shields.io/travis/taion/graphql-type-json/master.svg
[build]: https://travis-ci.org/taion/graphql-type-json
[npm-badge]: https://img.shields.io/npm/v/graphql-type-json.svg
[npm]: https://www.npmjs.com/package/graphql-type-json
[codecov-badge]: https://img.shields.io/codecov/c/github/taion/graphql-type-json/master.svg
[codecov]: https://codecov.io/gh/taion/graphql-type-json
