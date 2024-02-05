---
id: 594810f028c0303b75339ad0
title: Spalten ausrichten
challengeType: 1
forumTopicId: 302224
dashedName: align-columns
---

# --description--

Given an array of many lines, where fields within a line are delineated by a single `$` character, write a program that aligns each column of fields by ensuring that words in each column are separated by at least one space. Further, allow for each word in a column to be either left justified, right justified, or center justified within its column.

# --instructions--

Verwende den folgenden Text, um deine Programme zu testen:

```js
const testText = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];
```

**Beachte das:**

- The example input texts lines may, or may not, have trailing dollar characters.
- Alle Spalten sollten die gleiche Ausrichtung haben.
- Nacheinander auftretende Leerzeichen am Zeilenende sind für die Aufgabenstellung unerheblich.
- Der Ausgabetext wird in einem einfachen Texteditor oder einem einfachen Terminal in einer einfarbigen Schrift angezeigt. Die Zeilen darin sollten mit einem Zeilenumbruchzeichen (`\n`) verbunden werden.
- Der Mindestabstand zwischen den Spalten sollte aus dem Text errechnet und nicht fest kodiert werden.
- Es ist nicht erforderlich, Trennzeichen zwischen oder um Spalten herum einzufügen.

Zum Beispiel eine der Zeilen aus dem `testText`, nachdem sie rechts, links und mittig ausgerichtet wurde:

```js
'    column        are separated     by     at    least       one space.\n'
'column     are        separated by     at     least    one       space.\n'
'  column      are     separated   by     at    least      one    space.\n'
```

# --hints--

`formatText` sollte eine Funktion sein.

```js
assert(typeof formatText === 'function');
```

`formatText(testText, 'right')` sollte Text mit rechtsbündigen Spalten erzeugen.

```js
assert.strictEqual(formatText(_testText, 'right'), rightAligned);
```

`formatText(testText, 'left')` sollte Text mit linksbündigen Spalten erzeugen.

```js
assert.strictEqual(formatText(_testText, 'left'), leftAligned);
```

`formatText(testText, 'center')` sollte einen Text erzeugen, der spaltenweise in der Mitte ausgerichtet ist.

```js
assert.strictEqual(formatText(_testText, 'center'), centerAligned);
```

# --seed--

## --after-user-code--

```js
const _testText = [
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

## --seed-contents--

```js
function formatText(input, justification) {

}

const testText = [
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
```

# --solutions--

```js
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
