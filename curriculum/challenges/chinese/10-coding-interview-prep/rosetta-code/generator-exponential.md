---
id: 5a23c84252665b21eecc7e7b
title: Generator/Exponential
challengeType: 1
forumTopicId: 302275
dashedName: generatorexponential
---

# --description--

A generator is an executable entity (like a function or procedure) that contains code that yields a sequence of values, one at a time, so that each time you call the generator, the next value in the sequence is provided.

Generators are often built on top of coroutines or objects so that the internal state of the object is handled "naturally".

Generators are often used in situations where a sequence is potentially infinite, and where it is possible to construct the next value of the sequence with only minimal state.

# --instructions--

Write a function that uses generators to generate squares and cubes. Create a new generator that filters all cubes from the generator of squares.

The function should return the \\( n^{th} \\) value of the filtered generator.

For example for \\(n=7\\), the function should return 81 as the sequence would be 4, 9, 16, 25, 36, 49, 81. Here 64 is filtered out, as it is a cube.

# --hints--

`exponentialGenerator` should be a function.

```js
assert(typeof exponentialGenerator == 'function');
```

`exponentialGenerator()` should return a number.

```js
assert(typeof exponentialGenerator(10) == 'number');
```

`exponentialGenerator(10)` should return `144`.

```js
assert.equal(exponentialGenerator(10), 144);
```

`exponentialGenerator(12)` should return `196`.

```js
assert.equal(exponentialGenerator(12), 196);
```

`exponentialGenerator(14)` should return `256`.

```js
assert.equal(exponentialGenerator(14), 256);
```

`exponentialGenerator(20)` should return `484`.

```js
assert.equal(exponentialGenerator(20), 484);
```

`exponentialGenerator(25)` should return `784`.

```js
assert.equal(exponentialGenerator(25), 784);
```

# --seed--

## --seed-contents--

```js
function exponentialGenerator(n) {

}
```

# --solutions--

```js
function exponentialGenerator(n){
  function* PowersGenerator(m) {
    var n=0;
    while(1) {
        yield Math.pow(n, m);
        n += 1;
    }
  }

  function* FilteredGenerator(g, f){
    var value = g.next().value;
    var filter = f.next().value;
    while(1) {
        if( value < filter ) {
            yield value;
            value = g.next().value;
        } else if ( value > filter ) {
            filter = f.next().value;
        } else {
            value = g.next().value;
            filter = f.next().value;
        }
    }
  }

  var squares = PowersGenerator(2);
  var cubes = PowersGenerator(3);

  var filtered = FilteredGenerator(squares, cubes);

  var curr=0;
  for(var i=0;i<n;i++) curr=filtered.next();

  return curr.value;
}
```
