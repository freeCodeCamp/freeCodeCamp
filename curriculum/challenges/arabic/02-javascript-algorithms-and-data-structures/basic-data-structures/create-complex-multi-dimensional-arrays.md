---
id: 587d7b7b367417b2b2512b16
title: إنشاء القوائم معقدة متعددة الأبعاد (multi-dimensional arrays)
challengeType: 1
forumTopicId: 301159
dashedName: create-complex-multi-dimensional-arrays
---

# --description--

رائع! لقد تعلمت للتو طناً من المعلومات عن القوائم (arrays)! لقد كانت هذه النِّظْرة عامة عالية المستوى إلى حد ما، وهناك الكثير لتتعلمه حول العمل مع القوائم، التي سترى الكثير منها في الأقسام اللاحقة. ولكن قبل الانتقال إلى <dfn>كائنات (Objects)</dfn>، دعنا نلقي النِّظْرة أخرى ونرى كيف يمكن أن تصبح القوائم (arrays) أكثر تعقيدًا قليلاً مما رأيناه في التحديات السابقة.

واحدة من أقوى السمات عند التفكير في القوائم كهياكل للبيانات، هو أن القوائم يمكن أن تحتوي، أو حتى إن تكون مكونة بالكامل من قوائم أخرى. ورأيت القوائم التي تحتوي على قوائم في تحديات سابقة، ولكنها بسيطة إلى حد ما. ومع ذلك، فإن القوائم يمكن أن تحتوي على عمق لا حدود له من القوائم التي يمكن أن تحتوي على قوائم أخرى، لكل منها مستويات عشوائية من العمق وما إلى ذلك. بهذه الطريقة، يمكن للقائمة أن تصبح بسرعة هيكل بيانات معقد جداً، يعرف باسم <dfn>عديد الأبعاد (multi-dimensional)</dfn> أو قائمة متداخلة (nested array). انظر إلى المثال التالي:

```js
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
```

قائمة `deep` متداخلة على مستويين عميقين. قوائم `deeper` بعمق 3 مستويات. قوائم `deepest` هي 4 مستويات، و `deepest-est?` هي 5 مستويات.

وفي حين أن هذا المثال قد يبدو متشابكا فإن هذا المستوى من التعقيد ليس مستغربا أو غير عادي عند التعامل مع كميات كبيرة من البيانات. ومع ذلك، لا يزال بإمكاننا الوصول بسهولة إلى أعمق مستويات قائمة بهذا التعقيد علامات الأقواس:

```js
console.log(nestedArray[2][1][0][0][0]);
```

يسجل هذا المقطع `deepest-est?`. والآن بعد أن عرفنا أين توجد هذه القطعة من البيانات، يمكننا إعادة تعيينها إذا كنا بحاجة إلى ذلك:

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
```

الآن يطبع `deeper still`.

# --instructions--

لقد أعلنا متغير `myNestedArray`، مساويا لقائمة. عدل `myNestedArray` باستخدام أي مجموعة من <dfn>مقاطع نصية (strings)</dfn>، و <dfn>أرقام (numbers)</dfn>، و <dfn>حالات (booleans)</dfn> لعناصر البيانات، بحيث يكون لديها على وجه التحديد خمس مستويات من العمق (تذكر، أن القائمة الخارجية هي المستوى 1). في مكان ما على المستوى الثالث ضف المقطع `deep`, وعلى المستوى الرابع ضف المقطع `deeper`, وعلى المستوى الخامس ضف المقطع `deepest`.

# --hints--

`myNestedArray` يجب أن تحتوي فقط على أرقام (numbers) وحالات (booleans) و مقاطع نصية (strings) كعناصر للبيانات

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

يجب أن تحتوي `myNestedArray` على 5 مستويات من العمق بالضبط

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

يجب أن تحتوي `myNestedArray` على عنصر واحد من المقطع نصي `deep` في قائمة بعمق ثلاث مستويات بالضبط

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

يجب أن تحتوي `myNestedArray` على عنصر واحد من المقطع نصي `deeper` في قائمة بعمق اربع مستويات بالضبط

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

يجب أن تحتوي `myNestedArray` على عنصر واحد من المقطع نصي `deepest` في قائمة بعمق خمس مستويات بالضبط

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

# --seed--

## --seed-contents--

```js
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
```

# --solutions--

```js
let myNestedArray = [
  ['unshift', ['deep', ['deeper', ['deepest']]],false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];
```
