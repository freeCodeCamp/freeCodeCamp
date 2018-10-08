---
id: 587d7b8a367417b2b2512b4f
title: Write Concise Object Literal Declarations Using Simple Fields
localeTitle: Escriba declaraciones literales de objetos concisos utilizando campos simples
challengeType: 1
---

## Description
<section id='description'> 
ES6 agrega un buen soporte para definir fácilmente literales de objetos. 
Considera el siguiente código: 
<blockquote>const getMousePosition = (x, y) => ({<br>&nbsp;&nbsp;x: x,<br>&nbsp;&nbsp;y: y<br>});</blockquote> 
<code>getMousePosition</code> es una función simple que devuelve un objeto que contiene dos campos. 
ES6 proporciona el azúcar sintáctico para eliminar la redundancia de tener que escribir <code>x: x</code> . Simplemente puede escribir <code>x</code> una vez, y se convertirá a <code>x: x</code> (o algo equivalente) debajo del capó. 
Aquí se reescribe la misma función de la anterior para usar esta nueva sintaxis: 
<blockquote>const getMousePosition = (x, y) => ({ x, y });</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Utilice campos simples con objetos literales para crear y devolver un objeto <code>Person</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;la salida es <code>{name: &quot;Zodiac Hasbro&quot;, age: 56, gender: &quot;male&quot;}</code> .&#39;
    testString: 'assert(() => {const res={name:"Zodiac Hasbro",age:56,gender:"male"}; const person=createPerson("Zodiac Hasbro", 56, "male"); return Object.keys(person).every(k => person[k] === res[k]);}, "the output is <code>{name: "Zodiac Hasbro", age: 56, gender: "male"}</code>.");'
  - text: &#39;No <code>:</code> fueron utilizados&#39;.
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
