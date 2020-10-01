# Das offizielle FreeCodeCamp Moderator Handbuch.

Dies wird dir helfen, verschiedene Orte in unserer Community zu moderieren, einschließlich:

- GitHub Tickets & Pull-Requests
- Das Forum, Chat-Räume, Facebook-Gruppen und andere Online-Treffpunkte
- Persönliche Veranstaltungen wie Lerngruppen, Hackathonen und Konferenzen

**Alle FreeCodeCamp Moderatoren sind Community-Moderatoren. Das bedeutet, dass wir darauf vertrauen, dass Sie diese Orte beaufsichtigen.**

Dies bedeutet, dass Sie als Moderator an jedem Ort fungieren können, der für Sie am meisten interessant ist. Einige Moderatoren helfen gerade auf GitHub weiter. Andere helfen nur im Forum. Einige Moderatoren sind überall aktiv.

Unterm Strich möchten wir, dass du ein Moderator bist und investieren Sie Ihre knappe Zeit an Orten, die für Sie von Interesse sind.

> [!HINWEIS] "Mit großer Macht kommt große Verantwortung." - Onkel Ben

Als Moderator ist Temperament wichtiger als technische Fähigkeiten.

Hören Sie zu. Sei Helpful. Beschützen Sie nicht Ihre Macht.

freeCodeCamp ist eine integrative Community und wir müssen es so halten.

