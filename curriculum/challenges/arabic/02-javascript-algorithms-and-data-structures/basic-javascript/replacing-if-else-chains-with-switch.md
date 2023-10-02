---
id: 56533eb9ac21ba0edf2244e0
title: استبدال عبارات if/else المتسلسلة بعبارة switch
challengeType: 1
videoUrl: 'https://scrimba.com/c/c3JE8fy'
forumTopicId: 18266
dashedName: replacing-if-else-chains-with-switch
---

# --description--

إذا كان لديك العديد من الخيارات التي يجب الاختيار بينها، عبارة `switch` قد تكون أسهل في الكتابة من سلسلة طويلة من عبارات `if`/`else if`. التالي:

```js
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```

يمكن استبداله بما يلي:

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

قم بتغيير سلسلة `if`/`else if` إلى `switch`.

# --hints--

لا يجب عليك استخدام أي `else` في أي مكان في المحرر

```js
assert(!/else/g.test(code));
```

لا يجب عليك استخدام أي `if` في أي مكان في المحرر

```js
assert(!/if/g.test(code));
```

يجب أن يكون لديك على الأقل ٤ عبارات `break`

```js
assert(code.match(/break/g).length >= 4);
```

`chainToSwitch("bob")` should return the string `Marley`

```js
assert(chainToSwitch('bob') === 'Marley');
```

`chainToSwitch(42)` should return the string `The Answer`

```js
assert(chainToSwitch(42) === 'The Answer');
```

`chainToSwitch(1)` should return the string `There is no #1`

```js
assert(chainToSwitch(1) === 'There is no #1');
```

`chainToSwitch(99)` should return the string `Missed me by this much!`

```js
assert(chainToSwitch(99) === 'Missed me by this much!');
```

`chainToSwitch(7)` should return the string `Ate Nine`

```js
assert(chainToSwitch(7) === 'Ate Nine');
```

`chainToSwitch("John")` should return `""` (empty string)

```js
assert(chainToSwitch('John') === '');
```

`chainToSwitch(156)` should return `""` (empty string)

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
