---
id: 5a24bbe0dba28a8d3cbd4c5f
title: Render HTML Elements to the DOM
challengeType: 6
isRequired: false
forumTopicId: 301406
localeTitle: Выделение HTML-элементов в DOM
---

## Description
<section id='description'>
До сих пор вы узнали, что JSX - удобный инструмент для записи читаемого HTML в JavaScript. С помощью React мы можем передать этот JSX непосредственно в HTML DOM с использованием API рендеринга React, известного как ReactDOM. ReactDOM предлагает простой способ визуализации элементов React в DOM, который выглядит так: <code>ReactDOM.render(componentToRender, targetNode)</code> , где первым аргументом является элемент React или компонент, который вы хотите отобразить, а второй аргумент - узел DOM что вы хотите отобразить компонент. Как и следовало ожидать, <code>ReactDOM.render()</code> должен вызываться после объявлений элементов JSX, так же, как вы должны объявлять переменные перед их использованием.
</section>

## Instructions
<section id='instructions'>
Редактор кода имеет простой компонент JSX. Используйте метод <code>ReactDOM.render()</code> чтобы отобразить этот компонент на странице. Вы можете передать определенные элементы JSX непосредственно в качестве первого аргумента и использовать <code>document.getElementById()</code> чтобы выбрать узел DOM для их рендеринга. Для вас доступен <code>div</code> с <code>id=&#39;challenge-node&#39;</code> . Убедитесь, что вы не изменяете константу <code>JSX</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The constant <code>JSX</code> should return a <code>div</code> element.
    testString: assert(JSX.type === 'div');
  - text: The <code>div</code> should contain an <code>h1</code> tag as the first element.
    testString: assert(JSX.props.children[0].type === 'h1');
  - text: The <code>div</code> should contain a <code>p</code> tag as the second element.
    testString: assert(JSX.props.children[1].type === 'p');
  - text: The provided JSX element should render to the DOM node with id <code>challenge-node</code>.
    testString: assert(document.getElementById('challenge-node').childNodes[0].innerHTML === '<h1>Hello World</h1><p>Lets render this to the DOM</p>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const JSX = (
<div>
  <h1>Hello World</h1>
  <p>Lets render this to the DOM</p>
</div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```

</section>
