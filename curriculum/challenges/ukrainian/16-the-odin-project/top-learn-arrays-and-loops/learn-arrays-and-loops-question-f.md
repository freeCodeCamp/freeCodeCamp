---
id: 661e27598602567c118451d6
title: Вивчіть масиви та цикли. Запитання F
challengeType: 15
dashedName: learn-arrays-and-loops-question-f
---

# --description--

Цикл `for` — ще один тип циклу, який використовують для виконання блоку коду декілька разів. Цикл `for` використовують, якщо відома кількість ітерацій. Синтаксис циклу `for` такий:

```javascript
for (initialization; condition; increment/decrement) {
  // code block to be executed
}
```

Наприклад, наведений нижче фрагмент коду друкує числа від 1 до 5:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Щоб ітерувати над масивом за допомогою методу `for`, можна використати властивість довжини масиву. Наприклад, наведений нижче фрагмент коду надрукує елементи масиву:

```javascript
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

# --question--

## --text--

Яким буде вивід даного фрагменту коду JavaScript?

```javascript
const items = ['apple', 'banana', 'cherry', 'date'];
for (let i = 1; i < items.length; i++) {
  console.log(items[i]);
}
```

## --answers--

```bash
apple
banana
cherry
date
```

---

```bash
banana
cherry
```

---

```bash
apple
banana
cherry
```

---

```bash
banana
cherry
date
```

## --video-solution--

4
