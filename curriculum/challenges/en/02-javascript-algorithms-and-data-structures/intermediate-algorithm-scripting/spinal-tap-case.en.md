---
id: a103376db3ba46b2d50db289
title: Spinal Tap Case
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
Remember to use <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>spinalCase("This Is Spinal Tap")</code> should return <code>"this-is-spinal-tap"</code>.
  testString: 'assert.deepEqual(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap", ''<code>spinalCase("This Is Spinal Tap")</code> should return <code>"this-is-spinal-tap"</code>.'');'
- text: <code>spinalCase("thisIsSpinal<wbr>Tap")</code> should return <code>"this-is-spinal-tap"</code>.
  testString: 'assert.strictEqual(spinalCase(''thisIsSpinalTap''), "this-is-spinal-tap", ''<code>spinalCase("thisIsSpinal<wbr>Tap")</code> should return <code>"this-is-spinal-tap"</code>.'');'
- text: <code>spinalCase("The_Andy_<wbr>Griffith_Show")</code> should return <code>"the-andy-griffith-show"</code>.
  testString: 'assert.strictEqual(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show", ''<code>spinalCase("The_Andy_<wbr>Griffith_Show")</code> should return <code>"the-andy-griffith-show"</code>.'');'
- text: <code>spinalCase("Teletubbies say Eh-oh")</code> should return <code>"teletubbies-say-eh-oh"</code>.
  testString: 'assert.strictEqual(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh", ''<code>spinalCase("Teletubbies say Eh-oh")</code> should return <code>"teletubbies-say-eh-oh"</code>.'');'
- text: <code>spinalCase("AllThe-small Things")</code> should return <code>"all-the-small-things"</code>.
  testString: 'assert.strictEqual(spinalCase("AllThe-small Things"), "all-the-small-things", ''<code>spinalCase("AllThe-small Things")</code> should return <code>"all-the-small-things"</code>.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str;
}

spinalCase('This Is Spinal Tap');
```

</div>



</section>

## Solution
<section id='solution'>


```js
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  return str.toLowerCase().replace(/\ |\_/g, '-');
}
```

</section>
