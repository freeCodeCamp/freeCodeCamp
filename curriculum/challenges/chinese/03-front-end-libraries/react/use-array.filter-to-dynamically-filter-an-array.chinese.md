---
id: 5a24c314108439a4d403618c
title: Use Array.filter() to Dynamically Filter an Array
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用Array.filter（）动态过滤数组
---

## Description
<section id="description"> <code>map</code>数组方法是一个强大的工具，在使用React时经常会使用它。另一种与<code>map</code>相关的方法是<code>filter</code> ，它根据条件过滤数组的内容，然后返回一个新数组。例如，如果您的所有用户都具有<code>online</code>属性（可以设置为<code>true</code>或<code>false</code> ，则可以通过以下方式仅过滤那些在线用户： <code>let onlineUsers = users.filter(user =&gt; user.online);</code> </section>

## Instructions
<section id="instructions">在代码编辑器中， <code>MyComponent</code>的<code>state</code>是用一组用户初始化的。有些用户在线，有些则没有。过滤数组，以便只查看在线用户。要执行此操作，请首先使用<code>filter</code>返回仅包含<code>online</code>属性为<code>true</code>的用户的新数组。然后，在<code>renderOnline</code>变量中，映射已过滤的数组，并为包含其<code>username</code>文本的每个用户返回<code>li</code>元素。确保包括一个独特的<code>key</code> ，就像在最后的挑战中一样。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该存在并呈现给页面。
    testString: assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find('MyComponent').length, 1);
  - text: <code>MyComponent</code>的状态应初始化为六个用户的数组。“）
    testString: assert(Array.isArray(Enzyme.mount(React.createElement(MyComponent)).state('users')) === true && Enzyme.mount(React.createElement(MyComponent)).state('users').length === 6);
  - text: <code>MyComponent</code>应该返回一个<code>div</code> ，一个<code>h1</code> ，然后是一个无序列表，其中包含每个在线状态设置为<code>true</code>用户的<code>li</code>元素。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MyComponent)); const users = (bool) => ({users:[ { username: ''Jeff'', online: bool }, { username: ''Alan'', online: bool }, { username: ''Mary'', online: bool }, { username: ''Jim'', online: bool   }, { username: ''Laura'', online: bool } ]}); const result = () => comp.find(''li'').length; const _1 = result(); const _2 = () => { comp.setState(users(true)); return waitForIt(() => result()) }; const _3 = () => { comp.setState(users(false)); return waitForIt(() => result()) }; const _4 = () => { comp.setState({ users: [] }); return waitForIt(() => result()) }; const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); assert(comp.find(''div'').length === 1 && comp.find(''h1'').length === 1 && comp.find(''ul'').length === 1 && _1 === 4 && _2_val === 5 && _3_val === 0 && _4_val === 0); }; '
  - text: <code>MyComponent</code>应该呈现包含每个在线用户的用户名的<code>li</code>元素。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MyComponent)); const users = (bool) => ({users:[ { username: ''Jeff'', online: bool }, { username: ''Alan'', online: bool }, { username: ''Mary'', online: bool }, { username: ''Jim'', online: bool   }, { username: ''Laura'', online: bool } ]}); const ul = () => { comp.setState(users(true)); return waitForIt(() => comp.find(''ul'').html()) }; const html = await ul(); assert(html === ''<ul><li>Jeff</li><li>Alan</li><li>Mary</li><li>Jim</li><li>Laura</li></ul>''); }; '
  - text: 每个列表项元素都应具有唯一的<code>key</code>属性。
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
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
