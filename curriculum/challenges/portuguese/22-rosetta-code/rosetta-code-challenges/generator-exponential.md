---
id: 5a23c84252665b21eecc7e7b
title: Gerador/exponencial
challengeType: 1
forumTopicId: 302275
dashedName: generatorexponential
---

# --description--

Um gerador é uma entidade executável (como uma função ou procedimento) que contém um código que retorna uma sequência de valores, um de cada vez, para que a cada vez que você chame o gerador, o próximo valor na sequência seja fornecido.

Os geradores muitas vezes são criados a partir de co-rotinas ou objetos para que o estado interno do objeto seja tratado "naturalmente".

Os geradores são, frequentemente, usados em situações onde uma sequência é potencialmente infinita, e onde é possível construir o valor seguinte da sequência apenas com o estado mínimo.

# --instructions--

Escreva uma função que use geradores para gerar quadrados e cubos. Crie um novo gerador que filtre todos os cubos do gerador de quadrados.

A função deve retornar o enésimo \\( n^{th} \\) valor do gerador filtrado.

Por exemplo, para \\(n=7\\), a função deve retornar 81, já que a sequência seria 4, 9, 16, 25, 36, 49, 81. Aqui, 64 é removido da sequência por ser um cubo.

# --hints--

`exponentialGenerator` deve ser uma função.

```js
assert(typeof exponentialGenerator == 'function');
```

`exponentialGenerator()` deve retornar um número.

```js
assert(typeof exponentialGenerator(10) == 'number');
```

`exponentialGenerator(10)` deve retornar `144`.

```js
assert.equal(exponentialGenerator(10), 144);
```

`exponentialGenerator(12)` deve retornar `196`.

```js
assert.equal(exponentialGenerator(12), 196);
```

`exponentialGenerator(14)` deve retornar `256`.

```js
assert.equal(exponentialGenerator(14), 256);
```

`exponentialGenerator(20)` deve retornar `484`.

```js
assert.equal(exponentialGenerator(20), 484);
```

`exponentialGenerator(25)` deve retornar `784`.

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
