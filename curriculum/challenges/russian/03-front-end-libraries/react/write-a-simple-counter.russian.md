---
id: 5a24c314108439a4d4036177
title: Write a Simple Counter
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Написать простой счетчик
---

## Description
<section id="description"> Вы можете создать более сложный компонент, поддерживающий состояние, путем объединения концепций, охваченных до сих пор. К ним относятся инициализация <code>state</code> , методы записи, которые устанавливают <code>state</code> , и назначение обработчиков кликов для запуска этих методов. </section>

## Instructions
<section id="instructions"> Компонент <code>Counter</code> отслеживает значение <code>count</code> в <code>state</code> . Есть две кнопки, которые вызывают методы <code>increment()</code> и <code>decrement()</code> . Запишите эти методы, чтобы значение счетчика увеличивалось или уменьшалось на 1 при нажатии соответствующей кнопки. Кроме того, создайте метод <code>reset()</code> чтобы при нажатии кнопки сброса счетчик был установлен на 0. <strong>Примечание.</strong> Убедитесь, что вы не изменяете <code>classNames</code> кнопок. Кроме того, не забудьте добавить необходимые привязки для вновь созданных методов в конструкторе. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>Counter</code> должен возвращать элемент <code>div</code> который содержит три кнопки с текстовым содержимым в этом порядке <code>Increment!</code> , <code>Decrement!</code> , <code>Reset</code> .'
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(Counter)); return (mockedComponent.find(".inc").text() === "Increment!" && mockedComponent.find(".dec").text() === "Decrement!" && mockedComponent.find(".reset").text() === "Reset"); })(), "<code>Counter</code> should return a <code>div</code> element which contains three buttons with text content in this order <code>Increment!</code>, <code>Decrement!</code>, <code>Reset</code>.");'
  - text: Состояние <code>Counter</code> должно быть инициализировано с использованием свойства <code>count</code> равного <code>0</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(Counter)).state("count"), 0, "The state of <code>Counter</code> should initialize with a <code>count</code> property set to <code>0</code>.");'
  - text: Нажатие кнопки инкремента должно увеличивать счет на <code>1</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const first = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state("count")); }; const second = () => { mockedComponent.find(".inc").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === 1, "Clicking the increment button should increment the count by <code>1</code>."); }; '
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const first = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state("count")); }; const second = () => { mockedComponent.find(".dec").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === -1, "Clicking the decrement button should decrement the count by <code>1</code>."); }; '
  - text: Нажатие кнопки сброса должно сбрасывать счетчик на <code>0</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const init = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state("count")); }; const increment = () => { mockedComponent.find(".inc").simulate("click"); mockedComponent.find(".inc").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const decrement = () => { mockedComponent.find(".dec").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const reset = () => { mockedComponent.find(".reset").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const firstValue = await init(); const secondValue = await increment(); const thirdValue = await decrement(); const fourthValue = await reset(); assert(firstValue === 0 && secondValue === 2 && thirdValue === 1 && fourthValue === 0, "Clicking the reset button should reset the count to <code>0</code>."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
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
