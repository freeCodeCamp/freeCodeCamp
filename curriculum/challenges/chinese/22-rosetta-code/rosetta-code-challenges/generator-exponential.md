---
id: 5a23c84252665b21eecc7e7b
title: 生成器/指数
challengeType: 1
forumTopicId: 302275
dashedName: generatorexponential
---

# --description--

A generator is an executable entity (like a function or procedure) that contains code that yields a sequence of values, one at a time, so that each time you call the generator, the next value in the sequence is provided.

生成器通常构建在协程或对象之上，以便“自然地”处理对象的内部状态。

生成器通常用于序列可能无限的情况，并且可以仅用最小状态构造序列的下一个值。

# --instructions--

编写一个使用生成器生成平方和三次方的函数。 创建一个新的生成器，从平方成器中过滤所有三次方。

该函数应返回过滤生成器的 \\( n^{th} \\) 值。

例如对于 \\(n=7\\)，函数应该返回 81，因为序列是 4、9、16、25、36、49、81。 这里 64 被过滤掉了，因为它是一个三次方。

# --hints--

`exponentialGenerator` 应该是一个函数。

```js
assert(typeof exponentialGenerator == 'function');
```

`exponentialGenerator()` 应该返回一个数字。

```js
assert(typeof exponentialGenerator(10) == 'number');
```

`exponentialGenerator(10)` 应该返回 `144`。

```js
assert.equal(exponentialGenerator(10), 144);
```

`exponentialGenerator(12)` 应该返回 `196`。

```js
assert.equal(exponentialGenerator(12), 196);
```

`exponentialGenerator(14)` 应该返回 `256`。

```js
assert.equal(exponentialGenerator(14), 256);
```

`exponentialGenerator(20)` 应该返回 `484`。

```js
assert.equal(exponentialGenerator(20), 484);
```

`exponentialGenerator(25)` 应该返回 `784`。

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
