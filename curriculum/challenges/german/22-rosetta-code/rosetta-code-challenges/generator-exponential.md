---
id: 5a23c84252665b21eecc7e7b
title: Generator/Exponentiell
challengeType: 1
forumTopicId: 302275
dashedName: generatorexponential
---

# --description--

A generator is an executable entity (like a function or procedure) that contains code that yields a sequence of values, one at a time, so that each time you call the generator, the next value in the sequence is provided.

Generatoren werden oft auf Coroutines oder Objekten aufgebaut, so dass der innere Zustand des Objekts "natürlich" behandelt wird.

Generatoren werden oft in Situationen verwendet, in denen eine Sequenz potenziell unbegrenzt ist, und wo es möglich ist, den nächsten Wert der Sequenz mit nur minimalem Zustand zu erzeugen.

# --instructions--

Schreibe eine Funktion die Generatoren verwendet, um Quadratzahlen und Kubikzahlen zu erzeugen. Erstelle einen neuen Generator, der alle Kubikzahlen aus dem Generator von Quadratzahlen filtert.

Die Funktion sollte den \\( n^{th} \\) Wert des gefilterten Generators zurückgeben.

Zum Beispiel für \\(n=7\\) sollte die Funktion 81 zurückgeben, da die Sequenz 4, 9, 16, 25, 36, 49, 81 wäre. Hier wurde 64 herausgefiltert, da sie eine Kubikzahl ist.

# --hints--

`exponentialGenerator` sollte eine Funktion sein.

```js
assert(typeof exponentialGenerator == 'function');
```

`exponentialGenerator()` sollte eine Zahl zurückgeben.

```js
assert(typeof exponentialGenerator(10) == 'number');
```

`exponentialGenerator(10)` sollte `144` zurückgeben.

```js
assert.equal(exponentialGenerator(10), 144);
```

`exponentialGenerator(12)` sollte `196` zurückgeben.

```js
assert.equal(exponentialGenerator(12), 196);
```

`exponentialGenerator(14)` sollte `256` zurückgeben.

```js
assert.equal(exponentialGenerator(14), 256);
```

`exponentialGenerator(20)` sollte `484` zurückgeben.

```js
assert.equal(exponentialGenerator(20), 484);
```

`exponentialGenerator(25)` sollte `784` zurückgeben.

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
