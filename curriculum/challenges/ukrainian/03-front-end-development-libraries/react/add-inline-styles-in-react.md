---
id: 5a24c314108439a4d4036182
title: Додавання вбудованих стилів у React
challengeType: 6
forumTopicId: 301378
dashedName: add-inline-styles-in-react
---

# --description--

В останньому завданні можна було помітити декілька інших синтаксичних відмінностей від вбудованих стилів HTML на додаток до атрибуту `style`, встановленого на об'єкт JavaScript. По-перше, у назвах певних властивостей стилю CSS використовується "горбатий регістр" (camel case). Наприклад, в останньому завданні, замість розміру шрифту `font-size` було встановлено `fontSize`. Написання слів через дефіс, як-то `font-size`, є недопустимим для властивостей об’єктів JavaScript, тому у React використовують camel case. Як правило, будь-які властивості стилю, що містять дефіс, написані в JSX camel case.

Вважається, що усі одиниці довжини властивості (наприклад, `height`, `width`, і `fontSize`) мають значення `px`, якщо не вказано інше. Наприклад, якщо виникає бажання використати `em`, то візьміть значення й одиниці у лапки, як `{fontSize: "4em"}`. Крім значень довжини, які за замовчуванням мають значення `px`, усі інші значення властивостей слід ставити у лапки.

# --instructions--

Якщо у вас є великий перелік стилів, то за стилем `object` можна закріпити константу, щоб код залишався структурованим. Опишіть константу ваших стилів як глобальну змінну у верхній частині файлу. Ініціалізуйте константу `styles` та призначте `object` з трьома властивостями стилю та їх значеннями до неї. Надайте `div` колір `purple`, розмір шрифту `40` та рамку `2px solid purple`. Потім встановіть атрибут `style` рівний константі `styles`.

# --hints--

Змінна `styles` має бути `object` з трьома властивостями.

```js
assert(Object.keys(styles).length === 3);
```

Змінна `styles` повинна мати властивість `color` налаштовану до значення `purple`.

```js
assert(styles.color === 'purple');
```

Змінна `styles` повинна мати властивість `fontSize` налаштовану до значення `40`.

```js
assert(styles.fontSize == 40);
```

Змінна `styles` повинна мати властивість `border` налаштовану до значення `2px solid purple`.

```js
assert(styles.border === '2px solid purple');
```

Компонент повинен відображати елемент `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.shallow(React.createElement(Colorful));
    return mockedComponent.type() === 'div';
  })()
);
```

Стилі елементу `div` мають визначатися об'єктом `styles`.

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
