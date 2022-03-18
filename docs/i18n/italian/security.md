# Politica di Sicurezza

Questo documento delinea la nostra politica di sicurezza per codepase, le piattaforme che operiamo, e come riportare vulnerabilità.

## Segnalare una vulnerabilità

Se pensi di aver trovato una vulnerabilità, _perfavore riportala responsabilmente_. Non creare una issue su GitHub per problemi di sicurezza. Invece invia una email a `security@freecodecamp.org` e controlleremo immediatamente.

Assicurati di star usando l'**ultima** versione **aggiornata** e **stabile** del tuo sistema operativo e del tuo browser web che ti sono disponibili sulla tua macchina.

Apprezziamo qualsiasi notifica responsabile di vulnerabilità che possa impattare l'integrità delle nostre piattaforme e i nostri utenti.

Una volta che riporti una vulnerabilità, la investigheremo e ci assicureremo che non sia un falso positivo. Ti risponderemo se avremo bisogno di chiarificare qualsiasi dettaglio. Puoi sottomettere report separati per ogni problema che trovi.

Anche se non offriamo ricompense al momento, saremo felici di aggiungere il tuo nome alla lista nella [Hall of Fame](security-hall-of-fame.md), sempre che i report non siano senza sforzo.

Consideriamo l'ultilizzo di strumenti e utiliti online per riportare problemi con le configurazioni SPF &DKIM, o test SSL Server, nella categoria ["beg bounties"](https://www.troyhunt.com/beg-bounties/) e non siamo possibilitati a rispondere a questi report.

## Piattaforme & Codebase

Ecco una lista delle piattaforme e codebase per cui accettiamo report:

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

Oltre queste, accettiamo report per repository ospitate su GitHub sotto l'organizzazione freeCodeCamp.

Facciamo l'host noi stessi di alcune delle nostre piattaforme usando software open-source come Ghost & Discourse. Se stai riportando una vulnerabilità per favore assicurati che non sua un bug nel software a fonte.
