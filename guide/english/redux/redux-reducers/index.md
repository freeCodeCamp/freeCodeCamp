---
title: Redux Reducers
---
## Redux Reducers

Redux reducers allow you to make changes to your state in your application. Redux actions only tell the application _what happened_, not what _should_ happen. The reducer will allow you to update your state based on the action that was fied.

In programming terms, a reducer is a function that operates on a collection and spits out something new. In other words, it _reduces_ the collection to a single value, which could be a number, string, or even a new collection. 

A common use case is finding the sum of a collection:

```js
const numbers = [1, 2, 3, 4]

const sum = numbers.reduce((accumulator, value) => accumulator + value, 0) // 10
```

More info on `reduce` on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

The reducer function `(accumulator, value) => accumulator + value` is called on each item in the collection, where the value of `accumulator` is the return value of the reducer function called on the previous element, or if it's the first element, then the starting value. 

Let's walk through it one step at a time:

```js
const numbers = [1, 2, 3, 4]

const sum = numbers.reduce((accumulator, value) => {
  console.log('accumulator', accumulator)
  console.log('value', value)
  return accumulator + value
}, 0)
console.log('sum', sum)

// 'accumulator' 0 // starting value
// 'value' 1 // first element in collection
// 'accumulator' 1 // result of 0 + 1
// 'value' 2 // second element in collection
// 'accumulator' 3 // result of 1 + 2
// 'value' 3 // third element in collection
// 'accumulator' 6 // result of 3 + 3
// 'value' 4 // fourth element in collection
// 'sum' 10 // result of 6 + 4
```

Reducers must always be pure functions, otherwise reducers may not be predictable. This means that given the same function arguments, the result will always be the same, and it does not change any properties or variables outside of the function. 

Here's an example of a pure function:

```js
function add(a, b) {
 return a + b
}

const sum = add(5, 4)
```

The above function is pure because no matter what happens it will return 9. 

A function that has ajax calls inside of it or does something like accessing a database is not a pure function. 

Here's an example of an _impure_ function:

```
let a = 10
function addA(b) {
  return a + b
}

const sum1 = addA(10) // 20
a = 20
const sum2 = addA(10) // 30
```

Notice that the two calls to `addA` gave different results. This is why it is _impure_. It's important to make sure that reducer functions do _not_ mutate anything outside of its scope.

Now that we're familiar with reducers, how does that relate to Redux? If you imagine all of the actions fired in your Redux app to be an array of actions, like this:

```js
const actions = [
  {
    type: 'ADD_TODO',
    data: { name: 'Learn React', completed: true },
  },
  {
    type: 'ADD_TODO',
    data: { name: 'Learn Redux', completed: false },
  },
]
```

you can generate new state based on those list of actions. How would we do that? By using a reducer function, like so:

```javascript

const initialState = {
  todos: [],
}

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.data] }
    case 'DELETE_TODO':
      return { ...state, todos: state.filter(todo => todo.name !== action.name) }
    default:
      return state
  }
}
```

You can treat the `state` argument as an accumulator. The `...` spreads through the current state so that you make a copy of the state rather than overwriting it.

Now, if we run the reducer function through the list of actions, we can get new states:

```js
actions.reduce(todoReducer, initialState)

// new state: { todos: [{ name: 'Learn React', completed: true }, { name: 'Learn Redux', completed: false }] }
```

So to sum up reducers are nothing but pure functions that returns new state for your application. 

#### More Information:
[Redux-Reducers Official Docs](https://redux.js.org/basics/reducers)
