# Sicherheitsrichtlinie

Dieses Dokument beschreibt unsere Sicherheitsrichtlinien für die Codebases und Plattformen, die wir betreiben, und wie du Schwachstellen melden kannst.

## Eine Schwachstelle melden

Wenn du glaubst, dass du eine Schwachstelle gefunden hast, _bitte melde sie verantwortungsvoll_. Erstelle kein GitHub-Issue für Sicherheitsprobleme. Schicke stattdessen bitte eine E-Mail an `security@freecodecamp.org` und wir werden uns sofort darum kümmern.

Stelle sicher, dass du die **neueste**, **stabilste (stable)** und **aktuellste** Version des Betriebssystems und des Webbrowsers verwendest, die dir auf deinem Computer zur Verfügung stehen.

Wir freuen uns über jede verantwortungsvolle Offenlegung von Schwachstellen, die die Integrität unserer Plattformen und Nutzer/innen beeinträchtigen könnten.

Wenn du eine Schwachstelle meldest, werden wir sie untersuchen und sicherstellen, dass es sich nicht um einen Fehlalarm handelt. Wir werden uns bei dir melden, wenn wir noch Details klären müssen. Du kannst für jedes Problem, das du findest, eine gesonderte Mitteilung machen.

Im Moment bieten wir zwar keine Belohnungen oder Swags an, aber wir nehmen deinen Namen gerne in unsere [Hall of Fame](security-hall-of-fame.md)-Liste auf, vorausgesetzt, die Meldungen betreffen keine geringfügigen Probleme.

Wir betrachten die Verwendung von Online-Tools und Hilfsprogrammen zur Meldung von Problemen mit SPF- und DKIM-Einstellungen, SSL-Server-Tests usw. als ["beg bounties"](https://www.troyhunt.com/beg-bounties/) und werden auf diese Meldungen nicht reagieren.

## Plattformen & Codebasen

Hier ist eine Liste der Plattformen und Codebasen, für die wir Meldungen annehmen:

### Lernplattform

| Version     | Branch         | wird unterstützt | aktive Website           |
| ----------- | -------------- | ---------------- | ------------------------ |
| production  | `prod-current` | Ja               | `freecodecamp.org/learn` |
| staging     | `prod-staging` | Ja               | `freecodecamp.dev/learn` |
| development | `main`         | Nein             |                          |

### Plattform für Publikationen

| Version    | wird unterstützt | aktive Website                           |
| ---------- | ---------------- | ---------------------------------------- |
| production | Ja               | `freecodecamp.org/news`                  |
| localized  | Ja               | `freecodecamp.org/<language>/news` |

### Mobile App

| Version    | wird unterstützt | aktive Website                                                   |
| ---------- | ---------------- | ---------------------------------------------------------------- |
| production | Ja               | `https://play.google.com/store/apps/details?id=org.freecodecamp` |

Außerdem nehmen wir auch Meldungen für Repositories entgegen, die auf GitHub unter der freeCodeCamp-Organisation gehostet werden.

Einige unserer Plattformen hosten wir selbst mit Open-Source-Software wie Ghost & Discourse. Wenn du eine Sicherheitslücke meldest, stelle bitte sicher, dass es sich nicht um einen Fehler in der Originalsoftware handelt.
