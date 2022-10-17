---
id: 5a24c314108439a4d4036145
title: Zustand auf Eigenschaften übertragen
challengeType: 6
forumTopicId: 301433
dashedName: map-state-to-props
---

# --description--

Mit der Komponente `Provider` kannst du deinen React-Komponenten `state` und `dispatch` zur Verfügung stellen, aber du musst genau angeben, welchen Zustand und welche Aktionen du möchtest. Auf diese Weise stellst du sicher, dass jede Komponente nur auf den Zustand zugreifen kann, den sie braucht. Das erreichst du, indem du zwei Funktionen erstellst: `mapStateToProps()` und `mapDispatchToProps()`.

In diesen Funktionen gibst du an, auf welche Teile des Zustands du Zugriff haben willst und welche Action Creator du versenden können musst. Sobald diese Funktionen eingerichtet sind, erfährst du in einer weiteren Aufgabe, wie du sie mit der React Redux `connect`-Methode mit deinen Komponenten verbinden kannst.

**Hinweis:** Hinter den Kulissen verwendet React Redux die Methode `store.subscribe()`, um `mapStateToProps()` zu implementieren.

# --instructions--

Erstelle eine Funktion `mapStateToProps()`. Diese Funktion sollte `state` als Argument nehmen und dann ein Objekt zurückgeben, das den Zustand bestimmte Eigenschaftsnamen zuordnet. Diese Eigenschaften werden für deine Komponente über `props` zugänglich. Da in diesem Beispiel der gesamte Zustand der App in einem einzigen Array gespeichert wird, kannst du diesen gesamten Zustand an deine Komponente übergeben. Erstelle eine Eigenschaft `messages` in dem Objekt, das zurückgegeben wird, und setze sie auf `state`.

# --hints--

Die Konstante `state` sollte ein leeres Array sein.

```js
assert(Array.isArray(state) && state.length === 0);
```

`mapStateToProps` sollte eine Funktion sein.

```js
assert(typeof mapStateToProps === 'function');
```

`mapStateToProps` sollte ein Objekt zurückgeben.

```js
assert(typeof mapStateToProps() === 'object');
```

Die Übergabe eines Arrays als Zustand an `mapStateToProps` sollte dieses Array zurückgeben, das einem Schlüssel von `messages` zugeordnet ist.

```js
assert(mapStateToProps(['messages']).messages.pop() === 'messages');
```

# --seed--

## --seed-contents--

```jsx
const state = [];

// Change code below this line
```

# --solutions--

```jsx
const state = [];

// Change code below this line

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};
```
