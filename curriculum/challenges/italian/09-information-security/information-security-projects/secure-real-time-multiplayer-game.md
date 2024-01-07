---
id: 5e601c775ac9d0ecd8b94aff
title: Gioco multiplayer in tempo reale sicuro
challengeType: 4
forumTopicId: 462375
dashedName: secure-real-time-multiplayer-game
---

# --description--

Sviluppa un gioco 2D multigiocatore in tempo reale utilizzando l'API HTML Canvas e il Socket.io che è funzionalmente simile a questo: <a href="https://secure-real-time-multiplayer-game.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://secure-real-time-multiplayer-game.freecodecamp.rocks/</a>. Lavorare su questo progetto ti porterà a scrivere il tuo codice utilizzando uno dei seguenti metodi:

-   Clonare <a href="https://github.com/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game/" target="_blank" rel="noopener noreferrer nofollow">questo repository GitHub</a> e completare il tuo progetto localmente.
-   Usare <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-secure-real-time-multiplayer-game" target="_blank" rel="noopener noreferrer nofollow">la nostra bozza di progetto su Replit</a> per completare il tuo progetto.
-   Usare un costruttore di siti a tua scelta per completare il progetto. Assicurati di incorporare tutti i file del nostro repository GitHub.

Se utilizzi Replit, segui questi passaggi per impostare il progetto:

-   Inizia importando il progetto su Replit.
-   Poi vedrai una finestra `.replit`.
-   Seleziona `Use run command` e clicca sul pulsante `Done`.

Quando hai finito, assicurati che una demo funzionante del tuo progetto sia ospitata in qualche percorso pubblico. Quindi invia l'URL nel campo Link alla soluzione. Facoltativamente, invia anche un link al codice sorgente del tuo progetto nel campo Link GitHub.

# --instructions--

Crea un gioco sicuro multigiocatore in cui ogni giocatore può muovere il suo avatar, c'è almeno un oggetto collezionabile e la classifica dei giocatori viene calcolata in base al loro punteggio.

Per i dettagli consulta il testo qui sotto.

Assicurati che il tuo gioco sia sicuro! Includi queste misure di sicurezza:

- Il client non dovrebbe essere in grado di individuare il MIME type
- Previeni attacchi XSS
- Non nascondere nulla dal sito web nel client
- Le intestazioni dicono che il sito è alimentato da `PHP 7.4.3`

**Nota**: `helmet@^3.21.3` è necessario per le user story. Ciò significa che sarà necessario utilizzare la versione precedente della documentazione di Helmet per avere informazioni su come soddisfare le user story.

# --hints--

Puoi fornire il tuo progetto e non l'URL di esempio.

```js
(getUserInput) => {
  assert(
    !/.*\/secure-real-time-multiplayer-game\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Più giocatori possono connettersi a un server e giocare.

```js

```

Ogni giocatore ha un avatar.

```js

```

Ogni giocatore è rappresentato da un oggetto creato dalla classe `Player` in `Player.mjs`.

```js

```

Ogni oggetto giocatore dovrebbe contenere come minimo un `id` univoco, un punteggio (`score`), e coordinate `x` e `y` che rappresentano la posizione corrente del giocatore.

```js

```

Il gioco ha almeno un tipo di oggetto da raccogliere. Completa la classe `Collectible` in `Collectible.mjs` per implementarlo.

```js

```

Ogni oggetto da raccogliere creato dalla classe `Collectible` dovrebbe contenere come minimo un `id` univoco, un valore `value` e coordinate `x` e `y` che rappresentano la posizione corrente dell'elemento.

```js

```

I giocatori possono utilizzare i tasti WASD e/o freccia per spostare il loro avatar. Completa il metodo `movePlayer` in `Player.mjs` per implementarlo.

```js

```

Il metodo `movePlayer` dovrebbe accettare due argomenti: una stringa "up", "down", "left", o "right", e un numero per la quantità di pixel di cui dovrebbe cambiare la posizione del giocatore. `movePlayer` dovrebbe cambiare le coordinate `x` e `y` dell'oggetto giocatore da cui è chiamato.

```js

```

Il punteggio del giocatore dovrebbe essere usato per calcolare la sua posizione in classifica tra gli altri giocatori. Completa il metodo `calculateRank` nella classe `Player` per implementarlo.

```js

```

Il metodo `calculateRank` dovrebbe accettare un array di oggetti che rappresentano tutti i giocatori collegati e restituire la stringa `Rank: currentRanking/totalPlayers`. Ad esempio, in una partita con due giocatori, se il giocatore A ha un punteggio di 3 e il giocatore B ha un punteggio di 5, `calculateRank` per il giocatore A dovrebbe restituire `Rank: 2/2`.

```js

```

I giocatori possono scontrarsi con un oggetto da collezionare. Completa il metodo `collision` in `Player.mjs` per implementarlo.

```js

```

Il metodo `collision` dovrebbe accettare l'oggetto di un elemento collezionabile come argomento. Se l'avatar del giocatore si interseca con l'oggetto, il metodo `collision` dovrebbe restituire `true`.

```js

```

Tutti i giocatori sono sincronizzati.

```js

```

I giocatori possono disconnettersi dal gioco in qualsiasi momento.

```js

```

Impedisci al client di individuare il MIME type.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-content-type-options'], 'nosniff');
};
```

Impedisci attacchi di script cross-site (XSS).

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-xss-protection'], '1; mode=block');
};
```

Niente di proveniente dal sito è memorizzato nella cache del client.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['surrogate-control'], 'no-store');
  assert.equal(
    parsed.headers['cache-control'],
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  );
  assert.equal(parsed.headers['pragma'], 'no-cache');
  assert.equal(parsed.headers['expires'], '0');
};
```

Le intestazioni dicono che il sito è basato su "PHP 7.4.3" anche se non lo è (come misura di sicurezza).

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.equal(parsed.headers['x-powered-by'], 'PHP 7.4.3');
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions,
  because they would need to be tested against a full working project.
  Please check our contributing guidelines to learn more.
*/
```
