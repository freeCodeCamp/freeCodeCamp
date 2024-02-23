---
id: 5a24c314108439a4d403618c
title: Array.filter() を使用して動的に配列を絞り込む
challengeType: 6
forumTopicId: 301416
dashedName: use-array-filter-to-dynamically-filter-an-array
---

# --description--

`map` 配列メソッドは React の作業でよく使用される強力なツールです。 `map` に関連する別のメソッドとして `filter` があります。このメソッドは、条件に基づいて配列の内容を絞り込み、新しい配列を返します。 たとえばユーザーの配列があり、すべてのユーザーがプロパティ `online` を持っていて、このプロパティを `true` または `false` に設定できる場合、次のように記述してオンラインのユーザーのみに絞り込むことができます。

```js
let onlineUsers = users.filter(user => user.online);
```

# --instructions--

コードエディターで、`MyComponent` の `state` がユーザーの配列で初期化されています。 オンラインのユーザーもいればそうでないユーザーもいます。 オンラインになっているユーザーのみが表示されるように、配列を絞り込んでください。 それには、まず `filter` を使用して、`online` プロパティが `true` のユーザーのみを含む新しい配列を返してください。 次に、`renderOnline` 変数で、絞り込んだ配列全体をマップし、ユーザーごとに `username` のテキストを含む `li` 要素を返してください。 前のチャレンジと同様に、必ず一意の `key` も含めてください。

# --hints--

`MyComponent` が存在し、ページにレンダーする必要があります。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('MyComponent').length,
  1
);
```

`MyComponent`の state を、6 人のユーザーの配列に初期化します。

```js
assert(
  Array.isArray(
    Enzyme.mount(React.createElement(MyComponent)).state('users')
  ) === true &&
    Enzyme.mount(React.createElement(MyComponent)).state('users').length === 6
);
```

`MyComponent` から `div` と `h1` を返し、さらに、オンラインステータスが `true` に設定されているすべてのユーザーの `li` 要素を格納した順序なしリストを返します。

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

`MyComponent` で、各オンラインユーザーの `username` を含む `li` 要素をレンダーします。

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

各リストアイテム要素に一意の `key` 属性を持たせます。

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
