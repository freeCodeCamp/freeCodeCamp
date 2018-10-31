---
title: Reselect
localeTitle: Reselecionar
---
## Reselecionar

Reselecionar é uma biblioteca de seletores simples para o Redux. Por que precisamos de seletores? Documentos oficiais descrevem desta forma:

*   Os seletores podem calcular dados derivados, permitindo que o Redux armazene o estado mínimo possível.
*   Seletores são eficientes. Um seletor não é recalculado a menos que um dos seus argumentos seja alterado.
*   Seletores são compostos. Eles podem ser usados ​​como entrada para outros seletores.

Pode parecer complicado, mas os slectors permitem que o aplicativo funcione mais rápido, reduzindo o (s) processamento (s) desnecessário (s). Normalmente `mapStateToProps` é chamado toda vez que qualquer alteração na `store` é feita. `mapStateToProps` liga valores de armazenamento para reagir. Até você usar o `PureComponents` ele pode fazer com que o componente seja renderizado `PureComponents` , embora não seja necessário.

#### Mais Informações:

*   [selecionar novamente](https://github.com/reduxjs/reselect)
*   [Reagir, selecionar novamente e Redux](https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c)