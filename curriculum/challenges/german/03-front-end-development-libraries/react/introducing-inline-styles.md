---
id: 5a24c314108439a4d4036181
title: Einführung in die Inline-Styles
challengeType: 6
forumTopicId: 301395
dashedName: introducing-inline-styles
---

# --description--

Es gibt noch weitere komplexe Konzepte, die deinem React-Code mächtige Fähigkeiten verleihen. Vielleicht fragst du dich aber auch, wie du die JSX-Elemente, die du in React erstellst, stylen kannst. Du weißt wahrscheinlich, dass es nicht genau die gleiche Arbeit sein wird wie mit HTML, aufgrund von <a href="/learn/front-end-development-libraries/react/define-an-html-class-in-jsx" target="_blank" rel="noopener noreferrer nofollow"> der Art und Weise, wie du Klassen auf JSX-Elemente </a> anwendest.

Wenn du Stile aus einem Stylesheet importierst, ist es nicht viel anders. Du wendest eine Klasse mit dem Attribut `className` auf dein JSX-Element an und wendest Stile auf die Klasse in deinem Stylesheet an. Eine andere Möglichkeit ist die Anwendung von Inline-Styles, die in der ReactJS-Entwicklung sehr verbreitet sind.

Du wendest Inline-Stile auf JSX-Elemente an, ähnlich wie du es in HTML tust, allerdings mit ein paar JSX-Unterschieden. Hier ist ein Beispiel für einen Inline-Stil in HTML:

```jsx
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
```

JSX-Elemente verwenden das `style`-Attribut, aber aufgrund der Art und Weise, wie JSX transpiliert wird, kannst du den Wert nicht auf einen `string` setzen. Stattdessen setzt du es gleich mit einem JavaScript `object`. Hier ist ein Beispiel:

```jsx
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
```

Hast du bemerkt, dass wir die Eigenschaft `fontSize` in CamelCase schreiben? Das liegt daran, dass React keine Groß- und Kleinschreibung im Style-Objekt akzeptiert. React wird den korrekten Eigenschaftsnamen für uns im HTML übernehmen.

# --instructions--

Füge im Code-Editor ein `style`-Attribut zum `div` hinzu, um dem Text eine rote Farbe und eine Schriftgröße von `72px` zu geben.

Beachte, dass du die Schriftgröße optional als Zahl angeben kannst, indem du die Einheit `px` weglässt, oder sie als `72px` schreibst.
# --hints--

Die Komponente sollte ein `div`-Element darstellen.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().type() === 'div';
  })()
);
```

Das `div`-Element sollte die Farbe `red` haben.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().props().style.color === 'red';
  })()
);
```

Das `div`-Element sollte eine Schriftgröße von `72px` haben.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return (
      mockedComponent.children().props().style.fontSize === 72 ||
      mockedComponent.children().props().style.fontSize === '72' ||
      mockedComponent.children().props().style.fontSize === '72px'
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
class Colorful extends React.Component {
  render() {
    return (
      <div>Big Red</div>
    );
  }
};
```

# --solutions--

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};
```
