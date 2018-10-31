---
id: 5a24c314108439a4d403617a
title: Pass State as Props to Child Components
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Pasar estado como accesorios a componentes secundarios
---

## Description
<section id="description"> Vio muchos ejemplos que pasaron apoyos a elementos JSX secundarios y componentes React secundarios en desafíos anteriores. Quizás te preguntes de dónde provienen esos accesorios. Un patrón común es tener un componente con estado que contenga el <code>state</code> importante para su aplicación, que luego presente componentes secundarios. Desea que estos componentes tengan acceso a algunas partes de ese <code>state</code> , que se pasan como accesorios. Por ejemplo, tal vez tenga un componente de la <code>App</code> que presente una <code>Navbar</code> , entre otros componentes. En su <code>App</code> , tiene un <code>state</code> que contiene mucha información de usuario, pero la <code>Navbar</code> solo necesita acceso al nombre de usuario del usuario para poder mostrarla. <code>Navbar</code> esa pieza de <code>state</code> al componente <code>Navbar</code> como prop. Este patrón ilustra algunos paradigmas importantes en React. El primero es <em>el flujo de datos unidireccional</em> . El estado fluye en una dirección en el árbol de los componentes de la aplicación, desde el componente primario con estado hasta los componentes secundarios. Los componentes secundarios solo reciben los datos de estado que necesitan. La segunda es que las aplicaciones con estado complejas pueden dividirse en solo unos pocos, o tal vez un solo componente con estado. El resto de sus componentes simplemente reciben el estado del padre como apoyo y representan una IU desde ese estado. Comienza a crear una separación donde la administración del estado se maneja en una parte del código y la representación de la interfaz de usuario en otra. Este principio de separar la lógica de estado de la lógica de UI es uno de los principios clave de React. Cuando se usa correctamente, hace que el diseño de aplicaciones complejas y con estado sea mucho más fácil de administrar. </section>

## Instructions
<section id="instructions"> El componente <code>MyApp</code> tiene estado y representa un componente de la <code>Navbar</code> como un elemento secundario. Pase la propiedad del <code>name</code> en su <code>state</code> hasta el componente secundario, luego muestre el <code>name</code> en la etiqueta <code>h1</code> que forma parte del método de renderizado de la <code>Navbar</code> de <code>Navbar</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El componente <code>MyApp</code> debe renderizarse con un componente <code>Navbar</code> dentro.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find("MyApp").length === 1 && mockedComponent.find("Navbar").length === 1; })(), "The <code>MyApp</code> component should render with a <code>Navbar</code> component inside.");'
  - text: El componente <code>Navbar</code> debe recibir el <code>name</code> propiedad de estado <code>MyApp</code> como props.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const setState = () => { mockedComponent.setState({name: "TestName"}); return waitForIt(() => mockedComponent.find("Navbar").props() )}; const navProps = await setState(); assert(navProps.name === "TestName", "The <code>Navbar</code> component should receive the <code>MyApp</code> state property <code>name</code> as props."); }; '
  - text: El elemento <code>h1</code> en la <code>Navbar</code> de <code>Navbar</code> debe representar el <code>name</code> prop.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const navH1Before = mockedComponent.find("Navbar").find("h1").text(); const setState = () => { mockedComponent.setState({name: "TestName"}); return waitForIt(() => mockedComponent.find("Navbar").find("h1").text() )}; const navH1After = await setState(); assert(new RegExp("TestName").test(navH1After) && navH1After !== navH1Before, "The <code>h1</code> element in <code>Navbar</code> should render the <code>name</code> prop."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar /* your code here */ />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: /* your code here */ </h1>
    </div>
    );
  }
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
// solution required
```
</section>
