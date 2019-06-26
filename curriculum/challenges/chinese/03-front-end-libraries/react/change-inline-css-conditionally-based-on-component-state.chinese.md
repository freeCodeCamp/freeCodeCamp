---
id: 5a24c314108439a4d4036189
title: Change Inline CSS Conditionally Based on Component State
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 有条件地改变内联CSS基于组件状态
---

## Description
<section id="description">此时，您已经看到了条件渲染的几个应用程序以及内联样式的使用。这是另外一个结合了这两个主题的例子。您还可以根据React组件的状态有条件地呈现CSS。要执行此操作，请检查条件，如果满足该条件，则修改在render方法中分配给JSX元素的样式对象。这个范例很重要，因为它是通过直接修改DOM元素来应用样式的更传统方法的一种戏剧性转变（例如，jQuery非常常见）。在该方法中，您必须跟踪元素何时更改并直接处理实际操作。跟踪更改可能变得很困难，可能会使您的UI无法预测。根据条件设置样式对象时，您将描述UI应如何看作应用程序状态的函数。有明确的信息流只能向一个方向移动。使用React编写应用程序时，这是首选方法。 </section>

## Instructions
<section id="instructions">代码编辑器有一个简单的受控输入组件，带有样式边框。如果用户在输入框中键入超过15个字符的文本，则希望将此边框设置为红色。添加条件以检查此情况，如果条件有效，则将输入边框样式设置为<code>3px solid red</code> 。您可以通过在输入中输入文本来尝试。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // change code below this line

    // change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
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
</section>
