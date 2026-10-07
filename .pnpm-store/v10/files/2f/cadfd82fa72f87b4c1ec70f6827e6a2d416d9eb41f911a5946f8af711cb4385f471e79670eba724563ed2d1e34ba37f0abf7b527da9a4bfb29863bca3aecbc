# gatsby-plugin-schema-snapshot

Create a snapshot of the GraphQL schema.

Saves a minimal schema to file, adds the `@dontInfer` directive to all top-level types, and re-creates the schema from the saved type definitions during bootstrap. Use this plugin if you intend to lock-down a project's GraphQL schema.

## Options

All configuration options are optional.

```js
{
  // Path where the type definitions will be saved to
  path: `schema.gql`,
  // include types by name, or all types owned by a plugin
  include: {
    types: [],
    plugins: [],
  },
  // exclude types by name, or all types owned by a plugin
  // by default, internal and built-in types are excluded
  exclude: {
    types: [],
    plugins: [],
  },
  // ensure all field types are included
  // don't turn this off unless you have a very good reason to
  withFieldTypes: true,
  // manually control if a saved schema snapshot should be replaced with an
  // updated version
  update: false,
}
```

## Example

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `schema.gql`,
        exclude: {
          plugins: [`gatsby-source-npm-package-search`],
        },
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
  ],
}
```
