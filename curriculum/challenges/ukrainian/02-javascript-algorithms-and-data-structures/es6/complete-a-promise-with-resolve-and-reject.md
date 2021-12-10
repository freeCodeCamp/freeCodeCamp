---
id: 5cdafbc32913098997531680
title: Виконайте Promise за допомогою команд resolve та reject
challengeType: 1
forumTopicId: 301196
dashedName: complete-a-promise-with-resolve-and-reject
---

# --description--

Promise має три стани: `pending`, `fulfilled` та `rejected`. Promise, який ви створили у попередньому завданні, буде завжди знаходитися у стані `pending`, оскільки ви не передбачили можливості завершити Promise. Для цього використовуються параметри `resolve` і `reject`, що належать аргументу Promise. `resolve` використовується для виконання Promise, а `reject` використовується для відхилення Promise. При таких методах з'являється аргумент, як показано нижче.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

Попередній приклад використовує рядки для аргументу цих функцій, але можливі й інші варіанти. Часто це може також бути об'єкт, дані якого ви використаєте для розміщення на своєму сайті чи в іншому місці.

# --instructions--

Запрограмуйте Promise так, щоб він самостійно обробляв виконання або відхилення. Якщо `responseFromServer` виявляється `true`, викличте метод `resolve`, щоб успішно виконати Promise. Додайте до `resolve` рядок зі значенням `We got the data`. Якщо `responseFromServer` виявляється `false`, використайте метод `reject` і додайте рядок `Data not received`.

# --hints--

`resolve` має викликатися за допомогою очікуваного рядка, а значення `if` має бути `true`.

```js
assert(
  code.match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g)
);
```

`reject` має викликатися за допомогою очікуваного рядка, а значення `if` має бути `false`.

```js
assert(
  code.match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g)
);
```

# --seed--

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    // Change this line
  } else {  
    // Change this line
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```
