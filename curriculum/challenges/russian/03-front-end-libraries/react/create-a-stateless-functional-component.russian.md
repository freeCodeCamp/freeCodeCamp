---
id: 5a24c314108439a4d4036162
title: Create a Stateless Functional Component
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Создание функционального компонента без учета состояния
---

## Description
Компоненты - это ядро React. Всё в React является компонентом, и здесь вы научитесь, как их создавать.

Существуют два способа создания React компонентов. Первый способ - это использовать JavaScript функцию. Определяя компонент таким образом, вы создаете *функциональный компонент без учета состояния*. Концепт состояния в приложении будет рассмотрен в дальнейших главах. Сейчас думайте о компоненте без учета состояния, как о компоненте, которая может получать данные и рендерить их, но не управляет или следить за изменениями в данных. 

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>MyComponent</code> должен возвращать JSX.'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.length === 1; })(), "<code>MyComponent</code> should return JSX.");'
  - text: '<code>MyComponent</code> должен вернуть элемент <code>div</code>.'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.children().type() === "div" })(), "<code>MyComponent</code> should return a <code>div</code> element.");'
  - text: 'Элемент <code>div</code> должен содержать строку текста.'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("div").text() !== ""; })(), "The <code>div</code> element should contain a string of text.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const MyComponent = function() {
  // change code below this line



  // change code above this line
}

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
