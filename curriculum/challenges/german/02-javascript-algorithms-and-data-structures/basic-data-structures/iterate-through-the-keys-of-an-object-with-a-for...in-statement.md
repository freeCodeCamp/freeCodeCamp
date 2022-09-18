---
id: 587d7b7d367417b2b2512b1d
title: Iterieren durch die Schlüssel eines Objekts mit einer for...in-Anweisung
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

Manchmal musst du alle Schlüssel innerhalb eines Objekts durchlaufen. Das erfordert eine spezielle Syntax in JavaScript, die <dfn>for...in</dfn>-Anweisung genannt wird. Für unser `users` Objekt könnte es so aussehen:

```js
for (let user in users) {
  console.log(user);
}
```

Das würde `Alan`, `Jeff` und `Sarah` protokollieren - jeder Wert in einer eigenen Zeile.

In dieser Anweisung haben wir eine Variable `user` definiert, und wie du sehen kannst, wurde diese Variable bei jeder Iteration auf jeden der Schlüssel des Objekts zurückgesetzt, während die Anweisung das Objekt in einer Schleife durchlief, was dazu führte, dass der Name jedes Benutzers auf der Konsole ausgegeben wurde.

**HINWEIS:** Objekte behalten keine Reihenfolge der gespeicherten Schlüssel bei, wie es bei Arrays der Fall ist; daher ist die Position eines Schlüssels auf einem Objekt oder die relative Reihenfolge, in der er erscheint, irrelevant, wenn auf diesen Schlüssel verwiesen oder zugegriffen wird.

# --instructions--

Wir haben eine Funktion `countOnline` definiert, die ein Argument (ein Nutzer-Objekt) akzeptiert. Nutze eine <dfn>for...in</dfn> Anweisung innerhalb dieser Funktion, um eine Schleife durch das an die Funktion übergebene Benutzerobjekt zu durchlaufen und die Anzahl der Nutzer zurückzugeben, deren `online` Eigenschaft auf `true` festgesetzt ist. Ein Beispiel für ein Benutzerobjekt, das an `countOnline` übergeben werden könnte, wird unten gezeigt. Jeder Nutzer wird eine `online` Eigenschaft mit entweder einem `true` oder `false` Wert besitzen.

```js
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
```

# --hints--

Die Funktion `countOnline` sollte eine `for in` Anweisung verwenden, um die Objektschlüssel des übergebenen Objekts zu durchlaufen.

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

Die Funktion `countOnline` sollte `1` zurückgeben, wenn das Objekt `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }` an ihn übergeben wurde

```js
assert(countOnline(usersObj1) === 1);
```

Die Funktion `countOnline` sollte `2` zurückgeben, wenn das Objekt `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }` an ihn übergeben wurde

```js
assert(countOnline(usersObj2) === 2);
```

Die Funktion `countOnline` sollte `0` zurückgeben, wenn das Objekt `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }` an ihn übergeben wurde

```js
assert(countOnline(usersObj3) === 0);
```

# --seed--

## --after-user-code--

```js
const usersObj1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

const usersObj2 = {
  Alan: {
    online: true
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: true
  }
}


const usersObj3 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: false
  }
}
```

## --seed-contents--

```js
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

# --solutions--

```js
function countOnline(usersObj) {
  let online = 0;
  for(let user in usersObj){
    if(usersObj[user].online) {
      online++;
    }
  }
  return online;
}
```
