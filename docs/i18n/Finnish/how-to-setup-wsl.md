# Määritä freeCodeCamp Windows-alajärjestelmässä Linuxille (WSL)

> [!HUOM] Ennen kuin noudatat näitä ohjeita, varmista, että järjestelmäsi täyttää vaatimukset
> 
> **WSL 2**: Windows 10 64-bit (Versio 2004, Rakenna 19041 tai uudempi) - saatavilla kaikille jakeluille kuten Windows 10 Home.
> 
> **Docker Desktop Windowsille**: Katso vastaavat vaatimukset [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) ja [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Tämä opas kattaa joitakin yhteisiä vaiheita kanssa asennus WSL2. Kun joitakin yhteisiä kysymyksiä WSL2 on käsitelty, sinun pitäisi pystyä seuraamaan paikallisia setup opas työskennellä freeCodeCamp Windows käynnissä WSL distro kuten Ubuntu.

## Ota Wsl Käyttöön

Noudata ohjeita [virallisessa dokumentaatiossa](https://docs.microsoft.com/en-us/windows/wsl/install-win10) asentaa WSL1 ja sen jälkeen päivittää WSL2.

## Install Ubuntu

1. Suosittelemme käyttämään Ubuntu-18.04 tai yli WSL2.

   > [!HUOM]
   > 
   > Vaikka voit käyttää muita ei-debialaisia distrooleja, ne kaikki tulevat oman gotchas ja ovat tämän oppaan soveltamisalan ulkopuolella.

2. Päivitä käyttöjärjestelmän riippuvuudet

   ```console
   sudo apt update
   sudo apt upgrade -y

   # cleanup
   sudo apt autoremove -y
   ```

## Määritä Git

Git on valmiiksi asennettu Ubuntu 18.04 , tarkista että Git versio `git --version`.

```output
~
¶ git --version
git version 2.25.1
```

(Valinnainen, mutta suositeltava) Voit nyt siirtyä [perustamaan ssh avaimesi](https://help.github.com/articles/generating-an-ssh-key) GitHubilla.

## Koodinmuokkaimen asentaminen

Suosittelemme asentamaan [Visual Studio Code](https://code.visualstudio.com) Windows 10:ssä. Se on suuri tuki WSL ja asentaa automaattisesti kaikki tarvittavat laajennukset WSL distro.

Pohjimmiltaan voit muokata ja tallentaa koodisi Ubuntu-18.04 VS Code asennettuna Windowsiin.

## Dockerin Työpöydän Asentaminen

**Docker Desktop Windowsille** voit asentaa ja suorittaa tietokannan ja palvelut, kuten MongoDB, NGINX jne. Tämä on hyödyllistä välttää yhteisiä sudenkuoppia asentamalla MongoDB tai muita palveluja suoraan Windowsissa tai WSL2.

Seuraa ohjeita [virallisella dokumentaatiolla](https://docs.docker.com/docker-for-windows/install) ja asenna Docker Desktop Windows-jakelua varten.

On olemassa joitakin vähimmäisvaatimuksia laitteiston parhaan kokemuksen.

## Määritä WSL:n Docker-työpöytä

Kun Docker Desktop on asennettu, [noudata näitä ohjeita](https://docs.docker.com/docker-for-windows/wsl) ja määritä se käyttämään Ubuntu-18.04 asennusta taustalaitteena.

Tämä tekee siitä niin, että kontit kulkevat WSL puolella sen sijaan, että juoksevat Windowsissa. Voit käyttää palveluita `http://localhost` sekä Windowsissa että Ubuntu.

## Asenna MongoDB Docker Hubista

Kun olet konfiguroinut Docker Desktop toimimaan WSL2, noudata näitä ohjeita aloittaa MongoDB palvelu:

1. Avaa uusi Ubuntu-18.04 pääte

2. Vedä `MongoDB 3.6` telakoilta

   ```console
   docker pull mongo:3
   ```

3. Käynnistä MongoDB palvelu portilla `27017`, ja määritä se automaattisesti järjestelmän uudelleenkäynnistykseen

   ```console
   telakka ajaa -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --uudelleenkäynnistys ilman vähennystä \
     -d mongo:3
   ```

4. Voit nyt käyttää palvelua sekä Windows-tai Ubuntu `mongodb://localhost:27017`.

## Node.js- ja npm:n asentaminen

Suosittelemme asentamaan LTS version Node.js kanssa node version Manager - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

Kun olet asentanut nämä komennot asentaaksesi ja käyttääksesi Node.js-versiota tarpeen mukaan

```console
nvm install --lts

# OR
# nvm install <version>

nvm install 14

# Käyttö
# nvm use <version>

nvm use 12
```

Node.js mukana tulee `npm`, voit päivittää uusimpiin `npm` versioihin kanssa:

```console
npm asentaa -g npm@latest
```

## Määritä freeCodeCamp paikallisesti

Nyt kun olet asentanut vaaditut tiedot, seuraa [paikallista asennusopastamme](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) kloonaamaan, asentamaan ja asettamaan freeCodeCamp paikallisesti koneeseesi.

> [!VAROITUS]
> 
> Huomaathan, että tällä hetkellä on perustettu Cypressin testejä varten (ja niihin liittyviä käyttöliittymän tarpeita). Sinun pitäisi silti pystyä työskentelemään suurimman osan codebase.

## Hyödyllisiä Linkkejä

- [WSL2 Dev asennus Ubuntu 20.04, Node.js, MongoDB, VS Code ja Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - artikkeli Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- Usein kysytyt kysymykset:
  - [Windows-alijärjestelmä Linuxille](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Telakointityöpöytä Windowsille](https://docs.docker.com/docker-for-windows/faqs)
