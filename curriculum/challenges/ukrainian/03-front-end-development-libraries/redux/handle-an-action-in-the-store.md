---
id: 5a24c314108439a4d4036150
title: Обробка дії в сховищі
challengeType: 6
forumTopicId: 301444
dashedName: handle-an-action-in-the-store
---

# --description--

Після того, як дія була створена та відправлена, сховище Redux мусить знати, як відповідати на цю дію. Це — завдання для функції `reducer`. Зменшувачі в Redux відповідають за стан змін, які відбуваються у відповідь на дії. `reducer` використовує `state` та `action` як аргументи, і це завжди повертає новий `state`. Важливим є те, що це — **єдина** роль зменшувача. У нього немає побічних дій — він не викличе кінцеву точку API й не має підводних каменів. Зменшувач — це просто чиста функція, яка використовує стан і дію та повертає новий стан.

Іншим ключовим принципом Redux є те, що `state` — тільки для читання. Іншими словами, функція `reducer` мусить **завжди** повертати нову копію `state` і ніколи не змінювати безпосередньо стан. Redux не забезпечує незмінність стану, щоправда, ви відповідаєте за його забезпечення у вашому коді та функціях зменшувача. Ви зможете попрактикуватись у цьому в наступних завданнях.

# --instructions--

Редактор коду має попередній приклад, точно так само, як і початок функції `reducer` для вас. Заповніть основну частину функції `reducer` так, щоб, якщо вона отримає дію типу `'LOGIN'`, то поверне об'єкт з набором `login` для `true`. В іншому випадку, вона поверне поточний `state`. Зверніть увагу, що поточний `state` та відправлена `action` підходять для зменшувача, то ж ви зможете отримати доступ безпосередньо до типу дії з `action.type`.

# --hints--

Виклик функції `loginAction` повинен повертатися як об'єкт з типом набору параметрів для рядка `LOGIN`.

```js
assert(loginAction().type === 'LOGIN');
```

Сховище мусить бути ініціалізованим з об'єктом, що має параметр `login`, встановлений на `false`.

```js
assert(store.getState().login === false);
```

Відправлення `loginAction` мусить оновити параметр `login` у сховищі, до стану `true`.

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

Якщо дія не є типом `LOGIN`, то сховище мусить повернути поточний стан.

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
