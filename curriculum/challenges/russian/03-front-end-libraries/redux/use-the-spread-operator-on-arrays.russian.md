---
id: 5a24c314108439a4d4036159
title: Use the Spread Operator on Arrays
challengeType: 6
isRequired: false
forumTopicId: 301452
localeTitle: Использование оператора спреда на массивах
---

## Description
<section id='description'>
Одним из решений ES6, чтобы помочь обеспечить неизменность состояния в Redux, является оператор с расширением: <code>...</code> Оператор распространения имеет множество приложений, один из которых хорошо подходит для предыдущего вызова создания нового массива из существующего массива. Это относительно новый, но обычно используемый синтаксис. Например, если у вас есть массив <code>myArray</code> и напишите: <code>let newArray = [...myArray];</code> <code>newArray</code> теперь является клоном <code>myArray</code> . Оба массива все еще существуют отдельно в памяти. Если вы выполняете мутацию типа <code>newArray.push(5)</code> , <code>myArray</code> не изменяется. <code>...</code> эффективно <i>распространяет</i> значения в <code>myArray</code> в новый массив. Чтобы клонировать массив, но добавляя дополнительные значения в новый массив, вы можете написать <code>[...myArray, &#39;new value&#39;]</code> . Это вернет новый массив, состоящий из значений в <code>myArray</code> и строку <code>&#39;new value&#39;</code> в качестве последнего значения. Синтаксис распространения может использоваться несколько раз в составе массива, как это, но важно отметить, что он делает только мелкую копию массива. То есть он обеспечивает только неизменные операции массива для одномерных массивов.
</section>

## Instructions
<section id='instructions'>
Используйте оператор spread, чтобы вернуть новую копию состояния при добавлении дела.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The Redux store should exist and initialize with a state equal to <code>[Do not mutate state!]</code>.
    testString: assert((function() { const initialState = store.getState(); return ( Array.isArray(initialState) === true && initialState[0] === 'Do not mutate state!'); })());
  - text: <code>addToDo</code> and <code>immutableReducer</code> both should be functions.
    testString: assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
  - text: Dispatching an action of type <code>ADD_TO_DO</code> on the Redux store should add a <code>todo</code> item and should NOT mutate state.
    testString: assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addToDo('__TEST__TO__DO__')); const finalState = store.getState(); const expectedState = [ 'Do not mutate state!', '__TEST__TO__DO__' ]; return( isFrozen && DeepEqual(finalState, expectedState)); })());
  - text: The spread operator should be used to return new state.
    testString: getUserInput => assert(getUserInput('index').includes('...state'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [
        ...state,
        action.todo
      ];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

</section>
