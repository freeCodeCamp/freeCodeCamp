---
id: 5a23c84252665b21eecc7e80
title: Gray code
challengeType: 1
forumTopicId: 302276
dashedName: gray-code
---

# --description--

Gray code is a form of binary encoding where transitions between consecutive numbers differ by only one bit.

This is a useful encoding for reducing hardware data hazards with values that change rapidly and/or connect to slower hardware as inputs.

It is also useful for generating inputs for Karnaugh maps in order from left to right or top to bottom.

# --instructions--

Create a function to encode a number to and decode a number from Gray code. The function should will have 2 parameters.

The first would be a boolean. The function should encode for true and decode for false. The second parameter would be the number to be encoded/decoded.

Display the normal binary representations, Gray code representations, and decoded Gray code values for all 5-bit binary numbers (0-31 inclusive, leading 0's not necessary).

There are many possible Gray codes. The following encodes what is called "binary reflected Gray code."

Encoding (MSB is bit 0, b is binary, g is Gray code):

<pre>if b[i-1] = 1
  g[i] = not b[i]
else
  g[i] = b[i]
</pre>

Or:

<pre>g = b xor (b logically right shifted 1 time)
</pre>

Decoding (MSB is bit 0, b is binary, g is Gray code):

<pre>b[0] = g[0]<br>
for other bits:
b[i] = g[i] xor b[i-1]
</pre>

# --hints--

`gray` should be a function.

```js
assert(typeof gray == 'function');
```

`gray(true,177)` should return a number.

```js
assert(typeof gray(true, 177) == 'number');
```

`gray(true,177)` should return `233`.

```js
assert.equal(gray(true, 177), 233);
```

`gray(true,425)` should return `381`.

```js
assert.equal(gray(true, 425), 381);
```

`gray(true,870)` should return `725`.

```js
assert.equal(gray(true, 870), 725);
```

`gray(false,233)` should return `177`.

```js
assert.equal(gray(false, 233), 177);
```

`gray(false,381)` should return `425`.

```js
assert.equal(gray(false, 381), 425);
```

`gray(false,725)` should return `870`.

```js
assert.equal(gray(false, 725), 870);
```

# --seed--

## --seed-contents--

```js
function gray(enc, number) {

}
```

# --solutions--

```js
function gray(enc, number){
  if(enc){
      return number ^ (number >> 1);
  }else{
      let n = number;

      while (number >>= 1) {
          n ^= number;
      }
      return n;
  }
}
```
