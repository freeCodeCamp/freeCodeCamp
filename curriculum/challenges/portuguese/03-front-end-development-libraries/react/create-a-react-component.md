---
id: 5a24c314108439a4d4036163
title: Criar um componente do React
challengeType: 6
forumTopicId: 301386
dashedName: create-a-react-component
---

# --description--

A outra forma de definir um componente do React é com a sintaxe `class` do ES6. No exemplo a seguir, `Kitten` estende `React.Component`:

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```

Isso cria a classe ES6 `Kitten` que estende a classe `React.Component`. Então a classe `Kitten` agora possui acesso a diversos recursos úteis do React, como local state e lifecycle hooks. Não se preocupe se você não estiver familiarizado com esses termos ainda, eles serão abordados em detalhes maiores nos desafios futuros. Também note que a classe `Kitten` possui um `constructor` definido dentro dele que chama `super()`. O construtor usa `super()` para chamar o construtor da classe pai, nesse caso `React.Component`. O construtor é um método especial usado durante a inicialização de objetos que são criados com a palavra-chave `class`. É uma boa prática chamar o `constructor` de um componente com `super`, e passar `props` para ambos. Isso garante que o componente é inicializado corretamente. Por agora, saiba que é padrão que esse código seja incluído. Em breve você verá outros usos para o construtor assim como para `props`.

# --instructions--

`MyComponent` é definido no editor de código usando a sintaxe de classe. Termine de escrever o método `render` para que ele retorne um elemento `div` que contém um `h1` com o texto `Hello React!`.

# --hints--

O componente React deve retornar um elemento `div`.

```js
assert(Enzyme.shallow(React.createElement(MyComponent)).type() === 'div');
```

A `div` retornada deve renderizar um elemento de título `h1` dentro dele.

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.shallow(React.createElement(MyComponent)).html()
  )
);
```

O elemento de título `h1` deve conter a string `Hello React!`.

```js
assert(
  Enzyme.shallow(React.createElement(MyComponent)).html() ===
    '<div><h1>Hello React!</h1></div>'
);
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
  }
  render() {
    // Change code below this line



    // Change code above this line
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // Change code above this line
  }
};
```
