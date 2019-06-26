---
id: 5a24c314108439a4d4036188
title: Render Conditionally from Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 从道具有条理地渲染
---

## Description
<section id="description">到目前为止，您已经了解了如何使用<code>if/else</code> ， <code>&amp;&amp;,</code> <code>null</code>和三元运算符（ <code>condition ? expressionIfTrue : expressionIfFalse</code> ）来做出有关呈现内容和何时呈现的条件决策。但是，还有一个重要的话题要讨论，它可以让你将这些概念中的任何一个或全部与另一个强大的React功能结合起来：道具。使用props来有条件地呈现代码对于React开发人员来说非常普遍 - 也就是说，他们使用给定prop的值来自动决定渲染内容。在此挑战中，您将设置子组件以根据道具进行渲染决策。您还将使用三元运算符，但您可以看到在最后几个挑战中涵盖的其他几个概念在此上下文中可能同样有用。 </section>

## Instructions
<section id="instructions">代码编辑器有两个部分为您定义的组件：名为<code>GameOfChance</code>的父<code>GameOfChance</code>和名为<code>Results</code>的子级。它们用于创建一个简单的游戏，用户按下按钮以查看它们是赢还是输。首先，您需要一个简单的表达式，每次运行时都会随机返回一个不同的值。您可以使用<code>Math.random()</code> 。每次调用此方法时，此方法返回<code>0</code> （包括）和<code>1</code> （不包括）之间的值。因此，对于50/50赔率，请在表达式中使用<code>Math.random() &gt; .5</code> 。从统计学上讲，这个表达式将在50％的时间内返回<code>true</code> ，而在其他50％时则返回<code>false</code> 。在第30行，用此表达式替换注释以完成变量声明。现在您有了一个表达式，您可以使用该表达式在代码中做出随机决策。接下来，您需要实现此功能。将<code>Results</code>组件渲染为<code>GameOfChance</code>的子<code>GameOfChance</code> ，并将<code>expression</code>作为名为<code>fiftyFifty</code>的prop <code>fiftyFifty</code> 。在<code>Results</code>组件中，编写一个三元表达式来呈现文本<code>&quot;You win!&quot;</code>或者<code>&quot;You lose!&quot;</code>基于从<code>GameOfChance</code>传入的<code>fiftyFifty</code>道具。最后，确保<code>handleClick()</code>方法正确计算每个回合，以便用户知道他们玩了多少次。这也用于让用户知道组件已经实际更新，以防它们连续两次赢或输。 </section>

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
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {
        /* change code here */
      }
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: 0 // change code here
    });
  }
  render() {
    let expression = null; // change code here
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }

        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
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
