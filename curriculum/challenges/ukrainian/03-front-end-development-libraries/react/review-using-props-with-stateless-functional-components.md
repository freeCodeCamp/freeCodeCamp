---
id: 5a24c314108439a4d403616f
title: Перегляньте пропси за допомогою функціональних компонентів без стану
challengeType: 6
forumTopicId: 301411
dashedName: review-using-props-with-stateless-functional-components
---

# --description--

За винятком попереднього завдання, ви передавали пропси до функціональних компонентів без стану. Ці компоненти діють як чисті функції. Вони отримують пропси як вхідні дані і повертають той самий вигляд кожен раз, коли передаються однакові пропси. У наступному завданні ми детальніше розглянемо, що таке стан. Перед цим розглянемо термінологію компонентів.

*Функціональний компонент без стану* — це будь-яка написана функція, яка приймає пропси та повертає JSX. *Компонент без стану* — це клас, який розширює `React.Component`, але не використовує внутрішній стан (описано в наступному завданні). Зрештою, *компонент зі станом* — це класовий компонент, який підтримує власний внутрішній стан. Часто компоненти зі станом називають просто компонентами або компонентами React.

Рекомендовано мінімізувати використання станів та використовувати функціональні компоненти без стану, якщо це можливо. Це допомагає утримувати управління станом у певній області застосунку. Це покращує розробку і утримання застосунку, полегшуючи відстеження того, як стан впливає на його поведінку.

# --instructions--

Редактор коду має компонент `CampSite`, який відтворює компонент `Camper` як дочірній. Визначте компонент `Camper` та призначте йому пропси за замовчуванням `{ name: 'CamperBot' }`. Всередині компоненту `Camper` відтворіть будь-який код, але переконайтесь, що маєте один елемент `p`, який містить лише значення `name`, що передається як пропс (`prop`). Вкінці визначте `propTypes` в компоненті `Camper`, щоб вимагати `name` як пропс та переконатись, що він є типом `string`.

# --hints--

Компонент `CampSite` має відтворюватись.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('CampSite').length === 1;
  })()
);
```

Компонент `Camper` має відтворюватись.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('Camper').length === 1;
  })()
);
```

Компонент `Camper` має містити пропси за замовчуванням, які призначають рядок `CamperBot` до ключа `name`.

```js
assert(
  /Camper.defaultProps={name:(['"`])CamperBot\1,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

Компонент `Camper` має містити типи пропсів, які вимагають, щоб `name` був типом `string`.

```js
assert(
  /Camper.propTypes={name:PropTypes.string.isRequired,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

Компонент `Camper` має містити елемент `p`, який містить лише текст з пропсу `name`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return (
      mockedComponent.find('p').text() ===
      mockedComponent.find('Camper').props().name
    );
  })()
);
```

# --seed--

## --before-user-code--

```jsx
var PropTypes = {
   string: { isRequired: true }
};
```

## --after-user-code--

```jsx
ReactDOM.render(<CampSite />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
```

# --solutions--

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line

const Camper = (props) => {
   return (
     <div>
       <p>{props.name}</p>
     </div>
   );
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

Camper.defaultProps = {
  name: 'CamperBot'
};
```
