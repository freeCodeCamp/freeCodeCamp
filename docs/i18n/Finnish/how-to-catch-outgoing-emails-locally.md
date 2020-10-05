> **Huomautus:** Tämä on **valinnainen** vaihe ja vaaditaan vain, kun työskennellään sähköpostin työnkulun kanssa

## Johdanto

Jotkut sähköpostin työnkulku kuten päivittäminen käyttäjän sähköpostia, vaatii back-end api-palvelimen lähettää lähtevät sähköpostit. Vaihtoehtona sille, että sähköpostipalvelun tarjoajaa käytetään varsinaisten sähköpostiviestien lähettämiseen, Mailhog on kehittäjän työkalu sähköpostin testaus, joka saalis sähköpostiviestit lähetetään freeCodeCamp instance.

## Asennetaan MailHogia

MailHog voidaan asentaa macOS, Windows ja Linux.

- [Johdanto](#introduction)
- [Asennetaan MailHogia](#installing-mailhog)
  - [Asennetaan MailHogia macOS:ään](#installing-mailhog-on-macos)
  - [Asennetaan MailHogia Windowsiin](#installing-mailhog-on-windows)
  - [Asennetaan MailHogia Linuxiin](#installing-mailhog-on-linux)
- [Käyttäen MailHogia](#using-mailhog)
- [Hyödyllisiä Linkkejä](#useful-links)

### Asennetaan MailHogia macOS:ään

Asenna MailHog macOS:ään [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew palvelut aloittaa mailhog
```

Yllä olevat komennot aloittavat poshogipalvelun taustalla.

Kun asennus on valmis, voit aloittaa [käyttämällä MailHog](#using-mailhog).

### Asennetaan MailHogia Windowsiin

Lataa uusin versio MailHog osoitteesta [MailHogin virallinen arkisto](https://github.com/mailhog/MailHog/releases). Etsi ja klikkaa linkkiä Windows version (32 tai 64 bit) ja .exe tiedosto ladataan tietokoneellesi.

Kun lataus valmistuu, napsauta avataksesi tiedoston. Windows palomuuri ilmoitus voi ilmestyä, pyytää pääsyä MailHog. Standardi Windows komentorivikehote aukeaa, jossa MailHog on käynnissä, kun palomuuri pääsy on myönnetty.

Sulje MailHog sulkemalla komennon kehysikkuna. Aloita MailHog uudelleen, napsauta MailHog suoritettavaa (. xe) tiedosto, joka on ladattu aluksi - se ei ole tarpeen ladata uusi MailHog asennustiedosto.

Aloita [käyttämällä MailHog](#using-mailhog).

### Asennetaan MailHogia Linuxiin

Asenna [Go](https://golang.org).

Suorita seuraavat komennot asennettaessa GO Debianiin perustuviin järjestelmiin, kuten Ubuntu ja Linux Mint.

```bash
sudo apt-get install golang
```

Suorita seuraavat komennot asennettaessa GO RPM- pohjaisiin järjestelmiin, kuten CentOS, Fedora, Red Hat Linux, jne.

```bash
sudo dnf install golang
```

Vaihtoehtoisesti suorita seuraavat komennot asennettavaksi GO:ksi.

```bash
sudo yum install golang
```

Aseta nyt polku Go kanssa seuraavat komennot.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Lopuksi kirjoita alla olevat komennot asentaaksesi ja suorittaaksesi MailHogin.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Aloita [käyttämällä MailHog](#using-mailhog).

## Käyttäen MailHogia

Avaa selaimen uusi välilehti tai ikkuna ja siirry osoitteeseen [http://localhost:8025](http://localhost:8025) avataksesi MailHog postilaatikon, kun MailHog on valmis ja MailHog on käynnissä. Saapuneet-kansio näyttää samanlaiselta kuin alla oleva näyttö.

![MailHog Kuvakaappaus 1](images/mailhog/1.jpg)

FreeCodeCamp -asennuksen lähettämät sähköpostit näkyvät kuten alla

![MailHog Kuvakaappaus 2](images/mailhog/2.jpg)

Kaksi välilehteä, joiden avulla voit tarkastella joko tekstiä tai lähdekoodia on käytettävissä, kun avaat tietyn sähköpostiosoitteen. Varmista, että tekstivälilehti on valittu kuten alla.

![MailHog Kuvakaappaus 3](images/mailhog/3.jpg)

Kaikkien sähköpostin linkkien tulisi olla klikattavissa ja ne tulisi ratkaista URL-osoitteeseen.

## Hyödyllisiä Linkkejä

- Tutustu [MailHog](https://github.com/mailhog/MailHog) -arkistoon saadaksesi lisätietoja MailHogista. LisÃ¤tietoja on myÃ¶s kÃ¤yttÃ¤vÃ¤t mukautetun MailHog kokoonpanot.
