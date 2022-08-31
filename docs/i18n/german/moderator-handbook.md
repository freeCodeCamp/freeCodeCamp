# Das offizielle freeCodeCamp Moderator Handbuch

Dieses Handbuch hilft dir, verschiedene Orte in unserer Community zu moderieren. This covers conversations and interactions in issues and pull request threads on GitHub, the community forum, the chat rooms, and other official communities that we foster.

> [!NOTE] Alle freeCodeCamp-Moderatoren sind Community-weite Moderatoren. That means we trust you to oversee any of these places.

Du kannst auf jeder der Plattformen, die dich am meisten interessieren, als Moderator/in tätig sein. Einige Moderatoren helfen nur auf GitHub, während andere nur im Forum helfen. Einige Moderatoren sind überall aktiv.

Unterm Strich wollen wir, dass es dir Spaß macht, Moderator/in zu sein, und dass du deine knappe Zeit in Dinge investierst, die dich interessieren.

> "Mit großer Macht kommt große Verantwortung" - Uncle Ben

Als Moderator/in ist das Temperament wichtiger als die technischen Fähigkeiten.

Hör zu. Be helpful. Missbrauche deine Macht nicht.

Das freeCodeCamp ist eine inklusive Community, und das soll auch so bleiben.

We have a single [Code of Conduct](https://code-of-conduct.freecodecamp.org) that governs our entire community. Je weniger Regeln, desto einfacher ist es, sich sie zu merken. Du kannst die Regeln [hier](https://code-of-conduct.freecodecamp.org) lesen und sie dir einprägen.

> [!NOTE] As a moderator we would add you to one or more teams on GitHub, our community forums & chat servers. If you are missing access on a platform that you would like to moderate, please [reach out to a staff member](FAQ.md#additional-assistance).

## GitHub moderieren

Auf GitHub haben Moderatoren zwei Hauptaufgaben:

1. Triaging and responding to issues.
2. Reviewing and merging pull requests (aka QA).

### GitHub Issues moderieren

We use our main [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp/issues) repository as a common issue tracker for all of our repositories. We get new issues every day, all of which need to be triaged, labeled, and addressed. Das ist auch ein guter Ort, um mit Beiträgen zur Open-Source-Codebasis anzufangen.

#### Triage von Issues

[Triaging](https://en.wikipedia.org/wiki/Triage) ist ein Prozess, bei dem die Aufmerksamkeit für jeden neuen Issue Report priorisiert wird. Wir haben eine umfangreiche Liste von Labels, die wir verwenden, um die Priorität, Kategorie, Status und Umfang jedes Problems zu kennzeichnen.

Du kannst uns helfen, die Issues zu ordnen und einzuteilen, indem du Labels aus [dieser Liste](https://github.com/freeCodeCamp/freeCodeCamp/labels) anwendest. Normalerweise ist neben dem Label eine Beschreibung verfügbar, in der die Bedeutung erläutert wird.

Bitte achte besonders auf die Label `"help wanted"` und `"first timers only"`. Diese sollen zu Threads hinzugefügt werden, von denen du denkst, dass sie für potenzielle Mitwirkende geöffnet werden können, um einen Pull-Request zu erstellen.

A `"first timers only"` label should be applied to a trivial issue (ie a typo fix) and should include additional information. Du kannst diese [Antwortvorlage](moderator-handbook.md#first-timer-only-issues) für die Triage verwenden.

#### Schließen veralteter, inaktiver Issues und Pull-Requests

- Veraltete Issues oder PRs sind solche, die seit 21 Tagen (3 Wochen nach der letzten Aktivität) keine Aktivität vom Autor erfahren haben, aber erst nachdem ein Moderator weitere Informationen/Änderungen angefordert hat.

- Activity is defined as: Comments requesting an update on the PR and triages like `status: update needed` label, etc.

- Wenn der Beitragende um zusätzliche Hilfe oder sogar Zeit bittet, kann das oben Gesagte gelockert und nach einer Antwort erneut überprüft werden. In jedem Fall sollten die Moderatoren nach bestem Wissen und Gewissen den Status der ausstehenden PR klären.

> [!TIP] Wir empfehlen dir, diese Liste von standardisierten [Antwortvorlagen](moderator-handbook.md#reply-templates) zu verwenden, wenn du Issues bearbeitest.

### Pull-Requests moderieren

Pull Requests (PRs) sind die Art und Weise, wie Mitwirkende Änderungen an das freeCodeCamp-Repository übermitteln. Wir müssen eine Qualitätssicherung (QA) für Pull-Requests durchführen, bevor wir entscheiden, ob wir sie zusammenführen, Änderungen beantragen oder schließen.

#### Arten von Pull Requests

1. **Challenge instruction edits**

   These are changes to the text of challenges - the description, instructions, or test text.

   Du kannst sie auch direkt auf GitHub überprüfen und entscheiden, ob du sie zusammenführen möchtest. Wir müssen hier etwas vorsichtiger sein, denn Millionen von Menschen werden diesem Text begegnen, wenn sie den freeCodeCamp-Studienplan durcharbeiten. Macht der Pull-Request den Text klarer, ohne ihn viel länger zu machen? Sind die Änderungen relevant und nicht übermäßig pedantisch? Denke daran, dass unser Ziel ist, dass die Aufgaben so deutlich und so kurz wie möglich sind. Sie sind nicht der Ort für unklare Details. Die Mitwirkenden könnten versuchen, Links zu Ressourcen zu den Aufgaben hinzuzufügen.

   Mit diesen [Antwortvorlagen](moderator-handbook.md#closing-invalid-pull-requests) kannst du ungültige Pull-Requests schließen und darauf antworten.

   If the changes look good, please ensure to leave an approval with a "LGTM" (Looks Good To Me) comment. Sobald ein Pull Request mindestens zwei Genehmigungen (einschließlich deiner) von den Moderatoren oder dem Entwicklungsteam erhält, kannst du ihn zusammenführen.

2. **Challenge code edits**

   These are changes to the code in a challenge - the challenge seed, challenge solution, and test strings.

   These pull requests need to be pulled down from GitHub and tested on your local computer or Gitpod to make sure the challenge tests can still be passed with the current solution and to make sure the new code doesn't introduce any errors.

   Einige Mitwirkende werden versuchen, zusätzliche Tests hinzuzufügen, um spitzfindige Sonderfälle abzudecken. Wir müssen aufpassen, dass wir die Aufgabe nicht zu kompliziert machen. Diese Aufgaben und ihre Tests sollten so einfach und intuitiv wie möglich sein. Abgesehen von den Algorithmusaufgaben und dem Abschnitt zur Interviewvorbereitung sollten die Teilnehmer/innen in der Lage sein, jede Aufgabe innerhalb von etwa 2 Minuten zu lösen.

   Mit diesen [Antwortvorlagen](moderator-handbook.md#closing-invalid-pull-requests) kannst du ungültige Pull-Requests schließen und darauf antworten.

   If the changes look good, please ensure to leave an approval with a "LGTM" comment. Sobald ein Pull-Request mindestens zwei Genehmigungen (einschließlich deiner) von den Moderatoren oder dem Entwicklungsteam erhält, kannst du ihn zusammenführen.

3. **Platform changes**

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

##### Handling Merge Conflicts:

Sometimes there will be a merge conflict.

Das bedeutet, dass ein anderer Pull-Request eine Änderung an demselben Teil der Datei vorgenommen hat. GitHub hat ein Tool, mit dem du diese Merge-Konflikte direkt auf GitHub lösen kannst. Du kannst versuchen, diese Konflikte zu lösen. Use your best judgment.

Die Änderungen des Pull-Requests stehen oben und die des main-Branch unten. Manchmal gibt es dort überflüssige Informationen, die gelöscht werden können. Bevor du fertig bist, stelle sicher, dass du die `<<<<<`, `======` und `>>>>>>` löschst, die Git hinzufügt, um Merge-Konflikte anzuzeigen.

Wenn du dir unsicher bist, frag bitte einen der anderen Moderatoren oder das Entwicklerteam um Hilfe.

##### Zusammenführen eines gültigen Pull-Requests:

Wenn der Pull-Request so aussieht, dass er zusammengeführt werden kann (und keine weiteren Genehmigungen benötigt - denk daran, dass wir mindestens zwei benötigen), kannst du ihn zusammenführen. Achte darauf, dass du die Standardoption **"Squash and Merge"** verwendest. Dadurch werden alle Pull-Request-Commits zu einem einzigen Commit zusammengefasst, wodurch die Git-Historie viel einfacher zu lesen ist.

> You should then comment on the pull request, thanking the contributor in your own personal way!

Wenn der Autor des Pull-Requests zum ersten Mal beiträgt, solltest du ihm auch zu seinem ersten zusammengefassten Pull-Request für das Repository gratulieren. Du kannst in der oberen rechten Ecke des PR-Body nachsehen, ob es sich um einen "first-time" Mitwirkenden handelt. Es wird `First-time contributor` angezeigt, wie unten dargestellt:

<details>
   <summary>
      First-time contributor badge on pull requests (screenshot)
   </summary>

   <br>
   <img src="https://i.imgur.com/dTQMjGM.png" alt="Abzeichen für den erstmaligen Beitrag zu einem Pull-Requests" />
</details>

Wenn der Pull-Request nicht bereit zum Zusammenführen zu sein scheint, kannst du dem Autor höflich antworten und ihm sagen, was er tun sollte, um ihn fertigzustellen. Wir hoffen, dass sie antworten und ihr Pull-Request bald fertig ist.

Wenn du eine zweite Meinung zu einem Pull-Request benötigst, hinterlasse deine Kommentare zu dem Pull-Request und füge dann das Label "discussing" zu dem Pull-Request hinzu.

##### Closing an Invalid Pull Request:

Oft ist ein Pull-Request mit wenig Aufwand verbunden. You can usually tell this immediately when the contributor didn't bother checking the checkboxes in the Pull Request Template or used a generic pull request title like "Made changes" or "Update index.md".

Es gibt auch Situationen, in denen der/die Mitwirkende versucht, einen Link zu seiner/ihrer Website hinzuzufügen, eine von ihm/ihr erstellte Bibliothek einzubinden oder eine unseriöse Bearbeitung vorzunehmen, die niemandem außer ihm/ihr selbst hilft.

You can close these invalid pull requests and reply to them with these [reply templates](moderator-handbook.md#closing-invalid-pull-requests).

#### Other Guidelines for Moderators on GitHub

Obwohl du Schreibzugriff auf das freeCodeCamp-Repository hast, **solltest du niemals Code direkt in die freeCodeCamp-Repositories pushen**. Der gesamte Code sollte in Form eines Pull-Requests von einem Fork des Repositorys in die Codebasis von freeCodeCamp gelangen.

Außerdem solltest du niemals deine eigenen PRs akzeptieren. Sie müssen von einem anderen Moderator überprüft werden, genau wie jeder andere PR.

If you notice anyone breaking the [Code of Conduct](https://code-of-conduct.freecodecamp.org) on GitHub issues, or opening pull requests with malicious content or code, email `support[at]freecodecamp.org` with a link to the offending pull request, and we can consider banning them from freeCodeCamp's GitHub organization entirely.

## Das Forum moderieren

As a moderator, you help keep our community an enjoyable place for anyone to learn and get help. Du bearbeitest markierte Beiträge und kümmerst dich um Spam, Off-Topic und andere unangemessene Unterhaltungen.

Sobald du ein Moderator im Forum bist, wirst du blaue Moderatorenhinweise zu Forenmitgliedern sehen, wie z. B. "Dies ist das erste Mal, dass [person] gepostet hat - heißen wir sie in der Community willkommen!" oder "[person] hat schon lange nicht mehr gepostet - heißen wir sie wieder willkommen."

![Eine blaue Textnachricht mit dem Hinweis "Dies ist das erste Mal, dass [person] gepostet hat - heißen wir sie in der Community willkommen!](https://i.imgur.com/mPmVgzK.png)

Das sind Gelegenheiten für dich, sie willkommen zu heißen und ihnen das Gefühl zu geben, etwas Besonderes zu sein. Man weiß nie, welche Person, die nur am Rande beteiligt ist, unser nächster Superhelfer wird, der vielen anderen Menschen auf ihrem Weg zum Programmieren hilft. Selbst die kleinste Freundlichkeit kann eine Kaskade von guten Taten auslösen.

### Deleting Forum Posts

Forum moderators can delete users' posts. Du solltest dies nur in den folgenden Fällen tun:

1. Jemand hat ein pornografisches oder grafisch gewalttätiges Bild gepostet.
2. Jemand hat einen Link oder Code gepostet, der bösartig ist und anderen Teilnehmern, die darauf klicken, schaden könnte.
3. Someone has flooded a thread with a lot of spam messages.

### Dealing with Spam

Beim ersten Spam-Posting eines Nutzers schickst du ihm eine Nachricht, in der du das Problem erklärst, und entfernst den Link oder das Posting, falls nötig. Hinterlasse eine Notiz im Profil des Nutzers, in der du die von dir ergriffene Maßnahme erklärst. Wenn das Problem weiterhin besteht, sperre den/die Benutzer/in stillschweigend für Beiträge (mit der Stille-Option im Benutzer-Administrationsbereich). Send the user a warning with the [Code of Conduct](https://code-of-conduct.freecodecamp.org). Aktiviere das Kästchen in der privaten Nachricht, das angibt, dass deine Nachricht eine "formelle Warnung" ist.

As a moderator, you can ask questions and report incidents in the [mod-team forum section](https://forum.freecodecamp.org/c/mod-team/4).

### Dealing with Off-Topic Conversations

Posts or topics that seem to be in the wrong place can be recategorized or renamed to whatever would be appropriate.

In Ausnahmefällen kann es für einen Moderator angemessen sein, eine Diskussion in mehrere Threads aufzuteilen.

Again, if you have any problems or questions, make a post with your actions in the `"Staff"` category, and tag another moderator if you want them to review your moderating actions.

### Minderjährige Nutzer

Our [Terms of Service](https://freecodecamp.org/terms) require that freeCodeCamp users be at least 13 years of age. Wenn ein/e Nutzer/in preisgibt, dass er/sie unter 13 Jahre alt ist, schicke ihm/ihr die unten stehende Nachricht und lösche sein/ihr Forumskonto (wenn eine Löschung nicht möglich ist, reicht die Sperrung des Kontos).

**Schicke eine E-Mail an `support[at]freecodecamp.org`, um auch das freeCodeCamp-Konto des Nutzers zu löschen.**

```markdown
SUBJECT: Users under 13 are not allowed to use the forum per our Terms of Service.

It has come to our attention that you are under 13 years of age. Per the [freeCodeCamp Terms of Service](https://freecodecamp.org/terms), you must be at least 13 years old to use the site or the forum. We will be deleting both your freeCodeCamp account and your forum account. This restriction keeps us in compliance with United States laws.

Please rejoin once you have reached at least 13 years of age.

Thank you for understanding.
```

## Facebook moderieren

Wenn du etwas siehst, das gegen unseren [Verhaltenskodex](https://code-of-conduct.freecodecamp.org/) zu verstoßen scheint, solltest du es sofort löschen.

Manchmal posten Menschen Dinge, die sie für lustig halten. Sie erkennen nicht, dass das, was sie gesagt oder geteilt haben, als beleidigend interpretiert werden könnte. Du solltest solche Beiträge löschen, aber nicht unbedingt die Person verbannen. Hoffentlich begreift der/die NutzerIn, dass das, was er/sie gepostet hat, unangemessen war, denn der Beitrag wurde gelöscht.

Aber wenn es eine ungeheuerliche Beleidigung ist, welche nicht auf einen kulturellen Unterschied oder einem Missverständnis in der englischen Sprache zurückgeführt werden kann. Dann solltest du in diesem Fall ernsthaft in Erwägung ziehen, das Mitglied aus der Facebook-Gruppe zu sperren.

## Moderating Discord

Hier erfährst du, wie die Moderatoren mit Verstößen gegen unseren [Verhaltenskodex](https://code-of-conduct.freecodecamp.org/) auf unserem Chat-Server umgehen:

> [!NOTE] Camperbot serves as our moderation bot, and all of the commands use Discord's native slash command interface. You can see a list of all of the commands by typing `/` in any channel.

1. **Make sure the user intended to violate the [Code of Conduct](https://code-of-conduct.freecodecamp.org).**

   Not all violations of the [Code of Conduct](https://code-of-conduct.freecodecamp.org) were intended as such. A new camper might post a large amount of code for help, unaware that this can be disruptive to conversation. In diesen Fällen kannst du sie einfach bitten, ihren Code mit Diensten wie CodePen oder Pastebin einzufügen.

2. **If the camper clearly and intentionally violates the [Code of Conduct](https://code-of-conduct.freecodecamp.org), the moderator will proceed as follows:**

   For minor offences, a warning may be issued with the `/warn` command. For more egregious offences, you can remove the member from the server temporarily with the `/kick` command, or permanently with the `/ban` command. In some cases, a member may just need some time to cool off and collect their thoughts - the `/mute` command allows you to prevent them from engaging with our community for a set period of time. A muted member can see the conversation, but cannot post messages or add reactions.

   All moderation commands will take a `reason` parameter, which should be a short explanation of why the action was taken. Moderation actions done with the bot will be logged in `#mod-log`, which allows us all to stay on the same page. As such, we should avoid using Discord's built-in moderation tools, as they will not be logged.

   > [!WARNING] The reason provided to a moderation command will also be included in the DM notification to the camper. Please remember to be professional here.

3. **Creating a private discussion**

   Es kann Situationen geben, in denen du ein Anliegen mit einem Teilnehmer unter vier Augen besprechen musst. Dies sollte nicht über DMs geschehen, da dies zu Situationen führen kann, in denen du eine Sache behauptest und der Teilnehmer eine andere. Nutze stattdessen die Funktionen des Bots, um eine private Diskussion zu führen:

   - Call the `/private` command, where `target` is the camper you want to open a private channel with.
   - Der Bot erstellt einen neuen Channel und fügt den genannten Camper und alle Moderatoren mit der Rolle `Your Friendly Moderator` hinzu. Obwohl alle Moderatoren zur Transparenz in den Kanal aufgenommen werden, sollte der Moderator, der diesen Befehl aufruft, der einzige sein, der mit dem Teilnehmer interagiert, es sei denn, er bittet um Hilfe.
   - When the conversation is complete, click the `❌ Close` button _on the first message in the private channel_ to have the bot close and delete that channel.

4. **Deleting messages**

   Our moderation bot is configured to log deleted messages automatically in the `#mod-log` channel. If a message is not in line with our Code of Conduct, or otherwise not appropriate for our community, you are generally safe to delete it.

   Note that if the message contains content that violates Discord's terms of service, you'll want to report it via https://dis.gd/report **prior to** deleting it.

5. **Don’t threaten to take action**

   If a camper breaks the [Code of Conduct](https://code-of-conduct.freecodecamp.org), don’t threaten to take moderator action, and never warn them in public. Instead, talk to them privately using the bot's `/private` command, or use the bot's moderation commands.

   If a violation was clearly unintended and doesn't warrant moderation action or private conversation, make the offending camper aware of their actions without making it come across as a warning.

   For example:

   - Camper posts a wall of code to request help:

     Moderator: **@username** Please use CodePen or Pastebin when posting large amounts of code.

   - Or if you really have to explain why:

     Moderator: **@username** Please use CodePen or Pastebin when posting large amounts of code, because it disrupts the chat for everyone and could be considered spamming according to our [Code of Conduct](https://code-of-conduct.freecodecamp.org).

   - For mild and unintentional violations of the [Code of Conduct](https://code-of-conduct.freecodecamp.org):

     Moderator: This is a friendly reminder for everyone to follow the [Code of Conduct](https://code-of-conduct.freecodecamp.org): https://code-of-conduct.freecodecamp.org/

6. **Don’t brag about being a moderator**

   Do not see yourself as above the community. **You are the community.** And the community has trusted you to help protect something rare that we all share - a _welcoming_ place for new developers.

   If you brag about being a moderator, people may feel uneasy around you, in the same way that people may feel uneasy around a police officer, even if they’re doing nothing wrong. This is just human nature.

7. **Don’t contradict other moderators**

   If you disagree with a moderator's action, talk with them in private or bring it up in the #mod-chat channel. Never override a moderator's action, and never contradict the other moderator(s) publicly. Instead, have a cool-headed discussion in `#mod-chat` and convince the moderator that they themselves should reverse their ban or change their PoV (Point of View).

   _Remember: We’re all on the same team. We want to dignify the role of moderators and present a unified front._

8. **Talk with other moderators**

   We have a `#mod-chat` room for moderators only. Use it! If you feel uncomfortable with handling a certain situation, ask other moderators for help. If you think something should be discussed, do it. You're part of the team, and we value every team member's input! Even if you totally disagree with anything in these guidelines or the [Code of Conduct](https://code-of-conduct.freecodecamp.org)!

9. **Temporarily inactive**

   If you're not going to be active as a Moderator for a while due to vacation, illness, or any other reason, make sure to let the others know in the `#mod-chat` channel. This is so we know if we can count on you to be regularly active on the server or not.

## How to Become a Moderator

Angenommen, du hilfst den Menschen in deiner Community über einen längeren Zeitraum hinweg. In that case, our moderator team will eventually take notice, and one of them will mention you as a possible moderator to [our staff](https://forum.freecodecamp.org/g/Team). Es gibt keine Abkürzungen, um Moderator/in zu werden.

If you are approved, we will add you to our moderator teams on [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), chat, etc.

> [!NOTE] For GitHub: After you've been accepted as a moderator, you will receive a Github repository invitation. You'll need to head over towards [freeCodeCamp GitHub Organization Invitation](https://github.com/orgs/freeCodeCamp/invitation) to be able to accept the invitation.
> 
> This is required for us to be able to give you write access to some of our repositories.

## How We Retire Inactive Moderators

Please note that we will frequently remove moderators whom we think are inactive. Wenn wir das tun, senden wir die folgende Nachricht:

```markdown
This is a standard message notifying you that, since you don't seem to have been an active moderator recently, we're removing you from our moderator team. We deeply appreciate your help in the past.

If you think we did this in error, or once you're ready to come back and contribute more, just reply to this message letting us know.
```

## How Our Contributors Room Works

Anyone is welcome in the [contributors room on our chat server](https://discord.gg/PRyKn3Vbay). Er ist der Chatraum für Moderatoren und andere Teilnehmer, die auf verschiedene Weise zu unserer Community beitragen, z. B. durch Lerngruppen.

We assume contributors will read anything in this room that directly mentions them with an **@username**. Alles andere ist freiwillig, aber du kannst gerne alles lesen, was dort gepostet wird, und dich einbringen.

## Dealing with Solicitors

Es kann sein, dass du von Organisationen angesprochen wirst, die eine Partnerschaft oder ein Co-Branding mit dem freeCodeCamp anstreben. Sobald du merkst, dass sie das wollen, **hör bitte auf, mit ihnen zu reden** und sag ihnen, sie sollen eine E-Mail an `team[at]freecodecamp.org` schicken.

Wir bekommen ständig solche Vorschläge, und die Mitarbeiter/innen sind am besten in der Lage zu beurteilen, ob sich eine solche Beziehung für unsere Community lohnt (und das ist sie selten).

## Dealing with (Mental) Health Inquiries

Es kann sein, dass du auf Situationen triffst, in denen Nutzerinnen und Nutzer medizinischen Rat suchen oder mit psychischen Problemen zu kämpfen haben und nach Unterstützung suchen.

Grundsätzlich solltest du es vermeiden, über diese Angelegenheiten privat zu sprechen. Sollte die Situation auf das freeCodeCamp zurückfallen, wollen wir das Gespräch bzw. die Gespräche dokumentiert haben. Stelle klar, dass wir keine medizinischen Fachleute sind und dass du die Nutzer/innen ermutigst, sich professionelle Hilfe zu suchen.

As difficult as it sometimes can be, avoid giving any tips or advice and rather point the user in the direction of seeking professional help!

If this happens on our chat server: Create a private channel for the user and the moderator team. Das kannst du mit dem Befehl `private` des Bots machen.

- The user is guaranteed some privacy.
- Public chat is no longer disrupted.
- Other team members can pitch in, should you feel uncomfortable dealing with the situation yourself.

Hilfreiche URLs:

http://suicide.org/international-suicide-hotlines.html

## A Note on Free Speech

Manchmal verteidigen Menschen etwas Beleidigendes oder Hetzerisches, das sie gesagt haben, als "freie Meinungsäußerung".

This XKCD comic summarizes perfectly most communities' thoughts on free speech.

<div align="center"><img src='./images/github/xkcd-free-speech.png' width="400" height="400" /></div>

Danke, dass du das gelesen hast, und danke, dass du der Entwickler-Community hilfst!

## Antwortvorlagen

These are some of the standard reply templates that you may use while reviewing pull requests and triaging issues/pull requests.

> You can make your own saved replies with GitHub's built-in [saved replies](https://github.com/settings/replies/) feature or use the ones below.

### Thank You

```markdown
Thank you for your contribution to the page! 👍
We are happy to accept these changes and look forward to future contributions. 🎉
```

### Danke und herzlichen Glückwunsch

> For thanking and encouraging first-time contributors.

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

> When PR is not up to date with the `main` branch.

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

Feel free to reference the ["Syncing a fork"](https://help.github.com/articles/syncing-a-fork/) article on GitHub for more insight on how to keep your fork up-to-date with the upstream repository. 🔄
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

> When PR is repetitive or a duplicate.

```markdown
Hey @username

This PR seems to make similar changes as the existing PR <#number>. As such, we are going to close this as duplicate.

If you feel you have additional changes to expand upon this PR, please feel free to push your commits and request this PR be reopened.

Thanks again! 😊

---

If you have any questions, feel free to ask questions on the ["Contributors" category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://discord.gg/PRyKn3Vbay).
```

### Closing Invalid Pull Requests

> When PR is invalid.

```markdown
Hey @username

Thank you for opening this pull request.

This is a standard message notifying you that we've reviewed your pull request and have decided not to merge it. We would welcome future pull requests from you.

Thank you and happy coding.
```

> When PR adds links to external resources.

```markdown
Thank you for your pull request.

We are closing this pull request. Please suggest links and other details to add the challenge's corresponding guide post through [a forum topic](https://forum.freecodecamp.org/new-topic?category=Contributors&title=&body=**What%20is%20your%20hint%20or%20solution%20suggestion%3F**%0A%0A%0A%0A%0A**Challenge%3A**%0A%0A%0A**Link%20to%20the%20challenge%3A**) instead.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### Ungültige Issues schließen

> When an issue relates to the camper's code.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue seems to be a request for help. Instead of asking for help here, please click the **"Get Help"** button on the challenge on freeCodeCamp and choose the **"Ask for help"** option, which will help you create a question in the right part of the forum. Volunteers on the forum usually respond to questions within a few hours and can help determine if there is an issue with your code or the challenge's tests.

If the forum members determine there is nothing wrong with your code, you can request this issue to be reopened.

Thank you and happy coding.
```

> When an issue is duplicate of an earlier issue.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that this issue appears to be very similar to issue #XXXXX, so we are closing it as a duplicate.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

> When an issue is fixed in staging.

```markdown
Thank you for reporting this issue.

This is a standard message notifying you that the problem you mentioned here is present in production, but that it has already been fixed in staging. This means that the next time we push our staging branch to production, this problem should be fixed. Because of this, we're closing this issue.

If you think we're wrong in closing this issue, please request for it to be reopened and add further clarification. Thank you and happy coding.
```

### `first timer only` Issues

> When an issue is deemed to be eligible for first-time code contributors.

```markdown
Thanks for opening this issue.

This looks like something that can be fixed by "first-time" code contributors to this repository. Here are the files that you should be looking at to work on a fix:

List of files:

1. ...
2. ...
3. ...

Please make sure you read our [guidelines for contributing](https://contribute.freecodecamp.org/#/), we prioritize contributors following the instructions in our guides. Join us in our [chat room](https://discord.gg/PRyKn3Vbay) or our [forum](https://forum.freecodecamp.org/c/contributors/3) if you need help contributing; our moderators will guide you through this.

Sometimes we may get more than one pull request. We typically accept the most quality contribution followed by the one that is made first.

Happy contributing.
```
