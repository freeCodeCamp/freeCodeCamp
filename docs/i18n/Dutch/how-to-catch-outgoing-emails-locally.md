> **Opmerking:** Dit is een **optionele** stap en is alleen verplicht wanneer je werkt met e-mail workflows

## Introductie

Sommige e-mailworkflows, zoals het bijwerken van e-mail van een gebruiker, vereist de back-end api-server om uitgaande e-mails te verzenden. Een alternatief voor het gebruik van een e-mailprovider voor het verzenden van actuele e-mailberichten, Mailhog is een ontwikkelaarshulpmiddel voor het testen van e-mail dat de e-mailberichten zal halen die verzonden worden door uw freeCodeCamp instantie.

## Installeren MailHog

MailHog kan worden geïnstalleerd op macOS, Windows en Linux.

- [Introductie](#introduction)
- [Installeren MailHog](#installing-mailhog)
  - [Installeren MailHog op macOS](#installing-mailhog-on-macos)
  - [Installeren MailHog op Windows](#installing-mailhog-on-windows)
  - [Installeren MailHog op Linux](#installing-mailhog-on-linux)
- [Gebruik MailHog](#using-mailhog)
- [Nuttige links](#useful-links)

### Installeren MailHog op macOS

Installeer MailHog op macOS met [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

De bovenstaande commando's zullen een mailhog-service op de achtergrond starten.

Wanneer de installatie is voltooid, kunt u [starten met MailHog](#using-mailhog).

### Installeren MailHog op Windows

Download de laatste versie van MailHog van [MailHog officiële repository](https://github.com/mailhog/MailHog/releases). Zoek en klik op de link voor uw Windows-versie (32 of 64 bit) en een .exe-bestand zal worden gedownload naar uw computer.

Klik als de download is voltooid, om het bestand te openen. Een Windows firewall melding kan verschijnen, om toestemming te vragen voor MailHog. Een standaard Windows opdrachtregelprompt opent waar MailHog draait zodra toegang tot de firewall is verleend.

Sluit MailHog door het command prompt venster te sluiten. Om MailHog opnieuw te starten, klik op het Uitvoerbare MailHog (. xe) bestand dat eerst werd gedownload - het is niet nodig om een nieuwe MailHog installatiebestand te downloaden.

Start [met MailHog](#using-mailhog).

### Installeren MailHog op Linux

Installeer eerst [Ga](https://golang.org).

Voer de volgende opdrachten uit om GO te installeren op op Debiangebaseerde systemen zoals Ubuntu en Linux Mint.

```bash
sudo apt-get install golang
```

Voer de volgende opdrachten uit om GO te installeren op op RPMgebaseerde systemen zoals CentOS, Fedora, Rode Hoed Linux, etc.

```bash
sudo dnf install golang
```

Je kunt ook de volgende commando's uitvoeren om GO te installeren.

```bash
sudo yum install golang
```

Stel nu het pad in om te gaan met de volgende commando's.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profiel
echo 'export PATH=$PATH:/usr/local/bin:$GOPATH/bin' >> ~/.profiel
bron ~/.profiel
```

Ten slotte voer de onderstaande commando's in om MailHog te installeren en uitvoeren.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Start [met MailHog](#using-mailhog).

## Gebruik MailHog

Open een nieuw browsertabblad of venster en navigeer naar [http://localhost:8025](http://localhost:8025) om uw MailHog inbox te openen wanneer de MailHog installatie is voltooid en MailHog wordt uitgevoerd. Het postvak in zal vergelijkbaar zijn met de onderstaande schermafbeelding.

![MailHog Schermafbeelding 1](images/mailhog/1.jpg)

E-mails verzonden door uw freeCodeCamp installatie zullen hieronder verschijnen

![MailHog Schermafbeelding 2](images/mailhog/2.jpg)

Twee tabbladen waarmee u platte tekst of broninhoud kunt bekijken zijn beschikbaar wanneer u een bepaalde e-mail opent. Zorg ervoor dat het tabblad platte tekst als hieronder is geselecteerd.

![MailHog Schermafbeelding 3](images/mailhog/3.jpg)

Alle links in de e-mail moeten klikbaar zijn en naar hun URL worden doorgestuurd.

## Nuttige links

- Bekijk de [MailHog](https://github.com/mailhog/MailHog) repository voor verdere informatie gerelateerd aan MailHog. Extra informatie is ook beschikbaar met betrekking tot aangepaste MailHog configuraties.
