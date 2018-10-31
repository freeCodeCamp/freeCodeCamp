---
title: Align columns
id: 594810f028c0303b75339ad0
challengeType: 5
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(typeof formatText === "function", "<code>formatText</code> is a function.");'
  - text: ''
    testString: 'assert.strictEqual(formatText(testInput, "right"), rightAligned, "<code>formatText</code> with the above input and "right" justification should produce the following: ");'
  - text: ''
    testString: 'assert.strictEqual(formatText(testInput, "left"), leftAligned, "<code>formatText</code> with the above input and "left" justification should produce the following: ");'
  - text: ''
    testString: 'assert.strictEqual(formatText(testInput, "center"), centerAligned, "<code>formatText</code> with the above input and "center" justification should produce the following: ");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const testArr = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields$',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];

function formatText (input, justification) {
  // Good luck!
}

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
// solution required
```
</section>
