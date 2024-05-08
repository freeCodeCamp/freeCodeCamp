---
id: 65e1985e500d930ce8ed90a7
title: Вивчіть змінні та оператори. Запитання D
challengeType: 15
dashedName: learn-variables-and-operators-question-d
---

# --description--

Для назв змінних в JavaScript існує два обмеження:

1. Назва має складатись лише з літер, цифр або символів `$` та `_`.
1. Перший символ не може бути цифрою.

Приклади дійсних назв:

```js
let userName;
let test123;
```

Що цікаво, символ долара `'$'` та знак підкреслення `'_'` також можна використовувати в назві. Це такі ж регулярні символи, як і літери, без особливого значення.

Ці назви є дійсними:

```js
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

console.log($ + _); // 3
```

Приклади неправильних назв змінних:

```js
let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name
```

# --question--

## --text--

Що з переліченого є правильною назвою змінної в JavaScript?

## --answers--

`let 2things;`

---

`let my-name;`

---

`let var!;`

---

`let $myVar;`


## --video-solution--

4
