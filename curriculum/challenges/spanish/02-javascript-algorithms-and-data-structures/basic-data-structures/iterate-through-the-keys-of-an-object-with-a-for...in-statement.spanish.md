---
id: 587d7b7d367417b2b2512b1d
title: 'Iterate Through the Keys of an Object with a for...in Statement'
challengeType: 1
videoUrl: ''
localeTitle: Iterar a través de las claves de un objeto con for ... in
---

## Description
<section id="description"> Es posible que en alguna ocasión deba recorrer todas las claves dentro de un objeto. Esto requiere una sintaxis específica en JavaScript llamada <dfn>for ... in</dfn> statement. Para el objeto de nuestros <code>users</code> , esto podría verse como: <blockquote> for (let user in users) { <br> console.log (usuario); <br> }; <br><br> // logs: <br> Alan <br> Jeff <br> Sarah <br> Ryan </blockquote> En esta declaración, definimos una variable <code>user</code> y, como puede ver, esta variable se restableció durante cada iteración de cada una de las claves del objeto a medida que la declaración se desplazaba a través del objeto, lo que daba como resultado que el nombre de cada usuario se imprimiera en la consola. <strong>NOTA:</strong> <br> Los objetos no mantienen un orden para las claves almacenadas como lo hacen las matrices; por lo tanto, una posición de las claves en un objeto, o el orden relativo en el que aparece, es irrelevante cuando se hace referencia o se accede a esa clave. </section>

## Instructions
<section id="instructions"> Hemos definido una función, <code>countOnline</code> ; use una instrucción <dfn>for ... in</dfn> dentro de esta función para recorrer los usuarios en el objeto <code>users</code> y devolver el número de usuarios cuya propiedad <code>online</code> está definida como <code>true</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El objeto <code>users</code> contiene a los usuarios <code>Jeff</code> y <code>Ryan</code> con <code>online</code> conjunto en <code>online</code> a <code>true</code> y los usuarios <code>Alan</code> y <code>Sarah</code> con <code>online</code> conjunto en <code>online</code> a <code>false</code>
    testString: 'assert(users.Alan.online === false && users.Jeff.online === true &&  users.Sarah.online === false &&  users.Ryan.online === true, "The <code>users</code> object contains users <code>Jeff</code> and <code>Ryan</code> with <code>online</code> set to <code>true</code> and users <code>Alan</code> and <code>Sarah</code> with <code>online</code> set to <code>false</code>");'
  - text: La función <code>countOnline</code> devuelve el número de usuarios con la propiedad en <code>online</code> establecida en <code>true</code>
    testString: 'assert((function() { users.Harry = {online: true}; users.Sam = {online: true}; users.Carl = {online: true}; return countOnline(users) })() === 5, "The function <code>countOnline</code> returns the number of users with the <code>online</code> property set to <code>true</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line

  // change code above this line
}

console.log(countOnline(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
