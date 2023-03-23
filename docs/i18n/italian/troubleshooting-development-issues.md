Se stai avendo problemi, è molto probabile che la soluzione sia in questa documentazione.

### Problemi con l'installazione dei prerequisiti raccomandati

Sviluppiamo regolarmente sui sistemi operativi più nuovi o più popolari come macOS 10.15 o successivi, Ubuntu 18.04 e Windows 10 (con WSL2).

Ti raccomandiamo di fare ricerche sui tuoi problemi specifici usando risorse come Google, Stack Overflow e Stack Exchange. C'è una buona probabilità che qualcuno abbia incontrato lo stesso problema e ci sia già una risposta alla tua domanda specifica.

Se sei su un sistema operativo diverso o continui ad avere dei problemi, visita [ottenere aiuto](#ottenere-aiuto).

> [!WARNING]
> 
> Per favore, evita di creare issue su GitHub per problemi con i prerequisiti. Sono al di fuori dell'ambito di questo progetto.

### Problemi con UI, caratteri, stringhe di lingua mancanti  o errori di build.

Quando viene fatto il build del client, Gatsby memorizzerà nella cache i font, le stringhe di lingua e l'interfaccia utente. Se uno di loro non è memorizzato nella cache, esegui quanto segue:

```console
pnpm run clean
pnpm install
pnpm run seed
pnpm run develop
```

O

Usa la scorciatoia

```
pnpm run clean-and-develop
```

Se continui a incontrare problemi con il build, è consigliato ripulire lo spazio di lavoro.

Usa `git clean` in modalità interattiva:

```
git clean -ifdX
```

<details>
   <summary>
      Come pulire i file git non tracciati (screenshot)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Come pulire i file git non tracciati" />
</details>

### Problemi con API, login, invio delle sfide, ecc.

Se non riesci ad accedere e invece vedi un banner con un messaggio di errore che verrà segnalato a freeCodeCamp, ti preghiamo di controllare che la porta locale `3000` non sia utilizzata da un programma diverso.

<!-- tabs:start -->

#### **macOS/Linux/WSL su Windows - dal terminale:**

```console
netstat -a | grep "3000"

tcp4    0   0    0.0.0.0:3000           DESKTOP      LISTEN
```

#### **Su Windows - PowerShell con privilegi elevati:**

```powershell
netstat -ab | Select-String "3000"

TCP    0.0.0.0:3000           DESKTOP      LISTENING
```

<!-- tabs:end -->

---

### Problemi di disconnessione durante la navigazione

Durante lo sviluppo, la sessione viene memorizzata come cookie. Cancellarli ti farà uscire dal tuo account di sviluppo.

Ti disconnetterai anche eseguendo `pnpm run seed:certified-user`. Sovrascriverà l'utente di sviluppo nel database locale.

### Ottenere 404 navigando sulla pagina del profilo

Quando provi a navigare su http://localhost:8000/developmentuser per visualizzare la pagina del profilo, Gatsby prende in consegna le pagine lato client, quindi otterrai una pagina 404 per il profilo utente quando lavori.

C'è un pulsante "Preview Custom 404 Page", cliccalo per vedere il profilo.

### Problemi nell'installazione delle dipendenze

Se incontri degli errori durante l'installazione delle dipendenze, assicurati di non essere in una rete ristretta o che le impostazioni del tuo firewall non ti impediscano di accedere alle risorse.

La prima configurazione può richiedere un po' di tempo a seconda della larghezza di banda della rete. Sii paziente, e se continui a rimanere bloccato ti raccomandiamo di usare GitPod invece di un setup offline.

> [!NOTE] Se stai usando un dispositivo Apple con Chip M1 per eseguire l'applicazione in locale, suggeriamo di usare Node v14.7 o superiore. Altrimenti potresti avere problemi con dipendenze come Sharp.

## Ottenere Aiuto

Se sei bloccato e hai bisogno di aiuto, poni liberamente le tue domande nella [categoria 'Contributors' sul nostro forum](https://forum.freecodecamp.org/c/contributors) o [nella chat room per i contributori](https://discord.gg/PRyKn3Vbay).

Potrebbe esserci un errore nella console del browser o in Bash / Terminale / Linea di comando che ti aiuterà a identificare il problema. Fornisci questo messaggio di errore nella descrizione del problema in modo che gli altri possano identificarlo più facilmente e aiutarti a risolverlo.
