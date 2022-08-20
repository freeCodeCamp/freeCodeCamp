---
id: 5900f4a71000cf542c50ffba
title: 'Problema 315: orologi a radici digitali'
challengeType: 1
forumTopicId: 301971
dashedName: problem-315-digital-root-clocks
---

# --description--

<img class="img-responsive center-block" alt="animazione degli orologi di Sam e Max che calcolano le radici digitali a partire da 137" src="https://cdn.freecodecamp.org/curriculum/project-euler/digital-root-clocks.gif" style="background-color: white; padding: 10px;" />

Sam e Max sono incaricati di trasformare due orologi digitali in due orologi "radici digitali".

Un orologio a radici digitali è un orologio digitale che calcola le radici digitali passo passo.

Quando a un orologio viene dato un numero, lo mostra e poi inizia il calcolo, mostrando tutti i valori intermedi fino a che non arriva al risultato. Per esempio, se l'orologio riceve il numero 137, mostrerà: `137` → `11` → `2` e poi tornerà nero, aspettando il prossimo numero.

Ogni numero digitale è costituito da alcuni segmenti luminosi: tre orizzontali (alto, centrale, inferiore) e quattro verticali (alto-sinistra, in alto-destra, in basso-sinistra, in basso-destra). Il numero `1` è fatto dalla linea verticale in alto a destra e dalla linea verticale in basso a destra; il numero `4` è fatto dalla riga orizzontale in mezzo, dalla riga verticale in alto a sinistra, dalla riga verticale in alto a destra e dalla riga verticale in basso a destra. Il numero `8` illumina tutti i trattini.

L'orologio consuma energia solo quando i segmenti vengono accesi o spenti. Accendere un `2` costa 5 transizioni, mentre accendere un `7` ne costa solo 4.

Sam e Max hanno costruito due orologi diversi.

Quando l'orologio di Sam riceve un numero, ad esempio il numero 137: l'orologio mostra `137`, poi lo schermo si spegne, poi il numero seguente si accende (`11`), poi lo schermo si spegne di nuovo e infine è mostrato l'ultimo numero (`2`) e infine lo schermo torna nero dopo un certo tempo.

Per esempio, con il numero 137, l'orologio di Sam richiede:

- `137`: $(2 + 5 + 4) × 2 = 22$ transizioni (`137` on/off).
- `11`: $(2 + 2) × 2 = 8$ transizioni (`11` on/off).
- `2`: $(5) × 2 = 10 $ transizioni (`2` on/off).

Per un totale di 40 transizioni.

L'orologio di Max funziona in modo diverso. Invece di spegnere l'intero pannello, è abbastanza intelligente da spegnere solo quei segmenti che non saranno necessari per il numero successivo.

Per il numero 137, l'orologio di Max richiede:

- `137` : $2 + 5 + 4 = 11$ transizioni (`137` su), $7$ transizioni (per disattivare i segmenti che non sono necessari per il numero `11`).
- `11` : $0$ transizioni (il numero `11` è già acceso correttamente), $3$ transizioni (per disattivare il primo `1` e la parte inferiore del secondo `1`; la parte superiore è comune con il numero `2`).
- `2` : $4$ transizioni (per attivare i segmenti rimanenti al fine di ottenere un `2`), $5$ transizioni (per disattivare il numero `2`).

Per un totale di 30 transizioni.

Naturalmente, l'orologio di Max consuma meno energia di quello di Sam. Ai due orologi vengono dati tutti i numeri primi tra $A = {10}^7$ e $B = 2 × {10}^7$. Trova la differenza tra il numero totale di transizioni necessarie per l'orologio di Sam e quello di Max.

# --hints--

`digitalRootClocks()` dovrebbe restituire `13625242`.

```js
assert.strictEqual(digitalRootClocks(), 13625242);
```

# --seed--

## --seed-contents--

```js
function digitalRootClocks() {

  return true;
}

digitalRootClocks();
```

# --solutions--

```js
// solution required
```
