---
id: a0b5010f579e69b815e7c5d6
title: Search and Replace
challengeType: 5
forumTopicId: 16045
---

## Description
<section id='description'>
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
<strong>Note</strong><br> Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myReplace("Let us go to the store", "store", "mall")</code> should return "Let us go to the mall".
    testString: assert.deepEqual(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall");
  - text: <code>myReplace("He is Sleeping on the couch", "Sleeping", "sitting")</code> should return "He is Sitting on the couch".
    testString: assert.deepEqual(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch");
  - text: <code>myReplace("I think we should look up there", "up", "Down")</code> should return "I think we should look down there".
    testString: assert.deepEqual(myReplace("I think we should look up there", "up", "Down"), "I think we should look down there");
  - text: <code>myReplace("This has a spellngi error", "spellngi", "spelling")</code> should return "This has a spelling error".
    testString: assert.deepEqual(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error");
  - text: <code>myReplace("His name is Tom", "Tom", "john")</code> should return "His name is John".
    testString: assert.deepEqual(myReplace("His name is Tom", "Tom", "john"), "His name is John");
  - text: <code>myReplace("Let us get back to more Coding", "Coding", "algorithms")</code> should return "Let us get back to more Algorithms".
    testString: assert.deepEqual(myReplace("Let us get back to more Coding", "Coding", "algorithms"), "Let us get back to more Algorithms");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
```

</section>
