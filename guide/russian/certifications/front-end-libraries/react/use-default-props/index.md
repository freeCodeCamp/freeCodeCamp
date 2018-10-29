---
title: Use Default Props
localeTitle: Использовать опоры по умолчанию
---
## Использовать опоры по умолчанию

Эта проблема заключается в том, что вы объявляете опору по умолчанию для компонента ShoppingCart

```javascript
const ShoppingCart = (props) => { 
  return ( 
    <div> 
      <h1>Shopping Cart Component</h1> 
    </div> 
  ) 
 }; 
```

Чтобы объявить опору по умолчанию, синтаксис, который следует соблюдать, - это

```javascript
itemName.defaultProps = { 
  prop-x: value, 
  prop-y: value 
 } 
```

После синтаксиса следующий код должен быть объявлен ниже данного кода

```javascript
ShoppingCart.defaultProps = { 
  items: 0 
 } 
```

Это объявляет прозвище с именем «items» со значением «0».