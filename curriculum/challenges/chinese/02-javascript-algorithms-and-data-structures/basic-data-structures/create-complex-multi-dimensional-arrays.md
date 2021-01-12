---
id: 587d7b7b367417b2b2512b16
title: 创建复杂的多维数组
challengeType: 1
forumTopicId: 301159
---

# --description--

很好！你现在已经学到很多关于数组的知识了，但这些只是个开始。我们将在接下来的中挑战中学到更多与数组相关的知识。在继续学习<dfn>对象</dfn>（<dfn>Objects</dfn>）之前，让我们再花一点时间了解下更复杂的数组嵌套。

数组的一个强大的特性是，它可以包含其他数组，甚至完全由其他数组组成。在上一个挑战中，我们已经接触到了包含数组的数组，但它还算是比较简单的。数组中的数组还可以再包含其他数组，即可以嵌套任意多层数组。习惯上，我们称这种数据结构为<dfn>多维（multi-dimensional）数组</dfn>或嵌套（nested）数组。请看如下的示例：

```js
let nestedArray = [ // 顶层，或第 1 层，即最外层数组
  ['deep'], // 数组中的数组，第 2 层
  [
    ['deeper'], ['deeper'] // 第 3 层，元素为嵌套的两个数组
  ],
  [
    [
      ['deepest'], ['deepest'] // 第 4 层，元素为嵌套的两个数组
    ],
    [
      [
        ['deepest-est?'] // 第 5 层，元素为嵌套的一个数组
      ]
    ]
  ]
];
```

虽然这个例子看起来错综复杂，不过，尤其是在处理大量数据的时候，这种数据结构还是经常会用到的。尽管结构复杂，不过我们仍可以通过方括号表示法来访问嵌套得最深的数组：

```js
console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?
```

既然我们知道数据的位置，当然，我们也可以修改它：

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still
```

# --instructions--

我们已经定义了一个叫做 `myNestedArray` 的数组变量。请修改 `myNestedArray`，使用<dfn>字符串（string）</dfn>、<dfn>数字（number）</dfn>或<dfn>布尔值（boolean）</dfn>作为数组的元素，并让 `myNestedArray` 刚好有 5 层（注意，最外层的数组是第 1 层）。同时，请在第 3 层的数组中包含字符串 `'deep'`；在第 4 层的数组中包含字符串 `'deeper'`，在第 5 层的数组中包含字符串 `'deepest'`。

# --hints--

`myNestedArray` 中的数据元素应只包含字符串、数字或者布尔值。

```js
assert.strictEqual(
  (function (arr) {
    let flattened = (function flatten(arr) {
      const flat = [].concat(...arr);
      return flat.some(Array.isArray) ? flatten(flat) : flat;
    })(arr);
    for (let i = 0; i < flattened.length; i++) {
      if (
        typeof flattened[i] !== 'number' &&
        typeof flattened[i] !== 'string' &&
        typeof flattened[i] !== 'boolean'
      ) {
        return false;
      }
    }
    return true;
  })(myNestedArray),
  true
);
```

`myNestedArray` 应刚好包含 5 层嵌套数组。

```js
assert.strictEqual(
  (function (arr) {
    let depth = 0;
    function arrayDepth(array, i, d) {
      if (Array.isArray(array[i])) {
        arrayDepth(array[i], 0, d + 1);
      } else {
        depth = d > depth ? d : depth;
      }
      if (i < array.length) {
        arrayDepth(array, i + 1, d);
      }
    }
    arrayDepth(arr, 0, 0);
    return depth;
  })(myNestedArray),
  4
);
```

`myNestedArray` 中应只有一个字符串 `"deep"`，并且应出现在第 3 层数组中。

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deep').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deep')[0] === 2
);
```

`myNestedArray` 中应只有一个字符串 `"deeper"`，并且应出现在第 4 层数组中。

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deeper').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deeper')[0] === 3
);
```

`myNestedArray` 中应只有一个字符串 `"deepest"`，并且应出现在第 5 层数组中。

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deepest').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deepest')[0] === 4
);
```

# --solutions--

