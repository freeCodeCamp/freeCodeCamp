---
id: 56533eb9ac21ba0edf2244b6
title: Керуючі послідовності у рядках
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

Лапки – не єдині символи, що можуть бути <dfn>екрановані</dfn> в рядку. Екрановані символи дозволяють використовувати символи, які інакше неможливо використати.

<table class='table table-striped'><thead><tr><th>Код</th><th>Вивід</th></tr></thead><tbody><tr><td><code>\'</code></td><td>одинарні лапки</td></tr><tr><td><code>\"</code></td><td>подвійні лапки</td></tr><tr><td><code>\\</code></td><td>зворотна коса риска</td></tr><tr><td><code>\n</code></td><td>новий рядок</td></tr><tr><td><code>\t</code></td><td>табуляція</td></tr><tr><td><code>\r</code></td><td>повернення каретки</td></tr><tr><td><code>\b</code></td><td>границі слова</td></tr><tr><td><code>\f</code></td><td>перевід сторінки</td></tr></tbody></table>

*Зверніть увагу, що сама зворотня коса риска повинна бути екранована для того, щоб вона відображалась.*

# --instructions--

Присвойте наступні 3 рядки тексту до єдиної змінної `myStr`, використовуючи екрановану послідовність.

<pre>
FirstLine
    \SecondLine
ThirdLine
</pre>

Ви повинні використати керуючі послідовності, щоб правильно встановити спеціальні символи. Ви також повинні дотримуватись інтервалу, як показано вище, без пробілів між керуючими послідовностями або словами.

**Примітка:** відступ для `SecondLine` досягається за допомогою символу табуляції, а не пробілів.

# --hints--

`myStr` не повинна містити пробілів

```js
assert(!/ /.test(myStr));
```

`myStr` повинна містити рядки `FirstLine`, `SecondLine` та `ThirdLine` (пам'ятайте про регістр)

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

Після `FirstLine` повинен бути символ нового рядка `\n`

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` повинна містити символ табуляції `\t`, який йде після символу нового рядка

```js
assert(/\n\t/.test(myStr));
```

Перед `SecondLine` повинен бути символ зворотної косої риски `\`

```js
assert(/\\SecondLine/.test(myStr));
```

Між `SecondLine` та `ThirdLine` повинен бути символ нового рядка

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` повинна містити лише символи, вказані в інструкціях

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --seed--

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```
