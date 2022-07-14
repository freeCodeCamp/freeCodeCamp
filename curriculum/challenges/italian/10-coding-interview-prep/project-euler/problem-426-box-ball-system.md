---
id: 5900f5171000cf542c510029
title: 'Problema 426: sistema scatola palla'
challengeType: 1
forumTopicId: 302096
dashedName: problem-426-box-ball-system
---

# --description--

Considera una riga infinita di scatole. Alcune di queste scatole contengono una palla. Per esempio, una configurazione iniziale di due scatole occupate consecutive seguite da due scatole vuote, due scatole piene, una scatola buota e due scatole piene può essere denotata dalla sequenza (2, 2, 2, 1, 2), in cui il numero di scatole piene e vuote appare alternato.

Un turno consiste nel muovere ogni palla esattamente una volta secondo la seguente regola: Trasferisci la palla più a sinistra che non è stata ancora mossa alla scatola vuota più vicina alla sua destra.

Dopo un turno la sequenza (2, 2, 2, 1, 2) diventa (2, 2, 1, 2, 3) come può essere visto sotto; nota che iniziamo la nuova sequenza iniziando dalla prima scatola occupata.

<img class="img-responsive center-block" alt="animazione che mostra un turno completo da (2, 2, 2, 1, 2) a (2, 2, 1, 2, 3)" src="https://cdn.freecodecamp.org/curriculum/project-euler/box-ball-system-1.gif" style="background-color: white; padding: 10px;" />

Un sistema come questo è chiamato Sistema Scatola-Palla o BBS (dall'inglese Box-Ball System) per brevità.

Può essere mostrato che il sistema dopo un numero sufficiente di turni evolve ad uno stato dove i numeri di scatole occupate consecutivamente non cambiano. Nell'esempio sotto, i numeri di scatole occupate consecutivamente evolve a [1, 2, 3]; chiamiamo questo lo stato finale.

<img class="img-responsive center-block" alt="quattro turni da scatore occupate [2, 2, 2] a stato finale [1, 2, 3]" src="https://cdn.freecodecamp.org/curriculum/project-euler/box-ball-system-2.gif" style="background-color: white; padding: 10px;" />

Definiamo la sequenza $\\{t_i\\}$:

$$\begin{align}   & s_0 = 290\\,797 \\\\
  & s_{k + 1} = {s_k}^2\bmod 50\\,515\\,093 \\\\ & t_k = (s_k\bmod 64) + 1 \end{align}$$

Iniziando dalla configurazione iniziale $(t_0, t_1, \ldots, t_{10})$, lo stato finale diventa [1, 3, 10, 24, 51, 75].

A partire dalla configurazione iniziale $(t_0, t_1, \ldots, t_{10\\,000\\,000})$, trova lo stato finale.

Dai come risposta la somma dei quadrati degli elementi dello stato finale. Per esempio, se lo stato finale è [1, 2, 3] allora $14 (= 1^2 + 2^2 + 3^2)$ è la tua risposta.

# --hints--

`boxBallSystem()` dovrebbe restituire `31591886008`.

```js
assert.strictEqual(boxBallSystem(), 31591886008);
```

# --seed--

## --seed-contents--

```js
function boxBallSystem() {

  return true;
}

boxBallSystem();
```

# --solutions--

```js
// solution required
```
