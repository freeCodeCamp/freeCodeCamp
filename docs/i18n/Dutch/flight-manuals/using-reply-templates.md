# Antwoord sjablonen gebruiken

Dit zijn enkele van de standaard antwoordsjablonen die u kunt gebruiken tijdens het bekijken van pull requests en triaging problemen.

> U kunt uw eigen antwoorden maken met GitHub's ingebouwde [**Opgeslagen antwoorden**](https://github.com/settings/replies/) functie of gebruik de onderstaande antwoorden.

### Dank u wel

```markdown
Bedankt voor je bijdrage aan de pagina! 👍
We accepteren deze wijzigingen graag en kijken uit naar toekomstige bijdragen. 🎉
```

### Bedankt en gefeliciteerd

> Voor het bedanken en aanmoedigen van de eerste bijdragers.

```markdown
Hallo @username. Gefeliciteerd met je eerste pull request (PR)! 🎉

Bedankt voor je bijdrage aan de pagina! 👍
We accepteren deze wijzigingen graag en kijken uit naar toekomstige bijdragen. 📝
```

### Bouw Fout

```markdown
Hey @username

We zouden graag je wijzigingen kunnen samenvoegen, maar het lijkt erop dat er een fout is met de Travis CI build. ⚠️

Zodra je deze problemen hebt opgelost, kunnen we je PR beoordelen en samenvoegen. 😊

---

> Voel je vrij om te verwijzen naar de [Stijlgids voor het schrijven van artikelen](https://github. om/freeCodeCamp/freeCodeCamp#artikeltitel) voor deze repo bij het correct opmaken van een artikel, zodat uw Travis CI passen bouwen. ✅
>
> Ook is het een goede praktijk op GitHub om een korte beschrijving van jouw wijzigingen te schrijven bij het maken van een PR. 📝
```

### Synchroniseren van Fork

> Wanneer PR niet up-to-date is met de `master` branch.

``````markdown
Hey @username

We zouden graag je wijzigingen kunnen samenvoegen, maar het lijkt erop dat er een fout is met de Travis CI build. ⚠️

```bash
Error: ENOTDIR: geen directory, open 'src/pages/java/data-abstraction/index.md'
``````

Deze specifieke fout werd niet veroorzaakt door je bestand maar was een oude fout veroorzaakt door het samenvoegen van onjuiste code naar het `master` branch. Sindsdien is het opgelost.

Om het bouwwerk te passeren, moet u de laatste wijzigingen synchroniseren van de `master` tak van het `freeCodeCamp/freeCodeCamp` repo.

Met behulp van de opdrachtlijn kunt u dit doen in drie eenvoudige stappen:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

Als u een GUI gebruikt, kunt u gewoon `een nieuwe afstandsbediening toevoegen...` en de link `git://github.com/freeCodeCamp/freeCodeCamp.git` van hierboven gebruiken.

Zodra je je vork synchroniseert en de versie passeert, kunnen we je PR beoordelen en samenvoegen. 😊

---

> Refereer naar het [Synchroniseren van een Fork](https://help.github.com/articles/syncing-a-fork/) artikel op GitHub voor meer inzicht in hoe je je fork up-to-date kunt houden met de upstream-repository. 🔄
> 
> Het is ook een goede praktijk op GitHub om een korte beschrijving van jouw wijzigingen te schrijven bij het maken van een PR. 📝
``````

### Conflicten samenvoegen

> Als PR conflicten heeft die moeten worden opgelost.1

```markdown
Hey @username

We zouden het leuk vinden om uw wijzigingen samen te voegen, maar het lijkt erop dat u enkele samenvoegconflicten heeft.

⚠️

Zodra je deze conflicten hebt opgelost, kunnen we je PR beoordelen en samenvoegen. 😊

---

> Als je niet bekend bent met het proces van samenvoegconflicten voel je vrij om te kijken over de GitHub's gids over ["Een samenvoegconflict oplossen"](https://help. ithub.com/articles/resolving-a-merge-conflict-on-github/). 🔍
>
> Het is ook een goede praktijk op GitHub om een korte beschrijving van jouw wijzigingen te schrijven bij het maken van een PR. 📝
``````
1 Als een eerste bijdrager een samenvoegconflict heeft, zullen onderhouders het conflict voor hen oplossen.

### Duplicate

> Wanneer PR repetitief of een duplicaat is.

```markdown
Hey @username

Het lijkt erop dat vergelijkbare wijzigingen al zijn geaccepteerd voor dit artikel dat je aan het bewerken bent, sorry daarvoor. 😓

Als je denkt dat je meer toe te voegen hebt, open dan gerust een nieuwe PR.

Nogmaals bedankt! 😊

---

> Als je vragen hebt, neem dan contact op met [Gitter](https://gitter.im/FreeCodeCamp/Contributors) of door hieronder commentaar te geven. 💬
```

### Sluiten ongeldige pull requests

> Wanneer PR ongeldig is.

```markdown
Hey @username

Je hebt nog geen inhoud toegevoegd, we sluiten deze PR en markeren als 'ongeldig'. 😓

Voel je vrij om een andere PR te openen! 👍
```