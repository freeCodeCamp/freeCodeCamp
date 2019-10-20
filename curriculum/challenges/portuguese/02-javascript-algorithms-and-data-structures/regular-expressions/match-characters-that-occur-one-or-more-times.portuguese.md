---
id: 587d7db6367417b2b2512b99
title: Match Characters that Occur One or More Times
challengeType: 1
videoUrl: ''
localeTitle: Corresponder caracteres que ocorrem uma ou mais vezes
---

## Description
<section id="description"> Às vezes, você precisa corresponder a um caractere (ou grupo de caracteres) que aparece uma ou mais vezes seguidas. Isso significa que ocorre pelo menos uma vez e pode ser repetido. Você pode usar o caractere <code>+</code> para verificar se é esse o caso. Lembre-se, o personagem ou padrão deve estar presente consecutivamente. Ou seja, o personagem tem que repetir um após o outro. Por exemplo, <code>/a+/g</code> encontraria uma correspondência em <code>&quot;abc&quot;</code> e retornaria <code>[&quot;a&quot;]</code> . Por causa do <code>+</code> , ele também encontraria uma única correspondência em <code>&quot;aabc&quot;</code> e retornaria <code>[&quot;aa&quot;]</code> . Se fosse em vez verificando a string <code>&quot;abab&quot;</code> , ele iria encontrar duas partidas e retornar <code>[&quot;a&quot;, &quot;a&quot;]</code> porque os <code>a</code> personagens não estão em uma linha - há um <code>b</code> entre eles. Finalmente, como não há <code>&quot;a&quot;</code> na string <code>&quot;bcd&quot;</code> , ele não encontrará uma correspondência. </section>

## Instructions
<section id="instructions"> Você quer encontrar correspondências quando a letra <code>s</code> ocorre uma ou mais vezes em <code>&quot;Mississippi&quot;</code> . Escreva um regex que use o sinal <code>+</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex <code>myRegex</code> deve usar o sinal <code>+</code> para corresponder a um ou mais caracteres <code>s</code> .
    testString: 'assert(/\+/.test(myRegex.source), "Your regex <code>myRegex</code> should use the <code>+</code> sign to match one or more <code>s</code> characters.");'
  - text: Seu regex <code>myRegex</code> deve corresponder a 2 itens.
    testString: 'assert(result.length == 2, "Your regex <code>myRegex</code> should match 2 items.");'
  - text: A variável de <code>result</code> deve ser uma matriz com duas correspondências de <code>&quot;ss&quot;</code>
    testString: 'assert(result[0] == "ss" && result[1] == "ss", "The <code>result</code> variable should be an array with two matches of <code>"ss"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
