---
title: Redux Actions
localeTitle: إجراءات Redux
---
## إجراءات Redux

الإجراء Redux هو كائن بسيط يصف أي نوع من الأحداث حدث في التطبيق الخاص بك. يمكن أن تحتوي حتى البيانات التي يجب إرسالها من التطبيق إلى مخزن Redux. يمكن أن يحتوي الإجراء على أي شيء ولكن يجب أن يكون إلزاميًا اكتب الخاصية التي تصف الحدث الذي يجري. من الممارسات الجيدة استخدام الثوابت أثناء وصف الإجراء.

فمثلا

 `const ADD_ITEM = 'ADD_ITEM' 
` 

 `{ 
 type: ADD_ITEM, 
 text: 'This is the first item' 
 } 
` 

يمكننا إرسال هذه الإجراءات إلى المتجر باستخدام `javascript store.dispatch()` يمكن أن يحتوي التطبيق على أنواع مختلفة من الأحداث التي تحدث في كل مرة وتساعد هذه الإجراءات في وصف هذه الأحداث. بدون هذه الإجراءات لا توجد طريقة لتغيير حالة التطبيق.

يمكنك تجربة مشروع [الإجراءات التصاعدية](https://github.com/redux-utilities/redux-actions) الذي يقلل من الكثير من كتابة التعليمات البرمجية مما يجعل من كتابة الإجراءات أسرع.

#### معلومات اكثر:

[Actions-Redux Offical Docs](https://redux.js.org/basics/actions) [redux-actions](https://github.com/redux-utilities/redux-actions) github project page