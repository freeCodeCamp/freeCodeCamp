---
id: a0b5010f579e69b815e7c5d6
title: Search and Replace
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
    First argument is the sentence to perform the search and replace on.
    Second argument is the word that you will be replacing (before).
    Third argument is what you will be replacing the second argument with (after).
ex. myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
<strong>Note</strong><br> Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
ex. myReplace("I love to look at the Book", "Book", "dog") should return "I love to look at the Dog".

or For example if you mean to replace the word "Book" from the original string with the word "dog" from the after string, but the before string is "book" it should still be replaced as "Dog"
ex. myReplace("I love to look at the Book", "book", "dog") should return "I love to look at the Dog".

It is to say that case of the before and after are not important unless the before matches the case of that of the word that is in the original string.
Remember to use <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myReplace("His name is Tom", "Tom", "John") </code> should return "His name is John".
    testString: assert.deepEqual(myReplace("His name is Tom", "Tom", "John")), "His name is John");
  - text: <code>myReplace("Let us go to the Store", "Store", "mall") </code> should return "Let us go to the Mall".
    testString: assert.deepEqual(myReplace("Let us go to the Store", "Store", "mall"),  "Let us go to the Mall");
  - text: <code>myReplace("He is Sleeping on the couch", "Sleeping", "sitting")</code> should return "He is Sitting on the couch".
    testString: assert.deepEqual(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch");
  - text: <code>myReplace("Let us get back to more Coding", "coding", "algorithms")</code> should return "Let us get back to more Algorithms".
    testString: assert.deepEqual(myReplace("Let us get back to more Coding", "coding", "algorithms"), "Let us get back to more Algorithms");
  - text: <code>myReplace("His name is tom", "tom", "john")</code> should return "His name is john".
    testString: assert.deepEqual(myReplace("His name is tom", "tom", "john"), "His name is john");
  - text: <code>myReplace("Let us go to the store", "store", "Mall")</code> should return 'Let us go to the mall';
    testString: assert.deepEqual(myReplace("Let us go to the store", "store", "Mall") , "Let us go to the store");
  - text: <code>myReplace("He is Sleeping on the couch", "Sleeping", "sitting")</code> should return "He is Sitting on the couch".
    testString: assert.deepEqual(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch");
  - text: <code>myReplace("Let us get back to more coding", "Coding", "Algorithms")</code> should return "Let us get back to more Algorithms".
    testString: assert.deepEqual(myReplace("Let us get back to more coding", "Coding", "Algorithms"), "Let us get back to me Algorithms");

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

  if (!str.match(before)){
    if (before.charAt(0).toUpperCase() != before.charAt(0)){
      after = after.charAt(0).toUpperCase() + after.substring(1);
      var pattern = new RegExp(before,'gi');
      console.log(str.replace(pattern,after));
      return str.replace(pattern,after);
    }
    else {
      after = after.charAt(0).toLowerCase() + after.substring(1);
      var pattern = new RegExp(before,'gi');
      console.log(str.replace(pattern,after));
      return str.replace(pattern,after);
    }
  }

  if (str.match(before)){
    if (before.charAt(0).toUpperCase() == before.charAt()){
      after = after.charAt(0).toUpperCase() + after.substring(1);
      console.log(str.replace(before,after));
      return str.replace(before , after);
    }
    else {
      after = after.charAt(0).toLowerCase() + after.substring(1);
      console.log(str.replace(before,after));
      return str.replace(before, after);
    }
  }
}
```

</section>
