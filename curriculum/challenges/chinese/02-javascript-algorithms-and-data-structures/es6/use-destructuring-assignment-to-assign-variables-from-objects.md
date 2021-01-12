---
id: 587d7b89367417b2b2512b49
title: 使用解构赋值从对象中分配变量
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

可以在解构的属性后添加冒号和新的变量名来给解构的值赋予一个新的变量名。

还是以上个例子的对象来举例：

```js
const user = { name: 'John Doe', age: 34 };
```

这是指定新的变量名的例子：

```js
const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34
```

获取到了 `user.name` 的值并赋值给名为 `userName` 的变量。

# --instructions--

使用解构赋值语句替换两个赋值语句。确保 `HIGH_TEMPERATURES` 的 `today` 和 `tomorrow` 属性赋值给 `highToday` 和 `highTomorrow`。

# --hints--

应该移除 ES5 赋值语句。

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

应该使用解构赋值语句创建  `highToday` 变量。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

应该使用解构赋值语句创建  `highTomorrow` 变量。

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
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
