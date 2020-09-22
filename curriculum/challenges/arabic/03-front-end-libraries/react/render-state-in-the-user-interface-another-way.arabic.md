---
id: 5a24c314108439a4d4036172
title: Render State in the User Interface Another Way
challengeType: 6
videoUrl: ''
localeTitle: تقديم الدولة في واجهة المستخدم بطريقة أخرى
---

## Description
<section id="description"> هناك طريقة أخرى للوصول إلى <code>state</code> في أحد المكونات. في الطريقة <code>render()</code> ، قبل عبارة <code>return</code> ، يمكنك كتابة JavaScript مباشرة. على سبيل المثال ، يمكنك الإعلان عن الدوال ، أو الوصول إلى البيانات من <code>state</code> أو <code>props</code> ، أو إجراء عمليات حسابية على هذه البيانات ، وما إلى ذلك. بعد ذلك ، يمكنك تعيين أي بيانات للمتغيرات ، والتي يمكنك الوصول إليها في بيان <code>return</code> . </section>

## Instructions
<section id="instructions"> في <code>MyComponent</code> تقديم طريقة، تحديد <code>const</code> يسمى <code>name</code> وأضرموا فيه يساوي قيمة اسم في المكون <code>state</code> . نظرًا لأنه يمكنك كتابة JavaScript مباشرة في هذا الجزء من الشفرة ، لن تضطر إلى تضمين هذا المرجع في أقواس معقوفة. بعد ذلك ، في بيان الإرجاع ، قم بعرض هذه القيمة في علامة <code>h1</code> باستخدام <code>name</code> المتغير. تذكر أنك تحتاج إلى استخدام بنية JSX (أقواس معقوفة لجافا سكريبت) في بيان الإرجاع. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لدى <code>MyComponent</code> <code>name</code> مفتاح مع القيمة <code>freeCodeCamp</code> المخزنة في حالتها.
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("name") === "freeCodeCamp", "<code>MyComponent</code> should have a key <code>name</code> with value <code>freeCodeCamp</code> stored in its state.");'
  - text: يجب أن يقوم <code>MyComponent</code> بعرض رأس <code>h1</code> مغلق في <code>div</code> مفرد.
    testString: 'assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()), "<code>MyComponent</code> should render an <code>h1</code> header enclosed in a single <code>div</code>.");'
  - text: 'يجب أن تتضمن العلامة <code>h1</code> المقدمة إشارة إلى <code>{name}</code> .'
    testString: 'getUserInput => assert(/<h1>\n*\s*\{\s*name\s*\}\s*\n*<\/h1>/.test(getUserInput("index")), "The rendered <code>h1</code> tag should include a reference to <code>{name}</code>.");'
  - text: يجب أن يحتوي رأس <code>h1</code> المقدمة على نص تم تقديمه من حالة المكوِّن.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: "TestName" });   return waitForIt(() => mockedComponent.html()) }; const firstValue = await first(); assert(firstValue === "<div><h1>TestName</h1></div>", "The rendered <code>h1</code> header should contain text rendered from the component&apos;s state."); };'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line

    // change code above this line
    return (
      <div>
        { /* change code below this line */ }

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
