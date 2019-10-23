---
id: 5a24c314108439a4d4036168
title: Write a React Component from Scratch
challengeType: 6
isRequired: false
forumTopicId: 301424
localeTitle: Напишите компонент реакции с нуля
---

## Description
<section id='description'>
Теперь, когда вы изучили основы компонентов JSX и React, пришло время написать компонент самостоятельно. Реагирующие компоненты являются основными строительными блоками приложений React, поэтому важно хорошо ознакомиться с их написанием. Помните, что типичным компонентом React является <code>class</code> ES6, который расширяет <code>React.Component</code> . Он имеет метод рендеринга, который возвращает HTML (из JSX) или <code>null</code> . Это основная форма компонента React. Как только вы это хорошо поймете, вы будете готовы начать строительство более сложных проектов React.
</section>

## Instructions
<section id='instructions'>
Определите класс <code>MyComponent</code> который расширяет <code>React.Component</code> . Его метод render должен возвращать <code>div</code> , содержащий тег <code>h1</code> с текстом: <code>My First React Component!</code> в этом. Используйте этот текст точно, дело и значение пунктуации. Не забудьте также вызвать конструктор для вашего компонента. Передайте этот компонент в DOM с помощью <code>ReactDOM.render()</code> . Для вас доступен <code>div</code> с <code>id=&#39;challenge-node&#39;</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: There should be a React component called <code>MyComponent</code>.
    testString: getUserInput => assert(getUserInput('index').replace(/\s/g, '').includes('classMyComponentextendsReact.Component{'));
  - text: <code>MyComponent</code> should contain an <code>h1</code> tag with text <code>My First React Component!</code> Case and punctuation matter.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('h1').text() === 'My First React Component!'; })());
  - text: <code>MyComponent</code> should render to the DOM.
    testString: assert(document.getElementById('challenge-node').childNodes.length === 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// change code below this line

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
// change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
```

</section>
