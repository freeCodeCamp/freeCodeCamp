---
id: 56533eb9ac21ba0edf2244bb
title: Word Blanks
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
---

## Description
<section id='description'>
We will now use our knowledge of strings to build a "<a href='https://en.wikipedia.org/wiki/Mad_Libs' target='_blank'>Mad Libs</a>" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.
In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.
Consider this sentence - "It was really <strong>____</strong>, and we <strong>____</strong> ourselves <strong>____</strong>". This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

```js
var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

</section>

## Instructions
<section id='instructions'>
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.
You will need to use the string concatenation operator <code>+</code> to build a new string, using the provided variables: <code>myNoun</code>, <code>myAdjective</code>, <code>myVerb</code>, and <code>myAdverb</code>. You will then assign the formed string to the <code>wordBlanks</code> variable.  You should not change the words assigned to the variables.
You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>wordBlanks</code> should be a string.
    testString: assert(typeof wordBlanks === 'string');
  - text: You should not change the values assigned to <code>myNoun</code>, <code>myVerb</code>, <code>myAdjective</code> or <code>myAdverb</code>.
    testString: assert(myNoun === "dog" && myVerb === "ran" && myAdjective === "big" && myAdverb === "quickly");    
  - text: You should not directly use the values "dog", "ran", "big", or "quickly" to create <code>wordBlanks</code>.    
    testString: const newCode = removeAssignments(code); assert(!/dog/.test(newCode) && !/ran/.test(newCode) && !/big/.test(newCode) && !/quickly/.test(newCode));    
  - text: <code>wordBlanks</code> should contain all of the words assigned to the variables <code>myNoun</code>, <code>myVerb</code>, <code>myAdjective</code> and <code>myAdverb</code> separated by non-word characters (and any additional words in your madlib).
    testString: assert(/\bdog\b/.test(wordBlanks) && /\bbig\b/.test(wordBlanks) && /\bran\b/.test(wordBlanks) && /\bquickly\b/.test(wordBlanks));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = ""; // Change this line
// Only change code above this line
```

</div>

<div id='js-teardown'>

```js
const removeAssignments = str => str
  .replace(/myNoun\s*=\s*["']dog["']/g, '')
  .replace(/myAdjective\s*=\s*["']big["']/g, '')
  .replace(/myVerb\s*=\s*["']ran["']/g, '')
  .replace(/myAdverb\s*=\s*["']quickly["']/g, '');
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard.";
```

</section>
