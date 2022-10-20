# Dateistruktur des Studienplans (Curriculum)

Unsere wichtigsten Lehrinhalte befinden sich in dem Verzeichnis mit dem aussagekräftigen Namen `Curriculum`. Auf dieser Seite erfährst du, wie diese Dateien organisiert sind.

## Terminologie

Es gibt ein paar Begriffe, die wir verwenden, wenn wir über unsere Studienplaninhalte sprechen.

- `certification` : Wenn in diesem Fall von einer Zertifizierung die Rede ist, geht es um das eigentliche Zertifikat, das die Nutzer/innen beantragen. Das ist unabhängig vom Namen des SuperBlocks.
- `superBlock` : Ein Superblock ist die oberste Ebene einer Sammlung von Aufgaben. Jeder Superblock entspricht einer Zertifizierung im Lehrplan (z.B. Responsive Web Design).
- `block` : Ein Block ist ein Abschnitt innerhalb eines Superblocks. Ein Block entspricht einer Gruppe von Aufgaben in einer bestimmten Zertifizierung (z. B. Grundlegendes HTML und HTML5)
- `challenge` : Eine Aufgabe ist eine einzelne Lektion innerhalb des Lehrplans (z.B. Sag Hallo zu HTML-Elementen)

## Dateibaum

Mit diesen Begriffen würde die Dateistruktur folgendermaßen definiert werden:

<!-- prettier-ignore -->
```md

curriculum/
├─ _meta/
│  ├─ {block}/
│  │  ├─ meta.json
├─ {language}/
│  ├─ {superBlock}/
│  │  ├─ {block}/
│  │  │  ├─ {challenge}.md
```

## Das `_meta` -Verzeichnis

Das `_meta` -Verzeichnis ist ein besonderes Verzeichnis, welches `.json` -Dateien enthält. Diese Dateien entsprechen jedem Block im Studienplan und werden verwendet, um zu bestimmen, zu welchem SuperBlock ein Block gehört und in welcher Reihenfolge die Aufgaben innerhalb dieses Blocks bearbeitet werden.

## Umbenennung von Dateien

Es kann vorkommen, dass du ein Zertifikat, einen Superblock, einen Block oder eine Aufgabe umbenennen musst. In diesem Abschnitt werden die notwendigen Schritte beschrieben, um Fehler bei der Umbenennung zu vermeiden.

> [!ATTENTION] Das Umbenennen von Dateien innerhalb der Studienplanstruktur führt oft dazu, dass sich der Pfad (oder die URL) des Inhalts auf der Startseite ändert. Dies sollte mit Bedacht geschehen, da für jede Änderung eine Weiterleitung eingerichtet werden muss.

### Umbenennen eines Zertifikats

Wenn du eine Zertifizierung umbenennst, willst du wahrscheinlich auch den zugehörigen Superblock umbenennen. Gehe wie folgt vor, um nur das Zertifikat umzubenennen:

1. Benenne den Ordner `curriculum/challenges/_meta/{superBlock}-certificate` in den neuen Namen um.
1. Benenne in der Datei `meta.json` dieses Ordners die Werte in `name`, `dashedName` und `challengeOrder` in den neuen Zertifikatsnamen um.
1. Benenne den Ordner `{superBlock}-certificate` und die darin enthaltene YAML-Datei in `curriculum/challenges/english/12-certificate` in den neuen Namen um.
1. Ändere den `title` in der YAML-Datei in den neuen Namen um.
1. Benenne die Datei und den Ordner aus Schritt 3 für die übrigen Studienplansprachen um.
1. Aktualisiere `client/src/redux/index.ts`, um den richtigen `title` zu benutzen.
1. Optional aktualisiere den `certSlug` für den superblock in der gleichen Datei. **Beachte**, dass das Umbenennen eines `certSlug` die URL für die Zertifizierung ändern wird und sollte deshalb nur nach sorgfältiger Überlegung durchgeführt werden.
1. Aktualisiere den `title` in `client/src/resources/cert-and-project-map.ts` auf den neuen Wert. **Beachte**, dass das Ändern des `title` hier **die SuperBlock-Seite für die zugehörige Zertifizierung unterbricht**. Er ist darauf angewiesen, dass der SuperBlock-Titel mit dem Titel der Zertifizierung übereinstimmt. Wahrscheinlich willst du den SuperBlock gleichzeitig umbenennen.
1. Wenn du den `certSlug` in Schritt 7 umbenannt hast, ändere ihn hier für das cert und alle verschachtelten `projects`-Werte.
1. Aktualisiere in `config/certification-settings.js` den Wert von `certTypeTitleMap` auf den neuen Namen.
1. Wenn du den `certSlug` in Schritt 7 umbenannt hast, aktualisiere den key von`certSlugTypeMap` in derselben Datei.
1. Aktualisiere bei Bedarf den Zertifikatsnamen im `legacyCerts`-Array von `client/src/client-only-routes/show-project-links.tsx`.
1. Aktualisiere die Hauptdatei `README.md` auf den neuen Namen.

### Umbenennen eines Superblocks

> [!NOTE] Wenn du einen SuperBlock umbenennst, wird der neue Ordnername als Pfad verwendet und sollte als "richtiger" Name betrachtet werden. Alle anderen Werte sollten aktualisiert sein, um diese Veränderung widerzuspiegeln.

