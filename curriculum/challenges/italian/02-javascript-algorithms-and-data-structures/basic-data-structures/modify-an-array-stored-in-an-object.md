---
id: 587d7b7d367417b2b2512b1f
title: Modificare un array memorizzato in un oggetto
challengeType: 1
forumTopicId: 301163
dashedName: modify-an-array-stored-in-an-object
---

# --description--

Adesso hai visto tutte le operazioni di base per gli oggetti JavaScript. Puoi aggiungere, modificare e rimuovere coppie chiave-valore, controllare se una proprietà esiste e iterare su tutte le chiavi di un oggetto. Continuando a conoscere JavaScript vedrai applicazioni ancora più versatili degli oggetti. Inoltre, le lezioni di Strutture Dati nella sezione Colloquio di Lavoro per Programmatori del curriculum coprono anche gli oggetti ES6 <dfn>Map</dfn> e <dfn>Set</dfn>, entrambi i quali sono simili a oggetti ordinari, ma forniscono alcune caratteristiche aggiuntive. Ora che hai imparato le basi di array e oggetti, sei pienamente preparato per iniziare ad affrontare problemi più complessi utilizzando JavaScript!

# --instructions--

Dai un'occhiata all'oggetto che abbiamo fornito nell'editor di codice. L'oggetto `user` contiene tre chiavi. La chiave `data` contiene cinque chiavi, una delle quali contiene un array di `friends` (amici). Da questo puoi vedere quanto gli oggetti siano flessibili come strutture di dati. Abbiamo iniziato a scrivere una funzione `addFriend`. Finisci di scriverla in modo che prenda un oggetto `user`, aggiunga il nome dell'argomento `friend` all'array memorizzato in `user.data.friends` e restituisca questo array.

# --hints--

L'oggetto `user` dovrebbe avere le chiavi `name`, `age` e `data`.

```js
assert('name' in user && 'age' in user && 'data' in user);
```

La funzione `addFriend` dovrebbe ricevere un oggetto `user` e una stringa `friend` come argomenti e aggiungere l'amico all'array `friends` nell'oggetto `user`.

```js
assert(
  (function () {
    let L1 = user.data.friends.length;
    addFriend(user, 'Sean');
    let L2 = user.data.friends.length;
    return L2 === L1 + 1;
  })()
);
```

`addFriend(user, "Pete")` dovrebbe restituire `["Sam", "Kira", "Tomo", "Pete"]`.

```js
assert.deepEqual(
  (function () {
    delete user.data.friends;
    user.data.friends = ['Sam', 'Kira', 'Tomo'];
    return addFriend(user, 'Pete');
  })(),
  ['Sam', 'Kira', 'Tomo', 'Pete']
);
```

# --seed--

## --seed-contents--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line

  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
```

# --solutions--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
```
