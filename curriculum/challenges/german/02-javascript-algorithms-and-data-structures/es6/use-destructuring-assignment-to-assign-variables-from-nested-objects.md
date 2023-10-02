---
id: 587d7b89367417b2b2512b4a
title: Verwende die Destrukturierungszuweisung, um Variablen aus verschachtelten Objekten zuzuweisen
challengeType: 1
forumTopicId: 301214
dashedName: use-destructuring-assignment-to-assign-variables-from-nested-objects
---

# --description--

Du kannst die gleichen Prinzipien wie in den beiden vorangegangenen Lektionen anwenden, um Werte aus verschachtelten Objekten zu destrukturieren.

Verwende ein ähnliches Objekt wie in den vorherigen Beispielen:

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Hier erfährst du, wie du die Werte von Objekteigenschaften extrahierst und sie Variablen mit demselben Namen zuweist:

```js
const { johnDoe: { age, email }} = user;
```

Und hier siehst du, wie du die Werte einer Objekteigenschaft Variablen mit unterschiedlichen Namen zuweisen kannst:

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

Ersetze die beiden Zuweisungen durch eine gleichwertige Destrukturierungszuweisung. Es sollte den Variablen `lowToday` und `highToday` trotzdem die Werte von `today.low` und `today.high` aus dem Objekt `LOCAL_FORECAST` zugewiesen werden.

# --hints--

Du solltest die ES5-Zuweisungssyntax entfernen.

```js
assert(
  !code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) &&
    !code.match(/highToday = LOCAL_FORECAST\.today.high/g)
);
```

Du solltest die Destrukturierung verwenden, um die Variable `lowToday` zu erstellen.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

Du solltest die Destrukturierung verwenden, um die Variable `highToday` zu erstellen.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday,?\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

`lowToday` sollte gleich `64` sein und `highToday` sollte gleich `77` sein.

```js
assert(lowToday === 64 && highToday === 77);
```

# --seed--

## --seed-contents--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line
```

# --solutions--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
```
