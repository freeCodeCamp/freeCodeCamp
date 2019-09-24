---
id: 587d7dbc367417b2b2512bb1
title: Create a Simple JSX Element
challengeType: 6
isRequired: false
forumTopicId: 301390
localeTitle: Создание простого элемента JSX
---

## Description
<section id='description'>
<strong>Intro:</strong> React - это библиотека представлений с открытым исходным кодом, созданная и поддерживаемая Facebook. Это отличный инструмент для создания пользовательского интерфейса (UI) современных веб-приложений. React использует синтаксическое расширение JavaScript под названием JSX, которое позволяет вам писать HTML непосредственно в JavaScript. Это имеет несколько преимуществ. Он позволяет использовать полную программную мощность JavaScript в HTML и помогает сохранить читаемость кода. По большей части JSX похож на HTML, который вы уже узнали, однако есть несколько ключевых различий, которые будут рассмотрены в ходе этих задач. Например, поскольку JSX является синтаксическим расширением JavaScript, вы можете писать JavaScript непосредственно в JSX. Для этого вы просто включаете код, который хотите обрабатывать как JavaScript в фигурных скобках: <code>{ &#39;this is treated as JavaScript code&#39; }</code> . Помните об этом, поскольку он используется в нескольких будущих задачах. Однако, поскольку JSX недействителен JavaScript, код JSX должен быть скомпилирован в JavaScript. Транспилер Babel - популярный инструмент для этого процесса. Для вашего удобства это уже добавлено за кулисами для этих задач. Если вам удастся написать синтаксически недействительный JSX, вы увидите, что первый тест в этих задачах терпит неудачу. Стоит отметить, что под капотом возникают вызовы <code>ReactDOM.render(JSX, document.getElementById(&#39;root&#39;))</code> . Этот вызов функции - это то, что помещает ваш JSX в собственное легкое представление DOM DOM. Затем React использует моментальные снимки своей собственной DOM для оптимизации обновления только определенных частей фактического DOM.
</section>

## Instructions
<section id='instructions'>
<strong>Инструкции:</strong> текущий код использует JSX для назначения элемента <code>div</code> постоянному <code>JSX</code> . Замените <code>div</code> элементом <code>h1</code> и добавьте текст <code>Hello JSX!</code> внутри него.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The constant <code>JSX</code> should return an <code>h1</code> element.
    testString: assert(JSX.type === 'h1');
  - text: The <code>h1</code> tag should include the text <code>Hello JSX!</code>
    testString: assert(Enzyme.shallow(JSX).contains('Hello JSX!'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = <div></div>;

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(JSX, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const JSX = <h1>Hello JSX!</h1>;
```

</section>