Außerdem wirst du wahrscheinlich das Zertifikat und den `{superBlock}-projects`-Block umbenennen wollen, wenn du einen superBlock umbenennst, da sie alle einen gemeinsamen Namen haben. Um nur einen superBlock umzubenennen, musst du:

1. Benenne den Ordner superBlock im Verzeichnis `curriculum/challenges/english` um.
1. Benenne den superBlock Ordner in _allen_ anderen `curriculum/challenges/{language}` Verzeichnissen um.
1. Für jeden Block innerhalb dieses Superblocks aktualisierst du den `superBlock`-Wert in der `meta.json`-Datei auf seinen dashedName. Du musst hier keine Ordner umbenennen.  Mach das, wenn du einen Block umbenennst.
1. Benenne den Superblock-Ordner in `client/src/pages/learn` um.
1. Aktualisiere die Datei `index.md` im oben genannten Ordner und ändere die Werte für `title` und `superBlock` auf den neuen Namen.
1. Aktualisiere die `index.md` für jeden Blockordner, um den richtigen `superBlock`-Wert zu verwenden.
1. In der Datei `client/src/resources/cert-and-project-map.ts` aktualisierst du den Pfad für das Zertifikat(cert) am Anfang der Datei und den `title`-Wert für diesen SuperBlock. **Beachte**, dass das Ändern des `title` hier **die Möglichkeit zerstört,** die eigentliche Zertifizierung für diesen SuperBlock anzuzeigen. Er ist darauf angewiesen, dass der SuperBlock-Titel mit dem Titel der Zertifizierung übereinstimmt. Wahrscheinlich möchtest du die Zertifizierung gleichzeitig umbenennen.
1. Aktualisiere den `superBlockCertTypeMap` Schlüssel(key) in `config/certification-settings.js` auf den neuen SuperBlock-Namen.
1. Aktualisiere den Pfadwert in `client/src/assets/icons/index.tsx`.
1. Aktualisiere für jede Sprache in `client/i18n/locales` die Datei `intro.json`, um den neuen SuperBlock `dashedName` zu verwenden. In der englischen Datei aktualisierst du auch den `title`.
1. Überprüfe die Datei `config/i18n/all-langs.js`, um zu sehen, ob der SuperBlock in i18n-Builds aktiviert ist. Aktualisiere alle Werte, in denen er verwendet wird.
1. Aktualisiere die Hauptdatei `README.md` auf den neuen Namen.

### Umbenennen eines Blocks

Wenn du einen Studienplanblock umbenennen willst, musst du Folgendes tun:

1. Ändere den Namen des Blockordners im Verzeichnis `curriculum/challenges/english/{superBlock}`.
1. Ändere den Namen des gleichen Blockordners in _allen_ der anderen Sprachverzeichnisse, damit er übereinstimmt. Diese müssen alle mit der englischen Struktur übereinstimmen, sonst wird der Build nicht funktionieren.
1. Ändere den Namen des Blockordners im `_meta`-Verzeichnis.
1. Aktualisiere die Eigenschaften `name` und `dashedName` in der `meta.json`-Datei des Blocks.
1. Aktualisiere die `client/utils/help-category-map.json`, um den neuen Blocknamen als Schlüssel(key) zu verwenden.
1. Aktualisiere den Blockordner in `client/src/pages/learn/{superBlock}`.
1. Aktualisiere in der `index.md`-Datei des obigen Ordners den `block`-Wert im Frontmatter.
1. Aktualisiere in den `client/i18n/locales/{language}/intro.json`-Dateien den Blocknamen auf den neuen Namen für alle Sprachen. In der englischen `intro.json`-Datei aktualisierst du auch den `title`.
1. Aktualisiere die Hauptdatei `README.md` auf den neuen Namen.

### Umbenennen einer Aufgabe

Wenn du eine einzelne Aufgaben-Datei umbenennen willst, musst du Folgendes tun:

1. Ändere den Namen der Challenge-Datei im Verzeichnis `curriculum/challenges/english`.
1. Ändere den Namen des `title` und `dashedName` in dieser Datei.
1. Ändere den Namen der Datei und den `dashedName` in diesen Dateien, damit _alle_ der anderen Sprachverzeichnisse übereinstimmen.
1. Aktualisiere den Namen der Aufgabe in der entsprechenden `meta.json`-Datei. Die Namen der Aufgaben werden im Build nicht verwendet, aber sie dienen dazu, die Reihenfolge der Aufgaben benutzerfreundlich zu gestalten.
1. Wenn es sich bei der Aufgabe um ein Zertifikatsprojekt handelt, aktualisiere die YAML-Datei in `curriculum/english/12-certificates/<superBlock>` auf den neuen Namen.
1. Wenn es sich bei der Aufgabe um ein Zertifikatsprojekt handelt, aktualisiere den `title` und `link` in `client/src/resources/cert-and-project-map.ts`
1. Wenn es sich bei der Aufgabe um ein Zertifikatsprojekt handelt, aktualisiere die Hauptdatei `README.md` auf den neuen Namen.

## Die `dashedName`-Eigenschaft

Die Eigenschaft `dashedName` wird verwendet, um den URL-Pfad für den Superblock, Block oder die Aufgabe zu generieren. Diese sollten in der Regel dem entsprechen, was der `/utils/slugs.js` Helper für den Dateinamen ausgeben würde.
