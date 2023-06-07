---
id: 5a24c314108439a4d403614b
title: Redux のストアを作成する
challengeType: 6
forumTopicId: 301439
dashedName: create-a-redux-store
---

# --description--

Redux は、React をはじめとするさまざまなウェブテクノロジーで使用できる状態管理フレームワークです。

Redux には、アプリケーションの状態全体を担う単一の state オブジェクトがあります。 たとえば、10 個のコンポーネントを持つ React アプリがあり、それぞれのコンポーネントが各自のローカルの state を持っている場合でも、アプリ全体の状態は Redux の `store` に格納されている単一の state オブジェクトによって定義されます。 Redux を学ぶ際は、次のことを 1 つ目の重要な原則として理解する必要があります。つまり、「Redux ストアはアプリケーションの状態に関して信頼できる単一の情報源である」ということです。

これはまた、アプリの任意の部分で状態を更新したいときはいつでも、**必ず** Redux ストアを通じて更新しなければならないことを意味します。 一方向のデータフローにより、アプリの状態管理を簡単に追跡できるようになります。

# --instructions--

Redux の `store` は、アプリケーションの `state` を保持して管理するオブジェクトです。 Redux オブジェクトに `createStore()` というメソッドがあり、Redux `store` を作成するために使用します。 このメソッドは、必須の引数として `reducer` 関数を受け取ります。 `reducer` 関数についてはこの後のチャレンジで説明します。コードエディターではすでに定義が済んでいて、 単に `state` を引数に取り、`state` を返します。

`store` 変数を宣言し、それを `createStore()` メソッドに割り当て、引数として `reducer` を渡してください。

**注:** エディターのコードでは、ES6 のデフォルト引数の構文を使用して、`5` という値を保持するようにこの state を初期化しています。 デフォルト引数に不慣れな場合は、このトピックについて説明している<a href="https://www.freecodecamp.org/japanese/learn/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions" target="_blank" rel="noopener noreferrer nofollow">カリキュラムの ES6 セクション</a>を参照してください。

# --hints--

Redux ストアが存在する必要があります。

```js
assert(typeof store.getState === 'function');
```

Redux ストアで、state に対して 5 という値を持たせます。

```js
assert(store.getState() === 5);
```

# --seed--

## --seed-contents--

```js
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
```

# --solutions--

```js
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer);
```
