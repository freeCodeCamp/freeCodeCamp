---
id: 56533eb9ac21ba0edf2244b8
title: Concatenating Strings with the Plus Equals Operator
localeTitle: Concatenando cadenas con el operador Plus Equals
challengeType: 1
---

## Description
<section id='description'> 
También podemos usar el operador <code>+=</code> para <dfn>concatenar</dfn> una cadena al final de una variable de cadena existente. Esto puede ser muy útil para romper una cadena larga en varias líneas. 
<strong>Nota</strong> <br> Cuidado con los espacios. La concatenación no agrega espacios entre las cadenas concatenadas, por lo que deberá agregarlas usted mismo. 
</section>

## Instructions
<section id='instructions'> 
Construya <code>myStr</code> en varias líneas concatenando estas dos cadenas: <code>&quot;This is the first sentence. &quot;</code> y <code>&quot;This is the second sentence.&quot;</code> utilizando el operador <code>+=</code> . Utilice el operador <code>+=</code> similar a como se muestra en el editor. Comience por asignar la primera cadena a <code>myStr</code> , luego agregue la segunda cadena. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> debe tener un valor de <code>This is the first sentence. This is the second sentence.</code>
    testString: 'assert(myStr === "This is the first sentence. This is the second sentence.", "<code>myStr</code> should have a value of <code>This is the first sentence. This is the second sentence.</code>");'
  - text: Usa el operador <code>+=</code> para construir <code>myStr</code>
    testString: 'assert(code.match(/\w\s*\+=\s*[""]/g).length > 1 && code.match(/\w\s*\=\s*[""]/g).length > 1, "Use the <code>+=</code> operator to build <code>myStr</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr;


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
var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```

</section>
