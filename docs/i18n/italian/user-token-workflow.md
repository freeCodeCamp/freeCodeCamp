# Come funziona il flusso di lavoro con i token utente

I token utente sono utilizzati per identificare gli utenti con terze parti in modo tale che le sfide completate usando tali servizi possano essere salvate nell'account dell'utente.

## Come vengono creati

Al momento, i token sono utilizzati solo per completare le sfide della certificazione Database Relazionale. Un token viene creato quando un utente loggato clicca sui pulsanti "Clicca qui per iniziare il corso" o "Clicca qui per iniziare il progetto" per iniziare uno dei corsi o progetti della certificazione Database Relazionali.

## Quando vengono cancellati

Un token utente viene cancellato quando un utente fa log out da freeCodeCamp, resetta i propri progressi, cancella il proprio account, o cancella manualmente il token usando il widget nella pagina delle impostazioni.

## Come funzionano

I token sono memorizzati in una raccolta `UserToken` nel database. Ogni record ha un `_id` unico, che è il token, e un `user_id` che collega all'account dell'utente dalla collezione `user`. Il token è codificato usando JWT e inviato al client quando viene creato. Questo token codificato viene quindi dato a servizi di terze parti che ne hanno bisogno e inviato alla nostra API da loro quando una sfida è completata. Quando la nostra API lo riceve, è decodificato in modo da poter identificare l'utente che presenta una sfida e salvare la sfida completata nella lista delle sfide completate `completedChallenges` dell'utente.
