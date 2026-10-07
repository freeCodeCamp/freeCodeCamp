# @aws-crypto/sha256-browser

SHA256 wrapper for browsers that prefers `window.crypto.subtle` but will
fall back to a pure JS implementation in @aws-crypto/sha256-js
to provide a consistent interface for SHA256.

## Usage

- To hash "some data"
```
import {Sha256} from '@aws-crypto/sha256-browser'

const hash = new Sha256();
hash.update('some data');
const result = await hash.digest();

```

- To hmac "some data" with "a key"
```
import {Sha256} from '@aws-crypto/sha256-browser'

const hash = new Sha256('a key');
hash.update('some data');
const result = await hash.digest();

```

## Test

`npm test`
