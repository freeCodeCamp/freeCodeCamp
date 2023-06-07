---
id: 5a23c84252665b21eecc7e7b
title: Генератор/Експонента
challengeType: 1
forumTopicId: 302275
dashedName: generatorexponential
---

# --description--

Генератор - це виконуваний об'єкт (наприклад, функція або процедура), що містить код, що видає по одному послідовність значень, тому кожен раз, коли ви звертаєтеся до генератора, видається наступне значення в послідовності.

Генератори часто будуються поверх співпрограм або об'єктів, щоб внутрішній стан об'єкта оброблявся "природним чином".

Генератори часто використовуються в ситуаціях, коли послідовність потенційно нескінченна, і де можливо побудувати наступне значення послідовності з лише мінімальним станом.

# --instructions--

Запишіть функцію, яка використовує генератори для створення квадратів і кубів. Створіть новий генератор, який відфільтрує всі куби з генератора квадратів.

Функція має повернути \\( n^{th} \\) значення відфільтрованого генератора.

Наприклад, для \\(n=7\\) має повернути 81, оскільки послідовність буде 4, 16, 25, 36, 49, 81. Тут число 64 відфільтровано, оскільки це куб.

# --hints--

`exponentialGenerator` має бути функцією.

```js
assert(typeof exponentialGenerator == 'function');
```

`exponentialGenerator()` має повернути число.

```js
assert(typeof exponentialGenerator(10) == 'number');
```

`exponentialGenerator(10)` має повернути `144`.

```js
assert.equal(exponentialGenerator(10), 144);
```

`exponentialGenerator(12)` має повернути `196`.

```js
assert.equal(exponentialGenerator(12), 196);
```

`exponentialGenerator(14)` має повернути `256`.

```js
assert.equal(exponentialGenerator(14), 256);
```

`exponentialGenerator(20)` має повернути `484`.

```js
assert.equal(exponentialGenerator(20), 484);
```

`exponentialGenerator(25)` має повернути `784`.

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
