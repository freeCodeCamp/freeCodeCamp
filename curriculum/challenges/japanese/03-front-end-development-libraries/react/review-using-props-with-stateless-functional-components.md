---
id: 5a24c314108439a4d403616f
title: ステートレス関数型コンポーネントでの props の使用を復習する
challengeType: 6
forumTopicId: 301411
dashedName: review-using-props-with-stateless-functional-components
---

# --description--

前回のチャレンジを除いて、ステートレス関数型コンポーネントにはずっと props を渡しています。 これらのコンポーネントは純粋な関数のように機能します。 props を入力として受け取り、同じ props が渡されるたびに同じビューを返します。 state (状態、ステート) とは何なのかと思うかもしれません。それについては次のチャレンジで詳しく説明します。 その前に、ここではコンポーネントの用語について復習をします。

*ステートレス関数型コンポーネント*とは、props を受け取り、JSX を返すように記述する関数です。 一方、*ステートレスコンポーネント*とは `React.Component` を拡張するクラスですが、内部状態を使用しません (次のチャレンジで説明します)。 そして、*ステートフルコンポーネント*とは、自身の内部状態を維持するクラスコンポーネントです。 ステートフルコンポーネントのことを単に「コンポーネント」または「React コンポーネント」と呼ぶこともあります。

ステートフルを最小限に抑え、できるだけステートレスな関数型コンポーネントを作成するのが、通常のパターンです。 そうすることで、状態管理がアプリケーションの特定の領域に閉じ込められるようになります。 したがって、状態の変更がアプリの動作にどのように影響するかを簡単に追跡できるようになり、アプリの開発や保守が向上します。

# --instructions--

コードエディターに `CampSite` コンポーネントがあります。このコンポーネントは、`Camper` コンポーネントを子としてレンダーします。 `Camper` コンポーネントを定義し、それに `{ name: 'CamperBot' }` というデフォルトの props を割り当ててください。 `Camper` コンポーネントの中で必要なコードをレンダーしてください。ただし、`prop` として渡された `name` の値のみを含む `p` 要素を 1 つ、必ず設定してください。 最後に、`Camper` コンポーネントで `propTypes` を定義し、`name` を prop として提供する必要があることを示し、`string` 型であることを確認してください。

# --hints--

`CampSite` コンポーネントをレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('CampSite').length === 1;
  })()
);
```

`Camper` コンポーネントをレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('Camper').length === 1;
  })()
);
```

`Camper` コンポーネントにデフォルトの props を含めます。この props は、文字列 `CamperBot` をキー `name` に割り当てます。

```js
assert(
  /Camper.defaultProps={name:(['"`])CamperBot\1,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

`Camper` コンポーネントに prop types を含めます。prop types では、`name` prop を `string` 型にする必要があります。

```js
assert(
  /Camper.propTypes={name:PropTypes.string.isRequired,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

`Camper` コンポーネントに `p` 要素を含め、`name` prop のテキストのみを含めます。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return (
      mockedComponent.find('p').text() ===
      mockedComponent.find('Camper').props().name
    );
  })()
);
```

# --seed--

## --before-user-code--

```jsx
var PropTypes = {
   string: { isRequired: true }
};
```

## --after-user-code--

```jsx
ReactDOM.render(<CampSite />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
```

# --solutions--

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line

const Camper = (props) => {
   return (
     <div>
       <p>{props.name}</p>
     </div>
   );
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

Camper.defaultProps = {
  name: 'CamperBot'
};
```
