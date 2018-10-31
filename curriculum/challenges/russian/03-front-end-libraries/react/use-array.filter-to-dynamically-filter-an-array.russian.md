---
id: 5a24c314108439a4d403618c
title: Use Array.filter() to Dynamically Filter an Array
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Используйте Array.filter () для динамического фильтра массива
---

## Description
<section id="description"> Метод массива <code>map</code> - это мощный инструмент, который вы часто будете использовать при работе с React. Другой метод, связанный с <code>map</code> - это <code>filter</code> , который фильтрует содержимое массива на основе условия, а затем возвращает новый массив. Например, если у вас есть массив пользователей, у всех есть свойство <code>online</code> которое может быть установлено как <code>true</code> или <code>false</code> , вы можете фильтровать только тех пользователей, которые находятся в сети, написав: <code>let onlineUsers = users.filter(user =&gt; user.online);</code> </section>

## Instructions
<section id="instructions"> В редакторе кода, <code>MyComponent</code> «s <code>state</code> инициализируется массив пользователей. Некоторые пользователи подключены к сети, а некоторые нет. Отфильтруйте массив, чтобы вы видели только пользователей, которые находятся в сети. Для этого сначала используйте <code>filter</code> чтобы вернуть новый массив, содержащий только пользователей, чье <code>online</code> свойство <code>true</code> . Затем в переменной <code>renderOnline</code> сопоставьте фильтрованный массив и верните элемент <code>li</code> для каждого пользователя, который содержит текст своего <code>username</code> . Обязательно включите и уникальный <code>key</code> , как в последние задачи. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> должен существовать и отображать страницу.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find("MyComponent").length, 1, "<code>MyComponent</code> should exist and render to the page.");'
  - text: <code>MyComponent</code> должно быть инициализировано массивом из шести пользователей. &quot;)
    testString: 'assert(Array.isArray(Enzyme.mount(React.createElement(MyComponent)).state("users")) === true && Enzyme.mount(React.createElement(MyComponent)).state("users").length === 6, "<code>MyComponent</code>&apos;s state should be initialized to an array of six users.");'
  - text: '<code>MyComponent</code> должен возвращать <code>div</code> , <code>h1</code> , а затем неупорядоченный список, содержащий элементы <code>li</code> для каждого пользователя, статус онлайн которого равен <code>true</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MyComponent)); const users = (bool) => ({users:[ { username: "Jeff", online: bool }, { username: "Alan", online: bool }, { username: "Mary", online: bool }, { username: "Jim", online: bool   }, { username: "Laura", online: bool } ]}); const result = () => comp.find("li").length; const _1 = result(); const _2 = () => { comp.setState(users(true)); return waitForIt(() => result()) }; const _3 = () => { comp.setState(users(false)); return waitForIt(() => result()) }; const _4 = () => { comp.setState({ users: [] }); return waitForIt(() => result()) }; const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); assert(comp.find("div").length === 1 && comp.find("h1").length === 1 && comp.find("ul").length === 1 && _1 === 4 && _2_val === 5 && _3_val === 0 && _4_val === 0, "<code>MyComponent</code> should return a <code>div</code>, an <code>h1</code>, and then an unordered list containing <code>li</code> elements for every user whose online status is set to <code>true</code>."); }; '
  - text: <code>MyComponent</code> должен отображать элементы <code>li</code> которые содержат имя пользователя каждого онлайн-пользователя.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MyComponent)); const users = (bool) => ({users:[ { username: "Jeff", online: bool }, { username: "Alan", online: bool }, { username: "Mary", online: bool }, { username: "Jim", online: bool   }, { username: "Laura", online: bool } ]}); const ul = () => { comp.setState(users(true)); return waitForIt(() => comp.find("ul").html()) }; const html = await ul(); assert(html === "<ul><li>Jeff</li><li>Alan</li><li>Mary</li><li>Jim</li><li>Laura</li></ul>", "<code>MyComponent</code> should render <code>li</code> elements that contain the username of each online user."); }; '
  - text: Каждый элемент элемента списка должен иметь уникальный <code>key</code> атрибут.
    testString: 'assert((() => { const ul = Enzyme.mount(React.createElement(MyComponent)).find("ul"); console.log(ul.debug()); const keys = new Set([ ul.childAt(0).key(), ul.childAt(1).key(), ul.childAt(2).key(), ul.childAt(3).key() ]); return keys.size === 4; })(), "Each list item element should have a unique <code>key</code> attribute.");'

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
</section>
