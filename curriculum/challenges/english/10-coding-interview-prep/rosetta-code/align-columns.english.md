---
title: Align columns
id: 594810f028c0303b75339ad0
challengeType: 5
isHidden: false
forumTopicId: 302224
---

## Description
<section id='description'>

Given a text file of many lines, where fields within a line are delineated by a single <code>$</code> character, write a program that aligns each column of fields by ensuring that words in each column are separated by at least one space. Further, allow for each word in a column to be either left justified, right justified, or center justified within its column.
</section>

## Instructions
<section id='instructions'>

Use the following text to test your programs:
<pre>
Given$a$text$file$of$many$lines
where$fields$within$a$line$
are$delineated$by$a$single$'dollar'$character
write$a$program
that$aligns$each$column$of$fields
by$ensuring$that$words$in$each$
column$are$separated$by$at$least$one$space.
Further,$allow$for$each$word$in$a$column$to$be$either$left$
justified,$right$justified
or$center$justified$within$its$column.
</pre>
<strong>Note that:</strong>
<ul>
  <li>The example input texts lines may, or may not, have trailing dollar characters.</li>
  <li>All columns should share the same alignment.</li>
  <li>Consecutive space characters produced adjacent to the end of lines are insignificant for the purposes of the task.</li>
  <li>Output text will be viewed in a mono-spaced font on a plain text editor or basic terminal.</li>
  <li>The minimum space between columns should be computed from the text and not hard-coded.</li>
  <li>It is not a requirement to add separating characters between or around columns.</li>
</ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>formatText</code> should be a function.
    testString: assert(typeof formatText === 'function');
  - text: '<code>formatText</code> with the above input and "right" justification should produce the following: '
    testString: 'assert.strictEqual(formatText(testInput, ''right''), rightAligned);'
  - text: '<code>formatText</code> with the above input and "left" justification should produce the following: '
    testString: 'assert.strictEqual(formatText(testInput, ''left''), leftAligned);'
  - text: '<code>formatText</code> with the above input and "center" justification should produce the following: '
    testString: 'assert.strictEqual(formatText(testInput, ''center''), centerAligned);'

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

function formatText(input, justification) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const testInput = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$\"dollar\"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields$',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];

const rightAligned = '     Given          a      text   file     of     many     lines\n' +
'     where     fields    within      a   line \n' +
'       are delineated        by      a single "dollar" character\n' +
'     write          a   program\n' +
'      that     aligns      each column     of   fields \n' +
'        by   ensuring      that  words     in     each \n' +
'    column        are separated     by     at    least       one space.\n' +
'  Further,      allow       for   each   word       in         a column to be either left \n' +
'justified,      right justified\n' +
'        or     center justified within    its  column.';

const leftAligned = 'Given      a          text      file   of     many     lines    \n' +
'where      fields     within    a      line   \n' +
'are        delineated by        a      single "dollar" character\n' +
'write      a          program  \n' +
'that       aligns     each      column of     fields   \n' +
'by         ensuring   that      words  in     each     \n' +
'column     are        separated by     at     least    one       space.\n' +
'Further,   allow      for       each   word   in       a         column to be either left \n' +
'justified, right      justified\n' +
'or         center     justified within its    column. ';

const centerAligned = '  Given        a        text     file    of     many     lines  \n' +
'  where      fields    within     a     line  \n' +
'   are     delineated    by       a    single \"dollar\" character\n' +
'  write        a       program \n' +
'   that      aligns     each    column   of    fields  \n' +
'    by      ensuring    that    words    in     each   \n' +
'  column      are     separated   by     at    least      one    space.\n' +
' Further,    allow       for     each   word     in        a     column to be either left \n' +
'justified,   right    justified\n' +
'    or       center   justified within  its   column. ';
```

</div>

</section>

## Solution
<section id='solution'>


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

String.prototype.repeat = function (n) { return new Array(1 + parseInt(n)).join(this); };

function formatText(input, justification) {
  let x, y, max, cols = 0, diff, left, right;
  for (x = 0; x < input.length; x++) {
    input[x] = input[x].split('$');
    if (input[x].length > cols) {
      cols = input[x].length;
    }
  }
  for (x = 0; x < cols; x++) {
    max = 0;
    for (y = 0; y < input.length; y++) {
      if (input[y][x] && max < input[y][x].length) {
        max = input[y][x].length;
      }
    }
    for (y = 0; y < input.length; y++) {
      if (input[y][x]) {
        diff = (max - input[y][x].length) / 2;
        left = ' '.repeat(Math.floor(diff));
        right = ' '.repeat(Math.ceil(diff));
        if (justification === 'left') {
          right += left; left = '';
        }
        if (justification === 'right') {
          left += right; right = '';
        }
        input[y][x] = left + input[y][x] + right;
      }
    }
  }
  for (x = 0; x < input.length; x++) {
    input[x] = input[x].join(' ');
  }
  input = input.join('\n');
  return input;
}

```

</section>
