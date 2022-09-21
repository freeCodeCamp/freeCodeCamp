# Wie du an einer lokalisierten Client-Webapp arbeitest

Die React-basierte Client-Web-App, die unsere Lernplattform betreibt, wurde mit Gatsby entwickelt. Sie wird mit [react-i18next](https://react.i18next.com/) und [i18next](https://www.i18next.com/) in verschiedene Weltsprachen übersetzt.

Du kannst mehr darüber erfahren, wie du die Client-Anwendung lokal für die Entwicklung einrichtest, indem du [unseren Leitfaden zur lokalen Einrichtung](how-to-setup-freecodecamp-locally.md) liest. Standardmäßig ist die Anwendung nur in Englisch verfügbar.

Sobald du das Projekt lokal eingerichtet hast, solltest du dieser Dokumentation folgen können, um den Client in der Sprache deiner Wahl aus der Liste der verfügbaren Sprachen auszuführen.

Das kann hilfreich sein, wenn du an einem Feature arbeitest, das speziell auf die Lokalisierung abzielt und du zum Beispiel die Beschriftung eines Buttons in einer anderen Sprache validieren musst.

> [!TIP] Du musst dieses Dokument nicht befolgen, um den Studienplan von freeCodeCamp zu übersetzen oder etwas zur Dokumentation beizusteuern. Lies stattdessen [diesen Leitfaden hier](how-to-translate-files.md).

Wir wollen verstehen, wie die i18n-Frameworks und -Werkzeuge funktionieren.

## Dateistruktur

Die meisten Dateien für die Übersetzung der Plattform befinden sich im Ordner [`client/i18n`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/client/i18n). Für jede Sprache gibt es ein Verzeichnis, das JSON-Dateien mit den Übersetzungen enthält.

```console
  config/i18n
  └── all-langs.ts
  ...
  client/i18n
  ├── configForTests.js
  ├── config.js
  ├── locales
  │   ├── chinese
  │   │   ├── intro.json
  │   │   ├── links.json
  │   │   ├── meta-tags.json
  │   │   ├── motivation.json
  │   │   ├── translations.json
  │   │   └── trending.json
  ... ...
  │   ├── dothraki
  │   │   ├── intro.json
  │   │   ├── links.json
  │   │   ├── meta-tags.json
  │   │   ├── motivation.json
  │   │   ├── translations.json
  │   │   └── trending.json
  ... ...
  │   ├── english
  │   │   ├── intro.json
  │   │   ├── links.json
  │   │   ├── meta-tags.json
  │   │   ├── motivation.json
  │   │   ├── translations.json
  │   │   └── trending.json
  │   └── espanol
  │       ├── intro.json
  │       ├── links.json
  │       ├── meta-tags.json
  │       ├── motivation.json
  │       ├── translations.json
  │       └── trending.json
  ├── locales.test.js
  ├── schema-validation.js
  └── validate-keys.ts
```

Einige dieser Dateien werden auf unserer Übersetzungsplattform (Crowdin) übersetzt, andere nicht.

**Dateien, die auf unserer Übersetzungsplattform übersetzt wurden:**

- Die Datei `translations.json` enthält den Großteil des Textes, der auf den Elementen der Benutzeroberfläche erscheint. Die Schlüssel werden in der Codebasis verwendet, um den richtigen Text für die eingestellte Sprache zu erhalten. Diese Datei muss in allen Sprachen die exakt gleichen Schlüssel haben.

- Die Datei `intro.json` enthält die Schlüssel-Werte-Paare für den Einleitungstext auf den Zertifikatseiten.

  Wenn du Übersetzungen für die Schlüssel hinzufügen/aktualisieren willst, lies bitte [diesen Leitfaden hier](how-to-translate-files.md).

**Dateien, die NICHT auf unserer Übersetzungsplattform übersetzt wurden:**

- Die `motivation.json` Dateien müssen nicht die gleichen Zitate, Komplimente oder Array-Längen haben. Nur die gleiche JSON-Struktur.

- Die Datei `trending.json` enthält die Titel und Links für die angesagtesten Nachrichtenartikel in der Fußzeile der Website.

- Die Datei `meta-tags.json` enthält die Informationen für die Meta-Tag-Informationen unserer Website.

  Änderungen an diesen Dateien werden normalerweise von dem Mitarbeiterteam vorgenommen.  Wenn dir etwas Ungewöhnliches auffällt, empfehlen wir dir, uns im [Contributors Chat Room](https://discord.gg/PRyKn3Vbay) zu kontaktieren.

## Das Testen der Client-App in einer Weltsprache

Du kannst die Client-App in jeder Sprache testen, die in der [Liste der Sprachen](https://github.com/freeCodeCamp/freeCodeCamp/blob/6b4a6a02568b809fc216ea8566ff5df446d1da4e/config/i18n/all-langs.js#L5) verfügbar ist.

```js
  const availableLangs = {
    client: ['english', 'espanol', 'chinese'],
    ...
  };
```

Wenn du eine neue Sprache testest, erstelle einen Ordner mit dem Namen der Sprache als Titel neben den anderen Sprachen und kopiere die JSON-Dateien aus einer anderen Sprache in deinen neuen Ordner.

Füge die Sprache zum `client`-Array hinzu, wie oben in der [`config/i18n/all-langs.js`](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/config/i18n/all-langs.js) Datei zu sehen.

Befolge dann die Anweisungen in den Kommentaren in derselben Datei, um die restlichen Variablen nach Bedarf hinzuzufügen/zu aktualisieren.

Zum Schluss stellst du die Variable `CLIENT_LOCALE` in deiner `.env`-Datei auf die Sprache ein, die du verwenden willst, und schon bist du fertig.

## Wie du Komponenten strukturierst

Wenn du an einer Funktion oder einem Fehler für die Client-Webanwendung arbeitest, z. B. wenn du neue Elemente auf der Einstellungsseite hinzufügst, solltest du die folgenden Richtlinien befolgen. Sie helfen dir, die Komponenten für die Lokalisierung in alle unterstützten Weltsprachen vorzubereiten.

### Funktionelle Komponente

```js
import { useTranslation } from 'react-i18next';

// in der Rendermethode:
const { t } = useTranslation();

// Aufruf der Funktion "t" mit einem Key aus der JSON-Datei:
<p>{t('key')}</p> // weitere Details unten
```

### Klassenkomponente

```js
import { withTranslation } from 'react-i18next';

// withTranslation fügt die Funktion "t" zu props hinzu:
const { t } = this.props;

// Aufruf der Funktion "t" mit einem Key aus der JSON-Datei:
<h1>{t('key')}</h1> // weitere Details unten

// Export ohne redux:
export default withTranslation()(Component);

// oder mit redux:
export default connect(...)(withTranslation()(Component));
```

## Übersetzen mit Hilfe der "t"-Funktion

### Grundlegende Übersetzung

```js
// in der Komponente:
<p>{t('p1')}</p>

// in der JSON Datei:
{
  "p1": "My paragraph"
}

// Output:
<p>My paragraph</p>
```

### Mit dynamischen Daten

```js
// in der Komponente:
const username = 'moT';

<p>{t('welcome', { username: username })}</p>

// in der JSON Datei:
{
  "welcome": "Welcome {{username}}"
}

// Output:
<p>Welcome moT</p>
```

Das obige Beispiel übergibt der Funktion `t` ein Objekt mit einer Variablen `username`. Die Variable wird im JSON-Wert verwendet, wo `{{username}}` steht.

## Übersetzen mit der `Trans`-Komponente

Generell gilt: Verwende die "t"-Funktion, wenn du kannst. Es gibt aber eine `Trans`-Komponente für den Fall, dass das nicht ausreicht, z. B. wenn du Elemente in den Text eingebettet hast. Du kannst die `Trans`-Komponente mit jeder Art von React-Komponente verwenden.

### Verschachtelte Grundelemente

```js
// in der Komponente:
import { Trans } from 'react-i18next'

<p>
  <Trans>fcc.greeting</Trans>
</p>

// in der JSON Datei:
{ 
  "fcc": {
    "greeting": "Welcome to <strong>freeCodeCamp</strong>"
  }
}

// Output:
<p>Welcome to <strong>freeCodeCamp</strong></p>
```

Du kannst den Schlüssel wie im obigen Beispiel innerhalb der Komponenten-Tags platzieren, wenn der Text "einfache" Tags ohne Attribute enthält. `br`, `strong`, `i` und `p` sind die Standardwerte, aber diese Liste kann in der i18n-Konfiguration erweitert werden.

### Verschachtelte komplexe Elemente

In anderen Fällen möchtest du einen bestimmten Text innerhalb eines anderen Elements platzieren, ein Anker-Tag ist ein gutes Beispiel dafür:

```js
// in der Komponente:
<p>
  <Trans i18nKey='check-forum'>
    <a href='https://forum.freecodecamp.org/'>placeholder</a>
  </Trans>
</p>

// in der JSON Datei:
{ 
  "check-forum": "Check out <0>our forum</0>."
}

// Output:
<p>Check out <a href='https://forum.freecodecamp.org/'>our forum</a></p>
```

Im obigen Beispiel wird der Schlüssel in den Attributen der `Trans`-Komponente gesetzt. Die `<0>` und `</0>` im JSON stehen für das erste Kindelement der Komponente, in diesem Fall das Ankerelement. Wenn es mehr Kindelemente gäbe, würden sie einfach von dort aus weiterzählen und dabei dieselbe Syntax verwenden. Du kannst die Kindelemente einer Komponente in den React Dev Tools finden, indem du sie inspizierst. `placeholder` ist einfach da, weil der Linter sich über leere `<a>`-Elemente beschwert.

### Mit einer Variablen

```js
// in der Komponente:
const email = 'team@freecodecamp.org';

<p>
  <Trans email={email} i18nKey='fcc.email'>
    <a href={`mailto:${email}`}>
      {{ email }}
    </a>
  </Trans>
</p>

// in der JSON Datei:
{
  "fcc": {
    "email": "Send us an email at: <0>{{email}}</0>"
  }
}

// Output:
<p>Send us an email at: <a href='mailto:team@freecodecamp.org'>team@freecodecamp.org</a><p>
```

Im obigen Beispiel werden der Schlüssel und eine Variable in den Attributen der `Trans`-Komponente festgelegt. `{{ email }}` muss auch irgendwo in der `Trans`-Komponente stehen, es ist egal wo.

## Ändern des Textes

Um den Text auf der Client-Seite zu ändern, gehst du in die entsprechende `.json`-Datei, suchst den Schlüssel, der in der React-Komponente verwendet wird, und änderst den Wert in den gewünschten neuen Text. Du solltest die Codebasis nach diesem Schlüssel durchsuchen, um sicherzustellen, dass er nicht an anderer Stelle verwendet wird. Oder, falls ja, dass die Änderungen an allen Stellen sinnvoll sind.

## Hinzufügen von Text

Wenn der Text, den du dem Client hinzufügen möchtest, bereits in der entsprechenden `.json`-Datei vorhanden ist, verwende den vorhandenen Schlüssel. Andernfalls erstellst du einen neuen Schlüssel.

Die englische Datei ist die "Quelle der Wahrheit" für alle `.json`-Dateien, die den gleichen Namen haben. Wenn du einen neuen Schlüssel hinzufügen musst, füge ihn dort ein. Dann fügst du den Schlüssel zu **allen** `translations.json`-Dateien hinzu.

> [!NOTE] Verwende englischen Text für alle Sprachen, wenn die Datei über Crowdin übersetzt wird. Andernfalls werden die Tests fehlschlagen.

Es wäre auch schön, wenn die Schlüssel in allen Dateien die gleiche Reihenfolge hätten. Versuche außerdem, alle Satzzeichen, Abstände, Anführungszeichen usw. in den JSON-Dateien und nicht in den Komponenten oder Serverdateien zu platzieren.

> [!NOTE] Der Unterstrich (`_`) ist ein reserviertes Zeichen für Schlüssel in den clientseitigen Dateien. In der [Dokumentation](https://www.i18next.com/translation-function/plurals) erfährst du, wie sie verwendet werden.

## Hilfreiche Dokumentation

- [react-i18next Dokumente](https://react.i18next.com/latest/usetranslation-hook)
- [i18next Dokumente](https://www.i18next.com/translation-function/essentials)
