# JavaScript ObjectSchema Package

by [Nicholas C. Zakas](https://humanwhocodes.com)

If you find this useful, please consider supporting my work with a [donation](https://humanwhocodes.com/donate).

## Overview

A JavaScript object merge/validation utility where you can define a different merge and validation strategy for each key. This is helpful when you need to validate complex data structures and then merge them in a way that is more complex than `Object.assign()`.

## Installation

You can install using either npm:

```
npm install @humanwhocodes/object-schema
```

Or Yarn:

```
yarn add @humanwhocodes/object-schema
```

## Usage

Use CommonJS to get access to the `ObjectSchema` constructor:

```js
const { ObjectSchema } = require("@humanwhocodes/object-schema");

const schema = new ObjectSchema({

    // define a definition for the "downloads" key
    downloads: {
        required: true,
        merge(value1, value2) {
            return value1 + value2;
        },
        validate(value) {
            if (typeof value !== "number") {
                throw new Error("Expected downloads to be a number.");
            }
        }
    },

    // define a strategy for the "versions" key
    version: {
        required: true,
        merge(value1, value2) {
            return value1.concat(value2);
        },
        validate(value) {
            if (!Array.isArray(value)) {
                throw new Error("Expected versions to be an array.");
            }
        }
    }
});

const record1 = {
    downloads: 25,
    versions: [
        "v1.0.0",
        "v1.1.0",
        "v1.2.0"
    ]
};

const record2 = {
    downloads: 125,
    versions: [
        "v2.0.0",
        "v2.1.0",
        "v3.0.0"
    ]
};

// make sure the records are valid
schema.validate(record1);
schema.validate(record2);

// merge together (schema.merge() accepts any number of objects)
const result = schema.merge(record1, record2);

// result looks like this:

const result = {
    downloads: 75,
    versions: [
        "v1.0.0",
        "v1.1.0",
        "v1.2.0",
        "v2.0.0",
        "v2.1.0",
        "v3.0.0"
    ]
};
```

## Tips and Tricks

### Named merge strategies

Instead of specifying a `merge()` method, you can specify one of the following strings to use a default merge strategy:

* `"assign"` - use `Object.assign()` to merge the two values into one object.
* `"overwrite"` - the second value always replaces the first.
* `"replace"` - the second value replaces the first if the second is not `undefined`.

For example:

```js
const schema = new ObjectSchema({
    name: {
        merge: "replace",
        validate() {}
    }
});
```

### Named validation strategies

Instead of specifying a `validate()` method, you can specify one of the following strings to use a default validation strategy:

* `"array"` - value must be an array.
* `"boolean"` - value must be a boolean.
* `"number"` - value must be a number.
* `"object"` - value must be an object.
* `"object?"` - value must be an object or null.
* `"string"` - value must be a string.
* `"string!"` - value must be a non-empty string.

For example:

```js
const schema = new ObjectSchema({
    name: {
        merge: "replace",
        validate: "string"
    }
});
```

### Subschemas

If you are defining a key that is, itself, an object, you can simplify the process by using a subschema. Instead of defining `merge()` and `validate()`, assign a `schema` key that contains a schema definition, like this:

```js
const schema = new ObjectSchema({
    name: {
        schema: {
            first: {
                merge: "replace",
                validate: "string"
            },
            last: {
                merge: "replace",
                validate: "string"
            }
        }
    }
});

schema.validate({
    name: {
        first: "n",
        last: "z"
    }
});
```

### Remove Keys During Merge

If the merge strategy for a key returns `undefined`, then the key will not appear in the final object. For example:

```js
const schema = new ObjectSchema({
    date: {
        merge() {
            return undefined;
        },
        validate(value) {
            Date.parse(value);  // throws an error when invalid
        }
    }
});

const object1 = { date: "5/5/2005" };
const object2 = { date: "6/6/2006" };

const result = schema.merge(object1, object2);

console.log("date" in result);  // false
```

### Requiring Another Key Be Present

If you'd like the presence of one key to require the presence of another key, you can use the `requires` property to specify an array of other properties that any key requires. For example:

```js
const schema = new ObjectSchema();

const schema = new ObjectSchema({
    date: {
        merge() {
            return undefined;
        },
        validate(value) {
            Date.parse(value);  // throws an error when invalid
        }
    },
    time: {
        requires: ["date"],
        merge(first, second) {
            return second;
        },
        validate(value) {
            // ...
        }
    }
});

// throws error: Key "time" requires keys "date"
schema.validate({
    time: "13:45"
});
```

In this example, even though `date` is an optional key, it is required to be present whenever `time` is present.

## License

BSD 3-Clause
