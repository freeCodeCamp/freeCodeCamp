---
id: 5a24c314108439a4d4036168
title: Escrever um componente do React do zero
challengeType: 6
forumTopicId: 301424
dashedName: write-a-react-component-from-scratch
---

# --description--

Agora que você aprendeu os conceitos básicos de componentes JSX e React, é hora de escrever um componente por conta própria. Componentes do React são os blocos centrais de construção de aplicações React, por isso é importante se familiarizar com a escrita. Lembre-se, um componente típico do React é uma `class` do ES6 que estende `React.Component`. Ele possui um método de renderização que retorna HTML (a partir de JSX) ou `null`. Essa é a forma básica de um componente do React. Assim que você entender bem, você estará preparado para começar a construir projetos mais complexos em React.

# --instructions--

Define uma classe `MyComponent` que estende `React.Component`. Seu método de renderização deve retornar uma `div` que contém uma tag `h1` com o texto: `My First React Component!` nela. Use este texto exatamente, letras maiúsculas e minúsculas, e pontuação importam. Certifique-se de chamar o construtor para seu componente também.

Renderize este componente para o DOM usando `ReactDOM.render()`. Há um `div` com `id='challenge-node'` disponível para você usar.

# --hints--

Deve haver um componente React chamado `MyComponent`.

```js
(getUserInput) =>
  assert(
    __helpers
      .removeWhiteSpace(getUserInput('index'))
      .includes('classMyComponentextendsReact.Component{')
  );
```

`MyComponent` deve conter uma tag `h1` com texto `My First React Component!` Letras maiúsculas e minúsculas, e pontuação importam.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('h1').text() === 'My First React Component!';
  })()
);
```

`MyComponent` deve existir e ser renderizado no DOM.

```js
assert(document.getElementById('challenge-node').childNodes.length === 1);
```

`MyComponent` deve ter um construtor chamando `super` com `props`.

```js
assert(
  MyComponent.toString().includes('MyComponent(props)') &&
    MyComponent.toString().includes('_super.call(this, props)')
);
```

# --seed--

## --seed-contents--

```jsx
// Change code below this line
```

# --solutions--

```jsx
// Change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
```
