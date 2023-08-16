---
id: 5a24c314108439a4d403618c
title: Використайте Array.filter(), щоб динамічно відфільтрувати масив
challengeType: 6
forumTopicId: 301416
dashedName: use-array-filter-to-dynamically-filter-an-array
---

# --description--

Метод масиву `map` — це потужний інструмент, який ви будете часто використовувати під час роботи з React. Інший метод, пов’язаний з `map`, — це `filter`, який фільтрує зміст масиву на основі умови, а потім повертає новий масив. Наприклад, якщо у вас є масив користувачів і всі вони мають властивість `online`, яку можна встановити як `true` або `false`, то ви можете відфільтрувати тільки тих користувачів, які знаходяться в мережі:

```js
let onlineUsers = users.filter(user => user.online);
```

# --instructions--

Стан `MyComponent` ініціалізовано масивом користувачів у редакторі коду. Деякі з користувачів знаходяться в мережі, а деякі ні. Відфільтруйте масив, щоб побачити лише користувачів, які знаходяться в мережі. Для цього спочатку скористайтеся `filter`, щоб повернути новий масив, який містить лише тих користувачів, значення властивості `online` яких становить `true`. Потім у змінній `renderOnline` застосуйте відфільтрований масив та поверніть елемент `li` для кожного користувача, що містить текст їхніх `username`. Обов’язково вкажіть унікальний `key`, як і в попередніх завданнях.

# --hints--

`MyComponent` має існувати та відтворюватись на сторінці.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('MyComponent').length,
  1
);
```

Стан `MyComponent` має ініціалізуватися масивом з шести користувачів.

```js
assert(
  Array.isArray(
    Enzyme.mount(React.createElement(MyComponent)).state('users')
  ) === true &&
    Enzyme.mount(React.createElement(MyComponent)).state('users').length === 6
);
```

`MyComponent` має повернути `div`, `h1`, а потім невпорядкований список, що містить елементи `li` для кожного користувача, значення статусу яких становить `true`.

```js
(() => {
  const comp = Enzyme.mount(React.createElement(MyComponent));
  const users = (bool) => ({
    users: [
      { username: 'Jeff', online: bool },
      { username: 'Alan', online: bool },
      { username: 'Mary', online: bool },
      { username: 'Jim', online: bool },
      { username: 'Laura', online: bool }
    ]
  });
  const result = () => comp.find('li').length;
  const _1 = result();
  const _2 = () => {
    comp.setState(users(true));
    return result();
  };
  const _3 = () => {
    comp.setState(users(false));
    return result();
  };
  const _4 = () => {
    comp.setState({ users: [] });
    return result();
  };
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  assert(
    comp.find('div').length === 1 &&
      comp.find('h1').length === 1 &&
      comp.find('ul').length === 1 &&
      _1 === 4 &&
      _2_val === 5 &&
      _3_val === 0 &&
      _4_val === 0
  );
})();
```

`MyComponent` має відтворити елементи `li`, які містять `username` кожного користувача, який знаходиться в мережі.

```js
(() => {
  const comp = Enzyme.mount(React.createElement(MyComponent));
  const users = (bool) => ({
    users: [
      { username: 'Jeff', online: bool },
      { username: 'Alan', online: bool },
      { username: 'Mary', online: bool },
      { username: 'Jim', online: bool },
      { username: 'Laura', online: bool }
    ]
  });
  const ul = () => {
    comp.setState(users(true));
    return comp.find('ul').html();
  };
  const html = ul();
  assert(
    html ===
      '<ul><li>Jeff</li><li>Alan</li><li>Mary</li><li>Jim</li><li>Laura</li></ul>'
  );
})();
```

Кожен елемент списку повинен мати унікальний атрибут `key`.

```js
assert(
  (() => {
    const ul = Enzyme.mount(React.createElement(MyComponent)).find('ul');
    console.log(ul.debug());
    const keys = new Set([
      ul.childAt(0).key(),
      ul.childAt(1).key(),
      ul.childAt(2).key(),
      ul.childAt(3).key()
    ]);
    return keys.size === 4;
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = null; // Change this line
    const renderOnline = null; // Change this line
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => {
      return user.online;
    });
    const renderOnline = usersOnline.map(user => {
      return <li key={user.username}>{user.username}</li>;
    });
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
```
