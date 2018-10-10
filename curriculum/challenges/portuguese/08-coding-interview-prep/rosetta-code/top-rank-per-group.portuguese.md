---
title: Top rank per group
id: 595011cba5a81735713873bd
challengeType: 5
videoUrl: ''
localeTitle: Melhor classificação por grupo
---

## Description
<section id="description"> Tarefa: <p> Encontre os primeiros N dados classificados em cada grupo, onde N é fornecido como um parâmetro. O nome da classificação e o grupo também são fornecidos como parâmetro. </p> Dados os seguintes dados: <pre> [
  {nome: &#39;Tyler Bennett&#39;, id: &#39;E10297&#39;, salário: 32000, departamento: &#39;D101&#39;},
  {nome: &#39;John Rappl&#39;, id: &#39;E21437&#39;, salário: 47000, departamento: &#39;D050&#39;},
  {nome: &#39;George Woltman&#39;, id: &#39;E00127&#39;, salário: 53500, departamento: &#39;D101&#39;},
  {nome: &#39;Adam Smith&#39;, id: &#39;E63535&#39;, salário: 18000, departamento: &#39;D202&#39;},
  {name: &#39;Claire Buckman&#39;, id: &#39;E39876&#39;, salário: 27800, departamento: &#39;D202&#39;},
  {nome: &#39;David McClellan&#39;, id: &#39;E04242&#39;, salário: 41500, departamento: &#39;D101&#39;},
  {nome: &#39;Rich Holcomb&#39;, id: &#39;E01234&#39;, salário: 49500, departamento: &#39;D202&#39;},
  {nome: &#39;Nathan Adams&#39;, id: &#39;E41298&#39;, salário: 21900, departamento: &#39;D050&#39;},
  {nome: &#39;Richard Potter&#39;, id: &#39;E43128&#39;, salário: 15900, departamento: &#39;D101&#39;},
  {nome: &#39;David Motsinger&#39;, id: &#39;E27002&#39;, salário: 19250, departamento: &#39;D202&#39;},
  {nome: &#39;Tim Sampair&#39;, id: &#39;E03033&#39;, salário: 27000, departamento: &#39;D101&#39;},
  {nome: &#39;Kim Arlich&#39;, id: &#39;E10001&#39;, salário: 57000, departamento: &#39;D190&#39;},
  {nome: &#39;Timothy Grove&#39;, id: &#39;E16398&#39;, salário: 29900, departamento: &#39;D190&#39;}
];
</pre> pode-se classificar os 10 funcionários em cada departamento chamando <code>topRankPerGroup(10, data, &#39;dept&#39;, &#39;salary&#39;)</code> Dados os seguintes dados: <pre> [
  {name: &#39;Friday 13th&#39;, gênero: &#39;horror&#39;, avaliação: 9.9},
  {nome: &quot;Nightmare on Elm&#39;s Street&quot;, gênero: &#39;horror&#39;, avaliação: 5.7},
  {name: &#39;Titanic&#39;, gênero: &#39;drama&#39;, avaliação: 7.3},
  {name: &#39;Maze Runner&#39;, gênero: &#39;scifi&#39;, avaliação: 7.1}
  {name: &#39;Blade runner&#39;, gênero: &#39;scifi&#39;, avaliação: 8.9}
];
</pre> pode-se classificar o filme mais bem classificado em cada gênero chamando <code>topRankPerGroup(1, data, &#39;genre&#39;, &#39;rating&#39;)</code> </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>topRankPerGroup</code> é uma função.
    testString: 'assert(typeof topRankPerGroup === "function", "<code>topRankPerGroup</code> is a function.");'
  - text: <code>topRankPerGroup</code> retorna indefinido em valores n negativos.
    testString: 'assert(typeof topRankPerGroup(-1, []) === "undefined", "<code>topRankPerGroup</code> returns undefined on negative n values.");'
  - text: Primeiro departamento deve ser D050
    testString: 'assert.equal(res1[0][0].dept, "D050", "First department must be D050");'
  - text: Primeiro departamento deve ser D050
    testString: 'assert.equal(res1[0][1].salary, 21900, "First department must be D050");'
  - text: O último departamento deve ser D202
    testString: 'assert.equal(res1[3][3].dept, "D202", "The last department must be D202");'
  - text: '<code>topRankPerGroup(1, ...)</code> deve retornar apenas o melhor resultado de classificação por grupo.'
    testString: 'assert.equal(res2[2].length, 1, "<code>topRankPerGroup(1, ...)</code> must return only top ranking result per group.");'
  - text: '<code>topRankPerGroup(1, ...)</code> deve retornar apenas o melhor resultado de classificação por grupo.'
    testString: 'assert.equal(res3[2][1].name, "Maze Runner", "<code>topRankPerGroup(1, ...)</code> must return only top ranking result per group.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function topRankPerGroup(n, data, groupName, rankName) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
