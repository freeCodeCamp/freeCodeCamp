---
id: 5a24c314108439a4d403618c
title: استخدام Array.filter() لتصفية القائمة (Array) ديناميكياً
challengeType: 6
forumTopicId: 301416
dashedName: use-array-filter-to-dynamically-filter-an-array
---

# --description--

طريقة `map` للقائمة هي أداة قوية سوف تستخدمها غالبا عند العمل مع React. طريقة أخرى ذات صلة `map` هي `filter`، الذي تصفي محتويات القائمة على أساس شرط ما، ثم يعيد قائمة جديدة. على سبيل المثال إذا كان لديك مجموعة من المستخدمين الذين لديهم جميعا خاصية `online` التي يمكن تعيينها إلى `true` أو `false`، يمكنك تصفية فقط للمستخدمين الذين هم على الإنترنت عن طريق الكتابة:

```js
let onlineUsers = users.filter(user => user.online);
```

# --instructions--

في محرر الكود، تم تهيئة `MyComponent` في `state` تحمل قائمة (array) من المستخدمين. بعض المستخدمين على الإنترنت وبعضهم لا يفعل ذلك. تصفية القائمة بحيث ترى فقط المستخدمين الذين هم على الإنترنت. للقيام بذلك، أولاً استخدم `filter` لإرجاع قائمة جديدة تحتوي فقط على المستخدمين الذين خاصية `online` بقيمة `true`. ثم في متغير `renderOnline` تعيين (map) القائمة المصفى، و إرجاع عنصر `li` لكل مستخدم يحتوي على نص `username` الخاص به. تحقق تضمين `key` فريد أيضا، مثل التحديات السابقة.

# --hints--

`MyComponent` يجب أن يكون موجودا وأن يقدم إلى الصفحة.

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('MyComponent').length,
  1
);
```

يجب تهيئة حالة (state) في `MyComponent` لقائمة (array) من المستخدمين الستة.

```js
assert(
  Array.isArray(
    Enzyme.mount(React.createElement(MyComponent)).state('users')
  ) === true &&
    Enzyme.mount(React.createElement(MyComponent)).state('users').length === 6
);
```

`MyComponent` يجب أن ينتج `div`، و`h1`، ومن ثم قائمة غير مرتبة تحتوي على `li` لكل مستخدم تم تعيين حالته على الإنترنت بقيمة `true`.

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

يجب أن ينتج `MyComponent` عناصر `li` التي يحتوي على `username` لكل مستخدم على الإنترنت.

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

يجب أن يكون لكل عنصر من عناصر القائمة خاصية `key` فريدة.

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
