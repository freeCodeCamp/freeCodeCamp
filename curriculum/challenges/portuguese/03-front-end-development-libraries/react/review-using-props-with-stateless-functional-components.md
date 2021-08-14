---
id: 5a24c314108439a4d403616f
title: Revisar o uso de props com componentes funcionais sem estado
challengeType: 6
forumTopicId: 301411
dashedName: review-using-props-with-stateless-functional-components
---

# --description--

Exceto pelo último desafio, você tem passado "props" para componentes funcionais sem estado. Esses componentes agem como funções puras. Eles aceitam props como entrada e retornam a mesma view toda vez que eles são passados nas mesmas props. Você pode estar se perguntando o que é state, e o próximo desafio abordará isso com mais detalhes. Antes disso, aqui está uma revisão da terminologia para componentes.

Um *componente funcional stateless (sem estado)* é qualquer função que você escreve que aceita props e retorna JSX. Um *componente stateless (sem estado)*, por outro lado, é uma classe que estende `React.Component`, mas não usa estado interno (abordado no próximo desafio). Finalmente, um *componente stateful (com estado)* é um componente de classe que mantém seu próprio estado interno. Você pode ver componentes de estado referidos simplesmente como componentes ou componentes do React.

Um padrão comum é tentar minimizar statefulness e criar componentes funcionais sem estado, sempre que possível. Isso ajuda a conter sua gestão de estado para uma área específica de sua aplicação. Por sua vez, isso melhora o desenvolvimento e a manutenção do seu aplicativo, tornando mais fácil acompanhar como alterações no estado afetam seu comportamento.

# --instructions--

O editor de código tem um componente `CampSite` que renderiza um componente `Camper` como filho. Defina o componente `Camper` e atribua a ele as propriedades padrão de `{ name: 'CamperBot' }`. Dentro do componente `Camper`, renderize qualquer código que você quiser, mas certifique-se de ter um elemento `p` que inclua apenas o valor `name` que é passado como uma `prop`. Finalmente, defina `propTypes` no componente `Camper` para exigir que o `name` seja fornecido como uma prop e verifique se é do tipo `string`.

# --hints--

O componente `CampSite` deve ser renderizado.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('CampSite').length === 1;
  })()
);
```

O componente `Camper` deve ser renderizado.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('Camper').length === 1;
  })()
);
```

O componente `Camper` deve incluir a props padrão que atribui a string `CamperBot` à chave `name`.

```js
assert(
  /Camper.defaultProps={name:(['"`])CamperBot\1,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

O componente `Camper` deve incluir tipo de prop, o que obriga que a prop `name` seja do tipo `string`.

```js
assert(
  /Camper.propTypes={name:PropTypes.string.isRequired,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

O componente `Camper` deve conter um elemento `p` com apenas o texto da prop `name`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return (
      mockedComponent.find('p').text() ===
      mockedComponent.find('Camper').props().name
    );
  })()
);
```

# --seed--

## --before-user-code--

```jsx
var PropTypes = {
   string: { isRequired: true }
};
```

## --after-user-code--

```jsx
ReactDOM.render(<CampSite />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
```

# --solutions--

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line

const Camper = (props) => {
   return (
     <div>
       <p>{props.name}</p>
     </div>
   );
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

Camper.defaultProps = {
  name: 'CamperBot'
};
```
