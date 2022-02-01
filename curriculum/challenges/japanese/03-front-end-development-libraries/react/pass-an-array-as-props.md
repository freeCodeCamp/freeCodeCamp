---
id: 5a24c314108439a4d403616a
title: 配列を props として渡す
challengeType: 6
forumTopicId: 301401
dashedName: pass-an-array-as-props
---

# --description--

前回のチャレンジでは、親コンポーネントから子コンポーネントに情報を `props`、つまりプロパティとして渡す方法を示しました。 このチャレンジでは、配列を `props` として渡す方法を説明します。 JSX 要素に配列を渡すには、配列を JavaScript として扱い、中括弧で囲む必要があります。

```jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

これで、子コンポーネントから配列プロパティ `colors` にアクセスできます。 プロパティにアクセスするときは `join()` などの配列メソッドを使用できます: `const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>`。これで、`colors` 配列のすべてのアイテムがコンマ区切りの文字列に結合され、`<p>green, blue, red</p>` が生成されます。あとで、React でデータの配列をレンダーする他の一般的な方法について説明します。

# --instructions--

コードエディターに `List` コンポーネントと `ToDo` コンポーネントがあります。 `ToDo` コンポーネントから各 `List` をレンダーするときに、to-do タスクの配列 (たとえば `["walk dog", "workout"]` など) が割り当てられた `tasks` プロパティを渡してください。 次に、`List` コンポーネントにあるこの `tasks` 配列にアクセスして、`p` 要素の中に値を表示してください。 `join(", ")` を使用し、`props.tasks` 配列をコンマ区切りリストとして `p` 要素に表示してください。 今日のリストには少なくとも 2 つのタスクを含め、明日のリストには少なくとも 3 つのタスクを含めてください。

# --hints--

`ToDo` コンポーネントから単一の外側の `div` 要素を返します。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().type() === 'div';
  })()
);
```

`ToDo` コンポーネントの 3 つ目の子要素を、`List` コンポーネントのインスタンスにします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(2).name() === 'List';
  })()
);
```

`ToDo` コンポーネントの 5 つ目の子要素を、`List` コンポーネントのインスタンスにします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.children().first().childAt(4).name() === 'List';
  })()
);
```

`List` コンポーネントの両方のインスタンスに、`tasks` というプロパティを持たせ、`tasks` を配列型にします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      Array.isArray(mockedComponent.find('List').get(0).props.tasks) &&
      Array.isArray(mockedComponent.find('List').get(1).props.tasks)
    );
  })()
);
```

今日のタスクを表す 1 つ目の `List` コンポーネントに、2 つ以上のアイテムを持たせます。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(0).props.tasks.length >= 2;
  })()
);
```

明日のタスクを表す 2 つ目の `List` コンポーネントに、3 つ以上のアイテムを持たせます。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return mockedComponent.find('List').get(1).props.tasks.length >= 3;
  })()
);
```

`List` コンポーネントで、`tasks` prop からの値を `p` タグにレンダーします。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(ToDo));
    return (
      mockedComponent
        .find('p')
        .get(0)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(0)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',') &&
      mockedComponent
        .find('p')
        .get(1)
        .props.children.replace(/\s*,\s*/g, ',') ===
        mockedComponent
          .find('List')
          .get(1)
          .props.tasks.join(',')
          .replace(/\s*,\s*/g, ',')
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<ToDo />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List/>
        <h2>Tomorrow</h2>
        <List/>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
const List= (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={['study', 'exercise']} />
        <h2>Tomorrow</h2>
        <List tasks={['call Sam', 'grocery shopping', 'order tickets']} />
      </div>
    );
  }
};
```
