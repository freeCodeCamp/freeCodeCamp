---
id: 587d7b7d367417b2b2512b1d
title: Ітерація через ключі об’єкта за допомогою інструкції for...in
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

Часом потрібно ітерувати через всі ключі всередині об’єкта. Для цього можна використати цикл <dfn>for...in</dfn>. Цикл for...in виглядає так:

```javascript
const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
```

Цей код виводить `milk 1` та `eggs 12`, а кожна пара ключ-значення з’являється в окремому рядку.

Ми визначили змінну `food` у голові циклу, і ця змінна встановлювалася на кожний з ключів об’єкта за кожної ітерації. У результаті цього кожна назва їжі виводилась на консолі.

**ПРИМІТКА:** об’єкти не зберігають впорядкування ключів так, як це роблять масиви. Тому позиція ключа в об’єкті або його відносний порядок є недоречними, якщо ми посилаємось або отримуємо до нього доступ.

# --instructions--

Ми визначили функцію `countOnline`, яка приймає один аргумент `allUsers`. Використайте інструкцію <dfn>for...in</dfn> всередині цієї функції, щоб пройтися по об’єкту `allUsers` і повернути кількість користувачів, чия властивість `online` встановлена на `true`. Приклад об’єкту, який можна передати до `countOnline`, показано нижче. Кожен користувач матиме властивість `online` встановлену на `true` або `false`.

```js
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
```

# --hints--

Функція `countOnline` має використати інструкцію `for in`, щоб ітерувати через ключі об’єкта, переданого до неї.

```js
assert(
  __helpers.removeJSComments(code).match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

Функція `countOnline` має повернути `1`, коли до неї передано об’єкт `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }`

```js
assert(countOnline(usersObj1) === 1);
```

Функція `countOnline` має повернути `2`, коли до неї передано об’єкт `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }`

```js
assert(countOnline(usersObj2) === 2);
```

Функція `countOnline` має повернути `0`, коли до неї передано об’єкт `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }`

```js
assert(countOnline(usersObj3) === 0);
```

# --seed--

## --after-user-code--

```js
const usersObj1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

const usersObj2 = {
  Alan: {
    online: true
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: true
  }
}


const usersObj3 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: false
  }
}
```

## --seed-contents--

```js
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

# --solutions--

```js
function countOnline(allUsers) {
  let numOnline = 0;
  for(const user in allUsers){
    if(allUsers[user].online) {
      numOnline++;
    }
  }
  return numOnline;
}
```
