---
id: 5a24c314108439a4d403617f
title: Manage Updates with Lifecycle Methods
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: إدارة التحديثات باستخدام أساليب دورة الحياة
---

## Description
<section id="description"> هناك طريقة أخرى لدورة الحياة هي <code>componentWillReceiveProps()</code> والتي يتم استدعاؤها كلما تلقى المكون الدعائم الجديدة. يتلقى هذا الأسلوب الدعائم الجديدة كوسيطة ، والتي عادة ما تتم كتابتها على شكل <code>nextProps</code> . يمكنك استخدام هذه الوسيطة ومقارنتها مع هذا <code>this.props</code> وتنفيذ الإجراءات قبل تحديث المكون. على سبيل المثال ، يمكنك استدعاء <code>setState()</code> محليًا قبل معالجة التحديث. طريقة أخرى هي <code>componentDidUpdate()</code> ، وتسمى على الفور بعد إعادة عرض المكون. لاحظ أن التقديم والتثبيت يعتبران أشياء مختلفة في دورة حياة المكونات. عندما يتم تحميل الصفحة أولاً ، يتم تحميل جميع المكونات وهذا هو المكان الذي يتم فيه استدعاء أساليب مثل <code>componentWillMount()</code> و <code>componentDidMount()</code> . بعد ذلك ، مع تغير الدولة ، تقوم المكونات بإعادة تقديم نفسها. التحدي التالي يغطي هذا بمزيد من التفصيل. </section>

## Instructions
<section id="instructions"> يتلقى مربع <code>Dialog</code> المكون التابع الدعائم <code>message</code> من أصلها ، مكون &quot; <code>Controller</code> . اكتب أسلوب <code>componentWillReceiveProps()</code> في مكون &quot; <code>Dialog</code> وقم <code>this.props</code> و <code>nextProps</code> إلى وحدة التحكم. ستحتاج إلى تمرير <code>nextProps</code> كحجة لهذه الطريقة ، وعلى الرغم من أنه من الممكن تسمية أي شيء ، <code>nextProps</code> ذلك هنا. بعد ذلك ، قم بإضافة <code>componentDidUpdate()</code> في مكون <code>Dialog</code> ، وقم بتسجيل عبارة تقول أن المكون قد تم تحديثه. تعمل هذه الطريقة على غرار <code>componentWillUpdate()</code> ، الذي يتم توفيره لك. الآن انقر فوق الزر لتغيير الرسالة ومشاهدة وحدة تحكم المستعرض الخاص بك. يعرض ترتيب عبارات وحدة التحكم الترتيب الذي تسمى الطرق. <strong>ملاحظة:</strong> ستحتاج إلى كتابة أساليب دورة الحياة كوظائف عادية وليس كدالة سهم لاجتياز الاختبارات (لا توجد أيضًا ميزة لكتابة أساليب دورة الحياة كدالة سهم). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يقوم مكون <code>Controller</code> بعرض مكون  <code>Dialog</code> كطفل.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find("Controller").length === 1 && mockedComponent.find("Dialog").length === 1; })(), "The <code>Controller</code> component should render the <code>Dialog</code> component as a child.");'
  - text: يجب أن يتم تسجيل أسلوب <code>componentWillReceiveProps</code> في مكون <code>Dialog</code> <code>this.props</code> إلى وحدة التحكم.
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,""); return lifecycleChild.includes("console.log") && lifecycleChild.includes("this.props") })(), "The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>this.props</code> to the console.");'
  - text: يجب أن يسجل الأسلوب <code>componentWillReceiveProps</code> في مكون <code>Dialog</code> <code>nextProps</code> إلى وحدة التحكم.
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,""); const nextPropsAsParameterTest = /componentWillReceiveProps(| *?= *?)(\(|)nextProps(\)|)( *?=> *?{| *?{|{)/; const nextPropsInConsoleLogTest = /console\.log\(.*?nextProps\b.*?\)/; return ( lifecycleChild.includes("console.log") && nextPropsInConsoleLogTest.test(lifecycleChild) && nextPropsAsParameterTest.test(lifecycleChild) ); })(), "The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>nextProps</code> to the console.");'
  - text: يجب استدعاء مكون <code>Dialog</code> أسلوب <code>componentDidUpdate</code> وتسجيل رسالة إلى وحدة التحكم.
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentDidUpdate.toString().replace(/ /g,""); return lifecycleChild.length !== "undefined" && lifecycleChild.includes("console.log"); })(), "The <code>Dialog</code> component should call the <code>componentDidUpdate</code> method and log a message to the console.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line

  // change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
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
