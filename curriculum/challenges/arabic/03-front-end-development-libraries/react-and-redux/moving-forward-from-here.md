---
id: 5a24c314108439a4d403614a
title: ما بعد ذالك
challengeType: 6
forumTopicId: 301434
dashedName: moving-forward-from-here
---

# --description--

تهانينا! أنهيت الدروس في React و Redux. هناك عنصر أخير يستحق الإشارة قبل المضي قدما. عادة، لن تكتب تطبيقات React في محرر التعليمات البرمجية مثل ذلك. هذا التحدي يعطيك لمحة من الشكل الذي تبدو عليه الجملة إذا كنت تعمل مع npm ونظام الملفات على جهازك الخاص. يجب أن يبدو كود متشابه، باستثناء استخدام تعبيرات `import` (هذه تجذب في جميع التبعيات (dependencies) التي تم توفيرها لك في التحديات). قسم "Managing Packages with npm" يغطي npm بمزيد من التفصيل.

وأخيرا، تتطلب كتابة تعليمات React و Redux البرمجية بعض الترتيب (configuration) عمومًا. وهذا يمكن أن يصبح معقدا بسرعة. إذا كنت مهتما بالتجربة على جهازك الخاص، فإن <a href="https://www.freecodecamp.org/news/install-react-with-create-react-app/" target="_blank" rel="noopener noreferrer nofollow">إنشاء تطبيق React</a> يتم تكوينه واستعداده للذهاب.

بدلاً من ذلك، يمكنك تمكين Babel كمعالج تمهيدي إلى JavaScript في CodePen، إضافة React و ReactDOM كموارد JavaScript خارجية، والعمل هناك أيضًا.

# --instructions--

سجل الرسالة `'Now I know React and Redux!'` إلى وحدة التحكم.

# --hints--

الرسالة `Now I know React and Redux!` يجب تسجيل إلى وحدة التحكم.

```js
(getUserInput) =>
  assert(
    /console\s*\.\s*log\s*\(\s*('|"|`)Now I know React and Redux!\1\s*\)/.test(
      getUserInput('index')
    )
  );
```

# --seed--

## --seed-contents--

```jsx
/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/

// Only change code below this line
```

# --solutions--

```jsx
console.log('Now I know React and Redux!');
```
