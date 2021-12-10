---
id: 587d7daa367417b2b2512b6b
title: Розділіть рядок на масив використовуючи метод split
challengeType: 1
forumTopicId: 18305
dashedName: split-a-string-into-an-array-using-the-split-method
---

# --description--

Метод `split` розділяє рядок на сукупність рядів. Для розділювача потрібен аргумент, який може бути символом для розбиття рядка або регулярного виразу. Наприклад, якщо роздільник це простір, ви отримаєте масив слів, і якщо роздільник є пустим рядком, ви отримаєте масив кожного символа у рядку.

Ось два приклади, які розділяють один рядок на пробіли, а потім інші на цифри, використовуючи регулярний вираз:

```js
const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
```

`bySpace` матиме значення `["Hello", "World"]` і `byDigits` матиме значення `["How", "are", "you", "today"]`.

Оскільки рядки незмінні, метод `split` полегшує роботу з ними.

# --instructions--

Використовуйте метод `split` усередині функції `splitify`, щоб розділити `str` на масив слів. Функція повинна повертати масив слів. Звернімо увагу, що слова не завжди розділені пробілами, а масив не повинен містити знаки пунктуації.

# --hints--

Ваш код повинен використовувати метод `split`.

```js
assert(code.match(/\.split/g));
```

`splitify("Hello World, I-am code")` має повертати <code["Hello", "World", "I", "am", "code"]</code>.

```js
assert(
  JSON.stringify(splitify('Hello World,I-am code')) ===
    JSON.stringify(['Hello', 'World', 'I', 'am', 'code'])
);
```

`splitify("Earth-is-our home")` має повертати `["Earth", "is", "our", "home"]`.

```js
assert(
  JSON.stringify(splitify('Earth-is-our home')) ===
    JSON.stringify(['Earth', 'is', 'our', 'home'])
);
```

`splitify("This.is.a-sentence")` має повертати `["This", "is", "a", "sentence"]`.

```js
assert(
  JSON.stringify(splitify('This.is.a-sentence')) ===
    JSON.stringify(['This', 'is', 'a', 'sentence'])
);
```

# --seed--

## --seed-contents--

```js
function splitify(str) {
  // Only change code below this line


  // Only change code above this line
}

splitify("Hello World,I-am code");
```

# --solutions--

```js
function splitify(str) {
  return str.split(/\W/);
}
```
