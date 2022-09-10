---
id: 5a24c314108439a4d4036187
title: Utiliza una expresión ternaria para el renderizado condicional
challengeType: 6
forumTopicId: 301414
dashedName: use-a-ternary-expression-for-conditional-rendering
---

# --description--

Antes de pasar a técnicas de renderizado dinámico, hay una última forma de usar condicionales de JavaScript incorporados para representar lo que quieres: el <dfn>operador ternario</dfn>. El operador ternario a menudo es utilizado como un acceso directo para las sentencias `if/else` en JavaScript. No son tan robustas como las sentencias tradicionales `if/else`, pero son muy populares entre los desarrolladores de React. Una de las razones de esto es debido a cómo se compila JSX, las sentencias `if/else` no se pueden insertar directamente en el código JSX. Puede que hayas notado esto hace un par de desafíos, cuando se requirió una sentencia `if/else`, siempre estaba *fuera* de la sentencia `return`. Las expresiones ternarias pueden ser una excelente alternativa si deseas implementar lógica condicional dentro de tu JSX. Recuerda que un operador ternario tiene tres partes, pero puedes combinar varias expresiones ternarias juntas. Aquí está la sintaxis básica:

```jsx
condition ? expressionIfTrue : expressionIfFalse;
```

# --instructions--

El editor de código tiene tres constantes definidas dentro del método `render()` del componente `CheckUserAge`. Estas se llaman `buttonOne`, `buttonTwo` y `buttonThree`. A cada una de estas se le asigna una expresión JSX simple que representa un elemento de botón. Primero, inicializa el estado de `CheckUserAge` con `input` y `userAge` ambos configurados a valores de una cadena vacía.

Una vez que el componente está renderizando información a la página, los usuarios deberían tener una forma de interactuar con ella. Dentro de la declaración `return` del componente, configura una expresión ternaria que implementa la siguiente lógica: cuando la página carga por primera vez, renderiza el botón de envío, `buttonOne`, a la página. Luego, cuando un usuario ingrese su edad y haga clic en el botón, renderiza un botón diferente basado en la edad. Si un usuario introduce un número menor que `18`, renderiza `buttonThree`. Si un usuario introduce un número mayor o igual a `18`, renderiza `buttonTwo`.

# --hints--

El componente `CheckUserAge` debe renderizarse con un solo elemento `input` y un solo elemento `button`.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('input')
    .length === 1 &&
    Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('button')
      .length === 1
);
```

El estado del componente `CheckUserAge` debe inicializarse con una propiedad de `userAge` y una propiedad de `input`, ambos establecidos a un valor de una cadena vacía.

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).state().input === '' &&
    Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === ''
);
```

Cuando el componente `CheckUserAge` es renderizado por primera vez en el DOM, el texto interno del `button` debe decir "Submit".

```js
assert(
  Enzyme.mount(React.createElement(CheckUserAge)).find('button').text() ===
    'Submit'
);
```

Cuando se introduce un número menor de 18 en el elemento `input` y se hace clic en el `button`, el texto interno del `button` debe decir `You Shall Not Pass`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter3AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '3' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter17AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '17' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge3 = enter3AndClickButton();
  const userAge17 = enter17AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge3 === 'You Shall Not Pass' &&
      userAge17 === 'You Shall Not Pass'
  );
})();
```

Cuando se introduce un número mayor o igual a 18 en el elemento `input` y se hace clic en el `button` el texto interno del `button` debe decir `You May Enter`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const initialButton = mockedComponent.find('button').text();
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter35AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '35' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const userAge35 = enter35AndClickButton();
  assert(
    initialButton === 'Submit' &&
      userAge18 === 'You May Enter' &&
      userAge35 === 'You May Enter'
  );
})();
```

Una vez que un número ha sido enviado, y el valor del `input` se cambia una vez más, el `button` debe decir `Submit`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
  const enter18AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '18' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const changeInputDontClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '5' } });
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const enter10AndClickButton = () => {
    mockedComponent
      .find('input')
      .simulate('change', { target: { value: '10' } });
    mockedComponent.find('button').simulate('click');
    mockedComponent.update();
    return mockedComponent.find('button').text();
  };
  const userAge18 = enter18AndClickButton();
  const changeInput1 = changeInputDontClickButton();
  const userAge10 = enter10AndClickButton();
  const changeInput2 = changeInputDontClickButton();
  assert(
    userAge18 === 'You May Enter' &&
      changeInput1 === 'Submit' &&
      userAge10 === 'You Shall Not Pass' &&
      changeInput2 === 'Submit'
  );
})();
```

Tu código no debe contener ninguna sentencia `if/else`.

```js
assert(
  new RegExp(/(\s|;)if(\s|\()/).test(
    code
  ) === false
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<CheckUserAge />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: '',
      input: ''
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge === ''
          ? buttonOne
          : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}
```
