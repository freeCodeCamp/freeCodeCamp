---
id: 587d7b89367417b2b2512b4a
title: 使用解构赋值从嵌套对象中分配变量
challengeType: 1
forumTopicId: 301214
dashedName: use-destructuring-assignment-to-assign-variables-from-nested-objects
---

# --description--

你可以使用前两节课程中相同的原则来解构嵌套对象中的值。

使用与前面的例子中类似的对象：

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

这是解构对象的属性值赋值给具有相同名字的变量：

```js
const { johnDoe: { age, email }} = user;
```

这是将对象的属性值赋值给具有不同名字的变量：

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

将两个赋值语句替换成等价的解构赋值。 `lowToday` 和 `highToday` 应该为 `LOCAL_FORECAST` 中 `today.low` 和 `today.high` 的值。

# --hints--

不能使用 ES5 的赋值语句。

```js
assert(
  !code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) &&
    !code.match(/highToday = LOCAL_FORECAST\.today.high/g)
);
```

应该使用解构创建 `lowToday` 变量。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

应该使用解构创建 `highToday` 变量。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday,?\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

`lowToday` 应等于 `64`，`highToday` 应等于 `77`。

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
