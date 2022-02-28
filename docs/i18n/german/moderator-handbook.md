# Das offizielle freeCodeCamp Moderator Handbuch

Dieses Handbuch hilft dir, verschiedene Orte in unserer Community zu moderieren. Dazu gehören Unterhaltungen und Interaktionen in Issues & Pull-Request-Threads auf GitHub, das Community-Forum, die Chatrooms und andere offizielle Communities, die wir pflegen.

> [!NOTE] Alle freeCodeCamp-Moderatoren sind Community-weite Moderatoren. Das bedeutet, dass wir dir zutrauen, jeden dieser Orte zu beaufsichtigen.

Du kannst auf jeder der Plattformen, die dich am meisten interessieren, als Moderator/in tätig sein. Einige Moderatoren helfen nur auf GitHub, während andere nur im Forum helfen. Einige Moderatoren sind überall aktiv.

Unterm Strich wollen wir, dass es dir Spaß macht, Moderator/in zu sein, und dass du deine knappe Zeit in Dinge investierst, die dich interessieren.

> "Mit großer Macht kommt große Verantwortung" - Uncle Ben

Als Moderator/in ist das Temperament wichtiger als die technischen Fähigkeiten.

Hör zu. Sei hilfsbereit. Missbrauche deine Macht nicht.

Das freeCodeCamp ist eine inklusive Community, und das soll auch so bleiben.

