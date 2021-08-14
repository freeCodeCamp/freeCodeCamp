---
id: 5a24c314108439a4d403616a
title: Passar um array como props
challengeType: 6
forumTopicId: 301401
dashedName: pass-an-array-as-props
---

# --description--

O último desafio demonstrou como passar informações de um componente pai para um componente filho como propriedades `props`. Este desafio analisa como matrizes podem ser passadas como `props`. Para passar um array para um elemento JSX, ele deve ser tratado como JavaScript e encapsulado em chaves.

```jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

O componente filho então tem acesso às propriedades `colors` do array. Métodos de array como `join()` podem ser usados ao acessar a propriedade. `const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>` Isto unirá todos os itens do array `colors` em uma string separada por vírgulas e produzirá: `<p>green, blue, red</p>` Depois, aprenderemos sobre outros métodos comuns de renderizar arrays de dados em React.

# --instructions--

Existem os componentes `List` e `ToDo` no editor de código. Ao renderizar cada `List` do componente `ToDo`, passe em uma propriedade `tasks` atribuída a um array de tarefas a fazer, por exemplo `["walk dog", "workout"]`. Em seguida, acesse o array `tasks` no componente `List`, mostrando seu valor dentro do elemento `p`. Use `join(", ")` para exibir o array `props.tasks` no elemento `p` como uma lista separada por vírgulas. A lista de hoje deveria ter pelo menos 2 tarefas e a de amanhã deveria ter pelo menos 3 tarefas.

# --hints--

O componente `ToDo` deve retornar um único `div` externo.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().type() === 'div';
  })()
);
```

O terceiro filho do componente `ToDo` deve ser uma instância do componente `List`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(2).name() === 'List';
  })()
);
```

O quinto filho do componente `ToDo` deve ser uma instância do componente `List`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(4).name() === 'List';
  })()
);
```

Ambas as instâncias do componente `List` devem ter uma propriedade chamada `tasks` e `tasks` devem ser do tipo array.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      Array.isArray(mockedComponent.find('List').get(0).props.tasks) &&
      Array.isArray(mockedComponent.find('List').get(1).props.tasks)
    );
  })()
);
```

O primeiro componente `List` que representa as tarefas para hoje deve ter 2 ou mais itens.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(0).props.tasks.length >= 2;
  })()
);
```

O segundo componente `List` que representa as tarefas para amanhã deve ter 3 ou mais itens.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(1).props.tasks.length >= 3;
  })()
);
```

O componente `List` deve renderizar o valor da propriedade `tasks` na tag `p`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      mockedComponent
        .find('p')
        .get(0)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(0)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',') &&
      mockedComponent
        .find('p')
        .get(1)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(1)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',')
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ToDo />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List/>
        <h2>Tomorrow</h2>
        <List/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const List= (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['study', 'exercise']} />
        <h2>Tomorrow</h2>
        <List tasks={['call Sam', 'grocery shopping', 'order tickets']} />
      </div>
    );
  }
};
```
