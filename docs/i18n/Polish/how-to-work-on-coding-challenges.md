# Jak pracować nad wyzwaniami kodowania

Naszym celem jest rozwój zabawnego i jasnego interaktywnego doświadczenia w nauce.

Tworzenie interaktywnych wyzwań w zakresie kodowania jest trudne. O wiele łatwiej byłoby napisać długie wyjaśnienie lub stworzyć samouczek wideo, i jest miejsce dla tych na średnim i YouTube. Jednak dla naszego podstawowego programu nauczania, trzymamy się tego, co najlepiej działa dla większości ludzi - w pełni interaktywnego, wideo podobnego do gry.

Chcemy, aby kamerzy osiągnęli stan przepływu. Chcemy, aby budowali dynamikę i przebili się przez nasz program nauczania z jak najmniejszą ilością snagów. Chcemy, aby wzięły one udział w projektach z ufnością i spotkały się z szerokim zaangażowaniem w koncepcje programowania.

Tworzenie tych wyzwań wymaga ogromnej kreatywności i skupienia uwagi na szczegółach. Dostępna jest mnóstwo pomocy. Będziesz mieć wsparcie od całego zespołu współtwórców, do którego możesz odbić pomysły i demo swoich wyzwań. Bądź aktywny w [sali współtwórców](https://gitter.im/freecodecamp/contributors) i zadaj wiele pytań.

Dzięki Twojej pomocy możemy zaprojektować interaktywny program nauczania kodowania, który pomoże milionom ludzi nauczyć się kodowania na nadchodzące lata.

Zawartość dla każdego wyzwania jest przechowywana w jego własnym pliku markdown Zawartość dla każdego wyzwania jest przechowywana w jego własnym pliku markdown Ten plik markdown jest później przekonwertowany do HTML za pomocą naszych narzędzi do tworzenia interaktywnych stron internetowych.

Wszystkie treści programu nauczania freeCodeCamp.org można znaleźć w katalogu [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges).

## Skonfiguruj oprzyrządowanie programu nauczania

Zanim zaczniesz pracować nad programem nauczania, musisz skonfigurować jakieś narzędzia, aby pomóc Ci przetestować zmiany. Możesz użyć dowolnej opcji z poniżej:

- Możesz [skonfigurować darmowy CodeCamp lokalnie](how-to-setup-freecodecamp-locally.md). Jest to **wysoce zalecane** dla regularnych/powtarzanych kontrybucji. Ta konfiguracja pozwala ci pracować i testować zmiany.
- Użyj Gitpod, darmowego środowiska dev online. Kliknięcie poniższego przycisku uruchomi gotowe do kodowania środowisko dev dla darmowego CodeCamp w przeglądarce. Zajmie to tylko kilka minut.

  [![Otwórz w Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Edytuj pliki na interfejsie GitHuba klikając ikonę ołówka dla odpowiedniego pliku. Chociaż jest to najszybszy sposób, to **nie jest zalecany**, ponieważ nie możesz przetestować zmian na GitHubie. Jeśli nasi opiekunowie stwierdzą, że wprowadzone przez Ciebie zmiany muszą być testowane lokalnie, zamiast tego musisz ponownie zastosować się do powyższych metod.

## Szablon wyzwania

Poniżej znajduje się szablon tego, jak wyglądają obecnie pliki markdown wyzwań.  To see the streamlined template we will be adopting see [below](#upcoming-challenge-template).

````md
---
id: Unikalny identyfikator (alfanumeryczny, MongoDB_id)
title: Wyzwanie Tytuł
wyzwanie: 0
videoUrl: 'url of video explanation '
---

## Description

<section id='description'>
Opis wyzwania i co jest wymagane do wykonania
</section>

## Instrukcje

<section id='instructions'>
Instrukcje dotyczące tego, co dokładnie należy zrobić.
</section>

## Testy

<section id='tests'>

```yml
testy:
  - text: Should return "foo"
    testString: 'A stringified function may using Chai asserts'
````

</section>

## Nasiona wyzwania

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Kod wyświetlany domyślnie w edytorze.

Jest to sekcja wymagana, aby sprostać wyzwaniu.
```

</div>

### Przed testem

<div id='{ext}-setup'>

```{ext}
Opcjonalny kod konfiguracji testu.
```

</div>

### Po teście

<div id='{ext}-teardown'>

```{ext}
Opcjonalny kod testowy.
```

</div>

</section>

## Rozwiązanie

<section id='solution'>

```{ext}
// rozwiązanie wymagane
```

</section>

````

> [!UWAGA]
>
> 1. W powyższych sekcjach, Przykładami `{ext}` są:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. Dla sekcji `Tests` powyżej, `text` i `testString` powinny być poprawnymi ciągami YAML. `testString` może być uciętą funkcją lub wyrażeniem przy użyciu których można użyć asertów Chai.

## Wyzwania liczbowe

Każde wyzwanie wymaga `id`. Jeśli nie określisz jednego, MongoDB utworzy nowy, losowy, gdy zapisze dane; nie chcemy, aby tak się stało, ponieważ chcemy, aby identyfikatory wyzwań były spójne w różnych środowiskach (etapy, produkcja, wiele różnych deweloperów itp.).

Aby wygenerować nowy w skorupce (zakładając, że MongoDB działa oddzielnie):

1. Uruchom komendę "mongo".
2. Uruchom komendę `ObjectId()`.

Na przykład:

```bash
$ mongo
MongoDB shell version v3.6.1
łączące się z: mongodb://127.0.0.1:27017
wersja serwera MongoDB: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

Wynik jest nowym identyfikatorem, na przykład `5a474d78df58bafeb3535d34` powyżej.

Po otrzymaniu identyfikatora, umieść go w pliku markdown jako pole `id` na górze, np.

```yml
---
id: 5a474d78df58bafeb3535d34
tytuł: Wyzwanie Tytuł
```

## Nazewnictwo wyzwań

Nazewnictwo rzeczy jest trudne. Ułatwiliśmy to nakładając pewne ograniczenia.

Wszystkie tytuły wyzwania powinny być jednoznaczne i powinny być zgodne z tym wzorem:

\[verb\]\[klauzula obiektu\]

Oto kilka przykładowych nazw wyzwań:

- Użyj Notacji zegara aby określić dodawanie elementu
- Kondensuj tablice z .reduction
- Użyj Notacji z nawiasem, aby znaleźć pierwszy znak w ciągu

## Opis wyzwań/instrukcje

Zdania powinny być jasne i zwięzłe przy minimalnym żargonu. W przypadku użycia jargon należy natychmiast zdefiniować w prostym języku angielskim.

Zachowaj krótkie punkty (około 1-4 zdań). Istnieje większe prawdopodobieństwo, że ludzie przeczytają kilka krótkich ustępów, niż ściana tekstu.

Tekst wyzwania powinien użyć drugiej osoby („Ty”), aby pomóc jej nadać ton rozmowy. W ten sposób wydaje się, że tekst i instrukcje będą rozmawiać bezpośrednio z kamuflażem pracującym w ramach wyzwania. Staraj się unikać używania pierwszej osoby ("I", "my", "niech się" i "nas").

Nie używaj linków wychodzących. Przerwuje przepływ. W czasie tych wyzwań kamery nigdy nie powinny być zmuszane do czegokolwiek. Jeśli istnieją zasoby, z których uważasz, że kamery odniosłyby korzyści, dodaj je do artykułu dotyczącego poradnika wyzwania.

Jeśli jest to absolutnie konieczne, można dodać schematy.

Nie używaj emotikonów ani emotikonów w wyzwaniach. darmowy CodeCamp ma globalną społeczność, a kulturowe znaczenie emoji lub emocji może być różne na całym świecie. Ponadto emotikony mogą renderować się inaczej w różnych systemach.

Odpowiednie publikacje powinny używać poprawnej kapitalizacji, jeśli to możliwe. Poniżej znajduje się lista słów, które powinny pojawić się w wyzwaniach.

- JavaScript (wielkie litery w "J" i "S" i bez skrótów)
- Node.js
- Rozwój przedniej części (przymiotnik z myślnikiem) to kiedy pracujesz na przednim końcu (noun form bez myślnika). To samo dotyczy „backend”, „full stack” i wielu innych złożonych terminów.

### Reguła 2 minuty

Każde wyzwanie powinno być możliwe do rozwiązania w ciągu 120 sekund przez rodzimego angielskiego użytkownika, który ukończył związane z nim wyzwania. Obejmuje to czas potrzebny na przeczytanie wskazówek/instrukcji zrozumienia kodu siedzącego, Napisz własny kod i uzyskaj wszystkie testy do przejrzenia.

Jeśli ukończenie wyzwania trwa dłużej niż dwie minuty, masz dwie opcje:

- Uproszczenie wyzwania, lub
- Podziel wyzwanie na dwa wyzwania.

Reguła 2-minutowa zmusza ciebie, projektanta wyzwania, aby Twoje kierunki były zwięzłe, Twój kod ziarenka był jasny, a Twoje testy były proste do przodu.

Śledzimy czas potrzebny kamperom na rozwiązanie zmian i wykorzystujemy te informacje do określenia wyzwań, które należy uprościć lub podzielić.

### Modularność

Każde wyzwanie powinno uczyć dokładnie jednej koncepcji, a ta koncepcja powinna być widoczna z imienia wyzwania.

Możemy wzmocnić wcześniej uwzględnione koncepcje poprzez powtórzenie się i zróżnicowanie - na przykład wprowadzenie elementów h1 do jednego wyzwania, a następnie h3 do kilku wyzwań później.

Naszym celem jest stworzenie tysięcy 2-minutowych wyzwań. Mogą się one zebrać i powtórzyć wcześniej omówione koncepcje.

### Formatowanie tekstu wyzwania

Oto szczegółowe wytyczne dotyczące formatowania tekstu i przykładów:

- Słowa kluczowe języka idą w `<code>` tagów. Na przykład nazwy tagów HTML lub nazwy właściwości CSS
- Pierwsza instancja słowa kluczowego, gdy jest zdefiniowana, lub ogólne słowa kluczowe (np. "obiekt" lub "niezmienne") idź w `<dfn>` tagi
- Odniesienia do części kodu (np. funkcja, metoda lub zmienne) powinny być zawinięte w tagi `<code>`. Zob. przykład poniżej:
- Użyj <code>parseInt</code> , aby przekonwertować zmienną <code>RealNumber</code> na liczbę całkowitą.
- Wieloliniowe bloki kodu **muszą być poprzedzone pustą linią**. Następny wiersz musi zaczynać się od trzech tyłek, a następnie od razu jednym z [obsługiwanych języków](https://prismjs.com/#supported-languages). Aby ukończyć blok kodu, musisz uruchomić nową linię z tylko trzema tyłami i **inną pustą linią**. **Uwaga:** Jeśli zamierzasz użyć przykładowego kodu w YAML, użyj `yaml` zamiast `yml` dla języka na prawo od tyłu.

Zob. przykład poniżej:

````md
Poniżej znajduje się przykład kodu:

```{language}

[TWOJA KOD HERE]

````
````

- Dodatkowe informacje w formie notatki powinny być sformatowane `<strong>Uwaga:</strong> Tekst notatki...
- Jeśli potrzebne są wielokrotne notatki, następnie wyświetl wszystkie notatki w oddzielnych zdaniach w formacie `<strong>Uwagi:</strong> Tekst pierwszej notatki. Tekst drugiej notatki.`.
- W stosownych przypadkach używaj podwójnych cytatów

## Testy pisania

Wyzwania powinny mieć minimalną liczbę testów niezbędnych do sprawdzenia, czy kamper rozumie pojęcie.

Naszym celem jest przekazanie informacji o pojedynczym punkcie, który próbuje uczyć i przetestować, czy zrozumiały ten punkt.

Testy na wyzwania mogą korzystać z bibliotek asercji Node.js i Chai.js. Ponadto, w razie potrzeby, można uzyskać dostęp do kodu wygenerowanego przez użytkownika w zmiennej `code`.

## Formatowanie kodu ziarenka

Oto szczegółowe wytyczne formatowania kodu ziarenka wyzwania:

- Użyj dwóch spacji do wcięcia
- wyrażenie JavaScript kończy się średnikiem
- W stosownych przypadkach używaj podwójnych kwotowań
- Komentarze powinny mieć spację między znakami komentarskimi a komentarzami

  `// Popraw ten wiersz`

## Wskazówki i Rozwiązania

Każde wyzwanie ma przycisk "Uzyskaj wskazówkę", aby użytkownik miał dostęp do wskazówek/rozwiązań, które zostały stworzone dla wyzwania. Tematy programu nauczania hintów/rozwiązań znajdują się na [naszym forum](https://forum.freecodecamp.org/c/guide) w kategorii `Guide`.

Jeśli znajdziesz problem z istniejącym tematem hint/rozwiązań, możesz przedstawić sugestie w [kategorii współtwórców](https://forum.freecodecamp.org/c/contributors) na forum. Moderatorzy i użytkownicy posiadający zaufanie poziomu 3 dokonają przeglądu komentarzy i decydują o tym, czy uwzględnić zmiany w odpowiednim temacie wskazówki/rozwiązań.

### Dodawanie nowych wskazówek/rozwiązań wyzwań

Podejmij następujące kroki, dodając nowe podpowiedzi i rozwiązania związane z tematem.

1. Zacznij od tych samych kroków, aby utworzyć nowy temat, ale przejrzyj następny do tworzenia tytułu.
2. Tytuł tematu powinien zaczynać się od `FreCodeCamp Challenge Guide: ` połączony z aktualnym tytułem wyzwania programowego. Na przykład, jeśli wyzwanie nosi nazwę "Chunky Monkey", tytuł tematu będzie "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` powinien być właścicielem tych tematów/postów, musisz poprosić administratora o zmianę właściciela głównego wpisu na `camperbot`.
4. Po utworzeniu nowego tematu zostanie utworzony identyfikator tematu. Znajduje się na końcu adresu URL tematu forum. Ten identyfikator musi zostać dodany do frontacji pliku programu nauczania poprzez normalny proces pull request dla przycisku `Get a Hint` aby połączyć się z tematem.

### Wytyczne dotyczące treści wskazówek i rozwiązań tematów

Proponując rozwiązanie dla tematu przewodnika dotyczącego programu nauczania, należy dodać pełny kod. Obejmuje to wszystkie oryginalne kody ziaren, a także wszelkie zmiany potrzebne do zdania wszystkich testów wyzwań. Następujący szablon powinien być użyty podczas tworzenia nowych tematów wskazówek/rozwiązań:

``md
# Challenge Name Goes here

---

## Problem Wyjaśnienie

Podsumowanie tego, co należy zrobić bez przedefiniowania opisu i/lub instrukcji. Jest to opcjonalna sekcja

#### Odpowiednie Linki

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---

## Wskazówki

### Wskazówka 1

idzie tutaj

### Wskazówka 2

Wskazówka znajduje się tutaj

---

## Rozwiązania

<details><summary>Solution 1 (Kliknij, aby pokazacząć/ukryć)</summary>

```js
function myFunc() {
  konsola. og('Witaj Świat!');
}
````

#### Wyjaśnienie kodu

- Wyjaśnienie kodu idzie tutaj
- Wyjaśnienie kodu idzie tutaj

#### Odpowiednie linki

- [Tekst linku](link_url_goes_here)
- [Tekst linku](link_url_goes_here)

</details>
````

## Testowanie Wyzwań

Zanim [stwórz pull request](how-to-open-a-pull-request). d) w związku ze swoimi zmianami, należy potwierdzić, że wprowadzone przez Ciebie zmiany nie powodują nieumyślnych problemów z wyzwaniem. 

1. Aby przetestować wszystkie wyzwania uruchom poniższe polecenie z katalogu głównego

````
npm test uruchomienia: program nauczania
``` 

2. Możesz również przetestować blok lub superblok wyzwań za pomocą tych poleceń

```
npm wykonanie testu: curriculum --block='Podstawowy HTML i HTML5'
```

```
npm test uruchomienia: curriculum --superblock=responsive-web-design
```

Możesz również przetestować jedno wyzwanie indywidualnie, wykonując następujące kroki:

1. Przełącz do katalogu `curriculum`:

   ```
   cd program nauczania
   ```

2. Uruchom następujące dla każdego pliku wyzwania, dla którego zmieniłeś:

   ```
   test npm run -- -g 'pełny angielski tytuł wyzwania'
   ```

Po sprawdzeniu, że każde wyzwanie, nad którym pracujesz, przechodzi testy, [utwórz pull request](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md).

> [!Wskazówka]
> Możesz ustawić zmienną środowiskową `LOCALE` w `.env` na język wyzwania, które musisz przetestować.
> 
> Obecnie akceptowane wartości to `english` i `chinese`, przy czym domyślnie ustawiono `english`.

## Nadchodzący Szablon Wyzwania

Szablon wyzwania w procesie aktualizacji do czystszej, mniej zagnieżdżonych struktur.  To nie zostało całkowicie sfinalizowane, ale następujące powinny być bliskie końcowej struktury:

``mdx

---
id: unikalny identyfikator (alfanumeryczny, MongoDB_id)
tytuł: 'Challenge Title'
challengeType: Integer, zdefiniowane w `client/utils/challengeTypes. s`
videoUrl: 'url of video explanation
forumTopicId: 12345
---

import skryptu z './script. dx';

## --step-description--

Tekst opisu, w markdown

```html
<div> 
  przykład kodu
</div>
```

## --step-hints--

![test-id-1]

Będzie arbitralna liczba trzykrotnych identyfikatorów, instrukcji (w górnictwie) i bloków kodu.

```js
Kod badania 1
```

![test-id-2]

Więcej instrukcji w składni markdown

```js
Więcej kodu
```

## --step-seed-

### --before-user-code--

```lang
Kod oceniony przed użytkownikiem
```

### --after-user-code--

```lang
Kod oceniany po użytkowniku i tuż przed testami
```

### --seed-content--

![index-html]

```html
Niektóre html
```

```css
Niektóre css
```

```js
Kilka js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --solution-marker--
</h1>



<p spaces-before="0">
  Dokładnie taka sama jak sekcja dotycząca nasion
</p>

<h2 spaces-before="0">
  --next-solution-marker
</h2>



<p spaces-before="0">
  To samo jeszcze raz
</p>

<h1 spaces-before="0">
  --pyton-marker--
</h1>

<h2 spaces-before="0">
  --text-marker--
</h2>



<p spaces-before="0">
  Pytanie pojawiłoby się tutaj (używane tylko do wyzwań związanych z filmami).
</p>

<h2 spaces-before="0">
  --answers-marker--
</h2>



<p spaces-before="0">
  Odpowiedź 1
</p>

<hr />

<p spaces-before="0">
  Odpowiedź 2
</p>

<hr />

<p spaces-before="0">
  Odpowiedź 2
</p>

<h2 spaces-before="0">
  --solution-marker--
</h2>



<p spaces-before="0">
  \<number of correct answer\>
</p>



<p spaces-before="0">
  ````
</p>

<h3 spaces-before="0">
  Przydatne linki
</h3>



<p spaces-before="0">
  Tworzenie i edycja wyzwań:
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">Rodzaje wyzwań</a> - co oznaczają wartości liczbowe typu wyzwania (enum).
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">Przyczynianie się do FreeCodeCamp - Pisanie testów wyzwań ES6</a> - film po <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> , ponieważ przyczynia się do starej wersji programu nauczania.
    </p>
  </li>

</ol>
