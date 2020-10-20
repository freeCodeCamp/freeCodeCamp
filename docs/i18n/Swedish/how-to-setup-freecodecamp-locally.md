Följ dessa riktlinjer för att sätta upp freeCodeCamp lokalt på ditt system. Detta rekommenderas starkt om du vill bidra regelbundet.

För en del av arbetsflödena för bidrag behöver du ha freeCodeCamp som körs lokalt. Till exempel förhandsgranskar kodningsutmaningar eller felsökning och rättning av buggar i kodbasen.

> [!TIP] Om du inte är intresserad av att sätta upp freeCodeCamp lokalt överväg att använda Gitpod, en gratis online dev-miljö.
> 
> [![Öppna i Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Startar en kodfärdig utvecklingsmiljö för freeCodeCamp i din webbläsare.)

## Förbered din lokala maskin

Börja med att installera nödvändig programvara för ditt operativsystem.

Vi stödjer i första hand utvecklingen på **\*nix** system. Vår personal och våra medarbetare arbetar regelbundet med kodbasen med verktyg som är installerade på Ubuntu och macOS.

Vi stöder också Windows 10 via WSL2, som du kan förbereda genom att [läsa denna guide](/how-to-setup-wsl).

Vissa medlemmar i gemenskapen utvecklas också på Windows 10 inbyggt med Git för Windows (Git Bash), och andra verktyg installerade på Windows. Vi har inte officiellt stöd för en sådan installation just nu, rekommenderar vi att använda WSL2 istället.

**Förutsättningar:**

| Förutsättning                                                                                 | Version | Anteckningar                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Node.js](http://nodejs.org)                                                                  | `12.x`  | [LTS Schema](https://github.com/nodejs/Release#release-schedule)                                                                                                                           |
| npm (levereras med nod)                                                                       | `6.x`   | Har inte LTS-utgåvor, vi använder versionen tillsammans med Node LTS                                                                                                                       |
| [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`   | [Versionsfakta](https://docs.mongodb.com/manual/release-notes/), Notera: Vi är just nu på `3,6`, en [uppgradering är planerad](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> [!DANGER] Om du har en annan version, vänligen installera den rekommenderade versionen. Vi kan endast stödja installationsproblem för rekommenderade versioner. Se [felsökning](#troubleshooting) för detaljer.

Om Node.js redan är installerat på din maskin, kör följande kommandon för att validera versionerna:

```console
nod -v
npm -v
```

> [!TIP] Vi rekommenderar starkt att uppdatera till de senaste stabila utgåvorna av programvaran som listas ovan, även känd som Long Term Support (LTS) utgåvor.

När du har installerat förutsättningarna måste du förbereda din utvecklingsmiljö. Detta är vanligt för många utvecklingsarbetsflöden, och du behöver bara göra detta en gång.

**Följ dessa steg för att få din utvecklingsmiljö klar:**

1. Installera [Git](https://git-scm.com/) eller din favorit Git klient, om du inte redan har det. Uppdatera till den senaste versionen; den version som levereras med ditt OS kan vara föråldrad.

2. (Valfritt men rekommenderat) [Ställ in en SSH-nyckel](https://help.github.com/articles/generating-an-ssh-key/) för GitHub.

3. Installera en kodredigerare som du väljer.

   Vi rekommenderar starkt att du använder [Visual Studio-kod](https://code.visualstudio.com/) eller [Atom](https://atom.io/). Dessa är stora, fria och öppen källkod redaktörer.

4. Ställ in linting för din kodredigerare.

   Du bör ha [ESLint körs i din editor](http://eslint.org/docs/user-guide/integrations.html), och det kommer att markera allt som inte överensstämmer med [freeCodeCamps JavaScript Style Guide](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!TIP] Vänligen ignorera inga linting fel. De är avsedda att **hjälpa** dig och att säkerställa en ren och enkel kodbas.

## Forka utvecklingskatalogen på GitHub

[Forkning](https://help.github.com/articles/about-forks/) är ett steg där du får din egen kopia av freeCodeCamps huvudarkiv (a.k.a _repo_) på GitHub.

Detta är viktigt, eftersom det gör att du kan arbeta på din egen kopia av freeCodeCamp på GitHub, eller för att ladda ner (klona) ditt utvecklingskatalog för att arbeta lokalt. Senare kommer du att kunna begära att ändringar dras in i huvudarkivet från din gaffel via en pull-förfrågan (PR).

> [!TIP] Huvudarkivet på `https://github.com/freeCodeCamp/freeCodeCamp` kallas ofta för `uppströms` förrådet.
> 
> Din fork på `https://github.com/YOUR_USER_NAME/freeCodeCamp` kallas ofta `ursprung`.

**Följ dessa steg för att fork `https://github.com/freeCodeCamp/freeCodeCamp` utvecklingskatalog:**

1. Gå till freeCodeCamp repository på GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Klicka på "Fork" knappen i övre högra hörnet av gränssnittet ([Mer information Här](https://help.github.com/articles/fork-a-repo/))

3. Efter att utvecklingskatalogen har blivit forkad kommer du att tas till din kopia av freeCodeCamp-arkivet på `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      Hur man fork freeCodeCamp på GitHub (skärmdump)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Hur man fork freeCodeCamp på GitHub" />
</details>

## Klona din gaffel från GitHub

[Kloning](https://help.github.com/articles/cloning-a-repository/) är där du **laddar ner** en kopia av ett arkiv från en `avlägsen` plats som antingen ägs av dig eller av någon annan. I ditt fall är denna fjärranslutning din `fork` av freeCodeCamps utvecklingskatalog som bör vara tillgänglig på `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Kör dessa kommandon på din lokala maskin:

1. Öppna en Terminal / Kommandotolken / Shell i din projektkatalog

   _dvs.: `/yourprojectsdirectory/`_

2. Klona din fork av freeCodeCamp, ersätter `YOUR_USER_NAME` med ditt GitHub användarnamn

   ```console
   git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Detta kommer att ladda ner hela freeCodeCamp-arkivet till din projektkatalog.

Notera: `--depth=1` skapar en ytlig klon av din gaffel, med bara den senaste historiken/commit.

## Konfigurera synkronisering från förälder

Nu när du har laddat ner en kopia av din fork, måste du ställa in en `uppströms` fjärrkontroll till förälderförrådet.

[Som tidigare nämnts](#fork-the-repository-on-github), huvudarkivet refereras `uppströms` repository. Din gaffel kallad `ursprung` förrådet.

Du behöver en referens från din lokala klon till `uppströms` utvecklingskatalogen utöver `ursprung` utvecklingskatalogen. Detta är så att du kan synkronisera förändringar från huvudarkivet utan krav på forking och kloning upprepade gånger.

1. Ändra katalog till den nya freeCodeCamp-katalogen:

   ```console
   cd freeCodeCamp
   ```

2. Lägg till en fjärrreferens till det huvudsakliga freeCodeCamp-arkivet:

   ```console
   git remote lägg till upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Se till att konfigurationen ser korrekt ut:

   ```console
   git fjärr -v
   ```

   Utgången ska se ut ungefär som nedan:

   ```console
   origin https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   origin https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   upstream https://github.com/freeCodeCamp/freeCodeCamp.git (push)
   ```

## Running freeCodeCamp lokalt

Nu när du har en lokal kopia av freeCodeCamp, kan du följa dessa instruktioner för att köra den lokalt. Detta kommer att tillåta dig att:

- Förhandsgranska redigeringar till sidor som de skulle visas på lärplattformen.
- Arbeta med UI relaterade frågor och förbättringar.
- Felsök och åtgärda problem med applikationsservrar och klientappar.

Om du stöter på problem, först utföra en webbsökning för ditt problem och se om det redan har besvarats. Om du inte hittar en lösning, sök på vår [GitHub issues-sida](https://github.com/freeCodeCamp/freeCodeCamp/issues) för en lösning och rapportera problemet om det ännu inte har rapporterats.

Och som alltid, välkommen att hoppa på till vår [bidragsgivare Chattrum på Gitter](https://gitter.im/FreeCodeCamp/Contributors) eller [vår Discord-server](https://discord.gg/pFspAhS), för snabba frågor.

> [!TIP] Du kan hoppa över att köra freeCodeCamp lokalt om du helt enkelt redigerar filer. Till exempel, utföra en `rebase`, eller lösa `sammanfoga` konflikter.
> 
> Du kan alltid återgå till denna del av anvisningarna senare. Du bör **bara** hoppa över detta steg om du inte behöver köra apparna på din maskin.
> 
> [Hoppa över till att göra ändringar](#making-changes-locally).

### Konfigurerar beroenden

#### Steg 1: Ställ in miljövariabelfilen

Standard API-nycklar och miljövariabler lagras i filen `sample.env`. Denna fil måste kopieras till en ny fil som heter `.env` som nås dynamiskt under installationssteget.

```console
# Skapa en kopia av "sample.env" och namnge det ".env".
# Populera det med nödvändiga API-nycklar och hemligheter:

# macOS / Linux
cp-prov. nv .env

# Windows
kopiera sample.env .env
```

Nycklarna i filen `.env` är _inte_ krävs för att kunna köra appen lokalt. Du kan lämna standardvärdena kopierade över från `sample.env` as-is.

> [!TIP] Tänk på om du vill använda tjänster som Auth0 eller Algolia, du måste skaffa dina egna API-nycklar för dessa tjänster och redigera posterna i enlighet med `. nv` fil.

#### Steg 2: Installera beroenden

Detta steg kommer att installera de beroenden som krävs för att programmet ska köra:

```console
npm ci
```

#### Steg 3: Starta MongoDB och säd databasen

Innan du kan köra programmet lokalt, måste du starta MongoDB tjänsten.

> [!NOTE] Om du inte har MongoDB igång i en annan installation än standardinställningen, URL lagrad som `MONGOHQ_URL` värde i `. nv` filen bör fungera bra. Om du använder en anpassad konfiguration, ändra detta värde efter behov.

Starta MongoDB-servern i en separat terminal:

- På macOS & Ubuntu:

  ```console
  mongod
  ```

- I Windows måste du ange hela sökvägen till `monguden` binär

  ```console
  "C:\Program Filer\MongoDB\Server\3.6\bin\mongod"
  ```

  Se till att ersätta `3.6` med den version du har installerat

> [!TIP] Du kan undvika att behöva starta MongoDB varje gång genom att installera den som en bakgrundstjänst. Du kan [lära dig mer om det i deras dokumentation för ditt operativsystem](https://docs.mongodb.com/manual/administration/install-community/)

Därefter kan vi säda databasen. I detta steg kör vi kommandot nedan som fyller MongoDB-servern med några initiala datamängder som krävs av tjänster. Dessa inkluderar bland annat några scheman.

```console
npm kör seed
```

#### Steg 4: Starta gratisCodeCamp-klientprogrammet och API-servern

Du kan nu starta upp API-servern och klientprogrammen.

```console
Npm kör utveckla
```

Detta enda kommando kommer att skjuta upp alla tjänster, inklusive API-servern och klientprogram som finns tillgängliga för dig att arbeta på.

> [!NOTE] Öppna en webbläsare och **besök <http://localhost:8000>**. Om appen laddar, grattis – du är helt klar! Du har nu en kopia av freeCodeCamps hela inlärningsplattform som körs på din lokala maskin.

> [!TIP] API-servern serverar API:er på `http://localhost:3000`. Gatsby appen betjänar klientprogrammet på `http://localhost:8000`

> Om du besöker <http://localhost:3000/explorer> bör du se tillgängliga API:er.

## Logga in med en lokal användare

Din lokala inställning fyller automatiskt en lokal användare i databasen. Om du klickar på `Logga in` -knappen kommer du automatiskt att autentiseras i den lokala applikationen.

Att komma åt användarportföljen är dock lite knepigt. Under utveckling, Gatsby tar över servering av klientsidor och därför får du en `404` sida för användarportföljen när du arbetar lokalt.

Klicka bara på **"Förhandsgranska Anpassad 404 sida"** knappen kommer att vidarebefordra dig till rätt sida.

<details>
   <summary>
      Hur du loggar in när du arbetar lokalt (skärmdump)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Hur du loggar in när du arbetar lokalt" />
</details>

## Gör ändringar lokalt

Du kan nu göra ändringar i filer och binda dina ändringar till din lokala klon av din gaffel.

Följ dessa steg:

1. Validera att du är på `master` branchen:

   ```console
   git status
   ```

   Du bör få en utgång som denna:

   ```console
   På filialmästare
   Din filial är uppdaterad med 'origin/master'.

   inget att begå, arbetskatalogen ren
   ```

   Om du inte är på master eller om din arbetskatalog inte är ren, lösa eventuella utestående filer/commits och kassan `master`:

   ```console
   git kassan master
   ```

2. Synkronisera de senaste ändringarna från freeCodeCamp uppströms `master` branch till din lokala huvudkontor:

   > [!VARNING] Om du har några utestående pull-förfrågan som du gjort från `huvuddelen` av din fork, du kommer att förlora dem i slutet av detta steg.
   > 
   > Du bör se till att din pull-förfrågan slås samman av en moderator innan du utför detta steg. För att undvika detta scenario, bör du **alltid** arbeta på en gren annan än `befälhavaren`.

   Detta steg **kommer att synkronisera de senaste ändringarna** från huvudarkivet för freeCodeCamp. Det är viktigt att du bygger om din filial ovanpå den senaste `uppströms/master` så ofta som möjligt för att undvika konflikter senare.

   Uppdatera din lokala kopia av freeCodeCamp uppströms utvecklingskatalog:

   ```console
   git hämta uppströms
   ```

   Svårt återställ din huvudgren med freeCodeCamp-mästaren:

   ```console
   git återställning --hard upstream/master
   ```

   Tryck din huvudgren till ditt ursprung för att ha en ren historik på din gaffel på GitHub:

   ```console
   git push origin master --force
   ```

   Du kan validera din nuvarande mästare matchar uppströms/mästaren genom att göra en diff:

   ```console
   git diff uppströms/master
   ```

   Resultatet bör vara tomt.

3. Skapa en ny ny gren:

   Att arbeta på en separat avdelning för varje ärende hjälper dig att hålla din lokala arbetskopia ren. Du bör aldrig arbeta på `mästaren`. Detta kommer att jorda din kopia av freeCodeCamp och du kan behöva börja om med en färsk klon eller gaffel.

   Kontrollera att du är på `master` som förklarats tidigare, och grenen därifrån:

   ```console
   git kassan -b fix/update-guide-for-xyz
   ```

   Ditt grennamn bör börja med en `fix/`, `feat/`, `docs/`, etc. Undvik att använda problem nummer i grenar. Håll dem korta, meningsfulla och unika.

   Några exempel på bra grennamn är:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Redigera sidor och arbeta med kod i din favorit textredigerare.

5. När du är nöjd med ändringarna bör du eventuellt köra freeCodeCamp lokalt för att förhandsgranska ändringarna.

6. Kontrollera att du åtgärdar eventuella fel och kontrollera formateringen av dina ändringar.

7. Kontrollera och bekräfta filerna du uppdaterar:

   ```console
   git status
   ```

   Detta bör visa en lista med `unstaged` filer som du har redigerat.

   ```console
   På grenfunktion/dokumentation
   Din filial är uppdaterad med 'upstream/feat/documentation'.

   Ändringar är inte iscensatta:
   (använd "git add/rm <file>... för att uppdatera vad som kommer att anges)
   (använd "git checkout -- <file>. ." för att kassera ändringar i arbetskatalogen)

       modifierade: ANSLUTNING. d
       ändrad: docs/README.md
       ändrad: docs/how to setup-freecodecamp-locally. d
       ändrad: docs/how to work-on-guide-articles.md
...
   ```

8. Steg ändringarna och gör ett åtagande:

   I det här steget ska du bara markera filer som du har redigerat eller lagt till själv. Du kan göra en återställning och lösa filer som du inte har för avsikt att ändra om det behövs.

   ```console
   git add path/to/my/changed/file.ext
   ```

   Eller så kan du lägga till alla `unstaged` filer till mellanlagringen området:

   ```console
   git add .
   ```

   Endast de filer som flyttades till mellanlagringen kommer att läggas till när du gör en incheckning.

   ```console
   git status
   ```

   Utgång:

   ```console
   På grenfunktion/dokumentation
   Din filial är uppdaterad med 'upstream/feat/documentation'.

   Ändringar som ska lämnas in:
   (använd "git reset HEAD <file>..." to unstage)

       modifierad: CONTRIBUTING.md
       modifierad: docs/README.md
       modifierad: docs/how-to-setup-freecodecamp-locally.md
       modifierad: docs/how-to-work-on-guide-articles.md
   ```

   Nu kan du utföra dina ändringar med ett kort meddelande som så:

   ```console
   git commit -m "fix: my short commit message"
   ```

   Några exempel:

   ```md
   fix: uppdatera guide artikel för Java - för loop
   funktion: lägg till guide artikel för alexa färdigheter
   ```

   Valfritt:

   Vi rekommenderar starkt att göra en konventionell begå budskap. Detta är en bra metod som du kommer att se på några av de populära Open Source-arkiven. Som utvecklare uppmuntrar detta dig att följa vanliga metoder.

   Några exempel på konventionella commit meddelanden är:

   ```md
   fix: uppdatera HTML guide artikeln
   fix: uppdatera bygga skript för Travis-CI
   funktion: lägg till artikel för JavaScript hissa
   dokument: uppdatera bidragande riktlinjer
   ```

   Behåll dessa kort, inte mer än 50 tecken. Du kan alltid lägga till ytterligare information i beskrivningen av incheckningsmeddelandet.

   Detta tar inte längre tid än ett okonventionellt meddelande som "uppdatera fil" eller "lägg till index.md"

   Du kan lära dig mer om varför du ska använda konventionella commits [här](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Om du inser att du behöver redigera en fil eller uppdatera commit-meddelandet efter att du gjort en commit kan du göra det efter att ha redigerat filerna med:

   ```console
   git commit --ändra
   ```

   Detta kommer att öppna en standard textredigerare som `nano` eller `vi` där du kan redigera kommandot titel och lägga till/redigera beskrivningen.

10. Därefter kan du driva dina ändringar till din gaffel:

    ```console
    git push-ursprung branch/namn-här
    ```

## Föreslå en Pull-begäran (PR)

När du har åtagit dig dina ändringar, kolla här för [hur du öppnar en Pull Request](how-to-open-a-pull-request.md).

## Snabb kommandoreferens

En snabb referens till de kommandon som du behöver när du arbetar lokalt.

| kommando                                                        | beskrivning                                                                         |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `npm ci`                                                        | Installerar / installera om alla beroenden och bootstraps de olika tjänsterna.      |
| `npm kör seed`                                                  | Analyserar alla Challenge-markdown-filer och sätter in dem i MongoDB.               |
| `Npm kör utveckla`                                              | Startar gratisCodeCamp API-server och klientprogram.                                |
| `NPM test`                                                      | Kör alla JS-tester i systemet, inklusive klient, server, lint och Challenge-tester. |
| `npm kör test: klient`                                          | Kör klienttestsviten.                                                               |
| `npm köra test: läroplan`                                       | Kör testsviten för läroplanerna.                                                    |
| `npm kör test: läroplan --block='Grundläggande HTML och HTML5'` | Testa ett specifikt block.                                                          |
| `npm kör test: läroplan --superblock='responsive-web-design'`   | Testa en specifik SuperBlock.                                                       |
| `npm kör test-läroplan-full utgång`                             | Kör testsviten för kursplaner, utan att behöva borra efter det första felet         |
| `npm kör test:server`                                           | Kör testsviten för servern.                                                         |
| `Npm kör e2e`                                                   | Kör Cypress slut för att avsluta tester.                                            |
| `Npm kör ren`                                                   | Avinstallerar alla beroenden och rensar upp cacher.                                 |

## Felsökning

### Problem med att installera rekommenderade förutsättningar

Vi utvecklar regelbundet på de senaste eller mest populära operativsystem som macOS 10.15 eller senare, Ubuntu 18.04 eller senare och Windows 10 (med WSL2).

Det rekommenderas att du undersöker ditt specifika problem på resurser som Google, Stack Overflow och Stack Exchange. Det finns en god chans att någon har ställts inför samma problem och det finns redan ett svar på din specifika fråga.

Om du är på ett annat operativsystem och/eller fortfarande stöter på problem, se [få hjälp](#getting-help).

> [!VARNING]
> 
> Undvik att skapa GitHub-problem för nödvändiga problem. De ligger utanför detta projekts räckvidd.

### Problem med användargränssnittet, teckensnitt, byggfel etc.

Om du stöter på problem med användargränssnittet, typsnitt eller se byggfel en rensning kan vara användbart:

```console
npm kör ren
npm ci
npm run seed
npm run utveckla
```

ELLER

Använd genvägen

```
Npm kör rena-och-utveckla
```

Om du fortsätter att möta problem med bygget, städa upp arbetsytan rekommenderas.

Använd `git clean` i interativt läge:

```
git ren -ifdX
```

<details>
   <summary>
      Hur man rensar git ospårade filer (skärmdump)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Hur man rensar git ospårade filer" />
</details>

### Problem med API, inloggning, Challenge-inlämningar etc.

Om du inte kan logga in, och istället ser du en banner med ett felmeddelande som det kommer att rapporteras till freeCodeCamp, dubbelkolla att din lokala port `3000` inte används av ett annat program.

**På Linux / macOS / WSL på Windows - Från Terminal:**

```console
netstat -ab <unk> grep "3000"

tcp4 0 0.0.0:3000 DESKTOP LISTEN
```

**På Windows - Från förhöjd PowerShell:**

```powershell
netstat -ab <unk> Välj-String "3000"

TCP 0.0.0:3000 DESKTOP LISTENING
```

### Problem med att installera beroenden

Om du får fel när du installerar beroenden, se till att du inte befinner dig i ett begränsat nätverk eller att dina brandväggsinställningar inte hindrar dig från att komma åt resurser.

Första gången installationen kan ta en stund beroende på din nätverksbandbredd. Ha tålamod, och om du fortfarande sitter fast kom vi om med GitPod istället för en offline-installation.

## Få hjälp

Om du har fastnat och behöver hjälp, låt oss veta genom att fråga i kategorin ['Bidragsgivare' på vårt forum](https://forum.freecodecamp.org/c/contributors) eller i chattrummet [Bidragsgivarna](https://gitter.im/FreeCodeCamp/Contributors) på Gitter.

Det kan finnas ett fel i din webbläsares konsol eller i Bash / Terminal / Kommandorad som hjälper till att identifiera problemet. Ge detta felmeddelande i din problembeskrivning så att andra lättare kan identifiera problemet och hjälpa dig att hitta en lösning.
