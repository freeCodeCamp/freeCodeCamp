# Använda svarsmallar

Detta är några av de vanliga svarsmallar som du kan använda när du granskar pull-förfrågningar och triaging problem.

> Du kan göra din egen med GitHub's inbyggda [**Sparade svar**](https://github.com/settings/replies/) funktionen eller använda dem nedan.

### Tack så mycket

```markdown
Tack för ditt bidrag till sidan! 👍
Vi är glada att acceptera dessa ändringar och ser fram emot framtida bidrag. 🎉
```

### Tack och grattis

> För att tacka och uppmuntra första gången bidragsgivare.

```markdown
Hej @användarnamn. Grattis på din första pull-förfrågan (PR)! 🎉

Tack för ditt bidrag till sidan! 👍
Vi är glada att acceptera dessa ändringar och ser fram emot framtida bidrag. 📝
```

### Bygg fel

```markdown
Hej @username

Vi skulle älska att kunna slå ihop dina ändringar, men det ser ut som det finns ett fel med Travis CI build. ⚠️

När du löser dessa problem kommer vi att kunna granska din PR och slå samman den. 😊

---

> Referera gärna [Stilguide för att skriva artiklar] (https://github. om/freeCodeCamp/freeCodeCamp#article-title) för denna repo vid formatering av en artikel korrekt så att din Travis CI bygga passerar. ✅
>
> Det är också bra praxis på GitHub att skriva en kort beskrivning av dina ändringar när du skapar en PR. 📝
```

### Synkroniserar gaffel

> När PR inte är uppdaterad med `master` branch.

``````markdown
Hej @username

Vi skulle älska att kunna slå ihop dina ändringar, men det ser ut som det finns ett fel med Travis CI build. ⚠️

```bash
Fel: ENOTDIR: inte en katalog, öppna 'src/pages/java/data-abstraction/index.md'
``````

Detta specifika fel orsakades inte av din fil utan var ett gammalt fel som orsakades av att felaktig kod slogs samman till `huvudkontorets` gren. Den har sedan dess lösts.

För att klara bygget, måste du synkronisera de senaste ändringarna från `master` grenen `freeCodeCamp/freeCodeCamp` repo.

Med hjälp av kommandoraden kan du göra detta i tre enkla steg:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git hämta uppströms

git pull upstream master
```

Om du använder ett GUI, kan du helt enkelt `lägga till en ny fjärrkontroll...` och använda länken `git://github.com/freeCodeCamp/freeCodeCamp.git` från ovan.

När du synkar din gaffel och passerar bygget, Vi kommer att kunna granska din PR och slå samman den. 😊

---

> Känn dig fri att referera till [Synkronisera en Fork](https://help.github.com/articles/syncing-a-fork/) artikel på GitHub för mer insikt om hur du kan hålla din fork uppdaterad med uppströmsarkivet. 🔄
> 
> Det är också bra praxis på GitHub att skriva en kort beskrivning av dina ändringar när du skapar en PR. 📝
``````

### Slå samman konflikter

> När PR har slagit samman konflikter som måste lösas.1

```markdown
Hej @username

Vi skulle älska att kunna slå ihop dina ändringar men det ser ut som om du har några sammanfoga konflikter. ⚠️

När du löser dessa konflikter kommer vi att kunna granska din PR och slå samman den. 😊

---

> Om du inte är bekant med sammanslagningskonflikten, titta gärna över GitHub's guide på ["Lösa en sammanslagning konflikt"](https://help ithub.com/articles/resolving-a-merge-conflict-on-github/). 🔍
>
> Det är också bra praxis på GitHub att skriva en kort beskrivning av dina ändringar när du skapar en PR. 📝
``````
1 Om en första bidragsgivare har en sammanslagningskonflikt kommer utvecklare att lösa konflikten för dem.

### Duplicate

> När PR upprepas eller dubbleras.

```markdown
Hej @username

Det verkar som om liknande ändringar redan har accepterats tidigare för den här artikeln du redigerar, ledsen för det. 😓

Om du känner att du har mer att lägga till, är du välkommen att öppna upp en ny PR.

Tack igen! 😊

---

> Om du har några frågor, tveka inte att nå ut genom [Gitter](https://gitter.im/FreeCodeCamp/Contributors) eller genom att kommentera nedan. 💬
```

### Stänger ogiltiga pull-förfrågningar

> När PR är ogiltig.

```markdown
Hej @username

Du har inte lagt till något innehåll, Vi kommer att stänga denna PR och markera den som `invalid`. 😓

Öppna en annan PR ändå! 👍
```