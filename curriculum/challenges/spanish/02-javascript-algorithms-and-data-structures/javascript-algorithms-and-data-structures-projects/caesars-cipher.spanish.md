---
id: 56533eb9ac21ba0edf2244e2
title: Caesars Cipher
localeTitle: Cifrado de Caesars
challengeType: 5
isRequired: true
---

## Description
<section id='description'> 
Uno de los <dfn>cifrados</dfn> más simples y más conocidos es el <code>Caesar cipher</code> , también conocido como <code>shift cipher</code> . En un <code>shift cipher</code> los significados de las letras se desplazan en una cantidad determinada. 
Un uso moderno común es el cifrado <a href="https://en.wikipedia.org/wiki/ROT13" target='_blank'>ROT13</a> , donde los valores de las letras se desplazan en 13 lugares. Así, &#39;A&#39; ↔ &#39;N&#39;, &#39;B&#39; ↔ &#39;O&#39; y así sucesivamente. 
Escribir una función que toma una cadena codificada <a href="https://en.wikipedia.org/wiki/ROT13" target='_blank'>ROT13</a> como entrada y devuelve una cadena decodificada. 
Todas las letras serán mayúsculas. No transforme ningún carácter no alfabético (es decir, espacios, puntuación), pero sí páselos. 
Recuerda usar <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>rot13(&quot;SERR PBQR PNZC&quot;)</code> debe decodificar a <code>FREE CODE CAMP</code>
    testString: 'assert(rot13("SERR PBQR PNZC") === "FREE CODE CAMP", "<code>rot13("SERR PBQR PNZC")</code> should decode to <code>FREE CODE CAMP</code>");'
  - text: <code>rot13(&quot;SERR CVMMN!&quot;)</code> debe decodificar a <code>FREE PIZZA!</code>
    testString: 'assert(rot13("SERR CVMMN!") === "FREE PIZZA!", "<code>rot13("SERR CVMMN!")</code> should decode to <code>FREE PIZZA!</code>");'
  - text: <code>rot13(&quot;SERR YBIR?&quot;)</code> debe decodificar a <code>FREE LOVE?</code>
    testString: 'assert(rot13("SERR YBIR?") === "FREE LOVE?", "<code>rot13("SERR YBIR?")</code> should decode to <code>FREE LOVE?</code>");'
  - text: <code>rot13(&quot;GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.&quot;)</code> debe decodificarse a <code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>
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
