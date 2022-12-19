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

Lade die neueste Version von MailHog von [MailHogs offiziellem Repository](https://github.com/mailhog/MailHog/releases) herunter. Locate and click on the link for your Windows version (32 or 64 bit) and a `.exe` file will be downloaded to your computer.

Wenn der Download abgeschlossen ist, klicke auf die Datei, um sie zu öffnen. Es kann sein, dass eine Benachrichtigung der Windows-Firewall erscheint, die eine Zugriffsberechtigung für MailHog anfordert. Es öffnet sich eine Standard-Windows-Kommandozeile, in der MailHog ausgeführt wird, sobald der Firewall-Zugriff gewährt wurde.

Beende MailHog, indem du das Fenster der Kommandozeile schließt. To start MailHog again, click on the MailHog executable (`.exe`) file that was downloaded initially - it is not necessary to download a new MailHog installation file.

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

Open a new browser tab or window and navigate to [http://localhost:8025](http://localhost:8025) to open your MailHog inbox when the MailHog installation has completed and MailHog is running.

## Nützliche Links

- Weitere Informationen zu MailHog findest du im [MailHog](https://github.com/mailhog/MailHog) Repository. Außerdem gibt es zusätzliche Informationen über benutzerdefinierte MailHog-Konfigurationen.
