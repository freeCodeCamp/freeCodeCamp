---
id: 587d7dbb367417b2b2512bac
title: Remove Whitespace from Start and End
challengeType: 1
videoUrl: ''
localeTitle: Remova o espaço em branco do início e do fim
---

## Description
<section id="description"> Às vezes, caracteres em branco ao redor de strings não são desejados, mas estão lá. O processamento típico de strings é remover o espaço em branco no início e no final dele. </section>

## Instructions
<section id="instructions"> Escreva um regex e use os métodos de string apropriados para remover os espaços em branco no início e no final das strings. <strong>Nota</strong> <br> O método <code>.trim()</code> funcionaria aqui, mas você precisará concluir esse desafio usando expressões regulares. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>result</code> deve ser igual a <code>&quot;Hello, World!&quot;</code>'
    testString: 'assert(result == "Hello, World!", "<code>result</code> should equal to <code>"Hello, World!"</code>");'
  - text: Você não deve usar o método <code>.trim()</code> .
    testString: 'assert(!code.match(/\.trim\(.*?\)/), "You should not use the <code>.trim()</code> method.");'
  - text: A variável de <code>result</code> não deve ser igual a uma string.
    testString: 'assert(!code.match(/result\s*=\s*".*?"/), "The <code>result</code> variable should not be set equal to a string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
