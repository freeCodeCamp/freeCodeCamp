---
id: 661e27578602567c118451d3
title: Вивчіть масиви та цикли. Запитання C
challengeType: 15
dashedName: learn-arrays-and-loops-question-c
---

# --description--

Найпоширеніший спосіб додати новий елемент до масиву — використати метод `push()`. Метод `push()` додає один чи більше елементів в кінець масиву та повертає масив нової довжини.

Наприклад, щоб додати новий елемент до масиву `pet`, можна використати такий код:

```javascript
const pet = ['cat', 'dog', 'bunny'];
pet.push('parrot');
console.log(pet); // Output: ['cat', 'dog', 'bunny', 'parrot']
```

Щоб видалити останній елемент масиву, використовують метод `pop()`. Метод `pop()` видаляє останній елемент з масиву та повертає цей елемент.

Наприклад, щоб видалити останній елемент з масиву `pet`, можна використати такий код:

```javascript
const pet = ['cat', 'dog', 'tiger'];
pet.pop();
console.log(pet); // Output: ['cat', 'dog']
```


# --question--

## --text--

Дано фрагмент коду JavaScript. Яким буде вивід після його виконання?

```javascript
const animals = ['deer', 'whale', 'frog'];
animals.push('shark', 'bear');
const removed = animals.pop();

console.log(animals);
console.log(removed);
```

## --answers--

`['deer', 'whale', 'frog', 'shark', 'bear']` та `'bear'`

---

`['deer', 'whale', 'frog', 'shark']` та `'bear'`

---

`['deer', 'whale', 'frog', 'shark', 'bear']` та `null`

---

`['deer', 'whale', 'frog', 'shark', 'bear']` та `['deer', 'whale', 'frog', 'shark']`

## --video-solution--

2