Wir haben einen einzigen Verhaltenskodex, der für unsere gesamte Community gilt. Je weniger Regeln, desto einfacher ist es, sich sie zu merken. Du kannst die Regeln [hier](https://code-of-conduct.freecodecamp.org) lesen und sie dir einprägen.

> [!NOTE] Als Moderator/in würden wir dich einem oder mehreren Teams auf GitHub, unseren Community-Foren & Chats hinzufügen. Wenn du keinen Zugang zu einer Plattform hast, die du gerne moderieren würdest, wende dich bitte [an einen unserer Mitarbeiter (Staff)](FAQ.md#additional-assistance).

## GitHub moderieren

Auf GitHub haben Moderatoren zwei Hauptaufgaben:

1. Bearbeitung und Beantwortung von Problemen
2. Prüfen und Zusammenführen von Pull-Requests (auch bekannt als QA).

### GitHub Issues moderieren

Wir nutzen unser Haupt-Repository [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp/issues) als gemeinsamen Issue Tracker für alle unsere Repositories. Jeden Tag bekommen wir neue Issues, die alle bearbeitet, gekennzeichnet und adressiert werden müssen. Das ist auch ein guter Ort, um mit Beiträgen zur Open-Source-Codebasis anzufangen.

#### Triage von Issues

[Triaging](https://en.wikipedia.org/wiki/Triage) ist ein Prozess, bei dem die Aufmerksamkeit für jeden neuen Issue Report priorisiert wird. Wir haben eine umfangreiche Liste von Labels, die wir verwenden, um die Priorität, Kategorie, Status und Umfang jedes Problems zu kennzeichnen.

Du kannst uns helfen, die Issues zu ordnen und einzuteilen, indem du Labels aus [dieser Liste](https://github.com/freeCodeCamp/freeCodeCamp/labels) anwendest. Normalerweise ist neben dem Label eine Beschreibung verfügbar, in der die Bedeutung erläutert wird.

Bitte achte besonders auf die Label `"help wanted"` und `"first timers only"`. Diese sollen zu Threads hinzugefügt werden, von denen du denkst, dass sie für potenzielle Mitwirkende geöffnet werden können, um einen Pull-Request zu erstellen.

Das `"first timer only"` Label sollte auf ein triviales Problem (z. B. einen Tippfehler) angewendet werden und zusätzliche Informationen enthalten. Du kannst diese [Antwortvorlage](moderator-handbook.md#first-timer-only-issues) für die Triage verwenden.

#### Schließen veralteter, inaktiver Issues und Pull-Requests

- Veraltete Issues oder PRs sind solche, die seit 21 Tagen (3 Wochen nach der letzten Aktivität) keine Aktivität vom Autor erfahren haben, aber erst nachdem ein Moderator weitere Informationen/Änderungen angefordert hat.

- Aktivität ist definiert als: Kommentare, die eine Aktualisierung der PR und Triages anfordern, wie  `status: update needed` Label etc.

- Wenn der Beitragende um zusätzliche Hilfe oder sogar Zeit bittet, kann das oben Gesagte gelockert und nach einer Antwort erneut überprüft werden. In jedem Fall sollten die Moderatoren nach bestem Wissen und Gewissen den Status der ausstehenden PR klären.

> [!TIP] Wir empfehlen dir, diese Liste von standardisierten [Antwortvorlagen](moderator-handbook.md#reply-templates) zu verwenden, wenn du Issues bearbeitest.

### Pull-Requests moderieren

Pull Requests (PRs) sind die Art und Weise, wie Mitwirkende Änderungen an das freeCodeCamp-Repository übermitteln. Wir müssen eine Qualitätssicherung (QA) für Pull-Requests durchführen, bevor wir entscheiden, ob wir sie zusammenführen, Änderungen beantragen oder schließen.

#### Arten von Pull Requests

1. **Bearbeitung der Aufgabeninstruktionen**

   Das sind Änderungen am Text der Aufgaben - der Beschreibung, den Instruktionen oder dem Testtext.

   Du kannst sie auch direkt auf GitHub überprüfen und entscheiden, ob du sie zusammenführen möchtest. Wir müssen hier etwas vorsichtiger sein, denn Millionen von Menschen werden diesem Text begegnen, wenn sie den freeCodeCamp-Studienplan durcharbeiten. Macht der Pull-Request den Text klarer, ohne ihn viel länger zu machen? Sind die Änderungen relevant und nicht übermäßig pedantisch? Denke daran, dass unser Ziel ist, dass die Aufgaben so deutlich und so kurz wie möglich sind. Sie sind nicht der Ort für unklare Details. Die Mitwirkenden könnten versuchen, Links zu Ressourcen zu den Aufgaben hinzuzufügen.

   Mit diesen [Antwortvorlagen](moderator-handbook.md#closing-invalid-pull-requests) kannst du ungültige Pull-Requests schließen und darauf antworten.

   Wenn die Änderung gut aussieht, sorge bitte dafür, dass du eine Genehmigung mit einem "LGTM"-Kommentar hinterlässt. Sobald ein Pull Request mindestens zwei Genehmigungen (einschließlich deiner) von den Moderatoren oder dem Entwicklungsteam erhält, kannst du ihn zusammenführen.

2. **Bearbeitung des Aufgabencodes**

   Dabei handelt es sich um Änderungen am Code in einer Aufgabe - dem Aufgabenstartcode, der Aufgabenlösung und den Teststrings.

   Diese Pull Requests müssen von GitHub heruntergeladen werden und auf dem eigenen Computer oder Gitpod getestet werden, um sicherzustellen, dass die Tests immer noch mit der aktuellen Lösung bestanden werden können und dass der neue Code keine Fehler einführt.

   Einige Mitwirkende werden versuchen, zusätzliche Tests hinzuzufügen, um spitzfindige Sonderfälle abzudecken. Wir müssen aufpassen, dass wir die Aufgabe nicht zu kompliziert machen. Diese Aufgaben und ihre Tests sollten so einfach und intuitiv wie möglich sein. Abgesehen von den Algorithmusaufgaben und dem Abschnitt zur Interviewvorbereitung sollten die Teilnehmer/innen in der Lage sein, jede Aufgabe innerhalb von etwa 2 Minuten zu lösen.

   Mit diesen [Antwortvorlagen](moderator-handbook.md#closing-invalid-pull-requests) kannst du ungültige Pull-Requests schließen und darauf antworten.

   Wenn die Änderung gut aussieht, sorge bitte dafür, dass du eine Genehmigung mit einem "LGTM"-Kommentar hinterlässt. Sobald ein Pull-Request mindestens zwei Genehmigungen (einschließlich deiner) von den Moderatoren oder dem Entwicklungsteam erhält, kannst du ihn zusammenführen.

3. **Änderungen der Plattform**

   Diese Code-Bearbeitungen ändern die Funktionalität der freeCodeCamp-Plattform selbst.

   Manchmal versuchen Mitwirkende, Änderungen ohne große Erklärungen vorzunehmen, aber bei Codeänderungen müssen wir sicherstellen, dass es einen echten Bedarf für die Änderung gibt. Diese Pull-Requests sollten auf ein bestehendes GitHub Issue verweisen, in dem die Gründe für die Änderung erläutert werden. Dann kannst du die Pull-Request auf deinem Computer öffnen und sie lokal testen.

   Wenn du das getan hast und die Änderungen gut aussehen, solltest du sie noch nicht zusammenführen. Du kannst den Pull-Request mit "LGTM" kommentieren und dann **"@freeCodeCamp/dev-team"** erwähnen, damit sie einen letzten Blick darauf werfen können.

4. **Automatisierte PRs (Dependabot)**

   Einige PRs sind automatische Aktualisierungen von Abhängigkeiten, die über eine Integration vorgenommen werden. Du solltest diese PRs nicht zusammenführen oder genehmigen. Ein Mitglied des Entwicklerteams kümmert sich um die Überprüfung und Zusammenführung solcher automatischen PRs.

#### Wie man Pull-Requests überprüft, zusammenführt oder schließt

##### Weise dich einem Pull-Request zu:

Wenn du einen Pull-Request zum Überprüfen auswählst, solltest du dich diesem zunächst selbst zuweisen. Du kannst dies tun, indem du in der rechten Spalte der GitHub-Benutzeroberfläche auf den Link "assign yourself" unter dem Bereich "assignees" klickst.

Je nachdem, um welche Art von Pull-Request es sich handelt, befolge die entsprechenden Regeln, die zuvor aufgelistet wurden.

##### Stelle sicher, dass die CI-Prüfungen bestanden werden:

Vergewissere dich vor dem Zusammenführen eines Pull Requests, dass GitHub alle Prüfungen für die Pull-Requests als bestanden meldet (grüne Häkchen). Wenn du feststellst, dass eine der Prüfungen fehlschlägt, untersuche bitte die Ursache und kläre sie. Führt die Änderung dazu, dass unsere Tests nicht mehr funktionieren? Wird die Seite korrekt aufgebaut, wenn der PR zusammengeführt wird? Diese Kontrollen sind entscheidend für die Stabilität der Plattform.

> [!WARNING] Das Zusammenführen eines PRs, der die CI/CD-Prüfungen nicht besteht, kann für alle Beteiligten, einschließlich des Entwicklungsteams und der Mitwirkenden, zu Schwierigkeiten führen.

##### Umgang mit Merge-Konflikten:

Manchmal kommt es zu einem Merge-Konflikt.

Das bedeutet, dass ein anderer Pull-Request eine Änderung an demselben Teil der Datei vorgenommen hat. GitHub hat ein Tool, mit dem du diese Merge-Konflikte direkt auf GitHub lösen kannst. Du kannst versuchen, diese Konflikte zu lösen. Benutze einfach dein gutes Urteilsvermögen.

Die Änderungen des Pull-Requests stehen oben und die des main-Branch unten. Manchmal gibt es dort überflüssige Informationen, die gelöscht werden können. Bevor du fertig bist, stelle sicher, dass du die `<<<<<`, `======` und `>>>>>>` löschst, die Git hinzufügt, um Merge-Konflikte anzuzeigen.

Wenn du dir unsicher bist, frag bitte einen der anderen Moderatoren oder das Entwicklerteam um Hilfe.

##### Zusammenführen eines gültigen Pull-Requests:

Wenn der Pull-Request so aussieht, dass er zusammengeführt werden kann (und keine weiteren Genehmigungen benötigt - denk daran, dass wir mindestens zwei benötigen), kannst du ihn zusammenführen. Achte darauf, dass du die Standardoption **"Squash and Merge"** verwendest. Dadurch werden alle Pull-Request-Commits zu einem einzigen Commit zusammengefasst, wodurch die Git-Historie viel einfacher zu lesen ist.

> Dann solltest du den Pull-Request kommentieren und dich auf deine persönliche Art und Weise bei dem Mitwirkenden bedanken.

Wenn der Autor des Pull-Requests zum ersten Mal beiträgt, solltest du ihm auch zu seinem ersten zusammengefassten Pull-Request für das Repository gratulieren. Du kannst in der oberen rechten Ecke des PR-Body nachsehen, ob es sich um einen "first-time" Mitwirkenden handelt. Es wird `First-time contributor` angezeigt, wie unten dargestellt:

<details>
   <summary>
      Badge "First time contributor" für den ersten Beitrag eines Pull-Requests (Screenshot)
   </summary>

   <br>
   <img src="https://i.imgur.com/dTQMjGM.png" alt="Abzeichen für den erstmaligen Beitrag zu einem Pull-Requests" />
</details>

Wenn der Pull-Request nicht bereit zum Zusammenführen zu sein scheint, kannst du dem Autor höflich antworten und ihm sagen, was er tun sollte, um ihn fertigzustellen. Wir hoffen, dass sie antworten und ihr Pull-Request bald fertig ist.

Wenn du eine zweite Meinung zu einem Pull-Request benötigst, hinterlasse deine Kommentare zu dem Pull-Request und füge dann das Label "discussing" zu dem Pull-Request hinzu.

##### Schließen eines ungültigen Pull-Requests:

Oft ist ein Pull-Request mit wenig Aufwand verbunden. Das erkennst du in der Regel sofort daran, dass der Mitwirkende sich nicht die Mühe gemacht hat, die Kontrollkästchen in der Pull-Request-Vorlage zu markieren oder einen allgemeinen Pull-Request-Titel wie "made changes" oder "Update index.md" verwendet hat.

Es gibt auch Situationen, in denen der/die Mitwirkende versucht, einen Link zu seiner/ihrer Website hinzuzufügen, eine von ihm/ihr erstellte Bibliothek einzubinden oder eine unseriöse Bearbeitung vorzunehmen, die niemandem außer ihm/ihr selbst hilft.

Mit diesen [Antwortvorlagen](moderator-handbook.md#closing-invalid-pull-requests) kannst du ungültige Pull-Requests schließen und darauf antworten.

#### Weitere Richtlinien für Moderatoren auf GitHub

Obwohl du Schreibzugriff auf das freeCodeCamp-Repository hast, **solltest du niemals Code direkt in die freeCodeCamp-Repositories pushen**. Der gesamte Code sollte in Form eines Pull-Requests von einem Fork des Repositorys in die Codebasis von freeCodeCamp gelangen.

Außerdem solltest du niemals deine eigenen PRs akzeptieren. Sie müssen von einem anderen Moderator überprüft werden, genau wie jeder andere PR.

Wenn du feststellst, dass jemand gegen den [Verhaltenskodex](https://code-of-conduct.freecodecamp.org) auf GitHub verstößt oder Pull-Requests mit bösartigem Inhalt oder Code öffnet, schicke eine E-Mail an `support[at]freecodecamp.org` mit einem Link zu dem betreffenden Pull-Request, damit wir in Erwägung ziehen können, die betreffende Person komplett aus der GitHub-Organisation von freeCodeCamp zu verbannen.

## Das Forum moderieren

Als Moderator/in trägst du dazu bei, dass unsere Community ein angenehmer Ort ist, an dem jeder lernen und Hilfe bekommen kann. Du bearbeitest markierte Beiträge und kümmerst dich um Spam, Off-Topic und andere unangemessene Unterhaltungen.

Sobald du ein Moderator im Forum bist, wirst du blaue Moderatorenhinweise zu Forenmitgliedern sehen, wie z. B. "Dies ist das erste Mal, dass [person] gepostet hat - heißen wir sie in der Community willkommen!" oder "[person] hat schon lange nicht mehr gepostet - heißen wir sie wieder willkommen."

![Eine blaue Textnachricht mit dem Hinweis "Dies ist das erste Mal, dass [person] gepostet hat - heißen wir sie in der Community willkommen!](https://i.imgur.com/mPmVgzK.png)

Das sind Gelegenheiten für dich, sie willkommen zu heißen und ihnen das Gefühl zu geben, etwas Besonderes zu sein. Man weiß nie, welche Person, die nur am Rande beteiligt ist, unser nächster Superhelfer wird, der vielen anderen Menschen auf ihrem Weg zum Programmieren hilft. Selbst die kleinste Freundlichkeit kann eine Kaskade von guten Taten auslösen.

### Lösche Forenbeiträge

Forum-Moderatoren können Beiträge von Nutzern löschen. Du solltest dies nur in den folgenden Fällen tun:

1. Jemand hat ein pornografisches oder grafisch gewalttätiges Bild gepostet.
2. Jemand hat einen Link oder Code gepostet, der bösartig ist und anderen Teilnehmern, die darauf klicken, schaden könnte.
3. Jemand hat einen Thread mit vielen Spam-Nachrichten überflutet.

### Umgang mit Spam

Beim ersten Spam-Posting eines Nutzers schickst du ihm eine Nachricht, in der du das Problem erklärst, und entfernst den Link oder das Posting, falls nötig. Hinterlasse eine Notiz im Profil des Nutzers, in der du die von dir ergriffene Maßnahme erklärst. Wenn das Problem weiterhin besteht, sperre den/die Benutzer/in stillschweigend für Beiträge (mit der Stille-Option im Benutzer-Administrationsbereich). Schicke dem Nutzer eine Verwarnung mit dem Verhaltenskodex. Aktiviere das Kästchen in der privaten Nachricht, das angibt, dass deine Nachricht eine "formelle Warnung" ist.

Als Moderator kannst du im Bereich [staff forum ](https://forum.freecodecamp.org/c/mod-team/4) Fragen stellen und Vorfälle melden.

### Umgang mit Off-Topic-Gesprächen

Beiträge oder Themen, die am falschen Ort zu sein scheinen, können neu kategorisiert oder umbenannt werden, was immer angemessen ist.

In Ausnahmefällen kann es für einen Moderator angemessen sein, eine Diskussion in mehrere Threads aufzuteilen.

Auch hier gilt: Wenn du Probleme oder Fragen hast, schreibe einen Beitrag mit deinen Aktionen in der Kategorie Staff und markiere einen anderen Moderator, wenn du möchtest, dass er deine Moderationsaktionen überprüft.

### Minderjährige Nutzer

Unsere [Nutzungsbedingungen](https://www.freecodecamp.org/terms) verlangen, dass freeCodeCamp-Nutzer mindestens 13 Jahre alt sind. Wenn ein/e Nutzer/in preisgibt, dass er/sie unter 13 Jahre alt ist, schicke ihm/ihr die unten stehende Nachricht und lösche sein/ihr Forumskonto (wenn eine Löschung nicht möglich ist, reicht die Sperrung des Kontos).

**Schicke eine E-Mail an `support[at]freecodecamp.org`, um auch das freeCodeCamp-Konto des Nutzers zu löschen.**

```markdown
SUBJECT: Users under 13 are not allowed to use the forum per Terms of Service

It has come to our attention that you are under 13 years of age. Per the [freeCodeCamp terms of service](https://www.freecodecamp.org/news/terms-of-service), you must be at least 13 years old to use the site or the forum. We will be deleting both your freeCodeCamp account and your forum account. This restriction keeps us in compliance with United States laws.

Please rejoin once you have reached at least 13 years of age.

Thank you for understanding.
```

## Facebook moderieren

Wenn du etwas siehst, das gegen unseren [Verhaltenskodex](https://code-of-conduct.freecodecamp.org/) zu verstoßen scheint, solltest du es sofort löschen.

Manchmal posten Menschen Dinge, die sie für lustig halten. Sie erkennen nicht, dass das, was sie gesagt oder geteilt haben, als beleidigend interpretiert werden könnte. Du solltest solche Beiträge löschen, aber nicht unbedingt die Person verbannen. Hoffentlich begreift der/die NutzerIn, dass das, was er/sie gepostet hat, unangemessen war, denn der Beitrag wurde gelöscht.

Aber wenn es eine ungeheuerliche Beleidigung ist, welche nicht auf einen kulturellen Unterschied oder einem Missverständnis in der englischen Sprache zurückgeführt werden kann. Dann solltest du in diesem Fall ernsthaft in Erwägung ziehen, das Mitglied aus der Facebook-Gruppe zu sperren.

## Chat moderieren

Hier erfährst du, wie die Moderatoren mit Verstößen gegen unseren [Verhaltenskodex](https://code-of-conduct.freecodecamp.org/) auf unserem Chat-Server umgehen:

1. **Vergewissere dich, dass der/die Nutzer/in die Absicht hatte, gegen den Verhaltenskodex zu verstoßen.**

   Nicht alle Verstöße gegen den Verhaltenskodex waren so beabsichtigt. Ein neuer Teilnehmer könnte eine große Menge an Code posten und um Hilfe bitten, ohne zu wissen, dass dies als Spamming angesehen werden kann. In diesen Fällen kannst du sie einfach bitten, ihren Code mit Diensten wie CodePen oder Pastebin einzufügen.

2. **Wenn der/die Teilnehmer/in eindeutig und absichtlich gegen den Verhaltenskodex verstößt, wird der/die Moderator/in wie folgt vorgehen:**

   Wirf die beleidigende Person aus dem Chatraum oder schalte sie stumm. Um jemanden hinauszuwerfen oder stumm zu schalten, klickst du mit der linken Maustaste auf sein Profilbild, wählst die drei Punkte und wählst "Remove from room", um ihn hinauszuwerfen, oder "Mute user", um ihn am Senden von Nachrichten zu hindern. Dann berichte eine kurze Zusammenfassung des Ereignisses im Channel #mod-log. Hier ist ein Beispiel dafür, wie eine solche Zusammenfassung aussehen könnte:

   ```
   Kicked: _@username_
   Reason(s): _Spamming, trolling_
   Evidence: _One or more links to the offending message(s)_
   ```

3. **Eine private Diskussion erstellen**

   Es kann Situationen geben, in denen du ein Anliegen mit einem Teilnehmer unter vier Augen besprechen musst. Dies sollte nicht über DMs geschehen, da dies zu Situationen führen kann, in denen du eine Sache behauptest und der Teilnehmer eine andere. Nutze stattdessen die Funktionen des Bots, um eine private Diskussion zu führen:

   - Rufe den Befehl `!fCC private username` auf, wobei `username` der Chat-Benutzername des Teilnehmers ist.
   - Der Bot erstellt einen neuen Channel und fügt den genannten Camper und alle Moderatoren mit der Rolle `Your Friendly Moderator` hinzu. Obwohl alle Moderatoren zur Transparenz in den Kanal aufgenommen werden, sollte der Moderator, der diesen Befehl aufruft, der einzige sein, der mit dem Teilnehmer interagiert, es sei denn, er bittet um Hilfe.
   - Wenn die Konversation beendet ist, rufst du den `!fCC close`-Befehl _im privaten Channel_ auf, damit der Bot diesen Channel schließt und löscht.

4. **Nachrichten löschen**

   Moderatoren können Nachrichten auf unserem Chat-Server löschen. Sie sollten diese Fähigkeit nur in vier ganz bestimmten Situationen nutzen:

   - Jemand hat ein pornografisches oder grafisch gewalttätiges Bild gepostet.

   - Jemand hat einen Link oder Code gepostet, der bösartig ist und anderen Teilnehmern, die darauf klicken, schaden könnte.

   - Jemand hat den Chat mit so vielen Spam-Nachrichten überflutet (meist durch Bots), dass der Chat komplett unbrauchbar ist.

   - Jemand hat eine Werbung und/oder eine selbstdarstellende Nachricht/ein selbstdarstellendes Bild (soziale Medien) gepostet.

   In allen anderen Situationen - auch bei Verstößen gegen den Verhaltenskodex - sollten die Moderatoren die Nachrichten nicht löschen, da sie wichtige historische Aufzeichnungen sind. Wenn du eine Nachricht löschst, solltest du vorher einen Screenshot davon machen! Der Screenshot kann im Channel #mod-log geloggt werden.

   > [!NOTE] Wenn die Nachricht Material enthält, von dem es illegal wäre, einen Screenshot zu machen, kopiere stattdessen den Link der Nachricht und leite ihn an @raisedadead weiter, der ihn an das Team für Vertrauen und Sicherheit von Discord weiterleitet.

5. **Verwende nicht @all oder @here**

   Verwende unter keinen Umständen @all oder @here! Jede einzelne Person in diesem Chatraum erhält eine Benachrichtigung. In manchen Fällen sind es Zehntausende von Menschen.

   Wenn du möchtest, dass die Leute eine Ankündigung sehen, kannst du sie stattdessen an den Kanal anheften, damit alle sie lesen können.

6. **Droh nicht mit Maßnahmen**

   Wenn ein/e Teilnehmer/in gegen den Verhaltenskodex verstößt, drohe ihm/ihr nicht mit Maßnahmen des Moderators/der Moderatorin und verwarne ihn/sie nie in der Öffentlichkeit. Sprich stattdessen privat mit ihnen, indem du den Befehl `private` des Bots benutzt. Niemand sonst in diesem Channel muss wissen, dass du die Person gebannt/suspendiert hast. Wenn ein Verstoß eindeutig unbeabsichtigt war und keine Suspendierung oder ein Gespräch unter vier Augen rechtfertigt, solltest du den/die betreffende/n Teilnehmer/in auf sein/ihr Verhalten aufmerksam machen, ohne dass es wie eine Verwarnung wirkt. Zum Beispiel:

   - Der Teilnehmer postet viele Codezeilen und bittet um Hilfe:

     Moderator: @Benutzername Bitte benutze CodePen oder Pastebin, wenn du große Mengen an Code postest.

   - Oder wenn du wirklich erklären musst, warum:

     Moderator: @Benutzername Bitte benutze CodePen oder Pastebin, wenn du große Mengen an Code postest, denn das stört den Chat für alle und könnte laut unserem Verhaltenskodex als Spamming angesehen werden.

   - Für leichte und unbeabsichtigte Verstöße gegen den Verhaltenskodex:

     Moderator: Dies ist eine freundliche Erinnerung an alle, den Verhaltenskodex zu befolgen: https://code-of-conduct.freecodecamp.org/

7. **Gib nicht damit an, ein Moderator zu sein**

   Sieh dich nicht als über der Community stehend an. Du bist die Community. Und die Community hat dir vertraut, dass du dabei hilfst, etwas Seltenes zu schützen, das wir alle teilen - einen _einladenden_ Ort für neue Entwickler.

   Wenn du damit angibst, Moderator zu sein, fühlen sich die Leute in deiner Nähe vielleicht unwohl, so wie sich die Leute in der Nähe von Polizisten unwohl fühlen, auch wenn sie nichts Unrechtes tun. Das ist einfach die menschliche Natur.

8. **Widersprich nicht anderen Moderatoren**

   Wenn du mit der Handlung eines Moderators nicht einverstanden bist, sprich mit ihm unter vier Augen oder sprich es im #mod-chat-Kanal an. Setze dich niemals über die Entscheidung eines Moderators hinweg und widerspreche niemals öffentlich den anderen Moderatoren. Führe stattdessen eine sachliche Diskussion im `#mod-chat` und überzeuge den Moderator davon, dass er seinen Bann rückgängig machen oder seinen Standpunkt ändern sollte.

   Denk daran: Wir sind alle im selben Team. Wir wollen die Rolle der Moderatoren würdigen und eine einheitliche Front präsentieren.

9. **Sprich mit anderen Moderatoren**

   Wir haben einen Raum nur für Moderatoren. Benutze ihn! Wenn du dich mit einer bestimmten Situation unwohl fühlst, bitte andere Moderatoren um Hilfe. Wenn du denkst, dass etwas diskutiert werden sollte, dann tu es. Du bist Teil des Teams, und wir schätzen den Beitrag jedes Teammitglieds! Auch wenn du mit diesen Richtlinien oder dem Verhaltenskodex überhaupt nicht einverstanden bist!

10. **Vorübergehend inaktiv**

    Wenn du wegen Urlaub, Krankheit oder aus einem anderen Grund eine Weile nicht als Moderator aktiv sein wirst, lass es die anderen im `#mod-chat` Kanal wissen. So wissen wir, ob wir auf dich zählen können, dass du regelmäßig auf dem Server aktiv bist oder nicht.

## Wie man Moderator wird

Angenommen, du hilfst den Menschen in deiner Community über einen längeren Zeitraum hinweg. In diesem Fall wird unser Moderatorenteam darauf aufmerksam und einer von ihnen wird dich gegenüber [unseren Mitarbeitern](https://forum.freecodecamp.org/g/Team) als möglichen Moderator erwähnen. Es gibt keine Abkürzungen, um Moderator/in zu werden.

Wenn du zugelassen wirst, fügen wir dich zu unseren Moderatorenteams auf [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), im [Forum](https://forum.freecodecamp.org/g/moderators) und im Chat etc. hinzu.

> [!NOTE] Für GitHub: Nachdem du als Moderator akzeptiert wurdest, erhältst du eine Einladung zum Github-Repository. Du musst auf [freeCodeCamp GitHub Organisation Invitation](https://github.com/orgs/freeCodeCamp/invitation) gehen, um die Einladung zu akzeptieren.
> 
> Dies ist erforderlich, damit wir dir Schreibzugriff auf einige unserer Repositories geben können.

## Wie wir inaktive Moderatoren entfernen

Bitte beachte, dass wir häufig Moderatoren entfernen, von denen wir glauben, dass sie inaktiv sind. Wenn wir das tun, senden wir die folgende Nachricht:

```markdown
This is a standard message notifying you that, since you don't seem to have been an active moderator recently, we're removing you from our Moderator team. We deeply appreciate your help in the past.

If you think we did this in error, or once you're ready to come back and contribute more, just reply to this message letting me know.
```

## Wie unser Chatraum für Mitwirkende funktioniert

Jeder ist in dem [Raum für Mitwirkende auf unserem Chat-Server](https://chat.freecodecamp.org/channel/contributors) willkommen. Er ist der Chatraum für Moderatoren und andere Teilnehmer, die auf verschiedene Weise zu unserer Community beitragen, z. B. durch Lerngruppen.

Wir gehen davon aus, dass Mitwirkende alles in diesem Raum lesen, wo sie direkt mit einem `@Benutzername` erwähnt werden. Alles andere ist freiwillig, aber du kannst gerne alles lesen, was dort gepostet wird, und dich einbringen.

## Der Umgang mit Anwälten

Es kann sein, dass du von Organisationen angesprochen wirst, die eine Partnerschaft oder ein Co-Branding mit dem freeCodeCamp anstreben. Sobald du merkst, dass sie das wollen, **hör bitte auf, mit ihnen zu reden** und sag ihnen, sie sollen eine E-Mail an `team[at]freecodecamp.org` schicken.

Wir bekommen ständig solche Vorschläge, und die Mitarbeiter/innen sind am besten in der Lage zu beurteilen, ob sich eine solche Beziehung für unsere Community lohnt (und das ist sie selten).

## Umgang mit Anfragen zur (psychischen) Gesundheit

Es kann sein, dass du auf Situationen triffst, in denen Nutzerinnen und Nutzer medizinischen Rat suchen oder mit psychischen Problemen zu kämpfen haben und nach Unterstützung suchen.

Grundsätzlich solltest du es vermeiden, über diese Angelegenheiten privat zu sprechen. Sollte die Situation auf das freeCodeCamp zurückfallen, wollen wir das Gespräch bzw. die Gespräche dokumentiert haben. Stelle klar, dass wir keine medizinischen Fachleute sind und dass du die Nutzer/innen ermutigst, sich professionelle Hilfe zu suchen.

So schwierig es auch manchmal sein kann, vermeide es, irgendwelche Tipps oder Ratschläge zu geben, außer den Nutzer auf professionelle Hilfe zu verweisen!

Wenn dies auf unserem Chat-Server passiert: Erstelle einen privaten Kanal für den Nutzer und das Mod-Team. Das kannst du mit dem Befehl `private` des Bots machen.

- Dem Nutzer wird eine gewisse Privatsphäre garantiert
- Der öffentliche Chat wir nicht länger unterbrochen
- Andere Teammitglieder können einspringen, wenn es dir unangenehm ist, die Situation selbst zu bewältigen

Hilfreiche URLs:

http://www.suicide.org/international-suicide-hotlines.html

## Eine Anmerkung zur Redefreiheit

Manchmal verteidigen Menschen etwas Beleidigendes oder Hetzerisches, das sie gesagt haben, als "freie Meinungsäußerung".

Dieser XKCD-Comic fasst die Gedanken der meisten Communities zur Redefreiheit perfekt zusammen. Wenn also jemand etwas im Namen der "Redefreiheit" verteidigt, kannst du es ihm gerne schicken.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Danke, dass du das gelesen hast, und danke, dass du der Entwickler-Community hilfst!

## Antwortvorlagen

Dies sind einige der Standard-Antwortvorlagen, die du bei der Überprüfung von Pull-Requests und der Bearbeitung von Issues und Pull-Requests verwenden kannst.

> Du kannst deine eigenen mit der in GitHub eingebauten [**Saved replies**](https://github.com/settings/replies/) Funktion erstellen oder die untenstehenden verwenden.

### Dankeschön

```markdown
Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 🎉
```

### Danke und herzlichen Glückwunsch

> Für die Danksagung und Ermutigung von erstmalig Mitwirkenden.

```markdown
Hi @username. Congrats on your first pull request (PR)! 🎉

Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 📝
```

### Build-Fehler

```markdown
Hey @username

We would love to be able to merge your changes but it looks like there is an error with the CI build. ⚠️

Once you resolve these issues, we will be able to review your PR and merge it. 😊

---

Feel free to reference the [contributing guidelines](how-to-work-on-coding-challenges.md#testing-challenges) for instructions on running the CI build locally. ✅
```

### Fork synchronisieren

> Wenn der PR nicht mit dem `main`-Branch auf dem neuesten Stand ist.

````markdown
Hey @username

We would love to be able to merge your changes, but it looks like the branch is not up to date. ⚠️

To resolve this error, you will have to sync the latest changes from the `main` branch of the `freeCodeCamp/freeCodeCamp` repo.

Using the command line, you can do this in three easy steps:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream main
````

If you're using a GUI, you can simply `Add a new remote...` and use the link `git://github.com/freeCodeCamp/freeCodeCamp.git` from above.

Once you sync your fork and pass the build, we will be able to review your PR and merge it. 😊

---

Feel free to reference the [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
````

### Merge Conflicts

> When PR has merge conflicts that need to be resolved.¹

```markdown
Hey @username

We would love to be able to merge your changes, but it looks like you have some merge conflicts. ⚠️

Once you resolve these conflicts, we will be able to review your PR and merge it. 😊

---

If you're not familiar with the merge conflict process, feel free to look over GitHub's guide on ["Resolving a merge conflict"](https://help.github.com/articles/resolving-a-merge-conflict-on-github/). 🔍️

Dit is ook goeie praktyk op GitHub om 'n kort beskrywing van jou veranderinge te skryf wanneer jy 'n PR skep. 📝
````

¹ Wenn ein erstmaliger Mitwirkender einen Merge-Konflikt hat, werden die Maintainer den Konflikt für ihn auflösen.

### Duplikat

> Wenn eine PR sich wiederholt oder ein Duplikat ist.

```markdown
Hey @username

This PR seems to make similar changes as the existing PR <#number>. As such, we are going to close this as duplicate.

If you feel you have additional changes to expand upon this PR, please feel free to push your commits and request this PR be reopened.

Thanks again! 😊

---

If you have any questions, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://chat.freecodecamp.org/channel/contributors).
```

### Ungültige Pull-Requests schließen

> Wenn PR ungültig ist.

```markdown
Hey @username

Thank you for opening this pull request.

This is a standard message notifying you that we've reviewed your pull request and have decided not to merge it. We would welcome future pull requests from you.

Thank you and happy coding.
```

> Wenn ein PR Links zu externen Ressourcen hinzufügt.

```markdown
Thank you for your pull request.

We are closing this pull request. Please suggest links and other details to add the challenge's corresponding guide post through [a forum topic](https://forum.freecodecamp.org/new-topic?category=Contributors&title=&body=**What%20is%20your%20hint%20or%20solution%20suggestion%3F**%0A%0A%0A%0A%0A**Challenge%3A**%0A%0A%0A**Link%20to%20the%20challenge%3A**) instead.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you, and happy coding.
```

### Ungültige Issues schließen

> Wenn sich ein Issue auf den Code des Teilnehmers bezieht.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Get Help"** button on the challenge on freeCodeCamp and choose the **"Ask for help"** option, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

> Wenn eine Issue ein Duplikat eines früheren Issue ist

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so we are closing it as a duplicate.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

> Wenn ein Problem während des Staging gelöst wird.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, we're closing this issue.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### Issue nur für erstmalige Mitwirkende

> Wenn ein Issue als geeignet für den ersten Codebeitrag eingestuft wird.

```markdown
Thanks for opening this issue.

This looks like something that can be fixed by "first time" code contributors to this repository. Here are the files that you should be looking at to work on a fix:

List of files:

1. ...
2. ...
3. ...

Please make sure you read [our guidelines for contributing](https://contribute.freecodecamp.org/#/), we prioritize contributors following the instructions in our guides. Join us in [our chat room](https://chat.freecodecamp.org/channel/contributors) or [the forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing, our moderators will guide you through this.

Sometimes we may get more than one pull request. We typically accept the most quality contribution followed by the one that is made first.

Happy contributing.
```
