---
id: 5a24bbe0dba28a8d3cbd4c5d
title: إنشاء عنصر JSX معقد
challengeType: 6
forumTopicId: 301382
dashedName: create-a-complex-jsx-element
---

# --description--

التحدي الأخير كان المثال بسيطاً على JSX، ولكن JSX يمكن أن يمثل HTML أكثر تعقيداً أيضاً.

أحد الأشياء المهمة التي يجب أن تعلمها عن تداخل JSX هو أنه يجب أن ينتج عنصر واحد.

هذا العنصر الأصلي الواحد سيغلف جميع المستويات الأخرى للعناصر المتداخلة.

وعلى سبيل المثال، فإن العديد من عناصر JSX المكتوبة كأخوة لا يوجد فيها عنصر تغليف أصلي لن يتم نقلها.

إليك مثال:

**Valid JSX:**

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

**Invalid JSX:**

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

# --instructions--

أعلن ثابت جديد `JSX` يجعل `div` يحتوي على العناصر التالية بالترتيب:

`h1`، و`p`، وقائمة غير مرتبة (unordered list) تحتوي على ثلاث عناصر `li`. يمكنك تضمين أي نص تريده داخل كل عنصر.

**ملاحظة:** عند تقديم عناصر متعددة مثل، يمكنك إلصاقها كلها بين قوسين، لكنها ليست مطلوبة بدقة. لاحظ أيضًا أن هذا التحدي يستخدم علامة `div` لإغلاق جميع العناصر الفرعية داخل عنصر أحد الوالدين. إذا أزالت `div`، فلن يتم نقل JSX. ضع هذا في اعتباره، لأنه سيطبق أيضا عند أنتاج عناصر JSX في مكونات React.

# --hints--

يجب أن يعيد عنصر `div` الثابت `JSX`.

```js
assert(JSX.type === 'div');
```

يجب أن يحتوي `div` على علامة `h1` كالعنصر الأول.

```js
assert(JSX.props.children[0].type === 'h1');
```

يجب أن يحتوي `div` على علامة `p` كالعنصر الثاني.

```js
assert(JSX.props.children[1].type === 'p');
```

يجب أن يحتوي `div` على علامة `ul` كعنصر ثالث.

```js
assert(JSX.props.children[2].type === 'ul');
```

يجب أن يحتوي `ul` على ثلاث عناصر `li`.

```js
assert(
  JSX.props.children
    .filter((ele) => ele.type === 'ul')[0]
    .props.children.filter((ele) => ele.type === 'li').length === 3
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx

```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello JSX!</h1>
  <p>Some info</p>
  <ul>
    <li>An item</li>
    <li>Another item</li>
    <li>A third item</li>
  </ul>
</div>);
```
