# Constants

date-fns provides with a number of useful constants.

## Usage

The constants could be imported from `date-fns/constants` or directly
from `date-fns`:

```js
import { maxTime } from 'date-fns/constants'
import { minTime } from 'date-fns'

function isAllowedTime(time) {
  return time <= maxTime && time >= minTime
}
```

## Constants

### `maxTime`

Maximum allowed time:

```js
import { maxTime } from 'date-fns'

const isValid = 8640000000000001 <= maxTime
//=> false

new Date(8640000000000001)
//=> Invalid Date
```

### `minTime`

Minimum allowed time:

```js
import { minTime } from 'date-fns'

const isValid = -8640000000000001 >= minTime
//=> false

new Date(-8640000000000001)
//=> Invalid Date
```
