---
id: 5a24c314108439a4d4036182
title: Додайте вбудовані стилі в React
challengeType: 6
forumTopicId: 301378
dashedName: add-inline-styles-in-react
---

# --description--

Можливо, ви помітили, що в попередньому завданні було декілька відмінностей синтаксису від вбудованих стилів HTML, додатково до атрибута `style` зі значенням об’єкта JavaScript. По-перше, у назвах певних властивостей стилю CSS використовується верблюдячийРегістр. Наприклад, в попередньому завданні, ми налаштували розміру шрифту завдяки `fontSize`, а не `font-size`. Написання слів через дефіс (наприклад, `font-size`) не працює для властивостей об’єктів JavaScript, тому в React використовують верблюдячийРегістр. Як правило, будь-які властивості стилю, що містять дефіс, записані верблюдячимРегістром в JSX.

Вважається, що всі одиниці властивості довжини (наприклад, `height`, `width` та `fontSize`) мають значення `px`, якщо не вказано інше. Якщо ви хочете використати `em`, напишіть значення та одиниці в лапках: `{fontSize: "4em"}`. Окрім значень довжини, які за замовчуванням становлять `px`, всі інші значення властивостей потрібно писати в лапках.

# --instructions--

Якщо у вас великий перелік стилів, ви можете призначити об’єкт стилю (`object`) до константи, щоб код залишався організованим. Оголосіть константу стилю як глобальну змінну зверху файлу. Ініціалізуйте константу `styles` та призначте до неї об’єкт з трьома властивостями стилю і їхніми значеннями. Надайте `div` колір зі значенням `purple`, розмір шрифту зі значенням `40` та кордон зі значенням `2px solid purple`. Потім встановіть значення атрибута `style` на константу `styles`.

# --hints--

Змінна `styles` має бути об’єктом (`object`) з трьома властивостями.

```js
assert(Object.keys(styles).length === 3);
```

Змінна `styles` повинна мати властивість `color` зі значенням `purple`.

```js
assert(styles.color === 'purple');
```

Змінна `styles` повинна мати властивість `fontSize` зі значенням `40`.

```js
assert(styles.fontSize == 40);
```

Змінна `styles` повинна мати властивість `border` зі значенням `2px solid purple`.

```js
assert(styles.border === '2px solid purple');
```

Компонент має відтворити елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.shallow(React.createElement(Colorful));
    return mockedComponent.type() === 'div';
  })()
);
```

Об’єкт `styles` має визначити стилі елемента `div`.

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
