---
id: 5a23c84252665b21eecc7e7b
title: ジェネレータ／指数関数
challengeType: 1
forumTopicId: 302275
dashedName: generatorexponential
---

# --description--

ジェネレータは、一連の値を1度に1つずつ生成するコードを含む実行可能なエンティティ (関数やプロシージャのような) であり、ジェネレータを呼び出すたびに、数列内の次の値を返します。

ジェネレータは、オブジェクトの内部状態が「自然に」処理されるように、しばしば、コルーチンやオブジェクトに追加して作成されます。

ジェネレータは、数列が無限になる可能性がある場合、 そして最小限の状態さえあれば、数列の次の値を生成することが可能な場合によく使用されます。

# --instructions--

ジェネレータを使って正方形や立方体を生成する関数を記述してください。 正方形のジェネレータからすべての立方体をフィルタリングする新しいジェネレータを作成します。

この関数は、フィルタリングされたジェネレータの \\( n^{th} \\) 値を返します。

例えば、\\(n=7\\) の場合、数列は4,9,16,25,36,49,81となるため、この関数は81を返すことになります。 ここで、64は立方体であるため除外されます。

# --hints--

`exponentialGenerator` は関数とします。

```js
assert(typeof exponentialGenerator == 'function');
```

`exponentialGenerator()` は数値を返す必要があります。

```js
assert(typeof exponentialGenerator(10) == 'number');
```

`exponentialGenerator(10)` は`144`を返す必要があります。

```js
assert.equal(exponentialGenerator(10), 144);
```

`exponentialGenerator(12)` は`196`を返す必要があります。

```js
assert.equal(exponentialGenerator(12), 196);
```

`exponentialGenerator(14)` は`256`を返す必要があります。

```js
assert.equal(exponentialGenerator(14), 256);
```

`exponentialGenerator(20)` は`484`を返す必要があります。

```js
assert.equal(exponentialGenerator(20), 484);
```

`exponentialGenerator(25)` は`784`を返す必要があります。

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
