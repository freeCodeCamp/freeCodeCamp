---
id: 56533eb9ac21ba0edf2244b8
title: Concatenating Strings with the Plus Equals Operator
challengeType: 1
videoUrl: ''
localeTitle: Concatenando Strings com o Operador Plus Equals
---

## Description
<section id="description"> Também podemos usar o operador <code>+=</code> para <dfn>concatenar</dfn> uma string no final de uma variável de string existente. Isso pode ser muito útil para quebrar uma longa cadeia ao longo de várias linhas. <strong>Nota</strong> <br> Cuidado com os espaços. A concatenação não adiciona espaços entre as sequências concatenadas, portanto, você precisará adicioná-las você mesmo. </section>

## Instructions
<section id="instructions"> Crie <code>myStr</code> em várias linhas concatenando essas duas strings: <code>&quot;This is the first sentence. &quot;</code> e <code>&quot;This is the second sentence.&quot;</code> usando o operador <code>+=</code> . Use o operador <code>+=</code> semelhante ao mostrado no editor. Comece atribuindo a primeira string ao <code>myStr</code> , em seguida, adicione a segunda string. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> deve ter um valor de <code>This is the first sentence. This is the second sentence.</code>
    testString: 'assert(myStr === "This is the first sentence. This is the second sentence.", "<code>myStr</code> should have a value of <code>This is the first sentence. This is the second sentence.</code>");'
  - text: Use o operador <code>+=</code> para construir <code>myStr</code>
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
// solution required
```
</section>
