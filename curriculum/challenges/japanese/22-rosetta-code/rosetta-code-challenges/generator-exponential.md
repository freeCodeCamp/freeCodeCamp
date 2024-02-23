---
id: 5a23c84252665b21eecc7e7b
title: ジェネレータ／指数関数
challengeType: 1
forumTopicId: 302275
dashedName: generatorexponential
---

# --description--

A generator is an executable entity (like a function or procedure) that contains code that yields a sequence of values, one at a time, so that each time you call the generator, the next value in the sequence is provided.

ジェネレータは、オブジェクトの内部状態が「自然に」処理されるように、しばしば、コルーチンやオブジェクトに追加して作成されます。

ジェネレータは、数列が無限になる可能性がある場合、そして最小限の状態さえあれば、数列の次の値を生成することが可能な場合によく使用されます。

# --instructions--

ジェネレータを使って平方数や立方数を生成する関数を記述してください。 平方数のジェネレータからすべての立方数をフィルタリングする新しいジェネレータを作成します。

この関数は、フィルタリングされたジェネレータの \\( n \\) 番目の値を返します。

例えば、\\(n=7\\) の場合、数列は 4, 9, 16, 25, 36, 49, 81 となるため、この関数は 81 を返すことになります。 ここで、64 は立方数であるため除外されます。

# --hints--

`exponentialGenerator` は関数とします。

```js
assert(typeof exponentialGenerator == 'function');
```

`exponentialGenerator()` は数値を返す必要があります。

```js
assert(typeof exponentialGenerator(10) == 'number');
```

`exponentialGenerator(10)` は `144` を返す必要があります。

```js
assert.equal(exponentialGenerator(10), 144);
```

`exponentialGenerator(12)` は `196` を返す必要があります。

```js
assert.equal(exponentialGenerator(12), 196);
```

`exponentialGenerator(14)` は `256` を返す必要があります。

```js
assert.equal(exponentialGenerator(14), 256);
```

`exponentialGenerator(20)` は `484` を返す必要があります。

```js
assert.equal(exponentialGenerator(20), 484);
```

`exponentialGenerator(25)` は `784` を返す必要があります。

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
