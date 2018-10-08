---
id: 5a24c314108439a4d4036172
title: Render State in the User Interface Another Way
localeTitle: Estado de render en la interfaz de usuario de otra manera
challengeType: 6
isRequired: false
---

## Description
<section id='description'> 
Hay otra forma de acceder al <code>state</code> en un componente. En el método <code>render()</code> , antes de la declaración de <code>return</code> , puede escribir JavaScript directamente. Por ejemplo, podría declarar funciones, acceder a datos de <code>state</code> o <code>props</code> , realizar cálculos en estos datos, etc. Luego, puede asignar cualquier dato a las variables, a las que tiene acceso en la declaración de <code>return</code> . 
</section>

## Instructions
<section id='instructions'> 
En el método de procesamiento de <code>MyComponent</code> , defina una <code>const</code> llamada <code>name</code> y establezca que sea igual al valor del nombre en el <code>state</code> del componente. Debido a que puede escribir JavaScript directamente en esta parte del código, no tiene que incluir esta referencia entre llaves. 
A continuación, en la declaración de retorno, renderice este valor en una etiqueta <code>h1</code> usando el <code>name</code> la variable. Recuerde, debe usar la sintaxis JSX (llaves para JavaScript) en la declaración de devolución. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> debe tener un <code>name</code> clave con el valor <code>freeCodeCamp</code> almacenado en su estado.
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("name") === "freeCodeCamp", "<code>MyComponent</code> should have a key <code>name</code> with value <code>freeCodeCamp</code> stored in its state.");'
  - text: <code>MyComponent</code> debe representar un encabezado <code>h1</code> incluido en un solo <code>div</code> .
    testString: 'assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()), "<code>MyComponent</code> should render an <code>h1</code> header enclosed in a single <code>div</code>.");'
  - text: &#39;La etiqueta <code>h1</code> representada debe incluir una referencia a <code>{name}</code> .&#39;
    testString: 'getUserInput => assert(/<h1>\n*\s*\{\s*name\s*\}\s*\n*<\/h1>/.test(getUserInput("index")), "The rendered <code>h1</code> tag should include a reference to <code>{name}</code>.");'
  - text: El encabezado <code>h1</code> representado debe contener texto representado desde el estado del componente.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: "TestName" });   return waitForIt(() => mockedComponent.html()) }; const firstValue = await first(); assert(firstValue === "<div><h1>TestName</h1></div>", "The rendered <code>h1</code> header should contain text rendered from the component&apos;s state."); };'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line

    // change code above this line
    return (
      <div>
        { /* change code below this line */ }

        { /* change code above this line */ }
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
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
    const name = this.state.name;
    // change code above this line
    return (
      <div>
        { /* change code below this line */ }
        <h1>{name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};
```

</section>
