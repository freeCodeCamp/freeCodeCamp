---
id: 5a24c314108439a4d4036150
title: Обробіть дію в сховищі
challengeType: 6
forumTopicId: 301444
dashedName: handle-an-action-in-the-store
---

# --description--

Після того, як дія була створена та відправлена, сховище Redux мусить знати, як відповідати на цю дію. Це завдання для функції `reducer`. Редюсери в Redux відповідають за зміни стану, які відбуваються у відповідь на дії. `reducer` приймає `state` та `action` як аргументи, та завжди повертає новий `state`. Важливо знати, що це **єдине** завдання редюсера. У нього немає побічних дій: він не викликає кінцеву точку API та не має підводних каменів. Редюсер — це проста чиста функція, яка використовує стан і дію та повертає новий стан.

Іншим ключовим принципом Redux є те, що `state` доступний тільки для читання. Іншими словами, функція `reducer` має **завжди** повертати нову копію `state` і ніколи не змінювати сам стан. Redux не забезпечує незмінність стану, однак ви відповідаєте за його забезпечення у своєму коді та функціях редюсера. Ви практикуватимете це в наступних завданнях.

# --instructions--

Редактор коду містить попередній приклад, а також початок функції `reducer`. Заповніть тіло функції `reducer`, щоб у випадку отримання дії типу `'LOGIN'` вона повернула об’єкт стану з `login` зі значенням `true`. В іншому випадку вона поверне поточний `state`. Зверніть увагу, що поточний стан та відправлена дія передані до редюсера, тому ви можете отримати доступ до типу дії напряму за допомогою `action.type`.

# --hints--

Виклик функції `loginAction` має повернути об’єкт з властивістю типу зі значенням рядка `LOGIN`.

```js
assert(loginAction().type === 'LOGIN');
```

Сховище має бути ініціалізованим об’єктом, що має властивість `login` зі значенням `false`.

```js
assert(store.getState().login === false);
```

Відправлення `loginAction` має оновити значення властивості `login` у стані сховища на `true`.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(loginAction());
    const afterState = store.getState();
    return initialState.login === false && afterState.login === true;
  })()
);
```

Якщо дія не є типом `LOGIN`, то сховище має повернути поточний стан.

```js
assert(
  (function () {
    store.dispatch({ type: '__TEST__ACTION__' });
    let afterTest = store.getState();
    return typeof afterTest === 'object' && afterTest.hasOwnProperty('login');
  })()
);
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```

# --solutions--

```js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {

  if (action.type === 'LOGIN') {
    return {login: true}
  }

  else {
    return state
  }

};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```
