---
id: 9d7123c8c441eeafaeb5bdef
title: Видалення елементів з масиву з використанням slice замість splice
challengeType: 1
forumTopicId: 301236
dashedName: remove-elements-from-an-array-using-slice-instead-of-splice
---

# --description--

Загальним шаблоном під час роботи з масивами є те, коли ви хочете видалити елементи й зберегти решту масиву. JavaScript пропонує для цього метод « `splice`», який приймає аргументи для індексу, де саме починати видаляти елементи, а тоді — їх кількість. Якщо другий аргумент не було надано, то, за замовчуванням, елементи видаляються до кінця. Щоправда, метод «`splice`» змінює оригінальний масив, у якому викликається. Ось приклад:

```js
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```

Тут `splice` повертає рядок `London` і видаляє його із масиву міст. `cities` матимуть значення `["Chicago", "Delhi", "Islamabad", "Berlin"]`.

Як ми могли бачити у останньому завдання, метод «`slice`» не змінює вихідного масиву, але повертає новий, який може бути збережений як змінний. Пригадайте, що метод «`slice`» використовує два аргументи для того, щоб індекси почали та закінчили slice (кінець не включається); і повертає ці елементи у новий масив. Використання методу «`slice`» замість «`splice`» допомагає уникнути будь-яких побічних дій зміни масиву.

# --instructions--

Перепишіть функцію `nonMutatingSplice`, використовуючи `slice` замість `splice`. Він мусить обмежити наданий масив `cities` до довжини 3, і повернути новий масив лише із першими трьома елементами.

Не змінюйте вихідний масив, наданий функцією.

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

`nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` повинен повертатися як `["Chicago", "Delhi", "Islamabad"]`.

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
