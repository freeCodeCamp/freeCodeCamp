---
id: 5900f40e1000cf542c50ff21
title: 'Problema 162: numeri esadecimali'
challengeType: 1
forumTopicId: 301796
dashedName: problem-162-hexadecimal-numbers
---

# --description--

Nel sistema esadecimale I numeri sono rappresentati utilizzando 16 cifre diverse:

$$0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F$$

Il numero esadecimale AF quando scritto nel sistema di numeri decimali è pari a $10 \times 16 + 15 = 175$.

Nei numeri esadecimali a 3 cifre 10A, 1A0, A10 e A01 sono presenti tutte le cifre 0,1 e A.

Come i numeri scritti nella base dieci scriviamo i numeri esadecimali senza zeri iniziali.

Quanti numeri esadecimali contenenti al massimo sedici cifre esadecimali esistono con tutte le cifre 0,1, e A presenti almeno una volta?

Dai la tua risposta con un numero esadecimale come una stringa.

**Nota:** (A,B,C,D,E e F in maiuscolo, senza alcun codice iniziale o finale che contrassegna il numero come esadecimale e senza zeri iniziali, cioè 1A3F e non: 1a3f e non 0x1a3f e $1A3F e non #1A3F e non 0000001A3F)

# --hints--

`hexadecimalNumbers()` dovrebbe restituire una stringa.

```js
assert(typeof hexadecimalNumbers() === 'string');
```

`hexadecimalNumbers()` dovrebbe restituire la stringa `3D58725572C62302`.

```js
assert.strictEqual(hexadecimalNumbers(), '3D58725572C62302');
```

# --seed--

## --seed-contents--

```js
function hexadecimalNumbers() {

  return true;
}

hexadecimalNumbers();
```

# --solutions--

```js
// solution required
```
