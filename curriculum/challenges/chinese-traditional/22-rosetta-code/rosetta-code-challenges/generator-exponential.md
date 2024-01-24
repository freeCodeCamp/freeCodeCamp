---
id: 5a23c84252665b21eecc7e7b
title: 生成器/指數
challengeType: 1
forumTopicId: 302275
dashedName: generatorexponential
---

# --description--

A generator is an executable entity (like a function or procedure) that contains code that yields a sequence of values, one at a time, so that each time you call the generator, the next value in the sequence is provided.

生成器通常構建在協程或對象之上，以便“自然地”處理對象的內部狀態。

生成器通常用於序列可能無限的情況，並且可以僅用最小狀態構造序列的下一個值。

# --instructions--

編寫一個使用生成器生成平方和三次方的函數。 創建一個新的生成器，從平方成器中過濾所有三次方。

該函數應返回過濾生成器的 \\( n^{th} \\) 值。

例如對於 \\(n=7\\)，函數應該返回 81，因爲序列是 4、9、16、25、36、49、81。 這裏 64 被過濾掉了，因爲它是一個三次方。

# --hints--

`exponentialGenerator` 應該是一個函數。

```js
assert(typeof exponentialGenerator == 'function');
```

`exponentialGenerator()` 應該返回一個數字。

```js
assert(typeof exponentialGenerator(10) == 'number');
```

`exponentialGenerator(10)` 應該返回 `144`。

```js
assert.equal(exponentialGenerator(10), 144);
```

`exponentialGenerator(12)` 應該返回 `196`。

```js
assert.equal(exponentialGenerator(12), 196);
```

`exponentialGenerator(14)` 應該返回 `256`。

```js
assert.equal(exponentialGenerator(14), 256);
```

`exponentialGenerator(20)` 應該返回 `484`。

```js
assert.equal(exponentialGenerator(20), 484);
```

`exponentialGenerator(25)` 應該返回 `784`。

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
