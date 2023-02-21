---
id: 56533eb9ac21ba0edf2244df
title: Обробка ідентичних параметрів в інструкціях switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
dashedName: multiple-identical-options-in-switch-statements
---

# --description--

Якщо інструкція `break` виключена із `case` інструкції `switch`, наступні інструкції `case` будуть виконуватись доки не зустрінуть `break`. Якщо у вас декілька вводів з одним виводом, ви можете подати їх в інструкції `switch`, ось так:

```js
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

Кейси 1, 2 та 3 матимуть однаковий результат.

# --instructions--

Напишіть інструкції switch, щоб налаштувати `answer` для наступних діапазонів:  
`1-3` - `Low`  
`4-6` - `Mid`  
`7-9` - `High`

**Примітка:** ви повинні мати інструкцію `case` для кожного числа в діапазоні.

# --hints--

`sequentialSizes(1)` має повертати рядок `Low`

```js
assert(sequentialSizes(1) === 'Low');
```

`sequentialSizes(2)` має повертати рядок `Low`

```js
assert(sequentialSizes(2) === 'Low');
```

`sequentialSizes(3)` має повертати рядок `Low`

```js
assert(sequentialSizes(3) === 'Low');
```

`sequentialSizes(4)` має повертати рядок `Mid`

```js
assert(sequentialSizes(4) === 'Mid');
```

`sequentialSizes(5)` має повертати рядок `Mid`

```js
assert(sequentialSizes(5) === 'Mid');
```

`sequentialSizes(6)` має повертати рядок `Mid`

```js
assert(sequentialSizes(6) === 'Mid');
```

`sequentialSizes(7)` має повертати рядок `High`

```js
assert(sequentialSizes(7) === 'High');
```

`sequentialSizes(8)` має повертати рядок `High`

```js
assert(sequentialSizes(8) === 'High');
```

`sequentialSizes(9)` має повертати рядок `High`

```js
assert(sequentialSizes(9) === 'High');
```

Ви не повинні використовувати інструкції `if` або `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Ви повинні мати дев'ять інструкцій `case`

```js
assert(code.match(/case/g).length === 9);
```

# --seed--

## --seed-contents--

```js
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);
```

# --solutions--

```js
function sequentialSizes(val) {
  let answer = "";

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }

  return answer;
}
```
