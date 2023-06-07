---
id: 5a24c314108439a4d4036181
title: インラインスタイルを導入する
challengeType: 6
forumTopicId: 301395
dashedName: introducing-inline-styles
---

# --description--

他にも、React のコードに強力な機能を追加する複雑な概念があります。 しかし、もっと単純な問題として、React で作成した JSX 要素のスタイルをどのように設定するのでしょうか？ <a href="/japanese/learn/front-end-development-libraries/react/define-an-html-class-in-jsx" target="_blank" rel="noopener noreferrer nofollow">JSX 要素にクラスを適用する方法</a>を思い出すと、HTML の場合とまったく同じではないことが予想できるかと思います。

スタイルシートからスタイルをインポートする場合は、それほど違いはありません。 `className` 属性を使用して JSX 要素にクラスを適用し、スタイルシートでクラスにスタイルを適用します。 もう一つの方法として、ReactJS の開発でごく一般的なインラインスタイルの適用があります。

インラインスタイルを JSX 要素に適用する方法は HTML での方法と似ていますが、JSX ではいくつか違いがあります。 HTML でのインラインスタイルの例を次に示します。

```jsx
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
```

JSX 要素では `style` 属性を使用しますが、JSX のトランスパイル方法の影響を受けるため、値を `string` に設定することはできません。 代わりに、JavaScript の `object` に設定します。 例:

```jsx
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
```

`fontSize` プロパティがキャメルケースになっていることに気づいたでしょうか？ これは、React はスタイルオブジェクトでケバブケースのキーを受け付けないためです。 React によって正しいプロパティ名が HTML に適用されます。

# --instructions--

コードエディターで、`div` に `style` 属性を追加し、テキストに赤色を付けて、フォントサイズを `72px` にしてください。

フォントサイズは数値でも設定できます。単位 `px` を省略するか、`72px` と記述してください。
# --hints--

コンポーネントで `div` 要素をレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().type() === 'div';
  })()
);
```

`div` 要素の色を `red` にします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().props().style.color === 'red';
  })()
);
```

`div` 要素のフォントサイズを `72px` にします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return (
      mockedComponent.children().props().style.fontSize === 72 ||
      mockedComponent.children().props().style.fontSize === '72' ||
      mockedComponent.children().props().style.fontSize === '72px'
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Colorful />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div>Big Red</div>
    );
  }
};
```

# --solutions--

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};
```
