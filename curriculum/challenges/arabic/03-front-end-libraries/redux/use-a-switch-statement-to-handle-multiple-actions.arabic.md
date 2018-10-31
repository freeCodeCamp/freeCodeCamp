---
id: 5a24c314108439a4d4036151
title: Use a Switch Statement to Handle Multiple Actions
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: استخدم بيان تبديل للتعامل مع إجراءات متعددة
---

## Description
<section id="description"> يمكنك معرفة مخزن Redux كيفية التعامل مع أنواع إجراءات متعددة. لنفترض أنك تدير مصادقة المستخدم في متجر Redux. تريد أن يكون لديك تمثيل حالة عندما يقوم المستخدمون بتسجيل الدخول وعند تسجيل الخروج. أنت تمثل هذا مع كائن حالة واحد مع الخاصية <code>authenticated</code> . تحتاج أيضًا إلى منشئي إجراءات ينشئون إجراءات تتوافق مع تسجيل دخول المستخدم وخروج المستخدم ، بالإضافة إلى كائنات الإجراءات نفسها. </section>

## Instructions
<section id="instructions"> يحتوي محرر الشفرات على متجر وإجراءات ومنشئين لأعمال تم إعدادها لك. املأ وظيفة <code>reducer</code> للتعامل مع إجراءات التوثيق المتعددة. استخدم عبارة <code>switch</code> JavaScript في <code>reducer</code> للرد على أحداث إجراء مختلفة. هذا هو نمط قياسي في كتابة مخفضات Redux. يجب أن يقوم بيان التبديل <code>action.type</code> وإرجاع حالة المصادقة المناسبة. <strong>ملاحظة:</strong> في هذه المرحلة ، لا تقلق بشأن ثبات النظام ، لأنها صغيرة وبسيطة في هذا المثال. لكل إجراء ، يمكنك إرجاع كائن جديد - على سبيل المثال ، <code>{authenticated: true}</code> . لا تنس أيضًا كتابة حالة <code>default</code> في كشف التبديل الخاص بك تقوم بإرجاع <code>state</code> الحالية. هذا أمر مهم لأنه بمجرد أن يحتوي تطبيقك على مخفضات متعددة ، يتم تشغيلها في أي وقت يتم فيه إرسال إجراء ، حتى عندما لا يكون الإجراء مرتبطًا بمخفض المخفِّض هذا. في مثل هذه الحالة ، تحتاج إلى التأكد من إرجاع <code>state</code> الحالية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن <code>loginUser</code> استدعاء الدالة <code>loginUser</code> إرجاع كائن له خاصية كتابة معينة إلى السلسلة <code>LOGIN</code> .
    testString: 'assert(loginUser().type === "LOGIN", "Calling the function <code>loginUser</code> should return an object with type property set to the string <code>LOGIN</code>.");'
  - text: ''
    testString: 'assert(logoutUser().type === "LOGOUT", "Calling the function <code>logoutUser</code> should return an object with type property set to the string <code>LOGOUT</code>.");'
  - text: ''
    testString: 'assert(store.getState().authenticated === false, "The store should be initialized with an object with an <code>authenticated</code> property set to <code>false</code>.");'
  - text: ''
    testString: 'assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })(), "Dispatching <code>loginUser</code> should update the <code>authenticated</code> property in the store state to <code>true</code>.");'
  - text: ''
    testString: 'assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false  })(), "Dispatching <code>logoutUser</code> should update the <code>authenticated</code> property in the store state to <code>false</code>.");'
  - text: ''
    testString: 'getUserInput => assert( getUserInput("index").toString().includes("switch") && getUserInput("index").toString().includes("case") && getUserInput("index").toString().includes("default"), "The <code>authReducer</code> function should handle multiple action types with a <code>switch</code> statement.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // change code below this line

  // change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
