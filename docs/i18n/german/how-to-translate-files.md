# So übersetzt du die Ressourcen von freeCodeCamp

Es ist unser Traum, dir die Ressourcen zum Lernen zur Verfügung zu stellen, egal welche Weltsprache du sprichst. Um uns bei diesem massiven Aufwand zu helfen, haben wir unsere Open-Source Code-Basis & Studienpläne mit [Crowdin](https://crowdin.com/) integriert - Ein Tool, das uns hilft, unsere Code-Basis zu lokalisieren.

Der Übersetzungsworkflow ist in zwei Hauptaktivitäten unterteilt:

- **Übersetzen** von Studienplandateien, Dokumentation und Elementen der Benutzeroberfläche wie Buttons, Labels, etc.:

  Als Übersetzer kannst du dich auf [unserer Übersetzungsplattform](https://translate.freecodecamp.org) anmelden und Übersetzungen in einer der über 30 Sprachen beisteuern, die dort aktiviert sind.

- **Korrekturlesen** der Übersetzungen für alle oben genannten Punkte.

  Korrekturleser überprüfen, ob die von der Community beigesteuerten Übersetzungen einen einheitlichen Ton haben und frei von üblichen Problemen wie Tippfehlern usw. sind. Kurzum, sie sorgen für eine hohe Qualität der Übersetzungen. Beachte, dass wir aus einem gutem Grund keine maschinellen Übersetzungen verwenden.

> [!WARNING] Wir verwenden GitHub nicht mehr, um Dateien direkt zu übersetzen. Wenn du ein zurückgekehrter Helfer bist, gehe stattdessen zu unserer [Übersetzungsplattform](https://translate.freecodecamp.org/).

## Bereite dich auf die Teilnahme vor

> Die freeCodeCamp Lokalisierungs-Roadmap - Es gibt keine Geschwindigkeitsbegrenzungen

Du kannst so viel übersetzen, wie du willst und wann du willst. Es ist nur eine Frage, wie viel Zeit und Energie du bereit bist, als freiwilliger Übersetzer zu investieren.

Wir bitten nur darum, dass du das Folgende verstehst:

1. **Übersetzungen sind eine Teamleistung.**

   Das Übersetzen der freeCodeCamp-Ressourcen ist eine der schönsten und lohnendsten Erfahrungen als Helfer, und es funktioniert am besten, wenn du deine Freunde und Kollegen einbeziehst, die die gleiche Weltsprache sprechen wie du.

   We recommend joining [our community forum](https://forum.freecodecamp.org/c/contributors/3) and [contributors chat room](https://discord.gg/PRyKn3Vbay) with your friends and showing your interest before starting off with translations. Crowdin macht es einfach, Übersetzungen beizusteuern, aber es ist immer noch eine Menge Arbeit.

   Wir wollen, dass du Spaß am Mitmachen hast und nicht ausbrennst oder das Interesse verlierst.

   Eine kleine Gruppe von 4-5 Personen ist eine gute Größe, um mit deiner eigenen Weltsprache zu starten. Du kannst dann noch mehr Freunde für dein Team gewinnen.

2. **Es kostet eine ganze Menge, Server für jede Sprache zu betreiben.**

   Oberflächlich betrachtet mag es nicht so kompliziert erscheinen, wie der technische Stack aufgebaut ist, aber es kostet eine ganze Menge, die Motoren am Laufen zu halten. Dazu gehört auch die Bereitstellung zusätzlicher Server und die Bereitstellung von Personal, das sich um diese kümmert.

   freeCodeCamp.org verpflichtet sich, diese wie immer kostenlos zur Verfügung zu stellen, aber wir müssen die Ressourcen für diejenigen priorisieren, die sie am meisten brauchen. Das Letzte was wir wollen, ist, dass die Server für eine Sprache abgeschaltet werden, wenn die Übersetzungsaktivität nachlässt & die Inhalte veralten.

   Sobald eine Sprache mindestens ein paar Zertifizierungen auf dem Studienplan erreicht hat, können wir damit beginnen, die Sprache live auf [`/learn`](https://www.freecodecamp.org/learn) bereitzustellen, während du weiterhin die verbleibenden Zertifizierungen übersetzt.

   Zum Beispiel würden wir zumindest die gesamte Front-End-Zertifizierungssuite bereitstellen wollen, wenn wir eine neue Weltsprache zum ersten Mal ausliefern.

3. **Aber was ist mit den Sprachen, die nicht auf der Übersetzungsplattform aufgeführt sind?**

   Wir haben uns unsere Benutzerbasis angesehen und die Liste der aktivierten Sprachen auf der Übersetzungsplattform um mehr als 30 der am häufigsten gesprochenen Sprachen erweitert. Einige Sprachen, wie z. B. Chinesisch und Spanisch, sind zu diesem Zeitpunkt bereits auf **"/learn"** live geschaltet.

   Leider umfasst die Liste nicht alle Sprachen, die es gibt. Wir bekommen jeden Tag dutzende von Anfragen von Unterstützern wie dir, die helfen wollen, die Seite in eine Sprache zu übersetzen, die sie sprechen.

   Wir freuen uns auf jeden Fall darauf, die Liste um weitere Sprachen zu erweitern, aber wie du dir vielleicht schon denken kannst, wäre das nur machbar, wenn wir genug Beteiligung für eine Weltsprache bekommen.

   Wenn du möchtest, dass wir eine neue Weltsprache aufnehmen, empfehlen wir dir, deine Freunde dafür zu begeistern.

   Sobald du eine kleine Gruppe von Leuten hast (mindestens 4-5), die interessiert sind und sich engagieren, können wir einen Versuch starten. Wir erklären dir alle Details und führen dich durch einige der Tools und Prozesse.

## Erste Schritte

First, make sure you come say "Hi" in our [contributors chat room](https://discord.gg/PRyKn3Vbay). Wir posten regelmäßig Updates über Übersetzungsressourcen und beantworten dort deine Fragen.

Als nächstes gehst du zu unserer [Übersetzungsplattform](https://translate.freecodecamp.org/) und loggst dich ein (wenn du noch nie an Übersetzungen mitgewirkt hast, musst du einen Account erstellen).

Nachfolgend findest du eine ausführliche Anleitung, die dir dabei hilft, die dir zur Verfügung stehenden Übersetzungswerkzeuge und Arbeitsabläufe zu verstehen.

Viel Spaß beim Übersetzen.

## Wähle ein Projekt und eine Datei

Sobald du die Übersetzungsplattform besuchst, solltest du mehrere "Projekte" sehen, die zur Übersetzung verfügbar sind:

1. [Contributing documentation](https://translate.freecodecamp.org/contributing-docs) - Projekt, das die Dateien für diese Dokumentationsseite enthält.
2. [Coding Curriculum](https://translate.freecodecamp.org/curriculum) - Projekt, welches unsere Aufgabendateien für unseren Studienplan enthält.
3. [Benutzeroberfläche](https://translate.freecodecamp.org/learn-ui) - Projekt, das Zeichenfolgen für UI-Elemente wie Buttons, Labels, etc. für unsere Lernplattform enthält.

Wähle ein beliebiges Projekt aus, zu dem du beitragen möchtest, und du wirst eine Liste der verfügbaren Sprachen für die Übersetzung sehen.

![Bild - Liste der verfügbaren Sprachen](https://contribute.freecodecamp.org/images/crowdin/languages.png)

Wähle die Sprache aus, an der du arbeiten möchtest, und du siehst den kompletten Dateibaum.

![Bild - Liste der verfügbaren Dateien](https://contribute.freecodecamp.org/images/crowdin/file-tree.png)

Für jede Datei und jeden Ordner wird ein Fortschrittsbalken angezeigt. Der **blaue** Teil des Fortschrittsbalkens zeigt an, wie viel Prozent der Datei bereits übersetzt wurde, während der **grüne** Teil des Fortschrittsbalkens anzeigt, wie viel Prozent der Datei vom Korrekturleseteam genehmigt wurde.

Wähle eine Datei aus, an der du arbeiten möchtest und Crowdin öffnet die Editor-Ansicht.

> [!NOTE] Wenn sich die Editoransicht öffnet, musst du auf das Einstellungssymbol klicken (dargestellt als Zahnrad) und die Einstellung 'HTML tags displaying' auf 'SHOW' umstellen. Dadurch wird sichergestellt, dass du Tags wie `<code></code>` statt `<0></0>` sehen kannst.

## Studienpläne übersetzen

![Bild - Editoransicht](https://contribute.freecodecamp.org/images/crowdin/editor.png)

Crowdin trennt ein Dokument in übersetzbare "Strings", normalerweise Sätze. Jeder String wird einzeln übersetzt. Siehe Bild oben:

1. Eine grün hervorgehobene Zeichenfolge hat bereits eine vorgeschlagene Übersetzung.
2. Eine rot markierte Zeichenfolge hat _keine_ vorgeschlagene Übersetzung.
3. Ein String mit ausgegrautem Text kann nicht übersetzt werden. Dies ist der Fall bei Codeblöcken und anderen Inhalten, die nicht übersetzt werden dürfen. Du wirst diese Zeichenfolgen im Editor nicht auswählen können.
4. Wenn ein Mitwirkender eine Übersetzung für einen String vorgeschlagen hat, zeigt Crowdin den Vorschlag hier an. Du kannst eine identische Übersetzung nicht speichern - stattdessen solltest du, wenn eine Übersetzung korrekt ist, auf das `+` Symbol klicken, um sie "hochzuvoten". Eine ungenaue Übersetzung kann mit dem `-` Icon "heruntergevoted" werden.
5. Crowdin empfiehlt Übersetzungen, die auf Translation Memory (TM) oder Machine Translation (MT) basieren. Translation Memory bezieht sich auf ähnliche oder identische Strings, die wir in anderen Dateien übersetzt/freigegeben haben. Machine Translation bezieht sich auf Übersetzungen, die von der in Crowdin integrierten Bibliothek empfohlen werden.
6. Dies ist der Editorbereich, in dem du deinen Übersetzungsvorschlag für den ausgewählten String schreiben kannst.
7. Der aktuell im Editor ausgewählte String wird gelb hervorgehoben.
8. Hier siehst du Tags, die den Zustand des Strings anzeigen. `Done` bedeutet, dass der String mindestens eine vorgeschlagene Übersetzung hat. `Todo` bedeutet, dass der String keine Übersetzungsvorschläge hat.
9. Hier siehst du das Fenster für die Kommentare. Wenn du Fragen oder Bedenken zu einem bestimmten String hast, kannst du hier einen Kommentar zu dem String hinterlassen, den andere Übersetzer sehen können.
10. Diese beiden Buttons blenden die linke (Dokument-) und rechte (Kommentar-) Ansicht aus.

> [!NOTE] If you see a hidden string that includes translations, please notify us in the [contributors chat room](https://discord.gg/PRyKn3Vbay) so we can remove the translation from memory.

Wenn du eine Übersetzung für einen String fertiggestellt hast, wähle den `Save` Button, um deine Übersetzung auf Crowdin zu speichern. Andere Mitwirkende können dann über deine Übersetzung abstimmen und Korrekturleser können sie genehmigen.

Du kannst so viele Strings übersetzen, wie du möchtest - es sind keine zusätzlichen Schritte erforderlich, wenn du eine vollständige Datei fertigstellst oder eine neue Übersetzung vorschlägst. Ein Klick auf den `Save` Button ist alles, was nötig ist, um eine Übersetzung zu speichern.

> [!NOTE] Wenn du in der englischen Quelldatei etwas siehst, das ungenau oder falsch ist, korrigiere es bitte nicht im Rahmen des Übersetzungsprozesses. Hinterlasse stattdessen einen Kommentar zu dem String, um uns auf die Unstimmigkeit hinzuweisen, oder erstelle ein Issue auf GitHub.

## Dokumentation übersetzen

Die Übersetzung unserer Dokumentation für Helfer ist ein ähnlicher Prozess wie die Übersetzung unserer Studienplan-Dateien.

> [!NOTE] Unsere Dokumentation wird von `docsify` unterstützt, und wir haben ein spezielles Parsing für Nachrichtenboxen wie diese hier. Wenn du Zeichenfolgen siehst, die mit `[!NOTE]`, `[!WARNING]`, oder `[!TIP]` beginnen, sollten diese Wörter NICHT übersetzt werden.

### How to translate documentation with internal links

When you work on translating contributing documentation, watch out for internal links targeting a different section of the documentation.

Make sure to replace the id of the target section (the part after `#`) with the id on the translated document. For example, it will look like this in Japanese:

Before translation

```
// in HTML
<a href="target-file-name.md#target-section-heading-id">Link text</a>
<a href="#target-section-heading-id">Link text</a>

// in Markdown
[Link text](target-file-name.md#target-section-heading-id)
[Link text](#target-section-heading-id)
```

After translation

```
// in HTML
<a href="target-file-name.md#翻訳後の-id">翻訳後のリンクテキスト</a>
<a href="#翻訳後の-id">翻訳後のリンクテキスト</a>

// in Markdown
[翻訳後のリンクテキスト](target-file-name.md#翻訳後の-id)
[翻訳後のリンクテキスト](#翻訳後の-id)
```

The actual files in docs are written in Markdown, but they will appear as HTML tags on Crowdin.

You can find out how `docsify` converts a string in your language into an id by looking into the translated pages. If the translation is not deployed yet, you can preview it by [running the docs site locally](how-to-work-on-the-docs-theme.md#serving-the-documentation-site-locally).

You can learn more about [internal links in our docs here](how-to-work-on-the-docs-theme.md#how-to-create-an-internal-link).

## Übersetze das LearnToCode RPG

The LearnToCode RPG runs on Ren'Py, which uses special syntax for translated strings: (See [Ren'Py Text documentation](https://www.renpy.org/doc/html/text.html))

- Die zu übersetzenden Sätze stehen immer zwischen `""`. Dies sind Dialoge oder Strings der Benutzeroberfläche. Die Schlüsselwörter, die vor oder nach dem Dialog stehen, sind Schlüsselwörter zur Steuerung der Spiel-Engine und werden in den nachfolgenden Regeln genauer erklärt. Beachte, dass diese erste Regel für alle nachfolgenden Regeln gilt.
- Im Falle von `new "..."` übersetze nicht das Schlüsselwort `new`.
- Präfixe wie `player`, `annika`, `layla`, `marco` (oder Varianten wie `player happy`, `player @ happy`) sollten nicht übersetzt werden. Dies sind Steuerschlüsselwörter, um das Charakter-Sprite im Spiel korrekt anzuzeigen.
- Postfixe wie `nointeract` sollten nicht übersetzt werden.
- Übersetze keine Dinge zwischen `[]` und `{}`. Dies sind variable Interpolationen und Text-Tags. Diese müssen in halber Breite Klammern `[]` und `{}` bleiben, anstatt ihrer Gegenstücke in voller Breite `【】` und `「」`
- Das Schlüsselwort `nointeract` am Ende des Satzes darf nicht übersetzt werden.
- Wenn wir versuchen, Klammern in voller Breite `（）` zu verwenden, wird eine QA-Warnung angezeigt. Um die QA-Warnung zu vermeiden, verwende Klammern mit halber Breite `()`

### Examples

---

#### Vor der Übersetzung

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."  <--- this is the line that needs to be translated. see translation below
```

#### Nach der Übersetzung

```renpy
# "[player_name]? What a coincidence! Our VIP team member {a=[vip_profile_url]}[player_name]{/a} will be honored to hear that."
"[player_name]？好巧，我们的VIP队友{a=[vip_profile_url]}[player_name]{/a}会很高兴的。"
```

Note: The `[]` and `{}` tags should be left intact.

---

#### Vor der Übersetzung

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} Skip" <-- translate this line, see below
```

#### Nach der Übersetzung

```renpy
old "{icon=icon-fast-forward} Skip"
new "{icon=icon-fast-forward} 跳过"
```

Note: Again, the `new` prefix and the `{icon=icon-fast-forward}` tag should be left intact.

---

#### Vor der Übersetzung

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
```

#### Nach der Übersetzung

```renpy
# layla @ neutral "Hehe, [player_name], you are a fun one. I'm sure you will enjoy your work as a developer."
layla @ neutral "哈哈，[player_name]，你真有趣。我相信你一定会喜欢你的开发者工作的。"
```

Note: `layla @ neutral` and `[player_name]` are left unchanged.

---

#### Vor der Übersetzung

```renpy
# player "Maybe this is all a dream?" nointeract
player "Maybe this is all a dream?" nointeract
```

#### Nach der Übersetzung

```renpy
# player "Maybe this is all a dream?" nointeract
player "也许这都是一场梦？" nointeract
```

---

### A Note on How Crowdin Segments a Sentence

Pay attention to how Crowdin segments a line of dialogue wrapped between opening and closing quotes `""`. When we are translating the dialogue, we need to make sure to retain the opening and closing quotes, even if the quotes appear in different segments.

This is the line to be translated:

```renpy
player @ surprised "{b}Full-stack{/b}... What is that? I better take notes so I can learn more about it."
```

Crowdin segments it into three parts like below:

<img width="836" alt="Screen Shot 2022-01-23 at 10 36 43" src="https://user-images.githubusercontent.com/35674052/150693962-d3b091e5-2432-44d0-9d24-195ea7d7aeda.png" />

```renpy
# original
player @ surprised "{b}Full-stack{/b}
# translated, keeping the opening quotes `"`
player @ surprised "{b}全栈{/b}
```

<img width="750" alt="Screen Shot 2022-01-23 at 10 36 49" src="https://user-images.githubusercontent.com/35674052/150693965-15411504-791a-4db3-8b14-bc9177be6375.png" />

```renpy
# original
What is that?
# translated, no quotes on either side
这是什么？
```

<img width="857" alt="Screen Shot 2022-01-23 at 10 36 54" src="https://user-images.githubusercontent.com/35674052/150693969-062e3268-580f-4ad2-97db-cab6240b6095.png" />

```renpy
# original
I better take notes so I can learn more about it."
# translated, keeping the closing quotes `"`
我最好做笔记，这样我可以学习更多东西。"
```

## Übersetzungen bewerten

Crowdin allows you to rate the existing proposed translations. If you attempt to save a translation, you may see a message indicating that you cannot save a duplicate translation - this means another contributor has proposed that identical translation. If you agree with that translation, click the `+` button to "upvote" the translation.

If you see a translation that is inaccurate or does not provide the same clarity as the original string, click the `-` button to "downvote" the translation.

Crowdin uses these votes to give a score to each proposed translation for a string, which helps the proofreading team determine which translation is the best fit for each string.

## Qualitätssicherungskontrollen

We have enabled some quality assurance steps that will verify a translation is as accurate as possible - this helps our proofreaders review proposed translations.

When you attempt to save a translation, you may see a warning message appear with a notification regarding your proposed translation.

![Image - QA Warning Message](https://contribute.freecodecamp.org/images/crowdin/qa-message.png)

This message appears when Crowdin's QA system has identified a potential error in the proposed translation. In this example, we have modified the text of a `<code>` tag and Crowdin has caught that.

> [!WARNING] Du hast die Möglichkeit, eine Übersetzung trotz Fehlern zu speichern. Wenn du das tust, indem du auf "Save Anyway" klickst, solltest du auch einen Korrekturleser oder Projektmanager markieren und erklären, warum die QA-Meldung in diesem Fall ignoriert werden muss.

## Bewährte Praktiken bei der Übersetzung

Follow these guidelines to ensure our translations are as accurate as possible:

- Übersetze nicht den Inhalt innerhalb der `<code>`-Tags. Diese Tags kennzeichnen Text, der im Code vorkommt und in Englisch belassen werden sollte.
- Füge keine zusätzlichen Inhalte hinzu. Wenn du der Meinung bist, dass eine Aufgabe Änderungen am Textinhalt oder zusätzliche Informationen erfordert, solltest du die Änderungen in einem Issue auf GitHub oder in einem Pull Request vorschlagen, der die englische Datei ändert.
- Ändere nicht die Reihenfolge des Inhalts.

If you have any questions, feel free to reach out to us in our [contributors chat room](https://discord.gg/PRyKn3Vbay) and we will be happy to assist you.
