---
id: 56533eb9ac21ba0edf2244e0
title: Заміна ланцюжків if else на switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
dashedName: replacing-if-else-chains-with-switch
---

# --description--

Якщо ви маєте багато варіантів для вибору, простіше використати інструкцію `switch` замість багатьох ланцюжків `if`/`else if`. Наступне:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

можна замінити на:

```js
switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```

# --instructions--

Змініть ланцюжки інструкцій `if`/`else if` на інструкцію `switch`.

# --hints--

Ви не повинні використовувати інструкцію `else` в редакторі

```js
assert(!/else/g.test(code));
```

Ви не повинні використовувати інструкцію `if` в редакторі

```js
assert(!/if/g.test(code));
```

Ви повинні мати принаймні чотири інструкції `break`

```js
assert(code.match(/break/g).length >= 4);
```

`chainToSwitch("bob")` має повертати рядок `Marley`

```js
assert(chainToSwitch('bob') === 'Marley');
```

`chainToSwitch(42)` має повертати рядок `The Answer`

```js
assert(chainToSwitch(42) === 'The Answer');
```

`chainToSwitch(1)` має повертати рядок `There is no #1`

```js
assert(chainToSwitch(1) === 'There is no #1');
```

`chainToSwitch(99)` має повертати рядок `Missed me by this much!`

```js
assert(chainToSwitch(99) === 'Missed me by this much!');
```

`chainToSwitch(7)` має повертати рядок `Ate Nine`

```js
assert(chainToSwitch(7) === 'Ate Nine');
```

`chainToSwitch("John")` має повертати `""` (порожній рядок)

```js
assert(chainToSwitch('John') === '');
```

`chainToSwitch(156)` має повертати `""` (порожній рядок)

```js
assert(chainToSwitch(156) === '');
```

# --seed--

## --seed-contents--

```js
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
```

# --solutions--

```js
function chainToSwitch(val) {
  let answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}
```
