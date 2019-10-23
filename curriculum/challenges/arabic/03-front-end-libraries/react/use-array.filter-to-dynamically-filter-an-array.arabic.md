---
id: 5a24c314108439a4d403618c
title: Use Array.filter() to Dynamically Filter an Array
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: استخدم Array.filter () Dynamically تصفية صفيف
---

## Description
<section id="description"> تعد طريقة مصفوفة <code>map</code> أداة فعالة ستستخدمها كثيرًا عند التعامل مع React. هناك طريقة أخرى مرتبطة <code>map</code> هي <code>filter</code> ، والتي تقوم بتصفية محتويات مصفوفة بناءً على شرط ، ثم تقوم بإرجاع صفيف جديد. على سبيل المثال ، إذا كان لديك مجموعة من المستخدمين الذين يملكون جميعًا خاصية <code>online</code> والتي يمكن تعيينها على <code>true</code> أو <code>false</code> ، يمكنك تصفية المستخدمين فقط الذين يكونون متصلين <code>let onlineUsers = users.filter(user =&gt; user.online);</code> عن طريق الكتابة: <code>let onlineUsers = users.filter(user =&gt; user.online);</code> عبر الإنترنت <code>let onlineUsers = users.filter(user =&gt; user.online);</code> </section>

## Instructions
<section id="instructions"> في محرر التعليمة البرمجية ، تتم تهيئة <code>state</code> <code>MyComponent</code> مع مجموعة من المستخدمين. بعض المستخدمين متصلين والبعض الآخر ليسوا كذلك. تصفية المصفوفة بحيث ترى فقط المستخدمين المتصلين. للقيام بذلك ، استخدم أولاً <code>filter</code> لإرجاع صفيف جديد يحتوي فقط على المستخدمين الذين تكون صحتهم <code>online</code> <code>true</code> . بعد ذلك ، في المتغير <code>renderOnline</code> ، قم <code>renderOnline</code> فوق الصفيف الذي تمت تصفيته ، وقم بإرجاع عنصر <code>li</code> لكل مستخدم يحتوي على نص <code>username</code> . تأكد من تضمين <code>key</code> فريد أيضًا ، كما هو الحال في آخر التحديات. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن توجد <code>MyComponent</code> وعرضها إلى الصفحة.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find("MyComponent").length, 1, "<code>MyComponent</code> should exist and render to the page.");'
  - text: ينبغي تهيئة حالة <code>MyComponent</code> إلى صفيف من ستة مستخدمين. &quot;)
    testString: 'assert(Array.isArray(Enzyme.mount(React.createElement(MyComponent)).state("users")) === true && Enzyme.mount(React.createElement(MyComponent)).state("users").length === 6, "<code>MyComponent</code>&apos;s state should be initialized to an array of six users.");'
  - text: يجب أن يقوم <code>MyComponent</code> بإرجاع <code>div</code> ، و <code>h1</code> ، ثم قائمة غير مرتبة تحتوي على عناصر <code>li</code> لكل مستخدم تم تعيين حالة الاتصال الخاصة به إلى <code>true</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MyComponent)); const users = (bool) => ({users:[ { username: "Jeff", online: bool }, { username: "Alan", online: bool }, { username: "Mary", online: bool }, { username: "Jim", online: bool   }, { username: "Laura", online: bool } ]}); const result = () => comp.find("li").length; const _1 = result(); const _2 = () => { comp.setState(users(true)); return waitForIt(() => result()) }; const _3 = () => { comp.setState(users(false)); return waitForIt(() => result()) }; const _4 = () => { comp.setState({ users: [] }); return waitForIt(() => result()) }; const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); assert(comp.find("div").length === 1 && comp.find("h1").length === 1 && comp.find("ul").length === 1 && _1 === 4 && _2_val === 5 && _3_val === 0 && _4_val === 0, "<code>MyComponent</code> should return a <code>div</code>, an <code>h1</code>, and then an unordered list containing <code>li</code> elements for every user whose online status is set to <code>true</code>."); }; '
  - text: يجب أن تقدم <code>MyComponent</code> عناصر <code>li</code> التي تحتوي على اسم المستخدم لكل مستخدم عبر الإنترنت.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(MyComponent)); const users = (bool) => ({users:[ { username: "Jeff", online: bool }, { username: "Alan", online: bool }, { username: "Mary", online: bool }, { username: "Jim", online: bool   }, { username: "Laura", online: bool } ]}); const ul = () => { comp.setState(users(true)); return waitForIt(() => comp.find("ul").html()) }; const html = await ul(); assert(html === "<ul><li>Jeff</li><li>Alan</li><li>Mary</li><li>Jim</li><li>Laura</li></ul>", "<code>MyComponent</code> should render <code>li</code> elements that contain the username of each online user."); }; '
  - text: يجب أن يكون كل عنصر قائمة البند فريدة من نوعها <code>key</code> السمة.
    testString: 'assert((() => { const ul = Enzyme.mount(React.createElement(MyComponent)).find("ul"); console.log(ul.debug()); const keys = new Set([ ul.childAt(0).key(), ul.childAt(1).key(), ul.childAt(2).key(), ul.childAt(3).key() ]); return keys.size === 4; })(), "Each list item element should have a unique <code>key</code> attribute.");'

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
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = null; // change code here
    const renderOnline = null; // change code here
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
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
