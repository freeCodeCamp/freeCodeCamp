---
title: State vs Props
localeTitle: State vs Props
---## State vs Props

Quando começamos a trabalhar com os componentes do React, ouvimos frequentemente dois termos. Eles são `state` e `props` . Então, neste artigo, vamos explorar o que são e como eles diferem.

## Estado:

*   Estado é algo que um componente possui. Pertence àquele componente particular onde é definido. Por exemplo, a idade de uma pessoa é um estado dessa pessoa.
*   Estado é mutável. Mas isso pode ser alterado apenas pelo componente que o possui. Como eu só posso mudar minha idade, ninguém mais.
*   Você pode alterar um estado usando `this.setState()`

Veja o exemplo abaixo para ter uma ideia do estado:

#### Person.js

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

No exemplo acima, `age` é o estado do componente `Person` .

## Adereços:

*   Adereços são semelhantes aos argumentos do método. Eles são passados ​​para um componente onde esse componente é usado.
*   Adereços é imutável. Eles são somente leitura.

Veja o exemplo abaixo para ter uma ideia de Adereços:

#### Person.js

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

No exemplo acima, `const person = <Person character = "good"></Person>` estamos passando prop `character = "good"` prop para o componente `Person` .

Dá saída como "Eu sou uma boa pessoa", na verdade eu sou.

Há muito mais a aprender sobre Estado e Adereços. Muitas coisas podem ser aprendidas mergulhando na codificação. Então, sujem suas mãos codificando.

Procure-me no [twitter,](https://twitter.com/getifyJr) se necessário.

Codificação Feliz !!!