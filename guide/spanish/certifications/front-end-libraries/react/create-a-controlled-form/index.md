---
title: Create a Controlled Form
localeTitle: Crear un formulario controlado
---
## Crear un formulario controlado

Crear una forma controlada es el mismo proceso que crear una entrada controlada, excepto que necesita manejar un evento de envío.

Primero, cree una entrada controlada que almacene su valor en el estado, de modo que haya una única fuente de verdad. (Esto es lo que hizo en el desafío anterior). Cree un elemento de entrada, establezca su atributo de valor en la variable de entrada ubicada en el estado. Recuerde, el estado puede ser accedido por `this.state` . A continuación, establezca el atributo `onChange` del elemento de `onChange` para llamar a la función 'handleChange'.

### Solución

```jsx
<input value={this.state.input} onChange={this.handleChange}/> 
```

A continuación, cree el método handleSubmit para su componente. Primero, debido a que su formulario se está enviando, tendrá que evitar que la página se actualice. Segundo, llame al método `setState()` , pasando un objeto de los diferentes pares clave-valor que desea cambiar. En este caso, desea establecer 'enviar' al valor de la variable 'entrada' y establecer 'entrada' a una cadena vacía.

```jsx
handleSubmit(event) { 
  event.preventDefault(); 
  this.setState({ 
    input: '', 
    submit: this.state.input 
  }); 
 } 
```

Ahora que sus datos se están manejando en estado, podemos usar estos datos. Crear un elemento `h1` . Dentro de su elemento `h1` ponga su variable 'submit'. Recuerde, 'enviar' se encuentra dentro del estado, por lo que deberá usar `this.state` . Además, colocar la variable dentro de JSX requiere llaves `{ }` porque es JavaScript.

```jsx
<h1>{this.state.submit}</h1> 

```