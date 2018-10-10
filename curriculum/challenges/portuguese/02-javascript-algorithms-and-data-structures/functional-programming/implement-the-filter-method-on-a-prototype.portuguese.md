---
id: 587d7b8f367417b2b2512b64
title: Implement the filter Method on a Prototype
challengeType: 1
videoUrl: ''
localeTitle: Implementar o método de filtro em um protótipo
---

## Description
<section id="description"> Isso nos ensinaria muito sobre o método de <code>filter</code> se tentarmos implementar uma versão dele que se comporta exatamente como <code>Array.prototype.filter()</code> . Pode usar um loop <code>for</code> ou <code>Array.prototype.forEach()</code> . Nota: Uma função pura pode alterar as variáveis ​​locais definidas dentro do seu escopo, embora seja preferível evitar isso também. </section>

## Instructions
<section id="instructions"> Escreva seu próprio <code>Array.prototype.myFilter()</code> , que deve se comportar exatamente como <code>Array.prototype.filter()</code> . Você pode usar um loop <code>for</code> ou o método <code>Array.prototype.forEach()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>new_s</code> deve ser igual a <code>[23, 65, 5]</code> .'
    testString: 'assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]), "<code>new_s</code> should equal <code>[23, 65, 5]</code>.");'
  - text: Seu código não deve usar o método de <code>filter</code> .
    testString: 'assert(!code.match(/\.filter/g), "Your code should not use the <code>filter</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line

  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
