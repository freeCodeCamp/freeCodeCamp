---
id: 594810f028c0303b75339ad0
title: Alinhar colunas
challengeType: 1
forumTopicId: 302224
dashedName: align-columns
---

# --description--

Dado um array de muitas linhas, onde os campos dentro de uma linha são delineados por um único caractere `$`, escreva um programa que alinha cada coluna de campos, garantindo que as palavras em cada coluna estejam separadas por pelo menos um espaço. Além disso, permita que cada palavra em uma coluna seja deixada justificada à esquerda, justificada à direita ou justificada ao centro em sua coluna.

# --instructions--

Use o texto a seguir para testar seus programas:

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

**Observe que:**

- As linhas de textos de entrada de exemplo podem, ou não, ter caracteres de dólar à frente.
- Todas as colunas devem compartilhar o mesmo alinhamento.
- Caracteres de espaço consecutivos adjacentes produzidos ao final das linhas são insignificantes para os propósitos da tarefa.
- O texto de saída será visto em uma fonte monoespaçada em um editor de texto simples ou em um terminal básico. As linhas nele devem ser unidas usando o caractere de nova linha (`\n`).
- O espaço mínimo entre colunas deve ser calculado a partir do texto e não inserido no código de antemão.
- Não é um requisito adicionar caracteres separados entre ou em torno das colunas.

Por exemplo, uma das linhas do `testText`, após justificar à direita, à esquerda e ao centro, respectivamente, será:

```js
'    column        are separated     by     at    least       one space.\n'
'column     are        separated by     at     least    one       space.\n'
'  column      are     separated   by     at    least      one    space.\n'
```

# --hints--

`formatText` deve ser uma função.

```js
assert(typeof formatText === 'function');
```

`formatText(testText, 'right')` deve produzir texto com colunas justificadas à direita.

```js
assert.strictEqual(formatText(_testText, 'right'), rightAligned);
```

`formatText(testText, 'left')` deve produzir texto com colunas justificadas à esquerda.

```js
assert.strictEqual(formatText(_testText, 'left'), leftAligned);
```

`formatText(testText, 'center')` deve produzir texto com colunas justificadas ao centro.

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
