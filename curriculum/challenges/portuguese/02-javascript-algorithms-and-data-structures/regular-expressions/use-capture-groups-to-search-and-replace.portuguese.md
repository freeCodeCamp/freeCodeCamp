---
id: 587d7dbb367417b2b2512bab
title: Use Capture Groups to Search and Replace
challengeType: 1
videoUrl: ''
localeTitle: Use grupos de captura para pesquisar e substituir
---

## Description
<section id="description"> Pesquisando é útil. No entanto, você pode tornar a pesquisa ainda mais poderosa quando ela também altera (ou substitui) o texto que você corresponde. Você pode pesquisar e substituir texto em uma string usando <code>.replace()</code> em uma string. As entradas para <code>.replace()</code> são primeiro o padrão regex que você deseja procurar. O segundo parâmetro é a string para substituir a correspondência ou uma função para fazer alguma coisa. <blockquote> vamos wrongText = &quot;O céu é prateado.&quot;; <br> vamos silverRegex = / silver /; <br> wrongText.replace (silverRegex, &quot;blue&quot;); <br> // Retorna &quot;O céu é azul.&quot; </blockquote> Você também pode acessar grupos de captura na sequência de substituição com sinais de cifrão ( <code>$</code> ). <blockquote> &quot;Code Camp&quot; .replace (/ (\ w +) \ s (\ w +) /, &#39;$ 2 $ 1&#39;); <br> // Retorna &quot;Camp Code&quot; </blockquote></section>

## Instructions
<section id="instructions"> Escreva um regex para que ele procure pela string <code>&quot;good&quot;</code> . Em seguida, atualize a variável <code>replaceText</code> para substituir <code>&quot;good&quot;</code> por <code>&quot;okey-dokey&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve usar <code>.replace()</code> para pesquisar e substituir.
    testString: 'assert(code.match(/\.replace\(.*\)/), "You should use <code>.replace()</code> to search and replace.");'
  - text: Seu regex deve mudar <code>&quot;This sandwich is good.&quot;</code> para <code>&quot;This sandwich is okey-dokey.&quot;</code>
    testString: 'assert(result == "This sandwich is okey-dokey." && replaceText === "okey-dokey", "Your regex should change <code>"This sandwich is good."</code> to <code>"This sandwich is okey-dokey."</code>");'
  - text: Você não deve mudar a última linha.
    testString: 'assert(code.match(/result\s*=\s*huhText\.replace\(.*?\)/), "You should not change the last line.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let huhText = "This sandwich is good.";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = huhText.replace(fixRegex, replaceText);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
