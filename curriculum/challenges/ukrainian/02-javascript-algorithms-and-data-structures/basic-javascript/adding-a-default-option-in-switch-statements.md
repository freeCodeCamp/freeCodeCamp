---
id: 56533eb9ac21ba0edf2244de
title: Додавання опції за замовчуванням до інструкції switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

В інструкції `switch` ви не завжди зможете вказати усі можливі значення, як інструкції `case`. Натомість ви можете додати інструкцію `default`, яка виконуватиметься, якщо не знайдено відповідних інструкцій `case`. Вважайте це кінцевою інструкцією `else` у ланцюжку `if/else`.

Інструкція `default` повинна бути вкінці.

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

# --instructions--

Напишіть інструкцію switch, щоб становити `answer` для наступних інструкцій:  
`a` - `apple`  
`b` - `bird`  
`c` - `cat`  
`default` - `stuff`

# --hints--

`switchOfStuff("a")` має повертати рядок `apple`

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")` має повертати рядок `bird`

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")` має повертати рядок `cat`

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")` має повертати рядок `stuff`

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff(4)` має повертати рядок `stuff`

```js
assert(switchOfStuff(4) === 'stuff');
```

Ви не повинні використовувати інструкції `if` чи `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Ви повинні використати інструкцію `default`

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

Ви повинні мати принаймні 3 інструкції `break`

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
```

# --solutions--

```js
function switchOfStuff(val) {
  let answer = "";

  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
```
