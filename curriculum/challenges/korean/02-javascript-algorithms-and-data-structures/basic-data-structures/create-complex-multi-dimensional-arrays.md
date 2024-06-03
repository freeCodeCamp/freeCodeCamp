---
id: 587d7b7b367417b2b2512b16
title: 복잡한 다차원 배열 만들기
challengeType: 1
forumTopicId: 301159
dashedName: create-complex-multi-dimensional-arrays
---

# --description--

멋져요! 이제 배열에 관해 많은 것을 배웠습니다! 이것은 꽤 높은 수준의 개요였습니다. 배열을 사용하는 데 배워야 할 더 많은 내용이 있고, 이 중 많은 부분은 이후 섹션에서 볼 것입니다. 그러나 <dfn>객체(Objects)</dfn>를 살펴보기 전에 배열이 이전 도전에서 봐왔던 것보다 어떻게 조금 더 복잡해질 수 있는지 한 번 더 보도록 하겠습니다.

데이터 구조로서 배열의 강력한 기능 중 하나는 배열이 다른 배열을 포함하거나 또는 완전히 다른 배열들로만 구성될 수 있다는 것입니다. 우리는 이전 도전에서 배열이 포함된 배열을 보았지만, 그것은 꽤 간단한 것이었습니다. 그러나 배열은 다른 배열을 포함하거나 각자 자체의 임의의 깊이를 가진 무한한 깊이의 배열을 포함할 수 있습니다. 이런 식으로 배열은 아주 빠르게 <dfn>다차원</dfn> 또는 중첩된 배열이라고도 하는 매우 복잡한 데이터 구조가 될 수 있습니다. 다음 예를 고려해 보겠습니다.

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

`deep` 배열은 2단계로 중첩되어 있습니다. `deeper` 배열은 3단계로 중첩되어 있습니다. `deepest` 배열은 4단계이며, `deepest-est?`는 5단계입니다.

이 예제는 복잡해 보일 수 있지만, 이 정도의 복잡성은 대량의 데이터를 처리할 때 충분히 일반적으로 볼 수 있습니다. 그러나 여전히 이 복잡한 배열의 가장 깊은 수준에 대괄호 표기법을 사용하여 매우 쉽게 접근할 수 있습니다.

```js
console.log(nestedArray[2][1][0][0][0]);
```

이것은 문자열 `deepest-est?`을 출력합니다. 이제 해당 데이터가 어디에 있는지 알았으므로 필요한 경우 재설정할 수 있습니다.

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
```

이제 `deeper still`을 출력합니다.

# --instructions--

우리는 변수 `myNestedArray`를 정의했고, 이 변수에 배열을 할당했습니다. `myNestedArray`를 수정하여 데이터 요소로 <dfn>문자열</dfn>, <dfn>숫자</dfn>, 및 <dfn>불리언</dfn>의 조합을 사용하여 깊이가 정확히 다섯 단계인지 확인하십시오 (기억하세요, 가장 바깥쪽 배열은 1단계입니다). 세 번째 수준 어딘가에 문자열 `deep`을 포함하고, 네 번째 수준에 문자열 `deeper`을 포함하며, 다섯 번째 수준에 문자열 `deepest`을 포함하십시오.

# --hints--

`myNestedArray`는 데이터 요소로 숫자, 불리언, 문자열만 포함해야 합니다.

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

`myNestedArray`는 정확히 5단계의 깊이를 가져야 합니다.

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

`myNestedArray`는 3단계까지 중첩된 배열에서 문자열 `deep`이 정확히 한 번 포함되어야 합니다.

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

`myNestedArray`는 4단계까지 중첩된 배열에서 문자열 `deeper`가 정확히 한 번 포함되어야 합니다.

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

`myNestedArray`는 5단계까지 중첩된 배열에서 문자열 `deepest`가 정확히 한 번 포함되어야 합니다.

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
