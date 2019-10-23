---
id: 587d7b89367417b2b2512b49
title: Use Destructuring Assignment to Assign Variables from Objects
challengeType: 1
videoUrl: ''
localeTitle: Use Destructuring Assignment para atribuir variáveis ​​de objetos
---

## Description
<section id="description"> Vimos anteriormente como o operador de propagação pode efetivamente distribuir ou descompactar o conteúdo do array. Podemos fazer algo semelhante com objetos também. <dfn>A atribuição de desestruturação</dfn> é uma sintaxe especial para atribuir com precisão os valores obtidos diretamente de um objeto para variáveis. Considere o seguinte código ES5: <blockquote> var voxel = {x: 3,6, y: 7,4, z: 6,54}; <br> var x = voxel.x; // x = 3,6 <br> var y = voxel.y; // y = 7,4 <br> var z = voxel.z; // z = 6,54 </blockquote> Aqui está a mesma declaração de atribuição com a sintaxe de desestruturação do ES6: <blockquote> const {x, y, z} = voxel; // x = 3,6, y = 7,4, z = 6,54 </blockquote> Se, em vez disso, você quiser armazenar os valores de <code>voxel.x</code> em <code>a</code> , <code>voxel.y</code> em <code>b</code> e <code>voxel.z</code> em <code>c</code> , também terá essa liberdade. <blockquote> Const {x: a, y: b, z: c} = voxel // a = 3,6, b = 7,4, c = 6,54 </blockquote> Você pode lê-lo como &quot;obter o campo <code>x</code> e copiar o valor em <code>a</code> &quot; e assim por diante. </section>

## Instructions
<section id="instructions"> Use a desestruturação para obter a temperatura média para amanhã a partir do objeto de entrada <code>AVG_TEMPERATURES</code> e atribua valor com a chave <code>tomorrow</code> para <code>tempOfTomorrow</code> na linha. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getTempOfTmrw(AVG_TEMPERATURES)</code> deve ser <code>79</code>
    testString: 'assert(getTempOfTmrw(AVG_TEMPERATURES) === 79, "<code>getTempOfTmrw(AVG_TEMPERATURES)</code> should be <code>79</code>");'
  - text: desestruturação com redesignação foi usada
    testString: 'getUserInput => assert(getUserInput("index").match(/\{\s*tomorrow\s*:\s*tempOfTomorrow\s*}\s*=\s*avgTemperatures/g),"destructuring with reassignment was used");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const tempOfTomorrow = undefined; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
