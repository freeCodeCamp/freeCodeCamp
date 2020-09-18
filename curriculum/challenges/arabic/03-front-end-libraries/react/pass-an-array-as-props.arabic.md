---
id: 5a24c314108439a4d403616a
title: Pass an Array as Props
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> أظهر التحدي الأخير كيفية تمرير المعلومات من مكون رئيسي إلى مكون <code>props</code> أو خصائص. هذا التحدي يبحث في كيف يمكن تمرير الصفائف <code>props</code> . لتمرير مصفوفة إلى عنصر JSX ، يجب التعامل معها على هيئة JavaScript وملفوفة في أقواس معقوفة. <blockquote style=";text-align:right;direction:rtl"> &lt;ParentComponent&gt; <br> &lt;ChildComponent colors = {[&quot;green&quot;، &quot;blue&quot;، &quot;red&quot;]} /&gt; <br> &lt;/ ParentComponent&gt; </blockquote> المكون الفرعي ثم الوصول إلى <code>colors</code> خاصية الصفيف. يمكن استخدام أساليب المصفوفة مثل <code>join()</code> عند الوصول إلى الخاصية. <code>const ChildComponent = (props) =&gt; &lt;p&gt;{props.colors.join(&#39;, &#39;)}&lt;/p&gt;</code> سينضم هذا إلى كل عناصر صفيف <code>colors</code> في سلسلة مفصولة بفواصل وينتج: <code>&lt;p&gt;green, blue, red&lt;/p&gt;</code> لاحقًا ، سنتعرف على الطرق الشائعة الأخرى لتقديم صفائف البيانات في React. </section>

## Instructions
<section id="instructions"> هناك <code>List</code> ومكونات <code>ToDo</code> في محرر التعليمات البرمجية. عند تقديم كل <code>List</code> من المكون <code>ToDo</code> ، قم بتمرير خاصية <code>tasks</code> معينة إلى صفيف مهام المهام ، على سبيل المثال <code>[&quot;walk dog&quot;, &quot;workout&quot;]</code> . ثم قم بالوصول إلى مصفوفة <code>tasks</code> هذه في مكون <code>List</code> ، مع إظهار قيمته داخل العنصر <code>p</code> . استخدم <code>join(&quot;, &quot;)</code> لعرض مصفوفة <code>props.tasks</code> في عنصر <code>p</code> كقائمة مفصولة بفواصل. يجب أن تحتوي قائمة اليوم على مهمتين على الأقل ويجب أن تشتمل مهام الغد على 3 مهام على الأقل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يقوم مكون <code>ToDo</code> بإرجاع <code>div</code> خارجي واحد.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().type() === "div"; })(), "The <code>ToDo</code> component should return a single outer <code>div</code>.");'
  - text: يجب أن يكون الطفل الثالث لمكون <code>ToDo</code> نسخة من مكون <code>List</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(2).name() === "List"; })(), "The third child of the <code>ToDo</code> component should be an instance of the <code>List</code> component.");'
  - text: يجب أن يكون الطفل الخامس من المكون <code>ToDo</code> نسخة من مكون <code>List</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.children().first().childAt(4).name() === "List"; })(), "The fifth child of the <code>ToDo</code> component should be an instance of the <code>List</code> component.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return Array.isArray(mockedComponent.find("List").get(0).props.tasks) && Array.isArray(mockedComponent.find("List").get(1).props.tasks); })(), "Both instances of the <code>List</code> component should have a property called <code>tasks</code> and <code>tasks</code> should be of type array.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find("List").get(0).props.tasks.length >= 2; })(), "The first <code>List</code> component representing the tasks for today should have 2 or more items.");'
  - text: يجب أن يشتمل عنصر <code>List</code> الثاني الذي يمثل مهام الغد على 3 عناصر أو أكثر.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find("List").get(1).props.tasks.length >= 3; })(), "The second <code>List</code> component representing the tasks for tomorrow should have 3 or more items.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ToDo)); return mockedComponent.find("p").get(0).props.children === mockedComponent.find("List").get(0).props.tasks.join(", ") && mockedComponent.find("p").get(1).props.children === mockedComponent.find("List").get(1).props.tasks.join(", "); })(), "The <code>List</code> component should render the value from the <code>tasks</code> prop in the <code>p</code> tag as a comma separated list, for example <code>walk dog, workout</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const List= (props) => {
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
