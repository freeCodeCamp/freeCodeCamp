# Bruke svar maler

Dette er noen av standardmalene du kan bruke når du gjennomgår pull forespørsler og diskuterer problemer.

> Du kan lage din egen med GitHub's innebygde [**Lagrede svar**](https://github.com/settings/replies/) eller bruke de nedenfor.

### Tusen takk

```markdown
Takk for ditt bidrag til siden! 👍
We are happy to accept these changes and look forward to future contributions. 🎉
```

### Tusen takk og takk

> For å takke og oppmuntre førstegangs bidragsytere.

```markdown
Hei @brukernavn. Gratulerer med din første trekkforespørsel (PR)! 🎉

Takk for ditt bidrag til siden! 👍
We are happy to accept these changes and look forward to future contributions. 📝
```

### Bygg feil

```markdown
Hei @username

Vi vil gjerne kunne slå sammen dine endringer, men det ser ut som det er en feil med Travis CI-bygget. ⚠️

Når du har løst disse problemene, kan vi gjennomgå PR-en din og slå dem sammen. 😊

---

> Du er velkommen til å referere til [Style guide for å skrive artikler](https://github. om/freeCodeCamp/freeCodeCamp#article-title) for dette repo på formatering av en artikkel riktig slik at din Travis CI bygger passs. 
>
> Dog er det god praksis på GitHub å skrive en kort beskrivelse av dine endringer når du oppretter en PR. 📝
```

### Synkroniserer med Fork

> Hvis PR ikke er oppdatert med `master` grenen.

``````markdown
Hei @username

Vi vil gjerne kunne slå sammen dine endringer, men det ser ut som det er en feil med Travis CI-bygget. ⚠️

```bash
Error: ENOTDIR: ikke en mappe, åpne 'src/pages/java/data-abstraction/index.md'
``````

Denne bestemte feilen ble ikke forårsaket av filen din, men var den gamle feilen som skyldtes sammenslåing av feil kode til `master` grenen. Det har siden vært løst.

For å bestå bygget må du synkronisere de siste endringene fra `master` grenen av `freeCodeCamp` repo.

Med kommandolinjen, kan du gjøre dette med tre enkle trinn:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch oppstrøms

git pull upstream master
```

Hvis du bruker en GUI, kan du rett og slett `Legg til en ny fjernkontroll...` og bruke linken `git://github.com/freeCodeCamp/freeCodeCamp.git` fra over.

Når du har synkronisert gaffelen og send bygget, vil vi være i stand til å gjennomgå PR-en din og flette den. 😊

---

> Føler deg fri til å referere til [synkronisere et Fork](https://help.github.com/articles/syncing-a-fork/) artikkel på GitHub for mer innsikt om hvordan man kan holde gaffel oppdatert med oppstrøms repository. 🔄
> 
> Dessuten er det god praksis på GitHub å skrive en kort beskrivelse av dine endringer når du lager en PR. 📝
``````

### Slå sammen konflikter

> Når PR har sammenslått konflikter som må løses.1

```markdown
Hei @brukernavn

Vi vil gjerne kunne slå sammen dine endringer, men det ser ut som du har noen sammenslåingskonflikter. ⚠️

Når du løser disse konfliktene, vil vi kunne gjennomgå din PR og slå sammen med den. 😊

---

> Hvis du ikke er kjent med den sammenslåtte konfliktprosessen, føler deg fri til å se over GitHub's guide på ["Resolving a merge conflict"](https://help. ithub.com/articles/resolving-a-merge-conflict-on-github/). :magnifying_glass_tilted_venstre:
>
> Videre er det god praksis på GitHub for å skrive en kort beskrivelse av dine endringer når du lager en PR. 📝
``````
1 Hvis en førstegangs bidragsyter har en flettekonflikt vil vedlikeholdere løse konflikten for dem.

### Duplicate

> Når PR er gjentakende eller duplikat.

```markdown
Hei @username

Det ser ut til at lignende endringer allerede er akseptert tidligere for denne artikkelen du redigerer, beklager det. 😓

Hvis du føler at du har mer å legge til, kan du gjerne åpne en ny PR.

Takk igjen! 😊

---

> Hvis du har noen spørsmål, kan du kontakte deg gjennom [Gitter](https://gitter.im/FreeCodeCamp/Contributors) eller ved å kommentere nedenfor. 💬
```

### Om du lukker ugyldige pull forespørsler

> Når PR er ugyldig.

```markdown
Hei @username

Du har ikke lagt til noe innhold, vi vil lukke denne PR, og merke den som `ugyldig`. 😓

Du kan gjerne åpne en annen PR-tanker! 👍
```