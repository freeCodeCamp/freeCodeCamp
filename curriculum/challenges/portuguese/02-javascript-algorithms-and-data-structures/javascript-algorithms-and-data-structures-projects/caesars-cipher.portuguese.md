---
id: 56533eb9ac21ba0edf2244e2
title: Caesars Cipher
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Cifra Caesars
---

## Description
<section id="description"> Uma das <dfn>cifras</dfn> mais simples e mais conhecidas é uma <code>Caesar cipher</code> , também conhecida como <code>shift cipher</code> . Em uma <code>shift cipher</code> os significados das letras são alterados por um determinado valor. Um uso moderno comum é a cifra <a href="https://en.wikipedia.org/wiki/ROT13" target="_blank">ROT13</a> , onde os valores das letras são deslocados para 13 lugares. Assim &#39;A&#39; ↔ &#39;N&#39;, &#39;B&#39; ↔ &#39;O&#39; e assim por diante. Escreva uma função que tenha uma string codificada em <a href="https://en.wikipedia.org/wiki/ROT13" target="_blank">ROT13</a> como entrada e retorne uma string decodificada. Todas as letras serão maiúsculas. Não transforme qualquer caractere não alfabético (ou seja, espaços, pontuação), mas passe-os adiante. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente emparelhar o programa. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>rot13(&quot;SERR PBQR PNZC&quot;)</code> deve ser decodificado para <code>FREE CODE CAMP</code>
    testString: 'assert(rot13("SERR PBQR PNZC") === "FREE CODE CAMP", "<code>rot13("SERR PBQR PNZC")</code> should decode to <code>FREE CODE CAMP</code>");'
  - text: <code>rot13(&quot;SERR CVMMN!&quot;)</code> deve decodificar para <code>FREE PIZZA!</code>
    testString: 'assert(rot13("SERR CVMMN!") === "FREE PIZZA!", "<code>rot13("SERR CVMMN!")</code> should decode to <code>FREE PIZZA!</code>");'
  - text: <code>rot13(&quot;SERR YBIR?&quot;)</code> deve decodificar para <code>FREE LOVE?</code>
    testString: 'assert(rot13("SERR YBIR?") === "FREE LOVE?", "<code>rot13("SERR YBIR?")</code> should decode to <code>FREE LOVE?</code>");'
  - text: <code>rot13(&quot;GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.&quot;)</code> deve ser decodificado para o <code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>
    testString: 'assert(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") === "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.", "<code>rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")</code> should decode to <code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function rot13(str) { // LBH QVQ VG!

  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
