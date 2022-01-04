---
id: 5a24c314108439a4d403616f
title: Перегляд використання пропсів з простими функціональними компонентами
challengeType: 6
forumTopicId: 301411
dashedName: review-using-props-with-stateless-functional-components
---

# --description--

За винятком останнього завдання, ви передавали пропси до функціональних безструктурних компонентів. Ці компоненти діють як чисті функції. Вони отримують пропси як вхідні дані і повертають той самий вид кожен раз, коли вони передають одні і ті ж пропси. Вам може бути цікаво, що це за стан, наступне завдання розгляне це питання детальніше. Перед цим розглянемо термінологію компонентів.

*Функціональний безструктурний компонент * – це будь-яка написана вами функція, яка приймає пропси та повертає JSX. *безструктурний компонент*, з іншого боку, – це клас, який розширює `React.Component`, але не використовує внутрішній стан (буде розглянуто в наступному завданні). Зрештою, *структурний компонент* – це компонент класу, який підтримує власний внутрішній стан. Компоненти зі збереженням стану можуть називатися просто компонентами або компонентами React.

Загальна схема полягає в спробі мінімізувати збереження стану та створити там, де це можливо, функціональні компоненти без збереження стану. Це допомагає обмежити управління вашим станом у певній сфері вашої програми. У свою чергу, це покращує розробку і супровід вашої програми, полегшуючи відстеження впливу зміни стану на його поведінку.

# --instructions--

Редактор коду має компонент `CampSite`, який відображає компонент `Camper` як дочірній. Визначте компонент `Camper` та призначте пропси за замовчуванням `{ name: 'CamperBot' }`. Всередині компоненту `Camper` відобразіть будь-який код, який хочете, але переконайтесь, що є хоча б один елемент `p`, який містить значення `name`, що передається як `prop`. Зрештою, визначте `propTypes` у компоненті `Camper`, щоб `name` був наданий як пропс та перевірте, що він категорії `string`.

# --hints--

Компонент `CampSite` повинен відображатися.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('CampSite').length === 1;
  })()
);
```

Компонент `Camper` повинен відображатися.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('Camper').length === 1;
  })()
);
```

Компонент `Camper` має містити пропси за замовчуванням, які призначають рядок `CamperBot` до ключа доступу `name`.

```js
assert(
  /Camper.defaultProps={name:(['"`])CamperBot\1,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

Компонент `Camper` має містити типи пропсів, які потребують, щоб пропс `name` був типу `string`.

```js
assert(
  /Camper.propTypes={name:PropTypes.string.isRequired,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

Компонент `Camper` має містити елемент `p` з лише текстом, взятим з пропсу `name`.

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
