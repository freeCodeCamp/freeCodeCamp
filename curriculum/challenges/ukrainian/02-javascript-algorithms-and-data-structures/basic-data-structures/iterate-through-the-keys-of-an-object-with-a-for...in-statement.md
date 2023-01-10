---
id: 587d7b7d367417b2b2512b1d
title: Ітерація через ключі об'єкта у циклі "for...in"
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

Часом вам треба буде ітерувати всі ключі всередині об'єкта. У JavaScript це вимагає певного синтаксису, що називається <dfn>for...in</dfn> циклом. Для нашого `users` об'єкту, це може виглядати так:

```js
for (let user in users) {
  console.log(user);
}
```

Це б зазначило, що `Alan`, `Jeff` та `Sarah` мають кожне значення у власному рядку.

У цьому циклі ми визначили змінну `user` і, як ви можете побачити, цю змінну скидували під час кожної ітерації ключів об'єкта, в міру зациклювання через об’єкт, що призводить до того, що кожне ім'я користувача друкується на консолі.

**ПРИМІТКА:** об'єкти не зберігають впорядкування ключів так, як це роблять масиви. Таким чином, позиція ключа в об'єкті або відносний його порядок є недоречним, коли ми його відсилаємо або отримуємо до нього доступ.

# --instructions--

Ми визначили функцію `countOnline`, яка приймає один аргумент (користувацький об'єкт). Використовуйте <dfn>for...in</dfn> цикл у межах цієї функції, щоб обробити користувацький об'єкт, який перейшов у функцію, і повернути кількість користувачів, чия `online` властивість установлена на `true`. Приклад користувацького об'єкту, який можна передати до `countOnline`, показано нижче. Кожен користувач матиме `online` властивість з обома `true` або `false` значеннями.

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

Для функції `countOnline` слід використовувати `for in` цикл, щоб ітерувати ключі об'єкта, який передається до неї.

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

Функція `countOnline` повинна повернути `1`, коли об'єкт `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }` передається до неї

```js
assert(countOnline(usersObj1) === 1);
```

Функція `countOnline` повинна повернути `2`, коли об'єкт `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }` передається до неї

```js
assert(countOnline(usersObj2) === 2);
```

Функція `countOnline` повинна повернути `0`, коли об'єкт `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }` передається до неї

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

function countOnline(usersObj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

# --solutions--

```js
function countOnline(usersObj) {
  let online = 0;
  for(let user in usersObj){
    if(usersObj[user].online) {
      online++;
    }
  }
  return online;
}
```
