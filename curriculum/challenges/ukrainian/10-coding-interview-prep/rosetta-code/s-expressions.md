---
id: 59667989bf71cf555dd5d2ff
title: S-вирази
challengeType: 1
forumTopicId: 302303
dashedName: s-expressions
---

# --description--

<a href="https://rosettacode.org/wiki/S-expressions" target="_blank" rel="noopener noreferrer nofollow">S-Expressions</a> are one convenient way to parse and store data.

# --instructions--

Напишіть простий синтаксичний аналізатор для S-виразів, який зможе опрацьовувати рядки та цілі числа в лапках та без них.

Функція має зчитувати один, але конкретний S-вираз з рядка і повертати його (конкретним) масивом.

За межами лапок символи розриву строки та інші пробіли можуть бути проігноровані.

"`()`" всередині лапок не інтерпретуються, а розглядається як частина рядка.

Обробка пропущених лапок всередині рядка не є обов'язковою; таким чином "`(foo"bar)`" може розглядатися як рядок "`foo"bar`", або як помилка.

Для цього не потрібно розпізнавати `\` для екранування, але окрім того варто розгледіти цифри, якщо мова має відповідні типи даних.

Зверніть увагу, що, за винятком пробілів та `()"` (`\`, якщо екранування підтримується), спеціальних символів немає. Все інше можна використовувати без лапок.

Читач має вміти прочитати наступні вхідні дані

<pre>((data "quoted data" 123 4.5)
(data (!@# (4.5) "(more" "data)")))
</pre>

and turn it into a native data structure.

# --hints--

`parseSexpr` має бути функцією.

```js
assert(typeof parseSexpr === 'function');
```

`parseSexpr('(data1 data2 data3)')` має повернути `['data1', 'data2', 'data3']`

```js
assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution);
```

`parseSexpr('((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))')` має повернути `[['data', '"quoted data"', 123, 4.5], ['data', ['!@#', [4.5], '"(more"', '"data)"']]]`.

```js
assert.deepEqual(parseSexpr(basicSExpr), basicSolution);
```

# --seed--

## --after-user-code--

```js
const simpleSExpr = '(data1 data2 data3)';
const simpleSolution = ['data1', 'data2', 'data3'];

const basicSExpr = '((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))';
const basicSolution = [["data","\"quoted data\"",123,4.5],["data",["!@#",[4.5],"\"(more\"","\"data)\""]]];
```

## --seed-contents--

```js
function parseSexpr(str) {

  return true;
}
```

# --solutions--

```js
function parseSexpr(str) {
  const t = str.match(/\s*("[^"]*"|\(|\)|"|[^\s()"]+)/g);
  for (var o, c = 0, i = t.length - 1; i >= 0; i--) {
    var n,
      ti = t[i].trim();
    if (ti == '"') return;
    else if (ti == '(') t[i] = '[', c += 1;
    else if (ti == ')') t[i] = ']', c -= 1;
    else if ((n = +ti) == ti) t[i] = n;
    else t[i] = `'${ti.replace('\'', '\\\'')}'`;
    if (i > 0 && ti != ']' && t[i - 1].trim() != '(') t.splice(i, 0, ',');
    if (!c) if (!o) o = true; else return;
  }
  return c ? undefined : eval(t.join(''));
}
```
