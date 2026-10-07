# ASN1.js

ASN.1 DER Encoder/Decoder and DSL.

## Example

Define model:

```javascript
var asn = require('asn1.js');

var Human = asn.define('Human', function() {
  this.seq().obj(
    this.key('firstName').octstr(),
    this.key('lastName').octstr(),
    this.key('age').int(),
    this.key('gender').enum({ 0: 'male', 1: 'female' }),
    this.key('bio').seqof(Bio)
  );
});

var Bio = asn.define('Bio', function() {
  this.seq().obj(
    this.key('time').gentime(),
    this.key('description').octstr()
  );
});
```

Encode data:

```javascript
var output = Human.encode({
  firstName: 'Thomas',
  lastName: 'Anderson',
  age: 28,
  gender: 'male',
  bio: [
    {
      time: +new Date('31 March 1999'),
      description: 'freedom of mind'
    }
  ]
}, 'der');
```

Decode data:

```javascript
var human = Human.decode(output, 'der');
console.log(human);
/*
{ firstName: <Buffer 54 68 6f 6d 61 73>,
  lastName: <Buffer 41 6e 64 65 72 73 6f 6e>,
  age: 28,
  gender: 'male',
  bio:
   [ { time: 922820400000,
       description: <Buffer 66 72 65 65 64 6f 6d 20 6f 66 20 6d 69 6e 64> } ] }
*/
```

### Partial decode

Its possible to parse data without stopping on first error. In order to do it,
you should call:

```javascript
var human = Human.decode(output, 'der', { partial: true });
console.log(human);
/*
{ result: { ... },
  errors: [ ... ] }
*/
```

#### LICENSE

This software is licensed under the MIT License.

Copyright Fedor Indutny, 2013.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.
