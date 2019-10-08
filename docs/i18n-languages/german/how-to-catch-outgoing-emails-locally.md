<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# Lokales Abfangen ausgehender E-Mails für E-Mail-Workflows

> **Note:** Dies ist ein **optionaler** Schritt und wird nur bei der Arbeit mit E-Mail-Workflows benötigt.

## Einleitung

Einige E-Mail-Workflows, wie z.B. die Aktualisierung der E-Mails eines Benutzers, erfordern, dass der Backend-Api-Server ausgehende E-Mails versendet. Als Alternative zur Verwendung eines E-Mail-Dienstleisters zum Senden von eigentlichen E-Mail-Nachrichten ist MailHog ein Entwicklerwerkzeug für E-Mail-Tests, das die von ihrer freeCodeCamp-Instanz gesendeten E-Mail-Nachrichten erfasst.

## MailHog installieren

MailHog kann auf MacOS, Windows und Linux installiert werden

- [MailHog auf MacOS installieren](#mailhog-auf-macos-installieren)
- [MailHog auf Windows installieren](#mailhog-auf-windows-installieren)
- [MailHog auf Linux installieren](#mailhog-auf-linux-installieren)

### MailHog auf MacOS installieren

Installiere MailHog auf MacOS mit [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

Die obigen Befehle starten einen Mailhog-Dienst im Hintergrund.

Wenn die Installation abgeschlossen ist, kannst du mit [MailHog](#mailhog-benutzen) beginnen.

### MailHog auf Windows installieren

Lade die neueste Version von MailHog aus dem [offiziellen MailHog Repository](https://github.com/mailhog/MailHog/releases) herunter. Suche und klicke auf den Link für deine Windows-Version (32 oder 64 Bit) und die .exe-Datei wird auf deinen Computer heruntergeladen.

Wenn der Download abgeschlossen ist, klicke auf die Datei um sie zu öffnen. Es kann eine Windows-Firewall-Benachrichtigung erscheinen, die eine Zugriffsberechtigung für MailHog anfordert. Es öffnet sich eine Standard-Windows-Befehlszeile, in der MailHog ausgeführt wird, sobald der Zugriff auf die Firewall gewährt wird.

Schließe MailHog, indem du das Eingabeaufforderungsfenster schließt. Um MailHog erneut zu starten, klicke auf die ausführbare MailHog-Datei (.exe), die ursprünglich heruntergeladen wurde - es ist nicht notwendig, eine neue MailHog-Installationsdatei herunterzuladen.

Starte [MailHog](#mailhog-benutzen).

### MailHog auf Linux installieren

Als Erstes installiere [Go](https://golang.org).

Führe die folgenden Befehle aus, um GO auf Debian-basierten Systemen wie Ubuntu und Linux Mint zu installieren.

```bash
sudo apt-get install golang
```

Führe die folgenden Befehle aus, um GO auf RPM-basierten Systemen wie CentOS, Fedora, Red Hat Linux, ect. zu installieren.

```bash
sudo dnf install golang
```

Alternativ kannst du auch die folgenden Befehle ausführen, um GO zu installieren.

```bash
sudo yum install golang
```

Stelle nun mit den folgenden Befehlen den Pfad für Go ein.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Gebe abschließend die folgenden Befehle ein, um MailHog zu installieren und auszuführen.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Starte [MailHog](#mailhog-benutzen).

## MailHog benutzen

Wenn die MailHog Installation abgeschlossen ist und MailHog ausgeführt wird, öffne eine neue Browser-Registerkarte oder ein neues Fenster und navigiere zu [http://localhost:8025](http://localhost:8025), um deinen MailHog-Eingang zu öffnen,

![MailHog Screenshot 1](/docs/images/mailhog/1.jpg)

E-Mails die von deiner freeCodeCamp-Installation gesendet wurden, werden wie folgt angezeigt

![MailHog Screenshot 2](/docs/images/mailhog/2.jpg)

Wenn du eine E-Mail öffnest stehen dir zwei Registerkarten zur Verfügung, Klartext oder Quellinhalte. Stelle sicher, dass die Registerkarte Klartext wie folgt, ausgewählt ist.

![MailHog Screenshot 3](/docs/images/mailhog/3.jpg)

Alle Links in der E-Mail sollten anklickbar sein und in ihre URL aufgelöst werden.

## nützliche Links

- Weitere Informationen zu MailHog finden Sie im [MailHog Repository](https://github.com/mailhog/MailHog). Weitere Informationen zu benutzerdefinierten MailHog-Konfigurationen sind ebenfalls verfügbar.
