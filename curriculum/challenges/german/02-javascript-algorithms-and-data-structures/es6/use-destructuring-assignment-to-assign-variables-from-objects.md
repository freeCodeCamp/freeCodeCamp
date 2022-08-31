---
id: 587d7b89367417b2b2512b49
title: Verwende die Destrukturierungszuweisung, um Variablen von Objekten zuzuweisen
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

Die Destrukturierung ermöglicht es dir, beim Extrahieren von Werten einen neuen Variablennamen zu vergeben. Du kannst dies tun, indem du den neuen Namen bei der Zuweisung des Wertes nach einem Doppelpunkt setzt.

Verwende das gleiche Objekt wie im letzten Beispiel:

```js
const user = { name: 'John Doe', age: 34 };
```

So kannst du neue Variablennamen in der Zuweisung vergeben:

```js
const { name: userName, age: userAge } = user;
```

Du kannst es so lesen: "Hole den Wert von `user.name` und weise ihn einer neuen Variablen namens `userName` zu" und so weiter. Der Wert von `userName` wäre der String `John Doe`, und der Wert von `userAge` wäre die Zahl `34`.

# --instructions--

Ersetze die beiden Zuweisungen durch eine gleichwertige Destrukturierungszuweisung. Es sollte den Variablen `highToday` und `highTomorrow` noch die Werte von `today` und `tomorrow` aus dem Objekt `HIGH_TEMPERATURES` zugewiesen werden.

# --hints--

Du solltest die ES5-Zuweisungssyntax entfernen.

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

Du solltest die Destrukturierung verwenden, um die Variable `highToday` zu erstellen.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

Du solltest die Destrukturierung verwenden, um die Variable `highTomorrow` zu erstellen.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

`highToday` sollte gleich `77` sein und `highTomorrow` sollte gleich `80` sein.

```js
assert(highToday === 77 && highTomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```
