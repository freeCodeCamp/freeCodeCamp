---
id: 5a24c314108439a4d4036171
title: Renderizar estado na interface do usuário
challengeType: 6
forumTopicId: 301409
dashedName: render-state-in-the-user-interface
---

# --description--

Uma vez que você define o estado inicial de um componente, você pode exibir qualquer parte dele na interface do usuário que é renderizada. Se um componente é stateful, ele sempre terá acesso aos dados no `state` em seu método `render()`. Você pode acessar os dados com `this.state`.

Se você deseja acessar um valor de estado dentro do `return` do método de renderização, você precisa envolver o valor entre chaves.

`state` é uma das características mais poderosas dos componentes do React. Ele permite que você rastreie dados importantes no seu aplicativo e renderize uma interface do usuário em resposta a alterações nestes dados. Se os seus dados mudarem, sua interface de usuário será alterada. React usa o que é chamado de um DOM virtual, para acompanhar as mudanças nos bastidores. Quando os dados de state atualiza, ele aciona uma re-renderização dos componentes usando esses dados - incluindo componentes filhos que receberam os dados como uma prop. React atualiza o DOM, mas apenas onde necessário. Isso significa que você não precisa se preocupar em mudar o DOM. Você simplesmente declara como deve ser a interface do usuário.

Note que se você faz um componente stateful, nenhum outro componente está ciente do seu `state`. O `state` é completamente encapsulado, ou local para esse componente, a não ser que você passe dados de estado para um componente filho como `props`. Esta noção de `state` encapsulado é muito importante porque permite que você escreva uma certa lógica, depois, tenha essa lógica contida e isolada num só lugar no seu código.

# --instructions--

No editor de código, `MyComponent` já é stateful. Defina uma tag `h1` no método de renderização do componente que renderiza o valor de `name` no state do componente.

**Observação:** o `h1` deve renderizar apenas o valor de `state` e nada mais. Em JSX, qualquer código que você escrever com chaves `{ }` será tratado como JavaScript. Então para acessar o valor do `state` basta incluir a referência em chaves.

# --hints--

`MyComponent` deve ter uma chave `name` com o valor `freeCodeCamp` armazenado no seu state.

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'freeCodeCamp'
);
```

`MyComponent` deve renderizar um elemento de título `h1` que está dentro de um único `div`.

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.mount(React.createElement(MyComponent)).html()
  )
);
```

O elemento de título `h1` renderizado deve conter apenas texto renderizado do estado do componente.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.html());
  };
  const firstValue = await first();
  const getValue = firstValue.replace(/\s/g, '');
  assert(getValue === '<div><h1>TestName</h1></div>');
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
