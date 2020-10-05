# Usare I Modelli Di Risposta

Questi sono alcuni dei modelli di risposta standard che puoi utilizzare durante la revisione delle richieste di pull e dei problemi di triaging.

> Puoi crearti con la funzionalità integrata di GitHub [**Risposte salvate**](https://github.com/settings/replies/) o utilizzare quelle qui sotto.

### Grazie

```markdown
Grazie per il tuo contributo alla pagina! 👍
Siamo felici di accettare questi cambiamenti e aspettiamo con ansia i contributi futuri. 🎉
```

### Grazie e complimenti

> Per aver ringraziato e incoraggiato i primi contributori.

```markdown
Ciao @username. Complimenti per la tua prima pull request (PR)! 🎉

Grazie per il tuo contributo alla pagina! 👍
Siamo felici di accettare questi cambiamenti e aspettiamo con ansia i contributi futuri. 📝
```

### Errore Di Generazione

```markdown
Ehi @username

Ci piacerebbe essere in grado di unire le tue modifiche, ma sembra che ci sia un errore con la build Travis CI. ⚠️

Una volta risolti questi problemi, saremo in grado di rivedere la tua PR e unirla. 😊

---

> Sentiti libero di fare riferimento alla [Guida stile per scrivere articoli](https://github. om/freeCodeCamp/freeCodeCamp#article-title) per questo repo sulla formattazione di un articolo correttamente così il tuo Travis CI build passa. ✅
>
> Inoltre, è buona pratica su GitHub scrivere una breve descrizione dei cambiamenti durante la creazione di una PR. 📝
```

### Sincronizzazione Fork

> Quando PR non è aggiornato con la filiale `master`.

``````markdown
Ehi @username

Ci piacerebbe essere in grado di unire le tue modifiche, ma sembra che ci sia un errore con la build Travis CI. ⚠️

```bash
Errore: ENOTDIR: non una directory, open 'src/pages/java/data-abstraction/index.md'
``````

Questo particolare errore non è stato causato dal tuo file, ma è stato un vecchio errore causato dalla fusione del codice difettoso nel ramo `master`. Da allora è stata risolta.

Per passare la generazione, dovrai sincronizzare le ultime modifiche dal ramo `master` del repo `freeCodeCamp/freeCodeCamp`.

Utilizzando la riga di comando, puoi farlo in tre semplici passaggi:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

Se stai usando una GUI, puoi semplicemente `Aggiungi un nuovo remoto...` e utilizzare il link `git://github.com/freeCodeCamp/freeCodeCamp.git` dall'alto.

Una volta che sincronizzi il fork e passerai la build, saremo in grado di rivedere la tua PR e unirla. 😊

---

> Sentiti libero di fare riferimento all'articolo [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/) su GitHub per avere maggiori informazioni su come mantenere il tuo fork aggiornato con il repository a monte. 🔄
> 
> Inoltre, è buona pratica su GitHub scrivere una breve descrizione dei cambiamenti durante la creazione di un PR. 📝
``````

### Unisci i conflitti

> Quando PR ha conflitti di fusione che devono essere risolti.1

```markdown
Hey @username

Ci piacerebbe essere in grado di unire i tuoi cambiamenti, ma sembra che tu abbia alcuni conflitti di fusione.

⚠️

Una volta risolti questi conflitti, saremo in grado di rivedere la tua PR e unirla. 😊

---

> Se non hai familiarità con il processo di fusione, non esitate a guardare la guida di GitHub su ["Risolvere un conflitto di fusione"](https://help. ithub.com/articles/resolving-a-merge-conflict-on-github/). 🔍
>
> Inoltre, è buona pratica su GitHub scrivere una breve descrizione dei cambiamenti durante la creazione di una PR. 📝
``````
1 Se un primo contributore di tempo ha un conflitto di fusione, i manutentori risolveranno il conflitto per loro.

### Duplicate

> Quando PR è ripetitivo o un duplicato.

```markdown
Ehi @username

Sembra che modifiche simili siano già state accettate prima per questo articolo che stai modificando, mi dispiace per questo. 😓

Se senti di avere più da aggiungere, sentiti libero di aprire un nuovo PR.

Grazie ancora! 😊

---

> Se hai domande, sentiti libero di contattarti attraverso [Gitter](https://gitter.im/FreeCodeCamp/Contributors) o commentando qui sotto. 💬
```

### Chiudere richieste pull non valide

> Quando PR non è valido.

```markdown
Hey @username

Non hai aggiunto nessun contenuto, chiuderemo questa PR e contrassegneremo come `non valido`. 😓

Sentitevi liberi di aprire un'altra PR però! 👍
```