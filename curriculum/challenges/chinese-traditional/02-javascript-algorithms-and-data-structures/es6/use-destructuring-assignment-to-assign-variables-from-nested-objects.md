---
id: 587d7b89367417b2b2512b4a
title: 使用解構賦值從嵌套對象中分配變量
challengeType: 1
forumTopicId: 301214
dashedName: use-destructuring-assignment-to-assign-variables-from-nested-objects
---

# --description--

你可以使用前兩節課程中相同的原則來解構嵌套對象中的值。

使用與前面的例子中類似的對象：

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

這是解構對象的屬性值賦值給具有相同名字的變量：

```js
const { johnDoe: { age, email }} = user;
```

這是將對象的屬性值賦值給具有不同名字的變量：

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

將兩個賦值語句替換成等價的解構賦值。 `lowToday` 和 `highToday` 應該爲 `LOCAL_FORECAST` 中 `today.low` 和 `today.high` 的值。

# --hints--

不能使用 ES5 的賦值語句。

```js
assert(
  !code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) &&
    !code.match(/highToday = LOCAL_FORECAST\.today.high/g)
);
```

應該使用解構創建 `lowToday` 變量。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

應該使用解構創建 `highToday` 變量。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday,?\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

`lowToday` 應等於 `64`，`highToday` 應等於 `77`。

```js
assert(lowToday === 64 && highToday === 77);
```

# --seed--

## --seed-contents--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line
```

# --solutions--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
```
