---
id: 587d7b89367417b2b2512b4a
title: 使用解构赋值从嵌套对象中分配变量
challengeType: 1
forumTopicId: 301214
---

# --description--

同样，我们可以将 *嵌套的对象*解构到变量中。

请看以下代码：

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

这是解构对象的属性并赋值给相同名字的变量：

```js
const { johnDoe: { age, email }} = user;
```

这是将对象的属性值指定给一个不同的名字：

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

将两个赋值语句替换成等价的解构赋值。`lowToday` 和 `highToday` 应该为 `LOCAL_FORECAST` 中 `today.low` 和 `today.high` 的值。

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
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

应该使用解构创建 `highToday` 变量。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

# --solutions--

