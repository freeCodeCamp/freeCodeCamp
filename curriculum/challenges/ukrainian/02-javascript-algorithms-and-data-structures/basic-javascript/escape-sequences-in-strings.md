---
id: 56533eb9ac21ba0edf2244b6
title: Екранування послідовностей у рядках
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

Лапки - не єдині символи, що можуть бути <dfn>екрановані</dfn> в рядку. Існує дві причини використовувати екрановані символи:

1.  To allow you to use characters you may not otherwise be able to type out, such as a newline.
2.  Щоб дозволити вам відобразити декілька лапок в рядку без неправильного тлумачення JavaScript того, що ви маєте на увазі.

Ми вивчили це в попередньому завданні.

<table class='table table-striped'><thead><tr><th>Код</th><th>При виведенні буде</th></tr></thead><tbody><tr><td><code>\'</code></td><td>одинарні лапки</td></tr><tr><td><code>\"</code></td><td>подвійні лапки</td></tr><tr><td><code>\\</code></td><td>зворотня коса риска</td></tr><tr><td><code>\n</code></td><td>новий рядок</td></tr><tr><td><code>\t</code></td><td>tab</td></tr><tr><td><code>\r</code></td><td>carriage return</td></tr><tr><td><code>\b</code></td><td>границі слова</td></tr><tr><td><code>\f</code></td><td>розрив сторінки</td></tr></tbody></table>

*Зверніть увагу, що сама зворотня коса риска повинна бути екранована для того, щоб вона відображалась.*

# --instructions--

Задайте наступні 3 рядки тексту в єдину змінну `myStr`, використовуючи екрановану послідовність.

<blockquote>FirstLine<br>    \SecondLine<br>ThirdLine</blockquote>

Щоб правильно встановити спеціальні символи, потрібно використовувати екрановану послідовність. Також потрібно дотримуватись інтервалу, як це виглядає вище, без пробілів між екранованими послідовностями або словами.

**Примітка:** Відступ для `SecondLine` досягається за допомогою символу екранування вкладки, а не пробілів.

# --hints--

`myStr` не повинен містити пробілів

```js
assert(!/ /.test(myStr));
```

`myStr` повинен містити рядки `FirstLine`, `SecondLine` та `ThirdLine` (пам'ятайте про врахування регістру)

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

За `FirstLine` повинен слідувати символ нового рядка `\n`

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` повинен містити символ вкладки `\t`, який слідує за символом нового рядка

```js
assert(/\n\t/.test(myStr));
```

За `SecondLine` повинен слідувати символ зворотної косої риски `\`

```js
assert(/\\SecondLine/.test(myStr));
```

Між `SecondLine` та `ThirdLine` повинен бути символ нового рядка

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` повинен містити лише символи, показані в інструкціях

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
