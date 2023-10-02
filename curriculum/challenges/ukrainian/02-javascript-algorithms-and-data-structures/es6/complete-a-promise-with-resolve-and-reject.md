---
id: 5cdafbc32913098997531680
title: Виконання промісу за допомогою resolve та reject
challengeType: 1
forumTopicId: 301196
dashedName: complete-a-promise-with-resolve-and-reject
---

# --description--

Проміс має три стани: `pending`, `fulfilled` та `rejected`. Проміс, який ви створили у попередньому завданні, завжди буде знаходитись у стані `pending`, оскільки ви не передбачили його завершення. Для цього використовуються параметри `resolve` та `reject`, які надаються аргументу. Використовуйте `resolve`, якщо ви хочете виконати проміс успішно та `reject`, якщо навпаки. Ці методи приймають аргумент, як показано нижче.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

Вищеподаний приклад використовує рядки для аргументу цих функцій, але це може бути чим завгодно. Часто це може бути об’єкт, дані якого ви використаєте для розміщення на своєму сайті чи в іншому місці.

# --instructions--

Запрограмуйте проміс так, щоб він міг обробити успіх та поразку. Якщо `responseFromServer` виявиться `true`, викличте метод `resolve`, щоб успішно виконати проміс. Додайте до `resolve` рядок зі значенням `We got the data`. Якщо `responseFromServer` виявиться `false`, використайте метод `reject` та передайте йому рядок `Data not received`.

# --hints--

`resolve` має викликатися за допомогою очікуваного рядка, коли умовою `if` є `true`.

```js
assert(
  code.match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g)
);
```

`reject` має викликатися за допомогою очікуваного рядка, коли умовою `if` є `false`.

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
