---
id: 5a90373638fddaf9a66b5d39
title: 使用 grid-row 来控制空间大小
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c9WBLU4'
forumTopicId: 301137
---

# --description--

和设置一个网格项占用多列类似，你也可以设置它占用多行。你可以使用 `grid-row` 属性来定义一个网格项开始和结束的水平线。

# --instructions--

请让 class 为 `item5` 的元素占用最后两行。

# --hints--

class 为 `item5` 的元素应具有 `grid-row` 属性。

```js
assert(
  $('style')
    .text()
    .replace(/\s/g, '')
    .match(/\.item5{.*grid-row:.*}/g)
);
```

class 为 `item5` 的元素应具有 `grid-row` 属性，其属性值应将元素设置为占用网格的最后两行。

```js
const rowStart = getComputedStyle($('.item5')[0]).gridRowStart;
const rowEnd = getComputedStyle($('.item5')[0]).gridRowEnd;
const result = rowStart.toString() + rowEnd.toString();
const correctResults = [
  '24',
  '2-1',
  '2span 2',
  '2span2',
  'span 2-1',
  '-12',
  'span 2span 2',
  'span 2auto',
  'autospan 2'
];
assert(correctResults.includes(result));
```

# --solutions--

