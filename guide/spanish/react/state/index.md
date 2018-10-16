---
title: State
localeTitle: Estado
---
# Estado

Estado es el lugar de donde provienen los datos.

Siempre debemos tratar de hacer que nuestro estado sea lo más simple posible y minimizar el número de componentes con estado. Si tenemos, por ejemplo, diez componentes que necesitan datos del estado, deberíamos crear un componente contenedor que mantendrá el estado para todos ellos.

El estado es básicamente como un objeto global que está disponible en todas partes en un componente.

Ejemplo de un componente de clase con estado:

```javascript
import React from 'react'; 
 
 class App extends React.Component { 
  constructor(props) { 
    super(props); 
 
    // We declare the state as shown below 
 
    this.state = { 
      x: "This is x from state", 
      y: "This is y from state" 
    } 
  } 
  render() { 
    return ( 
      <div> 
        <h1>{this.state.x}</h1> 
        <h2>{this.state.y}</h2> 
      </div> 
    ); 
  } 
 } 
 export default App; 
```

Otro ejemplo:

```javascript
import React from 'react'; 
 
 class App extends React.Component { 
  constructor(props) { 
    super(props); 
 
    // We declare the state as shown below 
    this.state = { 
      x: "This is x from state", 
      y: "This is y from state" 
    } 
  } 
 
  render() { 
    let x1 = this.state.x; 
    let y1 = this.state.y; 
 
    return ( 
      <div> 
        <h1>{x1}</h1> 
        <h2>{y1}</h2> 
      </div> 
    ); 
  } 
 } 
 export default App; 
```

## Estado de actualización

Puede cambiar los datos almacenados en el estado de su aplicación utilizando el método `setState` en su componente.

```js
this.setState({ value: 1 }); 
```

Tenga en cuenta que `setState` es asíncrono, por lo que debe tener cuidado al usar el estado actual para establecer un nuevo estado. Un buen ejemplo de esto sería si desea incrementar un valor en su estado.

#### La forma incorrecta

```js
this.setState({ value: this.state.value + 1 }); 
```

Esto puede llevar a un comportamiento inesperado en su aplicación si el código anterior se llama varias veces en el mismo ciclo de actualización. Para evitar esto, puede pasar una función de devolución de llamada del actualizador a `setState` lugar de un objeto.

#### La manera correcta

```js
this.setState(prevState => ({ value: prevState.value + 1 })); 
```

## Estado de actualización

Puede cambiar los datos almacenados en el estado de su aplicación utilizando el método `setState` en su componente.

```js
this.setState({value: 1}); 
```

Tenga en cuenta que `setState` puede ser asíncrono, por lo que debe tener cuidado al usar el estado actual para establecer un nuevo estado. Un buen ejemplo de esto sería si desea incrementar un valor en su estado.

##### La forma incorrecta

```js
this.setState({value: this.state.value + 1}); 
```

Esto puede llevar a un comportamiento inesperado en su aplicación si el código anterior se llama varias veces en el mismo ciclo de actualización. Para evitar esto, puede pasar una función de devolución de llamada del actualizador a `setState` lugar de un objeto.

##### La manera correcta

```js
this.setState(prevState => ({value: prevState.value + 1})); 
```

##### El camino más limpio
```
this.setState(({ value }) => ({ value: value + 1 })); 
```

Cuando solo se requiere un número limitado de campos en el objeto de estado, la destrucción del objeto se puede usar para un código más limpio.

### Más información

*   [Reaccionar - Estado y Ciclo de Vida](https://reactjs.org/docs/state-and-lifecycle.html)
*   [Reaccionar - Levantando el Estado](https://reactjs.org/docs/lifting-state-up.html)
*   [Reaccionar nativo - Estado arriba](https://facebook.github.io/react-native/docs/state.html)