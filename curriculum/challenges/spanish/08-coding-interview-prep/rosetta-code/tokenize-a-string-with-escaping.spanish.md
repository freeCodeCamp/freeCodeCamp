---
title: Tokenize a string with escaping
id: 594faaab4e2a8626833e9c3d
localeTitle: 594faaab4e2a8626833e9c3d
challengeType: 5
---

## Description
<section id='description'> 
<p> 
Escriba una función o programa que pueda dividir una cadena en cada aparición sin escape de un carácter separador. 
</p> 
<p> 
Debe aceptar tres parámetros de entrada: 
</p> 
La <b>cadena</b> 
El <b>carácter separador</b> 
El <b>carácter de escape</b> 
<p> Debe salir una lista de cadenas. </p> 
<p> Reglas para dividir: </p> 
Los campos que estaban separados por los separadores, se convierten en los elementos de la lista de salida. 
campos vacíos deben conservarse, incluso al principio y al final. 
<p> Reglas para escapar: </p> 
&quot;Escapado&quot; significa precedido por una aparición del carácter de escape que aún no se ha escapado. 
Cuando el personaje de escape precede a un personaje que no tiene un significado especial, todavía cuenta como un escape (pero no hace nada especial). 
Cada aparición del carácter de escape que se utilizó para escapar de algo, no debe formar parte de la salida. 
<p> Demuestre que su función satisface el siguiente caso de prueba: 
Cadena dada <pre> uno ^ | uno || tres ^^^^ | cuatro ^^^ | ^ cuatro | </pre> y usando 
<pre> | </pre> como separador y <pre> ^ </pre> como carácter de escape, su función 
debería generar la siguiente matriz: 
</p> 
<pre> 
[&#39;one | uno&#39;, &quot;, &#39;three ^^&#39;, &#39;four ^ | quatro&#39;,&quot;] 
</pre> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>tokenize</code> es una función.
    testString: 'assert(typeof tokenize === "function", "<code>tokenize</code> is a function.");'
  - text: <code>tokenize</code> debería devolver una matriz.
    testString: 'assert(typeof tokenize("a", "b", "c") === "object", "<code>tokenize</code> should return an array.");'
  - text: &#39; <code>tokenize(&quot;one^|uno||three^^^^|four^^^|^cuatro|&quot;, &quot;|&quot;, &quot;^&quot;)</code> debe devolver [&quot;one | uno&quot;, &quot;,, three ^^ &quot;,&quot; cuatro ^ | cuatro &quot;,&quot; &quot;]&quot;) &#39;
    testString: 'assert.deepEqual(tokenize(testStr1, "|", "^"), res1, "<code>tokenize("one^|uno||three^^^^|four^^^|^cuatro|", "|", "^") </code> should return ["one|uno", "", "three^^", "four^|cuatro", ""]");'
  - text: &#39; <code>tokenize(&quot;a@&amp;bcd&amp;ef&amp;&amp;@@hi&quot;, &quot;&amp;&quot;, &quot;@&quot;)</code> debe devolver <code>[&quot;a&amp;bcd&quot;, &quot;ef&quot;, &quot;&quot;, &quot;@hi&quot;]</code> &#39;
    testString: 'assert.deepEqual(tokenize(testStr2, "&", "@"), res2, "<code>tokenize("a@&bcd&ef&&@@hi", "&", "@")</code> should return <code>["a&bcd", "ef", "", "@hi"]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function tokenize(str, esc, sep) {
  return true;
}
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
// tokenize :: String -> Character -> Character -> [String]
function tokenize(str, charDelim, charEsc) {
  const dctParse = str.split('')
    .reduce((a, x) => {
      const blnEsc = a.esc;
      const blnBreak = !blnEsc && x === charDelim;
      const blnEscChar = !blnEsc && x === charEsc;

      return {
        esc: blnEscChar,
        token: blnBreak ? " : (
          a.token + (blnEscChar ? " : x)
        ),
        list: a.list.concat(blnBreak ? a.token : [])
      };
    }, {
      esc: false,
      token: ",
      list: []
    });

  return dctParse.list.concat(
    dctParse.token
  );
}

```

</section>
