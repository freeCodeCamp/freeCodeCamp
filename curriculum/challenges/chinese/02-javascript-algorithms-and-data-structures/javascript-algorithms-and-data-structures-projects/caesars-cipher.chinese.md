---
id: 56533eb9ac21ba0edf2244e2
title: Caesars Cipher
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Caesars Cipher
---

## Description
<section id='description'>
如果给定的一个字符串是回文，那么返回<code>true</code>，否则返回<code>false</code>。
<dfn>palindrome（回文）</dfn>，指在忽略标点符号、大小写和空格的前提下，正着读和反着读一模一样。
<strong>注意：</strong><br>检查回文时，你需要先除去<strong>所有非字母数字的字符</strong>（标点、空格和符号）并且将所有字符转换成字母大写或字母小写。
我们将会传入不同格式的字符串，例如：<code>"racecar"</code>、<code>"RaceCar"</code>、<code>"race CAR"</code>等等。
我们也会传入一些包含特殊符号的字符串，例如<code>"2A3*3a2"</code>，<code>"2A3  3a2"</code>和<code>"2_A3*3#A2"</code>。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>rot13('SERR PBQR PNZC')</code>应解码为<code>FREE CODE CAMP</code>。"
    testString: assert(rot13("SERR PBQR PNZC") === "FREE CODE CAMP", '<code>rot13("SERR PBQR PNZC")</code>应解码为<code>FREE CODE CAMP</code>。');
  - text: "<code>rot13('SERR CVMMN!')</code>应解码为<code>FREE PIZZA!</code>。"
    testString: assert(rot13("SERR CVMMN!") === "FREE PIZZA!", '<code>rot13("SERR CVMMN!")</code>应解码为<code>FREE PIZZA!</code>。');
  - text: "<code>rot13('SERR YBIR?')</code>应解码为<code>FREE LOVE?</code>。"
    testString: assert(rot13("SERR YBIR?") === "FREE LOVE?", '<code>rot13("SERR YBIR?")</code>应解码为<code>FREE LOVE?</code>。');
  - text: "<code>rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')</code>应解码为<code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>。"
    testString: assert(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") === "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.", '<code>rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")</code>应解码为<code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              