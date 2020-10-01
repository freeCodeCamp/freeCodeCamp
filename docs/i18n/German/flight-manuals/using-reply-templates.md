# Antwortvorlagen verwenden

Dies sind einige der Standard-Antwortvorlagen, die Sie bei der Überprüfung von Pull-Requests und Trialing-Problemen verwenden können.

> Du kannst dich mit GitHubs eingebautem [**Gespeicherten Antworten**](https://github.com/settings/replies/) Funktion eigen machen oder die unten stehenden verwenden.

### Vielen Dank

```markdown
Vielen Dank für Ihren Beitrag zu dieser Seite! 👍
Wir freuen uns über diese Änderungen und freuen uns auf zukünftige Beiträge. 🎉
```

### Vielen Dank und Glückwunsch

> Danke und Ermutigung für die erstmaligen Beiträge.

```markdown
Hallo @username. Herzlichen Glückwunsch zu deiner ersten Pull-Request (PR)! 🎉

Vielen Dank für Ihren Beitrag zur Seite! 👍
Wir freuen uns über diese Änderungen und freuen uns auf zukünftige Beiträge. 📝
```

### Build-Fehler

```markdown
Hey @username

Wir würden gerne Ihre Änderungen zusammenführen, aber es sieht so aus, als ob es einen Fehler mit dem Travis CI Build gibt. ⚠️

Sobald Sie diese Probleme gelöst haben, können wir Ihre PR überprüfen und zusammenführen. 😊

--- > Fühlen Sie sich frei, die [Style-Anleitung zum Schreiben von Artikeln zu referenzieren](https://github. om/freeCodeCamp/freeCodeCamp#article-title) für dieses Repository auf die korrekte Formatierung eines Artikels, so dass deine Travis CI Build passt. ✅
>
> Außerdem ist es eine gute Übung auf GitHub um eine kurze Beschreibung Ihrer Änderungen beim Erstellen eines PR zu schreiben. 📝
```

### Fork synchronisieren

> Wenn PR nicht auf dem aktuellen Stand mit dem `Master` Zweig ist.

``````markdown
Hey @username

Wir würden gerne Ihre Änderungen zusammenführen, aber es sieht so aus, als ob es einen Fehler mit dem Travis CI Build gibt. ⚠️

```bash
Fehler: ENOTDIR: kein Verzeichnis, öffnen Sie 'src/pages/java/data-abstraction/index.md'
``````

Dieser spezielle Fehler wurde nicht durch Ihre Datei verursacht, sondern war ein alter Fehler, der durch das Zusammenführen von fehlerhaftem Code in den `master` Zweig verursacht wurde. Seitdem ist es gelöst worden.

Um das Build zu bestehen, müssen Sie die neuesten Änderungen aus dem `Master` Branch des `FreeCodeCamp/freeCodeCamp` Repo synchronisieren.

Mit der Befehlszeile können Sie dies in drei einfachen Schritten tun:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git lock upstream

git pull upstream master
```

Wenn Sie eine GUI verwenden, können Sie einfach `eine neue Fernbedienung hinzufügen...` und verwenden Sie den Link `git://github.com/freeCodeCamp/freeCodeCamp.git` von oben.

Sobald du deinen Fork synchronisiert und den Build abgeschlossen hast, werden wir in der Lage sein, deine PR zu überprüfen und sie zusammenzuführen. 😊

---

> Fühlen Sie sich frei den [Synchronisieren eines Fork-](https://help.github.com/articles/syncing-a-fork/) Artikels auf GitHub zu referenzieren, um mehr Informationen darüber zu erhalten, wie Sie Ihre Fork mit dem Upstream Repository aktuell halten können. 🔄
> 
> Außerdem ist es eine gute Praxis auf GitHub um eine kurze Beschreibung Ihrer Änderungen beim Erstellen eines PR zu schreiben. 📝
``````

### Verschmelzungskonflikte

> Wenn PR Konflikte hat, die gelöst werden müssen.1

```markdown
Hey @username

Wir würden gerne in der Lage sein, Ihre Änderungen zusammenzuführen, aber es sieht so aus, als hätten Sie einige Merge-Konflikte.

```markdown
Hey @username

Wir würden gerne in der Lage sein, Ihre Änderungen zusammenzuführen, aber es sieht so aus, als hätten Sie einige Merge-Konflikte. ⚠️

Sobald Sie diese Konflikte gelöst haben, können wir Ihre PR überprüfen und zusammenführen. 😊

--- > Wenn Sie mit dem Merge Konfliktprozess nicht vertraut sind Schauen Sie sich GitHubs Leitfaden auf ["Merge Contrat"](https://help an. ithub.com/articles/resolving-a-merge-conflict-on-github/). :magnifying_glass_tilted_left :
>
> Außerdem ist es eine gute Übung auf GitHub um eine kurze Beschreibung Ihrer Änderungen beim Erstellen eines PR zu schreiben. 📝
``````
1 Wenn ein Erstmaliger einen Zusammenführungskonflikt hat, werden die Betreuer den Konflikt für sie lösen.

### Duplicate

> Wenn PR wiederholt oder ein Duplikat.

```markdown
Hey @username

Es scheint, dass ähnliche Änderungen bereits früher für diesen Artikel akzeptiert wurden, entschuldigen Sie das. 😓

Wenn du das Gefühl hast, mehr hinzuzufügen, kannst du einen neuen PR öffnen.

Nochmals vielen Dank! 😊

--- > Wenn Sie Fragen haben, wenden Sie sich bitte an [Gitter](https://gitter.im/FreeCodeCamp/Contributors) oder kommentieren Sie unten. 💬
```

### Schließe ungültige Pull-Requests

> Wenn PR ungültig ist.

```markdown
Hey @username

Sie haben keine Inhalte hinzugefügt. Wir schließen diese PR und markieren sie als `invalid`. 😓

Feel free to open another PR! 👍
```