---
id: 587d7dac367417b2b2512b73
title: Create a Basic JavaScript Object
localeTitle: Crear un objeto JavaScript básico
challengeType: 1
---

## Description
<section id='description'> 
Piense en cosas que la gente ve todos los días, como automóviles, tiendas y pájaros. Estos son todos los <code>objects</code> : cosas tangibles que las personas pueden observar e interactuar. 
¿Cuáles son algunas de las cualidades de estos <code>objects</code> ? Un coche tiene ruedas. Las tiendas venden artículos. Las aves tienen alas. 
Estas cualidades, o <code>properties</code> , definen lo que constituye un <code>object</code> . Tenga en cuenta que los <code>objects</code> similares comparten las mismas <code>properties</code> , pero pueden tener valores diferentes para esas <code>properties</code> . Por ejemplo, todos los autos tienen ruedas, pero no todos los autos tienen la misma cantidad de ruedas. 
<code>Objects</code> en JavaScript se utilizan para modelar objetos del mundo real, dándoles <code>properties</code> y comportamiento al igual que sus contrapartes del mundo real. Aquí hay un ejemplo que usa estos conceptos para crear un <code>object</code> <code>duck</code> : 
<blockquote>let duck = {<br>&nbsp;&nbsp;name: "Aflac",<br>&nbsp;&nbsp;numLegs: 2<br>};</blockquote> 
Este <code>object</code> <code>duck</code> tiene dos pares de propiedades / valores: un <code>name</code> de &quot;Aflac&quot; y un <code>numLegs</code> de 2. 
</section>

## Instructions
<section id='instructions'> 
Crea un <code>object</code> <code>dog</code> con el <code>name</code> y <code>numLegs</code> propiedades <code>numLegs</code> , y <code>numLegs</code> en una cadena y un número, respectivamente. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog</code> debe ser un <code>object</code> .
    testString: 'assert(typeof(dog) === "object", "<code>dog</code> should be an <code>object</code>.");'
  - text: <code>dog</code> debería tener una propiedad de <code>name</code> establecida en una <code>string</code> .
    testString: 'assert(typeof(dog.name) === "string", "<code>dog</code> should have a <code>name</code> property set to a <code>string</code>.");'
  - text: <code>dog</code> debería tener una propiedad <code>numLegs</code> establecida en un <code>number</code> .
    testString: 'assert(typeof(dog.numLegs) === "number", "<code>dog</code> should have a <code>numLegs</code> property set to a <code>number</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {

};
```

</div>



</section>

## Solution
<section id='solution'>


```js
let dog = {
  name: ",
  numLegs: 4
};
```

</section>
