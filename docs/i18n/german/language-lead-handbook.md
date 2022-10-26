# Das offizielle freeCodeCamp-Language Lead-Handbuch

Dieses Handbuch hilft dir dabei, die Tools für deine Lokalisierungsvorhaben einzurichten und zu nutzen.

## Wie du neue Mitwirkende zu Ghost einlädst

Ghost ermöglicht es dir, Mitwirkende mit verschiedenen Berechtigungsstufen festzulegen.

Die meisten Ihrer Einladungen werden für die Stufe "Contributor " sein. Auf dieser Ebene kann der Benutzer Entwürfe erstellen. Wähle diese Rolle, wenn du einen neuen Übersetzer einlädst.

Die Stufe "Author" ermöglicht es dem Benutzer, Entwürfe zu erstellen und diese zu veröffentlichen.

Auf der Ebene "Editor" hat der Benutzer Zugriff auf alle Entwürfe und kann sie veröffentlichen. Wähle diese Rolle, wenn du einen neuen Korrekturleser (proofreader) einlädst.

Die Stufe "Administrator" ist für freeCodeCamp-Mitarbeiter und Language Leads reserviert.

### Wie Artikel erstellt werden

Wir verwenden einen [JAMStack](https://www.google.com/search?q=what+is+jamstack)-basierten Ansatz zur Erstellung und Bereitstellung der Artikel. Diese Strategie sorgt für eine schnelle statische Website, die von einem CDN zwischengespeichert und bereitgestellt wird.

[Ghost](https://ghost.org) fungiert als unsere Content-Management-Plattform, und [11ty](https://11ty.dev) erstellt aus den Artikeln statische Inhalte - einfaches HTML, JavaScript und CSS. Nur diese statischen Inhalte werden auf unseren Servern bereitgestellt.

Dieser Prozess ist automatisiert und läuft regelmäßig ab. Wenn du jetzt etwas veröffentlichst, wird es in ein paar Stunden auf der Nachrichtenseite verfügbar sein.

Die aktuellen Zeitpläne und den Status kannst du hier einsehen: https://github.com/freeCodeCamp/news#build

## Wie man den Originalautor eines übersetzten Artikels erwähnt

Der ursprüngliche Autor und der ursprüngliche Artikel werden automatisch verlinkt, indem dieser Code dem Abschnitt Code Injection -> head in den Entwurfs-Einstellungen auf Ghost hinzugefügt wird.

```html
<script>
  const fccOriginalPost = 'link';
</script>
```

`Link` ist der Link zum Originalartikel.

## Wie man angesagte Artikel aktualisiert

> [!TIP] Die Artikel in der Fußzeile mindestens einmal im Monat zu ändern, führt zu einer Verbesserung der Google-Ergebnisse für die verlinkten Artikel.

Es gibt zwei Stellen, an denen du die angesagten Artikel ändern kannst.

- [Das Curriculum-Repository](https://github.com/freeCodeCamp/freeCodeCamp/)
- [Das CDN-Repository](https://github.com/freeCodeCamp/cdn)

Für jeden Artikel musst du einen kürzeren Titel erstellen, den du in der Fußzeile (Footer) verwenden kannst.

### Änderung angesagter Artikel im Lehrplan (Curriculum)

Die angesagte  Artikel in der Fußzeile des Lehrplans können durch Bearbeiten der Datei `client/i18n/locales/<language>/trending.json` geändert werden.

Diese Datei ist eine `*.json`-Datei, die die Form eines Objekts mit Eigenschaftsschlüsseln in der Form `article0title` und `article0link` hat.

Jede Zahl steht für einen der 30 Artikel in der Fußzeile. Achte darauf, dass der Titel und der Link richtig zugeordnet sind.

Dies ist ein Beispiel dafür, wie ein Teil der Datei `trending.json` aussehen muss.

```json
{
  "article0title": "Unire CSV con Python",
  "article0link": "https://www.freecodecamp.org/italian/news/come-combinare-file-multipli-in-formato-csv-con-8-righe-di-codice/",
  "article1title": "Il comando Git push",
  "article1link": "https://www.freecodecamp.org/italian/news/il-comando-git-push-spiegato/",
  "article2title": "Centrare immagini in CSS",
  "article2link": "https://www.freecodecamp.org/italian/news/come-centrare-un-immagine-usando/",
  "article3title": "I codici Alt",
  "article3link": "https://www.freecodecamp.org/italian/news/codici-alt/",
  "article4title": "Tenere a bada il footer",
  "article4link": "https://www.freecodecamp.org/italian/news/come-mantenere-il-footer-al-suo-posto/",
  "article5title": "Cosa è un'API?",
  "article5link": "https://www.freecodecamp.org/italian/news/cose-un-api-in-italiano-per-favore/",
  ...
}
```

Du solltest [den übersetzten Client lokal einrichten](how-to-enable-new-languages.md), um zu sehen, ob die Titel die richtige Länge haben. Jeder Titel muss in einer einzigen Zeile bleiben und darf nicht in eine neue Zeile übergehen.

### Wie man angesagte Artikel im cdn aktualisiert

Die Datei im cdn-Repository ist die Datei `universal/trending/<language>.yaml`.

Diese Datei ist unterschiedlich aufgebaut, zum Beispiel hier der Inhalt der ersten 6 Artikel:

```yaml
article0title: 'Unire CSV con Python'
article0link: 'https://www.freecodecamp.org/italian/news/come-combinare-file-multipli-in-formato-csv-con-8-righe-di-codice/'
article1title: 'Il comando Git push'
article1link: 'https://www.freecodecamp.org/italian/news/il-comando-git-push-spiegato/'
article2title: 'Centrare immagini in CSS'
article2link: 'https://www.freecodecamp.org/italian/news/come-centrare-un-immagine-usando/'
article3title: 'I codici Alt'
article3link: 'https://www.freecodecamp.org/italian/news/codici-alt/'
article4title: 'Tenere a bada il footer'
article4link: 'https://www.freecodecamp.org/italian/news/come-mantenere-il-footer-al-suo-posto/'
article5title: 'Cosa è API?'
article5link: 'https://www.freecodecamp.org/italian/news/cose-un-api-in-italiano-per-favore/'
```

Du kannst von einem Format in ein anderes konvertieren, indem du es vorsichtig manuell ändern. Oder du kannst [das Skript in diesem Repl](https://replit.com/@Ieahleen/convert-json-to-yaml) verwenden.

> [!TIP] Es wird an einem neuen Arbeitsablauf gearbeitet, sodass es in Zukunft nur noch eine Stelle gibt, an der Änderungen vorgenommen werden müssen.

## How to translate articles in the footer links

There are some links listed at the bottom of the footer (About, Alumni Network, Open Source etc.) and some of them can be translated into your language in the same way as other articles.

Articles that can be translated:

- About
- Support
- Academic Honesty
- Code of Conduct

The following articles should **not** be translated:

- Shop
- Sponsors
- Privacy Policy
- Terms of Service
- Copyright Policy

The following links are pointing to external sites and cannot be translated:

- Alumni Network
- Open Source

### Change the footer links in the news

Once you have translated and published the articles listed as "can be translated" above, you can update the links in the footer for `/news` by editing the file at `news/config/i18n/locales/<your language>/links.json` in the [freeCodeCamp/news](https://github.com/freeCodeCamp/news) repository.

> [!NOTE] Pull requests to this repository are currently limited to staff only. If you want to update this file, ask someone on the staff team for help.

Update the following part in the file:

```json
{
  ...
  "footer": {
    "about": "https://www.freecodecamp.org/news/about/",
    "support": "https://www.freecodecamp.org/news/support/",
    "honesty": "https://www.freecodecamp.org/news/academic-honesty-policy/",
    "coc": "https://www.freecodecamp.org/news/code-of-conduct/"
  }
}
```

### Change the footer links in the curriculum

When you have translated and published the articles listed as "can be translated" above, as well as when the curriculum in your language is ready for launch, you can update the links in the footer for `/learn` by editing the file at `client/i18n/locales/<your language>/links.json` in the [freeCodeCamp/freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) repository.

> [!WARNING] Only "About", "Support", "Academic Honesty", and "Code of Conduct" can be translated. Leave other URLs unchanged.

Update the following part in the file:

```json
{
  ...
  "footer": {
    "about-url": "https://www.freecodecamp.org/news/about/",
    "shop-url": "https://www.freecodecamp.org/shop/",
    "support-url": "https://www.freecodecamp.org/news/support/",
    "sponsors-url": "https://www.freecodecamp.org/news/sponsors/",
    "honesty-url": "https://www.freecodecamp.org/news/academic-honesty-policy/",
    "coc-url": "https://www.freecodecamp.org/news/code-of-conduct/",
    "privacy-url": "https://www.freecodecamp.org/news/privacy-policy/",
    "tos-url": "https://www.freecodecamp.org/news/terms-of-service/",
    "copyright-url": "https://www.freecodecamp.org/news/copyright-policy/"
  },
  ...
}
```

## Wie man die Überschriften der Infoboxen in der Dokumentation übersetzt

Du findest diese Boxen überall in der Dokumentation:

> [!NOTE] Ich bin eine Notizbox

> [!TIP] Ich bin eine Tippbox

> [!WARNING] Ich bin eine Warnbox

> [!ATTENTION] Ich bin eine Aufmerksamkeitsbox

Standardmäßig erscheinen die Kopfzeilen auch in den übersetzten Dokumenten auf Englisch.

Du kannst die Kopfzeilen in den Dokumenten in deine Sprache übersetzen lassen, indem du die Datei `docs/index.html` auf diese Weise änderst:

Innerhalb des `script` Elements gibt es ein Objekt, die `flexibleAlerts` Eigenschaft, die diese Form hat:

```js
flexibleAlerts: {
  note: {
    label: {
      '/': 'Note'
    }
  },
  tip: {
    label: {
      '/': 'Tip'
    }
  },
  warning: {
    label: {
      '/': 'Warning'
    }
  },
  attention: {
    label: {
      '/': 'Attention'
    }
  }
}
```

Innerhalb des Objekts der Label-Eigenschaft, vor der `'/'`-Eigenschaft, fügst du eine neue Eigenschaft für deine Sprache hinzu, wie `/i18n/<language>/`.

Das Hinzufügen der Übersetzungen für Portugiesisch würde zum Beispiel so aussehen:

```js
flexibleAlerts: {
  note: {
    label: {
      '/i18n/portuguese/': 'Observação',
      '/': 'Note'
    }
  },
  tip: {
    label: {
      '/i18n/portuguese/': 'Dica',
      '/': 'Tip'
    }
  },
  warning: {
    label: {
      '/i18n/portuguese/': 'Aviso',
      '/': 'Warning'
    }
  },
  attention: {
    label: {
      '/i18n/portuguese/': 'Atenção',
      '/': 'Attention'
    }
  }
}
```

## Wie man die motivierenden Zitate übersetzt

Die motivierenden Zitate befinden sich im [Curriculum-Repository](https://github.com/freeCodeCamp/freeCodeCamp/) in der Datei `/client/i18n/locales/<language>/motivation.json`.

Diese Datei hat folgende allgemeine Struktur:

```json
{
  "compliments": [],
  "motivationalQuotes": []
}
```

Die Komplimente sind die kurzen Sätze, die am Ende einer Aufgabe erscheinen.

Du musst die Sätze nicht direkt aus dem Englischen übersetzen, sondern kannst eine Reihe von kurzen Sätzen schreiben, die sich eignen, um sie am Ende einer Aufgabe zu zeigen.

Das `compliments`-Array ist ein Array aus Strings, also würdest du zum Beispiel schreiben:

```json
{
  "compliments": ["A tutta birra!", "Pikachu, scelgo te!"],
  "motivationalQuotes": []
}
```

> [!TIP] Du solltest mit mindestens einem Dutzend Komplimenten beginnen, um eine gewisse Abwechslung zu schaffen, wenn die Benutzer die Aufgaben abschließen.

Die Motivationszitate sind die Zitate, die auf https://freecodecamp.org/learn erscheinen.

Das `motivationalQuotes`-Array ist ein Array aus Objekten. Diese Objekte sollten eine `quote`-Eigenschaft und eine `author`-Eigenschaft enthalten. Wie hier:

```json
{
  "compliments": [],
  "motivationalQuotes": [
    {
      "quote": "Se i costruttori costruissero come i programmatori programmano, il primo picchio che passa potrebbe distruggere la civiltà.",
      "author": "Artur Bloch, Seconda legge di Weinberg"
    },
    {
      "quote": "I bravi programmatori sanno cosa scrivere. I migliori sanno cosa riscrivere.",
      "author": "Eric Steven Raymond"
    }
  ]
}
```

> [!TIP] Du solltest mit mindestens einem Dutzend Zitaten beginnen, um eine gewisse Vielfalt zu haben. Jedes Mal, wenn der Benutzer die Seite neu lädt, wird ein neues Zitat angezeigt.

## Wie man allgemeine Links aktualisiert

In der Datei `/client/i18n/locales/<language>/links.json` wird eine Datei mit allgemeinen Links geführt, die auf unserer [Lehrplan-Website](https://github.com/freecodecamp/freecodecamp) verwendet wird.

Einige dieser Links werden sich nicht ändern - aber du solltest die `/news`-Artikel-Links aktualisieren, damit sie auf die übersetzte Version des Artikels in deiner Sprache verweisen, wenn er veröffentlicht wird.

Du solltest auch die `help`-Kategorien aktualisieren, um auf das Unterforum deiner Sprache zu verweisen (normalerweise `language/category`, wie `Italiano/HTML-CSS`). Dies ermöglicht es freeCodeCamp-Benutzern, 'Hilfeanfragen' im richtigen Forum zu erstellen.

## So aktualisierst du die Metadaten der Website

Die Metadaten der Website befinden sich in der Datei `/client/i18n/locales/<language>/meta-tags.json`. Diese Datei hat 5 Schlüssel:`title`, `description`, `social-description`, `keywords`, und `youre-unsubscribed`.

Der Wert `youre-unsubscribed` sollte direkt übersetzt werden. Die anderen Werte müssen so genau wie möglich übersetzt werden, wobei auch die in deiner Sprache üblichen Suchbegriffe und Phrasen berücksichtigt werden müssen.

Wenn du dabei Hilfe benötigst, wende dich an uns im ["Contributor" Chat](https://discord.gg/PRyKn3Vbay)

## Vorübersetzungs-Workflow auf Crowdin

Der Vorübersetzungs-Workflow kann verwendet werden, um Übersetzungen aus dem Translation Memory auf Strings anzuwenden.

> [!TIP] Diese Funktion ist sehr nützlich, um viele Übersetzungen aus dem Translation Memory in großen Mengen wiederherzustellen, wenn viele Dateien aktualisiert worden sind.

Du findest den Vorübersetzungs-Workflow oben auf der Seite in der Konsole eines Projekts. Wenn du in der oberen rechten Ecke "Go to console" siehst, klicke zuerst darauf.

![Gehe zur Konsole-Schaltfläche](./images/crowdin/pre-translate2.png)

![Vorübersetzungs-Workflow](./images/crowdin/pre-translate1.png)

Du kannst "From Machine Translation" oder "From Translation Memory" wählen. Wähle "Translation Memory", um Übersetzungen aus dem Speicher wiederherzustellen.

Dann sind drei Schritte zu absolvieren:

1. Dateien. Wähle die zu übersetzenden Dateien aus. Du kannst das gesamte Projekt oder bestimmte Ordner oder Dateien übersetzen.
2. Sprachen. Stelle hier deine Sprache ein.
3. Vorhandene Übersetzungen. Die beste Kombination ist hier "100% match" und "Apply to untranslated strings only". Genehmige nicht automatisch, denn es ist immer besser, ein menschliches Auge auf die Dinge zu werfen.

![Vorübersetzung bestehender Übersetzungen](./images/crowdin/pre-translate3.png)

Wenn du diese Einstellung abgeschlossen hast, drücke den Button Pre-Translate und warte. Sobald der Vorgang abgeschlossen ist, wirst du benachrichtigt. Wie lange das dauert, hängt davon ab, wie viele unübersetzte Strings in den ausgewählten Dateien enthalten sind.

## Wie man das Crowdin Glossar aktualisiert

> [!TIP] Ein aktualisiertes Glossar hilft, eine einheitliche Übersetzung von Fachbegriffen zu erhalten.

Das Crowdin-Glossar wird im [crowdin-glossaries](https://github.com/freeCodeCamp/crowdin-glossaries)-Repository aufbewahrt.

Im Ordner `glossaries` befinden sich verschiedene `*.csv`-Dateien (kommagetrennte Werte), eine für jedes Crowdin-Projekt, das ein Glossar hat, das über diesen Workflow aktualisiert werden kann.

Die `client.csv`-Datei ist für das Projekt "Learn User Interface", die `curriculum.csv`-Datei ist für das Projekt "Coding Curriculum", die `docs.csv`-Datei ist für das Projekt "Contributing Documentation".

Um die Crowdin Glossare zu aktualisieren, musst du dieses Repo lokal klonen. Öffnen die `.csv`-Datei mit einem geeigneten Programm, zum Beispiel Microsoft Excel.

In der `.csv`-Datei siehst du, dass die englische Sprache die ersten drei Spalten belegt, `Term:English` ist die Spalte für den englischen Begriff, `Description:English` ist die Spalte für die englische Beschreibung, und `Part:English` steht für die Wortart (z. B. Substantiv, Verb usw.) des Begriffs.

Dann hat jede Zielsprache zwei Spalten. Wenn du ins Dothrakische übersetzt, wirst du an den Spalten `Term:Dothraki` und `Description:Dothraki` interessiert sein. Die Spalte `Term:Dothraki` ist für die Übersetzung des Begriffs in Dothraki, und die Spalte `Description:Dothraki` ist für die Beschreibung des Begriffs in Dothraki.

> [!TIP] In Programmen wie Microsoft Excel kannst du die Spalten der anderen Sprachen ausblenden, um Bildschirmfläche freizugeben und die englischen Spalten und die Spalten der Zielsprache nebeneinander zu sehen.

Nachdem du die Änderungen vorgenommen und die Datei gespeichert hast, musst du einen PR mit den vorgeschlagenen Änderungen erstellen. Nachdem der PR angenommen wurde, musst du den GitHub Action-Workflow ausführen, um das Crowdin-Glossar zu aktualisieren. Deine Änderungen im Glossar werden sich nicht sofort auswirken, aber sie werden kommen.

## Wie man einen Mitwirkenden zum Korrekturleser (Proofreader) befördert

Wenn du der Meinung bist, dass ein Mitwirkender ein Crowdin-Korrekturleser werden könnte, kannst du ihm auf diese Weise die Rolle des Korrekturlesers übertragen:

In Crowdin wählst du `User management` im Menü auf der linken Seite aus.

Dadurch wird die Benutzerverwaltung geöffnet, in der du die Liste aller Benutzer sehen kannst.

Search for the user that will become proofreader. Verwende das Menü mit den drei Punkten in der Benutzerzeile, um ein Menü zu öffnen und wähle "Add to team". Die Korrekturleserteams haben den Standardnamen `Proof Readers(<Sprache>)`, du kannst das Team über den Namen der Sprache suchen. Wenn du das Team ausgewählt hast, benutze den Button "ADD" unten auf der Seite, um den Vorgang abzuschließen.

Der Benutzer ist jetzt ein Korrekturleser.

> [!TIP] Der neu beförderte Korrekturleser könnte vom Lesen der [Korrekturlesen von Übersetzungen](how-to-proofread-files.md)-Dokumentation profitieren.
