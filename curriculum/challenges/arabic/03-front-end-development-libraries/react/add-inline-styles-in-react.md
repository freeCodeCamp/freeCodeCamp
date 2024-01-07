---
id: 5a24c314108439a4d4036182
title: إضافة Inline Styles في React
challengeType: 6
forumTopicId: 301378
dashedName: add-inline-styles-in-react
---

# --description--

ربما لاحظت في التحدي الأخير أن هناك عدة اختلافات بناء الجملة الأخرى من أنماط HTML المضمنة بالإضافة إلى `style` السمة المعينة إلى كائن JavaScript. أولاً، تستخدم بعض أساليب خصائص CSS أسماء في حالة الجمال (camel case). على سبيل المثال، آخر تحد تعيّن فيه حجم الخط مع `fontSize` بدلاً من `font-size`. الكلمات المهيمنة مثل `font-size` هي صيغة غير صالحة لخصائص كائن JavaScript، لذلك يستخدم React حالة الجمال. وكقاعدة، يتم كتابة أي أساليب خصائص مميزة باستخدام حالة الجمال في JSX.

جميع وحدات طول قيمة الخاصية (مثل `height`، و `width`، و `fontSize`) سيفترض أنهم في `px` ما لم يذكر خلاف ذلك. إذا كنت ترغب في استخدام `em`، على سبيل المثال، أنت تلف القيمة والوحدات في علامتا التنصيص (quotes)، مثل `{fontSize: "4em"}`. بخلاف قيم الطول التي هي افتراضية إلى `px`، يجب تغليف جميع قيم الخصائص الأخرى في علامتا التنصيص.

# --instructions--

إذا كان لديك مجموعة كبيرة من الأساليب، يمكنك تعيين أسلوب ألى `object` على ثابت (constant) للحفاظ على تنظيمك البرمجي. إعلان أساليبك ثابتة (constant) كمتغير عالمي (global variable) في الجزء العلوي من المِلَفّ. تهيئة `styles` ثابتة وتعيين `object` مع ثلاث خصائص و قيمها له. اعطي `div` لون `purple`، حجم الخط (font-size) بقيمة `40` و حدود (border) بقيمة `2px solid purple`. ثم عيّن سمة `style` مساوية ثابتة (constant) باسم `styles`.

# --hints--

يجب أن يكون متغير `styles` على شكل `object` ذو ثلاث خواص.

```js
assert(Object.keys(styles).length === 3);
```

المتغير `styles` يحصل على خاصية `color` و يعطى قيمة `purple`.

```js
assert(styles.color === 'purple');
```

المتغير `styles` يحصل على خاصية `fontSize` و يعطى قيمة `40`.

```js
assert(styles.fontSize == 40);
```

المتغير `styles` يحصل على خاصية `border` و يعطى قيمة `2px solid purple`.

```js
assert(styles.border === '2px solid purple');
```

يجب أن ينتج من المكون عنصر `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.shallow(React.createElement(Colorful));
    return mockedComponent.type() === 'div';
  })()
);
```

يجب أن يكون عنصر `div` قد تم تعريف أساليبه بواسطة كائن `styles`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.shallow(React.createElement(Colorful));
    return (
      mockedComponent.props().style.color === 'purple' &&
      mockedComponent.props().style.fontSize == 40 &&
      mockedComponent.props().style.border === '2px solid purple'
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Colorful />, document.getElementById('root'))
```

## --seed-contents--

```jsx
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
    // Change code above this line
  }
};
```

# --solutions--

```jsx
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
};
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};
```
