---
id: a103376db3ba46b2d50db289
title: Spinal Tap Case
isRequired: true
challengeType: 5
isHidden: false
forumTopicId: 16078
---

## Description
<section id='description'>
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>spinalCase("This Is Spinal Tap")</code> should return <code>"this-is-spinal-tap"</code>.
    testString: assert.deepEqual(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap");
  - text: <code>spinalCase("thisIsSpinal<wbr>Tap")</code> should return <code>"this-is-spinal-tap"</code>.
    testString: assert.strictEqual(spinalCase('thisIsSpinalTap'), "this-is-spinal-tap");
  - text: <code>spinalCase("The_Andy_<wbr>Griffith_Show")</code> should return <code>"the-andy-griffith-show"</code>.
    testString: assert.strictEqual(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show");
  - text: <code>spinalCase("Teletubbies say Eh-oh")</code> should return <code>"teletubbies-say-eh-oh"</code>.
    testString: assert.strictEqual(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh");
  - text: <code>spinalCase("AllThe-small Things")</code> should return <code>"all-the-small-things"</code>.
    testString: assert.strictEqual(spinalCase("AllThe-small Things"), "all-the-small-things");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function spinalCase(str) {
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
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  return str.toLowerCase().replace(/\ |\_/g, '-');
}
```

</section>