Wir haben einen einzigen Verhaltenskodex, der unsere gesamte Gemeinschaft regelt. Je weniger Regeln gelten, desto leichter können sie sich daran erinnern. Sie können diese Regeln lesen und sie in den Speicher [hier eintragen](https://code-of-conduct.freecodecamp.org).

# Moderating GitHub

Moderatoren haben die Möglichkeit, Probleme zu schließen und Pull-Requests anzunehmen oder zu schließen.

Moderatoren haben zwei Hauptverantwortungen in Bezug auf GitHub:

1. Pull-Requests vereinen und zusammenführen
2. Auswerten und Antworten auf Probleme

## Pull-Requests moderieren

Pull Requests (PRs) sind die Art, wie Beitragende Änderungen an FreeCodeCamps Repository einreichen. Es ist wichtig, dass wir die Qualitätssicherung (QA) auf Pull-Requests durchführen, bevor wir entscheiden, ob wir sie zusammenführen oder schließen.

### Pull-Requests Typen

1. **Challenge Instruction Bearbeitungen** Dies sind Änderungen am Text der Herausforderungen - die Beschreibung, Anleitung oder Testtext. Du kannst diese Rechte auch auf GitHub überprüfen und entscheiden, ob du sie zusammenführen möchtest. Wir müssen etwas vorsichtiger damit umgehen, denn Millionen von Menschen werden auf diesen Text stoßen, wenn sie durch den kostenlosen CodeCamp Lehrplan arbeiten. Macht der Pull-Request den Text klarer, ohne ihn noch länger zu machen? Sind die Änderungen relevant und nicht zu pedantisch? Denken Sie daran, dass unser Ziel ist, die Herausforderungen so klar und so kurz wie möglich zu gestalten. Sie sind nicht der Ort für obskure Details. Außerdem können Mitwirkende versuchen, Links zu Ressourcen zu den Herausforderungen hinzuzufügen. Sie können diese Pull-Requests schließen und darauf antworten:

   > Vielen Dank für Ihre Pull-Anfrage.
   > 
   > Ich schließe diesen Pull-Antrag ab. Bitte fügen Sie stattdessen Links und andere Details zum entsprechenden Anleitungsartikel der Challenge hinzu.
   > 
   > Wenn du denkst, dass ich bei der Schließung dieses Themas falsch bin, öffne es bitte erneut und füge weitere Erläuterungen hinzu. Vielen Dank und glückliche Kodierung.

2. **Challenge Code Bearbeitung** Dies sind Änderungen an dem Code in einer Challenge Seed, Challenge Lösung und Test Strings. Diese Pull-Requests müssen von GitHub nach unten gezogen und auf Ihrem lokalen Computer getestet werden, um sicherzustellen, dass die Challenge-Tests mit der aktuellen Lösung weiterhin bestehen können und der neue Code führt zu keinen Fehlern. Einige Mitwirkende können versuchen, zusätzliche Tests hinzuzufügen, um pedantische Eckfälle abzudecken. Wir müssen aufpassen, dass die Herausforderung nicht zu kompliziert wird. Diese Herausforderungen und ihre Tests sollten so einfach und intuitiv wie möglich sein. Neben den Algorithmus-Herausforderungen und der Vorab-Sektion sollten die Lernenden in der Lage sein, jede Herausforderung innerhalb von etwa 2 Minuten zu lösen.

3. **Codebase ändert** Diese Code-Änderungen ändern die Funktionalität der FreeCodeCamp-Plattform selbst. Manchmal versuchen die Mitwirkenden ohne viel Erklärung Änderungen vorzunehmen, aber für Änderungen des Codes müssen wir sicherstellen, dass die Änderungen wirklich notwendig sind. Diese Pull Requests sollten also auf ein bestehendes GitHub Problem verweisen, bei dem die Gründe für die Änderung diskutiert werden. Dann können Sie die Pull-Requests auf Ihrem Computer öffnen und sie lokal testen. Wenn die Änderungen gut aussehen, werden sie noch nicht zusammengeführt. Du kannst den Pull-Request kommentieren und dann @raisedadead erwähnen, damit er einen letzten Blick werfen kann.

### Pull-Requests zusammenführen oder schließen

Zunächst einmal sollten Sie sich, wenn Sie einen Pull-Request für die QA wählen, dieser zuordnen. Sie können dies tun, indem Sie auf den Link "sich selbst zuweisen" unten auf der rechten Spalte des GitHub Interfaces klicken.

Je nach Art der Pull-Request-Anforderung folgen Sie den oben aufgeführten Regeln.

Bevor Sie einen Pull-Request zusammenführen, stellen Sie sicher, dass GitHub grüne Prüfzeichen für alles hat. Wenn es X gibt, erkundigen Sie diese zuerst und finden Sie heraus, wie Sie diese zuerst in grüne Markierungen umwandeln können.

Manchmal wird es einen Fusionskonflikt geben. Dies bedeutet, dass ein anderer Pull-Request eine Änderung an diesem exakten Teil derselben Datei vorgenommen hat. GitHub hat ein Werkzeug, um diese Fusionskonflikte direkt auf GitHub anzugehen. Sie können versuchen, diese Konflikte anzugehen. Nutzen Sie einfach Ihr bestes Urteil. Die Änderungen der Pull-Requests sind oben und die Änderungen des Master-Zweiges werden unten angezeigt. Manchmal wird es dort überflüssige Informationen geben, die gelöscht werden können. Bevor Sie fertig sind, löschen Sie bitte `<<<<<<`, `======`, und `>>>>>>>` , die Git zu Konfliktzonen hinzufügt.

Wenn der Pull-Request zum Zusammenführen bereit aussieht (und keine Genehmigung von @raisedadead benötigt), können Sie ihn zusammenführen. Bitte verwenden Sie die Standardfunktionalität "Squash and Merge" auf GitHub. Dies wird alle Pull Requests in einen einzigen Commit einbinden, was die Git Historie viel einfacher zu lesen macht.

Sie sollten dann den Pull Request kommentieren, dem Beitragenden auf Ihre persönliche Art und Weise danken.

Wenn der Autor des Pull-Requests ein "Erstmaliger Beitrag" ist, sollten Sie ihn auch zu ihrem ersten verschmelzten Pull-Request in das Repository beglückwünschen. Sie können sich die obere rechte Ecke des PR ansehen, um einen erstmaligen Beitragenden zu ermitteln.  Es wird `erste Beitragszahler` wie unten angezeigt:

![Copy_edits_for_Java_arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCamp|690x281](https://i.imgur.com/dTQMjGM.png)

Wenn der Pull-Request nicht bereit zur Zusammenführung ist, kannst du höflich antworten und dem Autor sagen, was er tun sollte, um es fertig zu bekommen. Hoffentlich werden sie antworten und ihre Pull-Anfrage näher an sie heranbringen.

Oft wird ein Pull-Request offensichtlich wenig Aufwand sein. Sie können dies oft sofort sagen, wenn der Beitragende sich nicht die Mühe gemacht hat, die Kontrollkästchen im Pull-Request Template anzukreuzen, oder verwendet einen generischen Pull-Request-Titel wie "Änderungen gemacht" oder "Aktualisierungsindex.

Es gibt auch Situationen, in denen der Beitragende versucht, einen Link zu seiner eigenen Website hinzuzufügen oder eine Bibliothek, die sie selbst erstellt haben, einbinden oder eine leichtsinnige Bearbeitung haben, die niemandem außer sich selbst hilft.

In beiden dieser Situationen sollten Sie ihre Pull-Request schließen und mit dieser Standardnachricht antworten:

> Vielen Dank für das Öffnen dieser Pull-Anfrage.
> 
> Dies ist eine Standardnachricht, die dich darüber informiert, dass wir deine Pull-Requests überprüft haben und beschlossen haben, sie nicht zusammenzuführen. Wir würden uns freuen, wenn Sie sich bei uns melden.
> 
> Vielen Dank und glückliche Kodierung.

Wenn Sie eine zweite Meinung zu einem Pull-Request benötigen, gehen Sie voran und hinterlassen Sie Ihre Kommentare zum Pull-Request dann fügen Sie das "Diskussion"-Label dem Pull-Request hinzu.

## Probleme mit GitHub moderieren

freeCodeCamp ist ein aktives Open Source Projekt. Wir bekommen jeden Tag neue Themen, die alle verdreifacht und gekennzeichnet werden müssen.

### Typen von GitHub Problemen

1. **Code-Hilfe-Anfragen**, für die Leute fälschlicherweise GitHub Probleme erstellt haben. Wenn jemand um Hilfe bittet, fügen Sie die folgende Nachricht ein, dann schließen Sie das Problem.

   > Vielen Dank, dass Sie dieses Problem gemeldet haben.
   > 
   > Dies ist eine Standardnachricht, die Sie darüber informiert, dass dieses Problem eine Bitte um Hilfe zu sein scheint. Anstatt hier um Hilfe zu bitten, klicken Sie bitte auf den \*"Hilfe"\*\* Button auf der Challenge auf FreeCodeCamp, die Ihnen helfen wird, eine Frage im richtigen Teil des Forums zu erstellen. Freiwillige im Forum antworten in der Regel innerhalb weniger Stunden auf Fragen und können dabei helfen, herauszufinden, ob es ein Problem mit deinem Code oder den Tests der Challenge gibt.
   > 
   > Wenn die Forumsmitglieder feststellen, dass nichts mit Ihrem Code zu tun hat, können Sie die Wiedereröffnung dieses Problems beantragen. 
   > 
   > Vielen Dank und glückliche Kodierung.

2. **Fehler oder Klärungsprobleme** Versuchen Sie, den Fehler selbst zu reproduzieren, wenn Sie können. Falls nicht, bitte sie um die Schritte, um den Fehler zu reproduzieren und ob sie Screenshots haben, Videos oder zusätzliche Details, die Ihnen helfen können, das Problem zu reproduzieren. Sobald Sie das Problem reproduzieren können - oder zumindest bestätigen, dass es ein legales Problem ist - bezeichnen Sie es `bestätigt`. Dann:

- Wenn es eine einfache Änderung an einer bestehenden Herausforderung ist, benennen Sie nur `erste Timer`, sonst wird eine Bezeichnung als `hilfe gesucht`. Andere Labels verwenden, wie es zutrifft.
- Wenn das Problem wichtiger ist, Flagge als `Bug`. &nbsp; Wenn es irgendwelche Unklarheiten bezüglich der richtigen Vorgehensweise bei einem Thema gibt Sie können @raisedadead zu diesem Thema markieren und dann den `Discussing` Label hinzufügen.

3. **Probleme duplizieren** Wenn ein Problem mit einem anderen gemeldeten Problem identisch ist, sollte das zuvor gemeldete Problem Vorrang haben. Als `duplizieren`markieren, fügen Sie die folgende Nachricht ein und ersetzen Sie `#XXXXX` mit der Ticketnummer, dann schließen Sie das Problem.

   > Vielen Dank, dass Sie dieses Problem gemeldet haben.
   > 
   > Dies ist eine Standardnachricht, die dich darüber informiert, dass dieses Problem sehr ähnlich zu sein scheint wie das Problem #XXXXX, also schließe ich es als Duplikat.
   > 
   > Wenn du denkst, dass ich bei der Schließung dieses Themas falsch bin, öffne es bitte erneut und füge weitere Erläuterungen hinzu. Vielen Dank und glückliche Kodierung.

4. **Behoben in Staging** Einige Probleme wurden möglicherweise bereits in der Stagnation behoben, haben aber kein GitHub-Problem damit verknüpft. Wenn dies der Fall ist, können Sie folgende Nachricht einfügen, das Problem schließen und einen `-Status hinzufügen: gelöst/versand` Label:

   > Vielen Dank, dass Sie dieses Problem gemeldet haben.
   > 
   > Dies ist eine Standardnachricht, die Sie darüber informiert, dass das Problem, das Sie hier erwähnt haben, in der Produktion vorhanden ist aber dass es bereits in der Stagierung fixiert ist. Das bedeutet, dass das nächste Mal, wenn wir unseren Produktionszweig zur Produktion drängen, dieses Problem behoben werden sollte. Aus diesem Grund schließe ich dieses Problem.
   > 
   > Wenn du denkst, dass ich bei der Schließung dieses Themas falsch bin, öffne es bitte erneut und füge weitere Erläuterungen hinzu. Vielen Dank und glückliche Kodierung.

### Schließen von veralteten, inaktiven Issues und Pull-Requests

- Alte Probleme oder PRs sind diejenigen, die seit 21 Tagen keine Aktivität der OP gesehen haben (3 Wochen ab der letzten Aktivität), aber erst nachdem ein Moderator mehr Informationen oder Änderungen angefordert hat.  Diese können in einem automatisierten /Bot-Skript oder von den Moderatoren selbst geschlossen werden.

- Aktivität ist definiert als: Kommentare, die eine Aktualisierung des PR anfordern und Triages wie `Status: Update benötigt` Label etc.

- Wenn die OP um zusätzliche Hilfe oder sogar Zeit bittet, kann die obige Seite entspannt und nach einer Antwort erneut besucht werden. Auf jeden Fall sollten die Mods ihr bestes Urteil dazu verwenden, den Status der ausstehenden PR-Partei zu lösen.

### Andere Richtlinien für Moderatoren auf GitHub

Obwohl Sie Schreibzugriff auf FreeCodeCamps Repository haben werden, **sollten Sie niemals Code direkt in FreeCodeCamp Repositories** drücken. Der gesamte Code sollte die codebase von freeCodeCamp in Form eines Pull-Requests aus einer Fork des Projektarchivs eingeben.

Außerdem sollten Sie niemals Ihre eigenen PRs akzeptieren. Sie müssen QA'd von einem anderen Moderator sein, genau wie bei jedem anderen PR auch.

Wenn du bemerkst, dass jemand den [-Verhaltenskodex](https://code-of-conduct.freecodecamp.org) bei GitHub gebrochen hat oder Pull Requests mit böswilligen Inhalten oder Code öffnen, E-Mail dev@freecodecamp.

# Forum moderieren

Als Moderator helfst du unsere Community zu einem angenehmen Ort für alle zu lernen und Hilfe zu bekommen. Sie behandeln markierte Beiträge und behandeln Spam, Offtopic und andere unpassende Unterhaltungen.

Beachten Sie, dass, sobald du ein Moderator im Forum bist, du den blauen Moderator Hinweis über die Mitglieder des Forums sehen wirst wie "Das ist das erste Mal, dass [person] gepostet hat - wir begrüßen sie in der Community! oder "[person] hat nicht in langer Zeit gepostet - lass uns sie willkommen heißen."

![Eine blaue Textnachricht mit "dies ist das erste Mal [person] gepostet - wir begrüßen sie in der Community!](https://i.imgur.com/mPmVgzK.png)

Dies sind Gelegenheiten für Sie, sie willkommen zu heißen und ihnen ein besonderes Gefühl zu geben. Du weißt nie, welche Person am Rande beteiligt ist, wird unser nächster Superhelfer, der vielen anderen Menschen bei ihrer Kodierungsreise hilft. Selbst die kleinste Güte kann eine Kaskade guter Taten auslösen.

### Lösche Forenbeiträge

Forumsmoderatoren haben die Möglichkeit, Benutzerbeiträge zu löschen. Sie sollten dies nur für die folgenden Instanzen tun:

1. Jemand hat ein pornografisches oder grafisch gewalttätiges Bild veröffentlicht.
2. Jemand hat einen Link oder einen Code veröffentlicht, der schädlich ist und könnte anderen Campern, die darauf klicken, Schaden zufügen.
3. Jemand hat einen Thread mit vielen Spam-Nachrichten überflutet.

### Umgang mit Spam

Für den ersten Spam Beitrag eines Benutzers, senden Sie ihm eine Nachricht, die das Problem erklärt, und entfernen Sie den Link oder post wie angemessen. Hinterlassen Sie einen Hinweis auf das Profil des Benutzers, in dem Sie die von Ihnen ergriffene Aktion erklären. Wenn das Problem weiterhin besteht, dann folgen Sie dem obigen Prozess. Den Benutzer leise daran hindern, Beiträge zu veröffentlichen (Benutzer-Admin-Panel), dann eine Warnung mit dem Code of Conduct senden. Aktivieren Sie das Kästchen in der privaten Nachricht, um anzugeben, dass Ihre Nachricht eine "formale Warnung" ist.

Sie können Fragen stellen und Vorfälle im [Forum Bereich](https://forum.freecodecamp.com/c/staff) melden.

### Umgang mit Themen außerhalb des Themas

Beiträge oder Themen, die an der falschen Stelle zu sein scheinen, können neu kategorisiert oder umbenannt werden, was angemessen wäre.

Unter außergewöhnlichen Umständen kann es sinnvoll sein, dass ein Moderator eine Diskussion in mehrere Threads überträgt.

Nochmals, wenn du irgendwelche Probleme oder Fragen hast, mache einen Beitrag mit deinen Aktionen in der Personal-Kategorie, und markiere einen anderen Moderator, wenn du möchtest, dass er deine moderierenden Aktionen überprüft.

### Minderwertige Benutzer

Unsere Nutzungsbedingungen verlangen, dass FreeCodeCamp-Nutzer mindestens 13 Jahre alt sind. Falls ein Benutzer erkennt, dass er unter 13 Jahre alt ist Senden Sie ihnen die folgende Nachricht und löschen Sie ihr Forum-Konto (wenn die Löschung nicht verfügbar ist, ist die Sperrung des Kontos ausreichend). Senden Sie dann eine E-Mail an [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) oder [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org), um auch den kostenlosen CodeCamp-Account des Benutzers zu löschen.

```markdown
SUBJEKT: Benutzer unter 13 dürfen das Forum nicht pro Nutzungsbedingungen

nutzen. Es ist uns aufgefallen, dass Sie jünger als 13 Jahre sind. Nach den [FreeCodeCamp Nutzungsbedingungen](https://www.freecodecamp.org/news/terms-of-service) musst du mindestens 13 Jahre alt sein, um die Seite oder das Forum zu nutzen. Wir werden sowohl deinen FreeCodeCamp-Account als auch deinen Forum-Account löschen. Diese Einschränkung hält uns in Übereinstimmung mit den Gesetzen der Vereinigten Staaten.

Bitte melde dich erneut an, sobald du mindestens 13 Jahre alt bist.

Vielen Dank für Ihr Verständnis.
```

# Facebook moderieren

If you see anything that seems to break our [Code of Conduct](https://code-of-conduct.freecodecamp.org/), you should delete it immediately.

Manchmal werden Leute Dinge posten, die sie für lustig halten. Sie wissen nicht, dass das, was sie gesagt haben oder was sie gemeinsam haben, als beleidigend interpretiert werden kann. In diesen Fällen sollte ihr Beitrag gelöscht werden, aber die Person, die ihn gepostet hat, muss nicht unbedingt verboten werden. Durch die Streichung ihres Beitrags werden sie hoffentlich verstehen, dass das, was sie gepostet haben, unangemessen war.

Aber wenn es eine ungeheuerliche Beleidigung ist, die nicht vernünftigerweise einem kulturellen Unterschied oder einem Missverständnis der englischen Sprache zugeschrieben werden kann. dann sollten Sie unbedingt erwägen, das Mitglied aus der Facebook-Gruppe zu blockieren.

# Moderiere Discord

Hier ist, wie Moderatoren mit Verstößen gegen unseren [Code of Conduct](https://code-of-conduct.freecodecamp.org/) auf Discord umgehen:

1. **Stellen Sie sicher, dass es den Verhaltenskodex verletzen sollte.** Nicht alle Verstöße gegen den Kodex waren als solcher beabsichtigt. Ein neuer Camper könnte eine große Menge Code für Hilfe veröffentlichen, ohne zu wissen, dass dies als Spam angesehen werden kann. In diesen Fällen können Sie sie einfach bitten, ihren Code mit Diensten wie Codepen oder Pastebin einzufügen.

2. **Wenn der Camper eindeutig gegen den Verhaltenskodex verstößt, wird der Moderator wie folgt vorgehen:**

- Den angreifenden Camper unterbrechen, aber nicht warnen oder bedrohen. Stattdessen gibt ihnen stillschweigend die unterbrochene Rolle auf Discord und sende ihnen dann die folgende Botschaft:

```
Dies ist eine Standard-Nachricht, die dich darüber informiert, dass ich dich vorübergehend von der Diskussion auf dem FreeCodeCamp Discord Server unterbrechen musste.

Ich bin Moderator, der im Namen unserer Open Source Community agiert. Ich kann erwägen, deine Suspendierung zu entfernen, aber ich muss zuerst die folgenden 3 Schritte machen:

1. Lesen Sie unseren Verhaltenskodex: https://code-of-conduct.freecodecamp.org/
2. Melde mich zurück und bestätige, dass du sie gelesen hast. 3. Erklären Sie mir, warum ich Sie Ihrer Meinung nach ausgesetzt habe und warum ich Ihre Aussetzung aufheben sollte.
```

- Melde eine kurze Zusammenfassung der Veranstaltung und wie sie im #admin Channel darauf reagiert haben. Hier ist ein Beispiel dafür, wie eine solche Zusammenfassung aussehen könnte:

```
Aussetzt: _@username_
Grund(e): _Spamming, Trolling_
Evidenz: _One oder mehrere Links zu der angreifenden Nachricht(n)_
CoC: _Sent_
```

- Ein Bericht zum Entfernen einer Suspendierung sollte wie folgt aussehen:

```
Ich habe die Aussetzung von ` @username ` entfernt. Ich habe ihnen den Verhaltenskodex zugeschickt. Sie erkannten erst heute, dass sie ausgesetzt und entschuldigt wurden für das, was sie taten.
```

- Basierend auf der Antwort der Täter wird der Moderator entscheiden, ob er die Suspendierung aus dem Wohnmobile entfernen soll. Wenn sie respektvoll und entschuldigt erscheinen, kann der Moderator die Suspendierung entfernen. Aus politischer Sicht werden die Moderatoren während dieses Prozesses höflich sein, unabhängig davon, wie schlecht sich der beleidigende Camper verhalten hat. Wenn sie nicht respektvoll oder nicht willens sind, den CoC zu akzeptieren, sollte die Suspendierung mit einem Verbot des Discord Servers befolgt werden. Verwenden Sie die gleiche Zusammenfassung wie oben, aber ersetzen Sie "Suspended:" durch "Gebannt:".

3. **Wie man sperren und/oder entbannen kann**

- Um jemanden zu bannen klicken Sie mit der rechten Maustaste auf sein Benutzername/Profilbild und wählen Sie "Ban <username>". Ihnen wird die Möglichkeit gegeben, ihre vorherigen Nachrichten zu löschen - wählen Sie "Keine löschen", da die Botschaften sollten als historischer Datensatz vorhanden bleiben.
- Wenn Sie sich entschließen, jemanden zu verbieten, bedeutet dies, dass sie nicht bereit sind, sich an unseren Verhaltenskodex zu halten. Deshalb sollte es selten vorkommen, einen Camper zu entbannen. Wenn es jedoch notwendig ist, können Sie dies tun, indem Sie auf den Servernamen klicken, indem Sie "Server-Einstellungen" wählen Wählen Sie "Bannen", wählen Sie den Benutzer aus, den Sie entfernen möchten, und klicken Sie auf "Bann widerrufen".

Discord Bans sind global - Du kannst einen Benutzer nicht von einem bestimmten Kanal bannen, nur vom gesamten Server.

4. **Lösche Nachrichten** Moderatoren können Nachrichten auf Discord löschen. Sie sollten diese Fähigkeit nur in vier sehr spezifischen Situationen wahrnehmen:

- Jemand hat ein pornografisches oder grafisch gewalttätiges Bild veröffentlicht.
- Jemand hat einen Link oder einen Code veröffentlicht, der schädlich ist und könnte anderen Campern, die darauf klicken, Schaden zufügen.
- Jemand hat den Chat mit so vielen Spam-Nachrichten überflutet (meist mit Bots) dass Chat völlig unbrauchbar wird.
- Jemand hat Werbung und / oder eine sich selbst fördernde Nachricht / Bild (soziale Medien).

In allen anderen Situationen - auch in Situationen, in denen der Verhaltenskodex verletzt wird - sollten Moderatoren die Nachricht nicht löschen, da dies ein wichtiger historischer Datensatz ist. Wenn Sie eine Nachricht löschen, stellen Sie sicher, dass Sie zuerst einen Screenshot davon machen! Der Screenshot kann im #mod-log Kanal eingeloggt werden aber für das #activity-log reicht es zu sagen, dass der Beweis "aufgrund sensibler Inhalte entfernt wurde". Notiz: Wenn die Nachricht Material enthält, von dem ein Screenshot nicht erlaubt wäre Kopieren Sie stattdessen den Nachrichtenlink - stellen Sie diesen Link an @raisedadead zur Verfügung, um ihn an das Discord's Trust and Safety Team weiterzuleiten.

5. **Benutze nicht @everyone oder @here** Nutze nicht @everyone oder @here unter keinen Umständen! Jede Person in diesem Chatraum erhält eine Benachrichtigung. In einigen Fällen Zehntausende von Menschen. Wenn Sie möchten, dass die Leute eine Ankündigung sehen, können Sie sie an den Kanal anhängen, damit jeder sie lesen kann.

6. **Droht nicht,**zu bannen oder zu unterbrechen. Wenn ein Camper den Verhaltenskodex verletzt, droht nicht, sie zu verbieten oder auszusetzen, und warnt sie nie in der Öffentlichkeit. Sprechen Sie stattdessen mit ihnen privat oder senden Sie ihnen eine DM und eine Suspendierung (gemäß dem obigen Protokoll). Niemand sonst in diesem Kanal muss wissen, dass Sie gebannt / ausgesetzt die Person - Camper können die Zusammenfassung im #activity-log Kanal sehen, wenn sie auf dem Laufenden bleiben wollen. Wenn eine Verletzung eindeutig unbeabsichtigt war und keine Aussetzung oder private Unterhaltung rechtfertigt, machen Sie den beleidigenden Camper auf seine / ihre Handlungen aufmerksam zu machen, ohne dass es als Warnung. Zum Beispiel:

- Der Camper postet eine Wand Code, um Hilfe anzufordern

  Moderator: @username Bitte benutzen Sie Codepen oder Pastebin um große Mengen Code zu veröffentlichen.

- Oder wenn Sie wirklich erklären müssen, warum:

  Moderator: @username Bitte verwenden Sie Codepen oder Pastebin beim Posten großer Mengen an Code weil es den Chat für alle stört und könnte als Spamming gemäß unserem Verhaltenskodex angesehen werden.

- Für leichte und unbeabsichtigte Verstöße gegen den Verhaltenskodex

  Moderator: Dies ist eine freundliche Mahnung für alle, dem Verhaltenskodex zu folgen: https://code-of-conduct.freecodecamp.org/

7. **Schlagen Sie sich nicht vor, ein Moderator zu sein** Sehen Sie sich nicht als oberhalb der Community an. Du bist die Gemeinschaft. Und die Community hat dir vertraut, etwas Seltenes zu schützen, das wir alle teilen - ein _, der_ Platz für neue Entwickler willkommen heißt. Wenn du ein Moderator bist, können sich die Leute um dich herum unwohl fühlen auf die gleiche Weise, wie sich die Leute um einen Polizeibeamten unwohl fühlen, auch wenn sie nichts falsch machen. Das ist nur die menschliche Natur.

8. **Widerspricht nicht anderen Moderatoren** Wenn du mit der Aktion eines Moderators nicht einverstanden bist mit ihnen privat sprechen oder sie im #mod-chat Channel ansprechen. Überschreibe niemals ein Verbot und widerspreche niemals den anderen Moderator(en) öffentlich. Stattdessen haben wir im Mod-Chat eine besonnene Diskussion und überzeugen den Moderator, dass er selbst sein Verbot rückgängig machen oder seinen Standpunkt ändern sollte. Denken Sie daran: Wir sind alle im selben Team. Wir wollen die Rolle der Moderatoren würdigen und eine einheitliche Front präsentieren.

9. **Sprechen Sie mit anderen Moderatoren** Wir haben nur einen Raum für Moderatoren. Verwende es! Wenn Sie sich nicht wohl fühlen, wie Sie mit einer bestimmten Situation umgehen, fragen Sie andere Moderatoren nach Hilfe. Wenn Sie der Meinung sind, dass etwas diskutiert werden sollte, tun Sie es. Sie sind Teil des Teams und wir schätzen den Beitrag jedes Teammitglieds! Auch wenn Sie mit diesen Leitlinien oder dem Verhaltenskodex völlig nicht einverstanden sind!

10. **Vorübergehend inaktiv** Wenn du aufgrund von Ferien nicht länger als Moderator aktiv bist, Krankheit oder irgendeinen anderen Grund, vergewissern Sie sich, dass die anderen im #mod-chat Channel informiert werden. So wissen wir, ob wir auf Sie zählen können, regelmäßig auf dem Server aktiv zu sein oder nicht.

# Wie man Moderator wird

Wenn du Menschen in der Community im Laufe der Zeit konsequent hilfst, wird unser Moderatoren-Team letzten Endes darauf achten, und einer von ihnen wird Sie als möglicher Moderator für [unsere Mitarbeiter erwähnen](https://forum.freecodecamp.org/g/Team). Es gibt keine Verknüpfungen, um Moderator zu werden.

Wenn du freigeschaltet bist, werden wir dich zu unseren Moderatoren-Teams im [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [Forum](https://forum.freecodecamp.org/g/moderators), etc. hinzufügen.

> [!HINWEIS] > **Für GitHub:** Nachdem Sie als Moderator akzeptiert wurden, erhalten Sie eine Github Repository-Einladung. Du musst in Richtung [FreeCodeCamp GitHub Organisation Einladung](https://github.com/orgs/freeCodeCamp/invitation) gehen, um die Einladung annehmen zu können. Dies ist erforderlich, damit wir Ihnen Schreibzugriff auf einige unserer Repositories geben können.

# Wie wir inaktive Moderatoren zurückziehen

Bitte beachten Sie, dass wir oft Mods entfernen werden, die wir für inaktiv halten. Wenn wir dies tun, senden wir folgende Nachricht:

> Dies ist eine Standardnachricht, die dich informiert, da du in letzter Zeit kein aktiver Moderator zu sein scheinst, entfernen wir dich aus unserem Moderator-Team. Wir schätzen Ihre Hilfe in der Vergangenheit sehr.

> Wenn du denkst, dass wir dies irrtümlich gemacht haben, oder wenn du bereit bist zurückzukommen und mehr beizutragen antworten Sie einfach auf diese Nachricht, die mich wissen lassen.

# Wie unser Mitwirkender Raum funktioniert

Jeder ist willkommen im [Mitwirkenden Raum auf unserer Discord](https://discord.gg/KVUmVXA). Es ist der vorgesehene Chatraum für Moderatoren und andere Camper, die auf jede beliebige Art und Weise zu unserer Gemeinschaft beitragen einschließlich durch Lerngruppen.

Wir gehen davon aus, dass die Mitwirkenden in diesem Raum alles lesen werden, was sie direkt mit einem `@username` erwähnt. Alles andere ist optional. Aber fühlen Sie sich frei, alles zu lesen, was jemand dort postet und zu interagieren.

# Umgang mit Rechtsanwälten

Sie können von Organisationen angesprochen werden, die mit FreeCodeCamp in irgendeiner Weise zusammenarbeiten oder mitmarkieren möchten. Sobald Sie erkannt haben, dass dies das ist, was sie wollen, hören Sie bitte auf, mit ihnen zu reden und sagen Sie ihnen, quincy@freecodecamp.org per E-Mail zu senden. Er bekommt immer wieder Vorschläge wie diese und ist am besten in der Lage zu beurteilen, ob eine solche Beziehung für unsere Gemeinschaft wert sein wird (und das ist selten der Fall).

# Behandlung von (mentalen) Gesundheitsanfragen

Sie können Situationen begegnen, in denen Anwender medizinische Beratung suchen oder sich mit Fragen der psychischen Gesundheit befassen und auf der Suche nach Unterstützung sind. Politisch sollten Sie es vermeiden, über diese Fragen privat zu sprechen. Sollte sich die Situation irgendwann einmal in fCC wiederspiegeln, möchten wir das Gespräch(e) auf die Aufnahme setzen. Machen Sie deutlich, dass wir keine medizinischen Fachleute sind und dass Sie den Anwender ermutigen, professionelle Hilfe zu finden. So schwierig es manchmal auch sein mag, vermeidet es, andere Tipps oder Ratschläge zu geben, als den Benutzer in Richtung professioneller Hilfe zu zeigen!

Wenn dies bei Discord der Fall ist: Suspend den Benutzer. Das ist nicht, um sie zu bestrafen! Die Einstellung eines Benutzers wird einen privaten Kanal erstellen, der nur für den Benutzer und das Team zugänglich ist. Dies wird sowohl dem Benutzer als auch fCC auf verschiedene Weise zugute kommen:

- Dem Benutzer wird ein gewisses Maß an Privatsphäre garantiert
- Öffentlicher Chat wird nicht mehr unterbrochen
- Andere Teammitglieder können einspringen, wenn Sie selbst unbequem mit der Situation umgehen

> [!HINWEIS] Ein Benutzer wird automatisch vom Aussetzen unseres Verhaltenskodexes benachrichtigt. Vergewissern Sie sich, dass Sie den Benutzer darauf hingewiesen haben, dass Sie ihn gesperrt haben, um ihm eine gewisse Privatsphäre zu geben und dass er nicht bestraft wird. Das ist sehr wichtig! Wir möchten es unbedingt vermeiden, den Benutzern die Idee zu geben, dass sie dafür bestraft werden, Hilfe zu erhalten!

Wenn du glaubst, dass der Benutzer der Gemeinschaft wieder beitreten kann, klicke mit der rechten Maustaste auf den privaten Kanal und kopiere die ID. Folgende Nachricht in #mod-log einfügen:

> Referenzmedizinische Beratung: <channel ID> <username>

Danach können Sie die Suspension wie üblich vom Benutzer entfernen.

Hilfreiche URLs:

http://www.suicide.org/international-suicide-hotlines.html

# Eine Notiz zur Redefreiheit

Manchmal werden die Menschen etwas beleidigendes oder hetzerisches verteidigen, das sie als ,,freie Meinungsäußerung" bezeichnet haben.

Dieser XKCD Comic fasst die meisten Communities in Sachen Redefreiheit perfekt zusammen. Wenn also jemand etwas verteidigt, was sie als "freie Rede" sagen, dann zögern Sie nicht, es an sie zu senden.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Vielen Dank für das Lesen und vielen Dank für die Unterstützung der Entwicklergemeinschaft!
