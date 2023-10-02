# Come usare Docker su Windows Home

Ci sono alcuni pericoli da evitare quando si setta Docker su Windows Home. Per prima cosa devi usare [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) come amministratore. Purtroppo Windows Home non supporta Docker per Windows Desktop, quindi deve essere usata la Toolbox. Essa deve essere eseguita come Amministratore in quanto l'installazione utilizza collegamenti simbolici che non possono essere creati altrimenti.

Dopo aver installato la toolbox, esegui Docker Quickstart Terminal come amministratore. Questo creerà una virtual machine di `default`, se ancora non esiste. Dopo averlo fatto, chiudi il terminale e apri VirtualBox (ancora come Amministratore). Dovresti essere in grado di vedere la macchina di `default`. Il sito richiede molte risorse, quindi ferma la virtual machine e alza le impostazioni per quanto puoi, soprattutto la memoria. È stato confermato che lavora con 4GB di ram.

Una volta che sarai felice perché Docker sta funzionando, clona il repository di freeCodeCamp in una directory all'interno di `C:\Users`. Queste directory sono condivise dando a Docker accesso alle directory locali, di cui ha bisogno durante l'installazione.

Se vedi messaggi come

```shell
bash: change_volumes_owner.sh: No such file or directory
```

quando usi `pnpm run docker:init` questa è molto probabilmente la causa.
