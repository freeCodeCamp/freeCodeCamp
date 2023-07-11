---
id: 5eb3e4a21f462f409d656c73
title: Secuencia auto-referencial
challengeType: 1
forumTopicId: 385317
dashedName: self-referential-sequence
---

# --description--

Hay varias formas para generar una secuencia autoreferencial. Una muy común (la <a href="https://rosettacode.org/wiki/Look-and-say_sequence" target="_blank" rel="noopener noreferrer nofollow">Look-and-say sequence</a>) es iniciar con un entero positivo, luego generar el siguiente término concatenando grupos de dígitos similares adyacentes:

<pre>0, 10, 1110, 3110, 132110, 1113122110, 311311222110 ...</pre>

Los términos generados crecen en longitud geométricamente y nunca convergen.

Otra forma para generar una secuencia autoreferencial es resumir el término anterior.

Cuenta cuantos dígitos similares hay, luego concatena la sumatoria y dígitos para cada uno de los dígitos enumerados ordenados. Nota que los primeros cinco términos son los mismos que para la secuencia previa.

<pre>0, 10, 1110, 3110, 132110, 13123110, 23124110 ...</pre>

Ordena los dígitos más grandes a más pequeños. No incluya contadores de dígitos que no aparecen en el término anterior.

Dependiendo del valor sermilla, series generadas de esta forma siempre convergen a un valor estable o a un patrón cíclico corto. (Para nuestros propósitos, converger significa que un elemento coincide con un elemento previamente visto.) La secuencia mostrada, con un valor semilla de 0, converge a un valor estable de 1433223110 después de 11 iteraciones. El valor semilla que converge más rapidamente es 22. Se estabiliza después del primer elemento. (El siguiente elemento es 22, cual ya se ha visto antes.)

# --instructions--

Escribe una función que toma como parámetro el valor semilla, genera una secuencia autoreferencial hasta que converja, y la devuelve como un arreglo.

# --hints--

`selfReferential` debería ser una función.

```js
assert(typeof selfReferential === 'function');
```

`selfReferential(40)` debería devolver un arreglo.

```js
assert(Array.isArray(selfReferential(40)));
```

`selfReferential(40)` debería devolver `["40", "1410", "142110", "14123110", "1413124110", "2413125110", "151413224110", "152413225110", "251413324110", "152423224110", "152413423110"]`.

```js
assert.deepEqual(selfReferential(40), [
  '40',
  '1410',
  '142110',
  '14123110',
  '1413124110',
  '2413125110',
  '151413224110',
  '152413225110',
  '251413324110',
  '152423224110',
  '152413423110'
]);
```

`selfReferential(132110)` debería devolver `["132110", "13123110", "23124110", "1413223110", "1423224110", "2413323110", "1433223110"]`.

```js
assert.deepEqual(selfReferential(132110), [
  '132110',
  '13123110',
  '23124110',
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(132211)` debería devolver `["132211", "132231", "232221", "134211", "14131231", "14231241", "24132231", "14233221"]`.

```js
assert.deepEqual(selfReferential(132211), [
  '132211',
  '132231',
  '232221',
  '134211',
  '14131231',
  '14231241',
  '24132231',
  '14233221'
]);
```

`selfReferential(1413223110)` debería devolver `["1413223110", "1423224110", "2413323110", "1433223110"]`.

```js
assert.deepEqual(selfReferential(1413223110), [
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(251413126110)` debería devolver `["251413126110", "16151413225110", "16251413226110", "26151413325110", "16251423225110", "16251413424110", "16153413225110"]`.

```js
assert.deepEqual(selfReferential(251413126110), [
  '251413126110',
  '16151413225110',
  '16251413226110',
  '26151413325110',
  '16251423225110',
  '16251413424110',
  '16153413225110'
]);
```

# --seed--

## --seed-contents--

```js
function selfReferential(n) {

}
```

# --solutions--

```js
function selfReferential(n) {
  var descending,
    i,
    incr,
    j,
    max_i,
    max_len,
    max_seq,
    seq,
    sequence,
    indexOf =
      [].indexOf ||
      function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item) return i;
        }
        return -1;
      };

  sequence = function(n) {
    var c, cnt, cnts, d, digit, i, j, l, len, new_cnts, ref, s, seq;
    cnts = {};
    ref = n.toString();
    for (j = 0, len = ref.length; j < len; j++) {
      c = ref[j];
      d = parseInt(c);
      incr(cnts, d);
    }
    seq = [ref];
    while (true) {
      s = '';
      for (i = l = 9; l >= 0; i = --l) {
        if (cnts[i]) {
          s += '' + cnts[i] + i;
        }
      }
      if (indexOf.call(seq, s) >= 0) {
        break;
      }
      seq.push(s);
      new_cnts = {};
      for (digit in cnts) {
        cnt = cnts[digit];
        incr(new_cnts, cnt);
        incr(new_cnts, digit);
      }
      cnts = new_cnts;
    }
    return seq;
  };

  incr = function(h, k) {
    if (h[k] == null) {
      h[k] = 0;
    }
    return (h[k] += 1);
  };

  descending = function(n) {
    var tens;
    if (n < 10) {
      return true;
    }
    tens = n / 10;
    if (n % 10 > tens % 10) {
      return false;
    }
    return descending(tens);
  };

  return sequence(n);
}
```
