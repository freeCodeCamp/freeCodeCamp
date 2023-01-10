---
id: 5a24c314108439a4d403618c
title: Verwende Array.filter(), um ein Array dynamisch zu filtern
challengeType: 6
forumTopicId: 301416
dashedName: use-array-filter-to-dynamically-filter-an-array
---

# --description--

Die `map`-Array-Methode ist ein mächtiges Werkzeug, das du bei der Arbeit mit React oft verwenden wirst. Eine andere Methode, die mit `map` verwandt ist, ist `filter`, die den Inhalt eines Arrays anhand einer Bedingung filtert und dann ein neues Array zurückgibt. Wenn du zum Beispiel ein Array von Benutzern hast, die alle eine Eigenschaft `online` besitzen, die auf `true` oder `false` gesetzt werden kann, kannst du nur die Benutzer filtern, die online sind, indem du schreibst:

```js
let onlineUsers = users.filter(user => user.online);
```

# --instructions--

Im Code-Editor wird der `state` von `MyComponent` mit einem Array von Benutzern initialisiert. Einige Nutzer sind online, andere nicht. Filtere das Feld so, dass du nur die Nutzer siehst, die online sind. Dazu verwendest du zunächst `filter`, um ein neues Array zu erstellen, das nur die Benutzer enthält, deren `online`-Eigenschaft `true` ist. In der Variablen `renderOnline` mappst du dann das gefilterte Array und gibst für jeden Benutzer ein `li`-Element zurück, das den Text seines `username` enthält. Achte darauf, dass du auch einen eindeutigen `key` einfügst, wie in den letzten Aufgaben.

# --hints--

`MyComponent` sollte existieren und auf der Seite dargestellt werden.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('MyComponent').length,
  1
);
```

`MyComponent`sollte mit einem Array von sechs Benutzern initialisiert werden.

```js
assert(
  Array.isArray(
    Enzyme.mount(React.createElement(MyComponent)).state('users')
  ) === true &&
    Enzyme.mount(React.createElement(MyComponent)).state('users').length === 6
);
```

`MyComponent` sollte ein `div`, ein `h1` und dann eine ungeordnete Liste mit `li`-Elementen für jeden Benutzer zurückgeben, dessen Online-Status auf `true` gesetzt ist.

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

`MyComponent` sollte `li`-Elemente darstellen, die den `username` jedes Online-Nutzers enthalten.

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

Jedes Listenelement sollte ein eindeutiges `key`-Attribut besitzen.

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
