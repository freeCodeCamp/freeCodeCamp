# Come usare Docker su Windows Home

Ci sono alcuni insidie da evitare quando si imposta docker su Windows Home. Prima di tutto devi usare [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) come amministratore. Purtroppo Windows Home non supporta Docker per Windows Desktop, quindi gli strumenti devono essere usati. Deve essere eseguito come Amministratore in quanto l'installazione utilizza collegamenti simbolici che non possono essere creati altrimenti.

Una volta installato il pannello degli strumenti, eseguire Docker Quickstart Terminal come amministratore. Questo creerà una macchina virtuale `predefinita` se non esiste già. Una volta che è accaduto, chiudere il terminale e aprire VirtualBox (ancora come Amministratore). Dovresti essere in grado di vedere la `macchina predefinita`. Il sito è abbastanza intensivo di risorse, quindi fermare la macchina virtuale e aumentare le impostazioni per quanto è possibile - memoria in particolare. È stato confermato di lavorare con 4GB di montone.

Una volta che sei felice che Docker stia funzionando, clonare il repository freeCodeCamp a una directory all'interno di `C:\Users`. Queste directory sono condivise dando accesso Docker alle directory locali, di cui ha bisogno durante l'installazione.

Se vedi messaggi come

```shell
bash: change_volumes_owner.sh: Nessun file o directory
```

when you `npm run docker:init` this is likely the culprit.
