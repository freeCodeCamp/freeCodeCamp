---
id: 5a24c314108439a4d403617a
title: Den Zustand als Eigenschaft an Kinderkomponenten weitergeben
challengeType: 6
forumTopicId: 301403
dashedName: pass-state-as-props-to-child-components
---

# --description--

In den vorherigen Aufgaben hast du viele Beispiele gesehen, in denen Eigenschaften an untergeordnete JSX-Elemente und untergeordnete React-Komponenten übergeben wurden. Du fragst dich vielleicht, woher diese Eigenschaften kommen. Ein gängiges Muster ist es, eine zustandsfähige Komponente zu haben, die den `state` enthält, der für deine Anwendung wichtig ist, und die dann Kindkomponenten rendert. Du möchtest, dass diese Komponenten Zugriff auf einige Teile des `state` haben, die als Eigenschaften (props) übergeben werden.

Vielleicht hast du zum Beispiel eine `App`-Komponente, die neben anderen Komponenten auch eine `Navbar` darstellt. In deiner `App` hast du einen `state`, der viele Benutzerinformationen enthält, aber die `Navbar` braucht nur Zugriff auf den Benutzernamen des Benutzers, damit sie ihn anzeigen kann. Du übergibst diesen Teil des `state` an die `Navbar`-Komponente als Eigenschaft.

Dieses Muster veranschaulicht einige wichtige Paradigmen in React. Das erste ist der *unidirektionale Datenfluss*. Der Zustand fließt in eine Richtung durch den Baum deiner Anwendungskomponenten, von der zustandsfähigen Elternkomponente zu den Kinderkomponenten. Die Kinderkomponenten erhalten nur die Zustandsdaten, die sie benötigen. Zweitens können komplexe zustandsbehaftete Anwendungen in nur wenige oder vielleicht eine einzige zustandsfähige Komponente zerlegt werden. Der Rest deiner Komponenten erhält einfach den Zustand von der Elternkomponente als Eigenschaften und rendert eine Benutzeroberfläche aus diesem Zustand. Dadurch wird eine Trennung geschaffen, bei der die Zustandsverwaltung in einem Teil des Codes und das Rendering der Benutzeroberfläche in einem anderen Teil erfolgt. Dieses Prinzip der Trennung von Zustandslogik und UI-Logik ist eines der Grundprinzipien von React. Wenn es richtig eingesetzt wird, wird das Design komplexer, zustandsfähiger Anwendungen wesentlich einfacher.

# --instructions--

Die Komponente `MyApp` ist zustandsfähig und stellt eine `Navbar`-Komponente als Kindelement dar. Gib die Eigenschaft `name` in ihrem `state` an die Kindkomponente weiter und zeige dann den `name` im `h1`-Tag, der Teil der `Navbar`-Rendermethode ist. `name` sollte nach dem Text `Hello, my name is:` erscheinen.

# --hints--

Die Komponente `MyApp` sollte mit einer `Navbar`-Komponente gerendert werden.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return (
      mockedComponent.find('MyApp').length === 1 &&
      mockedComponent.find('Navbar').length === 1
    );
  })()
);
```

Die `Navbar`-Komponente sollte die `MyApp`-Zustandseigenschaft `name` als Eigenschaft erhalten.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const setState = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.find('Navbar').props());
  };
  const navProps = await setState();
  assert(navProps.name === 'TestName');
};
```

Das `h1`-Element in der `Navbar` sollte die Eigenschaft `name` darstellen.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const navH1Before = mockedComponent.find('Navbar').find('h1').text();
  const setState = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.find('Navbar').find('h1').text());
  };
  const navH1After = await setState();
  assert(new RegExp('TestName').test(navH1After) && navH1After !== navH1Before);
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar />
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: </h1>
      {/* Change code above this line */}
    </div>
    );
  }
};
```

# --solutions--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
```
