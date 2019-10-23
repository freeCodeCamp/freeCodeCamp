---
id: 587d7dad367417b2b2512b76
title: Make Code More Reusable with the this Keyword
challengeType: 1
videoUrl: ''
localeTitle: Hacer el código más reutilizable con la palabra clave
---

## Description
<section id="description"> El último desafío introdujo un <code>method</code> para el objeto <code>duck</code> . <code>duck.name</code> la notación de puntos <code>duck.name</code> para acceder al valor de la propiedad <code>name</code> dentro de la declaración de retorno: <code>sayName: function() {return &quot;The name of this duck is &quot; + duck.name + &quot;.&quot;;}</code> Si bien esto es válido forma de acceder a la propiedad del objeto, hay un escollo aquí. Si el nombre de la variable cambia, también se deberá actualizar cualquier código que haga referencia al nombre original. En una definición de objeto breve, no es un problema, pero si un objeto tiene muchas referencias a sus propiedades, existe una mayor posibilidad de error. Una forma de evitar estos problemas es con <code>this</code> palabra clave: <blockquote> dejar pato = { <br> nombre: &quot;Aflac&quot;, <br> NumLegs: 2, <br> sayName: function () {return &quot;El nombre de este pato es&quot; + this.name + &quot;.&quot;;} <br> }; </blockquote> <code>this</code> es un tema profundo, y el ejemplo anterior es solo una forma de usarlo. En el contexto actual, <code>this</code> refiere al objeto con el que el método está asociado: <code>duck</code> . Si el nombre del objeto se cambia a <code>mallard</code> , no es necesario encontrar todas las referencias a <code>duck</code> en el código. Hace que el código sea reutilizable y más fácil de leer. </section>

## Instructions
<section id="instructions"> Modifique el método <code>dog.sayLegs</code> para eliminar cualquier referencia a <code>dog</code> . Utilice el ejemplo de <code>duck</code> para orientación. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog.sayLegs()</code> debe devolver la cadena dada.
    testString: 'assert(dog.sayLegs() === "This dog has 4 legs.", "<code>dog.sayLegs()</code> should return the given string.");'
  - text: Su código debe usar <code>this</code> palabra clave para acceder a la propiedad <code>numLegs</code> de <code>dog</code> .
    testString: 'assert(code.match(/this\.numLegs/g), "Your code should use the <code>this</code> keyword to access the <code>numLegs</code> property of <code>dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
