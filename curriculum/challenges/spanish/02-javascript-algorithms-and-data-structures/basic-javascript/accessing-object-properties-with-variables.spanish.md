---
id: 56533eb9ac21ba0edf2244c9
title: Accessing Object Properties with Variables
localeTitle: Accediendo a las propiedades del objeto con variables
challengeType: 1
guideUrl: 'https://spanish.freecodecamp.org/guide/certificates/accessing-objects-properties-with-variables'
---

## Description
<section id='description'> 
Otro uso de la notación de corchetes en los objetos es acceder a una propiedad que se almacena como el valor de una variable. Esto puede ser muy útil para iterar a través de las propiedades de un objeto o al acceder a una tabla de búsqueda. 
Aquí hay un ejemplo del uso de una variable para acceder a una propiedad: 
<blockquote>var dogs = {<br>&nbsp;&nbsp;Fido: "Mutt", 
 Hunter: "Doberman", 
 Snoopie: "Beagle"<br>};<br>var myDog = "Hunter";<br>var myBreed = dogs[myDog];<br>console.log(myBreed); // "Doberman"</blockquote> 
Otra forma en que puede usar este concepto es cuando el nombre de la propiedad se recopila dinámicamente durante la ejecución del programa, de la siguiente manera: 
<blockquote>var someObj = {<br>&nbsp;&nbsp;propName: "John"<br>};<br>function propPrefix(str) {<br>&nbsp;&nbsp;var s = "prop";<br>&nbsp;&nbsp;return s + str;<br>}<br>var someProp = propPrefix("Name"); // someProp now holds the value 'propName'<br>console.log(someObj[someProp]); // "John"</blockquote> 
Tenga en cuenta que <em>no</em> usamos comillas alrededor del nombre de la variable cuando la usamos para acceder a la propiedad porque estamos usando el <em>valor</em> de la variable, no el <em>nombre</em> . 
</section>

## Instructions
<section id='instructions'> 
Use la variable <code>playerNumber</code> para buscar el jugador <code>16</code> en <code>testObj</code> usando la notación de corchete. Luego asigna ese nombre a la variable del <code>player</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>playerNumber</code> debería ser un número
    testString: 'assert(typeof playerNumber === "number", "<code>playerNumber</code> should be a number");'
  - text: El <code>player</code> variable debe ser una cadena.
    testString: 'assert(typeof player === "string", "The variable <code>player</code> should be a string");'
  - text: El valor del <code>player</code> debe ser &quot;Montana&quot;.
    testString: 'assert(player === "Montana", "The value of <code>player</code> should be "Montana"");'
  - text: Debe usar la notación de corchetes para acceder a <code>testObj</code>
    testString: 'assert(/testObj\s*?\[.*?\]/.test(code),"You should use bracket notation to access <code>testObj</code>");'
  - text: No debes asignar el valor <code>Montana</code> al <code>player</code> variable directamente.
    testString: 'assert(!code.match(/player\s*=\s*"|\"\s*Montana\s*"|\"\s*;/gi),"You should not assign the value <code>Montana</code> to the variable <code>player</code> directly.");'
  - text: Debería usar la variable <code>playerNumber</code> en su notación de corchete
    testString: 'assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code),"You should be using the variable <code>playerNumber</code> in your bracket notation");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber;       // Change this Line
var player = testObj;   // Change this Line
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
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
```

</section>
