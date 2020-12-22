---
id: acda2fb1324d9b0fa741e6b5
title: 确认结束
challengeType: 5
videoUrl: ''
---

# --description--

检查字符串（第一个参数`str` ）是否以给定的目标字符串（第二个参数， `target` ）结束。这个挑战*可以*通过`.endsWith()`中引入的`.endsWith()`方法来解决。但是出于这个挑战的目的，我们希望您使用其中一个JavaScript子字符串方法。如果卡住，请记得使用[Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) 。编写自己的代码。

# --hints--

`confirmEnding("Bastian", "n")`应该返回true。

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation", "on")`应该返回true。

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor", "n")`应返回false。

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")`应该返回false。

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name", "name")`应该返回true。

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame", "same")`应该返回true。

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "pen")`应该返回false。

```js
assert(confirmEnding('Open sesame', 'pen') === false);
```

`confirmEnding("Open sesame", "game")`应该返回false。

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")`应该返回虚假。

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")`应该返回true。

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

不要使用内置方法`.endsWith()`来解决挑战。

```js
assert(!/\.endsWith\(.*?\)\s*?;?/.test(code) && !/\['endsWith'\]/.test(code));
```

# --solutions--

