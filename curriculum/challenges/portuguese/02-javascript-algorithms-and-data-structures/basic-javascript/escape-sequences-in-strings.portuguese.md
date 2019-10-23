---
id: 56533eb9ac21ba0edf2244b6
title: Escape Sequences in Strings
challengeType: 1
videoUrl: ''
localeTitle: Seqüências de escape em seqüências de caracteres
---

## Description
<section id="description"> Aspas não são os únicos caracteres que podem ser <dfn>escapados</dfn> dentro de uma string. Há dois motivos para usar caracteres de escape: o primeiro é permitir que você use caracteres que talvez não fossem capazes de digitar, como um backspace. Segundo, permitir que você represente várias aspas em uma string sem que o JavaScript interprete erroneamente o que você quer dizer. Nós aprendemos isso no desafio anterior. <table class="table table-striped"><thead><tr><th> Código </th><th> Saída </th></tr></thead><tbody><tr><td> <code>\&#39;</code> </td> <td> citação única </td></tr><tr><td> <code>\&quot;</code> </td> <td> citação dupla </td></tr><tr><td> <code>\\</code> </td> <td> barra invertida </td></tr><tr><td> <code>\n</code> </td> <td> nova linha </td></tr><tr><td> <code>\r</code> </td> <td> retorno de carro </td></tr><tr><td> <code>\t</code> </td> <td> aba </td></tr><tr><td> <code>\b</code> </td> <td> backspace </td></tr><tr><td> <code>\f</code> </td> <td> feed de formulário </td></tr></tbody></table> <em>Observe que a própria barra invertida deve ter o escape para ser exibida como uma barra invertida.</em> </section>

## Instructions
<section id="instructions"> Atribuir as seguintes três linhas de texto para a única variável <code>myStr</code> usando seqüências de escape. <blockquote> Primeira linha <br> \Segunda linha <br> ThirdLine </blockquote> Você precisará usar seqüências de escape para inserir caracteres especiais corretamente. Você também precisará seguir o espaçamento como aparece acima, sem espaços entre seqüências de escape ou palavras. Aqui está o texto com as seqüências de escape escritas. <q>FirstLine <code>newline</code> <code>tab</code> <code>backslash</code> SecondLine <code>newline</code> ThirdLine</q> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> não deve conter espaços
    testString: 'assert(!/ /.test(myStr), "<code>myStr</code> should not contain any spaces");'
  - text: '<code>myStr</code> deve conter as strings <code>FirstLine</code> , <code>SecondLine</code> e <code>ThirdLine</code> (lembre-se de <code>ThirdLine</code> maiúsculas e minúsculas)'
    testString: 'assert(/FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr), "<code>myStr</code> should contain the strings <code>FirstLine</code>, <code>SecondLine</code> and <code>ThirdLine</code> (remember case sensitivity)");'
  - text: <code>FirstLine</code> deve ser seguido pelo caractere de nova linha <code>\n</code>
    testString: 'assert(/FirstLine\n/.test(myStr), "<code>FirstLine</code> should be followed by the newline character <code>\n</code>");'
  - text: <code>myStr</code> deve conter um caractere de tabulação <code>\t</code> que segue um caractere de nova linha
    testString: 'assert(/\n\t/.test(myStr), "<code>myStr</code> should contain a tab character <code>\t</code> which follows a newline character");'
  - text: <code>SecondLine</code> deve ser precedido pelo caractere de barra invertida <code>\\</code>
    testString: 'assert(/\SecondLine/.test(myStr), "<code>SecondLine</code> should be preceded by the backslash character <code>\\</code>");'
  - text: Deve haver um caractere de nova linha entre o <code>SecondLine</code> e o <code>ThirdLine</code>
    testString: 'assert(/SecondLine\nThirdLine/.test(myStr), "There should be a newline character between <code>SecondLine</code> and <code>ThirdLine</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr; // Change this line

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
