# fastest-levenshtein :rocket: 
> Fastest JS/TS implemenation of [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance).<br>
> Measure the difference between two strings.

[![Build Status](https://travis-ci.org/ka-weihe/fastest-levenshtein.svg?branch=master)](https://travis-ci.org/ka-weihe/fastest-levenshtein)
[![Coverage Status](https://coveralls.io/repos/github/ka-weihe/node-levenshtein/badge.svg?branch=master)](https://coveralls.io/github/ka-weihe/node-levenshtein?branch=master)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/ka-weihe/fastest-levenshtein.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ka-weihe/fastest-levenshtein/context:javascript)
![npm](https://img.shields.io/npm/dm/fastest-levenshtein)
```bash
$ npm i fastest-levenshtein
```

## Usage
### Node
```javascript
const {distance, closest} = require('fastest-levenshtein')

// Print levenshtein-distance between 'fast' and 'faster' 
console.log(distance('fast', 'faster'))
//=> 2

// Print string from array with lowest edit-distance to 'fast'
console.log(closest('fast', ['slow', 'faster', 'fastest']))
//=> 'faster'
```

### Deno
```javascript
import {distance, closest} from 'https://deno.land/x/fastest_levenshtein/mod.ts'

// Print levenshtein-distance between 'fast' and 'faster' 
console.log(distance('fast', 'faster'))
//=> 2

// Print string from array with lowest edit-distance to 'fast'
console.log(closest('fast', ['slow', 'faster', 'fastest']))
//=> 'faster'
```

## Benchmark
I generated 500 pairs of strings with length N. I measured the ops/sec each library achieves to process all the given pairs. Higher is better. 

| Test Target               | N=4   | N=8   | N=16  | N=32 | N=64  | N=128 | N=256 | N=512 | N=1024 |
|---------------------------|-------|-------|-------|------|-------|-------|-------|-------|--------|
| fastest-levenshtein       | 44423 | 23702 | 10764 | 4595 | 1049  | 291.5 | 86.64 | 22.24 | 5.473  |
| js-levenshtein            | 21261 | 10030 | 2939  | 824  | 223   | 57.62 | 14.77 | 3.717 | 0.934  |
| leven                     | 19688 | 6884  | 1606  | 436  | 117   | 30.34 | 7.604 | 1.929 | 0.478  |
| fast-levenshtein          | 18577 | 6112  | 1265  | 345  | 89.41 | 22.70 | 5.676 | 1.428 | 0.348  |
| levenshtein-edit-distance | 22968 | 7445  | 1493  | 409  | 109   | 28.07 | 7.095 | 1.789 | 0.445  |

### Relative Performance
This image shows the relative performance between `fastest-levenshtein` and `js-levenshtein` (the 2nd fastest). `fastest-levenshtein` is always a lot faster. y-axis shows "times faster".

![Benchmark](/images/relaperf.png)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
