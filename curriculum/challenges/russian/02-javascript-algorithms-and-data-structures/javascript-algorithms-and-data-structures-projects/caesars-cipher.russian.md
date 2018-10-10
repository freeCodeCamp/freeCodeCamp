---
id: 56533eb9ac21ba0edf2244e2
title: Caesars Cipher
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Цезарский шифр
---

## Description
<section id="description"> Одним из простейших и наиболее широко известных <dfn>шифров</dfn> является <code>Caesar cipher</code> , также известный как <code>shift cipher</code> . В <code>shift cipher</code> значения букв сдвигаются на некоторую установленную величину. Обычным современным использованием является шифр <a href="https://en.wikipedia.org/wiki/ROT13" target="_blank">ROT13</a> , где значения букв сдвигаются на 13 мест. Таким образом, «A» ↔ &#39;N&#39;, &#39;B&#39; ↔ &#39;O&#39; и т. Д. Напишите функцию, которая берет строку с кодировкой <a href="https://en.wikipedia.org/wiki/ROT13" target="_blank">ROT13 в</a> качестве входных данных и возвращает декодированную строку. Все буквы будут заглавными. Не трансформируйте неалфавитный символ (т.е. пробелы, знаки препинания), но передайте их. Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>rot13(&quot;SERR PBQR PNZC&quot;)</code> должен декодировать <code>FREE CODE CAMP</code>
    testString: 'assert(rot13("SERR PBQR PNZC") === "FREE CODE CAMP", "<code>rot13("SERR PBQR PNZC")</code> should decode to <code>FREE CODE CAMP</code>");'
  - text: <code>rot13(&quot;SERR CVMMN!&quot;)</code> должен декодировать <code>FREE PIZZA!</code>
    testString: 'assert(rot13("SERR CVMMN!") === "FREE PIZZA!", "<code>rot13("SERR CVMMN!")</code> should decode to <code>FREE PIZZA!</code>");'
  - text: <code>rot13(&quot;SERR YBIR?&quot;)</code> должен декодировать <code>FREE LOVE?</code>
    testString: 'assert(rot13("SERR YBIR?") === "FREE LOVE?", "<code>rot13("SERR YBIR?")</code> should decode to <code>FREE LOVE?</code>");'
  - text: <code>rot13(&quot;GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.&quot;)</code> должен декодировать до <code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>
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
