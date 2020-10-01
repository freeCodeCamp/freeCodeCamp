> **Bemærk:** Dette er et **valgfrit** trin og er kun påkrævet, når du arbejder med e-mail arbejdsgange

## Indledning

Nogle e-mailarbejdsgange kræver som opdatering af en brugers e-mail, at back-end api-serveren sender udgående e-mails. Et alternativ til at bruge en e-mail-tjenesteudbyder til at sende faktiske e-mails, Mailhog er et udviklerværktøj til e-mail-test, der vil fange e-mails sendt af din freeCodeCamp forekomst.

## Installerer MailHog

MailHog kan installeres på macOS, Windows og Linux.

- [Indledning](#introduction)
- [Installerer MailHog](#installing-mailhog)
  - [Installerer MailHog på macOS](#installing-mailhog-on-macos)
  - [Installerer MailHog på Windows](#installing-mailhog-on-windows)
  - [Installerer MailHog på Linux](#installing-mailhog-on-linux)
- [Brug Af MailHog](#using-mailhog)
- [Nyttige Links](#useful-links)

### Installerer MailHog på macOS

Installér MailHog på macOS med [Homebrew](https://brew.sh/):

```bash
bryg installere mailhog
bryg tjenester starte mailhog
```

Ovenstående kommandoer vil starte en mailhog service i baggrunden.

Når installationen er færdig, kan du begynde at [bruge MailHog](#using-mailhog).

### Installerer MailHog på Windows

Download den seneste version af MailHog fra [MailHogs officielle arkiv](https://github.com/mailhog/MailHog/releases). Find og klik på linket til din Windows-version (32 eller 64 bit) og en .exe-fil vil blive hentet til din computer.

Når overførslen er færdig, skal du klikke for at åbne filen. En Windows firewall meddelelse kan vises, anmoder om adgangstilladelse til MailHog. En standard Windows kommandolinje prompt vil åbne, hvor MailHog vil køre, når firewall adgang er givet.

Luk MailHog ved at lukke kommandoprompten vinduet. For at starte MailHog igen, skal du klikke på MailHog eksekverbare (. xe) fil, der blev hentet i starten - det er ikke nødvendigt at downloade en ny MailHog installationsfil.

Start [med at bruge MailHog](#using-mailhog).

### Installerer MailHog på Linux

Installér først [Gå](https://golang.org).

Kør følgende kommandoer for at installere GO på Debian-baserede systemer som Ubuntu og Linux Mint.

```bash
sudo apt-get install golang
```

Kør følgende kommandoer for at installere GO på RPM-baserede systemer som CentOS, Fedora, Red Hat Linux, etc.

```bash
sudo dnf install golang
```

Alternativt kan du køre følgende kommandoer for at installere GO.

```bash
sudo yum install golang
```

Sæt nu stien til Go med følgende kommandoer.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Endelig, indtaste kommandoerne nedenfor for at installere og køre MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Start [med at bruge MailHog](#using-mailhog).

## Brug Af MailHog

Åbn en ny browserfane eller -vindue og gå til [http://localhost:8025](http://localhost:8025) for at åbne din MailHog indbakke, når MailHog installationen er afsluttet, og MailHog kører. Indbakken vises i lighed med skærmbilledet nedenfor.

![MailHog Skærmbillede 1](images/mailhog/1.jpg)

E-mails sendt fra din freeCodeCamp installation vises som nedenfor

![MailHog Skærmbillede 2](images/mailhog/2.jpg)

To faner, der giver dig mulighed for at se enten almindelig tekst eller kildeindhold, vil være tilgængelige, når du åbner en given e-mail. Sørg for at det almindelige tekstfaneblad er valgt som nedenfor.

![MailHog Skærmbillede 3](images/mailhog/3.jpg)

Alle links i e-mailen skal være klikbare og løse til deres URL.

## Nyttige Links

- Tjek [MailHog](https://github.com/mailhog/MailHog) depotet for yderligere oplysninger vedrørende MailHog. Yderligere oplysninger er også tilgængelige om brugerdefinerede MailHog konfigurationer.
