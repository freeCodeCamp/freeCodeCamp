# Folosind Șabloane de Răspuns

Acestea sunt câteva dintre șabloanele standard de răspuns pe care le puteți folosi în timp ce revizuiți cererile pull și problemele de testare.

> Poți să creezi propria ta caracteristică folosind funcția GitHub's [**Răspunsuri salvate**](https://github.com/settings/replies/) sau să le folosești pe cele de mai jos.

### Vă mulţumim

```markdown
Vă mulțumim pentru contribuția la pagină! 👍
Suntem fericiți să acceptăm aceste schimbări și să așteptăm cu nerăbdare contribuțiile viitoare. 🎉
```

### Vă mulţumesc şi felicitări

> Mulţumesc şi încurajează contribuitorii pentru prima dată.

```markdown
Salut @nume utilizator. Felicitări pentru prima cerere de tragere (PR)! 🎉

Îți mulțumim pentru contribuția la pagină! 👍
Suntem fericiți să acceptăm aceste schimbări și să așteptăm cu nerăbdare contribuțiile viitoare. 📝
```

### Eroare de construcție

```markdown
Hei @username

Ne-ar plăcea să putem îmbina modificările, dar se pare că există o eroare cu Travis CI construit. ⚠️

Odată ce rezolvați aceste probleme, vom putea să vă revizuim PR și să îl îmbinăm. 😊

---

> Simte liber să faci referire la [Ghidul de stil pentru scrierea articolelor](https://github. om/freeCodeCamp/freeCodeCamp#article-title) pentru acest repo în ceea ce priveşte formatarea corectă a unui articol, astfel încât Travis CI să treacă de parcurs. ✅
>
> De asemenea, este bine ca tu să scrii o scurtă descriere a modificărilor tale atunci când creezi un PR. 📝
```

### Sincronizare furcă

> Când PR nu este la curent cu ramura `master`.

``````markdown
Hei @username

Ne-ar plăcea să putem îmbina modificările, dar se pare că există o eroare cu Travis CI construit. ⚠️

``bash
Eroare: ENOTDIR: nu este un director, deschide 'src/pages/java/data-abstraction/index.md'
``````

Această eroare nu a fost cauzată de fișierul dvs., dar a fost o eroare veche cauzată de fuzionarea codului defectuos la ramura `principală`. De atunci a fost rezolvată.

Pentru a trece de clădire, va trebui să sincronizați ultimele modificări din ramura `master` a repo-ului `freeCodeCamp/freeCodeCamp`.

Folosind linia de comandă, poți face asta în trei pași simpli:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

Dacă folosiți un GUI, puteți pur și simplu `adăuga o nouă telecomandă...` și folosiți link-ul `git://github.com/freeCodeCamp/freeCodeCamp.git` de mai sus.

Odată ce sincronizezi furculița și treci prin construcție, vom putea să îți revizuim PR și să îl îmbinăm. 😊

---

> Simte-te liber să referi la articolul [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/) pe GitHub pentru mai multe detalii despre cum să îți păstrezi furculița actualizată cu depozitul din amonte. 🔄
> 
> De asemenea, este o bună practică pe GitHub să scrie o scurtă descriere a modificărilor dumneavoastră atunci când creați un PR. 📝
``````

### Îmbinare conflicte

> Când PR are conflicte de îmbinare care trebuie rezolvate.1

```markdown
Hei @username

Ne-ar plăcea să putem îmbina modificările dar se pare că ai unele conflicte de îmbinare. ⚠️

Odată ce ai rezolvat aceste conflicte, vom putea să îți revizuim PR și să îl îmbinăm. 😊

---

> Dacă nu ești familiarizat cu procesul de îmbinare, Nu ezitați să priviți peste ghidul GitHub pe ["Rezolvarea unui conflict de îmbinări"](https://help. isuggest.com/articles/resolving-a-merge-conflict-on-github/). 🔍
>
> De asemenea, este bine să scrii o scurtă descriere a modificărilor tale atunci când creezi un PR. 📝
``````
1 Dacă un prim contribuitor are un conflict de fuzionare, agenții de întreținere vor rezolva conflictul pentru ei.

### Duplicate

> Când PR este repetitiv sau duplicat.

```markdown
Hei @username

Se pare că modificări similare au fost deja acceptate mai devreme pentru acest articol pe care îl editați, îmi pare rău pentru asta. 😓

Dacă simți că ai mai multe de adăugat, nu ezita să deschizi un nou PR.

Mulțumesc din nou! 😊

---

> Dacă ai întrebări, nu ezita să ne contactezi prin [Gitter](https://gitter.im/FreeCodeCamp/Contributors) sau comentând mai jos. 💬
```

### Închidere cereri pull nevalide

> Când PR nu este valid.

```markdown
Hei @username

Nu ai adăugat nici un conținut, vom închide acest RP și îl vom marca ca fiind `invalid`. 😓

Simte-te liber să deschizi un alt PR! 👍
```