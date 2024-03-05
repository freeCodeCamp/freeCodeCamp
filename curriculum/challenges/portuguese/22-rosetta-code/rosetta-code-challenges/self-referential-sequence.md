---
id: 5eb3e4a21f462f409d656c73
title: Sequência autorreferencial
challengeType: 1
forumTopicId: 385317
dashedName: self-referential-sequence
---

# --description--

Existem várias maneiras de gerar uma sequência autorreferencial. Uma maneira muito comum (a <a href="https://rosettacode.org/wiki/Look-and-say_sequence" target="_blank" rel="noopener noreferrer nofollow">Sequência de olhar e dizer</a>) é começar com um número inteiro positivo e gerar o próximo termo concatenando grupos enumerados de dígitos adjacentes semelhantes:

<pre>0, 10, 1110, 3110, 132110, 1113122110, 311311222110 ...</pre>

Os termos gerados crescem em extensão geometricamente e nunca convergem.

Outra maneira de gerar uma sequência autorreferencial é resumir o termo anterior.

Conte quantos algarismos semelhantes existem de cada um dos algarismos, então concatene a soma e o algarismo de cada um dos dígitos enumerados ordenados. Observe que os primeiros cinco termos são os mesmos que para a sequência anterior.

<pre>0, 10, 1110, 3110, 132110, 13123110, 23124110 ...</pre>

Ordene os dígitos dos maiores para os menores. Não inclua contagens de dígitos que não apareçam no termo anterior.

Dependendo do valor da seed, a série gerada dessa forma sempre levará para um valor estável ou para um padrão cíclico curto. (Para nossos fins, essa conversão significa que um elemento corresponde a um elemento visto anteriormente.) A sequência mostrada, com um valor de seed de 0, converte para um valor estável de 1433223110 após 11 iterações. O valor de seed que tem a conversão mais rápida é 22. Ela torna a sequência estável após o primeiro elemento. (O próximo elemento é 22, que já foi visto antes)

# --instructions--

Escreva uma função que receba o valor de seed como parâmetro, gere uma sequência autorreferencial até convergir, e a retorne como um array.

# --hints--

`selfReferential` deve ser uma função.

```js
assert(typeof selfReferential === 'function');
```

`selfReferential(40)` deve retornar um array.

```js
assert(Array.isArray(selfReferential(40)));
```

`selfReferential(40)` deve retornar `["40", "1410", "142110", "14123110", "1413124110", "2413125110", "151413224110", "152413225110", "251413324110", "152423224110", "152413423110"]`.

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

`selfReferential(132110)` deve retornar `["132110", "13123110", "23124110", "1413223110", "1423224110", "2413323110", "1433223110"]`.

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

`selfReferential(132211)` deve retornar `["132211", "132231", "232221", "134211", "14131231", "14231241", "24132231", "14233221"]`.

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

`selfReferential(1413223110)` deve retornar `["1413223110", "1423224110", "2413323110", "1433223110"]`.

```js
assert.deepEqual(selfReferential(1413223110), [
  '1413223110',
  '1423224110',
  '2413323110',
  '1433223110'
]);
```

`selfReferential(251413126110)` deve retornar `["251413126110", "16151413225110", "16251413226110", "26151413325110", "16251423225110", "16251413424110", "16153413225110"]`.

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
