---
id: 587d7b89367417b2b2512b49
title: 使用解构赋值从对象中分配变量
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

可以给解构的值赋予一个新的变量名， 通过在赋值的时候将新的变量名放在冒号后面来实现。

还是以上个例子的对象来举例：

```js
const user = { name: 'John Doe', age: 34 };
```

这是指定新的变量名的例子：

```js
const { name: userName, age: userAge } = user;
```

你可以这么理解这段代码：获取 `user.name` 的值，将它赋给一个新的变量 `userName`，等等。 `userName` 的值将是字符串 `John Doe`，`userAge` 的值将是数字 `34`。

# --instructions--

使用解构赋值语句替换两个赋值语句。 将 `HIGH_TEMPERATURES` 的 `today` 和 `tomorrow` 的值赋值给 `highToday` 和 `highTomorrow`。

# --hints--

应该移除 ES5 赋值语句。

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

应该使用解构赋值语句创建 `highToday` 变量。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

应该使用解构赋值语句创建 `highTomorrow` 变量。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

`highToday` 应该等于 `77`，`highTomorrow` 应该等于 `80`。

```js
assert(highToday === 77 && highTomorrow === 80);
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

const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```
