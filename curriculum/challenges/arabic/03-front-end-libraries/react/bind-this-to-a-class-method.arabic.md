---
id: 5a24c314108439a4d4036174
title: Bind 'this' to a Class Method
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> بالإضافة إلى إعداد وتحديث <code>state</code> ، يمكنك أيضًا تحديد طرق لفئة مكونك. عادةً ما تحتاج طريقة الصف إلى استخدام <code>this</code> الكلمة الرئيسية حتى تتمكن من الوصول إلى الخصائص على الفئة (مثل <code>state</code> <code>props</code> ) داخل نطاق الطريقة. هناك عدة طرق للسماح لطرق صفك بالوصول إلى <code>this</code> . إحدى الطرق الشائعة هي ربط <code>this</code> بشكل صريح في المُنشئ بحيث يصبح <code>this</code> مرتبطًا بطرق الفئة عند تهيئة المكون. ربما تكون قد لاحظت التحدي الأخير الذي استخدمه <code>this.handleClick = this.handleClick.bind(this)</code> لأسلوب <code>handleClick</code> الخاص به في المُنشئ. ثم ، عند استدعاء دالة مثل هذا <code>this.setState()</code> داخل أسلوب الفصل ، يشير <code>this</code> إلى الفئة ولن يكون <code>undefined</code> . <strong>ملاحظة:</strong> تعتبر <code>this</code> الكلمة الرئيسية واحدة من أكثر جوانب جافا سكريبت مربكة ولكنها تلعب دورًا مهمًا في التفاعل. على الرغم من أن سلوكه هنا طبيعي تمامًا ، إلا أن هذه الدروس ليست المكان المناسب لمراجعة متعمقة <code>this</code> لذا يرجى الرجوع إلى دروس أخرى إذا كان ما سبق مثيرًا للإرباك! </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يقوم <code>MyComponent</code> بإرجاع عنصر <code>div</code> يلف عنصرين ، زر و عنصر <code>h1</code> ، بهذا الترتيب.
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).find("div").length === 1 && Enzyme.mount(React.createElement(MyComponent)).find("div").childAt(0).type() === "button" && Enzyme.mount(React.createElement(MyComponent)).find("div").childAt(1).type() === "h1", "<code>MyComponent</code> should return a <code>div</code> element which wraps two elements, a button and an <code>h1</code> element, in that order.");'
  - text: 'يجب تهيئة حالة <code>MyComponent</code> مع زوج القيمة الرئيسية <code>{ itemCount: 0 }</code> .'
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("itemCount") === 0, "The state of <code>MyComponent</code> should initialize with the key value pair <code>{ itemCount: 0 }</code>.");'
  - text: بالنقر على <code>button</code> يجب أن عنصر تشغيل <code>addItem</code> طريقة وزيادة الدولة <code>itemCount</code> من <code>1</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ itemCount: 0 }); return waitForIt(() => mockedComponent.state("itemCount")); }; const second = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("itemCount")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === 1, "Clicking the <code>button</code> element should run the <code>addItem</code> method and increment the state <code>itemCount</code> by <code>1</code>."); };'

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
      itemCount: 0
    };
    // change code below this line

    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button>Click Me</button>
        { /* change code above this line */ }
        <h1>Current Item Count: {this.state.itemCount}</h1>
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
