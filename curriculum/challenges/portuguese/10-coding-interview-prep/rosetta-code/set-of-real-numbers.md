---
id: 5eb3e4b20aa93c437f9e9717
title: Conjunto de números reais
challengeType: 1
forumTopicId: 385322
dashedName: set-of-real-numbers
---

# --description--

Todos os números reais formam o conjunto incontável ℝ. Entre seus subconjuntos, são conjuntos relativamente simples os conjuntos convexos, cada um deles expressando um intervalo entre dois números reais *a* e *b*, onde *a* ≤ *b*. Na verdade, há quatro casos para o significado de "entre", dependendo dos limites abertos ou fechados:

<ul>
  <li>[<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> ≤ <i>x</i> e <i>x</i> ≤ <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> < <i>x</i> e <i>x</i> < <i>b</i> }</li>
  <li>[<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> ≤ <i>x</i> e <i>x</i> < <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> < <i>x</i> e <i>x</i> ≤ <i>b</i> }</li>
</ul>

Observe que, se *a* = *b*, dos quatro, apenas \[*a*, *a*] não seria vazio.

**Tarefa**

<ul>
  <li>Elabore uma forma de representar qualquer conjunto de números reais, para a definição de "qualquer" nas notas de implementação abaixo.</li>
  <li>Forneça métodos para estas operações com conjuntos comuns (<i>x</i> é um número real; <i>A</i> e <i>B</i> são conjuntos):</li>
  <ul>
    <li>
      <i>x</i> ∈ <i>A</i>: determine se <i>x</i> é um elemento de <i>A</i><br>
      exemplo: 1 está em [1, 2), enquanto 2, 3, ... não estão.
    </li>
    <li>
      <i>A</i> ∪ <i>B</i>: união de <i>A</i> e <i>B</i>, ou seja, {<i>x</i> | <i>x</i> ∈ <i>A</i> ou <i>x</i> ∈ <i>B</i>}<br>
      exemplo: [0, 2) ∪ (1, 3) = [0, 3); [0, 1) ∪ (2, 3] = assim, [0, 1) ∪ (2, 3]
    </li>
    <li>
      <i>A</i> ∩ <i>B</i>: intersecção de <i>A</i> e <i>B</i>, ou seja, {<i>x</i> | <i>x</i> ∈ <i>A</i> e <i>x</i> ∈ <i>B</i>}<br>
      exemplo: [0, 2) ∩ (1, 3) = (1, 2); [0, 1) ∩ (2, 3] = conjunto vazio
    </li>
    <li>
      <i>A</i> - <i>B</i>: diferença entre <i>A</i> e <i>B</i>, também escrito <i>A</i> \ <i>B</i>, ou seja, {<i>x</i> | <i>x</i> ∈ <i>A</i> e <i>x</i> ∉ <i>B</i>}<br>
      exemplo: [0, 2) − (1, 3) = [0, 1]
    </li>
  </ul>
</ul>

# --instructions--

Escreva uma função que receba 2 objetos, uma string e um array, como parâmetros. Os objetos representam o conjunto e têm atributos: `low`, `high` e `rangeType`.

O atributo `rangeType` pode ter os valores 0, 1, 2 e 3 para `CLOSED`, `BOTH_OPEN`, `LEFT_OPEN` e `RIGHT_OPEN` (fechado, aberto dos dois lados, aberto à esquerda e aberto à direita), respectivamente. A função deve implementar um conjunto usando esta informação.

A string representa a operação a ser realizada nos conjuntos. Ela pode ser: `"union"`, `"intersect"` e `"subtract"` (diferença).

Após executar a operação, a função deve verificar se os valores no array estão presentes no conjunto resultante e armazenar um valor booleano correspondente em um array. A função deve retornar esse array.

# --hints--

`realSet` deve ser uma função.

