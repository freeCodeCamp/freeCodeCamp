---
id: 56533eb9ac21ba0edf2244b5
title: Уникнення літературних цитат в рядках
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
dashedName: escaping-literal-quotes-in-strings
---

# --description--

Коли ви зазначаєте рядок, вам потрібно починати і закінчувати його одинарними або подвійними лапками. Що стається, коли ви потребуєте літературну цитату `"` or `'` всередині вашого рядка?

В JavaScript, ви можете <dfn>вийти</dfn> з цитати і розглядати її як кінець рядка лапки, розмістивши <dfn>зворотнього слешу</dfn> (`\`) перед лапкою.

```js
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

Це сигнали для JavaScript про те, що така цитата не є кінцевим рядком, а повинна з'явитися всередині рядка. Тому якщо ви введете це в консолі, то отримаєте:

```js
Alan said, "Peter is learning JavaScript".
```

# --instructions--

Використовуйте <dfn>косі риски</dfn> щоб зазначити для рядка змінну `myStr`, і таким чином ввівши її на консолі, побачите:

```js
I am a "double quoted" string inside "double quotes".
```

# --hints--

Вам слід використовувати дві подвійні лапки (`"`) і чотири подвійні лапки (`\"`).

```js
assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
```

Змінний myStr повинен містити рядок: `I am a "double quoted" string inside "double quotes".`

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
