---
id: 56533eb9ac21ba0edf2244e2
title: Caesars Cipher
challengeType: 5
isRequired: true
forumTopicId: 16003
localeTitle: Цезарский шифр
---

## Description
<section id='description'>
Одним из простейших и наиболее широко известных <dfn>шифров</dfn> является <code>Caesar cipher</code> , также известный как <code>shift cipher</code> . В <code>shift cipher</code> значения букв сдвигаются на некоторую установленную величину. Обычным современным использованием является шифр <a href="https://en.wikipedia.org/wiki/ROT13" target="_blank">ROT13</a> , где значения букв сдвигаются на 13 мест. Таким образом, «A» ↔ &#39;N&#39;, &#39;B&#39; ↔ &#39;O&#39; и т. Д. Напишите функцию, которая берет строку с кодировкой <a href="https://en.wikipedia.org/wiki/ROT13" target="_blank">ROT13 в</a> качестве входных данных и возвращает декодированную строку. Все буквы будут заглавными. Не трансформируйте неалфавитный символ (т.е. пробелы, знаки препинания), но передайте их. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>rot13("SERR PBQR PNZC")</code> should decode to <code>FREE CODE CAMP</code>
    testString: assert(rot13("SERR PBQR PNZC") === "FREE CODE CAMP");
  - text: <code>rot13("SERR CVMMN!")</code> should decode to <code>FREE PIZZA!</code>
    testString: assert(rot13("SERR CVMMN!") === "FREE PIZZA!");
  - text: <code>rot13("SERR YBIR?")</code> should decode to <code>FREE LOVE?</code>
    testString: assert(rot13("SERR YBIR?") === "FREE LOVE?");
  - text: <code>rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")</code> should decode to <code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>
    testString: assert(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") === "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");

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
var lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line

  decodedArr = codeArr.map(function(letter) {
    if(lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    return letter;
  });

  // Only change code above this line
  return decodedArr.join(""); // Array to String
}
```

</section>
