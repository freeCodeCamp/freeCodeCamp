# Käyttämällä Vastausmalleja

Nämä ovat joitakin standardi vastausmalleja, joita voit käyttää arvioitaessa pull-pyyntöjä ja triaging kysymyksiä.

> Voit tehdä oman GitHubin sisäänrakennetulla [**Tallennetulla vastauksella**](https://github.com/settings/replies/) ominaisuudella tai käyttää alla olevia ominaisuuksia.

### Kiitos sinulle

```markdown
Kiitos teidän panoksestanne tälle sivulle! 👍
Hyväksymme mielellämme nämä muutokset ja odotamme innolla tulevia maksuja. 🎉
```

### Kiitos ja onnittelut

> Kiitokset ja rohkaisevat ensikertalaisia osallistujia.

```markdown
Hei @username Onnea ensimmäiseen pull-pyyntöösi (PR)! 🎉

Kiitos panoksestasi sivulle! 👍
Hyväksymme mielellämme nämä muutokset ja odotamme innolla tulevia maksuja. 📝
```

### Virhe Koosta

```markdown
Hei @username

Haluaisimme saada muutokset yhdistettyä, mutta näyttää siltä, että Travis CI:n rakentamisessa on virhe. ⚠️

Kun ratkaiset nämä ongelmat, voimme tarkistaa PR-palvelusi ja yhdistää sen. 😊

---

> Voit vapaasti viitata [Style guide for writing articles](https://github. om/freeCodeCamp/freeCodeCamp#article-title) tälle repolle artikkelin muotoillessa oikein, joten Travis CI build passes. :white_heavy_check·:
>
> Myös GitHubissa on hyvä käytäntö kirjoittaa lyhyt kuvaus muutoksistasi PR:n luomisessa. 📝
```

### Synkronoidaan Forkia

> Kun PR ei ole ajan tasalla `master` -haaran kanssa.

``````markdown
Hei @username

Haluaisimme saada muutokset yhdistettyä, mutta näyttää siltä, että Travis CI:n rakentamisessa on virhe. ⚠️

```bash
Virhe: ENOTDIR: ei hakemisto, avaa 'src/pages/java/data-abstraction/index.md'
``````

Tämä virhe ei johtunut tiedostostasi, vaan se oli vanha virhe, jonka aiheutti viallisen koodin yhdistäminen `master` -haaraan. Se on sittemmin ratkaistu.

Jotta voit siirtää rakennuksen, sinun täytyy synkronoida viimeisimmät muutokset `freeCodeCamp/freeCodeCamp` repo-sovelluksen `master` -haarasta.

Komentorivin avulla voit tehdä tämän kolmella helpolla vaiheella:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

Jos käytät käyttöliittymää, voit yksinkertaisesti `Lisää uusi kaukosäädin...` ja käytä linkkiä `git://github.com/freeCodeCamp/freeCodeCamp.git` ylhäältä.

Kun synkronoit haarukkasi ja läpäisyt rakennuksen, Pystymme arvioimaan PR:äsi ja yhdistämään sen. 😊

---

> Voit vapaasti viitata [Synkronoida haarukan](https://help.github.com/articles/syncing-a-fork/) artikkelin GitHubissa saadaksesi lisätietoa siitä, miten haarukkisi pidetään ajan tasalla yläjuoksuarkiston kanssa. 🔄
> 
> GitHubissa on myös hyvä käytäntö kirjoittaa lyhyt kuvaus muutoksistasi PR:n luomisessa. 📝
``````

### Konfliktien yhdistäminen

> Kun PR:ssä on yhdistetty ristiriitoja, jotka on ratkaistava.1

````markdown
Hei @username

Haluaisimme yhdistää muutoksesi, mutta näyttää siltä, että sinulla on joitakin yhdistämisristiriitoja. ⚠️

Kun ratkaiset nämä ristiriidat, pystymme tarkistamaan PR-palvelusi ja yhdistämään sen. 😊

---

> Jos et tunne yhdistämisprosessia, voit vapaasti katsoa GitHubin oppaan ["Yhdistää konfliktin ratkaiseminen"](https://helpp. ithub.com/articles/resolving-a-merge-conflict-on-github/). 🔍
>
> Myös GitHubissa on hyvä käytäntö kirjoittaa lyhyt kuvaus muutoksistasi PR:n luomisessa. 📝
``````
1 Jos ensimmäisen kerran maksajalla on fuusio-konflikti, ylläpitäjät ratkaisee konfliktin heille.

### Duplicate

> Kun PR-arvo on toistuva tai kaksoiskappale.

```markdown
Hei @username

Näyttää siltä, että vastaavat muutokset on jo hyväksytty aiemmin tässä artikkelissa, jota olet muokkaamassa. 😓

Jos sinulla on enemmän lisättävää, ota rohkeasti käyttöön uusi PR.

Kiitos vielä kerran! 😊

---

> Jos sinulla on kysyttävää, ota rohkeasti yhteyttä [Gitter]kautta [Gitter] (https://gitter.im/FreeCodeCamp/Contributors) tai kommentoimalla alla. 💬
```

### Suljetaan virheellisiä pull-pyyntöjä

> Kun PR on virheellinen.

```markdown
Hei @username

Et ole lisännyt mitään sisältöä, Sulemme tämän PR:n ja merkitsemme sen `virheelliseksi`. :downcast_face_with_hikinen:

Voit kuitenkin avata toisen PR:n! 👍
```