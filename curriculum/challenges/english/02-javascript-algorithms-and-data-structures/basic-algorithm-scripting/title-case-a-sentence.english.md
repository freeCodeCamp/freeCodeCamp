---
id: ab6137d4e35944e21037b769
title: Title Case a Sentence
isRequired: true
challengeType: 5
isHidden: false
forumTopicId: 16088
---

## Description
<section id='description'>
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>titleCase("I&#39;m a little tea pot")</code> should return a string.
    testString: assert(typeof titleCase("I'm a little tea pot") === "string");
  - text: <code>titleCase("I&#39;m a little tea pot")</code> should return <code>I&#39;m A Little Tea Pot</code>.
    testString: assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
  - text: <code>titleCase("sHoRt AnD sToUt")</code> should return <code>Short And Stout</code>.
    testString: assert(titleCase("sHoRt AnD sToUt") === "Short And Stout");
  - text: <code>titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")</code> should return <code>Here Is My Handle Here Is My Spout</code>.
    testString: assert(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") === "Here Is My Handle Here Is My Spout");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function titleCase(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
}

titleCase("I'm a little tea pot");

```

</section>
