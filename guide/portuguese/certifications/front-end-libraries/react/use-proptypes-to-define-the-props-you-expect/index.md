---
title: Use PropTypes to Define the Props You Expect
localeTitle: Use PropTypes para definir os suportes que você espera
---
## Use PropTypes para definir os suportes que você espera

Este desafio você definiu um `propTypes` para o componente `Items` .

```react.js
const Items = (props) => { 
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1> 
 }; 
```

Para definir um propTypes, a sintaxe a ser seguida é

```react.js
itemName.propTypes = { 
  props: PropTypes.dataType.isRequired 
 }; 
```

Seguindo a sintaxe, o código a seguir deve ser definido abaixo do código fornecido para a `quantity` props do componente `Items`

```react.js
Items.propTypes = { 
  quantity: PropTypes.number.isRequired 
 }; 

```