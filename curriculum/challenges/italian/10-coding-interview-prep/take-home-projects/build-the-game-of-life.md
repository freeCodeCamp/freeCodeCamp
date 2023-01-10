---
id: bd7154d8c242eddfaeb5bd13
title: Costruisci il Gioco della Vita
challengeType: 3
forumTopicId: 302362
dashedName: build-the-game-of-life
---

# --description--

**Obiettivo:** crea un'app funzionalmente simile a questa: <a href="https://codepen.io/freeCodeCamp/full/BpwMZv/" target="_blank" rel="noopener noreferrer nofollow">https://codepen.io/freeCodeCamp/full/BpwMZv</a>.

Il Gioco della Vita è un automaton cellulare creato dal matematico inglese John Horton Conway. È un <em>gioco a zero-giocatori</em>, cioè la sua evoluzione è determinata dal suo stato iniziale, senza richiedere input ulteriori. Si interagisce con il Gioco della Vita creando una configurazione iniziale e osservando come evolve.

L'universo del Gioco della Vita è una griglia infinita bidimensionale ortogonale di celle quadrate, ognuna con due stati possibili: popolato e non-popolato. Ogni cella interagisce con i suoi otto vicini, che sono le celle che sono adiacenti in orizzontale, verticale o diagonale.

A ogni step nel tempo, avviene la seguente transizione:

- Ogni cella viva con meno di due vicini vivi muore, perché sottopopolata.
- Ogni cella viva con due o tre vicine vive, vive fino alla generazione successiva.
- Ogni cella viva con più di tre celle vive vicine muore, per sovrappopolazione.
- Qualsiasi cella morta con esattamente tre vicini vivi diventa una cella viva, come per riproduzione.

Soddisfa le user story qui sotto e supera tutti i test. Utilizza le librerie o le API di cui hai bisogno. Usa il tuo stile personale.

**User Story:** Quando apro il gioco, genererà casualmente un tabellone e inizierà a giocare.

**User Story:** Posso iniziare e fermare il tabellone.

**User Story:** Posso configurare il tabellone.

**User Story:** Posso pulire il tabellone.

**User Story:** Quando premo start, il gioco inizierà.

**User Story:** Ogni volta che il tabellone cambia, posso vedere quante generazioni sono passate.

Quando hai finito, includi un link al tuo progetto e clicca sul pulsante "Ho completato questa sfida".

Puoi ottenere un feedback sul tuo progetto condividendolo sul <a href="https://forum.freecodecamp.org/c/project-feedback/409" target="_blank" rel="noopener noreferrer nofollow">forum di freeCodeCamp</a>.

# --solutions--

```js
// solution required
```
