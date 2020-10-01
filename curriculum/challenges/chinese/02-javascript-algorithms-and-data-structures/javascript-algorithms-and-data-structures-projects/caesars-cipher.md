---
id: 56533eb9ac21ba0edf2244e2
challengeType: 5
forumTopicId: 16003
title: 凯撒密码
---

## Description
<section id='description'>
<code>凯撒密码</code>是最简单和最广为人知的<dfn>密码之一</dfn>，也被称为<code>移位密码</code>。在<code>移位密码</code>中，明文中的字母通过按照一个固定数目进行偏移后被替换成新的字母。
<a href="https://en.wikipedia.org/wiki/ROT13" target='_blank'>ROT13</a> 是一个被广泛使用的编码技术，明文中的所有字母都被移动 13 位。因此，'A' &harr; 'N', 'B' &harr;  'O' 等等。
请编写一个函数，用于解码一个被 <a href="https://en.wikipedia.org/wiki/ROT13" target='_blank'>ROT13</a> 编码的字符串，然后返回解码后的结果。
所有解码后的字母都必须为字母大写。请不要解码非字母的字符（例如，空格、标点符号），但你需要在结果中保留它们。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>rot13('SERR PBQR PNZC')</code>应解码为<code>FREE CODE CAMP</code>。"
    testString: assert(rot13("SERR PBQR PNZC") === "FREE CODE CAMP");
  - text: "<code>rot13('SERR CVMMN!')</code>应解码为<code>FREE PIZZA!</code>。"
    testString: assert(rot13("SERR CVMMN!") === "FREE PIZZA!");
  - text: "<code>rot13('SERR YBIR?')</code>应解码为<code>FREE LOVE?</code>。"
    testString: assert(rot13("SERR YBIR?") === "FREE LOVE?");
  - text: "<code>rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')</code>应解码为<code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>。"
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
