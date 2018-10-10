---
id: 587d7b8f367417b2b2512b62
title: Implement map on a Prototype
challengeType: 1
videoUrl: ''
localeTitle: Implementar mapa em um protótipo
---

## Description
<section id="description"> Como você viu aplicando <code>Array.prototype.map()</code> , ou simplesmente <code>map()</code> anteriormente, o método <code>map</code> retorna um array do mesmo tamanho daquele em que foi chamado. Também não altera o array original, desde que a função de retorno de chamada não altere. Em outras palavras, o <code>map</code> é uma função pura e sua saída depende unicamente de suas entradas. Além disso, é necessária outra função como argumento. Isso nos ensinaria muito sobre o <code>map</code> para tentar implementar uma versão dele que se comporta exatamente como o <code>Array.prototype.map()</code> com um loop <code>for</code> ou <code>Array.prototype.forEach()</code> . Nota: Uma função pura pode alterar as variáveis ​​locais definidas dentro do seu escopo, embora seja preferível evitar isso também. </section>

## Instructions
<section id="instructions"> Escreva seu próprio <code>Array.prototype.myMap()</code> , que deve se comportar exatamente como <code>Array.prototype.map()</code> . Você pode usar um loop <code>for</code> ou o método <code>forEach</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>new_s</code> deve ser igual a <code>[46, 130, 196, 10]</code> .'
    testString: 'assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]), "<code>new_s</code> should equal <code>[46, 130, 196, 10]</code>.");'
  - text: Seu código não deve usar o método do <code>map</code> .
    testString: 'assert(!code.match(/\.map/g), "Your code should not use the <code>map</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line

  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
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
