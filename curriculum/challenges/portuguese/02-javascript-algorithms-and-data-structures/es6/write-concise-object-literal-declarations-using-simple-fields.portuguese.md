---
id: 587d7b8a367417b2b2512b4f
title: Write Concise Object Literal Declarations Using Simple Fields
challengeType: 1
videoUrl: ''
localeTitle: Escrever declarações concisas de objetos literais usando campos simples
---

## Description
<section id="description"> O ES6 adiciona algum suporte legal para definir facilmente os literais de objeto. Considere o seguinte código: <blockquote> const getMousePosition = (x, y) =&gt; ({ <br> x: x, <br> y: y <br> }); </blockquote> <code>getMousePosition</code> é uma função simples que retorna um objeto contendo dois campos. ES6 fornece o açúcar sintático para eliminar a redundância de ter que escrever <code>x: x</code> . Você pode simplesmente escrever <code>x</code> uma vez, e ele será convertido em <code>x: x</code> (ou algo equivalente) sob o capô. Aqui está a mesma função acima reescrita para usar esta nova sintaxe: <blockquote> const getMousePosition = (x, y) =&gt; ({x, y}); </blockquote></section>

## Instructions
<section id="instructions"> Use campos simples com literais de objeto para criar e retornar um objeto <code>Person</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'a saída é <code>{name: &quot;Zodiac Hasbro&quot;, age: 56, gender: &quot;male&quot;}</code> .'
    testString: 'assert(() => {const res={name:"Zodiac Hasbro",age:56,gender:"male"}; const person=createPerson("Zodiac Hasbro", 56, "male"); return Object.keys(person).every(k => person[k] === res[k]);}, "the output is <code>{name: "Zodiac Hasbro", age: 56, gender: "male"}</code>.");'
  - text: 'Não <code>:</code> foram usados.'
    testString: 'getUserInput => assert(!getUserInput("index").match(/:/g), "No <code>:</code> were used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
