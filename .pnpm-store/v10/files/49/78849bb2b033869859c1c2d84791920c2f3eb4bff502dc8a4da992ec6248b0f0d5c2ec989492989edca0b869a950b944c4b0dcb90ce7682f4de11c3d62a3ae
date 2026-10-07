# GraphQL Tools: `DocumentNode` Optimizer

This package is intended to allow developers to optimize `DocumentNode` objects created by `graphql` library.

It's built as a set of small optimizers you can compose to get the most out of your GraphQL setup.

The goal of this package is mostly around making optimizations for the way the data is stored in `DocumentNode`, and not to the essence of the `DocumentNode`.

## Getting Started

    yarn add -D @graphql-tools/optimize

## API

To get started with this tool, import it and run it over your `DocumentNode`.

```ts
import { optimizeDocumentNode } from '@graphql-tools/optimize';

const myDocument: DocumentNode = { ... }
const optimizedDocument = optimizeDocumentNode(myDocument);
```

### Customizing Optimizers

By default, we apply all optimizers available in this repo over your document. It shouldn't effect any runtime since we just remove dead or unused areas.

You can modify the list of optimizers this way:

```ts
import { optimizeDocumentNode, removeDescriptions } from '@graphql-tools/optimize';

const myDocument: DocumentNode = { ... }
const optimizedDocument = optimizeDocumentNode(myDocument, [removeDescriptions]);
```

### Writing your own optimizer

You can create your own optimizer to manipulate `DocumentNode`, the API signature is pretty simple:

```ts
export type DocumentOptimizer = (input: DocumentNode) => DocumentNode
```

Take a look at [./optimizers](this directory for inspiration and implementation reference).
