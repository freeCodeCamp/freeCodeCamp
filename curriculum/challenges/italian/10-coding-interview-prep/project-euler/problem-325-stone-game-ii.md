---
id: 5900f4b11000cf542c50ffc4
title: 'Problema 325: Gioco delle pietre II'
challengeType: 1
forumTopicId: 301982
dashedName: problem-325-stone-game-ii
---

# --description--

Un gioco si gioca con due mucchi di pietre e due giocatori. Al turno di ogni giocatore, il giocatore può rimuovere un certo numero di pietre dal mucchio più grande. Il numero di pietre che rimuove deve essere un multiplo positivo del numero di pietre nel mucchio più piccolo.

Ad esempio, la coppia ordinata (6,14) descrive una configurazione con 6 pietre nel mucchio più piccolo e 14 pietre nel mucchio più grande, quindi il primo giocatore può rimuovere 6 o 12 pietre dal mucchio più grande.

Il giocatore che prende tutte le pietre da un mucchio vince la partita.

Una configurazione vincente è quella in cui il primo giocatore può forzare una vittoria. Ad esempio, (1,5), (2,6) e (3,12) sono configurazioni vincenti perché il primo giocatore può rimuovere immediatamente tutte le pietre nel secondo mucchio.

Una configurazione perdente è quella in cui il secondo giocatore può forzare una vittoria, indipendentemente da ciò che fa il primo giocatore. Ad esempio, (2,3) e (3,4) sono configurazioni perdenti: qualsiasi mossa lecita lascia una configurazione vincente per il secondo giocatore.

Definiamo $S(N)$ come somma di ($x_i + y_i$) per tutte le configurazioni perdenti ($x_i$, $y_i$), $0 &lt; x_i &lt; y_i ≤ N$. Possiamo verificare che $S(10) = 211$ e $S({10}^4) = 230\\,312\\,207\\,313$.

Trova $S({10}^{16})\bmod 7^{10}$.

# --hints--

`stoneGameTwo()` dovrebbe restituire `54672965`.

```js
assert.strictEqual(stoneGameTwo(), 54672965);
```

# --seed--

## --seed-contents--

```js
function stoneGameTwo() {

  return true;
}

stoneGameTwo();
```

# --solutions--

```js
// solution required
```
