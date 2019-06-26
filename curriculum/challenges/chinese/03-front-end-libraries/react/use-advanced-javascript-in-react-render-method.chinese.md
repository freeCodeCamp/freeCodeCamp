---
id: 5a24c314108439a4d4036183
title: Use Advanced JavaScript in React Render Method
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 在React Render方法中使用高级JavaScript
---

## Description
<section id="description">在以前的挑战中，您学习了如何使用大括号<code>{ }</code>将JavaScript代码注入JSX代码，以执行诸如访问道具，传递道具，访问状态，在代码中插入注释以及最近为组件设置样式等任务。这些都是将JavaScript放入JSX的常见用例，但它们并不是您在React组件中使用JavaScript代码的唯一方法。您也可以在<code>return</code>语句之前直接在<code>render</code>方法中编写JavaScript， <strong><em>而不</em></strong>必将其插入花括号中。这是因为它还不在JSX代码中。当你想在<em>里面</em>的JSX代码后使用一个变量<code>return</code>的语句，你把变量名花括号内。 </section>

## Instructions
<section id="instructions">在提供的代码中， <code>render</code>方法有一个数组，其中包含20个短语，用于表示经典1980年代Magic Eight Ball玩具中的答案。按钮单击事件绑定到<code>ask</code>方法，因此每次单击该按钮时，将生成随机数并将其存储为<code>randomIndex</code>状态。在第52行，删除字符串<code>&quot;change me!&quot;</code>并重新分配<code>answer</code> const，以便每次组件更新时，您的代码随机访问<code>possibleAnswers</code>数组的不同索引。最后，在<code>p</code>标签内插入<code>answer</code> const。 </section>

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
const inputStyle = {
  width: 235,
  margin: 5
}

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ",
      randomIndex: "
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: "
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it',
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = 'change me!' // << change code here
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle} /><br />
        <button onClick={this.ask}>
          Ask the Magic Eight Ball!
        </button><br />
        <h3>Answer:</h3>
        <p>
          { /* change code below this line */ }

          { /* change code above this line */ }
        </p>
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
