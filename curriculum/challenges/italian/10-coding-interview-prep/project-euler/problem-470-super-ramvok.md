---
id: 5900f5431000cf542c510055
title: 'Problema 470: Super Ramvok'
challengeType: 1
forumTopicId: 302146
dashedName: problem-470-super-ramvok
---

# --description--

Considera un singolo gioco di Ramvok:

Sia $t$ il numero massimo di turni che il gioco dura. Se $t = 0$ allora il gioco finisce immediatamente. Altrimenti, ad ogni turno $i$, il giocatore tira un dado. Dopo aver tirato, se $i &lt; t$ il giocatore può fermare il gioco e ricevere un premio uguale al tiro corrente o scartare il tiro e provare di nuovo al turno successivo. Se $i = t$, allora il tiro non può essere scartato e il premio deve essere accettato. Prima che il gioco inizi, $t$ è scelto dal giocatore, che deve quindi pagare un costo iniziale $ct$ per una costante $c$. Per $c = 0$, $t$ può essere scelto infinito (con un costo iniziale di 0). Sia $R(d, c)$ il profitto atteso (cioè guadagno netto) che il giocatore riceve da una singola partita di Ramvok giocata ottimalmente, dati un dado pesato a $d$ facce e una costante costo $c$. Per esempio, $R(4, 0.2) = 2,65$. Supponiamo che il giocatore disponga di fondi sufficienti per pagare qualsiasi/tutti i costi iniziali.

Ora considera una partita di Super Ramvok:

In Super Ramvok, il gioco di Ramvok è giocato ripetutamente, ma con una leggera modifica. Dopo ogni partita, il dado viene alterato. Il processo di alterazione è il seguente: Il dado viene lanciato una volta, e se la faccia risultante ha i suoi pallini visibili, allora quella faccia è viene modificata per essere vuota. Se la faccia è già vuota, allora viene riportata al suo valore originale. Dopo che l'alterazione è fatta, può iniziare un'altra partita di Ramvok (e durante quella partita, ad ogni turno, il dado viene lanciato fino a quando appare una faccia con un valore su di essa). In ogni momento il giocatore sa quali facce sono vuote e quali no. Il gioco di Super Ramvok termina una volta che tutte le facce del dado sono vuote.

Sia $S(d, c)$ il profitto atteso che il giocatore riceve da un gioco ottimale di Super Ramvok, dato un dado a $d$ facce pesato per iniziare (con tutti i lati visibili), e un costo costante $c$. Per esempio, $S(6, 1) = 208,3$.

Sia $F(n) = \sum_{4 ≤ d ≤ n} \sum_{0 ≤ c ≤ n} S(d, c)$.

Calcola $F(20)$, arrotondato al numero intero più vicino.

# --hints--

`superRamvok()` dovrebbe restituire `147668794`.

```js
assert.strictEqual(superRamvok(), 147668794);
```

# --seed--

## --seed-contents--

```js
function superRamvok() {

  return true;
}

superRamvok();
```

# --solutions--

```js
// solution required
```
