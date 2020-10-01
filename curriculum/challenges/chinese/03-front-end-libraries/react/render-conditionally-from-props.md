---
id: 5a24c314108439a4d4036188
challengeType: 6
forumTopicId: 301405
title: 根据 Props 有条件地渲染
---

## Description
<section id='description'>
到目前为止，你已经看到了如何使用<code>if/else</code>、<code>&&,</code>、<code>null</code>和三元运算符（<code>condition ? expressionIfTrue : expressionIfFalse</code>）对渲染什么和何时渲染做出有条件的判定。然而，还有一个重要的话题需要讨论，让你将这些概念中的任何一个或所有概念与另一个强大的 React 功能结合起来：props。使用 props 有条件地渲染代码在 React 开发人员中很常见--也就是说：他们使用给定 prop 的值来自动决定渲染什么。
在这个挑战中，你将设置一个子组件来根据 props 做出渲染决定。你可以使用三元运算符，但是你可以看到过去几个挑战中涵盖的其他几个概念在这种情况下可能同样有用。
</section>

## Instructions
<section id='instructions'>
代码编辑器有两个部分为你定义的组件：一个名为<code>GameOfChance</code>的父组件和一个名为<code>Results</code>的子组件。他们被用来创建一个简单的游戏，用户按下按钮来看他们是赢还是输。
首先，你需要一个简单的表达式，每次运行时都会随机返回一个不同的值。你可以使用<code>Math.random()</code>。每次调用此方法时，此方法返回<code>0</code>（包括）和<code>1</code>（不包括）之间的值。因此，对于50/50的几率，请在表达式中使用<code>Math.random() > .5</code>。从统计学上讲，这个表达式有 50％ 的几率返回<code>true</code>，另外 50％ 返回<code>false</code>。在第 30 行，用此表达式替换注释以完成变量声明。
现在你有了一个表达式，可以用来在代码中做出随机决定，接下来你需要实现以下功能：将<code>Results</code>组件渲染为<code>GameOfChance</code>的子组件，并将<code>expression</code>作为 prop 传递出去，prop 的名字是<code>fiftyFifty</code>。在<code>Results</code>组件中，编写一个三元表达式基于从<code>GameOfChance</code>传来的 prop<code>fiftyFifty</code>来渲染文本<code>"You win!"</code>或者<code>"You lose!"</code>。最后，确保<code>handleClick()</code>方法正确计算每个回合，以便用户知道他们玩过多少次。这也可以让用户知道组件实际上已经更新，以防他们连续赢两次或输两次时自己不知道。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>GameOfChance</code>组件应该存在并渲染到页面。
    testString: assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find('GameOfChance').length, 1);
  - text: <code>GameOfChance</code>应该返回单个<code>button</code>元素。
    testString: assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find('button').length, 1);
  - text: <code>GameOfChance</code>应该返回<code>Results</code>组件的一个实例，它有一个名为<code>fiftyFifty</code>的 prop。
    testString: assert(Enzyme.mount(React.createElement(GameOfChance)).find('Results').length === 1 && Enzyme.mount(React.createElement(GameOfChance)).find('Results').props().hasOwnProperty('fiftyFifty') === true);
  - text: <code>GameOfChance</code>的 state 应该使用值为<code>1</code>的<code>counter</code>属性来初始化。
    testString: assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).state().counter, 1);
  - text: '当<code>GameOfChance</code>组件第一次渲染到 DOM 时，应该返回一个<code>p</code>元素，其内部文本为<code>Turn: 1</code>。'
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(GameOfChance)).find(''p'').text(), ''Turn: 1'');'
  - text: '每次点击按钮，counter 应该增加 1，并且一个包含文本<code>"Turn: N"</code>的<code>p</code>元素应该渲染到DOM，其中<code>N</code>是 counter 的值。'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(GameOfChance)); const simulate = () => { comp.find(''button'').simulate(''click''); };const result = () => ({ count: comp.state(''counter''), text: comp.find(''p'').text() });const _1 = () => { simulate(); return waitForIt(() => result())}; const _2 = () => { simulate(); return waitForIt(() => result())}; const _3 = () => { simulate(); return waitForIt(() => result())}; const _4 = () => { simulate(); return waitForIt(() => result())}; const _5 = () => { simulate(); return waitForIt(() => result())}; const _1_val = await _1(); const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); const _5_val = await _5(); assert(_1_val.count === 2 && _1_val.text === ''Turn: 2'' && _2_val.count === 3 && _2_val.text === ''Turn: 3'' && _3_val.count === 4 && _3_val.text === ''Turn: 4'' && _4_val.count === 5 && _4_val.text === ''Turn: 5'' && _5_val.count === 6 && _5_val.text === ''Turn: 6''); }; '
  - text: 当<code>GameOfChance</code>组件第一次挂载到 DOM 上时，每次按钮被点击，都应该返回一个<code>h1</code>元素，元素中随机渲染<code>You Win!</code>或者<code>You Lose!</code>。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const comp = Enzyme.mount(React.createElement(GameOfChance)); const simulate = () => { comp.find(''button'').simulate(''click''); };const result = () => ({ h1: comp.find(''h1'').length, text: comp.find(''h1'').text() });const _1 = result(); const _2 = () => { simulate(); return waitForIt(() => result())}; const _3 = () => { simulate(); return waitForIt(() => result())}; const _4 = () => { simulate(); return waitForIt(() => result())}; const _5 = () => { simulate(); return waitForIt(() => result())}; const _6 = () => { simulate(); return waitForIt(() => result())}; const _7 = () => { simulate(); return waitForIt(() => result())}; const _8 = () => { simulate(); return waitForIt(() => result())}; const _9 = () => { simulate(); return waitForIt(() => result())}; const _10 = () => { simulate(); return waitForIt(() => result())}; const _2_val = await _2(); const _3_val = await _3(); const _4_val = await _4(); const _5_val = await _5(); const _6_val = await _6(); const _7_val = await _7(); const _8_val = await _8(); const _9_val = await _9(); const _10_val = await _10(); const __text = new Set([_1.text, _2_val.text, _3_val.text, _4_val.text, _5_val.text, _6_val.text, _7_val.text, _8_val.text, _9_val.text, _10_val.text]); const __h1 = new Set([_1.h1, _2_val.h1, _3_val.h1, _4_val.h1, _5_val.h1, _6_val.h1, _7_val.h1, _8_val.h1, _9_val.h1, _10_val.h1]); assert(__text.size === 2 && __h1.size === 1); }; '

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
    const expression = null; // change code here
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
ReactDOM.render(<GameOfChance />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {
        this.props.fiftyFifty ?
        'You Win!' :
        'You Lose!'
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
      counter: this.state.counter + 1
    });
  }
  render() {
    const expression = Math.random() >= .5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};
```

</section>
