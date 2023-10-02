---
id: 5900f49a1000cf542c50ffac
title: 'Problema 300: Folding delle proteine'
challengeType: 1
forumTopicId: 301954
dashedName: problem-300-protein-folding
---

# --description--

In un modo molto semplificato, possiamo considerare proteine come stringhe consistenti di elementi idrofobi (H) e polari (P), esempio HHPPHHHPHHPH.

Per questo problema è importante l'orientamento di una proteina; ad esempio, l'HPP è considerata diversa dalla PPH. Quindi ci sono $2^n$ proteine distinte consistenti di $n$ elementi.

Quando si incontrano queste stringhe in natura, sono sempre piegate in modo tale che il numero di punti di contatto H-H sia il più grande possibile, poiché ciò è energeticamente vantaggioso.

Di conseguenza, gli elementi H tendono ad accumularsi nella parte interna, con gli elementi P all'esterno.

Le proteine naturali sono piegate in tre dimensioni, ma considereremo solo la piegatura in <u>due dimensioni</u>.

La figura seguente mostra due possibili modi in cui la nostra proteina di esempio potrebbe essere ripiegata (i punti di contatto H-H sono mostrati con punti rossi).

<img class="img-responsive center-block" alt="due possibili modi di piegare la proteina di esempio" src="https://cdn.freecodecamp.org/curriculum/project-euler/protein-folding.gif" style="background-color: white; padding: 10px;" />

La piegatura a sinistra ha solo sei punti di contatto H-H, quindi non si verificherebbe mai naturalmente. D'altra parte, la piegatura a destra ha nove punti di contatto H-H, che è ottimale per questa stringa.

Supponendo che gli elementi H e P siano altrettanto probabili in qualsiasi posizione lungo la stringa, il numero medio di punti di contatto H-H in una piegatura ottimale di una stringa proteica casuale di lunghezza 8 risulta essere $\frac{850}{2^8} = 3.3 203125$.

Qual è il numero medio di punti di contatto H-H in una piegatura ottimale di una stringa proteica casuale di lunghezza 15? Dai la tua risposta usando quanti decimali sono necessari per un risultato esatto.

# --hints--

`proteinFolding()` dovrebbe restituire `8.0540771484375`.

```js
assert.strictEqual(proteinFolding(), 8.0540771484375);
```

# --seed--

## --seed-contents--

```js
function proteinFolding() {

  return true;
}

proteinFolding();
```

# --solutions--

```js
// solution required
```
