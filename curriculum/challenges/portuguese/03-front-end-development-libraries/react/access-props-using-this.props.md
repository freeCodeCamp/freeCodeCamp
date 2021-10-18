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

Renderize uma instância do componente `ReturnTempPassword` no componente parente `ResetPassword`. Aqui, dê a `ReturnTempPassword` à prop `tempPassword` e atribua a ela o valor de uma string que tenha pelo menos 8 caracteres. Dentro do filho, `ReturnTempPassword`, acesse a prop `tempPassword` dentro das tags `strong` para certificar-se que o usuário veja a senha temporária.

# --hints--

O componente `ResetPassword` deve retornar um único elemento `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ResetPassword));
    return mockedComponent.children().type() === 'div';
  })()
);
```

O quarto filho de `ResetPassword` deve ser o componente `ReturnTempPassword`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ResetPassword));
    return (
      mockedComponent.children().childAt(3).name() === 'ReturnTempPassword'
    );
  })()
);
```

O componente `ReturnTempPassword` deve ter uma prop chamada `tempPassword`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ResetPassword));
    return mockedComponent.find('ReturnTempPassword').props().tempPassword;
  })()
);
```

A prop `tempPassword` de `ReturnTempPassword` deve ser igual uma string de pelo menos 8 caracteres.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ResetPassword));
    const temp = mockedComponent.find('ReturnTempPassword').props()
      .tempPassword;
    return typeof temp === 'string' && temp.length >= 8;
  })()
);
```

O componente `ReturnTempPassword` deve exibir a senha que você criou como a prop `tempPassword` dentro das tags `strong`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ResetPassword));
    return (
      mockedComponent.find('strong').text() ===
      mockedComponent.find('ReturnTempPassword').props().tempPassword
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ResetPassword />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <p>Your temporary password is: <strong></strong></p>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* Change code below this line */ }

          { /* Change code above this line */ }
        </div>
    );
  }
};
```

# --solutions--

```jsx
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* Change code below this line */ }
          <ReturnTempPassword tempPassword="serrPbqrPnzc" />
          { /* Change code above this line */ }
        </div>
    );
  }
};
```
