# Parcel's source-map library

A source map library purpose-build for the Parcel bundler with a focus on fast combining and manipulating of source-maps.

To learn more about how sourcemaps are formatted and how they work, you can have a look at the [SourceMap Specification](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k).

## How to use this library?

If you want to use this library in your project or are looking to write a Parcel plugin with sourcemap support this should explain how you could get started.

For more information we have added doctypes to each function of the SourceMap class so you can have an in depth look at what everything does.

### Creating a SourceMap instance

You can create a sourcemap from another sourcemap or by creating it one mapping at a time.

#### Creating from existing sourcemap

To create a sourcemap from an existing sourcemap you have to ensure it is a JS Object first by asking for the object version from whichever transpiler you're running or by parsing the serialised map using `JSON.parse` or any other JSON parser.

After this you can call the function `addVLQMap(map, lineOffset, columnOffset)` this function takes in the parameters `map`, `lineOffset` and `columnOffset`. The map argument corresponds to the sourcemap object. The line and column offset are optional parameters used for offsetting the generated line and column. (this can be used when post-processing or wrapping the code linked to the sourcemap, in Parcel this is used when combining maps).

Example:

```JS
import SourceMap from '@parcel/source-map';

const RAW_SOURCEMAP = {
  version: 3,
  file: "helloworld.js",
  sources: ["helloworld.coffee"],
  names: [],
  mappings: "AAAA;AAAA,EAAA,OAAO,CAAC,GAAR,CAAY,aAAZ,CAAA,CAAA;AAAA",
};

let sourcemap = new SourceMap();
sourcemap.addVLQMap(RAW_SOURCEMAP);

// This function removes the underlying references in the native code
sourcemap.delete();
```

#### Creating a sourcemap one mapping at a time

If you want to use this library to create a sourcemap from scratch you can, for this you can call the `addIndexedMapping(mapping, lineOffset, columnOffset)` function.

Example:

```JS
import SourceMap from '@parcel/source-map';

let sourcemap = new SourceMap();

// Add a single mapping
sourcemap.addIndexedMapping({
  generated: {
    // line index starts at 1
    line: 1,
    // column index starts at 0
    column: 4
  },
  original: {
    // line index starts at 1
    line: 1,
    // column index starts at 0
    column: 4
  },
  source: 'index.js',
  // Name is optional
  name: 'A'
});

// This function removes the underlying references in the native code
sourcemap.delete();
```

### Caching

For caching sourcemaps we have a `toBuffer()` function which returns a buffer that can be saved on disk for later use and combining sourcemaps very quickly.

You can add a cached map to a SourceMap instance using the `addBuffer(buffer, lineOffset)` function, where you can also offset the generated line and column.

## Inspiration and purpose

### Why did we write this library

Parcel is a performance conscious bundler, and therefore we like to optimise Parcel's performance as much as possible.

Our original source-map implementation used mozilla's source-map and a bunch of javascript and had issues with memory usage and serialization times (we were keeping all mappings in memory using JS objects and write/read it using JSON for caching).

This implementation has been written from scratch in Rust minimizing the memory usage, by utilizing indexes for sources and names and optimizing serialization times by using Buffers instead of JSON for caching.

### Previous works and inspiration

Without these libraries this library wouldn't be as good as it is today. We've inspired and optimized our code using ideas and patterns used inside these libraries as well as used it to figure out how sourcemaps should be handled properly.

- [source-map by Mozilla](https://github.com/mozilla/source-map)
- [source-map-mappings by Nick Fitzgerald](https://github.com/fitzgen/source-map-mappings)
- [sourcemap-codec by Rich Harris](https://github.com/Rich-Harris/sourcemap-codec)

## Contributing to this library

All contributions to this library are welcome as is with any part of Parcel's vast collection of libraries and tools.

### Prerequisites

To be able to build and work on this project you need to have the following tools installed:

- [`node.js`](https://nodejs.org/en/)
- [`Rust`](https://rustup.rs/)

### Building the project

For development purposes you might want to build or rebuild the project, for this you need to build the N-API module and JS Code.

To do this run the following commands: (for more information about this you can have a look in `./package.json` and `./Makefile`)

```shell
yarn transpile && yarn build:node
```

### Tagging a release

Before you're able to tag a release ensure to have cargo-release installed `cargo install cargo-release`, we use it to tag the cargo files with a release tag.

```shell
yarn tag-release <version>
```
