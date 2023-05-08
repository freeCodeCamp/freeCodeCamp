---
id: 587d7b7d367417b2b2512b1d
title: Iterare sulle chiavi di un oggetto con l'istruzione for...in
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

A volte è necessario iterare su tutte le chiavi di un oggetto. Per questo puoi usare un loop <dfn>for...in</dfn>. Un loop for...in ha questo aspetto:

```javascript
const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}
```

Questo codice mostra `milk 1` e `eggs 12`, con ogni coppia chiave-valore sulla propria riga.

Abbiamo definito la variabile `food` nella testa del loop e questa variabile è stata impostata su ciascuna delle chiavi dell'oggetto in ogni iterazione, ottenendo come risultato il nome di ciascun alimento stampato sulla console.

**NOTA:** Gli oggetti non mantengono un ordine sulle chiavi memorizzate come fanno gli array; di conseguenza la posizione di una chiave in un oggetto, o l'ordine relativo in cui appare, è irrilevante quando ci si riferisce a tale chiave o vi si accede.

# --instructions--

Abbiamo definito una funzione `countOnline` che accetta un argomento, `allUsers`. Usa un'istruzione <dfn>for...in</dfn> all'interno di questa funzione per iterare sull'oggetto `allUsers` e restituire il numero di utenti la cui proprietà online è impostata su `true`. Un esempio di oggetto che potrebbe essere passato a `countOnline` è mostrato di sotto. Ogni utente avrà una proprietà `online` con un valore impostato su `true` o `false`.

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

La funzione `countOnline` dovrebbe utilizzare un'istruzione `for in` per iterare sulle le chiavi dell'oggetto passato come argomento.

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

La funzione `countOnline` dovrebbe restituire `1` quando le viene passato l'oggetto `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }`

```js
assert(countOnline(usersObj1) === 1);
```

La funzione `countOnline` dovrebbe restituire `2` quando le viene passato l'oggetto `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }`

```js
assert(countOnline(usersObj2) === 2);
```

La funzione `countOnline` dovrebbe restituire `0` quando le viene passato l'oggetto `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }`

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

function countOnline(allUsers) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
```

# --solutions--

```js
function countOnline(allUsers) {
  let numOnline = 0;
  for(const user in allUsers){
    if(allUsers[user].online) {
      numOnline++;
    }
  }
  return numOnline;
}
```
