---
id: 587d7b8a367417b2b2512b4e
title: 使用模板字面量創建字符串
challengeType: 1
forumTopicId: 301200
dashedName: create-strings-using-template-literals
---

# --description--

模板字符串是 ES6 的另外一項新的功能。 這是一種可以輕鬆構建複雜字符串的方法。

模板字符串可以使用多行字符串和字符串插值功能。

請看以下代碼：

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

控制檯將顯示字符串 `Hello, my name is Zodiac Hasbro!` 和 `I am 56 years old.`。

這裏發生了許多事情。 首先，這個例子使用反引號（`` ` ``），而不是引號（`'` 或者 `"`）將字符串括起來。 其次，注意代碼和輸出中的字符串都是多行的。 不需要在字符串中插入 `\n`。 上面使用的 `${variable}` 語法是一個佔位符。 這樣一來，你將不再需要使用 `+` 運算符來連接字符串。 當需要在字符串裏增加變量的時候，你只需要在變量的外面括上 `${` 和 `}`，並將其放在模板字符串裏就可以了。 同樣，你可以在字符串中包含其他表達式，例如 `${a + b}`。 這個新的方式使你可以更靈活地創建複雜的字符串。

# --instructions--

使用模板字符串的反引號的語法創建一個包含條目（`li`）字符串的數組。 每個條目應該是 `result` 對象 `failure` 屬性的數組內的元素，並具有 `class` 屬性，值爲 `text-warning`。 `makeList` 函數應該返回列表項字符串的數組。

使用遍歷方法（可以是任意形式的循環）輸出指定值（如下）。

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

# --hints--

`failuresList` 應該是一個包含了 `result failure` 信息的數組。

```js
assert(
  typeof makeList(result.failure) === 'object' && failuresList.length === 3
);
```

`failuresList` 應該輸出指定的值。

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

應使用模板字符串和表達式內插。

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

應該使用遍歷。

```js
(getUserInput) =>
  assert(getUserInput('index').match(/for|map|reduce|forEach|while/));
```

# --seed--

## --seed-contents--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

# --solutions--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  return arr.map(val => `<li class="text-warning">${val}</li>`);
}

const failuresList = makeList(result.failure);
```
