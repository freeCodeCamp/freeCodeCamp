---
id: 5a23c84252665b21eecc7e7b
title: Generatore/Esponenziale
challengeType: 1
forumTopicId: 302275
dashedName: generatorexponential
---

# --description--

A generator is an executable entity (like a function or procedure) that contains code that yields a sequence of values, one at a time, so that each time you call the generator, the next value in the sequence is provided.

I generatori sono spesso costruiti su co-routine o oggetti in modo che lo stato interno dell'oggetto sia gestito "naturalmente".

I generatori sono spesso utilizzati in situazioni in cui una sequenza è potenzialmente infinita, e dove è possibile costruire il valore successivo della sequenza con solo uno stato minimo.

# --instructions--

Scrivi una funzione che utilizza i generatori per generare quadrati e cubi. Crea un nuovo generatore che filtra tutti i cubi dal generatore di quadrati.

La funzione deve restituire il valore \\( n^{simo} \\) del generatore filtrato.

Per esempio per \\(n=7\\), la funzione dovrebbe restituire 81 perché la sequenza sarebbe 4, 9, 16, 25, 36, 49, 81. Qui 64 è filtrato, dato che è un cubo.

# --hints--

`exponentialGenerator` dovrebbe essere una funzione.

```js
assert(typeof exponentialGenerator == 'function');
```

`exponentialGenerator()` dovrebbe restituire un numero.

```js
assert(typeof exponentialGenerator(10) == 'number');
```

`exponentialGenerator(10)` dovrebbe restituire `144`.

```js
assert.equal(exponentialGenerator(10), 144);
```

`exponentialGenerator(12)` dovrebbe restituire `196`.

```js
assert.equal(exponentialGenerator(12), 196);
```

`exponentialGenerator(14)` dovrebbe restituire `256`.

```js
assert.equal(exponentialGenerator(14), 256);
```

`exponentialGenerator(20)` dovrebbe restituire `484`.

```js
assert.equal(exponentialGenerator(20), 484);
```

`exponentialGenerator(25)` dovrebbe restituire `784`.

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
