# Używanie szablonów odpowiedzi

Są to niektóre ze standardowych szablonów odpowiedzi, które możesz używać podczas przeglądania pull requestów i triaging problemów.

> Możesz zrobić swój własny z wbudowaną funkcją [**Zapisane odpowiedzi**](https://github.com/settings/replies/) lub użyj poniższych odpowiedzi.

### Dziękujemy

```markdown
Dziękujemy za twój wkład na stronę! 👍
Z przyjemnością akceptujemy te zmiany i oczekujemy na przyszłe wkłady. 🎉
```

### Dziękuję i gratuluję

> Za podziękowanie i zachęcanie do udziału po raz pierwszy.

```markdown
Witaj @username. Gratulacje za pierwsze Pull Request (PR)! 🎉

Dziękujemy za twój wkład na stronę! 👍
Z przyjemnością akceptujemy te zmiany i oczekujemy na przyszłe wkłady. 📝
```

### Błąd kompilacji

```markdown
Witaj @username

Chcielibyśmy połączyć Twoje zmiany, ale wygląda na to, że wystąpił błąd z wersją Travis CI. ⚠️

Po rozwiązaniu tych problemów będziemy mogli przejrzeć Twój PR i scalić go. 😊

---

> Odwołaj się do [przewodnika stylu pisania artykułów](https://github. om/freeCodeCamp/freeCodeCamp#article-title) dla tego repozytorium przy prawidłowym formatowaniu artykułu tak, aby Twój Travis CI kompilował przejazdy. ✅
>
> Ponadto na GitHub jest dobrą praktyką pisania krótkiego opisu zmian podczas tworzenia PR. 📝
```

### Synchronizuję Fork

> Kiedy PR nie jest aktualny z gałęzią `główną`.

``````markdown
Witaj @username

Chcielibyśmy połączyć Twoje zmiany, ale wygląda na to, że wystąpił błąd z wersją Travis CI. ⚠️

```bash
Błąd: ENOTDIR: nie katalog, otwórz 'src/pages/java/data-abstraction/index.md'
``````

Ten konkretny błąd nie był spowodowany twoim plikiem, ale był starym błędem spowodowanym przez połączenie wadliwego kodu z gałęzią `master`. Od tego czasu zostało ono rozwiązane.

Aby przejść do kompilacji, będziesz musiał zsynchronizować najnowsze zmiany z `głównej` gałęzi `freeCodeCamp/freeCodeCamp`.

Używając wiersza poleceń, możesz to zrobić w trzech prostych krokach:

```bash
git remote add upstream git://github.com/freeCodeCamp/freeCodeCamp.git

git fetch upstream

git pull upstream master
```

Jeśli używasz GUI, możesz po prostu `dodać nowego pilota...` i użyć linku `git://github.com/freeCodeCamp/freeCodeCamp.git` z góry.

Kiedy zsynchronizujesz fork i przejdziesz do budowy, będziemy mogli przejrzeć Twój PR i go scalić. 😊

---

> Odwołaj się do [Synchronizowania forka](https://help.github.com/articles/syncing-a-fork/) na GitHub, aby uzyskać więcej informacji na temat tego, jak aktualizować fork z repozytorium upstream. 🔄
> 
> Ponadto jest to dobra praktyka na GitHub do pisania krótkiego opisu zmian podczas tworzenia PR. 📝
``````

### Scalanie konfliktów

> Gdy PR łączy konflikty wymagające rozwiązania.1

```markdown
Hey @username

Chcielibyśmy połączyć Twoje zmiany, ale wygląda na to, że masz pewne konflikty scalania.

⚠️

Po rozwiązaniu tych konfliktów będziemy mogli przejrzeć twój PR i scalić go. 😊

---

> Jeśli nie znasz procesu konfliktów scalania, Przeglądaj poradnik GitHub na ["Rozwiązując konflikt scalania"](https://help. ithub.com/articles/resolving-a-merge-flict-on-github/). 🔍
>
> Ponadto na GitHub jest dobrą praktyką do pisania krótkiego opisu zmian podczas tworzenia PR. 📝
``````
1 Jeśli pierwszy współtwórca ma konflikt scalony, opiekunowie rozwiążą dla nich konflikt.

### Duplicate

> Gdy PR jest powtarzalny lub duplikat.

```markdown
Witaj @username

Wygląda na to, że podobne zmiany zostały już wcześniej zaakceptowane dla tego artykułu, który edytujesz, przepraszamy za to. 😓

Jeśli masz więcej do dodania, prosimy o otwarcie nowego PR.

Jeszcze raz dziękuję! 😊

---

> Jeśli masz jakiekolwiek pytania, skontaktuj się z nami [Gitter](https://gitter.im/FreeCodeCamp/Contributors) lub skomentuj poniżej. 💬
```

### Zamknięcie nieprawidłowych pull requestów

> Gdy PR jest nieprawidłowy.

```markdown
Witaj @username

Nie dodałeś żadnych treści, zamkniemy ten PR i oznacz go jako `invalid`. 😓

Możesz otworzyć kolejny PR! 👍
```