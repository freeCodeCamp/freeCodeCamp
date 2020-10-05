> **Nota:** Questo è un **passaggio opzionale** ed è richiesto solo quando si lavora con flussi di lavoro email

## Introduzione

Alcuni flussi di lavoro di posta elettronica, come l'aggiornamento dell'email di un utente, richiedono l'api-server back-end per inviare email in uscita. Un'alternativa all'utilizzo di un provider di servizi di posta elettronica per inviare messaggi di posta elettronica effettivi, Mailhog è uno strumento di sviluppo per il test di posta elettronica che catturerà i messaggi di posta elettronica inviati dalla tua istanza freeCodeCamp.

## Installazione Di MailHog

MailHog può essere installato su macOS, Windows e Linux.

- [Introduzione](#introduction)
- [Installazione Di MailHog](#installing-mailhog)
  - [Installazione di MailHog su macOS](#installing-mailhog-on-macos)
  - [Installazione di MailHog su Windows](#installing-mailhog-on-windows)
  - [Installazione di MailHog su Linux](#installing-mailhog-on-linux)
- [Uso Di Mailhog](#using-mailhog)
- [Link Utili](#useful-links)

### Installazione di MailHog su macOS

Installa MailHog su macOS con [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

I comandi di cui sopra avvieranno un servizio mailhog in background.

Quando l'installazione è completata, è possibile avviare [utilizzando MailHog](#using-mailhog).

### Installazione di MailHog su Windows

Download the latest version of MailHog from [MailHog's official repository](https://github.com/mailhog/MailHog/releases). Individuare e fare clic sul link per la versione di Windows (32 o 64 bit) e un file .exe verrà scaricato sul computer.

Al termine del download, fare clic per aprire il file. Potrebbe apparire una notifica firewall di Windows, richiedendo l'autorizzazione di accesso per MailHog. Un prompt a riga di comando di Windows standard si aprirà dove MailHog sarà in esecuzione una volta concesso l'accesso al firewall.

Chiudi MailHog chiudendo la finestra del prompt dei comandi. Per riavviare MailHog cliccare sull'eseguibile MailHog (. xe) file che è stato scaricato inizialmente - non è necessario scaricare un nuovo file di installazione MailHog.

Inizia [usando MailHog](#using-mailhog).

### Installazione di MailHog su Linux

Innanzitutto, installa [Go](https://golang.org).

Eseguire i seguenti comandi per installare GO su sistemi basati su Debian come Ubuntu e Linux Mint.

```bash
sudo apt-get install golang
```

Eseguire i seguenti comandi per installare GO su sistemi basati su RPM come CentOS, Fedora, Red Hat Linux, ecc.

```bash
sudo dnf install golang
```

In alternativa, eseguire i seguenti comandi per installare GO.

```bash
sudo yum install golang
```

Ora imposta il percorso per Go con i seguenti comandi.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Infine, inserisci i comandi qui sotto per installare ed eseguire MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Inizia [usando MailHog](#using-mailhog).

## Uso Di Mailhog

Apri una nuova scheda o finestra del browser e vai su [http://localhost:8025](http://localhost:8025) per aprire la tua casella di posta di MailHog quando l'installazione di MailHog è completata e MailHog è in esecuzione. La posta in arrivo apparirà simile alla schermata qui sotto.

![Screenshot MailHog 1](images/mailhog/1.jpg)

Le email inviate dalla tua installazione freeCodeCamp appariranno come di seguito

![Screenshot MailHog 2](images/mailhog/2.jpg)

Due schede che consentono di visualizzare il testo semplice o il contenuto sorgente saranno disponibili quando apri una data email. Assicurati che la scheda di testo semplice sia selezionata come sotto.

![Screenshot MailHog 3](images/mailhog/3.jpg)

Tutti i link nell'email dovrebbero essere cliccabili e risolvere al loro URL.

## Link Utili

- Controlla il repository [MailHog](https://github.com/mailhog/MailHog) per ulteriori informazioni relative a MailHog. Ulteriori informazioni sono disponibili anche per quanto riguarda le configurazioni personalizzate di MailHog.
