---
id: 587d7dba367417b2b2512ba9
title: Позитивне і негативне передбачення
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

<dfn>Lookaheads</dfn> - це шаблони, які вказують JavaScript заглянути у ваш рядок заздалегідь, щоб перевірити наявність шаблонів далі. Це може бути корисно при пошуку декількох шаблонів на одному рядку.

Існує два типи виглядів: <dfn>позитивний огляд</dfn> і <dfn>негативний огляд</dfn>.

Позитивне передбачення шукатиме, щоб переконатися, що елемент у шаблоні пошуку є, але насправді не відповідатиме йому. Позитивне передбачення використовується як `(?=...)`, де `...` необхідна частина, яка не збігається.

З іншого боку, негативне передбачення буде стежити за тим, щоб елемент в зразку пошуку був відсутній. Негативний огляд використовується як `(?!...)`, де `...` необхідний шаблон, який не збігається. Решта шаблону повертається, якщо немає негативного передбачення.

Lookaheads є трохи заплутаними, але деякі приклади допоможуть вам в цьому.

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

У результаті використання обох `match`цих викликів ви отримаєте `["q"]`.

Більш практичне використання передбачень - перевірка двох або більше шаблонів в одному рядку. Ось (примітивно) проста перевірка пароля, яка шукає від З до 6 символів і принаймні хоча б одне число:

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

Для розпізнавання паролів, що більші за 5 символів використовуйте lookaheads у `pwRegex` для пошуку паролів, більших за 5 символів і має дві послідовні цифри.

# --hints--

Ваш регулярний вираз має використовувати два додатних `lookaheads`.

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

Ваш регулярний вираз не повинен збігатися з рядком `astronaut`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('astronaut'));
```

Ваш регулярний вираз не повинен збігатися з рядком `banan1`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('banan1'));
```

Ваш регулярний вираз повинен збігатися з рядком `bana12`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('bana12'));
```

Ваш регулярний вираз повинен збігатися з рядком `abc123`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('abc123'));
```

Ваш регулярний вираз не повинен збігатися з рядком `12345`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('12345'));
```

Ваш регулярний вираз повинен збігатися з рядком `8pass99`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('8pass99'));
```

Ваш регулярний вираз не повинен збігатися з рядком `1a2bcde`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('1a2bcde'));
```

Ваш регулярний вираз не повинен збігатися з рядком `astr1on11aut`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('astr1on11aut'));
```

# --seed--

## --seed-contents--

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
```

# --solutions--

```js
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
```
