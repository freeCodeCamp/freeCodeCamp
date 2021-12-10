---
id: 5a24c314108439a4d403618b
title: Надання однорівневим елементам унікального атрибута key
challengeType: 6
forumTopicId: 301394
dashedName: give-sibling-elements-a-unique-key-attribute
---

# --description--

Останнє завдання показало як метод `map` використовується для динамічної візуалізації ряду елементів на основі вводу користувача. Однак у цьому прикладі була пропущена важлива частина. Коли ви створюєте масив елементів, кожний з них потребує атрибут `key` з унікальним значенням. React використовує такі ключі, щоб відстежувати, які елементи додаються, змінюються або видаляються. Це допомагає зробити процес повторної візуалізації більш ефективним, коли список змінюється будь-яким чином.

**Примітка:** Ключі мають бути унікальними лише між елементами одного рівня, вони не повинні бути глобально унікальними в вашому застосунку.

# --instructions--

Редактор коду має масив з деякими інтерфейсними фреймворками та функціональним компонентом без збереження стану з назвою `Frameworks()`. `Frameworks()` потребує перетворення масиву у невпорядкований список, так само як в останньому завданні. Завершіть запис функції зворотного виклику `map`, щоб повернути елемент `li` для кожного фреймворку в масиві `frontEndFrameworks`. Цього разу переконайтесь, що надали кожному `li` атрибут `key` з унікальним значенням. Елементи `li` також повинні містити текст з `frontEndFrameworks`.

Зазвичай, ви хочете зробити ключем те, що однозначно ідентифікує візуалізований елемент. В крайньому разі може бути використаний індекс масиву, але зазвичай слід намагатися використовувати унікальну ідентифікацію.

# --hints--

Компонент `Frameworks` має існувати та відображатися на сторінці.

```js
assert(
  Enzyme.mount(React.createElement(Frameworks)).find('Frameworks').length === 1
);
```

`Frameworks` має відображати елемент `h1`.

```js
assert(Enzyme.mount(React.createElement(Frameworks)).find('h1').length === 1);
```

`Frameworks` має відображати елемент `ul`.

```js
assert(Enzyme.mount(React.createElement(Frameworks)).find('ul').length === 1);
```

Тег `ul` має відображати 6 дочірніх елементів `li`.

```js
assert(
  Enzyme.mount(React.createElement(Frameworks)).find('ul').children().length ===
    6 &&
    Enzyme.mount(React.createElement(Frameworks))
      .find('ul')
      .childAt(0)
      .name() === 'li' &&
    Enzyme.mount(React.createElement(Frameworks)).find('li').length === 6
);
```

Кожний елемент зі списку повинен мати унікальний атрибут `key`.

```js
assert(
  (() => {
    const ul = Enzyme.mount(React.createElement(Frameworks)).find('ul');
    const keys = new Set([
      ul.childAt(0).key(),
      ul.childAt(1).key(),
      ul.childAt(2).key(),
      ul.childAt(3).key(),
      ul.childAt(4).key(),
      ul.childAt(5).key()
    ]);
    return keys.size === 6;
  })()
);
```

Кожний елемент зі списку повинен містити текст із `frontEndFrameworks`.

```js
assert(
  (() => {
    const li = Enzyme.mount(React.createElement(Frameworks))
      .find('ul')
      .children();
    return [...Array(5)].every((_, i) =>
      frontEndFrameworks.includes(li.at(i).text())
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Frameworks />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = null; // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
```

# --solutions--

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((fw, i) => <li key={i}>{fw}</li>);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
```
