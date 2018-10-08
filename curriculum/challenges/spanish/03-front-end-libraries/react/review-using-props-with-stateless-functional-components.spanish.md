---
id: 5a24c314108439a4d403616f
title: Review Using Props with Stateless Functional Components
localeTitle: Revisión usando accesorios con componentes funcionales sin estado
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
A excepción del último desafío, ha estado pasando apoyos a componentes funcionales sin estado. Estos componentes actúan como funciones puras. Aceptan props como entrada y devuelven la misma vista cada vez que se pasan los mismos props. Puede que se pregunte qué es el estado, y el próximo desafío lo cubrirá con más detalle. Antes de eso, aquí hay una revisión de la terminología de los componentes. 
Un <em>componente funcional sin estado</em> es cualquier función que se escribe que acepta props y devuelve JSX. Un <em>componente sin estado</em> , por otro lado, es una clase que extiende <code>React.Component</code> , pero no usa el estado interno (cubierto en el próximo desafío). Finalmente, un <em>componente con estado</em> es cualquier componente que mantiene su propio estado interno. Es posible que vea los componentes con estado referidos simplemente como componentes o componentes React. 
Un patrón común es tratar de minimizar la falta de estado y crear componentes funcionales sin estado siempre que sea posible. Esto ayuda a incluir la administración de su estado en un área específica de su aplicación. A su vez, esto mejora el desarrollo y el mantenimiento de su aplicación al hacer que sea más fácil seguir cómo los cambios de estado afectan su comportamiento. 
</section>

## Instructions
<section id='instructions'> 
El editor de código tiene un componente <code>CampSite</code> que procesa un componente <code>Camper</code> como un elemento secundario. Defina el componente <code>Camper</code> y asígnele accesorios predeterminados de <code>{ name: &#39;CamperBot&#39; }</code> . Dentro del componente <code>Camper</code> , genere el código que desee, pero asegúrese de tener un elemento <code>p</code> que incluya solo el valor del <code>name</code> que se pasa como <code>prop</code> . Finalmente, defina <code>propTypes</code> en el componente <code>Camper</code> para requerir que se proporcione un <code>name</code> como prop y verifique que sea de tipo <code>string</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>CampSite</code> debe renderizar.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find("CampSite").length === 1; })(), "The <code>CampSite</code> component should render.");'
  - text: El componente <code>Camper</code> debe hacer.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find("Camper").length === 1; })(), "The <code>Camper</code> component should render.");'
  - text: El componente <code>Camper</code> debe incluir accesorios predeterminados que asignan la cadena <code>CamperBot</code> al <code>name</code> la clave.
    testString: 'getUserInput => assert((function() { const noWhiteSpace = getUserInput("index").replace(/\s/g, ""); const verify1 = "Camper.defaultProps={name:\"CamperBot\"}"; const verify2 = "Camper.defaultProps={name:"CamperBot"}"; return (noWhiteSpace.includes(verify1) || noWhiteSpace.includes(verify2)); })(), "The <code>Camper</code> component should include default props which assign the string <code>CamperBot</code> to the key <code>name</code>.");'
  - text: El componente <code>Camper</code> debe incluir tipos de prop que requieren que el <code>name</code> prop sea de tipo <code>string</code> .
    testString: 'getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); const noWhiteSpace = getUserInput("index").replace(/\s/g, ""); const verifyDefaultProps = "Camper.propTypes={name:PropTypes.string.isRequired}"; return noWhiteSpace.includes(verifyDefaultProps); })(), "The <code>Camper</code> component should include prop types which require the <code>name</code> prop to be of type <code>string</code>.");'
  - text: El componente <code>Camper</code> debe contener un elemento <code>p</code> con solo el texto del <code>name</code> prop.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find("p").text() === mockedComponent.find("Camper").props().name; })(), "The <code>Camper</code> component should contain a <code>p</code> element with only the text from the <code>name</code> prop.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

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
// change code below this line

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
var PropTypes = {
   string: { isRequired: true }
};
```

</div>

### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
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
// change code below this line

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

</section>
