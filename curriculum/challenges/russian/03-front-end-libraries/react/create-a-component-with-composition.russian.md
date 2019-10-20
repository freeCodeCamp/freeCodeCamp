---
id: 5a24c314108439a4d4036164
title: Create a Component with Composition
challengeType: 6
isRequired: false
forumTopicId: 301383
localeTitle: Создание компонента с композицией
---

## Description
<section id='description'>
Теперь мы рассмотрим, как мы можем собрать несколько компонентов React вместе. Представьте, что вы создаете приложение и создали три компонента: <code>Navbar</code> , <code>Dashboard</code> и <code>Footer</code> . Чтобы собрать эти компоненты вместе, вы можете создать <i>родительский</i> компонент <code>App</code> который отображает каждый из этих трех компонентов в качестве <i>дочерних</i> . Чтобы отобразить компонент как дочерний элемент в компоненте React, вы включаете имя компонента, написанное как пользовательский тег HTML в JSX. Например, в методе <code>render</code> вы можете написать: <blockquote> вернуть ( <br> &lt;App&gt; <br> &lt;Navbar /&gt; <br> &lt;Панель мониторинга /&gt; <br> &lt;Footer /&gt; <br> &lt;/ Приложение&gt; <br> ) </blockquote> Когда React встречает пользовательский тег HTML, который ссылается на другой компонент (имя компонента, заключенное в <code>&lt; /&gt;</code> как в этом примере), он отображает разметку для этого компонента в местоположении тега. Это должно иллюстрировать отношения между родителями и дочерними элементами между компонентом <code>App</code> и <code>Navbar</code> , <code>Dashboard</code> и <code>Footer</code> .
</section>

## Instructions
<section id='instructions'>
В редакторе кода есть простой функциональный компонент <code>ChildComponent</code> и компонент React, называемый <code>ParentComponent</code> . Составьте два вместе рендерингом <code>ChildComponent</code> в <code>ParentComponent</code> . Убедитесь, что тег <code>ChildComponent</code> косой чертой. <strong>Примечание.</strong> <code>ChildComponent</code> определяется с помощью функции стрелок ES6, потому что это очень распространенная практика при использовании React. Однако, знайте, что это всего лишь функция. Если вы не знакомы с синтаксисом функции стрелки, обратитесь к разделу JavaScript.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The React component should return a single <code>div</code> element.
    testString: assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.type() === 'div'; })());
  - text: The component should return two nested elements.
    testString: assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.children().length === 2; })());
  - text: The component should return the ChildComponent as its second child.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ParentComponent)); return mockedComponent.find('ParentComponent').find('ChildComponent').length === 1; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }


        { /* change code above this line */ }
      </div>
    );
  }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<ParentComponent />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }
        <ChildComponent />
        { /* change code above this line */ }
      </div>
    );
  }
};
```

</section>
