# Wie man am FreeCodeCamp.orgs Entwickler-News-Theme arbeitet

Die Entwicklernews, auch bekannt als [`/news`](https://www.freecodecamp.org/news) Seite, wird mit [Ghost](https://ghost.org/) betrieben. Wir verwenden ein individuelles Theme für das Erscheinungsbild der Website. Der Quellcode des Themes ist hier verfügbar: <https://github.com/freeCodeCamp/news-theme>.

## Das Theme

Ghost verwendet eine einfache Templating-Sprache namens [Handlebars](http://handlebarsjs.com/) für seine Themes. Das Theme, das auf `/news` verwendet wird, basiert auf dem Standard-Theme [casper](https://github.com/TryGhost/Casper).

Das Standard-Theme ist ziemlich ausführlich kommentiert, so dass es relativ einfach sein sollte, durch Lesen des Codes und der Kommentare herauszufinden, was vor sich geht. Wenn du dich mit der Funktionsweise vertraut gemacht hast, findest du in Ghost auch eine vollständige [Theme-API-Dokumentation](https://themes.ghost.org), in der alle möglichen Handlebars-Helfer und Vorlagen erklärt werden.

**Die Hauptdateien sind:**

- `default.hbs` - Die Hauptvorlagen-Datei
- `index.hbs` - Wird für die Startseite verwendet
- `post.hbs` - Wird für einzelne Beiträge (posts) verwendet
- `page.hbs` - Wird für einzelne Seiten verwendet
- `tag.hbs` - Wird für Tag-Archive verwendet
- `author.hbs` - Wird für Autorenarchive verwendet

Ein wirklich toller Trick ist, dass du auch benutzerdefinierte, einmalige Vorlagen erstellen kannst, indem du einfach den Slug einer Seite in eine Vorlagendatei einfügst. Zum Beispiel:

- `page-about.hbs` - Benutzerdefinierte Vorlage für die `/about/` Seite
- `tag-news.hbs` - Benutzerdefinierte Vorlage für `/tag/news/` Archiv
- `author-ali.hbs` - Benutzerdefinierte Vorlage für `/author/ali/` Archiv

## Entwicklung

1. Installiere Ghost lokal.

   ```sh
   npm install -g ghost-cli@latest
   mkdir ghost-local-site
   cd ghost-local-site
   ```

   ```sh
   ghost install local
   ghost start
   ```

   > Hinweis: Derzeit verwendet freeCodeCamp die Ghost-Version `2.9.0`, also stelle sicher, dass du eine höhere Version verwendest.

   Achte darauf, dass du die `ghost`-Befehle aus dem `ghost-local-site`-Verzeichnis ausführst. Folge den zusätzlichen Anweisungen in [der offiziellen Dokumentation von Ghost](https://docs.ghost.org), wenn du mit der Benutzeroberfläche nicht vertraut bist.

2. Forke und klone das Repository in deinem Theme-Verzeichnis (ersetze `YOUR_USERNAME` durch deinen GitHub Benutzernamen):

   ```sh
   cd content/themes/
   git clone https://github.com/YOUR_USERNAME/news-theme.git
   ```

3. Stelle sicher, dass du alle Voraussetzungen erfüllst.

   Die Stile des Themes werden mit Gulp/PostCSS kompiliert, um zukünftige CSS-Spezifikationen zu erfüllen. Du benötigst [Node.js](https://nodejs.org/). Stelle sicher, dass deine Node.js-Version mit `ghost` kompatibel ist.

4. Abhängigkeiten (Dependencies) installieren und das Theme entwickeln

   ```sh
   npm ci
   npm run develop
   ```

5. Jetzt kannst du `/assets/css/`-Dateien bearbeiten, die automatisch zu `/assets/built/` kompiliert werden.

6. Zugriff auf die Entwicklungsseite.

   a. Gib `http://localhost:2368/ghost/` in deine Adressleiste ein. Fahre mit dem Setup fort, zu dem du auf der Seite aufgefordert wirst (wenn du Ghost zum ersten Mal ausführst).

   b. _(Einmalig, während des Setups)_ Starte Ghost einmal an einem separaten Terminal neu, um sicherzustellen, dass das Theme verfügbar ist.

   ```sh
   cd ghost-local-site
   ghost restart
   ```

   c. _(Einmalig, während des Setups)_ Wenn du das getan hast, gehst du auf `http://localhost:2368/ghost/#/settings/design` und scrollst bis zum Ende. Stelle sicher, dass du auf `freecodecamp-news-theme` aktivieren klickst.

7. Zippe den endgültigen Code und erstelle einen Pull-Request

   Die `zip` Gulp-Aufgabe verpackt die Themedateien in `dist/<theme-name>.zip`, die wir dann auf die Produktionsseite hochladen können.

   Wenn du einen PR erstellst, stelle bitte sicher, dass du das folgende Skript ausgeführt hast, bevor du den Code committest und einen PR sendest.

   ```sh
   npm run zip
   ```

## Andere Referenzen und Ressourcen

### Verwendete PostCSS-Funktionen

- Autoprefixer - Mach dir keine Gedanken über das Schreiben von Browser-Präfixen, das wird alles automatisch erledigt, mit Unterstützung für die letzten 2 Hauptversionen eines jeden Browsers.
- Variablen - Einfache reine CSS-Variablen
- [Farbfunktion](https://github.com/postcss/postcss-color-function)

### SVG-Symbole

Das Theme verwendet Inline-SVG-Symbole, die über Partials von Handlebars eingebunden werden. Du kannst alle Symbole (Icons) innerhalb von `/partials/icons` finden. Um ein Icon zu verwenden, gib einfach den Namen der entsprechenden Datei an, z. B. Um das SVG-Symbol in `/partials/icons/rss.hbs` einzubinden - verwende `{{> "icons/rss"}}`.

Du kannst deine eigenen SVG-Icons auf dieselbe Art und Weise hinzufügen.
