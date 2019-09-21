---
id: 5a24c314108439a4d4036162
title: Create a Stateless Functional Component
challengeType: 6
isRequired: false
forumTopicId: 301392
localeTitle: Создание функционального компонента без учета состояния
---

## Description
<section id='description'>
Компоненты - это ядро React. Всё в React является компонентом, и здесь вы научитесь, как их создавать.

Существуют два способа создания React компонентов. Первый способ - это использовать JavaScript функцию. Определяя компонент таким образом, вы создаете _функциональный компонент без учета состояния_. Концепт состояния в приложении будет рассмотрен в дальнейших главах. Сейчас думайте о компоненте без учета состояния, как о компоненте, которая может получать данные и рендерить их, но не управляет или следить за изменениями в данных.
</section>

## Instructions
<section id='instructions'>
The code editor has a function called <code>MyComponent</code>. Complete this function so it returns a single <code>div</code> element which contains some string of text.
<strong>Note:</strong>&nbsp;The text is considered a child of the <code>div</code> element, so you will not be able to use a self-closing tag.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should return JSX.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.length === 1; })());
  - text: <code>MyComponent</code> should return a <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.children().type() === 'div' })());
  - text: The <code>div</code> element should contain a string of text.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('div').text() !== ''; })());

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

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const MyComponent = function() {
  // change code below this line
  return (
    <div>
      Demo Solution
    </div>
  );
  // change code above this line
}
```

</section>
