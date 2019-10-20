---
id: 587d7db6367417b2b2512b98
title: Match Single Characters Not Specified
challengeType: 1
videoUrl: ''
localeTitle: Combinar Caracteres Únicos Não Especificados
---

## Description
<section id="description"> Até agora, você criou um conjunto de caracteres que deseja corresponder, mas também pode criar um conjunto de caracteres que não deseja corresponder. Esses tipos de conjuntos de caracteres são chamados de <code>negated character sets</code> . Para criar um <code>negated character set</code> , coloque um caractere de <code>caret</code> ( <code>^</code> ) após o colchete de abertura e antes dos caracteres que você não deseja corresponder. Por exemplo, <code>/[^aeiou]/gi</code> combina todos os caracteres que não são uma vogal. Note que os personagens gostam <code>.</code> <code>!</code> , <code>[</code> , <code>@</code> , <code>/</code> E espaço em branco são combinados - o personagem vogal negada só definir exclui os caracteres de vogais. </section>

## Instructions
<section id="instructions"> Crie um único regex que corresponda a todos os caracteres que não sejam um número ou uma vogal. Lembre-se de incluir os sinalizadores apropriados na regex. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex <code>myRegex</code> deve corresponder a 9 itens.
    testString: 'assert(result.length == 9, "Your regex <code>myRegex</code> should match 9 items.");'
  - text: Seu regex <code>myRegex</code> deve usar o sinalizador global.
    testString: 'assert(myRegex.flags.match(/g/).length == 1, "Your regex <code>myRegex</code> should use the global flag.");'
  - text: Seu regex <code>myRegex</code> deve usar o sinalizador insensível a maiúsculas e minúsculas.
    testString: 'assert(myRegex.flags.match(/i/).length == 1, "Your regex <code>myRegex</code> should use the case insensitive flag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
