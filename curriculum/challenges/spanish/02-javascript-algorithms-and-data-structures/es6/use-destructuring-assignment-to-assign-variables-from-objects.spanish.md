---
id: 587d7b89367417b2b2512b49
title: Use Destructuring Assignment to Assign Variables from Objects
localeTitle: Usar asignación de destrucción para asignar variables de objetos
challengeType: 1
---

## Description
<section id='description'> 
Ya vimos cómo el operador de propagación puede difundir o desempaquetar efectivamente el contenido de la matriz. 
Podemos hacer algo similar con los objetos también. <dfn>La asignación de destrucción</dfn> es una sintaxis especial para asignar cuidadosamente valores tomados directamente de un objeto a variables. 
Considera el siguiente código ES5: 
<blockquote>var voxel = {x: 3.6, y: 7.4, z: 6.54 };<br>var x = voxel.x; // x = 3.6<br>var y = voxel.y; // y = 7.4<br>var z = voxel.z; // z = 6.54</blockquote> 
Aquí está la misma declaración de asignación con la sintaxis de desestructuración ES6: 
<blockquote>const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54</blockquote> 
Si, por el contrario, desea almacenar los valores de <code>voxel.x</code> en <code>a</code> , <code>voxel.y</code> en <code>b</code> , y <code>voxel.z</code> en <code>c</code> , también tiene esa libertad. 
<blockquote>const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54</blockquote> 
Puede leerlo como &quot;obtener el campo <code>x</code> y copiar el valor en <code>a</code> &quot;, y así sucesivamente. 
</section>

## Instructions
<section id='instructions'> 
Use la desestructuración para obtener la temperatura promedio para mañana del objeto de entrada <code>AVG_TEMPERATURES</code> , y asigne un valor con la clave <code>tomorrow</code> a <code>tempOfTomorrow</code> en línea. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getTempOfTmrw(AVG_TEMPERATURES)</code> debe ser <code>79</code>
    testString: 'assert(getTempOfTmrw(AVG_TEMPERATURES) === 79, "<code>getTempOfTmrw(AVG_TEMPERATURES)</code> should be <code>79</code>");'
  - text: Se utilizó desestructuración con reasignación.
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
