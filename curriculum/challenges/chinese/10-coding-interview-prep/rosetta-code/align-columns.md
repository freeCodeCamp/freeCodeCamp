---
id: 594810f028c0303b75339ad0
title: 对齐列
challengeType: 5
videoUrl: ''
dashedName: align-columns
---

# --description--

<p>给定一个包含许多行的文本文件，其中一行中的字段由单个<code>$</code>字符描述，编写一个程序，通过确保每列中的单词至少由一个空格分隔来对齐每列字段。此外，允许列中的每个单词在其列中左对齐，右对齐或居中对齐。 </p><p>使用以下文本测试您的程序： </p><pre>的$ $多行给出$ A $文本$文件$
其中$领域内$ A $线$ $
是$由$ A $单个$ '美元' $字符划定$
写$ A $程序
即$对齐$ $场的每个$列$
由$ $确保该$字美元$ $每
列$ $是在$最少$一张价值$空间被分隔$ $。
此外，$允许为$ $ $中的每个字$ $ A $ $列到$为$要么离开$ $
对齐，右$ $有道理
或$ $中心内$有道理$ $其列。
</pre><p>注意： </p>示例输入文本行可以或可以不具有尾随美元字符。所有列应共享相同的对齐方式。为了完成任务，在行尾附近产生的连续空格字符是无关紧要的。输出文本将以纯文本编辑器或基本终端上的单行间隔字体查看。列之间的最小间距应根据文本计算，而不是硬编码。不需要在列之间或列周围添加分隔字符。

# --hints--

`formatText`是一个函数。

```js
assert(typeof formatText === 'function');
```

具有上述输入和“右”对齐的`formatText`应产生以下内容：

```js
assert.strictEqual(formatText(testInput, 'right'), rightAligned);
```

具有上述输入和“左”对齐的`formatText`应产生以下内容：

```js
assert.strictEqual(formatText(testInput, 'left'), leftAligned);
```

具有上述输入和“居中”对齐的`formatText`应产生以下内容：

```js
assert.strictEqual(formatText(testInput, 'center'), centerAligned);
```

# --seed--

## --after-user-code--

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

## --seed-contents--

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

}
```

# --solutions--

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
