> **Obs:** Detta är ett **valfritt** steg och krävs endast när du arbetar med e-postarbetsflöden

## Introduktion

Vissa e-postarbetsflöden, som att uppdatera en användares e-post, kräver att back-end api-servern skickar utgående e-post. Ett alternativ till att använda en e-postleverantör för att skicka faktiska e-postmeddelanden, Mailhog är ett utvecklarverktyg för e-posttestning som kommer att fånga e-postmeddelanden som skickas av din freeCodeCamp instans.

## Installerar MailHog

MailHog kan installeras på macOS, Windows och Linux.

- [Introduktion](#introduction)
- [Installerar MailHog](#installing-mailhog)
  - [Installera MailHog på macOS](#installing-mailhog-on-macos)
  - [Installera MailHog på Windows](#installing-mailhog-on-windows)
  - [Installera MailHog på Linux](#installing-mailhog-on-linux)
- [Använda MailHog](#using-mailhog)
- [Användbara länkar](#useful-links)

### Installera MailHog på macOS

Installera MailHog på macOS med [Homebrew](https://brew.sh/):

```bash
bryggning installera mailhog
bryggning tjänster starta mailhog
```

Ovanstående kommandon kommer att starta en mailhog tjänst i bakgrunden.

När installationen är klar kan du börja [använda MailHog](#using-mailhog).

### Installera MailHog på Windows

Ladda ner den senaste versionen av MailHog från [MailHogs officiella arkiv](https://github.com/mailhog/MailHog/releases). Leta upp och klicka på länken för din Windows-version (32 eller 64 bit) och en .exe-fil kommer att laddas ner till din dator.

När nedladdningen är klar, klicka för att öppna filen. En Windows brandvägg anmälan kan visas, begär åtkomstbehörighet för MailHog. En standard Windows-kommandoraden kommer att öppnas där MailHog kommer att köras när brandväggen är beviljad.

Stäng MailHog genom att stänga kommandotolkfönstret. För att starta MailHog igen, klicka på MailHog körbar (. xe) fil som hämtades initialt - det är inte nödvändigt att ladda ner en ny MailHog installationsfil.

Börja [använda MailHog](#using-mailhog).

### Installera MailHog på Linux

Först installera [Go](https://golang.org).

Kör följande kommandon för att installera GO på Debianbaserade system som Ubuntu och Linux Mint.

```bash
sudo apt-get install golang
```

Kör följande kommandon för att installera GO på RPM-baserade system som CentOS, Fedora, Red Hat Linux, etc.

```bash
sudo dnf install golang
```

Alternativt kör följande kommandon för att installera GO.

```bash
sudo yum install golang
```

Ange nu vägen för Gå med följande kommandon.

```bash
eko "exportera GOPATH=$HOME/go" >> ~/.profile
eko "exportera PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
källa ~/.profile
```

Slutligen anger du kommandona nedan för att installera och köra MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Börja [använda MailHog](#using-mailhog).

## Använda MailHog

Öppna en ny webbläsarflik eller fönster och navigera till [http://localhost:8025](http://localhost:8025) för att öppna din MailHog inkorg när MailHog installationen har slutförts och MailHog körs. Inkorgen kommer att visas som liknar skärmbilden nedan.

![MailHog skärmdump 1](images/mailhog/1.jpg)

E-post som skickas av din freeCodeCamp-installation visas enligt nedan

![MailHog skärmdump 2](images/mailhog/2.jpg)

Två flikar som gör att du kan visa antingen oformaterad text eller källinnehåll kommer att finnas tillgängliga när du öppnar ett visst e-postmeddelande. Se till att fliken oformaterad text väljs som nedan.

![MailHog skärmdump 3](images/mailhog/3.jpg)

Alla länkar i e-postmeddelandet ska vara klickbara och lösa till sin URL.

## Användbara länkar

- Kolla in [MailHog](https://github.com/mailhog/MailHog) för ytterligare information relaterad till MailHog. Ytterligare information finns också om anpassade MailHog konfigurationer.
