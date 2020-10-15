---
id: 5a24c314108439a4d403618c
challengeType: 6
forumTopicId: 301416
title: 使用 Array.Filter() 动态过滤数组
---

## Description
<section id='description'>
<code>map</code>数组方法是一个强大的工具，在使用 React 时经常使用。与<code>map</code>相关的另一种方法是<code>filter</code>，它根据条件过滤数组的内容，然后返回一个新数组。例如，如果你有一个 users 数组，每个数组元素都有一个可以设置为<code>true</code>或<code>false</code>的<code>online</code>属性，你可以只过滤那些在线的用户：
<code>let onlineUsers = users.filter(user => user.online);</code>
</section>

## Instructions
<section id='instructions'>
在代码编辑器中，<code>MyComponent</code>的<code>state</code>由一个 users 数组初始化。有些用户在线，有些则不在线。过滤数组，以便你只看到在线用户。为此，首先使用<code>filter</code>返回一个新数组，该数组只包含<code>online</code>属性为<code>true</code>的用户。然后，在<code>renderOnline</code>变量中，映射经过过滤的数组，并为每个用户返回一个包含它们<code>username</code>文本的<code>li</code>元素。确保像上一个挑战一样包含一个独特的<code>key</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该存在并被渲染到页面。
    testString: assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find('MyComponent').length, 1);
  - text: <code>MyComponent</code>的 state 应该初始化为包含 6 个用户的数组。
    testString: assert(Array.isArray(Enzyme.mount(React.createElement(MyComponent)).state('users')) === true && Enzyme.mount(React.createElement(MyComponent)).state('users').length === 6);
  - text: <code>MyComponent</code>应该返回一个<code>div</code>、一个<code>h1</code>和一个包含<code>li</code>元素的无序列表，该列表用于展示在线状态为<code>true</code>的每个用户。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MyComponent)); const users = (bool) => ({users:[ { username: ''Jeff'', online: bool }, { username: ''Alan'', online: bool }, { username: ''Mary'', online: bool }, { username: ''Jim'', online: bool   }, { username: ''Laura'', online: bool } ]}); const result = () => comp.find(''li'').length; const _1 = result(); const _2 = () => { comp.setState(users(true)); return waitForIt(() => result()) }; const _3 = () => { comp.setState(users(false)); return waitForIt(() => result()) }; const _4 = () => { comp.setState({ users: [] }); return waitForIt(() => result()) }; const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); assert(comp.find(''div'').length === 1 && comp.find(''h1'').length === 1 && comp.find(''ul'').length === 1 && _1 === 4 && _2_val === 5 && _3_val === 0 && _4_val === 0); }; '
  - text: <code>MyComponent</code>应该渲染包含每个在线用户用户名的<code>li</code>元素。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MyComponent)); const users = (bool) => ({users:[ { username: ''Jeff'', online: bool }, { username: ''Alan'', online: bool }, { username: ''Mary'', online: bool }, { username: ''Jim'', online: bool   }, { username: ''Laura'', online: bool } ]}); const ul = () => { comp.setState(users(true)); return waitForIt(() => comp.find(''ul'').html()) }; const html = await ul(); assert(html === ''<ul><li>Jeff</li><li>Alan</li><li>Mary</li><li>Jim</li><li>Laura</li></ul>''); }; '
  - text: 每个列表项元素都应该有一个唯一的<code>key</code>属性。
    testString: assert((() => { const ul = Enzyme.mount(React.createElement(MyComponent)).find('ul'); console.log(ul.debug()); const keys = new Set([ ul.childAt(0).key(), ul.childAt(1).key(), ul.childAt(2).key(), ul.childAt(3).key() ]); return keys.size === 4; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

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
    }
  }
  render() {
    const usersOnline = null; // change code here
    const renderOnline = null; // change code here
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
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
    }
  }
  render() {
    const usersOnline = this.state.users.filter(user => {
      return user.online;
    });
    const renderOnlineUsers = usersOnline.map(user => {
      return (
        <li key={user.username}>{user.username}</li>
      );
    });
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
          {renderOnlineUsers}
        </ul>
       </div>
    );
  }
};
```

</section>
