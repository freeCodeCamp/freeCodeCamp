---
id: 5a24c314108439a4d4036182
title: Inline-Stile in React hinzufügen
challengeType: 6
forumTopicId: 301378
dashedName: add-inline-styles-in-react
---

# --description--

In der letzten Aufgabe hast du vielleicht bemerkt, dass es neben dem `style`-Attribut, das auf ein JavaScript-Objekt gesetzt wird, noch einige andere Syntaxunterschiede zu HTML-Inline-Stilen gibt. Erstens verwenden die Namen bestimmter CSS-Stileigenschaften die Groß- und Kleinschreibung. In der letzten Aufgabe hast du zum Beispiel die Größe der Schrift mit `fontSize` statt `font-size` festgelegt. Wörter mit Bindestrich wie `font-size` sind eine ungültige Syntax für JavaScript-Objekteigenschaften, deshalb verwendet React die Groß- und Kleinschreibung. In der Regel werden alle Stileigenschaften mit Bindestrich in JSX in Camel Case geschrieben.

Alle Längeneinheiten der Eigenschaftswerte (wie `height`, `width` und `fontSize`) werden, wenn nicht anders angegeben, in `px` angenommen. Wenn du z. B. `em` verwenden willst, verpackst du den Wert und die Einheiten in Anführungszeichen, wie `{fontSize: "4em"}`. Abgesehen von den Längenwerten, die standardmäßig `px` lauten, sollten alle anderen Eigenschaftswerte in Anführungszeichen eingeschlossen werden.

# --instructions--

Wenn du eine große Anzahl von Stilen hast, kannst du ein Style-`object` einer Konstante zuweisen, um deinen Code zu organisieren. Deklariere deine Stilkonstante als globale Variable am Anfang der Datei. Initialisiere die Konstante `styles` und weise ihr ein `object` mit drei Stileigenschaften und deren Werten zu. Gib dem `div` die Farbe `purple`, eine Schriftgröße von `40` und einen Rahmen von `2px solid purple`. Dann setze das `style`-Attribut gleich der `styles`-Konstante.

# --hints--

Die `styles`-Variable sollte ein `object` mit drei Eigenschaften sein.

```js
assert(Object.keys(styles).length === 3);
```

Die `styles`-Variable sollte eine `color`-Eigenschaft haben, die auf den Wert `purple` gesetzt ist.

```js
assert(styles.color === 'purple');
```

Die `styles`-Variable sollte eine `fontSize`-Eigenschaft besitzen, die auf den Wert `40` gesetzt ist.

```js
assert(styles.fontSize == 40);
```

Die `styles`-Variable sollte eine `border`-Eigenschaft besitzen, die auf den Wert `2px solid purple` gesetzt ist.

```js
assert(styles.border === '2px solid purple');
```

Die Komponente sollte ein `div`-Element darstellen.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.shallow(React.createElement(Colorful));
    return mockedComponent.type() === 'div';
  })()
);
```

Das `div`-Element sollte seine Stile durch das `styles`-Objekt definieren lassen.

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
