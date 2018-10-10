---
id: 5a24c314108439a4d403615b
title: Copy an Object with Object.assign
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Скопировать объект с Object.assign
---

## Description
<section id="description"> Последние несколько проблем работали с массивами, но есть способы помочь обеспечить неизменность состояния, когда государство тоже является <code>object</code> . Полезным инструментом для обработки объектов является <code>Object.assign()</code> . <code>Object.assign()</code> принимает объекты-объекты-объекты и исходные объекты и свойства карт из исходных объектов в целевой объект. Любые соответствующие свойства перезаписываются свойствами в исходных объектах. Это поведение обычно используется для создания мелких копий объектов путем передачи пустого объекта в качестве первого аргумента, за которым следует объект (ы), который вы хотите скопировать. Вот пример: <code>const newObject = Object.assign({}, obj1, obj2);</code> Это создает <code>newObject</code> как новый <code>object</code> , который содержит свойства, которые в настоящее время существуют в <code>obj1</code> и <code>obj2</code> . </section>

## Instructions
<section id="instructions"> Состояние и действия Redux были изменены для обработки <code>object</code> для <code>state</code> . Отредактируйте код, чтобы вернуть новый объект <code>state</code> для действий с типом <code>ONLINE</code> , которые устанавливают свойство <code>status</code> в строку <code>online</code> . Попробуйте использовать <code>Object.assign()</code> для выполнения задачи. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Хранилище Redux должно существовать и инициализироваться с состоянием, которое эквивалентно объекту <code>defaultState</code> объявленному в строке 1.'
    testString: 'assert((function() { const expectedState = { user: "CamperBot", status: "offline", friends: "732,982", community: "freeCodeCamp" }; const initialState = store.getState(); return DeepEqual(expectedState, initialState); })(), "The Redux store should exist and initialize with a state that is equivalent to the <code>defaultState</code> object declared on line 1.");'
  - text: <code>wakeUp</code> и <code>immutableReducer</code> должны быть функциями.
    testString: 'assert(typeof wakeUp === "function" && typeof immutableReducer === "function", "<code>wakeUp</code> and <code>immutableReducer</code> both should be functions.");'
  - text: Отправка действия типа <code>ONLINE</code> должна обновить <code>status</code> в состоянии в <code>online</code> и не должна мутировать состояние.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch({type: "ONLINE"}); const finalState = store.getState(); const expectedState = { user: "CamperBot", status: "online", friends: "732,982", community: "freeCodeCamp" }; return isFrozen && DeepEqual(finalState, expectedState); })(), "Dispatching an action of type <code>ONLINE</code> should update the property <code>status</code> in state to <code>online</code> and should NOT mutate state.");'
  - text: <code>Object.assign</code> следует использовать для возврата нового состояния.
    testString: 'getUserInput => assert(getUserInput("index").includes("Object.assign"), "<code>Object.assign</code> should be used to return new state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
