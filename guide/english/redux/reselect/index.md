---
title: Reselect
---
## Reselect
Reselect is a simple selector library. 
Why do we need selectors? Official docs describe it this way:

* Selectors can compute derived data, allowing Redux to store the minimal possible state.
* Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
* Selectors are composable. They can be used as input to other selectors.

It might sound complicated but selectors allow your app to work faster by reducing unnecessary recalculations. Normally, `mapStateToProps` functions are called for every component that needs it. With `reselect`, you can reduce duplicate computations.

It's important to note that `reselect` is not specific to redux. In fact, it's not even a dependency or peer dependency. `reselect` just provides functions for getting data.

Here's a trivial example:

```js
const appState = {
  todos: [
    { id: 1, name: 'Learn Redux', done: true },
    { id: 2, name: 'Learn Reselect', done: false },
  ]
}
```

Now, I can write selectors that compute different data:

```js
import { createSelector } from 'reselect'

const getTodos = state => state.todos // root selector for todo state
const getDoneTodos = createSelector(
  // your entire state is passed into the selectors, and is passed as an argument to the first function here:
  getTodos, 
  // then, the return value of the above function gets passed to this next function
  todos => todos.filter(todo => todo.done)
  // the return value of this selector function will be the array of todos that are finished
)
const getUnfinishedTodos = createSelector(getTodos, todos => todos.filter(todo => !todo.done))
```

And finally, when I want to use these in my components, I can use `createStructuredSelector`:

```js
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

const Comp = ({ doneTodos, unfinishedTodos }) => (
  <div>
    <h1>Todos</h1>
    {doneTodos.map(todo => <div>{todo.name}</div>)}
    <h1>Finished Todos</h1>
    {unfinishedTodos.map(todo => <div>{todo.name}</div>)}
  </div>
)

const mapStateToProps = createStructuredSelector({
  doneTodos: getDoneTodos,
  unfinishedTodos: getUnfinishedTodos,
})

connect(mapStateToProps)(Comp)
```

Each key of the object passed into the `createStructuredSelector` will be the key of the prop passed into the connected component, and the value of that prop will be the return value of that selector called with the global state. 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [reselect](https://github.com/reduxjs/reselect)
* [React, Reselect and Redux](https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c)

