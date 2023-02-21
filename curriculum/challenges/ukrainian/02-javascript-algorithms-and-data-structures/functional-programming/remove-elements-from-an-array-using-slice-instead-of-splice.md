---
id: 9d7123c8c441eeafaeb5bdef
title: Видалення елементів з масиву за допомогою slice замість splice
challengeType: 1
forumTopicId: 301236
dashedName: remove-elements-from-an-array-using-slice-instead-of-splice
---

# --description--

Часто при роботі з масивами потрібно видалити деякі елементи, а решту масиву зберегти. JavaScript пропонує метод `splice`, який приймає аргументи для індексу (де саме почати видаляти елементи), а тоді – їх кількість. Якщо другий аргумент не надано, то елементи видаляються до кінця за замовчуванням. Однак метод `splice` змінює вихідний масив, у якому викликається. Ось приклад:

```js
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```

Тут `splice` повертає рядок `London` і видаляє його із масиву міст. `cities` матиме значення `["Chicago", "Delhi", "Islamabad", "Berlin"]`.

Як ми бачили у попередньому завданні, метод `slice` не змінює вихідний масив, а повертає новий, який можна зберегти як змінну. Пригадайте, що метод `slice` використовує два аргументи для того, щоб почати і закінчити слайс (кінець не включається) та повертає ці елементи у новому масиві. Використання методу `slice` замість `splice` допомагає уникнути будь-яких побічних дій.

# --instructions--

Перепишіть функцію `nonMutatingSplice`, використовуючи `slice` замість `splice`. Він повинен обмежити наданий масив `cities` до довжини 3, і повернути новий масив лише із першими трьома елементами.

Не змінюйте вихідний масив, наданий до функції.

# --hints--

Ваш код повинен використовувати метод `slice`.

```js
assert(code.match(/\.slice/g));
```

Ваш код не повинен використовувати метод `splice`.

```js
assert(!code.match(/\.?[\s\S]*?splice/g));
```

Масив `inputCities` не повинен змінюватись.

```js
assert(
  JSON.stringify(inputCities) ===
    JSON.stringify(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
);
```

`nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` має повертати `["Chicago", "Delhi", "Islamabad"]`.

```js
assert(
  JSON.stringify(
    nonMutatingSplice(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
  ) === JSON.stringify(['Chicago', 'Delhi', 'Islamabad'])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

# --solutions--

```js
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
```
