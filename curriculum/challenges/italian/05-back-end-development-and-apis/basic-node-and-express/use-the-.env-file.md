---
id: 587d7fb1367417b2b2512bf2
title: Usare il file .env
challengeType: 2
forumTopicId: 301521
dashedName: use-the--env-file
---

# --description--

Il file `.env` è un file nascosto che viene utilizzato per passare le variabili d'ambiente alla tua applicazione. Questo file è segreto, nessuno tranne te può accedervi, e può essere utilizzato per memorizzare i dati che desideri mantenere privati o nascosti. Ad esempio, puoi memorizzare le chiavi API di servizi esterni o l'URI del database. Puoi anche usarlo per memorizzare le opzioni di configurazione. Impostando le opzioni di configurazione, puoi modificare il comportamento della tua applicazione, senza la necessità di riscrivere una parte di codice.

Le variabili di ambiente sono accessibili dall'app come `process.env.VAR_NAME`. L'oggetto `process.env` è un oggetto Node globale e le variabili sono passate come stringhe. Per convenzione, i nomi delle variabili sono tutti in maiuscolo, con parole separate da un trattino basso. `.env` è un file di shell, quindi non è necessario racchiudere i nomi o i valori tra virgolette. È anche importante notare che non ci possono essere degli spazi intorno al segno uguale quando si assegnano valori alle variabili, ad esempio `VAR_NAME=value`. Normalmente metterai ogni definizione di variabile in una riga separata.

# --instructions--

Aggiungiamo una variabile d'ambiente come opzione di configurazione.

Crea un file `.env` nella directory principale del tuo progetto e memorizza la variabile `MESSAGE_STYLE=uppercase` in esso.

Poi, all'interno del gestore della rotta `/json` GET che hai creato nell'ultima sfida accedi a `process.env.MESSAGE_STYLE` e trasforma la proprietà `message` dell'oggetto di risposta in maiuscolo se la variabile è uguale a `uppercase`. L'oggetto della risposta dovrebbe essere `{"message": "Hello json"}` o `{"message": "HELLO JSON"}`, a seconda del valore di `MESSAGE_STYLE`. Nota che, per come vengono eseguiti i test, occorre leggere il valore di `process.env.MESSAGE_STYLE` **all'interno** del gestore di rotta, non al di fuori.

**Nota:** Se stai usando Replit, non puoi creare un file `.env`. Utilizza invece la scheda <dfn>SECRETS</dfn> integrata per aggiungere la variabile.

Se stai lavorando in locale, avrai bisogno del pacchetto `dotenv`. Carica le variabili ambientali dal tuo file `.env` in `process.env`. Il pacchetto `dotenv` è già stato installato ed è nel file `package.json` del tuo progetto. In cima al file `myApp.js`, aggiungi `require('dotenv').config()` per caricare le variabili di ambiente.

# --hints--

La risposta dell'endpoint `/json` dovrebbe cambiare in base alla variabile d'ambiente `MESSAGE_STYLE`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/use-env-vars').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'The response of "/json" does not change according to MESSAGE_STYLE'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
