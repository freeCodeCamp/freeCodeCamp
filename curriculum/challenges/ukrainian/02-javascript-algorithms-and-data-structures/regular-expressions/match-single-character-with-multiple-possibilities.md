---
id: 587d7db5367417b2b2512b95
title: Встановлення відповідності одного символу з кількома можливостями
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

Ви вивчили як використовувати літеральні шаблони (`/literal/`) і шаблон спеціального символу (`/./`). Це — крайнощі регулярних виразів, де одні мають точні збіги, а інші — збігаються з усім. Є варіанти, які є балансом між двома крайнощами.

Ви можете знайти літерний шаблон з деякою гнучкістю за допомогою <dfn>character classes</dfn>. Класи символів дозволяють визначити групу символів, які ви хочете зіставити, розмістивши їх у квадратних (`[` і `]`) дужках.

Наприклад, ви хочете зіставити `bag`, `big`, і `bug` але не `bog`. Щоб зробити це, ви можете створити регулярний вираз `/b[aiu]g/`. `[aiu]` - це клас символів, який буде співпадати лише з символами `a`, `i`, або `u`.

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```

По черзі чотири виклики `match` повернуть значення `["big"]`, `["bag"]`, `["bug"]`, та `null`.

# --instructions--

Використайте клас символів голосних (`a`, `e`, `i`, `o`, `u`) у вашому регулярному виразі `vowelRegex`, щоб знайти усі голосні в рядку `quoteSample`.

**Примітка:** не забудьте вказати голосні як верхнього, так і нижнього регістру.

# --hints--

Ви повинні знайти всі 25 голосних.

```js
assert(result.length == 25);
```

Ваш регулярний вираз `vowelRegex` повинен використовувати клас символів.

```js
assert(/\[.*\]/.test(vowelRegex.source));
```

Ваш регулярний вираз `vowelRegex` повинен використовувати глобальний прапорець.

```js
assert(vowelRegex.flags.match(/g/).length == 1);
```

Ваш регулярний вираз `vowelRegex` повинен використовувати прапорець без урахування регістру.

```js
assert(vowelRegex.flags.match(/i/).length == 1);
```

Ваш регулярний вираз не повинен збігатися з будь-якими приголосними.

```js
assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()));
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```
