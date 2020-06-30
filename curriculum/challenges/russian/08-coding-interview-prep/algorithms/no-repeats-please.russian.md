---
id: a7bf700cd123b9a54eef01d5
title: No Repeats Please
challengeType: 5
forumTopicId: 16037
localeTitle: Нет повторений Пожалуйста
---

## Description
<section id='description'>
Возвращает число полных перестановок предоставленной строки, которые не имеют повторяющихся последовательных букв. Предположим, что все символы в предоставленной строке уникальны. Например, <code>aab</code> должен возвращать 2, поскольку имеет 6 полных перестановок ( <code>aab</code> , <code>aab</code> , <code>aba</code> , <code>aba</code> , <code>baa</code> , <code>baa</code> ), но только 2 из них ( <code>aba</code> и <code>aba</code> ) не имеют одинаковой буквы (в данном случае <code>a</code> ) повторяющееся. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>permAlone("aab")</code> should return a number.
    testString: assert.isNumber(permAlone('aab'));
  - text: <code>permAlone("aab")</code> should return 2.
    testString: assert.strictEqual(permAlone('aab'), 2);
  - text: <code>permAlone("aaa")</code> should return 0.
    testString: assert.strictEqual(permAlone('aaa'), 0);
  - text: <code>permAlone("aabb")</code> should return 8.
    testString: assert.strictEqual(permAlone('aabb'), 8);
  - text: <code>permAlone("abcdefa")</code> should return 3600.
    testString: assert.strictEqual(permAlone('abcdefa'), 3600);
  - text: <code>permAlone("abfdefa")</code> should return 2640.
    testString: assert.strictEqual(permAlone('abfdefa'), 2640);
  - text: <code>permAlone("zzzzzzzz")</code> should return 0.
    testString: assert.strictEqual(permAlone('zzzzzzzz'), 0);
  - text: <code>permAlone("a")</code> should return 1.
    testString: assert.strictEqual(permAlone('a'), 1);
  - text: <code>permAlone("aaab")</code> should return 0.
    testString: assert.strictEqual(permAlone('aaab'), 0);
  - text: <code>permAlone("aaabb")</code> should return 12.
    testString: assert.strictEqual(permAlone('aaabb'), 12);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function permAlone(str) {
  return str;
}

permAlone('aab');

```

</div>

</section>

## Solution
<section id='solution'>

```js
function permAlone(str) {
  return permutor(str).filter(function(perm) {
    return !perm.match(/(.)\1/g);
  }).length;
}

function permutor(str) {
  // http://staff.roguecc.edu/JMiller/JavaScript/permute.html
  //permArr: Global array which holds the list of permutations
  //usedChars: Global utility array which holds a list of "currently-in-use" characters
  var permArr = [], usedChars = [];
  function permute(input) {
    //convert input into a char array (one element for each character)
    var i, ch, chars = input.split("");
    for (i = 0; i < chars.length; i++) {
      //get and remove character at index "i" from char array
      ch = chars.splice(i, 1);
      //add removed character to the end of used characters
      usedChars.push(ch);
      //when there are no more characters left in char array to add, add used chars to list of permutations
      if (chars.length === 0) permArr[permArr.length] = usedChars.join("");
      //send characters (minus the removed one from above) from char array to be permuted
      permute(chars.join(""));
      //add removed character back into char array in original position
      chars.splice(i, 0, ch);
      //remove the last character used off the end of used characters array
      usedChars.pop();
    }
  }
  permute(str);
  return permArr;
}

permAlone('aab');
```

</section>
