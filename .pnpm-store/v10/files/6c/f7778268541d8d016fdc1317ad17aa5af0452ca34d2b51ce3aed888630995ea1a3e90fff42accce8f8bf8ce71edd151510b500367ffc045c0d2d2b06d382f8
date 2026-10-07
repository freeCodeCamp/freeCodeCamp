# @jridgewell/sourcemap-codec

Encode/decode the `mappings` property of a [sourcemap](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit).


## Why?

Sourcemaps are difficult to generate and manipulate, because the `mappings` property – the part that actually links the generated code back to the original source – is encoded using an obscure method called [Variable-length quantity](https://en.wikipedia.org/wiki/Variable-length_quantity). On top of that, each segment in the mapping contains offsets rather than absolute indices, which means that you can't look at a segment in isolation – you have to understand the whole sourcemap.

This package makes the process slightly easier.


## Installation

```bash
npm install @jridgewell/sourcemap-codec
```


## Usage

```js
import { encode, decode } from '@jridgewell/sourcemap-codec';

var decoded = decode( ';EAEEA,EAAE,EAAC,CAAE;ECQY,UACC' );

assert.deepEqual( decoded, [
	// the first line (of the generated code) has no mappings,
	// as shown by the starting semi-colon (which separates lines)
	[],

	// the second line contains four (comma-separated) segments
	[
		// segments are encoded as you'd expect:
		// [ generatedCodeColumn, sourceIndex, sourceCodeLine, sourceCodeColumn, nameIndex ]

		// i.e. the first segment begins at column 2, and maps back to the second column
		// of the second line (both zero-based) of the 0th source, and uses the 0th
		// name in the `map.names` array
		[ 2, 0, 2, 2, 0 ],

		// the remaining segments are 4-length rather than 5-length,
		// because they don't map a name
		[ 4, 0, 2, 4 ],
		[ 6, 0, 2, 5 ],
		[ 7, 0, 2, 7 ]
	],

	// the final line contains two segments
	[
		[ 2, 1, 10, 19 ],
		[ 12, 1, 11, 20 ]
	]
]);

var encoded = encode( decoded );
assert.equal( encoded, ';EAEEA,EAAE,EAAC,CAAE;ECQY,UACC' );
```

## Benchmarks

```
node v20.10.0

amp.js.map - 45120 segments

Decode Memory Usage:
local code                             5815135 bytes
@jridgewell/sourcemap-codec 1.4.15     5868160 bytes
sourcemap-codec                        5492584 bytes
source-map-0.6.1                      13569984 bytes
source-map-0.8.0                       6390584 bytes
chrome dev tools                       8011136 bytes
Smallest memory usage is sourcemap-codec

Decode speed:
decode: local code x 492 ops/sec ±1.22% (90 runs sampled)
decode: @jridgewell/sourcemap-codec 1.4.15 x 499 ops/sec ±1.16% (89 runs sampled)
decode: sourcemap-codec x 376 ops/sec ±1.66% (89 runs sampled)
decode: source-map-0.6.1 x 34.99 ops/sec ±0.94% (48 runs sampled)
decode: source-map-0.8.0 x 351 ops/sec ±0.07% (95 runs sampled)
chrome dev tools x 165 ops/sec ±0.91% (86 runs sampled)
Fastest is decode: @jridgewell/sourcemap-codec 1.4.15

Encode Memory Usage:
local code                              444248 bytes
@jridgewell/sourcemap-codec 1.4.15      623024 bytes
sourcemap-codec                        8696280 bytes
source-map-0.6.1                       8745176 bytes
source-map-0.8.0                       8736624 bytes
Smallest memory usage is local code

Encode speed:
encode: local code x 796 ops/sec ±0.11% (97 runs sampled)
encode: @jridgewell/sourcemap-codec 1.4.15 x 795 ops/sec ±0.25% (98 runs sampled)
encode: sourcemap-codec x 231 ops/sec ±0.83% (86 runs sampled)
encode: source-map-0.6.1 x 166 ops/sec ±0.57% (86 runs sampled)
encode: source-map-0.8.0 x 203 ops/sec ±0.45% (88 runs sampled)
Fastest is encode: local code,encode: @jridgewell/sourcemap-codec 1.4.15


***


babel.min.js.map - 347793 segments

Decode Memory Usage:
local code                            35424960 bytes
@jridgewell/sourcemap-codec 1.4.15    35424696 bytes
sourcemap-codec                       36033464 bytes
source-map-0.6.1                      62253704 bytes
source-map-0.8.0                      43843920 bytes
chrome dev tools                      45111400 bytes
Smallest memory usage is @jridgewell/sourcemap-codec 1.4.15

Decode speed:
decode: local code x 38.18 ops/sec ±5.44% (52 runs sampled)
decode: @jridgewell/sourcemap-codec 1.4.15 x 38.36 ops/sec ±5.02% (52 runs sampled)
decode: sourcemap-codec x 34.05 ops/sec ±4.45% (47 runs sampled)
decode: source-map-0.6.1 x 4.31 ops/sec ±2.76% (15 runs sampled)
decode: source-map-0.8.0 x 55.60 ops/sec ±0.13% (73 runs sampled)
chrome dev tools x 16.94 ops/sec ±3.78% (46 runs sampled)
Fastest is decode: source-map-0.8.0

Encode Memory Usage:
local code                             2606016 bytes
@jridgewell/sourcemap-codec 1.4.15     2626440 bytes
sourcemap-codec                       21152576 bytes
source-map-0.6.1                      25023928 bytes
source-map-0.8.0                      25256448 bytes
Smallest memory usage is local code

Encode speed:
encode: local code x 127 ops/sec ±0.18% (83 runs sampled)
encode: @jridgewell/sourcemap-codec 1.4.15 x 128 ops/sec ±0.26% (83 runs sampled)
encode: sourcemap-codec x 29.31 ops/sec ±2.55% (53 runs sampled)
encode: source-map-0.6.1 x 18.85 ops/sec ±3.19% (36 runs sampled)
encode: source-map-0.8.0 x 19.34 ops/sec ±1.97% (36 runs sampled)
Fastest is encode: @jridgewell/sourcemap-codec 1.4.15


***


preact.js.map - 1992 segments

Decode Memory Usage:
local code                              261696 bytes
@jridgewell/sourcemap-codec 1.4.15      244296 bytes
sourcemap-codec                         302816 bytes
source-map-0.6.1                        939176 bytes
source-map-0.8.0                           336 bytes
chrome dev tools                        587368 bytes
Smallest memory usage is source-map-0.8.0

Decode speed:
decode: local code x 17,782 ops/sec ±0.32% (97 runs sampled)
decode: @jridgewell/sourcemap-codec 1.4.15 x 17,863 ops/sec ±0.40% (100 runs sampled)
decode: sourcemap-codec x 12,453 ops/sec ±0.27% (101 runs sampled)
decode: source-map-0.6.1 x 1,288 ops/sec ±1.05% (96 runs sampled)
decode: source-map-0.8.0 x 9,289 ops/sec ±0.27% (101 runs sampled)
chrome dev tools x 4,769 ops/sec ±0.18% (100 runs sampled)
Fastest is decode: @jridgewell/sourcemap-codec 1.4.15

Encode Memory Usage:
local code                              262944 bytes
@jridgewell/sourcemap-codec 1.4.15       25544 bytes
sourcemap-codec                         323048 bytes
source-map-0.6.1                        507808 bytes
source-map-0.8.0                        507480 bytes
Smallest memory usage is @jridgewell/sourcemap-codec 1.4.15

Encode speed:
encode: local code x 24,207 ops/sec ±0.79% (95 runs sampled)
encode: @jridgewell/sourcemap-codec 1.4.15 x 24,288 ops/sec ±0.48% (96 runs sampled)
encode: sourcemap-codec x 6,761 ops/sec ±0.21% (100 runs sampled)
encode: source-map-0.6.1 x 5,374 ops/sec ±0.17% (99 runs sampled)
encode: source-map-0.8.0 x 5,633 ops/sec ±0.32% (99 runs sampled)
Fastest is encode: @jridgewell/sourcemap-codec 1.4.15,encode: local code


***


react.js.map - 5726 segments

Decode Memory Usage:
local code                              678816 bytes
@jridgewell/sourcemap-codec 1.4.15      678816 bytes
sourcemap-codec                         816400 bytes
source-map-0.6.1                       2288864 bytes
source-map-0.8.0                        721360 bytes
chrome dev tools                       1012512 bytes
Smallest memory usage is local code

Decode speed:
decode: local code x 6,178 ops/sec ±0.19% (98 runs sampled)
decode: @jridgewell/sourcemap-codec 1.4.15 x 6,261 ops/sec ±0.22% (100 runs sampled)
decode: sourcemap-codec x 4,472 ops/sec ±0.90% (99 runs sampled)
decode: source-map-0.6.1 x 449 ops/sec ±0.31% (95 runs sampled)
decode: source-map-0.8.0 x 3,219 ops/sec ±0.13% (100 runs sampled)
chrome dev tools x 1,743 ops/sec ±0.20% (99 runs sampled)
Fastest is decode: @jridgewell/sourcemap-codec 1.4.15

Encode Memory Usage:
local code                              140960 bytes
@jridgewell/sourcemap-codec 1.4.15      159808 bytes
sourcemap-codec                         969304 bytes
source-map-0.6.1                        930520 bytes
source-map-0.8.0                        930248 bytes
Smallest memory usage is local code

Encode speed:
encode: local code x 8,013 ops/sec ±0.19% (100 runs sampled)
encode: @jridgewell/sourcemap-codec 1.4.15 x 7,989 ops/sec ±0.20% (101 runs sampled)
encode: sourcemap-codec x 2,472 ops/sec ±0.21% (99 runs sampled)
encode: source-map-0.6.1 x 2,200 ops/sec ±0.17% (99 runs sampled)
encode: source-map-0.8.0 x 2,220 ops/sec ±0.37% (99 runs sampled)
Fastest is encode: local code


***


vscode.map - 2141001 segments

Decode Memory Usage:
local code                           198955264 bytes
@jridgewell/sourcemap-codec 1.4.15   199175352 bytes
sourcemap-codec                      199102688 bytes
source-map-0.6.1                     386323432 bytes
source-map-0.8.0                     244116432 bytes
chrome dev tools                     293734280 bytes
Smallest memory usage is local code

Decode speed:
decode: local code x 3.90 ops/sec ±22.21% (15 runs sampled)
decode: @jridgewell/sourcemap-codec 1.4.15 x 3.95 ops/sec ±23.53% (15 runs sampled)
decode: sourcemap-codec x 3.82 ops/sec ±17.94% (14 runs sampled)
decode: source-map-0.6.1 x 0.61 ops/sec ±7.81% (6 runs sampled)
decode: source-map-0.8.0 x 9.54 ops/sec ±0.28% (28 runs sampled)
chrome dev tools x 2.18 ops/sec ±10.58% (10 runs sampled)
Fastest is decode: source-map-0.8.0

Encode Memory Usage:
local code                            13509880 bytes
@jridgewell/sourcemap-codec 1.4.15    13537648 bytes
sourcemap-codec                       32540104 bytes
source-map-0.6.1                     127531040 bytes
source-map-0.8.0                     127535312 bytes
Smallest memory usage is local code

Encode speed:
encode: local code x 20.10 ops/sec ±0.19% (38 runs sampled)
encode: @jridgewell/sourcemap-codec 1.4.15 x 20.26 ops/sec ±0.32% (38 runs sampled)
encode: sourcemap-codec x 5.44 ops/sec ±1.64% (18 runs sampled)
encode: source-map-0.6.1 x 2.30 ops/sec ±4.79% (10 runs sampled)
encode: source-map-0.8.0 x 2.46 ops/sec ±6.53% (10 runs sampled)
Fastest is encode: @jridgewell/sourcemap-codec 1.4.15
```

# License

MIT
