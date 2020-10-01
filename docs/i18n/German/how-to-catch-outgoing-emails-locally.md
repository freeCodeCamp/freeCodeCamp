> **Hinweis:** Dies ist ein **optionaler** Schritt und wird nur benötigt, wenn mit E-Mail-Workflows gearbeitet wird

## Einführung

Einige E-Mail-Workflows, wie das Aktualisieren der E-Mail eines Benutzers, erfordern den Backend-Api-Server, um ausgehende E-Mails zu senden. Eine Alternative zur Verwendung eines E-Mail-Diensteanbieters für das Senden von tatsächlichen E-Mail-Nachrichten, Mailhog ist ein Entwicklerwerkzeug für E-Mail-Tests, das die von deiner FreeCodeCamp-Instanz gesendeten E-Mail-Nachrichten erfasst.

## MailHog installieren

MailHog kann unter macOS, Windows und Linux installiert werden.

- [Einführung](#introduction)
- [MailHog installieren](#installing-mailhog)
  - [MailHog auf macOS installieren](#installing-mailhog-on-macos)
  - [MailHog unter Windows installieren](#installing-mailhog-on-windows)
  - [MailHog unter Linux installieren](#installing-mailhog-on-linux)
- [MailHog verwenden](#using-mailhog)
- [Nützliche Links](#useful-links)

### MailHog auf macOS installieren

Installiere MailHog auf macOS mit [Homebrew](https://brew.sh/):

```bash
brauen mailhog
brauen Dienste starten mailhog
```

Die obigen Befehle starten einen Mailhog-Dienst im Hintergrund.

Wenn die Installation abgeschlossen ist, können Sie [mit MailHog](#using-mailhog) starten.

### MailHog unter Windows installieren

Download the latest version of MailHog from [MailHog's official repository](https://github.com/mailhog/MailHog/releases). Suchen und klicken Sie auf den Link für Ihre Windows-Version (32 oder 64 bit) und eine .exe Datei wird auf Ihren Computer heruntergeladen.

Wenn der Download abgeschlossen ist, klicken Sie zum Öffnen der Datei. Es kann eine Windows-Firewall-Benachrichtigung erscheinen, die Zugriff auf MailHog anfordert. Eine Standard-Windows-Kommandozeilen-Eingabeaufforderung öffnet sich, wo MailHog läuft, sobald der Zugriff auf die Firewall gewährt wird.

Schließen Sie MailHog, indem Sie das Fenster zur Eingabeaufforderung schließen. Um MailHog erneut zu starten, klicken Sie auf die MailHog ausführbare Datei (. xe) Datei, die ursprünglich heruntergeladen wurde - es ist nicht notwendig, eine neue MailHog Installationsdatei herunterzuladen.

Beginne [mit MailHog](#using-mailhog).

### MailHog unter Linux installieren

Installieren Sie zuerst [Go](https://golang.org).

Führen Sie die folgenden Befehle aus, um GO auf Debian-basierten Systemen wie Ubuntu und Linux Mint zu installieren.

```bash
sudo apt-get install golang
```

Führen Sie die folgenden Befehle aus, um GO auf RPM-basierten Systemen wie CentOS, Fedora, Red Hat Linux usw. zu installieren.

```bash
sudo dnf install golang
```

Alternativ können Sie die folgenden Befehle ausführen, um GO zu installieren.

```bash
sudo yum install golang
```

Legen Sie nun den Pfad für Go mit den folgenden Befehlen fest.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Geben Sie schließlich die folgenden Befehle ein, um MailHog zu installieren und auszuführen.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Beginne [mit MailHog](#using-mailhog).

## MailHog verwenden

Öffnen Sie einen neuen Browser-Tab oder ein Fenster und navigieren Sie zu [http://localhost:8025](http://localhost:8025) um Ihren MailHog Posteingang zu öffnen, sobald die MailHog Installation abgeschlossen ist und MailHog läuft. Der Posteingang wird ähnlich dem unten abgebildeten Bildschirm angezeigt.

![MailHog Screenshot 1](images/mailhog/1.jpg)

E-Mails deiner FreeCodeCamp-Installation werden wie unten angezeigt

![MailHog Screenshot 2](images/mailhog/2.jpg)

Zwei Registerkarten, mit denen Sie entweder reinen Text oder Quelltext anzeigen können, stehen zur Verfügung, wenn Sie eine bestimmte E-Mail öffnen. Stellen Sie sicher, dass der Reiter Klartext wie unten ausgewählt ist.

![MailHog Screenshot 3](images/mailhog/3.jpg)

Alle Links in der E-Mail sollten anklicken und auf ihre URL auflösen.

## Nützliche Links

- Weitere Informationen zu MailHog finden Sie im [MailHog](https://github.com/mailhog/MailHog) Projektarchiv. Zusätzliche Informationen sind auch zu benutzerdefinierten MailHog Konfigurationen verfügbar.
