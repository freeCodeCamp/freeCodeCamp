---
id: 5a24c314108439a4d4036180
title: تحسين جهات إعادة الإرسال (Re-Renders) مع shouldComponentUpdate
challengeType: 6
forumTopicId: 301398
dashedName: optimize-re-renders-with-shouldcomponentupdate
---

# --description--

حتى الآن، إذا حصل أي عنصر على `state` جديدة أو `props` جديدة فإنه ينتج نفسه وجميع أطفاله. وعادة ما يكون هذا على ما يرام. لكن React يوفر طريقة دورة الحياة (lifecycle) التي يمكنك الاتصال بها عندما تتلقى المكونات الفرعية `state` جديدة أو `props` جديدة، و أعلن على وجه التحديد إذا كان يجب تحديث المكونات أو عدم تحديثها. الطريقة هي `shouldComponentUpdate()`، و تأخذ `nextProps` و `nextState` حجّات.

وهذه الطريقة وسيلة مفيدة لتحسين الأداء. على سبيل المثال، السلوك الافتراضي هو أن المكون الخاص بك ينتج من جديد عندما يتلقى `props` جديدة، حتى لو لم يتغير `props`. يمكنك استخدام `shouldComponentUpdate()` لمنع هذا عن طريق مقارنة `props`. يجب أن تعيد الطريقة قيمة `boolean` التي تخبر React ما إذا كانت تريد تحديث المكون أم لا. يمكنك مقارنة الاقتراحات الحالية (`this.props`) إلى الاقتراحات التالية (`nextProps`) لتحديد ما إذا كنت بحاجة إلى التحديث أم لا، و إرجاع `true` أو `false` وفقا لذلك.

# --instructions--

تمت إضافة طريقة `shouldComponentUpdate()` في مكون يسمى `OnlyEvens`. حاليا، هذه الطريقة ترجع `true` لذلك `OnlyEvens` تُنتج كل مرة تتلقى فيها `props` جديدة. عدّل الطريقة بحيث `OnlyEvens` فقط إذا كانت `value` الميزات الجديدة (new props) بقيمة even. انقر فوق زر `Add` ومشاهدة ترتيب الأحداث في وحدة تحكم المتصفح الخاص بك مع تشغيل روابط دورة الحياة.

# --hints--

يجب أن ينتج مكون `Controller` المكون `OnlyEvens` بهيئة أبن.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(Controller));
    return (
      mockedComponent.find('Controller').length === 1 &&
      mockedComponent.find('OnlyEvens').length === 1
    );
  })()
);
```

يجب تعريف طريقة `shouldComponentUpdate` على مكون `OnlyEvens`.

```js
assert(
  (() => {
    const child = React.createElement(OnlyEvens)
      .type.prototype.shouldComponentUpdate.toString()
      .replace(/s/g, '');
    return child !== 'undefined';
  })()
);
```

يجب أن يعيد مكون `OnlyEvens` علامة `h1` التي تعطي قيمة `this.props.value`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 1000 });
    return mockedComponent.find('h1').html();
  };
  const second = () => {
    mockedComponent.setState({ value: 10 });
    return mockedComponent.find('h1').html();
  };
  const firstValue = first();
  const secondValue = second();
  assert(firstValue === '<h1>1000</h1>' && secondValue === '<h1>10</h1>');
})();
```

`OnlyEvens` يجب أن يتم تقديمها فقط عندما يكون `nextProps.value` بقيمة أعداد زوجية (even).

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 8 });
    return mockedComponent.find('h1').text();
  };
  const second = () => {
    mockedComponent.setState({ value: 7 });
    return mockedComponent.find('h1').text();
  };
  const third = () => {
    mockedComponent.setState({ value: 42 });
    return mockedComponent.find('h1').text();
  };
  const firstValue = first();
  const secondValue = second();
  const thirdValue = third();
  assert(firstValue === '8' && secondValue === '8' && thirdValue === '42');
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Controller />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    return true;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

# --solutions--

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    return nextProps.value % 2 === 0;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```
