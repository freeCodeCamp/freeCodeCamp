# MongoDB Node.js Driver

The official [MongoDB](https://www.mongodb.com/) driver for Node.js.

**Upgrading to version 6? Take a look at our [upgrade guide here](https://github.com/mongodb/node-mongodb-native/blob/HEAD/etc/notes/CHANGES_6.0.0.md)!**

## Quick Links

| Site                     | Link                                                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Documentation            | [www.mongodb.com/docs/drivers/node](https://www.mongodb.com/docs/drivers/node)                                                        |
| API Docs                 | [mongodb.github.io/node-mongodb-native](https://mongodb.github.io/node-mongodb-native)                                                |
| `npm` package            | [www.npmjs.com/package/mongodb](https://www.npmjs.com/package/mongodb)                                                                |
| MongoDB                  | [www.mongodb.com](https://www.mongodb.com)                                                                                            |
| MongoDB University       | [learn.mongodb.com](https://learn.mongodb.com/catalog?labels=%5B%22Language%22%5D&values=%5B%22Node.js%22%5D)                         |
| MongoDB Developer Center | [www.mongodb.com/developer](https://www.mongodb.com/developer/languages/javascript/)                                                  |
| Stack Overflow           | [stackoverflow.com](https://stackoverflow.com/search?q=%28%5Btypescript%5D+or+%5Bjavascript%5D+or+%5Bnode.js%5D%29+and+%5Bmongodb%5D) |
| Source Code              | [github.com/mongodb/node-mongodb-native](https://github.com/mongodb/node-mongodb-native)                                              |
| Upgrade to v6            | [etc/notes/CHANGES_6.0.0.md](https://github.com/mongodb/node-mongodb-native/blob/HEAD/etc/notes/CHANGES_6.0.0.md)                     |
| Contributing             | [CONTRIBUTING.md](https://github.com/mongodb/node-mongodb-native/blob/HEAD/CONTRIBUTING.md)                                           |
| Changelog                | [HISTORY.md](https://github.com/mongodb/node-mongodb-native/blob/HEAD/HISTORY.md)                                                     |



### Release Integrity

Releases are created automatically and signed using the [Node team's GPG key](https://pgp.mongodb.com/node-driver.asc). This applies to the git tag as well as all release packages provided as part of a GitHub release. To verify the provided packages, download the key and import it using gpg:

```shell
gpg --import node-driver.asc
```

The GitHub release contains a detached signature file for the NPM package (named
`mongodb-X.Y.Z.tgz.sig`).

The following command returns the link npm package.
```shell
npm view mongodb@vX.Y.Z dist.tarball
```

Using the result of the above command, a `curl` command can return the official npm package for the release.

To verify the integrity of the downloaded package, run the following command:
```shell
gpg --verify mongodb-X.Y.Z.tgz.sig mongodb-X.Y.Z.tgz
```

>[!Note]
No verification is done when using npm to install the package. The contents of the Github tarball and npm's tarball are identical.

The MongoDB Node.js driver follows [semantic versioning](https://semver.org/) for its releases.

### Bugs / Feature Requests

Think you’ve found a bug? Want to see a new feature in `node-mongodb-native`? Please open a
case in our issue management tool, JIRA:

- Create an account and login [jira.mongodb.org](https://jira.mongodb.org).
- Navigate to the NODE project [jira.mongodb.org/browse/NODE](https://jira.mongodb.org/browse/NODE).
- Click **Create Issue** - Please provide as much information as possible about the issue type and how to reproduce it.

Bug reports in JIRA for all driver projects (i.e. NODE, PYTHON, CSHARP, JAVA) and the
Core Server (i.e. SERVER) project are **public**.

### Support / Feedback

For issues with, questions about, or feedback for the Node.js driver, please look into our [support channels](https://www.mongodb.com/docs/manual/support). Please do not email any of the driver developers directly with issues or questions - you're more likely to get an answer on the [MongoDB Community Forums](https://community.mongodb.com/tags/c/drivers-odms-connectors/7/node-js-driver).

### Change Log

Change history can be found in [`HISTORY.md`](https://github.com/mongodb/node-mongodb-native/blob/HEAD/HISTORY.md).

### Compatibility

The driver currently supports 4.2+ servers.

For exhaustive server and runtime version compatibility matrices, please refer to the following links:

- [MongoDB](https://www.mongodb.com/docs/drivers/node/current/compatibility/#mongodb-compatibility)
- [NodeJS](https://www.mongodb.com/docs/drivers/node/current/compatibility/#language-compatibility)

#### Component Support Matrix

The following table describes add-on component version compatibility for the Node.js driver. Only packages with versions in these supported ranges are stable when used in combination.

| Component                                                                            | `mongodb@3.x`      | `mongodb@4.x`      | `mongodb@5.x`      | `mongodb@<6.12` | `mongodb@>=6.12`   |
| ------------------------------------------------------------------------------------ | ------------------ | ------------------ | ------------------ | --------------- | ------------------ |
| [bson](https://www.npmjs.com/package/bson)                                           | ^1.0.0             | ^4.0.0             | ^5.0.0             | ^6.0.0          | ^6.0.0             |
| [bson-ext](https://www.npmjs.com/package/bson-ext)                                   | ^1.0.0 \|\| ^2.0.0 | ^4.0.0             | N/A                | N/A             | N/A                |
| [kerberos](https://www.npmjs.com/package/kerberos)                                   | ^1.0.0             | ^1.0.0 \|\| ^2.0.0 | ^1.0.0 \|\| ^2.0.0 | ^2.0.1          | ^2.0.1             |
| [mongodb-client-encryption](https://www.npmjs.com/package/mongodb-client-encryption) | ^1.0.0             | ^1.0.0 \|\| ^2.0.0 | ^2.3.0             | ^6.0.0          | ^6.0.0             |
| [mongodb-legacy](https://www.npmjs.com/package/mongodb-legacy)                       | N/A                | ^4.0.0             | ^5.0.0             | ^6.0.0          | ^6.0.0             |
| [@mongodb-js/zstd](https://www.npmjs.com/package/@mongodb-js/zstd)                   | N/A                | ^1.0.0             | ^1.0.0             | ^1.1.0          | ^1.1.0 \|\| ^2.0.0 |


#### Typescript Version

We recommend using the latest version of typescript, however we currently ensure the driver's public types compile against `typescript@4.4.0`.
This is the lowest typescript version guaranteed to work with our driver: older versions may or may not work - use at your own risk.
Since typescript [does not restrict breaking changes to major versions](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes), we consider this support best effort.
If you run into any unexpected compiler failures against our supported TypeScript versions, please let us know by filing an issue on our [JIRA](https://jira.mongodb.org/browse/NODE).

Additionally, our Typescript types are compatible with the ECMAScript standard for our minimum supported Node version.  Currently, our Typescript targets es2021.

## Installation

The recommended way to get started using the Node.js 5.x driver is by using the `npm` (Node Package Manager) to install the dependency in your project.

After you've created your own project using `npm init`, you can run:

```bash
npm install mongodb
```

This will download the MongoDB driver and add a dependency entry in your `package.json` file.

If you are a Typescript user, you will need the Node.js type definitions to use the driver's definitions:

```sh
npm install -D @types/node
```

## Driver Extensions

The MongoDB driver can optionally be enhanced by the following feature packages:

Maintained by MongoDB:

- Zstd network compression - [@mongodb-js/zstd](https://github.com/mongodb-js/zstd)
- MongoDB field level and queryable encryption - [mongodb-client-encryption](https://github.com/mongodb/libmongocrypt#readme)
- GSSAPI / SSPI / Kerberos authentication - [kerberos](https://github.com/mongodb-js/kerberos)

Some of these packages include native C++ extensions.
Consult the [trouble shooting guide here](https://github.com/mongodb/node-mongodb-native/blob/HEAD/etc/notes/native-extensions.md) if you run into compilation issues.

Third party:

- Snappy network compression - [snappy](https://github.com/Brooooooklyn/snappy)
- AWS authentication - [@aws-sdk/credential-providers](https://github.com/aws/aws-sdk-js-v3/tree/main/packages/credential-providers)

## Quick Start

This guide will show you how to set up a simple application using Node.js and MongoDB. Its scope is only how to set up the driver and perform the simple CRUD operations. For more in-depth coverage, see the [official documentation](https://www.mongodb.com/docs/drivers/node/).

### Create the `package.json` file

First, create a directory where your application will live.

```bash
mkdir myProject
cd myProject
```

Enter the following command and answer the questions to create the initial structure for your new project:

```bash
npm init -y
```

Next, install the driver as a dependency.

```bash
npm install mongodb
```

### Start a MongoDB Server

For complete MongoDB installation instructions, see [the manual](https://www.mongodb.com/docs/manual/installation/).

1. Download the right MongoDB version from [MongoDB](https://www.mongodb.org/downloads)
2. Create a database directory (in this case under **/data**).
3. Install and start a `mongod` process.

```bash
mongod --dbpath=/data
```

You should see the **mongod** process start up and print some status information.

### Connect to MongoDB

Create a new **app.js** file and add the following code to try out some basic CRUD
operations using the MongoDB driver.

Add code to connect to the server and the database **myProject**:

> **NOTE:** Resolving DNS Connection issues
>
> Node.js 18 changed the default DNS resolution ordering from always prioritizing IPv4 to the ordering
> returned by the DNS provider. In some environments, this can result in `localhost` resolving to
> an IPv6 address instead of IPv4 and a consequent failure to connect to the server.
>
> This can be resolved by:
>
> - specifying the IP address family using the MongoClient `family` option (`MongoClient(<uri>, { family: 4 } )`)
> - launching mongod or mongos with the ipv6 flag enabled ([--ipv6 mongod option documentation](https://www.mongodb.com/docs/manual/reference/program/mongod/#std-option-mongod.--ipv6))
> - using a host of `127.0.0.1` in place of localhost
> - specifying the DNS resolution ordering with the `--dns-resolution-order` Node.js command line argument (e.g. `node --dns-resolution-order=ipv4first`)

```js
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
```

Run your app from the command line with:

```bash
node app.js
```

The application should print **Connected successfully to server** to the console.

### Insert a Document

Add to **app.js** the following function which uses the **insertMany**
method to add three documents to the **documents** collection.

```js
const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
console.log('Inserted documents =>', insertResult);
```

The **insertMany** command returns an object with information about the insert operations.

### Find All Documents

Add a query that returns all the documents.

```js
const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);
```

This query returns all the documents in the **documents** collection.
If you add this below the insertMany example, you'll see the documents you've inserted.

### Find Documents with a Query Filter

Add a query filter to find only documents which meet the query criteria.

```js
const filteredDocs = await collection.find({ a: 3 }).toArray();
console.log('Found documents filtered by { a: 3 } =>', filteredDocs);
```

Only the documents which match `'a' : 3` should be returned.

### Update a document

The following operation updates a document in the **documents** collection.

```js
const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
console.log('Updated documents =>', updateResult);
```

The method updates the first document where the field **a** is equal to **3** by adding a new field **b** to the document set to **1**. `updateResult` contains information about whether there was a matching document to update or not.

### Remove a document

Remove the document where the field **a** is equal to **3**.

```js
const deleteResult = await collection.deleteMany({ a: 3 });
console.log('Deleted documents =>', deleteResult);
```

### Index a Collection

[Indexes](https://www.mongodb.com/docs/manual/indexes/) can improve your application's
performance. The following function creates an index on the **a** field in the
**documents** collection.

```js
const indexName = await collection.createIndex({ a: 1 });
console.log('index name =', indexName);
```

For more detailed information, see the [indexing strategies page](https://www.mongodb.com/docs/manual/applications/indexes/).

## Error Handling

If you need to filter certain errors from our driver, we have a helpful tree of errors described in [etc/notes/errors.md](https://github.com/mongodb/node-mongodb-native/blob/HEAD/etc/notes/errors.md).

It is our recommendation to use `instanceof` checks on errors and to avoid relying on parsing `error.message` and `error.name` strings in your code.
We guarantee `instanceof` checks will pass according to semver guidelines, but errors may be sub-classed or their messages may change at any time, even patch releases, as we see fit to increase the helpfulness of the errors.

Any new errors we add to the driver will directly extend an existing error class and no existing error will be moved to a different parent class outside of a major release.
This means `instanceof` will always be able to accurately capture the errors that our driver throws.

```typescript
const client = new MongoClient(url);
await client.connect();
const collection = client.db().collection('collection');

try {
  await collection.insertOne({ _id: 1 });
  await collection.insertOne({ _id: 1 }); // duplicate key error
} catch (error) {
  if (error instanceof MongoServerError) {
    console.log(`Error worth logging: ${error}`); // special case for some reason
  }
  throw error; // still want to crash
}
```

## Nightly releases

If you need to test with a change from the latest `main` branch, our `mongodb` npm package has nightly versions released under the `nightly` tag.

```sh
npm install mongodb@nightly
```

Nightly versions are published regardless of testing outcome.
This means there could be semantic breakages or partially implemented features.
The nightly build is not suitable for production use.

## Next Steps

- [MongoDB Documentation](https://www.mongodb.com/docs/manual/)
- [MongoDB Node Driver Documentation](https://www.mongodb.com/docs/drivers/node/)
- [Read about Schemas](https://www.mongodb.com/docs/manual/core/data-modeling-introduction/)
- [Star us on GitHub](https://github.com/mongodb/node-mongodb-native)

## License

[Apache 2.0](LICENSE.md)

© 2012-present MongoDB [Contributors](https://github.com/mongodb/node-mongodb-native/blob/HEAD/CONTRIBUTORS.md) \
© 2009-2012 Christian Amor Kvalheim
