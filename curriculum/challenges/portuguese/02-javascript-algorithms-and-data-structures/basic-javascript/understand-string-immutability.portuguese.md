---
id: 56533eb9ac21ba0edf2244ba
title: Understand String Immutability
challengeType: 1
videoUrl: ''
localeTitle: Entenda a imutabilidade da corda
---

## Description
<section id="description"> Em JavaScript, os valores <code>String</code> são <dfn>imutáveis</dfn> , o que significa que eles não podem ser alterados depois de criados. Por exemplo, o código a seguir: <blockquote> var myStr = &quot;Bob&quot;; <br> myStr [0] = &quot;J&quot;; </blockquote> não pode alterar o valor de <code>myStr</code> para &quot;Job&quot;, porque o conteúdo de <code>myStr</code> não pode ser alterado. Observe que isso <em>não</em> significa que <code>myStr</code> não possa ser alterado, apenas que os caracteres individuais de uma <dfn>string literal</dfn> não podem ser alterados. A única maneira de alterar <code>myStr</code> seria atribuí-lo com uma nova string, assim: <blockquote> var myStr = &quot;Bob&quot;; <br> myStr = &quot;Job&quot;; </blockquote></section>

## Instructions
<section id="instructions"> Corrija a atribuição para <code>myStr</code> para que ela contenha o valor de string de <code>Hello World</code> usando a abordagem mostrada no exemplo acima. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> deve ter um valor de <code>Hello World</code>
    testString: 'assert(myStr === "Hello World", "<code>myStr</code> should have a value of <code>Hello World</code>");'
  - text: Não mude o código acima da linha
    testString: 'assert(/myStr = "Jello World"/.test(code), "Do not change the code above the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myStr = "Jello World";

// Only change code below this line

myStr[0] = "H"; // Fix Me

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
