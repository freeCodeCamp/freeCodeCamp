---
title: Reselect
---
## Reselect
Reselect is a simple selector library for Redux. 
Why do we need selectors? Official docs describe it this way:

* Selectors can compute derived data, allowing Redux to store the minimal possible state.
* Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
* Selectors are composable. They can be used as input to other selectors.

It might sound complicated but selectors allow your app to work faster by reducing unnecessary rerendering(s). Normally `mapStateToProps` is called every single time any change in `store` is made. React-redux's "connect" function uses a  `mapStateToProps` function argument to specify which store values to pass to the connected react component as props. Until you use `PureComponents` it might cause component being rerendered although it's not required.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [reselect](https://github.com/reduxjs/reselect)
* [React, Reselect and Redux](https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c)

