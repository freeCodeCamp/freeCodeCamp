# Použití šablon odpovědí

Toto jsou některé standardní šablony odpovědí, které můžete použít při přezkoumávání požadavků na natažení a pokusů.

> Můžete si vytvořit vlastní s vestavěnou funkcí [**Uložené odpovědi**](https://github.com/settings/replies/) nebo použít níže uvedené funkce.

### Děkujeme

```markdown
Děkujeme za váš příspěvek na stránku! 👍
Jsme rádi, že přijmeme tyto změny a těšíme se na budoucí příspěvky. 🎉
```

### Děkuji vám a Gratulacím

> Za poděkování a povzbuzení přispěvatelů na první místo.

```markdown
Ahoj @username. Gratulujeme k prvnímu požadavku na natažení (PR)! 🎉

Děkujeme vám za váš příspěvek na stránku! 👍
Jsme rádi, že přijmeme tyto změny a těšíme se na budoucí příspěvky. 📝
```

### Chyba sestavení

```markdown
Ahoj @username

Rádi bychom byli schopni vaše změny sloučit, ale zdá se, že došlo k chybě při vytváření Travis CI build. ⚠️

Jakmile tyto problémy vyřešíte, budeme moci zkontrolovat váš PR a sloučit. 😊

---

> Neváhejte odkazovat na [Style Průvodce psaním článků](https://github. om/freeCodeCamp/freeCodeCamp#article-title) pro tento repo při správném formátování článku, takže vaše Travis CI build passes. ✅
>
> Také je to dobrý postup na GitHub psát stručný popis vašich změn při vytváření PR. 📝
```

### Synchronizace fork

> Když PR není aktualizován na `master` větvi.

``````markdown
Ahoj @username

Rádi bychom byli schopni vaše změny sloučit, ale zdá se, že došlo k chybě při vytváření Travis CI build. ⚠️

```bash
Chyba: ENOTDIR: není adresář, otevřít 'src/pages/java/data-abstraction/index.md'
``````

Tato konkrétní chyba nebyla způsobena vaším souborem, ale byla starou chybou způsobenou sloučením chybného kódu s větví `master` Od té doby byla vyřešena.

Chcete-li předat sestavení, budete muset synchronizovat nejnovější změny z repou `master` větve `freeCodeCamp/freeCodeCamp`.

Pomocí příkazové řádky to můžeš udělat ve třech jednoduchých krocích:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream
```

Pokud používáte GUI, můžete jednoduše `přidat novou vzdálenou...` a použít odkaz `git://github.com/freeCodeCamp/freeCodeCamp.git` shora.

Jakmile synchronizujete rozštěpení a předejdete sestavení, budeme moci zkontrolovat Váš PR a sloučit. 😊

---

> Neváhejte odkazovat na [synchronizaci článku Fork](https://help.github.com/articles/syncing-a-fork/) na GitHub pro více informací o tom, jak udržet rozštěp s předním repozitářem. 🔄
> 
> Také je to dobrá praxe na GitHubu psát stručný popis vašich změn při vytváření PR. 📝
``````

### Sloučit konflikty

> Pokud PR spojuje konflikty, které je třeba vyřešit..1

```markdown
Ahoj @username

Rádi bychom byli schopni sloučit vaše změny, ale zdá se, že máte nějaké fúzní konflikty. ⚠️

Jakmile tyto konflikty vyřešíte, budeme moci zkontrolovat Váš PR a sloučit. 😊

---

> Pokud nejste obeznámeni s procesem slučování, Neváhejte a podívejte se na GitHubův průvodce ["Vyřešení merge conflict"](https://help. ithub.com/articles/resolving-a-merge-conflict-on-github/). 🔍
>
> Také je dobré na GitHub napsat stručný popis vašich změn při vytváření PR. 📝
``````
1 Pokud má první přispěvatel fúzní konflikt, udržovatelé konflikt vyřeší.

### Duplicate

> Pokud je PR opakovaná nebo duplicitní.

```markdown
Hey @username

Zdá se, že podobné změny již byly přijaty dříve pro tento článek, který upravujete, je to líto. 😓

Pokud máte pocit, že jste přidali více, neváhejte otevřít nové PR.

Znovu děkuji! 😊

---

> Pokud máte jakékoliv dotazy, neváhejte se kontaktovat prostřednictvím [Gitter](https://gitter.im/FreeCodeCamp/Contributors) nebo níže uvedeným komentářem. 💬
```

### Zavření neplatných požadavků na natažení

> Když je PR neplatný.

```markdown
Ahoj @username

Nepřidali jste žádný obsah, zavříme tento PR a označíme jej jako `neplatné`. 😓

Nebojte se však otevřít další PR! 👍
```