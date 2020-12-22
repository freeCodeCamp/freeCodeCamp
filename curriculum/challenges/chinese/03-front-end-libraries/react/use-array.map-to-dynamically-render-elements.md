---
id: 5a24c314108439a4d403618a
title: 使用 Array.map() 动态渲染元素
challengeType: 6
forumTopicId: 301417
---

# --description--

条件渲染很有用，但是你可能需要组件来渲染未知数量的元素。通常在响应式编程中，程序员在应用程序运行时之前无法知道其 state，因为这在很大程度上取决于用户与该程序的交互。程序员需要提前编写代码来正确处理未知状态。在 React 中使用`Array.map()`阐明了这个概念。

例如，你创建一个简单的“To Do List”应用程序。作为程序员，你无法知道用户可能在其列表中有多少项。你需要设置组件，以便在使用该程序的人决定今天今日待办事项之前***动态渲染***正确数量的列表元素。

# --instructions--

代码编辑器完成了`MyToDoList`组件的大部分设置。如果你完成了受控表单挑战，这些代码中的一些应该看起来很熟悉。你会注意到一个`textarea`和一个`button`，以及一些跟踪它们状态的方法，但是页面当前还没有任何东西被渲染。

在`constructor`中，创建一个`this.state`对象并定义两个 state：`userInput`应该初始化为空字符串，`toDoList`应该初始化为空数组。接下来，删除`items`变量旁边`render()`方法中的注释。取而代之的是，将存储在组件内部 state 中的`toDoList`数组一一映射并相应的动态呈现`li`元素。尝试在`textarea`中输入`eat, code, sleep, repeat`，然后点击按钮，看看会发生什么。

**注意：** 你可能知道，像这样的映射操作创建的所有兄弟子元素都需要提供唯一的`key`属性。别担心，这是下一个挑战的主题。

# --hints--

`MyToDoList`组件应该存在并渲染到页面。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return mockedComponent.find('MyToDoList').length === 1;
  })()
);
```

`MyToDoList`组件的第一个子元素应该是`textarea`元素。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(0).type() ===
      'textarea'
    );
  })()
);
```

`MyToDoList`组件的第二个子元素应该是`br`元素。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(1).type() === 'br'
    );
  })()
);
```

`MyToDoList`组件的第三个子元素应该是`button`元素。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(2).type() ===
      'button'
    );
  })()
);
```

`MyToDoList`的 state 应该使用被设置为空数组的`toDoList`进行初始化。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      Array.isArray(initialState.toDoList) === true &&
      initialState.toDoList.length === 0
    );
  })()
);
```

`MyToDoList`的 state 应该使用被设置为空字符串的`userInput`进行初始化。

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      typeof initialState.userInput === 'string' &&
      initialState.userInput.length === 0
    );
  })()
);
```

单击`Create List`按钮时，`MyToDoList`组件应该动态返回一个无序列表，该列表包含输入到`textarea`元素中的逗号分隔列表的每个项目的列表项目元素。

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100));
  const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
  const simulateChange = (el, value) =>
    el.simulate('change', { target: { value } });
  const state_1 = () => {
    return waitForIt(() => mockedComponent.find('ul').find('li'));
  };
  const setInput = () => {
    return waitForIt(() =>
      simulateChange(mockedComponent.find('textarea'), 'testA, testB, testC')
    );
  };
  const click = () => {
    return waitForIt(() => mockedComponent.find('button').simulate('click'));
  };
  const state_2 = () => {
    return waitForIt(() => {
      const nodes = mockedComponent.find('ul').find('li');
      return { nodes, text: nodes.reduce((t, n) => t + n.text(), '') };
    });
  };
  const setInput_2 = () => {
    return waitForIt(() =>
      simulateChange(mockedComponent.find('textarea'), 't1, t2, t3, t4, t5, t6')
    );
  };
  const click_1 = () => {
    return waitForIt(() => mockedComponent.find('button').simulate('click'));
  };
  const state_3 = () => {
    return waitForIt(() => {
      const nodes = mockedComponent.find('ul').find('li');
      return { nodes, text: nodes.reduce((t, n) => t + n.text(), '') };
    });
  };
  const awaited_state_1 = await state_1();
  const awaited_setInput = await setInput();
  const awaited_click = await click();
  const awaited_state_2 = await state_2();
  const awaited_setInput_2 = await setInput_2();
  const awaited_click_1 = await click_1();
  const awaited_state_3 = await state_3();
  assert(
    awaited_state_1.length === 0 &&
      awaited_state_2.nodes.length === 3 &&
      awaited_state_3.nodes.length === 6 &&
      awaited_state_2.text === 'testA testB testC' &&
      awaited_state_3.text === 't1 t2 t3 t4 t5 t6'
  );
};
```

# --solutions--

