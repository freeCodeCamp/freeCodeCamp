---
id: 5a24c314108439a4d4036142
title: Manage State Locally First
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 在当地管理国家
---

## Description
<section id="description">在这里，您将完成创建<code>DisplayMessages</code>组件。 </section>

## Instructions
<section id="instructions">首先，在<code>render()</code>方法中，让组件呈现<code>input</code>元素， <code>button</code>元素和<code>ul</code>元素。当<code>input</code>元素改变时，它应该触发<code>handleChange()</code>方法。此外， <code>input</code>元素应该呈现处于组件状态的<code>input</code>值。 <code>button</code>元素应在单击时触发<code>submitMessage()</code>方法。其次，写下这两种方法。该<code>handleChange()</code>方法应该更新<code>input</code>与用户正在打字。 <code>submitMessage()</code>方法应将当前消息（存储在<code>input</code> ）连接到本地状态的<code>messages</code>数组，并清除<code>input</code>的值。最后，使用<code>ul</code>映射<code>messages</code>数组并将其作为<code>li</code>元素列表呈现给屏幕。 </section>

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
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ",
      messages: []
    }
  }
  // add handleChange() and submitMessage() methods here

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }

        { /* change code above this line */ }
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
