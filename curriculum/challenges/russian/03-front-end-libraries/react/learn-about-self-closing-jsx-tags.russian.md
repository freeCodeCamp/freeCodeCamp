---
id: 5a24c314108439a4d4036161
title: Learn About Self-Closing JSX Tags
challengeType: 6
isRequired: false
forumTopicId: 301396
localeTitle: Узнайте о самозакрывающихся тегах JSX
---

## Description
<section id='description'>
До сих пор вы видели, как JSX отличается от HTML ключевым способом с использованием класса <code>className</code> против <code>class</code> для определения классов HTML. Другим важным способом, с помощью которого JSX отличается от HTML, является идея самозакрывающегося тега. В HTML почти все теги имеют как открывающий, так и закрывающий тег: <code>&lt;div&gt;&lt;/div&gt;</code> ; закрывающий тег всегда имеет косую черту перед именем тега, которое вы закрываете. Тем не менее, в HTML есть специальные экземпляры, называемые «самозакрывающиеся теги», или теги, которые не требуют как открывающего, так и закрывающего тега перед тем, как запустить другой тег. Например, тэг разрыва строки может быть записан как <code>&lt;br&gt;</code> или как <code>&lt;br /&gt;</code> , но никогда не должен быть записан как <code>&lt;br&gt;&lt;/br&gt;</code> , так как он не содержит никакого содержимого. В JSX правила немного отличаются. Любой элемент JSX можно записать с помощью самозакрывающегося тега, и каждый элемент должен быть закрыт. Например, тег разрыва строки всегда должен быть записан как <code>&lt;br /&gt;</code> , чтобы быть действительным JSX, который может быть переписан. А <code>&lt;div&gt;</code> , с другой стороны, может быть записано как <code>&lt;div /&gt;</code> или <code>&lt;div&gt;&lt;/div&gt;</code> . Разница в том, что в первой версии синтаксиса нет способа включить что-либо в <code>&lt;div /&gt;</code> . В последующих задачах вы увидите, что этот синтаксис полезен при рендеринге компонентов React.
</section>

## Instructions
<section id='instructions'>
Исправьте ошибки в редакторе кода, чтобы он был корректным JSX и успешно переводил. Убедитесь, что вы не меняете какой-либо контент - вам нужно только закрыть теги, где они нужны.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The constant <code>JSX</code> should return a <code>div</code> element.
    testString: assert.strictEqual(JSX.type, 'div');
  - text: The <code>div</code> should contain a <code>br</code> tag.
    testString: assert(Enzyme.shallow(JSX).find('br').length === 1);
  - text: The <code>div</code> should contain an <code>hr</code> tag.
    testString: assert(Enzyme.shallow(JSX).find('hr').length === 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    {/* remove comment and change code below this line
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
    remove comment and change code above this line */}
  </div>
);

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
const JSX = (
<div>
  {/* change code below this line */}
  <h2>Welcome to React!</h2> <br />
  <p>Be sure to close all tags!</p>
  <hr />
  {/* change code above this line */}
</div>
);
```

</section>
