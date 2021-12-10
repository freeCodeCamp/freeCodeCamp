---
id: 56533eb9ac21ba0edf2244de
title: Додавання опції за замовчуванням до команди Switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JvVfg'
forumTopicId: 16653
dashedName: adding-a-default-option-in-switch-statements
---

# --description--

В команді `switch` ви не матимете можливості вказати усі можливі значення, наприклад, як команда `case`. Натомість, ви можете додати команду `default`, яка включатиметься, якщо не знайдено відповідних перемикачів `case`. Вважайте це фінальною командою `else` у ланцюжку `if/else`.

`default` перемикач повинен бути останнім.

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

Напишіть команду switch, щоб встановити `answer` за наступних умов:  
`a` - `apple`  
`b` - `bird`  
`c` - `cat`  
`default` - `stuff`

# --hints--

`switchOfStuff("a")` повинен перетворитися на рядок `apple`

```js
assert(switchOfStuff('a') === 'apple');
```

`switchOfStuff("b")` повинен перетворитися на рядок`bird`

```js
assert(switchOfStuff('b') === 'bird');
```

`switchOfStuff("c")` повинен перетворитися на рядок `cat`

```js
assert(switchOfStuff('c') === 'cat');
```

`switchOfStuff("d")` повинен перетворитися на рядок `stuff`

```js
assert(switchOfStuff('d') === 'stuff');
```

`switchOfStuff(4)` повинен перетворитися на рядок `stuff`

```js
assert(switchOfStuff(4) === 'stuff');
```

Ви не повинні використовувати `if` чи `else` команди

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Вам слід користуватись командою`default`

```js
assert(switchOfStuff('string-to-trigger-default-case') === 'stuff');
```

Потрібно мати щонайменше 3 команди `break`

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
