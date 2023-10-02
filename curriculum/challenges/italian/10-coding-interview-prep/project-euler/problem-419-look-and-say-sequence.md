---
id: 5900f5101000cf542c510022
title: 'Problema 419: Guardare e dire la sequenza'
challengeType: 1
forumTopicId: 302088
dashedName: problem-419-look-and-say-sequence
---

# --description--

La sequenza "look and say" sia 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ...

La sequenza inizia con 1 e tutti gli altri membri sono ottenuti descrivendo il membro precedente in termini di cifre consecutive.

Aiuta farlo ad alta voce:

1 è 'uno uno' $→ 11$

11 è 'due uni' $→ 21$

21 è 'un due e un uno' $→ 1211$

1211 è 'un uno, un due e due uni' $→ 111221$

111221 è 'tre uni, due due e un uno '$→ 312211$

...

Definire $A(n)$, $B(n)$ e $C(n)$ rispettivamente come il numero di uno, due e tre nell'elemento $n$'esimo della sequenza. Si può verificare che $A(40) = 31\\,254$, $B(40) = 20\\,259$ e $C(40) = 11\\,625$.

Trova $A(n)$, $B(n)$ e $C(n)$ per $n = {10}^{12}$. Dai la tua risposta modulo $2^{30}$ come stringa e separa i tuoi valori per $A$, $B$ e $C$ con una virgola. Ad es. per $n = 40$ la risposta sarebbe `31254,20259,11625`.

# --hints--

`lookAndSaySequence()` dovrebbe restituire una stringa.

```js
assert(typeof lookAndSaySequence() === 'string');
```


`lookAndSaySequence()` dovrebbe restituire la stringa `998567458,1046245404,43363922`.

```js
assert.strictEqual(lookAndSaySequence(), '998567458,1046245404,43363922');
```

# --seed--

## --seed-contents--

```js
function lookAndSaySequence() {

  return true;
}

lookAndSaySequence();
```

# --solutions--

```js
// solution required
```
