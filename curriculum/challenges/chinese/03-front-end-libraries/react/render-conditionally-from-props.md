---
id: 5a24c314108439a4d4036188
title: 根据 Props 有条件地渲染
challengeType: 6
forumTopicId: 301405
---

# --description--

到目前为止，你已经看到了如何使用`if/else`、`&&,`、`null`和三元运算符（`condition ? expressionIfTrue : expressionIfFalse`）对渲染什么和何时渲染做出有条件的判定。然而，还有一个重要的话题需要讨论，让你将这些概念中的任何一个或所有概念与另一个强大的 React 功能结合起来：props。使用 props 有条件地渲染代码在 React 开发人员中很常见--也就是说：他们使用给定 prop 的值来自动决定渲染什么。

在这个挑战中，你将设置一个子组件来根据 props 做出渲染决定。你可以使用三元运算符，但是你可以看到过去几个挑战中涵盖的其他几个概念在这种情况下可能同样有用。

# --instructions--

代码编辑器有两个部分为你定义的组件：一个名为`GameOfChance`的父组件和一个名为`Results`的子组件。他们被用来创建一个简单的游戏，用户按下按钮来看他们是赢还是输。

首先，你需要一个简单的表达式，每次运行时都会随机返回一个不同的值。你可以使用`Math.random()`。每次调用此方法时，此方法返回`0`（包括）和`1`（不包括）之间的值。因此，对于50/50的几率，请在表达式中使用`Math.random() > .5`。从统计学上讲，这个表达式有 50％ 的几率返回`true`，另外 50％ 返回`false`。在第 render 方法里，用此表达式替换注释以完成变量声明。

现在你有了一个表达式，可以用来在代码中做出随机决定，接下来你需要实现以下功能：将`Results`组件渲染为`GameOfChance`的子组件，并将`expression`作为 prop 传递出去，prop 的名字是`fiftyFifty`。在`Results`组件中，编写一个三元表达式基于从`GameOfChance`传来的 prop`fiftyFifty`来渲染文本`"You Win!"`或者`"You Lose!"`。最后，确保`handleClick()`方法正确计算每个回合，以便用户知道他们玩过多少次。这也可以让用户知道组件实际上已经更新，以防他们连续赢两次或输两次时自己不知道。

# --hints--

`GameOfChance`组件应该存在并渲染到页面。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('GameOfChance').length,
  1
);
```

`GameOfChance`应该返回单个`button`元素。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('button').length,
  1
);
```

`GameOfChance`应该返回`Results`组件的一个实例，它有一个名为`fiftyFifty`的 prop。

```js
assert(
  Enzyme.mount(React.createElement(GameOfChance)).find('Results').length ===
    1 &&
    Enzyme.mount(React.createElement(GameOfChance))
      .find('Results')
      .props()
      .hasOwnProperty('fiftyFifty') === true
);
```

`GameOfChance`的 state 应该使用值为`1`的`counter`属性来初始化。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).state().counter,
  1
);
```

当`GameOfChance`组件第一次渲染到 DOM 时，应该返回一个`p`元素，其内部文本为`Turn: 1`。

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(GameOfChance)).find('p').text(),
  'Turn: 1'
);
```

每次点击按钮，counter 应该增加 1，并且一个包含文本`"Turn: N"`的`p`元素应该渲染到DOM，其中`N`是 counter 的值。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const comp = Enzyme.mount(React.createElement(GameOfChance));
  const simulate = () => {
    comp.find('button').simulate('click');
  };
  const result = () => ({
    count: comp.state('counter'),
    text: comp.find('p').text()
  });
  const _1 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _2 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _3 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _4 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _5 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _1_val = await _1();
  const _2_val = await _2();
  const _3_val = await _3();
  const _4_val = await _4();
  const _5_val = await _5();
  assert(
    _1_val.count === 2 &&
      _1_val.text === 'Turn: 2' &&
      _2_val.count === 3 &&
      _2_val.text === 'Turn: 3' &&
      _3_val.count === 4 &&
      _3_val.text === 'Turn: 4' &&
      _4_val.count === 5 &&
      _4_val.text === 'Turn: 5' &&
      _5_val.count === 6 &&
      _5_val.text === 'Turn: 6'
  );
};
```

当`GameOfChance`组件第一次挂载到 DOM 上时，每次按钮被点击，都应该返回一个`h1`元素，元素中随机渲染`You Win!`或者`You Lose!`。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const comp = Enzyme.mount(React.createElement(GameOfChance));
  const simulate = () => {
    comp.find('button').simulate('click');
  };
  const result = () => ({
    h1: comp.find('h1').length,
    text: comp.find('h1').text()
  });
  const _1 = result();
  const _2 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _3 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _4 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _5 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _6 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _7 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _8 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _9 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _10 = () => {
    simulate();
    return waitForIt(() => result());
  };
  const _2_val = await _2();
  const _3_val = await _3();
  const _4_val = await _4();
  const _5_val = await _5();
  const _6_val = await _6();
  const _7_val = await _7();
  const _8_val = await _8();
  const _9_val = await _9();
  const _10_val = await _10();
  const __text = new Set([
    _1.text,
    _2_val.text,
    _3_val.text,
    _4_val.text,
    _5_val.text,
    _6_val.text,
    _7_val.text,
    _8_val.text,
    _9_val.text,
    _10_val.text
  ]);
  const __h1 = new Set([
    _1.h1,
    _2_val.h1,
    _3_val.h1,
    _4_val.h1,
    _5_val.h1,
    _6_val.h1,
    _7_val.h1,
    _8_val.h1,
    _9_val.h1,
    _10_val.h1
  ]);
  assert(__text.size === 2 && __h1.size === 1);
};
```

# --solutions--

