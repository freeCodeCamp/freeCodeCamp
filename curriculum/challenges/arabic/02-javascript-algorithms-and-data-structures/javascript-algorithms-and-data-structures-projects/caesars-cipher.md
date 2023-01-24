---
id: 56533eb9ac21ba0edf2244e2
title: شفرة قيصر
challengeType: 5
forumTopicId: 16003
dashedName: caesars-cipher
---

# --description--

واحدة من الشفرات <dfn>ciphers</dfn> الابسط و الاكثر شهرة هي <dfn>Caesar cipher</dfn>، وتعرف أيضا بأسم <dfn>shift cipher</dfn>. في عملية تشفير shift cipher، يتم تبديل معاني الحروف بمقدار معين.

من الاستخدامات الحديثة الشائعة تشفير <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> ، حيث يتم تبديل قيم الحروف بمقدار 13 مكانًا. وهكذا `A ↔ N`، `B ↔ O` وما إلى ذلك.

اكتب وظيفة (function) تأخذ مقطع نصي (string) مشفر من نوع <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> كمدخل وتنتج مقطع نصي غير مشفر.

جميع الحروف ستكون كبيرة (uppercase). لا تغير أي حرف غير أبجدي (مثل المسافات وعلامات الترقيم)، ولكن مررها.

# --hints--

`rot13("SERR PBQR PNZC")` تُفك هذه الشفرة إلي كلمة `FREE CODE CAMP`

```js
assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
```

`rot13("SERR CVMMN!")` تُفك هذه الشفرة إلي كلمة `FREE PIZZA!`

```js
assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
```

`rot13("SERR YBIR?")` تُفك هذه الشفرة إلي كلمة `FREE LOVE?`

```js
assert(rot13('SERR YBIR?') === 'FREE LOVE?');
```

`rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")` تُفك هذه الشفرة إلي كلمة `THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.`

```js
assert(
  rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.') ===
    'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
);
```

# --seed--

## --seed-contents--

```js
function rot13(str) {
  return str;
}

rot13("SERR PBQR PNZC");
```

# --solutions--

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
