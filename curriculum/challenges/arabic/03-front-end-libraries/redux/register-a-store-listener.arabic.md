---
id: 5a24c314108439a4d4036153
title: Register a Store Listener
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> طريقة أخرى لديك حق الوصول إلى كائن <code>store</code> Redux هي <code>store.subscribe()</code> . يتيح لك هذا الاشتراك في وظائف المستمع في المتجر ، والتي يتم استدعاؤها عند إرسال أي إجراء ضد المتجر. إن أحد الاستخدامات البسيطة لهذه الطريقة هو الاشتراك في إحدى الوظائف في متجرك الذي يقوم ببساطة بتسجيل رسالة في كل مرة يتم فيها تلقي إجراء وتحديث المتجر. </section>

## Instructions
<section id="instructions"> اكتب دالة رد اتصال تقوم بزيادة <code>count</code> المتغير <code>count</code> كل مرة يتلقى فيها المخزن إجراءً وتمرير هذه الوظيفة إلى أسلوب <code>store.subscribe()</code> . سترى أن <code>store.dispatch()</code> يسمى ثلاث مرات متتالية ، كل مرة تمر مباشرة في كائن التصرف. شاهد مخرجات وحدة التحكم بين عمليات الإرسال لترى التحديثات. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: إرسال إجراء <code>ADD</code> على المخزن يجب زيادة الحالة بواسطة <code>1</code> .
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch({ type: "ADD" }); const newState = store.getState(); return newState === (initialState + 1); })(), "Dispatching the <code>ADD</code> action on the store should increment the state by <code>1</code>.");'
  - text: يجب أن تكون هناك وظيفة مستمع مشتركة في المتجر باستخدام <code>store.subscribe</code> .
    testString: 'getUserInput => assert(getUserInput("index").includes("store.subscribe("), "There should be a listener function subscribed to the store using <code>store.subscribe</code>.");'
  - text: يجب أيضًا أن <code>store.subscribe</code> رد الاتصال إلى <code>store.subscribe</code> إلى زيادة متغير <code>count</code> العالمي عند تحديث المتجر.
    testString: 'assert(store.getState() === count, "The callback to <code>store.subscribe</code> should also increment the global <code>count</code> variable as the store is updated.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// global count variable:
let count = 0;

// change code below this line

// change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
count = 0;

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
