---
id: a7bf700cd123b9a54eef01d5
title: No Repeats Please
challengeType: 5
forumTopicId: 16037
---

## Description
<section id='description'>
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
For example, <code>aab</code> should return 2 because it has 6 total permutations (<code>aab</code>, <code>aab</code>, <code>aba</code>, <code>aba</code>, <code>baa</code>, <code>baa</code>), but only 2 of them (<code>aba</code> and <code>aba</code>) don't have the same letter (in this case <code>a</code>) repeating.
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
  return permuter(str).filter(function(perm) {
    return !perm.match(/(.)\1/g);
  }).length;
}

function permuter(str) {
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
