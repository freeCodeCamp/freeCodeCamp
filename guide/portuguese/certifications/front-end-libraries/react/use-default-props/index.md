---
title: Use Default Props
localeTitle: Use Adereços Padrão
---
## Use Adereços Padrão

Este desafio tem você declarando uma prop padrão para o componente ShoppingCart

```javascript
const ShoppingCart = (props) => { 
  return ( 
    <div> 
      <h1>Shopping Cart Component</h1> 
    </div> 
  ) 
 }; 
```

Para declarar um prop padrão, a sintaxe a ser seguida é

```javascript
itemName.defaultProps = { 
  prop-x: value, 
  prop-y: value 
 } 
```

Após a sintaxe, o seguinte código deve ser declarado abaixo do código fornecido

```javascript
ShoppingCart.defaultProps = { 
  items: 0 
 } 
```

Isto declara um prop chamado 'items' com o valor '0'.