---
id: 5a24c314108439a4d403618a
title: Utiliza Array.map() para renderizar dinámicamente los elementos
challengeType: 6
forumTopicId: 301417
dashedName: use-array-map-to-dynamically-render-elements
---

# --description--

El renderizado condicional es útil, pero es posible que necesites tus componentes para renderizar un número desconocido de elementos. A menudo en la programación reactiva, un programador no tiene forma de saber cuál es el estado de una aplicación hasta el tiempo de ejecución, porque mucho depende de la interacción de un usuario con ese programa. Los programadores necesitan escribir su código para manejar correctamente ese estado desconocido antes de tiempo. Usar `Array.map()` en React ilustra este concepto.

Por ejemplo, crea una aplicación simple "To Do List". Como programador, no tienes forma de saber cuántos elementos puede tener un usuario en su lista. Necesitas configurar tu componente para renderizar dinámicamente el número correcto de elementos de la lista mucho antes de que alguien que use el programa decida que hoy es día de lavandería.

# --instructions--

El editor de código tiene la mayoría del componente `MyToDoList` configurado. Parte de este código debería parecer familiar si completaste el desafío de formulario controlado. Vas a notar un `textarea` y un `button`, junto con un par de métodos que rastrean sus estados, pero aún no se muestra nada a la página.

Dentro del `constructor`, crea un objeto `this.state` y define dos estados: `userInput` que debe inicializarse como una cadena vacía, y `toDoList` que debe inicializarse como un arreglo vacío. Luego, elimina el valor `null` del método `render()` a un costado de la variable `items`. En su lugar, utiliza la función map() para recorrer el arreglo `toDoList` almacenado en el estado interno del componente y renderizar un `li` por cada artículo. Intenta introducir la cadena `eat, code, sleep, repeat` dentro del `textarea`, haz clic en el botón y ve qué sucede.

**Nota:** Puede que sepas que todos los elementos hijos hermanos creados por una operación map como ésta necesitan poseer un atributo `key` único. No te preocupes, este es el tema de nuestro próximo desafío.

# --hints--

El componente MyToDoList debe existir y mostrarse en la página.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return mockedComponent.find('MyToDoList').length === 1;
  })()
);
```

El primer hijo de `MyToDoList` debe ser un elemento `textarea`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(0).type() ===
      'textarea'
    );
  })()
);
```

El segundo hijo de `MyToDoList` debe ser un elemento `br`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(1).type() === 'br'
    );
  })()
);
```

El tercer hijo de `MyToDoList` debe ser un elemento `button`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(2).type() ===
      'button'
    );
  })()
);
```

El estado de `MyToDoList` debe inicializarse con un arreglo vacío `toDoList`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      Array.isArray(initialState.toDoList) === true &&
      initialState.toDoList.length === 0
    );
  })()
);
```

El estado de `MyToDoList` debe ser inicializado con una cadena vacía `userInput`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      typeof initialState.userInput === 'string' &&
      initialState.userInput.length === 0
    );
  })()
);
```

Cuando el botón `Create List` es presionado, el componente `MyToDoList` debe devolver dinámicamente una lista desordenada que contenga un artículo por cada elemento de una lista separada por coma dentro del elemento `textarea`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
  const simulateChange = (el, value) =>
    el.simulate('change', { target: { value } });
  const state_1 = () => {
    return mockedComponent.find('ul').find('li');
  };
  const setInput = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      'testA, testB, testC'
    );
  };
  const click = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_2 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const setInput_2 = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      't1, t2, t3, t4, t5, t6'
    );
  };
  const click_1 = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_3 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const awaited_state_1 = state_1();
  const awaited_setInput = setInput();
  const awaited_click = click();
  const awaited_state_2 = state_2();
  const awaited_setInput_2 = setInput_2();
  const awaited_click_1 = click_1();
  const awaited_state_3 = state_3();
  assert(
    awaited_state_1.length === 0 &&
      awaited_state_2.nodes.length === 3 &&
      awaited_state_3.nodes.length === 6 &&
      awaited_state_2.text === 'testAtestBtestC' &&
      awaited_state_3.text === 't1t2t3t4t5t6'
  );
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyToDoList />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = null; // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```

# --solutions--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      userInput: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```
