---
id: 56533eb9ac21ba0edf2244bb
title: Word Blanks
challengeType: 1
---

## Description
<section id='description'>
We will now use our knowledge of strings to build a "<a href='https://en.wikipedia.org/wiki/Mad_Libs' target='_blank'>Mad Libs</a>" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.
In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.
Consider this sentence - "It was really <strong>____</strong>, and we <strong>____</strong> ourselves <strong>____</strong>". This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:
<blockquote>var sentence = "It was really" + "hot" + ", and we" + "laughed" + "ourselves" + "silly.";</blockquote>
</section>

## Instructions
<section id='instructions'>
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.
You will need to use the string concatenation operator <code>+</code> to build a new string, using the provided variables: <code>myNoun</code>, <code>myAdjective</code>, <code>myVerb</code>, and <code>myAdverb</code>. You will then assign the formed string to the <code>result</code> variable.
You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>wordBlanks("","","","")</code> should return a string.'
    testString: 'assert(typeof wordBlanks("","","","") === "string", "<code>wordBlanks("","","","")</code> should return a string.");'
  - text: '<code>wordBlanks("dog", "big", "ran", "quickly")</code> should contain all of the passed in words separated by non-word characters (and any additional words in your madlib).'
    testString: 'assert(/\bdog\b/.test(test1) && /\bbig\b/.test(test1) && /\bran\b/.test(test1) && /\bquickly\b/.test(test1),"<code>wordBlanks("dog", "big", "ran", "quickly")</code> should contain all of the passed in words separated by non-word characters (and any additional words in your madlib).");'
  - text: '<code>wordBlanks("cat", "little", "hit", "slowly")</code> should contain all of the passed in words separated by non-word characters (and any additional words in your madlib).'
    testString: 'assert(/\bcat\b/.test(test2) && /\blittle\b/.test(test2) && /\bhit\b/.test(test2) && /\bslowly\b/.test(test2),"<code>wordBlanks("cat", "little", "hit", "slowly")</code> should contain all of the passed in words separated by non-word characters (and any additional words in your madlib).");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";

  result = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
  result += "It " + myVerb + " " + myAdverb + " around the yard.";

  return result;
}
```

</section>
