---
id: 56533eb9ac21ba0edf2244b5
title: Порятунок цитат у рядках
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
dashedName: escaping-literal-quotes-in-strings
---

# --description--

Коли ви визначаєте рядок, він повинен починатися та закінчуватися одинарними або подвійними лапками. Що робити, якщо всередині рядка потрібно написати цитату в `"` чи `'`?

У JavaScript можна <dfn>уникнути</dfn> непотрібного завершення рядка, написавши <dfn>зворотну косу риску</dfn> (`\`) на початку цитати.

```js
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

Це повідомляє JavaScript про те, що цитата не є кінцем рядка, а повинна з’явитися всередині рядка. Якщо ви надрукуєте це на консолі, то отримаєте:

```js
Alan said, "Peter is learning JavaScript".
```

# --instructions--

Використайте <dfn>зворотні косі риски</dfn>, щоб присвоїти рядок до змінної `myStr` та при виводі на консоль ви бачили наступне:

```js
I am a "double quoted" string inside "double quotes".
```

# --hints--

Ви повинні використати дві подвійні лапки (`"`) та чотири екрановані подвійні лапки (`\"`).

```js
assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
```

Змінна `myStr` повинна містити рядок `I am a "double quoted" string inside "double quotes".`

```js
assert(/I am a "double quoted" string inside "double quotes(\."|"\.)$/.test(myStr));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```
