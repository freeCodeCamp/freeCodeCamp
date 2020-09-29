---
id: 5a24c314108439a4d403618c
title: Use Array.filter() to Dynamically Filter an Array
challengeType: 6
videoUrl: ''
localeTitle: Utilice Array.filter () para filtrar dinámicamente una matriz
---

## Description
<section id="description"> El método de matriz de <code>map</code> es una herramienta poderosa que usará a menudo cuando trabaje con React. Otro método relacionado con el <code>map</code> es el <code>filter</code> , que filtra el contenido de una matriz según una condición y luego devuelve una nueva matriz. Por ejemplo, si tiene una serie de usuarios que tienen una propiedad en <code>online</code> que puede configurarse como <code>true</code> o <code>false</code> , puede filtrar solo a aquellos usuarios que están en línea escribiendo: <code>let onlineUsers = users.filter(user =&gt; user.online);</code> </section>

## Instructions
<section id="instructions"> En el editor de código, el <code>state</code> <code>MyComponent</code> se inicializa con una matriz de usuarios. Algunos usuarios están en línea y otros no. Filtre la matriz para ver solo los usuarios que están en línea. Para hacer esto, primero use el <code>filter</code> para devolver una nueva matriz que contenga solo los usuarios cuya propiedad en <code>online</code> es <code>true</code> . Luego, en la variable <code>renderOnline</code> , <code>renderOnline</code> sobre la matriz filtrada y devuelva un elemento <code>li</code> para cada usuario que contenga el texto de su <code>username</code> de <code>username</code> . Asegúrese de incluir también una <code>key</code> única, como en los últimos desafíos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> debería existir y renderizarse a la página.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find("MyComponent").length, 1, "<code>MyComponent</code> should exist and render to the page.");'
  - text: El estado de <code>MyComponent</code> debería inicializarse a una matriz de seis usuarios &quot;.
    testString: 'assert(Array.isArray(Enzyme.mount(React.createElement(MyComponent)).state("users")) === true && Enzyme.mount(React.createElement(MyComponent)).state("users").length === 6, "<code>MyComponent</code>&apos;s state should be initialized to an array of six users.");'
  - text: '<code>MyComponent</code> debe devolver un <code>div</code> , un <code>h1</code> , y luego una lista desordenada que contiene elementos <code>li</code> para cada usuario cuyo estado en línea se establece en <code>true</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MyComponent)); const users = (bool) => ({users:[ { username: "Jeff", online: bool }, { username: "Alan", online: bool }, { username: "Mary", online: bool }, { username: "Jim", online: bool   }, { username: "Laura", online: bool } ]}); const result = () => comp.find("li").length; const _1 = result(); const _2 = () => { comp.setState(users(true)); return waitForIt(() => result()) }; const _3 = () => { comp.setState(users(false)); return waitForIt(() => result()) }; const _4 = () => { comp.setState({ users: [] }); return waitForIt(() => result()) }; const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); assert(comp.find("div").length === 1 && comp.find("h1").length === 1 && comp.find("ul").length === 1 && _1 === 4 && _2_val === 5 && _3_val === 0 && _4_val === 0, "<code>MyComponent</code> should return a <code>div</code>, an <code>h1</code>, and then an unordered list containing <code>li</code> elements for every user whose online status is set to <code>true</code>."); }; '
  - text: <code>MyComponent</code> debe representar elementos <code>li</code> que contengan el nombre de usuario de cada usuario en línea.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MyComponent)); const users = (bool) => ({users:[ { username: "Jeff", online: bool }, { username: "Alan", online: bool }, { username: "Mary", online: bool }, { username: "Jim", online: bool   }, { username: "Laura", online: bool } ]}); const ul = () => { comp.setState(users(true)); return waitForIt(() => comp.find("ul").html()) }; const html = await ul(); assert(html === "<ul><li>Jeff</li><li>Alan</li><li>Mary</li><li>Jim</li><li>Laura</li></ul>", "<code>MyComponent</code> should render <code>li</code> elements that contain the username of each online user."); }; '
  - text: Cada elemento del elemento de la lista debe tener un atributo de <code>key</code> único.
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
