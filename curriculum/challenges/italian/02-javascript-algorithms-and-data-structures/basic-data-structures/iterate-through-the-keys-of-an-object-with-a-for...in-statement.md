---
id: 587d7b7d367417b2b2512b1d
title: Iterare attraverso le chiavi di un oggetto con l'istruzione for...in
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

A volte potrebbe essere necessario iterare attraverso tutte le chiavi di un oggetto. Ciò richiede una sintassi specifica in JavaScript chiamata istruzione <dfn>for...in</dfn>. Per il nostro oggetto `users`, questo potrebbe assomigliare a:

```js
for (let user in users) {
  console.log(user);
}
```

Che scriverebbe `Alan`, `Jeff` e `Sarah` sulla console - ogni valore sulla propria riga.

In questa dichiarazione abbiamo definito una variabile `user`, e come puoi vedere, mentre l'iterazione prosegue attraverso l'oggetto, ad ogni ripetizione la variabile viene reimpostata a ciascuna delle chiavi, risultando nella stampa del nome di ogni utente sulla console.

**NOTA:** Gli oggetti non mantengono un ordine sulle chiavi memorizzate come fanno gli arrays; di conseguenza la posizione di una chiave in un oggetto, o l'ordine relativo in cui appare, è irrilevante quando ci si riferisce a tale chiave o vi si accede.

# --instructions--

Abbiamo definito una funzione `countOnline` che accetta un argomento (un oggetto users). Usa un'instruzione <dfn>for...in</dfn> all'interno di questa funzione per iterare attraverso l'oggetto users passato alla funzione e restituire il numero di utenti la cui proprietà `online` è impostata a `true`. Un esempio di oggetto users che potrebbe essere passato a `countOnline` è mostrato qui sotto. Ogni utente avrà una proprietà `online` con un valore `true` o `false`.

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

La funzione `countOnline` dovrebbe utilizzare un'istruzione `for in` per iterare attraverso le chiavi dell'oggetto passato come argomento.

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
