---
id: 5a23c84252665b21eecc7e7b
title: Generador/Exponencial
challengeType: 1
forumTopicId: 302275
dashedName: generatorexponential
---

# --description--

A generator is an executable entity (like a function or procedure) that contains code that yields a sequence of values, one at a time, so that each time you call the generator, the next value in the sequence is provided.

Los generadores a menudo se construyen sobre coroutinas u objetos de modo que el estado interno del objeto se maneja "naturalmente".

Los generadores se utilizan a menudo en situaciones en las que una secuencia es potencialmente infinita, y donde es posible construir el siguiente valor de la secuencia con sólo estado mínimo.

# --instructions--

Escribe una función que utilice generadores para generar cuadrados y cubos. Crear un nuevo generador que filtra todos los cubos del generador de cuadrados.

La función debe devolver el valor \\( n^{th} \\) del generador filtrado.

Por ejemplo, para \\(n=7\\), la función debe devolver 81 ya que la secuencia sería 4, 9, 16, 25, 36, 49, 81. Aquí se filtra 64, como un cubo.

# --hints--

`exponentialGenerator` debe ser una función.

```js
assert(typeof exponentialGenerator == 'function');
```

`exponentialGenerator()` debe devolver un número.

```js
assert(typeof exponentialGenerator(10) == 'number');
```

`exponentialGenerator(10)` debe devolver `144`.

```js
assert.equal(exponentialGenerator(10), 144);
```

`exponentialGenerator(12)` debe devolver `196`.

```js
assert.equal(exponentialGenerator(12), 196);
```

`exponentialGenerator(14)` debe devolver `256`.

```js
assert.equal(exponentialGenerator(14), 256);
```

`exponentialGenerator(20)` debe devolver `484`.

```js
assert.equal(exponentialGenerator(20), 484);
```

`exponentialGenerator(25)` debe devolver `784`.

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
