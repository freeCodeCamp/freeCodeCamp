---
title: State vs Props
localeTitle: Estado vs apoyos
---## Estado vs apoyos

Cuando empezamos a trabajar con componentes React, con frecuencia escuchamos dos términos. Son `state` y `props` . Entonces, en este artículo exploraremos qué son esos y en qué se diferencian.

## Estado:

*   El estado es algo que posee un componente. Pertenece a ese componente particular donde se define. Por ejemplo, la edad de una persona es un estado de esa persona.
*   El estado es mutable. Pero solo puede ser modificado por ese componente que lo posee. Como solo puedo cambiar mi edad, nadie más.
*   Puedes cambiar un estado usando `this.setState()`

Vea el siguiente ejemplo para tener una idea del estado:

#### Persona.js

```javascript
  import React from 'react'; 
 
  class Person extends React.Component{ 
    constructor(props) { 
      super(props); 
      this.state = { 
        age:0 
      this.incrementAge = this.incrementAge.bind(this) 
    } 
 
    incrementAge(){ 
      this.setState({ 
        age:this.state.age + 1; 
      }); 
    } 
 
    render(){ 
      return( 
        <div> 
          <label>My age is: {this.state.age}</label> 
          <button onClick={this.incrementAge}>Grow me older !!<button> 
        </div> 
      ); 
    } 
  } 
 
  export default Person; 
```

En el ejemplo anterior, la `age` es el componente del estado de la `Person` .

## Accesorios:

*   Los apoyos son similares a los argumentos del método. Se pasan a un componente donde se utiliza ese componente.
*   Los apoyos son inmutables. Son de solo lectura.

Vea el siguiente ejemplo para tener una idea de los accesorios:

#### Persona.js

```javascript
  import React from 'react'; 
 
  class Person extends React.Component{ 
    render(){ 
      return( 
        <div> 
          <label>I am a {this.props.character} person.</label> 
        </div> 
      ); 
    } 
  } 
 
  export default Person; 
 
  const person = <Person character = "good"></Person> 
```

En el ejemplo anterior, `const person = <Person character = "good"></Person>` pasamos `character = "good"` prop al componente `Person` .

Da salida como "Soy una buena persona", de hecho lo soy.

Hay mucho más que aprender sobre el estado y los apoyos. Se pueden aprender muchas cosas al sumergirnos en la codificación. Así que ensucia tus manos codificando.

Llámame en [twitter](https://twitter.com/getifyJr) si es necesario.

Feliz codificacion !!!