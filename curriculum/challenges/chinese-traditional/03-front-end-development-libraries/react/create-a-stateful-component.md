---
id: 5a24c314108439a4d4036170
title: 創建一個有狀態的組件
challengeType: 6
forumTopicId: 301391
dashedName: create-a-stateful-component
---

# --description--

React 中最重要的主題之一是 `state`。 state 包含應用程序需要了解的任何數據，這些數據可能會隨時間而變化。 應用程序能夠響應 state 的變更，並在必要時顯示更新後的 UI。 React 爲現代 Web 應用程序的狀態管理提供了一個很好的解決方案。

可以在類組件的 `constructor` 上聲明 `state` 屬性來在 React 組件中創建 state， 它在創建時使用 `state` 初始化組件。 `state` 屬性必須設置爲 JavaScript `object`（對象）。 聲明如下：

```jsx
this.state = {

}
```

可以在組件的整個生命週期內訪問 `state` 對象， 可以更新它、在 UI 中渲染它，也可以將其作爲 props 傳遞給子組件。 `state` 對象的使用可以很簡單，亦可以很複雜，就看你怎麼用了。 請注意，必須通過擴展 `React.Component` 來創建類組件，以便像這樣創建 `state`。

# --instructions--

在代碼編輯器裏，有一個組件嘗試渲染 `state` 中的 `firstName` 屬性。 但是 `state` 還沒有定義。 在 `constructor` 中使用 `state` 初始化這個組件，並將你的名字賦值給 `firstName` 屬性。

# --hints--

`StatefulComponent` 應該存在並被渲染。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    return mockedComponent.find('StatefulComponent').length === 1;
  })()
);
```

`StatefulComponent` 應該渲染一個 `div` 元素和一個 `h1` 元素。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h1').length === 1
    );
  })()
);
```

`StatefulComponent` 中的 state 應該初始化爲被設置成字符串的 `firstName` 屬性。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    const initialState = mockedComponent.state();
    return (
      typeof initialState === 'object' && typeof initialState.firstName === 'string'
    );
  })()
);
```

`StatefulComponent` 狀態中的屬性 `firstName` 應該呈現在 `h1` 元素中。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(
      React.createElement(StatefulComponent)
    );
    const initialState = mockedComponent.state();
    return mockedComponent.find('h1').text() === initialState.firstName;
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<StatefulComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line

    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
```

# --solutions--

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'freeCodeCamp!'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};
```
