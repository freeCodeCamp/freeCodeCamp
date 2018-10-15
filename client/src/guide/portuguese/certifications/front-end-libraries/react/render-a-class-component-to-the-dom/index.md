---
title: Render a Class Component to the DOM
localeTitle: Renderizar um componente de classe para o DOM
---
## Renderizar um componente de classe para o DOM

Seu código deve ficar parecido com isso:

```javascript
class TypesOfVehicles extends React.Component { 
    constructor(props) { 
        super(props); 
    } 
    render() { 
        return ( 
          <div> 
          <h1>Types of Vehicles:</h1> 
          <Car /> 
          <Motorcycle /> 
          </div> 
        ); 
    } 
 } 
 ReactDOM.render(<TypesOfVehicles />,'node-id') 
```

A sintaxe ReactDOM.render pode ser um pouco complicada, você precisa usar os parênteses triangulares ao passar em um componente de classe. Além disso, os dois subcomponentes são declarados nos bastidores, o que pode ser confuso se você estiver acostumado a todas as variáveis ​​que estão sendo definidas no editor de código e visíveis à sua frente.

### Sugestão

*   use document.getElementById ('id') para obter o nó de destino

### Link relevante

*   [Elementos de renderização](https://reactjs.org/docs/rendering-elements.html)