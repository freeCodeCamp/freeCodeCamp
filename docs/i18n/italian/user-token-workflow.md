# Come funziona il flusso di lavoro con i token utente

I token utente sono utilizzati per identificare gli utenti con terze parti in modo tale che le sfide completate usando tali servizi possano essere salvate nell'account dell'utente.

## Come vengono creati

Al momento, i token sono utilizzati solo per completare le sfide della certificazione Database Relazionale. A token gets created when a signed-in user clicks the "Click here to start the course" or "Click here to start the project" buttons to start one of the Relational Database courses or projects.

## Quando vengono cancellati

Un token utente viene cancellato quando un utente fa log out da freeCodeCamp, resetta i propri progressi, cancella il proprio account, o cancella manualmente il token usando il widget nella pagina delle impostazioni.

## Come funzionano

I token sono memorizzati in una raccolta `UserToken` nel database. Ogni record ha un `_id` unico, che è il token, e un `user_id` che collega all'account dell'utente dalla collezione `user`. Il token è codificato usando JWT e inviato al client quando viene creato. That encoded token is then given to third-party services that need it and sent to our API by them when a challenge is completed. Quando la nostra API lo riceve, è decodificato in modo da poter identificare l'utente che presenta una sfida e salvare la sfida completata nella lista delle sfide completate `completedChallenges` dell'utente.
