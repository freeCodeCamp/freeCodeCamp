---
id: 587d7fb5367417b2b2512c01
title: Manage npm Dependencies By Understanding Semantic Versioning
localeTitle: Administre las dependencias de npm entendiendo el control de versiones semántico
challengeType: 2
---

## Description
<section id='description'> 
Las versiones de los paquetes npm en la sección de dependencias de su package.json siguen lo que se denomina Semantic Versioning (SemVer), un estándar de la industria para las versiones de software que apunta a facilitar la administración de las dependencias. Las bibliotecas, marcos u otras herramientas publicadas en npm deben usar SemVer para comunicar claramente qué tipo de cambios pueden esperar los proyectos que dependen del paquete si se actualizan. 
SemVer no tiene sentido en proyectos sin API públicas, por lo tanto, a menos que su proyecto sea similar a los ejemplos anteriores, use otro formato de versión. 
Entonces, ¿por qué necesitas entender a SemVer? 
Conocer SemVer puede ser útil cuando desarrolla software que utiliza dependencias externas (lo que casi siempre hace). Un día, su comprensión de estos números le evitará la introducción accidental de cambios de última hora en su proyecto sin comprender por qué las cosas que "funcionaron ayer" de repente no lo hacen. 
Así es como funciona la Versión semántica según el sitio web oficial: 
Dado un número de versión MAJOR.MINOR.PATCH, incremente la versión: 
MAJOR cuando realice cambios en la API incompatibles, 
versión MENOR cuando agregue la funcionalidad de una manera compatible con versiones anteriores y la versión 
PATCH cuando realice correcciones de errores compatibles con versiones anteriores. 
Esto significa que los PARCHES son correcciones de errores y los MENORES agregan nuevas funciones, pero ninguno de ellos rompe lo que funcionaba antes. Finalmente, MAJORs agrega cambios que no funcionarán con versiones anteriores. 
Ejemplo 
Un número de versión semántica: 1.3.8 
Instrucciones 
En la sección de dependencias de su package.json, cambie la versión de momento para que coincida con MAJOR versión 2, MINOR versión 10 y PATCH versión 2 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"dependencias" debe incluir "momento"'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: La versión "moment" debería ser "2.10.2" '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^[\^\~]?2\.10\.2/, ''Wrong version of "moment". It should be 2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
