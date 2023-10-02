---
id: 5cfa550e84205a357704ccb6
title: 使用解構賦值來獲取對象的值
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

<dfn>解構賦值</dfn>是 ES6 引入的新語法，用來從數組和對象中提取值，並優雅地對變量進行賦值。

有如下 ES5 代碼：

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

`name` 的值應該是字符串 `John Doe`， `age` 的值應該是數字 `34`。

下面是使用 ES6 解構賦值語句，實現相同效果：

```js
const { name, age } = user;
```

同樣，`name` 的值應該是字符串 `John Doe`， `age` 的值應該是數字 `34`。

在這裏，自動創建 `name` 和 `age` 變量，並將 `user` 對象相應屬性的值賦值給它們。 這個方法簡潔多了。

你可以從對象中提取儘可能多或很少的值。

# --instructions--

把兩個賦值語句替換成效果相同的解構賦值語句。 `today` 和 `tomorrow` 的值應該還是 `HIGH_TEMPERATURES` 對象中 `today` 和 `tomorrow` 屬性的值。

# --hints--

應該移除 ES5 賦值語句。

```js
assert(
  !code.match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

應該使用解構賦值創建 `today` 變量。

```js
assert(
  code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

應該使用解構賦值創建 `tomorrow` 變量。

```js
assert(
  code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

`today` 應該等於 `77`，`tomorrow` 應該等於 `80`。

```js
assert(today === 77 && tomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
```
