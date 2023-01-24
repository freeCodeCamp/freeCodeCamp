---
id: 587d7daa367417b2b2512b6b
title: Розділення рядка на масив за допомогою методу split
challengeType: 1
forumTopicId: 18305
dashedName: split-a-string-into-an-array-using-the-split-method
---

# --description--

Метод `split` розділяє рядок на масив рядків. Він приймає потрібний аргумент для розділювача, який може бути символом для розбиття рядка чи регулярного виразу. Наприклад, якщо розділювач є пробілом, ви отримаєте масив слів, а якщо розділювачем є пустий рядок, ви отримаєте масив окремих рядків із символом.

Ось два приклади, які розділяють один рядок пробілами, а інший – цифрами, використовуючи регулярний вираз:

```js
const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
```

`bySpace` матиме значення `["Hello", "World"]`, а `byDigits` матиме значення `["How", "are", "you", "today"]`.

Оскільки рядки незмінні, метод `split` полегшує роботу з ними.

# --instructions--

Використайте метод `split` всередині функції `splitify`, щоб розділити `str` на масив слів. Функція повинна повертати масив. Зверніть увагу, що слова не завжди розділені пробілами і масив не повинен містити знаки пунктуації.

# --hints--

Ваш код повинен використовувати метод `split`.

```js
assert(code.match(/\.split/g));
```

`splitify("Hello World,I-am code")` має повертати `["Hello", "World", "I", "am", "code"]`.

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
