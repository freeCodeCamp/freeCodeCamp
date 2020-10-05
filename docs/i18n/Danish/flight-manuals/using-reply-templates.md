# Brug Af Svar Skabeloner

Disse er nogle af de standard svar skabeloner, som du kan bruge, mens du gennemgår pull requests og triaging spørgsmål.

> Du kan selv lave dine egne med GitHubs indbyggede [**Gemte svar**](https://github.com/settings/replies/) -funktion eller bruge dem nedenfor.

### Mange tak

```markdown
Tak for dit bidrag til siden! 👍
Vi accepterer gerne disse ændringer og ser frem til fremtidige bidrag. 🎉
```

### Tak og tillykke

> For at takke og opmuntre førstegangsbidragsydere.

```markdown
Hej @username. Tillykke med din første pull-anmodning (PR)! 🎉

Tak for dit bidrag til siden! 👍
Vi accepterer gerne disse ændringer og ser frem til fremtidige bidrag. 📝
```

### Fejl Ved Bygning

```markdown
Hej @username

Vi vil elske at kunne flette dine ændringer, men det ser ud til, at der er en fejl med Travis CI build. ⚠️

Når du har løst disse problemer, vil vi kunne gennemgå din PR og flette den. 😊

---

> Du er velkommen til at henvise til [Style guide for at skrive artikler](https://github. om/freeCodeCamp/freeCodeCamp#artikeltitel) til dette repo ved at formatere en artikel korrekt så din Travis CI bygger passer. ✅
>
> Det er også god praksis på GitHub at skrive en kort beskrivelse af dine ændringer, når du opretter en PR. 📝
```

### Synkroniserer Gaffel

> Når PR ikke er opdateret med `master` -grenen.

``````markdown
Hej @username

Vi vil elske at kunne flette dine ændringer, men det ser ud til, at der er en fejl med Travis CI build. ⚠️

```bash
Fejl: ENOTDIR: ikke en mappe, åben 'src/pages/java/data-abstraction/index.md'
``````

Denne særlige fejl var ikke forårsaget af din fil, men var en gammel fejl forårsaget af sammenlægning defekt kode til `master` filialen. Det er siden blevet løst.

For at bestå bygningen, skal du synkronisere de seneste ændringer fra `master` gren af `freeCodeCamp/freeCodeCamp` repo.

Ved hjælp af kommandolinjen, kan du gøre dette i tre nemme trin:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

Hvis du bruger en GUI, kan du blot `Tilføj en ny fjernbetjening...` og bruge linket `git://github.com/freeCodeCamp/freeCodeCamp.git` fra oven.

Når du synkroniserer din gaffel og passerer bygningen, Vi vil være i stand til at gennemgå din PR og fusionere den. 😊

---

> Du er velkommen til at henvise til artiklen [Synkronisering af en gaffel](https://help.github.com/articles/syncing-a-fork/) på GitHub for mere indsigt i, hvordan du holder din gaffel opdateret med upstream repository. 🔄
> 
> Det er også god praksis på GitHub at skrive en kort beskrivelse af dine ændringer, når du opretter en PR. 📝
``````

### Sammenfletningskonflikter

> Når PR har sammenfletningskonflikter, der skal løses.1

```markdown
Hey @username

Vi vil elske at kunne flette dine ændringer, men det ser ud til, at du har nogle sammenfletningskonflikter. ⚠️

Når du har løst disse konflikter, vil vi være i stand til at gennemgå din PR og flette den. 😊

---

> Hvis du ikke er bekendt med sammenfletningskonfliktprocessen, er velkommen til at kigge over GitHubs guide på ["Løs en sammenfletningskonflikt"](https://help. ithub.com/articles/resolving-a-merge-conflict-on-github/). 🔍
>
> Det er også god praksis på GitHub at skrive en kort beskrivelse af dine ændringer, når du opretter en PR. 📝
``````
1 Hvis en førstegangsbidragsyder har en fusionskonflikt, vil vedligeholdere løse konflikten for dem.

### Duplicate

> Når PR er repetitiv eller en dublet.

```markdown
Hej @username

Det lader til, at lignende ændringer allerede er blevet accepteret tidligere for denne artikel du redigerer, ked af det. 😓

Hvis du føler, du har mere at tilføje, er du velkommen til at åbne en ny PR.

Tak igen! 😊

---

> Hvis du har spørgsmål, er du velkommen til at kontakte [Gitter](https://gitter.im/FreeCodeCamp/Contributors) eller ved at kommentere nedenfor. 💬
```

### Lukker ugyldige pull anmodninger

> Når PR er ugyldig.

```markdown
Hej @username

Du har ikke tilføjet noget indhold, Vi lukker denne PR og markerer den som 'ugyldig'. 😓

Du er dog velkommen til at åbne en anden PR! 👍
```