# BSON parser

BSON is short for "Binary JSON," and is the binary-encoded serialization of JSON-like documents.
You can learn more about it in [the specification](http://bsonspec.org).

### Table of Contents

- [Usage](#usage)
- [Bugs/Feature Requests](#bugs--feature-requests)
- [Installation](#installation)
- [Documentation](#documentation)
- [FAQ](#faq)


### Release Integrity

Releases are created automatically and signed using the [Node team's GPG key](https://pgp.mongodb.com/node-driver.asc). This applies to the git tag as well as all release packages provided as part of a GitHub release. To verify the provided packages, download the key and import it using gpg:

```shell
gpg --import node-driver.asc
```

The GitHub release contains a detached signature file for the NPM package (named
`bson-X.Y.Z.tgz.sig`).

The following command returns the link npm package. 
```shell
npm view bson@vX.Y.Z dist.tarball 
```

Using the result of the above command, a `curl` command can return the official npm package for the release.

To verify the integrity of the downloaded package, run the following command:
```shell
gpg --verify bson-X.Y.Z.tgz.sig bson-X.Y.Z.tgz
```

>[!Note]
No verification is done when using npm to install the package. The contents of the Github tarball and npm's tarball are identical.

## Bugs / Feature Requests

Think you've found a bug? Want to see a new feature in `bson`? Please open a case in our issue management tool, JIRA:

1. Create an account and login: [jira.mongodb.org](https://jira.mongodb.org)
2. Navigate to the NODE project: [jira.mongodb.org/browse/NODE](https://jira.mongodb.org/browse/NODE)
3. Click **Create Issue** - Please provide as much information as possible about the issue and how to reproduce it.

Bug reports in JIRA for the NODE driver project are **public**.

## Usage

To build a new version perform the following operations:

```
npm install
npm run build
```

### Node.js or Bundling Usage

When using a bundler or Node.js you can import bson using the package name:

```js
import { BSON, EJSON, ObjectId } from 'bson';
// or:
// const { BSON, EJSON, ObjectId } = require('bson');

const bytes = BSON.serialize({ _id: new ObjectId() });
console.log(bytes);
const doc = BSON.deserialize(bytes);
console.log(EJSON.stringify(doc));
// {"_id":{"$oid":"..."}}
```

### Browser Usage

If you are working directly in the browser without a bundler please use the `.mjs` bundle like so:

```html
<script type="module">
  import { BSON, EJSON, ObjectId } from './lib/bson.mjs';

  const bytes = BSON.serialize({ _id: new ObjectId() });
  console.log(bytes);
  const doc = BSON.deserialize(bytes);
  console.log(EJSON.stringify(doc));
  // {"_id":{"$oid":"..."}}
</script>
```

## Installation

```sh
npm install bson
```

### MongoDB Node.js Driver Version Compatibility

Only the following version combinations with the [MongoDB Node.js Driver](https://github.com/mongodb/node-mongodb-native) are considered stable.

|               | `bson@1.x` | `bson@4.x` | `bson@5.x` | `bson@6.x` | `bson@7.x` |
| ------------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| `mongodb@7.x` | N/A        | N/A        | N/A        | N/A        | ✓          |
| `mongodb@6.x` | N/A        | N/A        | N/A        | ✓          | N/A        |
| `mongodb@5.x` | N/A        | N/A        | ✓          | N/A        | N/A        |
| `mongodb@4.x` | N/A        | ✓          | N/A        | N/A        | N/A        |
| `mongodb@3.x` | ✓          | N/A        | N/A        | N/A        | N/A        |

## Documentation

### BSON

[API documentation](https://mongodb.github.io/node-mongodb-native/Next/modules/BSON.html)

<a name="EJSON"></a>

### EJSON

- [EJSON](#EJSON)

  - [.parse(text, [options])](#EJSON.parse)

  - [.stringify(value, [replacer], [space], [options])](#EJSON.stringify)

  - [.serialize(bson, [options])](#EJSON.serialize)

  - [.deserialize(ejson, [options])](#EJSON.deserialize)

<a name="EJSON.parse"></a>

#### _EJSON_.parse(text, [options])

| Param             | Type                 | Default           | Description                                                                        |
| ----------------- | -------------------- | ----------------- | ---------------------------------------------------------------------------------- |
| text              | <code>string</code>  |                   |                                                                                    |
| [options]         | <code>object</code>  |                   | Optional settings                                                                  |
| [options.relaxed] | <code>boolean</code> | <code>true</code> | Attempt to return native JS types where possible, rather than BSON types (if true) |

Parse an Extended JSON string, constructing the JavaScript value or object described by that
string.

**Example**

```js
const { EJSON } = require('bson');
const text = '{ "int32": { "$numberInt": "10" } }';

// prints { int32: { [String: '10'] _bsontype: 'Int32', value: '10' } }
console.log(EJSON.parse(text, { relaxed: false }));

// prints { int32: 10 }
console.log(EJSON.parse(text));
```

<a name="EJSON.stringify"></a>

#### _EJSON_.stringify(value, [replacer], [space], [options])

| Param             | Type                                        | Default           | Description                                                                                                                                                                                                                                                                                                                                        |
| ----------------- | ------------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value             | <code>object</code>                         |                   | The value to convert to extended JSON                                                                                                                                                                                                                                                                                                              |
| [replacer]        | <code>function</code> \| <code>array</code> |                   | A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string |
| [space]           | <code>string</code> \| <code>number</code>  |                   | A String or Number object that's used to insert white space into the output JSON string for readability purposes.                                                                                                                                                                                                                                  |
| [options]         | <code>object</code>                         |                   | Optional settings                                                                                                                                                                                                                                                                                                                                  |
| [options.relaxed] | <code>boolean</code>                        | <code>true</code> | Enabled Extended JSON's `relaxed` mode                                                                                                                                                                                                                                                                                                             |
| [options.legacy]  | <code>boolean</code>                        | <code>true</code> | Output in Extended JSON v1                                                                                                                                                                                                                                                                                                                         |

Converts a BSON document to an Extended JSON string, optionally replacing values if a replacer
function is specified or optionally including only the specified properties if a replacer array
is specified.

**Example**

```js
const { EJSON } = require('bson');
const Int32 = require('mongodb').Int32;
const doc = { int32: new Int32(10) };

// prints '{"int32":{"$numberInt":"10"}}'
console.log(EJSON.stringify(doc, { relaxed: false }));

// prints '{"int32":10}'
console.log(EJSON.stringify(doc));
```

<a name="EJSON.serialize"></a>

#### _EJSON_.serialize(bson, [options])

| Param     | Type                | Description                                          |
| --------- | ------------------- | ---------------------------------------------------- |
| bson      | <code>object</code> | The object to serialize                              |
| [options] | <code>object</code> | Optional settings passed to the `stringify` function |

Serializes an object to an Extended JSON string, and reparse it as a JavaScript object.

<a name="EJSON.deserialize"></a>

#### _EJSON_.deserialize(ejson, [options])

| Param     | Type                | Description                                  |
| --------- | ------------------- | -------------------------------------------- |
| ejson     | <code>object</code> | The Extended JSON object to deserialize      |
| [options] | <code>object</code> | Optional settings passed to the parse method |

Deserializes an Extended JSON object into a plain JavaScript object with native/BSON types

## Error Handling

It is our recommendation to use `BSONError.isBSONError()` checks on errors and to avoid relying on parsing `error.message` and `error.name` strings in your code. We guarantee `BSONError.isBSONError()` checks will pass according to semver guidelines, but errors may be sub-classed or their messages may change at any time, even patch releases, as we see fit to increase the helpfulness of the errors.

Any new errors we add to the driver will directly extend an existing error class and no existing error will be moved to a different parent class outside of a major release.
This means `BSONError.isBSONError()` will always be able to accurately capture the errors that our BSON library throws.

Hypothetical example: A collection in our Db has an issue with UTF-8 data:

```ts
let documentCount = 0;
const cursor = collection.find({}, { utf8Validation: true });
try {
  for await (const doc of cursor) documentCount += 1;
} catch (error) {
  if (BSONError.isBSONError(error)) {
    console.log(`Found the troublemaker UTF-8!: ${documentCount} ${error.message}`);
    return documentCount;
  }
  throw error;
}
```

## React Native

js-bson requires the `atob`, `btoa` and `TextEncoder` globals.  Older versions of React Native did not support these global objects, and so 
[js-bson v5.4.0](https://github.com/mongodb/js-bson/releases/tag/v5.4.0) added support for bundled polyfills for these globals.  Newer versions
of Hermes includes these globals, and so the polyfills for are no longer needed in the js-bson package.

If you find yourself on a version of React Native that does not have these globals, either:

1. polyfill them yourself
2. upgrade to a later version of hermes
3. use a version of js-bson `>=5.4.0` and `<7.0.0`

One additional polyfill, `crypto.getRandomValues` is recommended and can be installed with the following command:

```sh
npm install --save react-native-get-random-values
```

The following snippet should be placed at the top of the entrypoint (by default this is the root `index.js` file) for React Native projects using the BSON library. These lines must be placed for any code that imports `BSON`.

```typescript
// Required Polyfills For ReactNative
import 'react-native-get-random-values';
```

Finally, import the `BSON` library like so:

```typescript
import { BSON, EJSON } from 'bson';
```

This will cause React Native to import the `node_modules/bson/lib/bson.rn.cjs` bundle (see the `"react-native"` setting we have in the `"exports"` section of our [package.json](./package.json).)

### Technical Note about React Native module import

The `"exports"` definition in our `package.json` will result in BSON's CommonJS bundle being imported in a React Native project instead of the ES module bundle. Importing the CommonJS bundle is necessary because BSON's ES module bundle of BSON uses top-level await, which is not supported syntax in [React Native's runtime hermes](https://hermesengine.dev/).

## FAQ

#### Why does `undefined` get converted to `null`?

The `undefined` BSON type has been [deprecated for many years](http://bsonspec.org/spec.html), so this library has dropped support for it. Use the `ignoreUndefined` option (for example, from the [driver](http://mongodb.github.io/node-mongodb-native/2.2/api/MongoClient.html#connect) ) to instead remove `undefined` keys.

#### How do I add custom serialization logic?

This library looks for `toBSON()` functions on every path, and calls the `toBSON()` function to get the value to serialize.

```javascript
const BSON = require('bson');

class CustomSerialize {
  toBSON() {
    return 42;
  }
}

const obj = { answer: new CustomSerialize() };
// "{ answer: 42 }"
console.log(BSON.deserialize(BSON.serialize(obj)));
```
