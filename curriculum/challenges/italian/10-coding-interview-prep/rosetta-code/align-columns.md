---
id: 594810f028c0303b75339ad0
title: Allineare colonne
challengeType: 1
forumTopicId: 302224
dashedName: align-columns
---

# --description--

Dato un array di molte righe, dove campi in una singola linea sono delimitati da un singolo carattere `$`, scrivi un programma che allinea ogni colonna di campi assicurandoti che le parole in ogni colonna sono separate da almeno uno spazio. In più, permetti ad ogni parola in una colonna di essere o allineata a destra, o allineata a sinistra, o allineata al centro nella sua colonna.

# --instructions--

Usa il seguente testo per testare i tuoi programmi:

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

**Nota che:**

- Le righe di testo di esempio possono avere o no caratteri di dollaro finali.
- Tutte le colonne dovrebbero condividere lo stesso allineamento.
- I caratteri spazio consecutivi prodotti adiacenti alla fine delle linee sono insignificanti ai fini del compito.
- Il testo di output sarà visualizzato in un carattere mono-spaziato su un editor di testo semplice o un terminale base. Le righe in esso dovrebbero essere unite utilizzando un carattere nuova riga (`\n`).
- Lo spazio minimo tra le colonne dovrebbe essere calcolato dal testo e non codificato.
- Non è un requisito aggiungere caratteri di separazione tra colonne o intorno a colonne.

Ad esempio, una delle righe del `testText`, dopo aver giustificato rispettivamente a destra, sinistra, e centro:

```js
'    column        are separated     by     at    least       one space.\n'
'column     are        separated by     at     least    one       space.\n'
'  column      are     separated   by     at    least      one    space.\n'
```

# --hints--

`formatText` dovrebbe essere una funzione.

```js
assert(typeof formatText === 'function');
```

`formatText(testText, 'right')` dovrebbe produrre testo con le colonne allineate a destra.

```js
assert.strictEqual(formatText(_testText, 'right'), rightAligned);
```

`formatText(testText, 'left')` dovrebbe produrre testo con le colonne allineate a sinistra.

```js
assert.strictEqual(formatText(_testText, 'left'), leftAligned);
```

`formatText(testText, 'center')` dovrebbe produrre testo con le colonne allineate al centro.

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
