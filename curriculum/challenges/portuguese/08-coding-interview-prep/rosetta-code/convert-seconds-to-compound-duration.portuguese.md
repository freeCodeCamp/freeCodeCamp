---
title: Convert seconds to compound duration
id: 596fd036dc1ab896c5db98b1
challengeType: 5
videoUrl: ''
localeTitle: Converta segundos para duração composta
---

## Description
<section id="description"> Tarefa: <p> Implemente uma função que: </p> recebe um inteiro positivo representando uma duração em segundos como entrada (por exemplo, <code>100</code> ) e retorna uma string que mostra a mesma duração decomposta em semanas, dias, horas, minutos e segundos, conforme detalhado abaixo (por exemplo, <code>1 min, 40 sec</code>). <p> Demonstre que ele passa nos três casos de teste a seguir: </p><p style="font-size:115%; margin:1em 0 0 0"> Casos de teste </p><table><tbody><tr><th> número de entrada </th><th> número de saída </th></tr><tr><td> 7259 </td><td> <code>2 hr, 59 sec</code> </td> </tr><tr><td> 86400 </td><td> <code>1 d</code> </td> </tr><tr><td> 6000000 </td><td> <code>9 wk, 6 d, 10 hr, 40 min</code> </td> </tr></tbody></table><p style="font-size:115%; margin:1em 0 0 0"> Detalhes </p> As seguintes cinco unidades devem ser usadas: <table><tbody><tr><th> unidade </th><th> sufixo usado na saída </th><th> conversão </th></tr><tr><td> semana </td><td> <code>wk</code> </td> <td> 1 semana = 7 dias </td></tr><tr><td> dia </td><td> <code>d</code> </td> <td> 1 dia = 24 horas </td></tr><tr><td> hora </td><td> <code>hr</code> </td> <td> 1 hora = 60 minutos </td></tr><tr><td> minuto </td><td> <code>min</code> </td> <td> 1 minuto = 60 segundos </td></tr><tr><td> segundo </td><td> <code>sec</code> </td> <td></td></tr></tbody></table> No entanto, inclua apenas quantidades com valores diferentes de zero na saída (por exemplo, retorne <code>1 d</code> e não <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>). Dê precedência às unidades maiores em relação às menores possível (por exemplo, retornar <code>2 min, 10 sec</code> e não <code>1 min, 70 sec</code> ou <code>130 sec</code> ) Imite a formatação mostrada nos casos de teste (quantidades classificadas da maior unidade para a menor e separadas por vírgula + espaço; valor e unidade de cada quantidade separada por espaço). <p></p><hr style="margin:1em 0;"><p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertSeconds</code> é uma função.
    testString: 'assert(typeof convertSeconds === "function", "<code>convertSeconds</code> is a function.");'
  - text: '<code>convertSeconds(7259)</code> deve retornar <code>2 hr, 59 sec</code> .'
    testString: 'assert.equal(convertSeconds(testCases[0]), results[0], "<code>convertSeconds(7259)</code> should return <code>2 hr, 59 sec</code>.");'
  - text: <code>convertSeconds(86400)</code> deve retornar <code>1 d</code> .
    testString: 'assert.equal(convertSeconds(testCases[1]), results[1], "<code>convertSeconds(86400)</code> should return <code>1 d</code>.");'
  - text: '<code>convertSeconds(6000000)</code> deve retornar <code>9 wk, 6 d, 10 hr, 40 min</code> .'
    testString: 'assert.equal(convertSeconds(testCases[2]), results[2], "<code>convertSeconds(6000000)</code> should return <code>9 wk, 6 d, 10 hr, 40 min</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertSeconds (sec) {
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
