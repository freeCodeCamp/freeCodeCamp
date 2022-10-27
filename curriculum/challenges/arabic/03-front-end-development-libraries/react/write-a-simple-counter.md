---
id: 5a24c314108439a4d4036177
title: كتابة العداد (Counter) البسيط
challengeType: 6
forumTopicId: 301425
dashedName: write-a-simple-counter
---

# --description--

يمكنك تصميم حالة مكون أكثر تعقيداً عن طريق الجمع بين المفاهيم التي تم تغطيتها حتى الآن. هذه تشمل تهيئة `state`، كتابة الطرق الذي تعيّن `state`، وتعيين معالج النقر لتشغيل هذا الطرق.

# --instructions--

`Counter` يتتبع قيمة `count` في `state`. هناك زرين يستدعيان طرق `increment()` و `decrement()`. اكتب هذا الطرق (methods) بحيث يتم زيادة القيمة المقابلة أو تقسيمها بواسطة 1 عندما يتم النقر على الزر المناسب. وأيضا، قم بإنشاء طريقة `reset()` بحيث عندما يتم النقر على زر إعادة التعيين (reset)، يتم تعيين العد إلى 0.

**ملاحظة:** تيقن من عدم تعديل اسم خاصية `className` في الأزرار. وتذكروا أيضا إضافة الارتباطات اللازمة للطرق المنشأة حديثا في البناء.

# --hints--

`Counter` يجب أن يعيد عنصر `div` الذي يحتوي على ثلاث أزرار مع محتوى النص في هذا الترتيب `Increment!`، و`Decrement!`، و`Reset`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(Counter));
    return (
      mockedComponent.find('.inc').text() === 'Increment!' &&
      mockedComponent.find('.dec').text() === 'Decrement!' &&
      mockedComponent.find('.reset').text() === 'Reset'
    );
  })()
);
```

يجب بدء حالة `Counter` بخاصية `count` بقيمة `0`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
assert(mockedComponent.find('h1').text() === 'Current Count: 0');
```

النقر على زر الزيادة (increment) يجب أن يزيد العد بمقدار `1`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.inc').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: 1');
```

النقر على زر الخفض (decrement) يجب أن يخفض العد بمقدار `1`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.find('.dec').simulate('click');
assert(mockedComponent.find('h1').text() === 'Current Count: -1');
```

النقر على زر إعادة التعيين (reset) يجب إعادة تعيين العد إلى `0`.

```js
const mockedComponent = Enzyme.mount(React.createElement(Counter));
mockedComponent.setState({ count: 5 });
const currentCountElement = mockedComponent.find('h1');
assert(currentCountElement.text() === 'Current Count: 5');
mockedComponent.find('.reset').simulate('click');
assert(currentCountElement.text() === 'Current Count: 0');
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Counter />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
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

# --solutions--

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  this.increment = this.increment.bind(this);
 this.decrement = this.decrement.bind(this);
 this.reset = this.reset.bind(this);
 }
  reset() {
    this.setState({
      count: 0
    });
  }
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
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
