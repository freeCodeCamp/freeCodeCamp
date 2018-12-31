---
title: Reselect
localeTitle: Reselecionar
---
## Reselect

Reselect é uma biblioteca de seletores simples para o Redux. 

Por que precisamos de seletores? 

A documentação oficial descreve da seguinte forma:

*   Os seletores podem calcular dados derivados, permitindo que o Redux armazene o estado mínimo possível.
*   Seletores são eficientes. Um seletor não é recalculado a menos que um dos seus argumentos seja alterado.
*   Seletores são compostos. Eles podem ser usados ​​como entrada para outros seletores.

Pode parecer complicado, mas os selectors permitem que a aplicação funcione mais rápido, reduzindo renderizações desnecessárias. Normalmente a função `mapStateToProps` é invocada sempre que é feita qualquer alteração na `store`. A função React-Redux `connect()` usa como argumento `mapStateToProps` para especificar que valores da loja/store irão ser fornecidos ao componente React como props(propriedades).
A não ser que sejam usados `PureComponents`, isto irá causar renderizações desnecessárias por parte do componente.

#### Mais Informações:

*   [Reselect](https://github.com/reduxjs/reselect)
*   [React, Reselect e Redux](https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c)