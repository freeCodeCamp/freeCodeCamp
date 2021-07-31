---
id: 5a24c314108439a4d403617a
title: Passar state como props para componentes filhos
challengeType: 6
forumTopicId: 301403
dashedName: pass-state-as-props-to-child-components
---

# --description--

Você viu muitos exemplos que passaram "props" para elementos JSX filhos e componentes filho React em desafios anteriores. Você pode estar se perguntando de onde vêm essas props. Um padrão comum é ter um componente com estado contendo o `state` importante para o seu aplicativo, que depois renderiza componentes filhos. Você quer que esses componentes tenham acesso a alguns pedaços desse `state`, que são passados como "props".

Por exemplo, talvez você tenha um componente `App` que renderiza uma `Navbar`, entre outros componentes. No seu `App`, você tem `state` que contém muitas informações de usuário, mas a barra de `Navbar` só precisa acessar o nome de usuário para que possa exibi-lo. Você passa esse pedaço de `state` para o componente `Navbar` como uma prop.

Este padrão ilustra alguns paradigmas importantes em React. O primeiro é um *fluxo de dados unidirecional*. Estado flui em uma direção para baixo na árvore dos componentes da sua aplicação, do componente pai stateful para componentes filho. Os componentes filhos só recebem os dados do estado de que precisam. O segundo é que aplicativos de estado complexos podem ser divididos em apenas alguns, ou talvez um único componente com estado. O resto dos seus componentes simplesmente recebem o state do pai como "props" e renderizam uma interface desse estado. Isso começa a criar uma separação onde o gerenciamento de estado é tratado em uma parte do código e renderização de interface em outra. Este princípio da separação da lógica do estado da lógica da interface do usuário é um dos princípios fundamentais do React. Quando usado corretamente, torna o design de aplicações complexas e com estado muito mais fácil de gerenciar.

# --instructions--

O componente `MyApp` é stateful e renderiza um componente `Navbar` como filho. Passe a propriedade `name` em seu `state` até o componente filho, em seguida, mostre o `name` na tag `h1` que faz parte da renderização do `Navbar`. `name` deve aparecer após o texto `Hello, my name is:`.

# --hints--

O componente `MyApp` deve renderizar com um componente `Navbar` dentro dele.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return (
      mockedComponent.find('MyApp').length === 1 &&
      mockedComponent.find('Navbar').length === 1
    );
  })()
);
```

O componente `Navbar` deve receber a propriedade `MyApp` state `name` como props.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const setState = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.find('Navbar').props());
  };
  const navProps = await setState();
  assert(navProps.name === 'TestName');
};
```

O elemento `h1` na `Navbar` deve renderizar a prop `name`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const navH1Before = mockedComponent.find('Navbar').find('h1').text();
  const setState = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.find('Navbar').find('h1').text());
  };
  const navH1After = await setState();
  assert(new RegExp('TestName').test(navH1After) && navH1After !== navH1Before);
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar />
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: </h1>
      {/* Change code above this line */}
    </div>
    );
  }
};
```

# --solutions--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
```
