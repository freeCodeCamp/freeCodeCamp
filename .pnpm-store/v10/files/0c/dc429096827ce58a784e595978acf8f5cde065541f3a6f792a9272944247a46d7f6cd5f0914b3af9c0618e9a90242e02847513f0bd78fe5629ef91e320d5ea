# graphql-tag
[![npm version](https://badge.fury.io/js/graphql-tag.svg)](https://badge.fury.io/js/graphql-tag)
[![Build Status](https://travis-ci.org/apollographql/graphql-tag.svg?branch=master)](https://travis-ci.org/apollographql/graphql-tag)
[![Get on Slack](https://img.shields.io/badge/slack-join-orange.svg)](http://www.apollodata.com/#slack)

Helpful utilities for parsing GraphQL queries. Includes:

- `gql` A JavaScript template literal tag that parses GraphQL query strings into the standard GraphQL AST.
- `/loader` A webpack loader to preprocess queries

`graphql-tag` uses [the reference `graphql` library](https://github.com/graphql/graphql-js) under the hood as a peer dependency, so in addition to installing this module, you'll also have to install `graphql`.

### gql

The `gql` template literal tag can be used to concisely write a GraphQL query that is parsed into a standard GraphQL AST. It is the recommended method for passing queries to [Apollo Client](https://github.com/apollographql/apollo-client). While it is primarily built for Apollo Client, it generates a generic GraphQL AST which can be used by any GraphQL client.

```js
import gql from 'graphql-tag';

const query = gql`
  {
    user(id: 5) {
      firstName
      lastName
    }
  }
`
```

The above query now contains the following syntax tree.

```js
{
  "kind": "Document",
  "definitions": [
    {
      "kind": "OperationDefinition",
      "operation": "query",
      "name": null,
      "variableDefinitions": null,
      "directives": [],
      "selectionSet": {
        "kind": "SelectionSet",
        "selections": [
          {
            "kind": "Field",
            "alias": null,
            "name": {
              "kind": "Name",
              "value": "user",
              ...
            }
          }
        ]
      }
    }
  ]
}
```

#### Fragments

The `gql` tag can also be used to define reusable fragments, which can easily be added to queries or other fragments.

```js
import gql from 'graphql-tag';

const userFragment = gql`
  fragment User_user on User {
    firstName
    lastName
  }
`
```

The above `userFragment` document can be embedded in another document using a template literal placeholder.

```js
const query = gql`
  {
    user(id: 5) {
      ...User_user
    }
  }
  ${userFragment}
`
```

**Note:** _While it may seem redundant to have to both embed the `userFragment` variable in the template literal **AND** spread the `...User_user` fragment in the graphQL selection set, this requirement makes static analysis by tools such as `eslint-plugin-graphql` possible._

#### Why use this?

GraphQL strings are the right way to write queries in your code, because they can be statically analyzed using tools like [eslint-plugin-graphql](https://github.com/apollographql/eslint-plugin-graphql). However, strings are inconvenient to manipulate, if you are trying to do things like add extra fields, merge multiple queries together, or other interesting stuff.

That's where this package comes in - it lets you write your queries with [ES2015 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) and compile them into an AST with the `gql` tag.

#### Caching parse results

This package only has one feature - it caches previous parse results in a simple dictionary. This means that if you call the tag on the same query multiple times, it doesn't waste time parsing it again. It also means you can use `===` to compare queries to check if they are identical.


### Importing graphQL files

_To add support for importing `.graphql`/`.gql` files, see [Webpack loading and preprocessing](#webpack-loading-and-preprocessing) below._

Given a file `MyQuery.graphql`

```graphql
query MyQuery {
  ...
}
```

If you have configured [the webpack graphql-tag/loader](#webpack-loading-and-preprocessing), you can import modules containing graphQL queries. The imported value will be the pre-built AST.

```js
import MyQuery from 'query.graphql'
```

#### Importing queries by name

You can also import query and fragment documents by name.

```graphql
query MyQuery1 {
  ...
}

query MyQuery2 {
  ...
}
```

And in your JavaScript:

```javascript
import { MyQuery1, MyQuery2 } from 'query.graphql'
```

### Preprocessing queries and fragments

Preprocessing GraphQL queries and fragments into ASTs at build time can greatly improve load times.

#### Babel preprocessing

GraphQL queries can be compiled at build time using [babel-plugin-graphql-tag](https://github.com/gajus/babel-plugin-graphql-tag). Pre-compiling queries decreases script initialization time and reduces bundle sizes by potentially removing the need for `graphql-tag` at runtime.

#### TypeScript preprocessing

Try this custom transformer to pre-compile your GraphQL queries in TypeScript: [ts-transform-graphql-tag](https://github.com/firede/ts-transform-graphql-tag).

#### React Native and Next.js preprocessing

Preprocessing queries via the webpack loader is not always possible. [babel-plugin-import-graphql](https://www.npmjs.com/package/babel-plugin-import-graphql) supports importing graphql files directly into your JavaScript by preprocessing GraphQL queries into ASTs at compile-time.

E.g.:

```javascript
import myImportedQuery from './productsQuery.graphql'

class ProductsPage extends React.Component {
  ...
}
```

#### Webpack loading and preprocessing

Using the included `graphql-tag/loader` it is possible to maintain query logic that is separate from the rest of your application logic. With the loader configured, imported graphQL files will be converted to AST during the webpack build process.

_**Example webpack configuration**_

```js
{
  ...
  loaders: [
    {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    }
  ],
  ...
}
```

#### Create React App

Preprocessing GraphQL imports is supported in **create-react-app** >= v2 using [evenchange4/graphql.macro](https://github.com/evenchange4/graphql.macro).

For **create-react-app** < v2, you'll either need to eject or use [react-app-rewire-inline-import-graphql-ast](https://www.npmjs.com/package/react-app-rewire-inline-import-graphql-ast).

#### Testing

Testing environments that don't support Webpack require additional configuration. For [Jest](https://facebook.github.io/jest/) use [jest-transform-graphql](https://github.com/remind101/jest-transform-graphql).

#### Support for fragments

With the webpack loader, you can import fragments by name:

In a file called `query.gql`:

```graphql
fragment MyFragment1 on MyType1 {
  ...
}

fragment MyFragment2 on MyType2 {
  ...
}
```

And in your JavaScript:

```javascript
import { MyFragment1, MyFragment2 } from 'query.gql'
```

Note: If your fragment references other fragments, the resulting document will
have multiple fragments in it. In this case you must still specify the fragment name when using the fragment. For example, with `@apollo/client` you would specify the `fragmentName` option when using the fragment for cache operations.

### Warnings

This package will emit a warning if you have multiple fragments of the same name. You can disable this with:

```js
import { disableFragmentWarnings } from 'graphql-tag';

disableFragmentWarnings()
```

### Experimental Fragment Variables

This package exports an `experimentalFragmentVariables` flag that allows you to use experimental support for [parameterized fragments](https://github.com/facebook/graphql/issues/204).

You can enable / disable this with:

```js
import { enableExperimentalFragmentVariables, disableExperimentalFragmentVariables } from 'graphql-tag';
```

Enabling this feature allows you declare documents of the form

```graphql
fragment SomeFragment ($arg: String!) on SomeType {
  someField
}
```

### Resources

You can easily generate and explore a GraphQL AST on [astexplorer.net](https://astexplorer.net/#/drYr8X1rnP/1).
