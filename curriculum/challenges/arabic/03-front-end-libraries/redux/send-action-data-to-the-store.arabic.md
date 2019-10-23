---
id: 5a24c314108439a4d4036155
title: Send Action Data to the Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: إرسال بيانات الإجراء إلى المتجر
---

## Description
<section id="description"> تعلمت الآن كيفية إرسال إجراءات إلى متجر Redux ، ولكن حتى الآن لم تتضمن هذه الإجراءات أي معلومات بخلاف <code>type</code> . يمكنك أيضًا إرسال بيانات محددة مع إجراءاتك. في الواقع ، هذا أمر شائع جدًا لأن الإجراءات عادة ما تنشأ عن بعض تفاعل المستخدم وتميل إلى حمل بعض البيانات معهم. يحتاج مخزن Redux في الغالب إلى معرفة هذه البيانات. </section>

## Instructions
<section id="instructions"> هناك ملاحظات أساسية <code>notesReducer()</code> <code>addNoteText()</code> عمل <code>addNoteText()</code> المحدد في محرر التعليمة البرمجية. قم <code>addNoteText()</code> الجسم <code>addNoteText()</code> بحيث تقوم بإرجاع كائن <code>action</code> . يجب أن يشتمل الكائن على خاصية <code>type</code> بقيمة <code>ADD_NOTE</code> ، وأيضًا خاصية <code>text</code> تعيينها إلى بيانات <code>note</code> التي تم تمريرها إلى منشئ الإجراء. عندما تتصل بمنشئ الإجراء ، ستقوم بتمرير معلومات ملاحظة محددة يمكنك الوصول إليها للكائن. بعد ذلك ، <code>notesReducer()</code> كتابة عبارة <code>switch</code> في <code>notesReducer()</code> . تحتاج إلى إضافة حالة تتعامل مع إجراءات <code>addNoteText()</code> . يجب أن تسبب هذه الحالة عندما يكون هناك عمل من نوع <code>ADD_NOTE</code> ويجب إرجاع <code>text</code> الملكية على واردة <code>action</code> باسم جديدة <code>state</code> . يتم إرسال الإجراء في أسفل الرمز. بمجرد الانتهاء ، قم بتشغيل التعليمات البرمجية ومشاهدة وحدة التحكم. هذا هو كل ما يتطلبه الأمر لإرسال البيانات الخاصة بالإجراء إلى المتجر واستخدامها عند تحديث <code>state</code> المتجر. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن <code>addNoteText</code> منشئ <code>addNoteText</code> بإرجاع كائن يحتوي على <code>type</code> المفاتيح <code>text</code> .
    testString: 'assert((function() { const addNoteFn = addNoteText("__TEST__NOTE"); return addNoteFn.type === ADD_NOTE && addNoteFn.text === "__TEST__NOTE" })(), "The action creator <code>addNoteText</code> should return an object with keys <code>type</code> and <code>text</code>.");'
  - text: يجب أن يؤدي إرسال إجراء من النوع <code>ADD_NOTE</code> باستخدام منشئ إجراء <code>addNoteText</code> تحديث <code>state</code> إلى السلسلة التي تم تمريرها إلى منشئ الإجراء.
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(addNoteText("__TEST__NOTE")); const newState = store.getState(); return initialState !== newState && newState === "__TEST__NOTE" })(), "Dispatching an action of type <code>ADD_NOTE</code> with the <code>addNoteText</code> action creator should update the <code>state</code> to the string passed to the action creator.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // change code below this line

    // change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // change code below this line

  // change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
