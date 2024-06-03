---
id: 56533eb9ac21ba0edf2244e2
title: Caesars Cipher
challengeType: 5
forumTopicId: 16003
dashedName: caesars-cipher
---

# --description--

Mojawapo ya <dfn>ciphers</dfn> na inayojulikana sana ni <dfn>Caesar cipher, inayojulikana pia kama <dfn>shift cipher</dfn>. Katika shift cipher, maana za herufi hubadilishwa kwa kiwango kilichowekwa.</p> 

<p spaces-before="0">
  Mojawapo ya matumizi ya kawaida na ya kisasa ni <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> cipher ambapo thamani za herufi zinabadilishwa kwa nafasi 13. Hivyo basi, <code>A ↔ N</code>, <code>B ↔ O</code> na kadhalika.
</p>

<p spaces-before="0">
  Andika utaratibu inayochukuwa mfuatano uliosimbwa kwa <a href="https://www.freecodecamp.org/news/how-to-code-the-caesar-cipher-an-introduction-to-basic-encryption-3bf77b4e19f7/" target="_blank" rel="noopener noreferrer nofollow">ROT13</a> kama ingizo na kurudisha mfuatano uliofafanuliwa.
</p>

<p spaces-before="0">
  Herufi zote zitakuwa herufi kubwa. Usivibadilishe vibambo visivyo vya alfabeti (yaani nafasi, uakifishaji) lakini uvipitishe mbele.
</p>

<h1 spaces-before="0">
  --hints--
</h1>

<p spaces-before="0">
  <code>rot13("SERR PBQR PNZC")</code> inafaa kufafanua kwa mfuatano <code>FREE CODE CAMP</code>
</p>

<pre><code class="js">assert(rot13('SERR PBQR PNZC') === 'FREE CODE CAMP');
</code></pre>

<p spaces-before="0">
  <code>rot13("SERR CVMMN!")</code>inafaa kufafanua kwa mfuatano <code>FREE PIZZA!</code>
</p>

<pre><code class="js">assert(rot13('SERR CVMMN!') === 'FREE PIZZA!');
</code></pre>

<p spaces-before="0">
  <code>rot13("SERR YBIR?")</code> inafaa kufafanua kwa mfuatano <code>FREE LOVE?</code>
</p>

<pre><code class="js">assert(rot13('SERR YBIR?') === 'FREE LOVE?');
</code></pre>

<p spaces-before="0">
  <code>rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")</code> inafaa kufafanua kwa mfuatano <code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>
</p>

<pre><code class="js">assert(
  rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.') ===
    'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
);
</code></pre>

<h1 spaces-before="0">
  --seed--
</h1>

<h2 spaces-before="0">
  --seed-contents--
</h2>

<pre><code class="js">function rot13(str) {
  return str;
}

rot13("SERR PBQR PNZC");
</code></pre>

<h1 spaces-before="0">
  --solutions--
</h1>

<pre><code class="js">var lookup = {
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
</code></pre>
