---
id: 56533eb9ac21ba0edf2244dd
title: Вибір із багатьох варіантів за допомогою інструкцій switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
dashedName: selecting-from-many-options-with-switch-statements
---

# --description--

Якщо ви маєте багато варіантів для вибору, використовуйте інструкцію <dfn>switch</dfn>. Інструкція `switch` тестує значення та може мати багато інструкцій <dfn>case</dfn>, які визначають можливі значення. Інструкції виконуються від першого відповідного значення `case` до тих пір, поки не зіткнуться із `break`.

Ось приклад інструкції `switch`:

```js
switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
```

Значення `case` перевіряються за допомогою строгої рівності (`===`). `break` вказує JavaScript зупинити запущені інструкції. Якщо пропустити `break`, виконується наступна інструкція.

# --instructions--

Напишіть інструкцію switch, яка перевіряє `val` та встановлює `answer` для наступних умов:  
`1` - `alpha`  
`2` - `beta`  
`3` - `gamma`  
`4` - `delta`

# --hints--

`caseInSwitch(1)` повинна мати значення рядка `alpha`

```js
assert(caseInSwitch(1) === 'alpha');
```

`caseInSwitch(2)` повинна мати значення рядка `beta`

```js
assert(caseInSwitch(2) === 'beta');
```

`caseInSwitch(3)` повинна мати значення рядка `gamma`

```js
assert(caseInSwitch(3) === 'gamma');
```

`caseInSwitch(4)` повинна мати значення рядка `delta`

```js
assert(caseInSwitch(4) === 'delta');
```

Ви не повинні використовувати інструкції `if` чи `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

Ви повинні мати принаймні 3 інструкції `break`

```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

caseInSwitch(1);
```

# --solutions--

```js
function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  return answer;
}
```
