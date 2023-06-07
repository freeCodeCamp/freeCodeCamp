---
id: 9d7123c8c441eeafaeb5bdef
title: Entfernen von Elementen aus einem Array mit slice statt splice
challengeType: 1
forumTopicId: 301236
dashedName: remove-elements-from-an-array-using-slice-instead-of-splice
---

# --description--

Ein häufiges Muster bei der Arbeit mit Arrays ist, dass du Elemente entfernen und den Rest des Arrays behalten willst. JavaScript bietet dafür die Methode `splice`, die Argumente für den Index, wo mit dem Entfernen von Elementen begonnen werden soll, und dann die Anzahl der zu entfernenden Elemente entgegennimmt. Wenn das zweite Argument nicht angegeben wird, werden standardmäßig die Einträge bis zum Ende entfernt. Allerdings verändert die Methode `splice` das ursprüngliche Array, auf das sie angewendet wird. Hier ist ein Beispiel:

```js
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```

Hier gibt `splice` den String `London` zurück und löscht ihn aus dem Array cities. `cities` wird den Wert `["Chicago", "Delhi", "Islamabad", "Berlin"]` haben.

Wie wir in der letzten Aufgabe gesehen haben, verändert die Methode `slice` das ursprüngliche Array nicht, sondern gibt ein neues Array zurück, das in einer Variablen gespeichert werden kann. Du erinnerst dich, dass die Methode `slice` zwei Argumente für die Indizes für den Anfang und das Ende des Slice benötigt (das Ende ist nicht eingeschlossen) und diese Elemente in einem neuen Array zurückgibt. Wenn du die Methode `slice` anstelle von `splice` verwendest, vermeidest du alle Array-mutierenden Nebeneffekte.

# --instructions--

Schreibe die Funktion `nonMutatingSplice` um, indem du `slice` anstelle von `splice` verwendest. Sie sollte das übergebene Array `cities` auf eine Länge von 3 begrenzen und ein neues Array mit nur den ersten drei Elementen zurückgeben.

Verändere das ursprüngliche Array, das der Funktion übergeben wird, nicht.

# --hints--

Dein Code sollte die Methode `slice` verwenden.

```js
assert(code.match(/\.slice/g));
```

Dein Code sollte nicht die Methode `splice` verwenden.

```js
assert(!code.match(/\.?[\s\S]*?splice/g));
```

Das Array `inputCities` sollte sich nicht ändern.

```js
assert(
  JSON.stringify(inputCities) ===
    JSON.stringify(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
);
```

`nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` sollte `["Chicago", "Delhi", "Islamabad"]` zurückgeben.

```js
assert(
  JSON.stringify(
    nonMutatingSplice(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
  ) === JSON.stringify(['Chicago', 'Delhi', 'Islamabad'])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

# --solutions--

```js
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
```
