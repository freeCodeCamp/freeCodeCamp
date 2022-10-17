# Politica di sicurezza di freeCodeCamp.org

Questo documento delinea la nostra politica di sicurezza per i codebase, le piattaforme su cui operiamo e come riportare delle vulnerabilità.

## Segnalare una vulnerabilità

> [!NOTE] Se pensi di aver trovato una vulnerabilità, **per favore riportala responsabilmente**. Non creare una issue su GitHub per problemi di sicurezza. Invece, segui questa guida.

### Linee guida

Apprezziamo la notifica responsabile di vulnerabilità che possa impattare l'integrità delle nostre piattaforme e i nostri utenti. Nell'interesse di risparmiare il tempo di tutti, ti incoraggiamo a riportare vulnerabilità tenendo i seguenti punti a mente:

1. Assicurati di star usando l'**ultima** versione **aggiornata** e **stabile** del tuo sistema operativo e del browser web che sono disponibili sulla tua macchina.
2. Consideriamo l'ultilizzo di strumenti e utility online per riportare problemi con le configurazioni SPF & DKIM, o test SSL Server, nella categoria ["beg bounties"](https://www.troyhunt.com/beg-bounties) e non siamo in grado di rispondere a questi report.
3. Anche se non offriamo ricompense al momento, saremo felici di aggiungere il tuo nome alla lista nella [Hall of Fame](security-hall-of-fame.md), sempre che i report siano validi.

### Segnalare

Dopo aver confermato le linee guida di qui sopra, sentiti libero di mandare una mail a `possible-security-issue [at] freecodecamp.org`. Puoi anche mandare un messaggio crittografato PGP a `flowcrypt.com/me/freecodecamp`.

Una volta che riporti una vulnerabilità, la investigheremo e ci assicureremo che non sia un falso positivo. Se abbiamo bisogno di chiarimenti e dettagli, ti ricontatteremo. Puoi fare segnalazioni separate per ogni problema che trovi. Per favore nota che non saremo in grado di rispondere a qualsiasi problema che pensiamo sia al di fuori delle linee guida.

## Piattaforme & Codebase

Ecco una lista delle piattaforme e codebase per cui accettiamo segnalazioni:

### Piattaforma di apprendimento

| Versione   | Branch         | Supportata | Website attivo           |
| ---------- | -------------- | ---------- | ------------------------ |
| production | `prod-current` | Sì         | `freecodecamp.org/learn` |
| staging    | `prod-staging` | Sì         | `freecodecamp.dev/learn` |
| sviluppo   | `main`         | No         |                          |

### Piattaforma di pubblicazione

| Versione    | Supportata | Website attivo                           |
| ----------- | ---------- | ---------------------------------------- |
| production  | Sì         | `freecodecamp.org/news`                  |
| localizzata | Sì         | `freecodecamp.org/<language>/news` |

### App mobile

| Versione   | Supportata | Website attivo                                                   |
| ---------- | ---------- | ---------------------------------------------------------------- |
| production | Sì         | `https://play.google.com/store/apps/details?id=org.freecodecamp` |

### Altre Piattaforme

Oltre queste, accettiamo report per repository ospitate su GitHub sotto l'organizzazione freeCodeCamp.

### Altre Applicazioni self-hosted

Facciamo l'host noi stessi di alcune delle nostre piattaforme usando software open-source come Ghost & Discourse. Se stai riportando una vulnerabilità per favore assicurati che non sia un bug nel software a monte.
