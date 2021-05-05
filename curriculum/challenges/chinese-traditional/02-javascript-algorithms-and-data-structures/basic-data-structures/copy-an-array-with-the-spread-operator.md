---
id: 587d7b7b367417b2b2512b13
title: 使用展開運算符複製數組
challengeType: 1
forumTopicId: 301157
dashedName: copy-an-array-with-the-spread-operator
---

# --description--

`slice()` 可以讓我們從一個數組中選擇一些元素來複制到新數組中，而 ES6 中又引入了一個簡潔且可讀性強的語法：展開運算符（<dfn>spread operator</dfn>），它能讓我們方便地複製數組中的*所有*元素。 展開語法寫出來是這樣：`...`

我們可以用展開運算符來複制數組：

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```

`thatArray` 等於 `[true, true, undefined, false, null]`。 `thisArray` 保持不變， `thatArray` 包含與 `thisArray` 相同的元素。

# --instructions--

我們已經定義了一個 `copyMachine` 函數，它接受 `arr`（一個數組）和 `num`（一個數字）作爲輸入參數。 該函數需要返回一個由 `num` 個 `arr` 組成的新的二維數組。 同時，我們寫好了大致的流程，只是細節實現還沒有寫完。 請修改這個函數，使用展開語法，使該函數能正常工作（提示：我們已經學到過的一個方法很適合用在這裏）！

# --hints--

`copyMachine([true, false, true], 2)` 應返回 `[[true, false, true], [true, false, true]]`。

```js
assert.deepEqual(copyMachine([true, false, true], 2), [
  [true, false, true],
  [true, false, true]
]);
```

`copyMachine([1, 2, 3], 5)` 應返回 `[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]`。

```js
assert.deepEqual(copyMachine([1, 2, 3], 5), [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]);
```

`copyMachine([true, true, null], 1)` 應返回 `[[true, true, null]]`。

```js
assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
```

`copyMachine(["it works"], 3)` 應返回 `[["it works"], ["it works"], ["it works"]]`。

```js
assert.deepEqual(copyMachine(['it works'], 3), [
  ['it works'],
  ['it works'],
  ['it works']
]);
```

`copyMachine` 函數中應對 `arr` 使用展開運算符（`spread operator`）。

```js
assert(code.match(/\.\.\.arr/));
```

# --seed--

## --seed-contents--

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

# --solutions--

```js
function copyMachine(arr,num){
    let newArr=[];
    while(num >=1){
    newArr.push([...arr]);
    num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
```
