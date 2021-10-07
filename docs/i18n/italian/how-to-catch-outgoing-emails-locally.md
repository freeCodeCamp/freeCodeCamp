> **Nota:** Questo è un **passaggio opzionale** ed è richiesto solo quando si lavora con flussi di lavoro sulle email

- [Introduzione](#introduction)
- [Installare MailHog](#installing-mailhog)
- [Usare Mailhog](#using-mailhog)
- [Link Utili](#useful-links)

## Introduzione

Alcuni flussi di lavoro di posta elettronica, come l'aggiornamento dell'email di un utente, richiedono l'api-server di back-end per inviare email in uscita. MailHog è una alternativa ad usare un provider di un servizio email per mandare messagi email. È uno strumento per lo sviluppo per testare le email che catturerà i messaggi email mandati dalla tua istanza di freeCodeCamp.

## Installare MailHog

MailHog può essere installato su macOS, Windows e Linux o usato con Docker

<details><summary>Installare MailHog con Docker</summary>

Se hai Docker installato puoi usare

```bash
docker run -d --name mailhog --network host --rm mailhog/mailhog
```

per avviare MailHog in background e

```bash
docker stop mailhog
```

per arrestarlo.

Quando l'installazione è completa, puoi iniziare a [usare MailHog](#using-mailhog).

</details>

<details><summary>Installing MailHog on macOS</summary>

Install MailHog on macOS with [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

The above commands will start a mailhog service in the background.

When the installation completes, you can start [using MailHog](#using-mailhog).

</details>

<details><summary>Installing MailHog on Windows</summary>

Download the latest version of MailHog from [MailHog's official repository](https://github.com/mailhog/MailHog/releases). Locate and click on the link for your Windows version (32 or 64 bit) and a .exe file will be downloaded to your computer.

When the download completes, click to open the file. A Windows firewall notification may appear, requesting access permission for MailHog. A standard Windows command line prompt will open where MailHog will be running once firewall access is granted.

Close MailHog by closing the command prompt window. To start MailHog again, click on the MailHog executable (.exe) file that was downloaded initially - it is not necessary to download a new MailHog installation file.

Start [using MailHog](#using-mailhog).

</details>

<details><summary>Installing MailHog on Linux</summary>

First, install [Go](https://golang.org).

Run the following commands to install GO on Debian-based systems like Ubuntu and Linux Mint.

```bash
sudo apt-get install golang
```

Run the following commands to install GO on RPM-based systems like CentOS, Fedora, Red Hat Linux, etc.

```bash
sudo dnf install golang
```

Alternatively, run the following commands to install GO.

```bash
sudo yum install golang
```

Now set the path for Go with the following commands.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Finally, enter the commands below to install and run MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Start [using MailHog](#using-mailhog).

</details>

## Usare Mailhog

Open a new browser tab or window and navigate to [http://localhost:8025](http://localhost:8025) to open your MailHog inbox when the MailHog installation has completed and MailHog is running. The inbox will appear similar to the screenshot below.

![MailHog Screenshot 1](https://contribute.freecodecamp.org/images/mailhog/1.jpg)

Emails sent by your freeCodeCamp installation will appear as below

![MailHog Screenshot 2](https://contribute.freecodecamp.org/images/mailhog/2.jpg)

Two tabs that allow you to view either plain text or source content will be available when you open a given email. Ensure that the plain text tab is selected as below.

![MailHog Screenshot 3](https://contribute.freecodecamp.org/images/mailhog/3.jpg)

All links in the email should be clickable and resolve to their URL.

## Link Utili

- Controlla il repository [MailHog](https://github.com/mailhog/MailHog) per ulteriori informazioni relative a MailHog. Ulteriori informazioni sono disponibili anche per quanto riguarda le configurazioni personalizzate di MailHog.
