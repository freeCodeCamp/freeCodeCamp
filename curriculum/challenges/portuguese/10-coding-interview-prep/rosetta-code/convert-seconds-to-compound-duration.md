---
id: 596fd036dc1ab896c5db98b1
title: Converter segundos para duração composta
challengeType: 1
forumTopicId: 302236
dashedName: convert-seconds-to-compound-duration
---

# --description--

Implementar uma função que:

<ul>
  <li>receba um inteiro positivo que represente uma duração em segundos como entrada (por exemplo, <code>100</code>) e</li>
  <li>retorna uma string que mostra a mesma duração decomposta em semanas, dias, horas, minutos e segundos detalhados abaixo (por exemplo, <code>1 min, 40 sec</code>).</li>
</ul>

Demonstre que a função passa pelos três casos de teste:

<div style='font-size:115%; font-weight: bold;'>Casos de teste</div>

| Número de entrada | Número de saída           |
| ----------------- | ------------------------- |
| 7259              | <code>2 hr, 59 sec</code> |
| 86400             | <code>1 d</code> |
| 6000000           | <code>9 wk, 6 d, 10 hr, 40 min</code> |

<div style="font-size:115%; font-weight: bold;">Detalhes</div>
<ul>
  <li>
    As cinco unidades a seguir devem ser usadas:

| Unidade   | Sufixo usado na saída | Conversão            |
| ------ | --------------------- | --------------------- |
| week   |!!crwdBlockTags_18_sgaTkcolBdwrc!!       | 1 semana = 7 dias       |
| day    |!!crwdBlockTags_19_sgaTkcolBdwrc!!        | 1 dia = 24 horas      |
| hour   |!!crwdBlockTags_20_sgaTkcolBdwrc!!       | 1 hora = 60 minutos   |
| minute |!!crwdBlockTags_21_sgaTkcolBdwrc!!      | 1 minuto = 60 segundos |
| second |!!crwdBlockTags_22_sgaTkcolBdwrc!!      | ---                   |

  </li>
  <li>
    No entanto, <strong>somente</strong> inclua quantidades com valores diferentes de zero na saída (por exemplo, retorne <code>1 d</code> em vez de <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>).
  </li>
  <li>
    Dê precedência a unidades maiores sobre unidades menores tanto quanto possível (por exemplo, retorne <code>2 min, 10 sec</code> e não <code>1 min, 70 sec</code> ou <code>130 sec</code>).
  </li>
  <li>
    Imite a formatação mostrada nos casos de teste (quantidades ordenadas da maior unidade para a menor e separadas por vírgula + espaço, alem de valor e unidade de cada quantidade separada por espaço).
  </li>
</ul>

# --hints--

`convertSeconds` deve ser uma função.

```js
assert(typeof convertSeconds === 'function');
```

`convertSeconds(7259)` deve retornar `2 hr, 59 sec`.

```js
assert.equal(convertSeconds(testCases[0]), results[0]);
```

`convertSeconds(86400)` deve retornar `1 d`.

```js
assert.equal(convertSeconds(testCases[1]), results[1]);
```

`convertSeconds(6000000)` deve retornar `9 wk, 6 d, 10 hr, 40 min`.

```js
assert.equal(convertSeconds(testCases[2]), results[2]);
```

# --seed--

## --after-user-code--

```js
const testCases = [7259, 86400, 6000000];
const results = ['2 hr, 59 sec', '1 d', '9 wk, 6 d, 10 hr, 40 min'];
```

## --seed-contents--

```js
function convertSeconds(sec) {

  return true;
}
```

# --solutions--

```js
function convertSeconds(sec) {
  const localNames = ['wk', 'd', 'hr', 'min', 'sec'];
  // compoundDuration :: [String] -> Int -> String
  const compoundDuration = (labels, intSeconds) =>
    weekParts(intSeconds)
    .map((v, i) => [v, labels[i]])
    .reduce((a, x) =>
      a.concat(x[0] ? [`${x[0]} ${x[1] || '?'}`] : []), []
    )
    .join(', ');

    // weekParts :: Int -> [Int]
  const weekParts = intSeconds => [0, 7, 24, 60, 60]
    .reduceRight((a, x) => {
      const r = a.rem;
      const mod = x !== 0 ? r % x : r;

      return {
        rem: (r - mod) / (x || 1),
        parts: [mod].concat(a.parts)
      };
    }, {
      rem: intSeconds,
      parts: []
    })
    .parts;

  return compoundDuration(localNames, sec);
}
```
