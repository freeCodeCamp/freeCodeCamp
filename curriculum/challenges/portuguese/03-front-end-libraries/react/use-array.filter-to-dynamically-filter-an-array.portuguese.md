---
id: 5a24c314108439a4d403618c
title: Use Array.filter() to Dynamically Filter an Array
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use Array.filter () para filtrar dinamicamente uma matriz
---

## Description
<section id="description"> O método de matriz de <code>map</code> é uma ferramenta poderosa que você usará frequentemente ao trabalhar com o React. Outro método relacionado ao <code>map</code> é <code>filter</code> , que filtra o conteúdo de um array com base em uma condição e retorna um novo array. Por exemplo, se você tiver uma matriz de usuários que todos tenham uma propriedade <code>online</code> que pode ser configurada como <code>true</code> ou <code>false</code> , você poderá filtrar apenas os usuários on-line escrevendo: <code>let onlineUsers = users.filter(user =&gt; user.online);</code> </section>

## Instructions
<section id="instructions"> No editor de código, o <code>state</code> <code>MyComponent</code> é inicializado com uma matriz de usuários. Alguns usuários estão online e outros não. Filtre a matriz para ver apenas os usuários on-line. Para fazer isso, primeiro use <code>filter</code> para retornar um novo array contendo apenas os usuários cuja propriedade <code>online</code> é <code>true</code> . Em seguida, na variável <code>renderOnline</code> , mapeie sobre a matriz filtrada e retorne um elemento <code>li</code> para cada usuário que contenha o texto de seu <code>username</code> de <code>username</code> . Certifique-se de incluir uma <code>key</code> única também, como nos últimos desafios. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> deve existir e renderizar para a página.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find("MyComponent").length, 1, "<code>MyComponent</code> should exist and render to the page.");'
  - text: O estado do <code>MyComponent</code> deve ser inicializado para um array de seis usuários. &quot;)
    testString: 'assert(Array.isArray(Enzyme.mount(React.createElement(MyComponent)).state("users")) === true && Enzyme.mount(React.createElement(MyComponent)).state("users").length === 6, "<code>MyComponent</code>&apos;s state should be initialized to an array of six users.");'
  - text: '<code>MyComponent</code> deve retornar uma <code>div</code> , uma <code>h1</code> e, em seguida, uma lista não ordenada contendo <code>li</code> elements para cada usuário cujo status on-line esteja definido como <code>true</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MyComponent)); const users = (bool) => ({users:[ { username: "Jeff", online: bool }, { username: "Alan", online: bool }, { username: "Mary", online: bool }, { username: "Jim", online: bool   }, { username: "Laura", online: bool } ]}); const result = () => comp.find("li").length; const _1 = result(); const _2 = () => { comp.setState(users(true)); return waitForIt(() => result()) }; const _3 = () => { comp.setState(users(false)); return waitForIt(() => result()) }; const _4 = () => { comp.setState({ users: [] }); return waitForIt(() => result()) }; const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); assert(comp.find("div").length === 1 && comp.find("h1").length === 1 && comp.find("ul").length === 1 && _1 === 4 && _2_val === 5 && _3_val === 0 && _4_val === 0, "<code>MyComponent</code> should return a <code>div</code>, an <code>h1</code>, and then an unordered list containing <code>li</code> elements for every user whose online status is set to <code>true</code>."); }; '
  - text: <code>MyComponent</code> deve processar elementos <code>li</code> que contenham o nome de usuário de cada usuário on-line.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MyComponent)); const users = (bool) => ({users:[ { username: "Jeff", online: bool }, { username: "Alan", online: bool }, { username: "Mary", online: bool }, { username: "Jim", online: bool   }, { username: "Laura", online: bool } ]}); const ul = () => { comp.setState(users(true)); return waitForIt(() => comp.find("ul").html()) }; const html = await ul(); assert(html === "<ul><li>Jeff</li><li>Alan</li><li>Mary</li><li>Jim</li><li>Laura</li></ul>", "<code>MyComponent</code> should render <code>li</code> elements that contain the username of each online user."); }; '
  - text: Cada elemento de item de lista deve ter um atributo de <code>key</code> exclusivo.
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
