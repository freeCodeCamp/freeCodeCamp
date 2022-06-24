---
id: 5a24c314108439a4d403614a
title: 次に進む
challengeType: 6
forumTopicId: 301434
dashedName: moving-forward-from-here
---

# --description--

おめでとうございます ！ React と Redux のレッスンが終了しました。 次に進む前に、最後に重要なことを一つ説明しておきましょう。 通常はこのようなコードエディターで React アプリケーションを記述することはありません。 このチャレンジでは、皆さん自身のマシンで npm とファイルシステムを使用する場合にどのような構文になるかを少しだけ紹介します。 コードは、`import` ステートメントを使用している部分を除いて似たものになります (これらの import はチャレンジで提供したすべての依存関係を抽出します)。 npm については「npm でパッケージを管理する」セクションで詳しく説明します。

最後に、React と Redux のコードを記述する際、通常はいくつかの設定が必要になります。 この設定はすぐに複雑になる可能性があります。 自分のマシンで試してみたい方は、<a href="https://www.freecodecamp.org/news/install-react-with-create-react-app/" target="_blank" rel="noopener noreferrer nofollow">Create React App</a> というツールを利用すると簡単に設定を完了できます。

または、CodePen で JavaScript プリプロセッサーとして Babel を有効にし、React と ReactDOM を外部の JavaScript リソースとして追加し、そこで作業することもできます。

# --instructions--

メッセージ `'Now I know React and Redux!'` をコンソールに出力してください。

# --hints--

メッセージ `Now I know React and Redux!` をコンソールに出力します。

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