```js
assert(typeof realSet == 'function');
```

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` deve retornar um array.

```js
assert(
  Array.isArray(
    realSet(
      { low: 0, high: 1, rangeType: 2 },
      { low: 0, high: 2, rangeType: 3 },
      'union',
      [1, 2, 3]
    )
  )
);
```

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` deve retornar `[true, false, false]`.

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 1, rangeType: 2 },
    { low: 0, high: 2, rangeType: 3 },
    'union',
    [1, 2, 3]
  ),
  [true, false, false]
);
```

`realSet({"low":0, "high":2, "rangeType":3}, {"low":1, "high":2, "rangeType":2}, "intersect", [0, 1, 2])` deve retornar `[false, false, false]`.

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 2, rangeType: 3 },
    { low: 1, high: 2, rangeType: 2 },
    'intersect',
    [0, 1, 2]
  ),
  [false, false, false]
);
```

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":1}, "subtract", [0, 1, 2])` deve retornar `[true, true, true]`.

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 3, rangeType: 3 },
    { low: 0, high: 1, rangeType: 1 },
    'subtract',
    [0, 1, 2]
  ),
  [true, true, true]
);
```

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":0}, "subtract", [0, 1, 2])` deve retornar `[false, false, true]`.

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 3, rangeType: 3 },
    { low: 0, high: 1, rangeType: 0 },
    'subtract',
    [0, 1, 2]
  ),
  [false, false, true]
);
```

`realSet({"low":0, "high":33, "rangeType":1}, {"low":30, "high":31, "rangeType":0}, "intersect", [30, 31, 32])` deve retornar `[true, true, false]`.

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 33, rangeType: 1 },
    { low: 30, high: 31, rangeType: 0 },
    'intersect',
    [30, 31, 32]
  ),
  [true, true, false]
);
```

# --seed--

## --seed-contents--

```js
function realSet(set1, set2, operation, values) {

}
```

# --solutions--

```js
function realSet(set1, set2, operation, values) {
  const RangeType = {
    CLOSED: 0,
    BOTH_OPEN: 1,
    LEFT_OPEN: 2,
    RIGHT_OPEN: 3
  };

  function Predicate(test) {
    this.test = test;
    this.or = function(other) {
      return new Predicate(t => this.test(t) || other.test(t));
    };
    this.and = function(other) {
      return new Predicate(t => this.test(t) && other.test(t));
    };
    this.negate = function() {
      return new Predicate(t => !this.test(t));
    };
  }

  function RealSet(start, end, rangeType, predF) {
    this.low = start;
    this.high = end;

    if (predF) {
      this.predicate = new Predicate(predF);
    } else {
      this.predicate = new Predicate(d => {
        switch (rangeType) {
          case RangeType.CLOSED:
            return start <= d && d <= end;
          case RangeType.BOTH_OPEN:
            return start < d && d < end;
          case RangeType.LEFT_OPEN:
            return start < d && d <= end;
          case RangeType.RIGHT_OPEN:
            return start <= d && d < end;
        }
      });
    }

    this.contains = function(d) {
      return this.predicate.test(d);
    };

    this.union = function(other) {
      var low2 = Math.min(this.low, other.low);
      var high2 = Math.max(this.high, other.high);
      return new RealSet(low2, high2, null, d =>
        this.predicate.or(other.predicate).test(d)
      );
    };

    this.intersect = function(other) {
      var low2 = Math.min(this.low, other.low);
      var high2 = Math.max(this.high, other.high);
      return new RealSet(low2, high2, null, d =>
        this.predicate.and(other.predicate).test(d)
      );
    };

    this.subtract = function(other) {
      return new RealSet(this.low, this.high, null, d =>
        this.predicate.and(other.predicate.negate()).test(d)
      );
    };
  }
  set1 = new RealSet(set1.low, set1.high, set1.rangeType);
  set2 = new RealSet(set2.low, set2.high, set2.rangeType);
  var result = [];
  values.forEach(function(value) {
    result.push(set1[operation](set2).contains(value));
  });
  return result;
}
```
