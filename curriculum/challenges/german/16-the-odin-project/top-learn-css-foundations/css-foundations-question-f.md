---
id: 63ee353e0d8d4841c3a7091f
videoId: LGQuIIv2RVA
title: CSS-Grundlagen Frage F
challengeType: 15
dashedName: css-foundations-question-f
---

# --description--

Okay, du hast bis jetzt schon eine ganze Menge durchgenommen. The only thing left for now is to go over how to add all this CSS to your HTML. Es gibt drei Methoden um dies zu machen.

Externes CSS ist die am häufigsten angewandte Methode, bei der eine separate Datei für das CSS erstellt und innerhalb der öffnenden und schließenden `<head>`-Tags eines HTML-Dokuments mit einem selbstschließenden `<link>`-Element verknüpft wird:

Zunächst fügst du ein selbstschließendes `<link>`-Element innerhalb der öffnenden und schließenden `<head>`-Tags der HTML-Datei ein. Das `href`-Attribut ist der Speicherort der CSS-Datei, entweder eine absolute URL oder, was du verwenden wirst, eine URL relativ zum Speicherort der HTML-Datei. Im vorstehenden Beispiel gehst du davon aus, dass sich beide Dateien in demselben Verzeichnis befinden. Das `rel`-Attribut ist notwendig und gibt die Beziehung zwischen der HTML-Datei und der verlinkten Datei an.

In der neu erstellten `styles.css`-Datei befindet sich dann der Selektor (`div` und `p`), gefolgt von einem Paar öffnender und schließender geschwungener Klammern, die einen "Deklarationsblock" bilden. Schließlich platzierst du alle Deklarationen innerhalb des Deklarationsblocks. `color: white;` ist eine Deklaration, bei der `color` die Eigenschaft und `white` der Wert ist, und `background-color: black;` ist eine weitere Deklaration.

Ein Hinweis zu Dateinamen: `styles.css` ist genau das, was du hier als Dateinamen gewählt hast. Du kannst die Datei benennen wie du willst, solange der Dateityp `.css` ist, obwohl "style" oder "styles" am häufigsten verwendet wird.

Einige Vorzüge dieser Methode sind:

1. Es trennt HTML und CSS voneinander, wodurch die HTML-Datei kleiner wird und die Inhalte sauberer aussehen.
2. Du brauchst das CSS nur an einer Stelle zu bearbeiten, was besonders praktisch für Websites mit vielen Seiten ist, die alle ähnliche Styles haben.

# --question--

## --text--

Welche der folgenden Aussagen beschreibt am besten den Zweck des `rel`-Attributs im `<link>`-Element, wenn eine externe CSS-Datei mit einer HTML-Datei verknüpft wird?

## --answers--

Sie gibt den Speicherort der CSS-Datei im Verhältnis zum Speicherort der HTML-Datei an.

---

Sie gibt die Beziehung zwischen der HTML-Datei und der verknüpften Datei an.

---

Sie gibt den Typ der zu verlinkenden Datei an (z. B. "Stylesheet").


## --video-solution--

2
