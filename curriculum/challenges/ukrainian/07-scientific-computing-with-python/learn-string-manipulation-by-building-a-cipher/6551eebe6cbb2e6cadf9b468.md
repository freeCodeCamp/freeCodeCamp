---
id: 6551eebe6cbb2e6cadf9b468
title: Крок 2
challengeType: 20
dashedName: step-2
---

# --description--

Змінні можуть зберігати значення різних типів даних. Ви щойно призначили ціле число, але якщо хочете представити якийсь текст, вам потрібно призначити рядок. Рядки — це послідовності символів, взятих в одинарні або подвійні лапки, але не можна починати рядок з одинарних лапок, а закінчувати його подвійними лапками або навпаки:

```py
string_1 = "I am a string"
string_2 = 'I am also a string'
string_3 = 'This is not valid"
```

Видаліть змінну `number` та її значення. Потім оголосіть іншу змінну `text` та призначте цій змінній значення `'Hello World'`.

# --hints--

Код не повинен містити `number = 5`.

```js
const commentless_code = __helpers.python.removeComments(code);
assert.isFalse(/number\s*=\s*5/.test(commentless_code))
```

Оголосіть змінну під назвою `text`. Зверніть увагу на те, щоб розмістити назву змінної на початку рядка.

```js
assert.match(code, /^text\s*=/m)
```

Призначте рядок `'Hello World'` до змінної `text`. Не забудьте, що потрібно використовувати або одинарні, або подвійні лапки, і звертайте увагу на регістр літер.

```js
assert.match(code, /^text\s*=\s*("|')Hello World\1\s*(#.*)?$/m)
```

Код містить недійсний синтаксис та/або недійсні відступи.

```js
({test: () => assert(true) })
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
number = 5
--fcc-editable-region--
```
