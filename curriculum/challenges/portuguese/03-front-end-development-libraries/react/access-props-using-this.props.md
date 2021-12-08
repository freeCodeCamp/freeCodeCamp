---
id: 5a24c314108439a4d403616e
title: Acessar props usando this.props
challengeType: 6
forumTopicId: 301375
dashedName: access-props-using-this-props
---

# --description--

Os últimos desafios cobriram as formas básicas de passar propriedades para componentes filhos. Mas e se o componente filho para o qual você está passando uma propriedade é um componente de classe ES6, em vez de um componente funcional sem estado? O componente da classe ES6 usa uma convenção ligeiramente diferente para acessar as propriedades.

Sempre que você se refere a um componente de classe dentro dele mesmo, você usa a palavra-chave `this`. Para acessar props dentro de um componente de classe, você adiciona `this` ao início do código que você usar para acessá-lo. Por exemplo, se um componente de classe ES6 possui uma prop chamada `data`, você escreve `{this.props.data}` em JSX.

# --instructions--

Renderize uma instância do componente `Welcome` no componente parente `App`. Aqui, dê a `Welcome` uma "prop" `name` e atribua a ela um valor de uma string. Dentro do elemento filho, `Welcome`, acesse a propriedade `name` dentro das tags `strong`.

# --hints--

O componente `App` deve retornar um único elemento `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.children().type() === 'div';
  })()
);
```

O elemento filho de `App` deve ser o componente `Welcome`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.children().childAt(0).name() === 'Welcome'
    );
  })()
);
```

O componente `Welcome` deve ter uma prop chamada `name`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return mockedComponent.find('Welcome').props().name;
  })()
);
```

O componente `Welcome` deve exibir a string que você passou como a prop `name` dentro das tags `strong`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(App));
    return (
      mockedComponent.find('strong').text() ===
      mockedComponent.find('Welcome').props().name
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome />
            { /* Change code above this line */ }
        </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong></strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};
```

# --solutions--

```jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          { /* Change code below this line */ }
          <p>Hello, <strong>{this.props.name}</strong>!</p>
          { /* Change code above this line */ }
        </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <Welcome name="Quincy"/>
            { /* Change code above this line */ }
        </div>
    );
  }
};
```
