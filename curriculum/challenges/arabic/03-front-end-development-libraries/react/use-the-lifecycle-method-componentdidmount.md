---
id: 5a24c314108439a4d403617d
title: أستخدام Lifecycle Method componentDidMount
challengeType: 6
forumTopicId: 301422
dashedName: use-the-lifecycle-method-componentdidmount
---

# --description--

يحتاج معظم مطوري الشبكة الإلكترونية في وقت ما، إلى استدعاء نقطة نهاية API لاسترداد البيانات. إذا كنت تستخدم React، من المهم معرفة أين تنفذ هذا الإجراء.

أفضل ممارسة مع React هي إجراء مكالمات API أو أي مكالمات إلى الحاسب الألى (server) الخاص بك في طريقة lifecycle باسم `componentDidMount()`. ويدعى هذا الأسلوب بعد تركيب مكون في DOM. ستؤدي أي مكالمات إلى `setState()` إلى إنتاج عرض المكون الخاص بك. عند استدعاء API بهذه الطريقة، وتعيين حالتك بواسطة البيانات التي ينتجها API، سيتم تحديث تلقائياً بمجرد تلقي البيانات.

# --instructions--

هناك مكالمة API وهمية في `componentDidMount()`. عيّن الحالة بعد 2.5 ثانية لمحاكاة الاتصال بالحاسب ألى (server) لاسترداد البيانات. هذا المثال يطلب مجموع المستخدمين النشاطين الحاليين للموقع. في طريقة الإنشاء، تقدم قيمة `activeUsers` في `h1` بعد نص `Active Users:`. شاهد ما يحدث في النظرة، ولا تتردد في تغيير المهلة الزمنية لرؤية التأثيرات المختلفة.

# --hints--

`MyComponent` يجب أن يقدم عنصر `div` الذي يغلف علامة `h1`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return (
      mockedComponent.find('div').length === 1 &&
      mockedComponent.find('h1').length === 1
    );
  })()
);
```

يجب تحديث حالة المكون مع وظيفة timeout في `componentDidMount`.

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return new RegExp('setTimeout(.|\n)+setState(.|\n)+activeUsers').test(
      String(mockedComponent.instance().componentDidMount)
    );
  })()
);
```

علامة `h1` يجب أن تعطي قيمة `activeUsers` من حالة `MyComponent`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ activeUsers: 1237 });
    return mockedComponent.find('h1').text();
  };
  const second = () => {
    mockedComponent.setState({ activeUsers: 1000 });
    return mockedComponent.find('h1').text();
  };
  assert(new RegExp('1237').test(first()) && new RegExp('1000').test(second()));
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
```
