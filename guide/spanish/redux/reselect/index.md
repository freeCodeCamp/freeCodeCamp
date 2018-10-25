---
title: Reselect
localeTitle: Volver a seleccionar
---
## Volver a seleccionar

Reseleccionar es una biblioteca de selección simple para Redux. ¿Por qué necesitamos selectores? Los documentos oficiales lo describen de esta manera:

*   Los selectores pueden calcular datos derivados, lo que permite a Redux almacenar el estado mínimo posible.
*   Los selectores son eficientes. Un selector no se vuelve a calcular a menos que uno de sus argumentos cambie.
*   Los selectores son compostables. Se pueden utilizar como entrada a otros selectores.

Puede sonar complicado, pero los selectores permiten que la aplicación funcione más rápido al reducir las repeticiones innecesarias. Normalmente, se llama a `mapStateToProps` cada vez que se realiza cualquier cambio en la `store` . `mapStateToProps` enlaza los valores de la tienda para reaccionar. Hasta que use `PureComponents` es posible que se `PureComponents` a `PureComponents` componente, aunque no es necesario.

#### Más información:

*   [volver a seleccionar](https://github.com/reduxjs/reselect)
*   [Reaccionar, volver a seleccionar y redux](https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c)