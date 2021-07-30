---
id: 5a24c314108439a4d403618b
title: Dar aos elementos irmãos um atributo chave único
challengeType: 6
forumTopicId: 301394
dashedName: give-sibling-elements-a-unique-key-attribute
---

# --description--

O último desafio mostrou como o método `map` é usado para renderizar dinamicamente um número de elementos com base na entrada do usuário. No entanto, faltou uma peça importante desse exemplo. Ao criar um array de elementos, cada um precisa de um atributo `key` definido com um valor único. React usa essas chaves para manter o controle de quais itens são adicionados, alterados ou removidos. Isso ajuda a tornar o processo de re-renderização mais eficiente quando a lista é modificada de qualquer forma.

**Observação:** as chaves só precisam ser únicas entre elementos irmãos, elas não precisam ser globalmente exclusivas na sua aplicação.

# --instructions--

O editor de código tem uma array com alguns frameworks front-end e um componente funcional sem estado chamado `Frameworks()`. `Frameworks()` precisa mapear a matriz para uma lista não ordenada, assim como no último desafio. Finalize a escrita da função de callback de `map` para retornar um elemento `li` para cada framework no array `frontEndFrameworks`. Desta vez, certifique-se de dar a cada `li` um atributo `key`, definido como um valor único. Os elementos `li` também devem conter o texto do `frontEndFrameworks`.

Normalmente, você quer tornar a chave algo que identifica de forma única o elemento que está a ser renderizado. Como um último recurso, o índice da matriz pode ser usado, mas normalmente você deve tentar usar uma identificação exclusiva.

# --hints--

O componente `Frameworks` deve existir e renderizar a página.

```js
assert(
  Enzyme.mount(React.createElement(Frameworks)).find('Frameworks').length === 1
);
```

`Frameworks` deve renderizar um elemento `h1`.

```js
assert(Enzyme.mount(React.createElement(Frameworks)).find('h1').length === 1);
```

`Frameworks` deve renderizar um elemento `ul`.

```js
assert(Enzyme.mount(React.createElement(Frameworks)).find('ul').length === 1);
```

A tag `ul` deve renderizar 6 elementos filhos `li`.

```js
assert(
  Enzyme.mount(React.createElement(Frameworks)).find('ul').children().length ===
    6 &&
    Enzyme.mount(React.createElement(Frameworks))
      .find('ul')
      .childAt(0)
      .name() === 'li' &&
    Enzyme.mount(React.createElement(Frameworks)).find('li').length === 6
);
```

Cada elemento de item da lista deve ter um atributo único `key`.

```js
assert(
  (() => {
    const ul = Enzyme.mount(React.createElement(Frameworks)).find('ul');
    const keys = new Set([
      ul.childAt(0).key(),
      ul.childAt(1).key(),
      ul.childAt(2).key(),
      ul.childAt(3).key(),
      ul.childAt(4).key(),
      ul.childAt(5).key()
    ]);
    return keys.size === 6;
  })()
);
```

Cada elemento de item da lista deve conter o texto de `frontEndFrameworks`.

```js
assert(
  (() => {
    const li = Enzyme.mount(React.createElement(Frameworks))
      .find('ul')
      .children();
    return [...Array(5)].every((_, i) =>
      frontEndFrameworks.includes(li.at(i).text())
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Frameworks />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = null; // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
```

# --solutions--

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((fw, i) => <li key={i}>{fw}</li>);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
```
