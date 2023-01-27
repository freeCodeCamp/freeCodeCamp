---
id: 5a24c314108439a4d403616f
title: Überprüfung der Verwendung von Eigenschaften mit zustandslosen funktionalen Komponenten
challengeType: 6
forumTopicId: 301411
dashedName: review-using-props-with-stateless-functional-components
---

# --description--

Mit Ausnahme der letzten Aufgabe hast du Eigenschaften an zustandslose funktionale Komponenten übergeben. Diese Komponenten verhalten sich wie reine Funktionen. Sie akzeptieren Eigenschaften als Eingabe und geben jedes Mal dieselbe Ansicht zurück, wenn ihnen dieselben Eigenschaften übergeben werden. Du fragst dich vielleicht, was ein Zustand ist. In der nächsten Aufgabe werden wir ihn genauer erklären. Zuvor aber noch ein Überblick über die Terminologie der Komponenten.

Eine *zustandslose funktionale Komponente* ist jede Funktion, die du schreibst, die Eigenschaften akzeptiert und JSX zurückgibt. Eine *zustandslose Komponente* hingegen ist eine Klasse, die `React.Component` erweitert, aber keinen internen Zustand verwendet (wird in der nächsten Aufgabe behandelt). Schließlich ist eine *zustandsfähige Komponente* eine Klassenkomponente, die ihren eigenen internen Zustand beibehält. Du kannst sehen, dass zustandsabhängige Komponenten einfach als Komponenten oder React-Komponenten bezeichnet werden.

Ein gängiges Muster ist der Versuch, die Zustandsabhängigkeit zu minimieren und zustandslose funktionale Komponenten zu erstellen, wo immer dies möglich ist. So kannst du deine Zustandsverwaltung auf einen bestimmten Bereich deiner Anwendung beschränken. Das wiederum verbessert die Entwicklung und Wartung deiner App, da du leichter nachvollziehen kannst, wie sich Änderungen am Status auf das Verhalten der App auswirken.

# --instructions--

Der Code-Editor hat eine Komponente `CampSite`, die eine Komponente `Camper` als Kind rendert. Definiere die Komponente `Camper` und weise ihr die Standardeigenschaft `{ name: 'CamperBot' }` zu. Innerhalb der Komponente `Camper` kannst du jeden beliebigen Code rendern, aber achte darauf, dass es ein `p`-Element gibt, das nur den `name`-Wert enthält, der als `prop` übergeben wird. Schließlich definierst du `propTypes` auf der Komponente `Camper`, um zu verlangen, dass `name` als Eigenschaft angegeben wird, und um zu überprüfen, ob er vom Typ `string` ist.

# --hints--

Die Komponente `CampSite` sollte gerendert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('CampSite').length === 1;
  })()
);
```

Die Komponente `Camper` sollte gerendert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('Camper').length === 1;
  })()
);
```

Die Komponente `Camper` sollte ein Standardeigenschaft enthalten, die dem Schlüssel `name` den String `CamperBot` zuweist.

```js
assert(
  /Camper.defaultProps={name:(['"`])CamperBot\1,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

Die Komponente `Camper` sollte Prop-Typen enthalten, bei denen die Eigenschaft `name` vom Typ `string` sein muss.

```js
assert(
  /Camper.propTypes={name:PropTypes.string.isRequired,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

Die Komponente `Camper` sollte ein `p`-Element enthalten, das nur den Text aus der Eigenschaft `name` enthält.

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
