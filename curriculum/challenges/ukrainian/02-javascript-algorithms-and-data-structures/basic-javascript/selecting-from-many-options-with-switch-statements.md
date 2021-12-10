---
id: 56533eb9ac21ba0edf2244dd
title: Вибір з багатьох опцій за допомогою перемикачів
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
dashedName: selecting-from-many-options-with-switch-statements
---

# --description--

Якщо у вас є багато опцій для вибору, використовуйте команду <dfn>switch</dfn>. `switch` тести на значення і може мати багато <dfn> випадків </dfn> інструкцій, які визначають різні значення. Інструкції виконуються від першого узгодженого значення `case<code> до тих пір, поки <code>break<code> не відбудиться.</p>

<p spaces-before="0">Ось наводиться приклад інструкції <code>switch`:

```js
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

`case` значень перевіряється абсолютною рівністю (`===`). `break` пропонує JavaScript припинити виконання інструкцій. Якщо `break` пропущений, тоді наступна команда буде виконуватись.

# --instructions--

Напишіть команду switch, щоб встановити `answer` за наступних умов:  
`1` - `alpha`  
`2` - `beta`  
`3` - `gamma`  
`4` - `delta`

# --hints--

`caseInSwitch(1)` повинно відповідати значенню рядка `alpha`

```js
assert(caseInSwitch(1) === 'alpha');
```

`caseInSwitch(2)` повинно відповідати значенню рядка `beta`

```js
assert(caseInSwitch(2) === 'beta');
```

`caseInSwitch(3)` повинно відповідати значенню рядка `gamma`

```js
assert(caseInSwitch(3) === 'gamma');
```

`caseInSwitch(4)` повинно відповідати значенню рядка `delta`

```js
assert(caseInSwitch(4) === 'delta');
```

Не варто використовувати `if` або `else` команди

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

  switch(val) {
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
