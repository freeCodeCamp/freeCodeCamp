---
id: 56533eb9ac21ba0edf2244df
title: Кілька ідентичних параметрів у інструкціях перемикання
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBKWCV'
forumTopicId: 18242
dashedName: multiple-identical-options-in-switch-statements
---

# --description--

Якщо команда `break` не включена в `switch` команди `case`, наступна (і) команди `case` буде виконуватись до тих пір поки `break` не буде виконано. Якщо у вас є кілька входів з одним і тим же виходом, ви можете подати їх в `switch` такої команди як ця:

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

Кейси 1,2,3 дадуть один і той же результат.

# --instructions--

Запис інструкції перемикача для установки `answer` для наступних діапазонів:   
`1-3` - `Low`  
`4-6` - `Mid`  
`7-9` - `High`

**Note:** Ви повинні мати `case` для кожного числа в діапазоні.

# --hints--

`sequentialSizes(1)` перетворюється на `Low`

```js
assert(sequentialSizes(1) === 'Low');
```

`sequentialSizes(2)` змінюється на `Low`

```js
assert(sequentialSizes(2) === 'Low');
```

`sequentialSizes(3)` змінюється на `Low`

```js
assert(sequentialSizes(3) === 'Low');
```

`sequentialSizes(4)` перетворюється на `Mid`

```js
assert(sequentialSizes(4) === 'Mid');
```

`sequentialSizes(5)` перетворюється на `Mid`

```js
assert(sequentialSizes(5) === 'Mid');
```

`sequentialSizes(6)` перетворюється на `Mid`

```js
assert(sequentialSizes(6) === 'Mid');
```

`sequentialSizes(7)` перетворюється на `High`

```js
assert(sequentialSizes(7) === 'High');
```

`sequentialSizes(8)` перетворюється на `High`

```js
assert(sequentialSizes(8) === 'High');
```

`sequentialSizes(9)` перетворюється на `High`

```js
assert(sequentialSizes(9) === 'High');
```

Ви не повинні використовувати будь які `if` або `else` команди

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

У вас має бути дев'ять `case` команд

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
