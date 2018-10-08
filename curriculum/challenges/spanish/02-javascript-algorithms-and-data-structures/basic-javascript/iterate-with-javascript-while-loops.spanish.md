---
id: cf1111c1c11feddfaeb1bdef
title: Iterate with JavaScript While Loops
localeTitle: Iterar con JavaScript mientras bucles
challengeType: 1
---

## Description
<section id='description'> 
Puede ejecutar el mismo código varias veces utilizando un bucle. 
El primer tipo de bucle vamos a aprender se llama un &quot; <code>while</code> &quot; bucle porque funciona &quot;mientras que&quot; una condición especificada es verdadera y se detiene una vez que la condición ya no es cierto. 
<blockquote>var ourArray = [];<br>var i = 0;<br>while(i &#60; 5) {<br>&nbsp;&nbsp;ourArray.push(i);<br>&nbsp;&nbsp;i++;<br>}</blockquote> 
Intentemos que funcione un bucle while empujando los valores a una matriz. 
</section>

## Instructions
<section id='instructions'> 
Empuje los números de 0 a 4 para <code>myArray</code> usando un <code>while</code> de bucle. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Usted debe utilizar un <code>while</code> de bucle para esto.
    testString: 'assert(code.match(/while/g), "You should be using a <code>while</code> loop for this.");'
  - text: &#39; <code>myArray</code> debe ser igual a <code>[0,1,2,3,4]</code> .&#39;
    testString: 'assert.deepEqual(myArray, [0,1,2,3,4], "<code>myArray</code> should equal <code>[0,1,2,3,4]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [];

// Only change code below this line.


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
var myArray = [];
var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}
```

</section>
