# Hur man öppnar en Pull Request (PR)

En pull-förfrågan gör att du kan skicka ändringar från din fork på GitHub till freeCodeCamp.orgs huvudförråd. När du är klar med att göra ändringar i koden, eller kodning utmaningar bör du följa dessa riktlinjer för att skicka en PR.

## Förbered en bra PR-titel

Vi rekommenderar att du använder [konventionell titel och meddelanden](https://www.conventionalcommits.org/) för incheckningar och pull-begäran. Konventionen har följande format:

> `<type>([valfri omfattning]): <description>`
> 
> Till exempel:
> 
> `fix(learn): tester för gör...while loop utmaning`

När du öppnar en Pull Request(PR) kan du använda nedanstående för att bestämma typ, omfattning (valfritt) och beskrivning.

**Typ:**

| Typ      | När du ska välja                                                                        |
|:-------- |:--------------------------------------------------------------------------------------- |
| åtgärda  | Ändrad eller uppdaterad/förbättrad funktionalitet, tester, verbiage av en lektion, etc. |
| Bedrift  | Endast om du lägger till ny funktionalitet, tester, etc.                                |
| syssla   | Ändringar som inte är relaterade till kod, tester eller verbage av en lektion.          |
| dokument | Ändringar i `/docs` -katalogen eller de bidragande riktlinjerna, etc.                   |

**Omfattning:**

Du kan välja ett område från [denna lista över etiketter](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Beskrivning:**

Håll det kort (mindre än 30 tecken) och enkelt, du kan lägga till mer information i PR-beskrivningsrutan och kommentarer.

Några exempel på bra PRs titlar skulle vara:

- `fix(a11y): förbättrad kontrast i sökfältet`
- `funktion: lägga till fler tester till html och CSS utmaningar`
- `fix(api,client): förhindra CORS-fel på formulärinlämning`
- `docs(i18n): Kinesisk översättning av lokala inställningar`

## Föreslå en Pull-förfrågan

1. När redigeringarna har gjorts kommer du att bli ombedd att skapa en pull-förfrågan på din gaffels GitHub-sida.

   ![Bild - Jämför pull-förfrågan på GitHub](./images/github/compare-pull-request-prompt.png)

2. Som standard bör alla pull-förfrågningar vara emot freeCodeCamp-huvudrepo, `master` branch.

   Se till att din Base Fork är inställd på freeCodeCamp/freeCodeCamp när du höjer en Pull Request.

   ![Image - Jämföra gafflar när du gör en pull-förfrågan](./images/github/comparing-forks-for-pull-request.png)

3. Skicka in pull-förfrågan från din filial till freeCodeCamps `master` branch.

4. I din PR ingår en mer detaljerad sammanfattning av de ändringar du gjort och varför.

   - Du kommer att presenteras med en pull-request-mall. Detta är en checklista som du borde ha följt innan du öppnar pull-förfrågan.

   - Fyll i detaljerna som du tycker passar. Denna information kommer att granskas och granskarna kommer att avgöra om din pull-förfrågan godtas.

   - Om PR är tänkt att ta itu med en befintlig GitHub-fråga då, i slutet av din PR: s beskrivande kropp, använd nyckelordet _Stänger_ med ärendenumret till [stänger automatiskt det problemet om PR accepteras och slås ihop](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Exempel: `Stänger #123` stänger ärendet 123

5. Ange om du har testat på en lokal kopia av webbplatsen eller inte.

   Detta är mycket viktigt när du gör ändringar som inte bara redigerar textinnehåll som dokumentation eller en utmaningsbeskrivning. Exempel på ändringar som behöver lokala tester inkluderar JavaScript, CSS, eller HTML som kan ändra funktionalitet eller layout på en sida.

## Feedback på pull-förfrågningar

> Grattis! :tada: på att göra en PR och tack så mycket för att du har tagit dig tid att bidra.

Våra moderatorer kommer nu att ta en titt och lämna dig feedback. Ha tålamod med medmoderatorerna och respektera deras tid. Alla pull-förfrågningar granskas i sinom tid.

Om du behöver hjälp med att diskutera i [bidragsgivarens chattrum](https://gitter.im/FreeCodeCamp/Contributors), hjälper vi dig mer än gärna.

> [!TIP] Om du ska bidra med fler pull-förfrågningar, vi rekommenderar att du läser [gör ändringar och synkroniserar](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) riktlinjer för att undvika att behöva ta bort din gaffel.

## Konflikter på en pull-förfrågan

Konflikter kan uppstå eftersom många bidragsgivare arbetar på arkivet, och förändringar kan bryta din PR som väntar på en granskning och sammanfogning.

Oftare än inte du kanske inte behöver en rebas, eftersom vi squash alla åtaganden, Men om en rebase begärs här är vad du bör göra.

### För vanliga buggfixar och funktioner

När du arbetar med vanliga buggar och funktioner på vår utvecklingsenhet `master`kan du göra en enkel rebase:

1. Bygg om din lokala kopia:

   ```console
   git kassan <pr-branch>
   git pull --rebase upstream master
   ```

2. Lös eventuella konflikter och lägg till/redigera incheckningar

   ```console
   # Antingen
   git add .
   git commit -m "syssla: lösa konflikter"

   # Eller
   git add .
   git commit --ändra --no-edit
   ```

3. Tryck tillbaka dina ändringar till PR

   ```console
   git push --force ursprung <pr-branch>
   ```

### För kommande läroplan och funktioner

När du arbetar med funktioner för vår kommande läroplan `nästa *` grenar, har du göra ett körsbärsplock:

1. Se till att din uppströms kommer i synk med din lokal:

   ```console
   git kassan master
   git fetch --all --prune
   git kassan next-python-projekt
   git reset --hard upstream/next-python-projekt
   ```

2. Ta backup

   a. Ta antingen bort din lokala filial efter att ha tagit en säkerhetskopia (om du fortfarande har den lokalt):

      ```console
      git checkout <pr-branch-name>

      # exempel:
      # git checkout feat/add-numpy-video-question

      git checkout -b <backup-branch-name>

      # exempel:
      # git checkout -b backup-feat/add-numpy-video-question

      git branch -D <pr-branch-name>
      ```

   b. Eller bara en säkerhetskopia av din pr gren (om du inte har det lokalt):

      ```console
      git kassan -b <backup-branch-name> origin/<pr-branch-name>

      # exempel:
      # git kassan -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
      ```

4. Börja med en ren skiffer:

   ```console
   git kassan -b <pr-branch-name> nästa python-projekt
   git cherry-pick <commit-hash>
   ```

5. Lös eventuella konflikter, och rensa, installera köra tester

   ```console
   npm run clean

   npm ci
   npm run test:curriculum --superblock=<superblock-name>

   # exempel:

   # npm run test:curriculum --superblock=python-for-everyone

   ```

6. Om allt ser bra ut tillbaka till PR

   ```console
   git push --force ursprung <pr-branch-name>
   ```
