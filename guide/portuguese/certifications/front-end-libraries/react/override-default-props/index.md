---
title: Override Default Props
localeTitle: Substituir Adereços Padrão
---
## Substituir Adereços Padrão

Esse desafio substitui o valor padrão da `quantity` de props para o componente Itens. Onde o valor padrão da `quantity` é definido como `0` .

```react.js
const Items = (props) => { 
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1> 
 } 
 
 Items.defaultProps = { 
  quantity: 0 
 } 
```

Para substituir um valor props padrão, a sintaxe a ser seguida é

```react.js
<Component propsName={Value}/> 
```

Após a sintaxe, o seguinte código deve ser declarado abaixo do código fornecido

```react.js
<Items quantity={50}/> 
```

Isso substituirá o valor de `0` a `50`