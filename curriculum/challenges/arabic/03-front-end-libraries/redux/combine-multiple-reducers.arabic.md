---
id: 5a24c314108439a4d4036154
title: Combine Multiple Reducers
challengeType: 6
videoUrl: ''
localeTitle: الجمع بين متعددة المخفضات
---

## Description
<section id="description"> عندما تبدأ حالة تطبيقك في التزايد أكثر تعقيدًا ، قد يكون من المغري تقسيم الدولة إلى أجزاء متعددة. بدلاً من ذلك ، تذكر المبدأ الأول لـ Redux: يتم الاحتفاظ بكل حالة التطبيق في كائن حالة واحد في المتجر. لذلك ، يوفر Redux تركيبة المخفض كحل لنموذج حالة معقد. يمكنك تحديد مخفضات متعددة للتعامل مع أجزاء مختلفة من حالة التطبيق الخاص بك ، ثم يؤلف هذه المخفضات معًا في مخفض جذري واحد. يتم بعد ذلك تمرير مخفض الجذر إلى طريقة <code>createStore()</code> . من أجل السماح لنا بدمج مخفضات متعددة معاً ، يوفر Redux أسلوب <code>combineReducers()</code> . تقبل هذه الطريقة كائنًا كوسيطة حيث تقوم بتعريف الخصائص التي تربط المفاتيح بوظائف المخفض المحددة. سيتم استخدام الاسم الذي تعطيه للمفاتيح بواسطة Redux كاسم حالة القطعة المرتبطة. عادة ، من الممارسات الجيدة إنشاء مخفض لكل حالة من حالات التطبيق عندما تكون متميزة أو فريدة من نوعها بطريقة ما. على سبيل المثال ، في تطبيق تدوين الملاحظات مع مصادقة المستخدم ، يمكن لمخفّض واحد التعامل مع المصادقة بينما يعالج آخر النص ويلاحظ أن المستخدم يرسل. بالنسبة إلى هذا التطبيق ، قد نكتب طريقة <code>combineReducers()</code> كما يلي: <blockquote style=";text-align:right;direction:rtl"> const rootReducer = Redux.combineReducers ({ <br> auth: authenticationReducer ، <br> ملاحظات: notesReducer <br> })؛ </blockquote> الآن ، ستحتوي <code>notes</code> الرئيسية على جميع الحالات المرتبطة بملاحظاتنا ويتم التعامل معها من خلال <code>notesReducer</code> . هذه هي الطريقة التي يمكن بها إنشاء مخفضات متعددة لإدارة حالة تطبيق أكثر تعقيدًا. في هذا المثال ، ستكون الحالة الموجودة في مخزن Redux عبارة عن كائن واحد يحتوي على خصائص <code>auth</code> <code>notes</code> . </section>

## Instructions
<section id="instructions"> توجد <code>counterReducer()</code> و <code>authReducer()</code> في محرر التعليمة البرمجية ، بالإضافة إلى مخزن Redux. إنهاء كتابة الدالة <code>rootReducer()</code> باستخدام الأسلوب <code>Redux.combineReducers()</code> . قم بتعيين <code>counterReducer</code> إلى مفتاح يسمى <code>count</code> و <code>authReducer</code> إلى مفتاح يسمى <code>auth</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب على <code>counterReducer</code> زيادة <code>counterReducer</code> <code>state</code> .
    testString: 'assert((function() { const initalState = store.getState().count; store.dispatch({type: INCREMENT}); store.dispatch({type: INCREMENT}); const firstState = store.getState().count; store.dispatch({type: DECREMENT}); const secondState = store.getState().count; return firstState === initalState + 2 && secondState === firstState - 1  })(), "The <code>counterReducer</code> should increment and decrement the <code>state</code>.");'
  - text: يجب على <code>authReducer</code> تبديل <code>state</code> <code>authenticated</code> بين <code>true</code> و <code>false</code> .
    testString: 'assert((function() {  store.dispatch({type: LOGIN}); const loggedIn = store.getState().auth.authenticated; store.dispatch({type: LOGOUT}); const loggedOut = store.getState().auth.authenticated; return loggedIn === true && loggedOut === false  })(), "The <code>authReducer</code> should toggle the <code>state</code> of <code>authenticated</code> between <code>true</code> and <code>false</code>.");'
  - text: 'يجب أن تحتوي <code>state</code> المتجر على مفتاحين: <code>count</code> ، الذي يحتفظ برقم ، و <code>auth</code> ، الذي يحمل كائنًا. يجب أن يكون لعنصر <code>auth</code> خاصية <code>authenticated</code> ، والتي تحمل قيمة منطقية.'
    testString: 'assert((function() { const state = store.getState(); return typeof state.auth === "object" && typeof state.auth.authenticated === "boolean" && typeof state.count === "number" })(), "The store <code>state</code> should have two keys: <code>count</code>, which holds a number, and <code>auth</code>, which holds an object. The <code>auth</code> object should have a property of <code>authenticated</code>, which holds a boolean.");'
  - text: يجب أن يكون <code>rootReducer</code> دالة تجمع بين <code>counterReducer</code> و <code>authReducer</code> .
    testString: 'getUserInput => assert((function() {  const noWhiteSpace = getUserInput("index").replace(/\s/g,""); return typeof rootReducer === "function" && noWhiteSpace.includes("Redux.combineReducers")  })(), "The <code>rootReducer</code> should be a function that combines the <code>counterReducer</code> and the <code>authReducer</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = // define the root reducer here

const store = Redux.createStore(rootReducer);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
