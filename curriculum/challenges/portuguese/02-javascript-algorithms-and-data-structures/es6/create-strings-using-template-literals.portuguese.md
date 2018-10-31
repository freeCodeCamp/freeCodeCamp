---
id: 587d7b8a367417b2b2512b4e
title: Create Strings using Template Literals
challengeType: 1
videoUrl: ''
localeTitle: Criar strings usando modelos literais
---

## Description
<section id="description"> Um novo recurso do ES6 é o <dfn>literal</dfn> do <dfn>modelo</dfn> . Este é um tipo especial de string que facilita a criação de strings complexas. Literais de modelo permitem criar strings de várias linhas e usar recursos de interpolação de strings para criar strings. Considere o código abaixo: <blockquote> const pessoa = { <br> nome: &quot;Zodíaco Hasbro&quot;, <br> idade: 56 anos <br> }; <br><br> // Template literal com multi-linha e interpolação de string <br> const greeting = `Olá, meu nome é $ {person.name}! <br> Tenho $ {person.age} anos de idade. <br><br> console.log (saudação); // prints <br> // Olá, meu nome é Zodíaco Hasbro! <br> // Eu tenho 56 anos. <br></blockquote> Muitas coisas aconteceram lá. Em primeiro lugar, o exemplo usa backticks ( <code>`</code> ), não aspas ( <code>&#39;</code> ou <code>&quot;</code> ), para envolver a string. Em segundo lugar, observe que a string é multilinha, tanto no código quanto na saída. Isso salva a inserção <code>\n</code> dentro de strings. A sintaxe <code>${variable}</code> usada acima é um marcador de posição. Basicamente, você não precisará mais usar a concatenação com o operador <code>+</code> Para adicionar variáveis ​​a strings, basta soltar a variável em uma string de template e envolvê-la com <code>${</code> e <code>}</code> . da mesma forma, você pode incluir outras expressões em sua string literal, por exemplo <code>${a + b}</code> . Esta nova forma de criar strings lhe dá mais flexibilidade para criar cordas robustas. </section>

## Instructions
<section id="instructions"> Use a sintaxe literal de modelo com backticks para exibir cada entrada da matriz de <code>failure</code> do objeto de <code>result</code> . Cada entrada deve ser agrupada dentro de um elemento <code>li</code> com o <code>text-warning</code> atributo de classe e listada no <code>resultDisplayArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>resultDisplayArray</code> é uma matriz contendo mensagens de <code>result failure</code> .
    testString: 'assert(typeof makeList(result.failure) === "object" && resultDisplayArray.length === 3, "<code>resultDisplayArray</code> is a list containing <code>result failure</code> messages.");'
  - text: <code>resultDisplayArray</code> é a saída desejada.
    testString: 'assert(makeList(result.failure).every((v, i) => v === `<li class="text-warning">${result.failure[i]}</li>` || v === `<li class="text-warning">${result.failure[i]}</li>`), "<code>resultDisplayArray</code> is the desired output.");'
  - text: Sequências de modelos foram usadas
    testString: 'getUserInput => assert(getUserInput("index").match(/`.*`/g), "Template strings were not used");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = null;
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
