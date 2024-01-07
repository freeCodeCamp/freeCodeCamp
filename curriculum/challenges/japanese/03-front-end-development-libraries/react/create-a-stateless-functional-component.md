---
id: 5a24c314108439a4d4036162
title: ステートレス関数型コンポーネントを作成する
challengeType: 6
forumTopicId: 301392
dashedName: create-a-stateless-functional-component
---

# --description--

コンポーネントは React の中心となるものです。 React にあるものはすべてコンポーネントです。ここではコンポーネントの作成方法について説明します。

React コンポーネントは 2 つの方法で作成できます。 1 つ目は JavaScript 関数を使用する方法です。 この方法でコンポーネントを定義すると、*ステートレス関数型コンポーネント*が作成されます。 アプリケーションにおける state (状態、ステート) の概念については以降のチャレンジで説明しますが、 ここではステートレスコンポーネントを「データを受け取ってレンダーすることができるが、データの変更を管理または追跡することをしないコンポーネント」であると理解してください (React コンポーネントを作成する 2 つ目の方法については次のチャレンジで説明します)。

関数を持つコンポーネントを作成するには、JSX または `null` を返す JavaScript 関数を記述するだけです。 ここで重要なのは、React では関数名を大文字で始める必要がある、ということです。 JSX で HTML クラスを割り当てるステートレス関数型コンポーネントの例を次に示します。

```jsx
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

トランスパイル後に、`<div>` は `customClass` という CSS クラスを持ちます。

JSX コンポーネントは HTML を表現するため、複数のコンポーネントをまとめることで、もっと複雑な HTML ページを作成することができます。 このことは React が提供するコンポーネントアーキテクチャの主な利点の一つであり、 個々に分離した多数のコンポーネントから UI を構成することができます。 そのため、複雑なユーザーインターフェイスの構築や保守が容易になります。

# --instructions--

コードエディターに `MyComponent` という関数があります。 テキストの文字列を含む単一の `div` 要素を返すように、この関数を完成させてください。

**注:** テキストは `div` 要素の子とみなされます。そのため自己終了タグは使用できなくなります。

# --hints--

`MyComponent` から JSX を返します。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.length === 1;
  })()
);
```

`MyComponent` から `div` 要素を返します。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`div` 要素にテキストの文字列を含めます。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').text() !== '';
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const MyComponent = function() {
  // Change code below this line



  // Change code above this line
}
```

# --solutions--

```jsx
const MyComponent = function() {
  // Change code below this line
  return (
    <div>
      Demo Solution
    </div>
  );
  // Change code above this line
}
```
