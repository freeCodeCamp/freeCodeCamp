---
id: 63ee35370d8d4841c3a7091e
videoId: LGQuIIv2RVA
title: Fondamenti di CSS Domanda E
challengeType: 15
dashedName: css-foundations-question-e
---

# --description--

I combinatori ci permettono di combinare più selettori in modo diverso rispetto a raggrupparli o concatenarli, in quanto mostrano una relazione tra i selettori. Esistono quattro tipi di combinatori, ma per il momento affronteremo solo il combinatore discendente, che è rappresentato in CSS da un singolo spazio tra i selettori. Un combinatore discendente fa sì che gli elementi che corrispondono all'ultimo selettore siano selezionati solo se hanno anche un antenato (genitore, nonno, ecc.) che corrisponde al selettore precedente.

Quindi qualcosa come `.ancestor .child` seleziona un elemento con la classe `child` se possiede un antenato con la classe `ancestor`. Un altro modo di pensarla è che è child sarà selezionato solo se è annidato all'interno di `ancestor`, non conta quanto in profondità. Dai un'occhiata all'esempio qui sotto e scopri se puoi dire quali elementi saranno selezionati in base alla regola CSS fornita:

```html
<!-- index.html -->

<div class="ancestor"> <!-- A -->
  <div class="contents"> <!-- B -->
    <div class="contents"> <!-- C -->
    </div>
  </div>
</div>

<div class="contents"></div> <!-- D -->
```

```css
/* styles.css */

.ancestor .contents {
  /* some declarations */
}
```

Nell'esempio precedente, i primi due elementi con la classe `contents` (`B` e `C`) saranno selezionati, ma l'ultimo elemento (`D`) non sarà selezionato. La tua ipotesi era corretta?

Non c'è davvero limite a quanti combinatori puoi aggiungere a una regola, quindi `.one .two .three .four` è totalmente valido. Selezionerebbe un elemento che ha la classe `four` solo se ha un antenato con la classe `three`, e se quell'antenato ha un proprio antenato con la classe `two`, e così via. Generalmente vuoi evitare di provare a selezionare elementi che hanno bisogno di questo livello di annidamento, dato che a lungo andare può essere abbastanza confusionario e può causare problemi per quanto riguarda la specificità.

# --question--

## --text--

Che cosa fa il combinatore discendente?

## --answers--

Raggruppa insieme determinate classi che condividono le stesse dichiarazioni.

---

Dà la possibilità di selezionare un elemento che condivide gli stessi `class` e `id`.

---

Permette di selezionare un elemento in base alla sua relazione con il suo antenato (genitore, nonno e così via).


## --video-solution--

3
