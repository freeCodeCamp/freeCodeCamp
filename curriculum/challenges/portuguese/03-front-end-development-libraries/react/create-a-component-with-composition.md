---
id: 5a24c314108439a4d4036164
title: Criar um componente com composição
challengeType: 6
forumTopicId: 301383
dashedName: create-a-component-with-composition
---

# --description--

Agora vamos ver como podemos compor vários componentes React juntos. Imagine que você está construindo um aplicativo e criou três componentes: uma `Navbar`, um `Dashboard`, e um `Footer`.

Para compor esses componentes juntos, você poderia criar um componente `App` *pai* que renderiza cada um desses três componentes como *filhos*. Para renderizar um componente como filho em um componente React, você inclui o nome do componente escrito como uma tag HTML personalizada no JSX. Por exemplo, no método `render` você pode escrever:

```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

Quando o React encontra uma tag HTML personalizada que faz referência a outro componente (um nome de componente encapsulado em `< />` como neste exemplo), ele renderiza a marcação para esse componente na localização da tag. Isso deve ilustrar a relação pai/filho entre o componente `App` e a `Navbar`, o `Dashboard`, e o `Footer`.

# --instructions--

No editor de código, há um simples componente funcional chamado `ChildComponent` e um componente de classe chamado `ParentComponent`. Componha as duas juntas ao renderizar o `ChildComponent` dentro do `ParentComponent`. Certifique-se de fechar a tag `ChildComponent` com uma barra avançada.

**Observação:** `ChildComponent` é definida com uma arrow function do ES6, porque esta é uma prática muito comum ao usar React. No entanto, é do conhecimento geral que se trata apenas de uma função. Se você não estiver familiarizado com a sintaxe de arrow function, consulte a seção de JavaScript.

# --hints--

O componente React deve retornar um único elemento `div`.

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.type() === 'div';
  })()
);
```

O componente deve retornar dois elementos aninhados.

```js
assert(
  (function () {
    var shallowRender = Enzyme.shallow(React.createElement(ParentComponent));
    return shallowRender.children().length === 2;
  })()
);
```

O componente deve retornar o `ChildComponent` como seu segundo filho.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ParentComponent));
    return (
      mockedComponent.find('ParentComponent').find('ChildComponent').length ===
      1
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ParentComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }


        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
        <ChildComponent />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
