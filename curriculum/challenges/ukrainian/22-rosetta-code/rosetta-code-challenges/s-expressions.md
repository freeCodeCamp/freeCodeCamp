---
id: 59667989bf71cf555dd5d2ff
title: S-вирази
challengeType: 1
forumTopicId: 302303
dashedName: s-expressions
---

# --description--

<a href="https://rosettacode.org/wiki/S-expressions" target="_blank" rel="noopener noreferrer nofollow">S-вирази</a> — це зручний спосіб для парсингу та зберігання даних.

# --instructions--

Напишіть простий читач/аналізатор S-виразів, який опрацьовує рядки, цілі числа та числа з плаваючою комою в лапках чи без них.

Функція має зчитувати один, але вкладений S-вираз з рядка і повернути його як (вкладений) масив.

Розділювачі рядків та інші пробіли за межами лапок можуть бути проігноровані.

Дужки `()` всередині залапкованих рядків не інтерпретуються, а розглядаються як частина рядка.

Обробка залапкованих лапок всередині рядка необов’язкова. Тобто `(foo"bar)` може розглядатись як рядок `foo"bar` або як помилка.

Для цього читач не повинен визнавати `\` для екранування, але повинен розпізнавати числа, якщо мова має відповідні типи даних.

Зверніть увагу, що, за винятком пробілів та `()"` (`\`, якщо екранування підтримується), спеціальних символів немає. Все інше можна використовувати без лапок.

Читач повинен прочитати наступні вхідні дані

<pre>((data "quoted data" 123 4.5)
(data (!@# (4.5) "(more" "data)")))
</pre>

і перетворити їх на звичайну структуру даних.

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
