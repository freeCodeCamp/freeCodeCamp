> **Note:** Dette er et **valgfritt** steg og kreves bare når du arbeider med e-postarbeidsflyter

## Introduksjon

Noen email workflows, som å oppdatere en brukers e-post, krever at back-end api-server sender utgående e-post. et alternativ til å bruke en e-postleverandør for å sende faktiske e-postmeldinger, Mailhog er et utviklerverktøy for å teste e-postmeldinger som vil bli sendt av din freeCodeCamp instance.

## Installerer MailHog

MailHog kan installeres på macOS, Windows og Linux.

- [Introduksjon](#introduction)
- [Installerer MailHog](#installing-mailhog)
  - [Installerer MailHog på macOS](#installing-mailhog-on-macos)
  - [Installerer MailHog på Windows](#installing-mailhog-on-windows)
  - [Installere MailHog på Linux](#installing-mailhog-on-linux)
- [Bruker MailHog](#using-mailhog)
- [Nyttige lenker](#useful-links)

### Installerer MailHog på macOS

Installer MailHog på macOS med [Homebrew](https://brew.sh/):

```bash
brygg å installere mailhog
bryggetjenester starter mailhog
```

kommandoene over vil starte en mailhog-tjeneste i bakgrunnen.

Når installasjonen er ferdig, kan du starte [med MailHog](#using-mailhog).

### Installerer MailHog på Windows

Last ned den nyeste versjonen av MailHog fra [MailHogs offisielle depot](https://github.com/mailhog/MailHog/releases). Finn og klikk på lenken for din Windows-versjon (32 eller 64 bit) og en .exe-fil vil bli lastet ned til datamaskinen din.

Når nedlastingen er ferdig, klikk for å åpne filen. En Windows-brannmurmelding kan dukke opp, og be om tilgangstillatelse for MailHog. En standard Windows-kommandolinjeforespørsel vil åpne hvor MailHog vil kjøre når brannmur tilgang er gitt.

Lukk MailHog ved å lukke vinduet som ledetekst for kommandoer. For å starte MailHog igjen, klikk på MailHog kjørbare (. xe) filen som ble lastet ned innledningsvis, det er ikke nødvendig å laste ned en ny installasjonsfil MailHog.

Start [med MailHog](#using-mailhog).

### Installere MailHog på Linux

Først, installer [Go](https://golang.org).

Kjør følgende kommandoer for å installere GO på Debian-baserte systemer som Ubuntu og Linux Mint.

```bash
sudo apt-get install golang
```

Kjør følgende kommandoer for å installere GO på RPM-baserte systemer som CentOS, Fedora, Red Hat Linux, etc.

```bash
sudo dnf install golang
```

Alternativt kan du kjøre følgende kommandoer for å installere GO.

```bash
sudo yum install golang
```

Nå kan du angi stien for å gå med følgende kommandoer.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profil
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profil
kilde ~/.profil
```

Til slutt, skriv inn kommandoene nedenfor for å installere og kjøre MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Start [med MailHog](#using-mailhog).

## Bruker MailHog

Åpne en ny nettleserfane eller et vindu og naviger til [http://localhost:8025](http://localhost:8025) for å åpne MailHog innboksen når MailHog installasjonen har fullført og MailHog kjører. Innboksen vil se ut som om skjermen ble skutt nedenfor.

![Skjermbilde 1](images/mailhog/1.jpg)

E-poster sendt av din freeCodeCamp installasjon vil vises som nedenfor

![Skjermbilde 2](images/mailhog/2.jpg)

To faner som lar deg vise enten ren tekst eller kildekodeinnhold vil være tilgjengelig når du åpner en gitt e-post. Kontroller at ren tekst-fanen er valgt som nedenfor.

![Skjermbilde 3](images/mailhog/3.jpg)

Alle koblinger i e-posten bør være klikkbare og løse til sin URL.

## Nyttige lenker

- Sjekk ut [MailHog](https://github.com/mailhog/MailHog) arkivet for ytterligere informasjon relatert til MailHog. Ytterligere informasjon er også tilgjengelig om egendefinerte MailHog konfigurasjoner.
