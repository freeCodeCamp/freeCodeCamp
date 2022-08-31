---
id: 5900f52a1000cf542c51003b
title: 'Problema 444: La Lotteria della Tavola Rotonda'
challengeType: 1
forumTopicId: 302116
dashedName: problem-444-the-roundtable-lottery
---

# --description--

Un gruppo di $p$ persone decide di sedersi a una tavola rotonda e giocare un gioco scambi di biglietti della lotteria. Ogni persona inizia con un biglietto della lotteria, non grattato, assegnato in maniera casuale. Ogni biglietto, quando grattato, rivela un premio di un'intera sterlina che va da £1 a £$p$, con nessun biglietto uguale. L'obbiettivo del gioco è avere alla fine la vincita più alta.

Inizia un giocatore qualsiasi. A questa tavola, ogni giocatore avrà una di due opzioni:

1.  Il giocatore può grattare il proprio biglietto e rivelare a tutti gli altri la propria vincita.
2.  Il giocatore può scambiare il proprio biglietto non ancora grattato per un biglietto già grattato di un altro giocatore, e quindi finire il gioco con quel biglietto. L'altro giocatore gratterà quindi il suo biglietto appena acquisito e rivela la vincita al resto della tavola.

Il gioco termina una volta che tutti i biglietti sono stati grattati. Tutti i giocatori che rimangono ancora al tavolo devono lasciare con il biglietto da loro attualmente detenuto.

Supponiamo che ogni giocatore usi la strategia ottimale per ottimizzare il valore previsto delle vincite del proprio biglietto.

Rappresenti $E(p)$ il numero previsto di giocatori rimasti alla tavola quando il gioco finisce in un gioco consistente in $p$ giocatori (e.g. $E(111)=5,2912$ quando arrotondato a 5 cifre significative.

Sia $S_1(N) = \displaystyle\sum_{p = 1}^N E(p)$.

Sia $S_k(N) = \displaystyle\sum_{p = 1}^N S_{k - 1}(p)$ for $k > 1$.

Trova $S_{20}({10}^{14})$ e scrivi la risposta come una stringa in notazione scientifica arrotondata a 10 cifre significative. Utilizza "e" minuscolo per separare mantissa ed esponente. Per esempio, la risposta per $S_3(100)$ sarebbe 5,983679014e5.

# --hints--

`roundtableLottery()` dovrebbe restituire una stringa.

```js
assert(typeof roundtableLottery() === 'string');
```

`roundtableLottery()` dovrebbe restituire la stringa `1.200856722e263`.

```js
assert.strictEqual(roundtableLottery(), '1.200856722e263');
```

# --seed--

## --seed-contents--

```js
function roundtableLottery() {

  return true;
}

roundtableLottery();
```

# --solutions--

```js
// solution required
```
