<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# So erstellst du eine Pull Request

## Wie man einen guten Pull Request Titel vorbereitet:

Wenn du eine Pull Request(PR) erstellst, verwende die folgende Tabelle, um zu entscheiden, wie du deine PR im folgenden Format benennen möchtest:
`fix/feat/chore/refactor/docs/perf (scope): PR Title`

Ein Beispiel ist `fix(learn): Fixed tests for the do...while loop challenge`.

| Thema | Dokumentation |
|---|---|
| `learn`,`curriculum` | Für Pull-Requests, die Änderungen an den Herausforderungen des Curriculums vornehmen. |
| `client` | Für Pull-Requests, die Änderungen an der Logik der Clientplattform oder der Benutzeroberfläche vornehmen. |
| `guide` | Für Pull-Requests, die Änderungen an dem Leitfaden vornehmen. |
| `docs` | Für Pull-Requests, die Änderungen an der Projektdokumentation vornehmen. |

## Vorschlag für eine Pull-Request (PR)

1. Sobald die Änderungen bestätigt wurden, wirst du aufgefordert, eine Pull Request auf der GitHub-Seite deines Forks zu erstellen.

    ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. Standardmäßig sollten alle Pull-Requests gegen den `master` Zweig des Hauptrepositories von freeCodeCamp, gerichtet sein.

    Stelle sicher, dass dein `base fork:` auf freeCodeCamp/freeCodeCamp eingestellt ist, wenn du eine Pull-Request auslöst.

    ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. Sende die Pull-Request aus deinem Zweig an den `master` Zweig von freeCodeCamp.

4. Füge im Text deiner PR eine detailliertere Zusammenfassung der von dir vorgenommen Änderungen und den Grund dafür hinzu.

    - Es wird dir eine Pull Request Vorlage angezeigt. Dies ist eine Checkliste, die du vor dem Öffnen der Pull-Request hättest befolgen sollen.

    - Fülle die Details aus, wie es dir passt. Diese Informationen werden überprüft und entschieden, ob deine Pull-Request akzeptiert wird oder nicht.

    - Wenn die PR einen bestehenden Bug/Fehler beheben soll, dann füge am Ende von
      der Beschreibung deiner Pull Request, das Schlüsselwort `closes` und #xxxx an (wobei xxxx
      die Problemnummer darstellt). Beispiel: `closes #1337`. Dies teilt GitHub mit, dass er
      automatisch das bestehende Problem schließt, wenn die PR akzeptiert und zusammengeführt wird.

5. Gebe an, ob du auf einer lokalen Kopie der Website getestet hast oder nicht.

    Das ist sehr wichtig, wenn du Änderungen vornimmst, die nicht nur Änderungen an Textinhalten vornehmen, wie z.B. eine Leitartikelwortwahl. Beispiele für Änderungen, die lokale Tests erfordern, sind JavaScript, CSS oder HTML, die die Funktionalität oder das Layout einer Seite ändern können.
