---
id: 5a24c314108439a4d4036146
title: Map Dispatch to Props
challengeType: 6
isRequired: false
forumTopicId: 301432
localeTitle: Отправка карты на реквизит
---

## Description
<section id='description'>
Функция <code>mapDispatchToProps()</code> используется для предоставления конкретным создателям действий вашим компонентам React, чтобы они могли отправлять действия против магазина Redux. Он похож по структуре на <code>mapStateToProps()</code> вы написали в последнем вызове. Он возвращает объект, который сопоставляет действия отправки с именами свойств, которые становятся компонентами <code>props</code> . Однако вместо возврата части <code>state</code> каждое свойство возвращает функцию, которая вызывает <code>dispatch</code> с создателем действия и любыми соответствующими действительными данными. У вас есть доступ к этой <code>dispatch</code> потому что она передается в <code>mapDispatchToProps()</code> в качестве параметра, когда вы определяете функцию, точно так же, как вы передали <code>state</code> <code>mapStateToProps()</code> . За кулисами React Redux использует <code>store.dispatch()</code> Redux для <code>store.dispatch()</code> этих рассылок с помощью <code>mapDispatchToProps()</code> . Это похоже на то, как он использует <code>store.subscribe()</code> для компонентов, которые отображаются в <code>state</code> . Например, у вас есть создатель действия <code>loginUser()</code> который принимает <code>username</code> в качестве полезной нагрузки. Объект, возвращенный из <code>mapDispatchToProps()</code> для этого создателя действия, будет выглядеть примерно так: <blockquote> { <br> submitLoginUser: function (username) { <br> отправка (loginUser (имя пользователя)); <br> } <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Редактор кода предоставляет создателя действия, называемого <code>addMessage()</code> . Напишите функцию <code>mapDispatchToProps()</code> которая принимает <code>dispatch</code> в качестве аргумента, а затем возвращает объект. Объект должен иметь свойство <code>submitNewMessage</code> установленное для функции отправки, которое принимает параметр для добавления нового сообщения при отправке <code>addMessage()</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addMessage</code> should return an object with keys <code>type</code> and <code>message</code>.
    testString: assert((function() { const addMessageTest = addMessage(); return ( addMessageTest.hasOwnProperty('type') && addMessageTest.hasOwnProperty('message')); })());
  - text: <code>mapDispatchToProps</code> should be a function.
    testString: assert(typeof mapDispatchToProps === 'function');
  - text: <code>mapDispatchToProps</code> should return an object.
    testString: assert(typeof mapDispatchToProps() === 'object');
  - text: Dispatching <code>addMessage</code> with <code>submitNewMessage</code> from <code>mapDispatchToProps</code> should return a message to the dispatch function.
    testString: assert((function() { let testAction; const dispatch = (fn) => { testAction = fn; }; let dispatchFn = mapDispatchToProps(dispatch); dispatchFn.submitNewMessage('__TEST__MESSAGE__'); return (testAction.type === 'ADD' && testAction.message === '__TEST__MESSAGE__'); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message));
    }
  }
};
```

</section>
