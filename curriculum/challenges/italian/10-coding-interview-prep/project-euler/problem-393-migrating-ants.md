---
id: 5900f4f61000cf542c510008
title: 'Problema 393: Migrazione di formiche'
challengeType: 1
forumTopicId: 302058
dashedName: problem-393-migrating-ants
---

# --description--

Una griglia $n × n$ di quadrati contiene $n^2$ formiche, una formica per quadrato.

Tutte le formiche decidono di muoversi simultaneamente in un quadrato adiacente (di solito 4 possibilità, ad eccezione delle formiche sul bordo della griglia o agli angoli).

Definiamo $f(n)$ come il numero di modi in cui questo può accadere senza che nessuna formica finisca sullo stesso quadrato e senza che due formiche attraversino lo stesso bordo tra due quadrati.

Ti viene dato che $f(4) = 88$.

Trova $f(10)$.

# --hints--

`migratingAnts()` dovrebbe restituire `112398351350823100`.

```js
assert.strictEqual(migratingAnts(), 112398351350823100);
```

# --seed--

## --seed-contents--

```js
function migratingAnts() {

  return true;
}

migratingAnts();
```

# --solutions--

```js
// solution required
```
