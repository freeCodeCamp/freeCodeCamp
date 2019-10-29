---
id: 5a24c314108439a4d403616f
title: Review Using Props with Stateless Functional Components
challengeType: 6
isRequired: false
forumTopicId: 301411
localeTitle: Обзор использования реквизитов с функциональными компонентами без учета состояния
---

## Description
<section id='description'>
За исключением последней задачи, вы передавали реквизиты функциональным компонентам без состояния. Эти компоненты действуют как чистые функции. Они принимают реквизит в качестве входных данных и возвращают одинаковое представление каждый раз, когда им передают одни и те же реквизиты. Вы можете задаться вопросом, что такое состояние, и следующая задача будет охватывать его более подробно. Перед этим рассмотрим терминологию для компонентов. <em>Функциональным компонентом без состояния</em> является любая функция, которую вы пишете, которая принимает реквизит и возвращает JSX. С другой стороны, <em>компонент без гражданства</em> представляет собой класс, который расширяет <code>React.Component</code> , но не использует внутреннее состояние (рассматривается в следующей задаче). Наконец, <em>компонент</em> с <em>состоянием</em> - это любой компонент, который поддерживает собственное внутреннее состояние. Вы можете видеть компоненты состояния, называемые просто компонентами или компонентами React. Общим примером является попытка свести к минимуму состояние работоспособности и, когда это возможно, создавать функциональные компоненты без состояния. Это помогает содержать управление вашим персоналом в определенной области вашего приложения. В свою очередь, это улучшает разработку и обслуживание вашего приложения, упрощая отслеживание того, как изменения состояния влияют на его поведение.
</section>

## Instructions
<section id='instructions'>
Редактор кода имеет компонент <code>CampSite</code> который отображает компонент <code>Camper</code> как дочерний. Определите компонент <code>Camper</code> и назначьте его реквизиты по умолчанию <code>{ name: &#39;CamperBot&#39; }</code> . Внутри компонента <code>Camper</code> визуализируйте любой код, который вы хотите, но убедитесь, что у него есть один элемент <code>p</code> который включает только <code>name</code> , которое передается в качестве <code>prop</code> . Наконец, определите <code>propTypes</code> на компоненте <code>Camper</code> чтобы потребовать, чтобы <code>name</code> было предоставлено в качестве опоры и убедитесь, что оно имеет <code>string</code> типа.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>CampSite</code> component should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find('CampSite').length === 1; })());
  - text: The <code>Camper</code> component should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find('Camper').length === 1; })());
  - text: The <code>Camper</code> component should include default props which assign the string <code>CamperBot</code> to the key <code>name</code>.
    testString: assert(/Camper.defaultProps={name:(['"`])CamperBot\1,?}/.test(code.replace(/\s/g, '')));
  - text: The <code>Camper</code> component should include prop types which require the <code>name</code> prop to be of type <code>string</code>.
    testString: assert(/Camper.propTypes={name:PropTypes.string.isRequired,?}/.test(code.replace(/\s/g, '')));
  - text: The <code>Camper</code> component should contain a <code>p</code> element with only the text from the <code>name</code> prop.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(CampSite)); return mockedComponent.find('p').text() === mockedComponent.find('Camper').props().name; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

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
// change code below this line

```

</div>

### Before Tests
<div id='jsx-setup'>

```jsx
var PropTypes = {
   string: { isRequired: true }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<CampSite />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

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
// change code below this line

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

</section>
