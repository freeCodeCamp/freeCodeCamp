---
id: 59da22823d04c95919d46269
title: 'Problema dei marinai, scimmie e noci di cocco'
challengeType: 1
forumTopicId: 302304
dashedName: sailors-coconuts-and-a-monkey-problem
---

# --description--

Cinque marinai sono naufragati su un'isola e raccolgono un grande mucchio di noci di cocco durante il giorno.

Quella notte il primo marinaio si sveglia e decide di prendere la sua prima parte presto, così cerca di dividere il mucchio di noci di cocco ugualmente in cinque pile, ma scopre che c'è un cocco rimasto, così lo lancia ad una scimmia e poi nasconde la "sua" pila di cocco, di pari dimensione, e spinge le altre quattro insieme per formare nuovamente un unico mucchio visibile di noci di cocco e va a letto.

Per farla breve, ogni marinaio a turno fa la stessa cosa di dividere la pila di noci di cocco in cinque, trovare che una noce di cocco è rimasta fuori dalla divisione, e dare quella noce di cocco restante alla scimmia, per poi rimettere assieme le altre quattro pile per formare una singola pila.

Al mattino (dopo che ciascuno dei cinque marinai ha agito separatamente e di nascosto durante la notte), le noci di cocco restanti sono suddivise in cinque pile uguali per ciascuno dei marinai, dopodiché si scopre che il mucchio di noci di cocco si divide ugualmente tra i marinai senza resto. (Niente per la scimmia al mattino.)

# --instructions--

Crea una funzione che restituisca la dimensione minima possibile del mucchio iniziale di noci di cocco raccolto durante il giorno per `N` marinai. **Nota:** ovviamente la storia è raccontata in un mondo dove la raccolta di qualsiasi numero di noci di cocco in un giorno e le divisioni multiple della pilla, ecc., possono avvenire nel tempo della storia, così da non avere effetto sulla matematica.

# --hints--

`splitCoconuts` dovrebbe essere una funzione.

```js
assert(typeof splitCoconuts === 'function');
```

`splitCoconuts(5)` dovrebbe restituire 3121.

```js
assert(splitCoconuts(5) === 3121);
```

`splitCoconuts(6)` dovrebbe restituire 233275.

```js
assert(splitCoconuts(6) === 233275);
```

`splitCoconuts(7)` dovrebbe restituire 823537.

```js
assert(splitCoconuts(7) === 823537);
```

# --seed--

## --seed-contents--

```js
function splitCoconuts(intSailors) {

  return true;
}
```

# --solutions--

```js
function splitCoconuts(intSailors) {
  let intNuts = intSailors;
  let result = splitCoconutsHelper(intNuts, intSailors);
  while (!result) {
    intNuts += 1;
    result = splitCoconutsHelper(intNuts, intSailors);
  }

  return intNuts;
}

function splitCoconutsHelper(intNuts, intSailors, intDepth) {
  const nDepth = intDepth !== undefined ? intDepth : intSailors;
  const portion = Math.floor(intNuts / intSailors);
  const remain = intNuts % intSailors;

  if (portion <= 0 || remain !== (nDepth ? 1 : 0)) {
    return null;
  }

  if (nDepth) {
    return splitCoconutsHelper(
      intNuts - portion - remain, intSailors, nDepth - 1
    );
  }

  return intNuts;
}
```
