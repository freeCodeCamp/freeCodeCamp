> **Hinweis:** Dies ist ein **optionaler** Schritt und wird nur bei der Arbeit mit E-Mail-Workflows benötigt

- [Einführung](#introduction)
- [MailHog installieren](#installing-mailhog)
- [MailHog verwenden](#using-mailhog)
- [Nützliche Links](#useful-links)

## Einführung

Für einige E-Mail-Workflows, wie z. B. die Aktualisierung der E-Mail eines Nutzers, muss der Backend-Api-Server ausgehende E-Mails versenden. MailHog ist eine Alternative zur Nutzung eines E-Mail-Dienstleisters, um echte E-Mails zu versenden. Es ist ein Entwickler-Tool für E-Mail-Tests, das die von deiner freeCodeCamp-Instanz gesendeten E-Mails abfängt.

## MailHog installieren

MailHog kann auf macOS, Windows und Linux installiert oder über Docker verwendet werden

<details><summary>MailHog mit Docker installieren</summary>

Wenn du Docker installiert hast, kannst du

```bash
docker run -d --name mailhog --network host --rm mailhog/mailhog
```

eingeben, um MailHog im Hintergrund zu starten und

```bash
docker stop mailhog
```

um es zu stoppen.

Wenn die Installation abgeschlossen ist, kannst du [MailHog](#using-mailhog) benutzen.

</details>

<details><summary>MailHog auf macOS installieren</summary>

Installiere MailHog auf macOS mit [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

Mit den obigen Befehlen wird ein Mailhog-Dienst im Hintergrund gestartet.

Wenn die Installation abgeschlossen ist, kannst du [MailHog](#using-mailhog) benutzen.

</details>

<details><summary>Installation von MailHog unter Windows</summary>

Lade die neueste Version von MailHog von [MailHogs offiziellem Repository](https://github.com/mailhog/MailHog/releases) theyrunter. Klicke auf den Link für deine Windows-Version (32 oder 64 Bit) und es wird eine exe-Datei auf deinen Computer theyruntergeladen.

Wenn der Download abgeschlossen ist, klicke auf die Datei, um sie zu öffnen. Es kann sein, dass eine Benachrichtigung der Windows-Firewall erscheint, die eine Zugriffsberechtigung für MailHog anfordert. Es öffnet sich eine Standard-Windows-Kommandozeile, in der MailHog ausgeführt wird, sobald der Firewall-Zugriff gewährt wurde.

Beende MailHog, indem du das Fenster der Kommandozeile schließt. Um MailHog erneut zu starten, klicke auf die ausführbare MailHog-Datei (.exe), die du ursprünglich theyruntergeladen hast - es ist nicht nötig, eine neue MailHog-Installationsdatei theyrunterzuladen.

Starte [mit der Nutzung von MailHog](#using-mailhog).

</details>

<details><summary>MailHog unter Linux installieren</summary>

Installiere zuerst [Go](https://golang.org).

Führe die folgenden Befehle aus, um GO auf Debian-basierten Systemen wie Ubuntu und Linux Mint zu installieren.

```bash
sudo apt-get install golang
```

Führe die folgenden Befehle aus, um GO auf RPM-basierten Systemen wie CentOS, Fedora, Red Hat Linux, etc. zu installieren.

```bash
sudo dnf install golang
```

Alternativ kannst du GO auch mit den folgenden Befehlen installieren.

```bash
sudo yum install golang
```

Setze nun den Pfad für Go mit den folgenden Befehlen.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Gib schließlich die folgenden Befehle ein, um MailHog zu installieren und auszuführen.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Starte [mit der Nutzung von MailHog](#using-mailhog).

</details>

## MailHog verwenden

Öffne einen neuen Browser-Tab oder ein neues Fenster und navigiere zu [http://localhost:8025](http://localhost:8025), um deinen MailHog-Posteingang zu öffnen, wenn die MailHog-Installation abgeschlossen ist und MailHog ausgeführt wird. Der Posteingang sieht dann so aus wie auf dem Screenshot unten.

![MailHog Screenshot 1](https://contribute.freecodecamp.org/images/mailhog/1.jpg)

Die von deiner freeCodeCamp-Installation gesendeten E-Mails werden wie folgt aussehen

![MailHog Screenshot 2](https://contribute.freecodecamp.org/images/mailhog/2.jpg)

Wenn du eine bestimmte E-Mail öffnest, stehen dir zwei Registerkarten zur Verfügung, auf denen du entweder den reinen Text (Plain text) oder den Quelltext (Source) anzeigen kannst. Vergewissere dich, dass die Registerkarte Plain text wie folgt ausgewählt ist.

![MailHog Screenshot 3](https://contribute.freecodecamp.org/images/mailhog/3.jpg)

Alle Links in der E-Mail sollten anklickbar sein und auf ihre URL verweisen.

## Nützliche Links

- Weitere Informationen zu MailHog findest du im [MailHog](https://github.com/mailhog/MailHog) Repository. Außerdem gibt es zusätzliche Informationen über benutzerdefinierte MailHog-Konfigurationen.
