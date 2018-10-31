---
id: 5a24c314108439a4d4036163
title: Create a React Component
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Создать реактивный компонент
---

## Description
<section id="description"> Другой способ определить компонент React - это синтаксис <code>class</code> ES6. В следующем примере <code>Kitten</code> расширяет <code>React.Component</code> : <blockquote> класс Kitten расширяет React.Component { <br> конструктор (реквизит) { <br> супер (реквизит); <br> } <br><br> render () { <br> вернуть ( <br> &lt;H1&gt; Привет &lt;/ h1&gt; <br> ); <br> } <br> } </blockquote> Это создает класс ES6 <code>Kitten</code> , который расширяет <code>React.Component</code> класс. Таким образом, класс <code>Kitten</code> теперь имеет доступ ко многим полезным функциям React, таким как локальные состояния и привязки к жизненному циклу. Не беспокойтесь, если вы еще не знакомы с этими условиями, они будут рассмотрены более подробно в последующих задачах. Также обратите внимание, что класс <code>Kitten</code> имеет <code>constructor</code> определенный внутри него, который вызывает <code>super()</code> . Он использует <code>super()</code> для вызова конструктора родительского класса, в данном случае <code>React.Component</code> . Конструктор - это специальный метод, используемый при инициализации объектов, созданных с ключевым словом <code>class</code> . Это лучшая практика для индивидуального вызова компонента <code>constructor</code> с <code>super</code> , и передать <code>props</code> для обоих. Это гарантирует правильность инициализации компонента. Пока что знайте, что это стандарт для включения этого кода. Вскоре вы увидите другие варианты использования конструктора, а также <code>props</code> . </section>

## Instructions
<section id="instructions"> <code>MyComponent</code> определен в редакторе кода с использованием синтаксиса класса. Завершите запись метода <code>render</code> чтобы он возвращал элемент <code>div</code> , содержащий <code>h1</code> с текстом <code>Hello React!</code> , </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Компонент React должен возвращать элемент <code>div</code> .
    testString: 'assert(Enzyme.shallow(React.createElement(MyComponent)).type() === "div", "The React component should return a <code>div</code> element.");'
  - text: <code>div</code> должен отображать в нем заголовок <code>h1</code> .
    testString: 'assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.shallow(React.createElement(MyComponent)).html()), "The returned <code>div</code> should render an <code>h1</code> header within it.");'
  - text: 'Заголовок <code>h1</code> должен содержать строку <code>Hello React!</code> ,'
    testString: 'assert(Enzyme.shallow(React.createElement(MyComponent)).html() === "<div><h1>Hello React!</h1></div>", "The <code>h1</code> header should contain the string <code>Hello React!</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line



    // change code above this line
  }
};

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
