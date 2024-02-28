---
id: 5a23c84252665b21eecc7e7b
title: Генератор/експонента
challengeType: 1
forumTopicId: 302275
dashedName: generatorexponential
---

# --description--

Генератор — це виконуваний запис (такий як функція або процедура), що містить код, який генерує послідовність значень таким чином, що кожен раз, коли ви викликаєте генератор, надається наступне значення в послідовності.

Генератори часто створюються на основі співпрограм або об’єктів, щоб внутрішній стан об’єкта оброблявся «природно».

Генератори часто використовуються в ситуаціях, коли послідовність потенційно нескінченна, та коли наступне значення послідовності можливо побудувати лише з мінімальним станом.

# --instructions--

Напишіть функцію, яка використовує генератори для створення квадратів та кубів. Створіть новий генератор, який фільтрує всі куби з генератора квадратів.

Функція має повернути \\( n^{-не} \\) значення відфільтрованого генератора.

Наприклад, якщо \\(n=7\\), то функція має повернути 81, оскільки послідовністю буде 4, 9, 16, 25, 36, 49, 81. Число 64 відфільтроване, оскільки є кубом.

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
