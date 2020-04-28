<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# So erstellst du einen Pull Request bei uns

## Die richtige Titel-Formatierung für einen guten Pull Request

Wenn du einen Pull Request (PR) erstellst, verwende das folgende Format für den Titel:
`Änderung(Bereich): PR-Titel`

Arten von Änderungen: 'fix', 'feat', 'chore', 'refactor', 'docs' oder 'perf'

| Bereich | Erklärung |
|---|---|
| `learn`,`curriculum` | Für Pull Requests, die Änderungen an den Herausforderungen des Curriculums vornehmen. |
| `client` | Für Pull Requests, die Änderungen an der Logik der Clientplattform oder der Benutzeroberfläche vornehmen. |
| `guide` | Für Pull Requests, die Änderungen an dem Leitfaden vornehmen. |
| `docs` | Für Pull Requests, die Änderungen an der Projektdokumentation vornehmen. |

Ein Beispiel: `fix(learn): Fixed tests for the do...while loop challenge`

## Wichtige Schritte

1. Sobald du die Änderungen committet hast, wirst du aufgefordert, einen Pull Request auf der GitHub-Seite deines Forks zu erstellen.

    ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. Standardmäßig sollten alle Pull Requests gegen den `master` Zweig des Hauptrepositories von freeCodeCamp gerichtet sein.

    Stelle sicher, dass dein `base fork:` auf freeCodeCamp/freeCodeCamp eingestellt ist, wenn du einen Pull Request eingibst.

    ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. Sende den Pull Request aus deinem Zweig an den `master` Zweig von freeCodeCamp.

4. Füge im Text deines PR eine detailliertere Zusammenfassung der von dir vorgenommen Änderungen und den Grund dafür hinzu.

    - Es wird dir eine PR-Vorlage mit Checkliste angezeigt. Fülle sie aus und prüfe nochmal, ob du an alles gedacht hast.

    - Diese Informationen werden überprüft und als Basis für die Entscheidung herangezogen, ob dein Pull Request akzeptiert wird oder nicht.

    - Wenn der PR einen bestehenden Bug/Fehler beheben soll, dann füge am Ende der Beschreibung das Schlüsselwort `closes` und #xxxx an (wobei xxxx die 'Issue'-Nr. darstellt). Beispiel: `closes #1337`. Dadurch schließt GitHub automatisch das bestehende Issue, wenn die PR akzeptiert und zusammengeführt wird.

5. Gebe an, ob du auf einer lokalen Kopie der Website getestet hast oder nicht.

    Das ist sehr wichtig, wenn du Änderungen vornimmst, die nicht die Dokumentation sondern den Code selbst betreffen. Beispiele für Änderungen, die lokale Tests erfordern, sind: JavaScript, CSS und HTML. Diese könnten die Funktionalität oder das Layout einer Seite verändern und müssen daher getestet werden.
