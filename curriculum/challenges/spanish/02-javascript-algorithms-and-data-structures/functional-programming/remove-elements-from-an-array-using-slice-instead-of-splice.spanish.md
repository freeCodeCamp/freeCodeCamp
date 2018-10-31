---
id: 9d7123c8c441eeafaeb5bdef
title: Remove Elements from an Array Using slice Instead of splice
challengeType: 1
videoUrl: ''
localeTitle: Eliminar elementos de una matriz usando una división en lugar de empalme
---

## Description
<section id="description"> Un patrón común al trabajar con matrices es cuando desea eliminar elementos y conservar el resto de la matriz. JavaScript ofrece el método de <code>splice</code> para esto, que toma argumentos para el índice de dónde comenzar a eliminar elementos, luego la cantidad de elementos que se eliminarán. Si no se proporciona el segundo argumento, el valor predeterminado es eliminar elementos hasta el final. Sin embargo, el método de <code>splice</code> muta la matriz original a la que se llama. Aquí hay un ejemplo: <blockquote> var cities = [&quot;Chicago&quot;, &quot;Delhi&quot;, &quot;Islamabad&quot;, &quot;London&quot;, &quot;Berlin&quot;]; <br> ciudades.splice (3, 1); // Devuelve &quot;Londres&quot; y lo elimina de la matriz de ciudades <br> // ciudades ahora es [&quot;Chicago&quot;, &quot;Delhi&quot;, &quot;Islamabad&quot;, &quot;Berlín&quot;] </blockquote> Como vimos en el último desafío, la <code>slice</code> método no muta la matriz original, pero devuelve una nueva que se pueden guardar en una variable. Recuerde que el método de <code>slice</code> toma dos argumentos para que los índices comiencen y terminen la división (el final no es inclusivo) y devuelve esos elementos en una nueva matriz. Uso de la <code>slice</code> método en lugar de <code>splice</code> ayuda a evitar los efectos secundarios de matriz-mutación. </section>

## Instructions
<section id="instructions"> Reescriba la función <code>nonMutatingSplice</code> utilizando <code>slice</code> lugar de <code>splice</code> . Debe limitar la matriz de <code>cities</code> proporcionada a una longitud de 3 y devolver una nueva matriz con solo los tres primeros elementos. No mute la matriz original proporcionada a la función. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe utilizar el método de <code>slice</code> .
    testString: 'assert(code.match(/\.slice/g), "Your code should use the <code>slice</code> method.");'
  - text: Su código no debe utilizar el método de <code>splice</code> .
    testString: 'assert(!code.match(/\.splice/g), "Your code should not use the <code>splice</code> method.");'
  - text: La matriz <code>inputCities</code> no debería cambiar.
    testString: 'assert(JSON.stringify(inputCities) === JSON.stringify(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]), "The <code>inputCities</code> array should not change.");'
  - text: '<code>nonMutatingSplice([&quot;Chicago&quot;, &quot;Delhi&quot;, &quot;Islamabad&quot;, &quot;London&quot;, &quot;Berlin&quot;])</code> debe devolver <code>[&quot;Chicago&quot;, &quot;Delhi&quot;, &quot;Islamabad&quot;]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])) === JSON.stringify(["Chicago", "Delhi", "Islamabad"]), "<code>nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])</code> should return <code>["Chicago", "Delhi", "Islamabad"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingSplice(cities) {
  // Add your code below this line
  return cities.splice(3);

  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
