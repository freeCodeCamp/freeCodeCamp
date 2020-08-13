---
id: 5a24c314108439a4d4036178
title: Create a Controlled Input
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 创建受控输入
---

## Description
<section id="description">您的应用程序可能在<code>state</code>和呈现的UI之间进行更复杂的交互。例如，用于文本输入的表单控件元素（例如<code>input</code>和<code>textarea</code>在用户键入时在DOM中维护它们自己的状态。使用React，您可以将此可变状态移动到React组件的<code>state</code> 。用户的输入成为应用程序<code>state</code>一部分，因此React控制该输入字段的值。通常，如果React组件具有用户可以键入的输入字段，则它将是受控输入表单。 </section>

## Instructions
<section id="instructions">代码编辑器具有名为<code>ControlledInput</code>的组件的骨架，以创建受控<code>input</code>元素。组件的<code>state</code>已经使用包含空字符串的<code>input</code>属性进行初始化。此值表示用户在<code>input</code>字段中键入的文本。首先，创建一个名为<code>handleChange()</code>的方法，该方法具有一个名为<code>event</code>的参数。调用该方法时，它会接收一个<code>event</code>对象，该对象包含<code>input</code>元素中的一串文本。您可以使用方法内的<code>event.target.value</code>访问此字符串。使用此新字符串更新组件<code>state</code>的<code>input</code>属性。在render方法中，在<code>h4</code>标记上方创建<code>input</code>元素。添加一个<code>value</code>属性，该属性等于组件<code>state</code>的<code>input</code>属性。然后将<code>onChange()</code>事件处理程序集添加到<code>handleChange()</code>方法。当您在输入框中键入时，该文本由<code>handleChange()</code>方法处理，设置为本地<code>state</code>的<code>input</code>属性，并在页面的<code>input</code>框中呈现为值。组件<code>state</code>是关于输入数据的单一事实来源。最后但并非最不重要的是，不要忘记在构造函数中添加必要的绑定。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ControlledInput</code>应返回包含<code>input</code>和<code>p</code>标记的<code>div</code>元素。
    testString: assert(Enzyme.mount(React.createElement(ControlledInput)).find('div').children().find('input').length === 1 && Enzyme.mount(React.createElement(ControlledInput)).find('div').children().find('p').length === 1);
  - text: <code>ControlledInput</code>的状态应该初始化， <code>input</code>属性设置为空字符串。
    testString: assert.strictEqual(Enzyme.mount(React.createElement(ControlledInput)).state('input'), '');
  - text: 输入input元素应更新输入的状态和值， <code>p</code>元素应在键入时呈现此状态。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(ControlledInput)); const _1 = () => { mockedComponent.setState({ input: '''' }); return waitForIt(() => mockedComponent.state(''input''))}; const _2 = () => { mockedComponent.find(''input'').simulate(''change'', { target: { value: ''TestInput'' }}); return waitForIt(() => ({ state: mockedComponent.state(''input''), text: mockedComponent.find(''p'').text(), inputVal: mockedComponent.find(''input'').props().value }))}; const before = await _1(); const after = await _2(); assert(before === '''' && after.state === ''TestInput'' && after.text === ''TestInput'' && after.inputVal === ''TestInput''); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}

        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
