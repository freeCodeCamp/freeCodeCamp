---
id: 587d7b7c367417b2b2512b19
title: Modificare un oggetto annidato in un altro oggetto
challengeType: 1
forumTopicId: 301164
dashedName: modify-an-object-nested-within-an-object
---

# --description--

Diamo adesso un'occhiata ad un oggetto leggermente più complesso. Le proprietà dell'oggetto possono essere annidate ad una profondità arbitraria, e i loro valori possono essere qualsiasi tipo di dati supportato da JavaScript, inclusi array ed altri oggetti. Considera quanto segue:

```js
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
```

`nestedObject` ha tre proprietà: `id` (il valore è un numero), `date` (il valore è una stringa) e `data` (il valore è un oggetto con la propria struttura annidata). Anche se le strutture possono diventare rapidamente complesse, è ancora possibile utilizzare le stesse notazioni per accedere alle informazioni di cui abbiamo bisogno. Per assegnare il valore `10` alla proprietà `busy` dell'oggetto annidato `onlineStatus`, usiamo la notazione a punti per fare riferimento alla proprietà:

```js
nestedObject.data.onlineStatus.busy = 10;
```

# --instructions--

Qui abbiamo definito un oggetto `userActivity`che include un altro oggetto annidato al suo interno. Imposta il valore della chiave `online` su `45`.

# --hints--

`userActivity` dovrebbe avere le proprità `id`, `date` e `data`.

```js
assert(
  'id' in userActivity && 'date' in userActivity && 'data' in userActivity
);
```

`userActivity` dovrebbe avere la proprietà `data` impostata su un oggetto con chiavi `totalUsers` e `online`.

```js
assert('totalUsers' in userActivity.data && 'online' in userActivity.data);
```

La proprietà `online` annidata nella chiave `data` di `userActivity` dovrebbe essere impostata a `45`

```js
assert(userActivity.data.online === 45);
```

La proprietà `online` dovrebbe essere impostata usando la notazione a punti o a parentesi.

```js
assert.strictEqual(code.search(/online: 45/), -1);
```

# --seed--

## --seed-contents--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line

// Only change code above this line

console.log(userActivity);
```

# --solutions--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;
```
