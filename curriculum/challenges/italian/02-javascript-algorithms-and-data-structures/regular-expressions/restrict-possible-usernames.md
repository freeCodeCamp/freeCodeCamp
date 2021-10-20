---
id: 587d7db8367417b2b2512ba2
title: Restringere gli username possibili
challengeType: 1
forumTopicId: 301363
dashedName: restrict-possible-usernames
---

# --description--

I nomi utente sono utilizzati ovunque su Internet. Sono ciò che danno agli utenti un'identità unica sui loro siti preferiti.

È necessario controllare tutti i nomi utente in un database. Ecco alcune semplici regole che gli utenti devono seguire durante la creazione del loro nome utente.

1) I nomi utente possono usare solo caratteri alfanumerici.

2) Gli unici numeri nel nome utente devono essere alla fine. Ce ne possono essere zero o più alla fine. Il nome utente non può iniziare con un numero.

3) Le lettere del nome utente possono essere minuscole e maiuscole.

4) I nomi utente devono essere lunghi almeno due caratteri. Un nome utente di due caratteri può usare solo lettere alfabetiche come caratteri.

# --instructions--

Cambia l'espressione regolare `userCheck` in modo che corrisponda ai vincoli elencati sopra.

# --hints--

La tua espressione regolare dovrebbe riconoscere la stringa `JACK`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('JACK'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `J`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `Jo`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Jo'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `Oceans11`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Oceans11'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `RegexGuru`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('RegexGuru'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `007`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('007'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `9`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('9'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `A1`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('A1'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `BadUs3rnam3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('BadUs3rnam3'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `Z97`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Z97'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `c57bT3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('c57bT3'));
```

La tua espressione regolare dovrebbe riconoscere la stringa `AB1`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('AB1'));
```

La tua espressione regolare non dovrebbe riconoscere la stringa `J%4`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J%4'))
```

# --seed--

## --seed-contents--

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
```

# --solutions--

```js
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
