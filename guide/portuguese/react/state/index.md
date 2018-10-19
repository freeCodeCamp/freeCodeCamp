---
title: State
localeTitle: Estado
---
# Estado

Estado é o local de origem dos dados.

Devemos sempre tentar tornar nosso estado o mais simples possível e minimizar o número de componentes com estado. Se tivermos, por exemplo, dez componentes que precisam de dados do estado, devemos criar um componente de contêiner que manterá o estado para todos eles.

Estado é basicamente como um objeto global que está disponível em todos os lugares em um componente.

Exemplo de um componente de classe com estado:

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

Outro exemplo:

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

## Estado de atualização

Você pode alterar os dados armazenados no estado de seu aplicativo usando o método `setState` em seu componente.

```js
this.setState({ value: 1 }); 
```

Tenha em mente que `setState` é assíncrono, portanto, você deve ter cuidado ao usar o estado atual para definir um novo estado. Um bom exemplo disso seria se você quiser incrementar um valor em seu estado.

#### O caminho errado

```js
this.setState({ value: this.state.value + 1 }); 
```

Isso pode levar a um comportamento inesperado no seu aplicativo se o código acima for chamado várias vezes no mesmo ciclo de atualização. Para evitar isso, você pode passar uma função de retorno de chamada do atualizador para `setState` vez de um objeto.

#### O caminho certo

```js
this.setState(prevState => ({ value: prevState.value + 1 })); 
```

## Estado de atualização

Você pode alterar os dados armazenados no estado de seu aplicativo usando o método `setState` em seu componente.

```js
this.setState({value: 1}); 
```

Tenha em mente que `setState` pode ser assíncrono, portanto, você deve ser cuidadoso ao usar o estado atual para definir um novo estado. Um bom exemplo disso seria se você quiser incrementar um valor em seu estado.

##### O caminho errado

```js
this.setState({value: this.state.value + 1}); 
```

Isso pode levar a um comportamento inesperado no seu aplicativo se o código acima for chamado várias vezes no mesmo ciclo de atualização. Para evitar isso, você pode passar uma função de retorno de chamada do atualizador para `setState` vez de um objeto.

##### O caminho certo

```js
this.setState(prevState => ({value: prevState.value + 1})); 
```

##### A maneira mais limpa
```
this.setState(({ value }) => ({ value: value + 1 })); 
```

Quando apenas um número limitado de campos no objeto de estado é necessário, a destruição de objetos pode ser usada para códigos mais limpos.

### Mais Informações

*   [React - Estado e ciclo de vida](https://reactjs.org/docs/state-and-lifecycle.html)
*   [React - Movendo o estado para cima](https://reactjs.org/docs/lifting-state-up.html)
*   [React Native - Estado](https://facebook.github.io/react-native/docs/state.html)
