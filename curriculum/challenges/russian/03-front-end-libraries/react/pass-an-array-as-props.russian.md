---
id: 5a24c314108439a4d403616a
title: Pass an Array as Props
challengeType: 6
isRequired: false
forumTopicId: 301401
localeTitle: Передайте массив как реквизит
---

## Description
<section id='description'>
Последняя задача продемонстрировала, как передавать информацию из родительского компонента в дочерний компонент в качестве <code>props</code> или свойств. В этой задаче рассматривается, как массивы могут быть переданы в качестве <code>props</code> . Чтобы передать массив элементу JSX, он должен рассматриваться как JavaScript и завернут в фигурные скобки. <blockquote> &lt;ParentComponent&gt; <br> &lt;Цвета ChildComponent = {[&quot;зеленый&quot;, &quot;синий&quot;, &quot;красный&quot;]} /&gt; <br> &lt;/ ParentComponent&gt; </blockquote> Затем дочерний компонент имеет доступ к <code>colors</code> свойств массива. При доступе к свойству могут использоваться методы массива, такие как <code>join()</code> . <code>const ChildComponent = (props) =&gt; &lt;p&gt;{props.colors.join(&#39;, &#39;)}&lt;/p&gt;</code> Это объединит все элементы массива <code>colors</code> в строку, разделенную запятой, и произведет: <code>&lt;p&gt;green, blue, red&lt;/p&gt;</code> Позже мы узнаем о других распространенных методах рендеринга массивов данных в React.
</section>

## Instructions
<section id='instructions'>
В редакторе кода есть компоненты <code>List</code> и <code>ToDo</code> . При рендеринге каждого <code>List</code> из компонента <code>ToDo</code> передайте свойство <code>tasks</code> назначенное массиву заданий, например <code>[&quot;walk dog&quot;, &quot;workout&quot;]</code> . Затем войдите в этот массив <code>tasks</code> в компоненте <code>List</code> , показывая его значение в <code>p</code> элементе. Используйте <code>join(&quot;, &quot;)</code> чтобы отобразить массив <code>props.tasks</code> в элементе <code>p</code> как список, разделенный запятыми. В сегодняшнем списке должно быть не менее двух задач, а завтра должно быть не менее 3 задач.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>ToDo</code> component should return a single outer <code>div</code>.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().type() === 'div'; })());
  - text: The third child of the <code>ToDo</code> component should be an instance of the <code>List</code> component.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(2).name() === 'List'; })());
  - text: The fifth child of the <code>ToDo</code> component should be an instance of the <code>List</code> component.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(4).name() === 'List'; })());
  - text: Both instances of the <code>List</code> component should have a property called <code>tasks</code> and <code>tasks</code> should be of type array.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return Array.isArray(mockedComponent.find('List').get(0).props.tasks) && Array.isArray(mockedComponent.find('List').get(1).props.tasks); })());
  - text: The first <code>List</code> component representing the tasks for today should have 2 or more items.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find('List').get(0).props.tasks.length >= 2; })());
  - text: The second <code>List</code> component representing the tasks for tomorrow should have 3 or more items.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find('List').get(1).props.tasks.length >= 3; })());
  - text: The <code>List</code> component should render the value from the <code>tasks</code> prop in the <code>p</code> tag.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find('p').get(0).props.children === mockedComponent.find('List').get(0).props.tasks.join(', ') && mockedComponent.find('p').get(1).props.children === mockedComponent.find('List').get(1).props.tasks.join(', '); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const List = (props) => {
  { /* change code below this line */ }
  return <p>{}</p>
  { /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List/>
        <h2>Tomorrow</h2>
        <List/>
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
ReactDOM.render(<ToDo />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
const List= (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['study', 'exercise']} />
        <h2>Tomorrow</h2>
        <List tasks={['call Sam', 'grocery shopping', 'order tickets']} />
      </div>
    );
  }
};
```

</section>
