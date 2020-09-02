<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# How to work on coding challenges

Naszym celem jest rozwój zabawnego i przejrzystego doświadczenia interaktywnego uczenia się.

Projektowanie interaktywnych wyzwań związanych z kodowaniem jest trudne. Dużo łatwiej byłoby napisać długie wyjaśnienia lub stworzyć samouczek wideo, a jest miejsce dla tych na Medium i YouTube. Jednakże, jeśli chodzi o nasz podstawowy program nauczania, trzymamy się tego, co działa najlepiej dla większości ludzi - w pełni interaktywnego, przypominającego grę wideo doświadczenia.

Chcemy, aby obozowicze osiągnęli stan przepływu. Chcemy, aby zbudowali rozmach i prześlizgnęli się przez nasz program nauczania z jak najmniejszą liczbą rozdźwięków. Chcemy, aby uczestniczyli w projektach z pewnością siebie i z szeroką ekspozycją na koncepcje programowania.

Stworzenie tych wyzwań wymaga ogromnej kreatywności i dbałości o szczegóły. Ale będziesz miał mnóstwo pomocy. Masz wsparcie całego zespołu współpracowników, od których możesz odbijać pomysły i demo swoich wyzwań. Bądź aktywny w [pokoju współpracowników](https://gitter.im/freecodecamp/contributors) i zadawaj wiele pytań.

Z Twoją pomocą możemy zaprojektować interaktywny program nauczania kodowania, który pomoże milionom ludzi nauczyć się kodowania przez kolejne lata.

Zawartość każdego wyzwania jest przechowywana w jego własnym pliku markdown. Plik ten jest później publikowany przy użyciu naszych narzędzi, na stronie internetowej, z którą można się komunikować. Możesz znaleźć całą zawartość programu nauczania freeCodeCamp.org w katalogu [`/curriculum`](/curriculum).

Istnieją dwa sposoby pracy nad tymi wyzwaniami:

- Polecamy, sklonuj projekt i edytuj lokalnie na swoim komputerze. Aby uzyskać pomoc, przeczytaj nasze [wytyczne tutaj](/CONTRIBUTING.md).
- Możesz też opcjonalnie zmodyfikować wyzwanie w interfejsie GitHub, klikając ikonę ołówka, aby rozpocząć edycję pliku.

## Szablon wyzwania

Poniżej znajduje się szablon tego, jak wyglądają pliki markdown wyzwań.

Uwagi:**Notatki:**

1. In the below sections, examples of `{ext}` are:
    - `html` - HTML/CSS
    - `js` - JavaScript
    - `jsx` - JSX

2. For the `Tests` section below, `text` and `testString` should be valid YAML strings. `testString` can be a stringified function or expression possibly using Chai asserts.

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: Challenge Title
challengeType: 0
videoUrl: 'url of video explanation'
---

## Description
<section id='description'>
A Description of the challenge and what is required to pass
</section>

## Instructions
<section id='instructions'>
Instructions about what exactly needs to be done.
</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: Should return "foo"
    testString: 'A stringified function possibly using Chai asserts'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Code displayed in the editor by default.

This is a required section for the challenge.
```

</div>

### Before Test
<div id='{ext}-setup'>

```{ext}
Optional Test setup code.
```

</div>

### After Test
<div id='{ext}-teardown'>

```{ext}
Optional Test tear down code.
```

</div>

</section>

## Solution
<section id='solution'>

```{ext}
// solution required
```

</section>
````


# Numbering Challenges

Każde wyzwanie wymaga "pomocy". Jeśli go nie określisz, wtedy MongoDB utworzy nowy losowy, kiedy zapisze dane, jednak nie chcemy, aby to zrobił, ponieważ chcemy, aby wyzwania ids były spójne w różnych środowiskach (etapy, produkcja, wiele różnych programistów, itp.).

Aby wygenerować nowy w powłoce (zakładając, że MongoDB działa osobno):


1. Run `mongo` command
2. Run `ObjectId()` command

For example:

```bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
```

The result is a new id, for example `5a474d78df58bafeb3535d34` above.

Once you have your id, put it into the markdown file as the `id` field at the top, e.g.

```yml
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```
# Naming challenges

Nazywanie rzeczy jest trudne. Ułatwiliśmy to poprzez nałożenie pewnych ograniczeń.

Wszystkie tytuły konkursowe powinny być jednoznaczne i powinny być zgodne z tym schematem:

[czasownik] [klauzula obiektowa]

Oto kilka przykładowych nazw wyzwań:

- Użyj zgodnie z ruchem wskazówek zegara, aby określić wypełnienie elementu
- Tablice kondensacyjne z funkcją .reduce
- Użyj notacji wspornikowej, aby znaleźć pierwszy znak w łańcuchu.


# Writing challenge descriptionss/instructions (Pisanie opisów/instrukcji wyzwań)

Zdania powinny być jasne i zwięzłe z minimalnym żargonem. Jeśli jest używany, żargon powinien być natychmiast zdefiniowany w prostym języku angielskim.

Zachowaj krótkie akapity (około 1-4 zdań). Ludzie częściej czytają kilka krótkich akapitów nad ścianą tekstu.

Tekst wyzwania powinien wykorzystywać drugą osobę ("ty"), aby nadać mu ton rozmowy. W ten sposób tekst i instrukcje wydają się przemawiać bezpośrednio do osoby prowadzącej kamper, która pracuje nad wyzwaniem. Starajmy się unikać używania pierwszej osoby ("ja", "my", "pozwólmy" i "nas").


Nie używaj linków wychodzących. Przerywają one przepływ. A kempingowicze nie powinni mieć nigdy obowiązku googlowania czegokolwiek podczas tych wyzwań. Jeśli istnieją zasoby, z których według ciebie kamperzy skorzystają, dodaj je do artykułu poświęconego wytycznym.

Możesz dodawać wykresy, jeśli jest to absolutnie konieczne.

freeCodeCamp ma globalną społeczność, a kulturowe znaczenie emoji lub emotikonu może być inne na całym świecie. Ponadto, emojis może być różnie renderowane na różnych systemach.

Właściwe rzeczowniki powinny używać poprawnej kapitalizacji, gdy jest to możliwe. Poniżej znajduje się lista słów, które powinny pojawić się w wyzwaniach.

- JavaScript (duże litery w "J" i "S" i brak skrótów)
- Node.js
- Rozwój front-endu (forma przymiotnikowa z myślnikiem) ma miejsce, gdy pracujesz na froncie (forma rzeczownika bez myślnika). To samo dotyczy terminów "back end", "full stack" i wielu innych terminów złożonych.

##### Zasada 2-minutowa

Każde wyzwanie powinno być możliwe do rozwiązania w ciągu 120 sekund przez osobę posługującą się językiem angielskim, która ukończyła zadania prowadzące do jego realizacji. Obejmuje to czas potrzebny na przeczytanie wskazówek/instrukcji, zrozumienie kodu źródłowego, napisanie własnego kodu i przejście wszystkich testów.

Jeśli ukończenie zadania trwa dłużej niż dwie minuty, masz dwie możliwości:

- Uprość zadanie, lub
- Podziel wyzwanie na dwa wyzwania.

Zasada 2-minutowa zmusza Cię, projektanta wyzwań, do zwięzłego określenia kierunku, kodu nasion i prostych testów.

Mamy wydarzenia w języku JavaScript, które śledzą, ile czasu zajmuje kamperom rozwiązywanie wyzwań i możemy je wykorzystać do identyfikacji wyzwań, które należy uprościć lub podzielić.

##### Modułowość

Każde wyzwanie powinno nauczyć dokładnie jednej koncepcji, a koncepcja ta powinna wynikać z nazwy wyzwania.

Możemy wzmocnić wcześniej omówione koncepcje poprzez powtarzanie i wariacje - na przykład poprzez wprowadzenie elementów h1 w jednym wyzwaniu, a następnie elementów h3 później kilka wyzwań.

Naszym celem jest stawienie czoła tysiącom dwuminutowych wyzwań. Mogą one przepływać razem i powtarzać wcześniej omówione koncepcje.

#### Formatowanie tekstu wyzwania

Oto szczegółowe wytyczne dotyczące formatowania tekstu wyzwania i przykładów:

- Słowa kluczowe w języku idą w znacznikach `<code>`. Na przykład, nazwy tagów HTML lub nazwy właściwości CSS.
- Pierwsza instancja słowa kluczowego, gdy jest ono definiowane, lub ogólne słowa kluczowe (np. "obiekt" lub "niezmienny") znajdują się w znacznikach `<dfn>`.
- Odniesienia do części kodu (np. funkcja, metoda lub nazwa zmiennej) powinny być opakowane w znaczniki `<code>`. Zobacz przykład poniżej:
- Użyj <code>parseInt</code> aby przekonwertować zmienną <code>realNumber</code> na liczbę całkowitą.
- Wielowierszowe bloki kodu **muszą być poprzedzone pustym wierszem**.  Następny wiersz musi zaczynać się od trzech wierszy wstecznych, po których natychmiast następuje jeden z [obsługiwanych języków](https://prismjs.com/#supported-languages).  Aby dokończyć blok kodu, musisz uruchomić nową linię, która ma tylko trzy backticka i **inną pustą linię**.
**Uwaga:** Jeśli zamierzasz użyć przykładowego kodu w YAML, użyj `yaml` zamiast `yml` dla języka po prawej stronie tyłków.

Zobacz przykład poniżej:

````md
The following is an example of code:

```{language}

[YOUR CODE HERE]

```
````

- Dodatkowe informacje w formie notatki powinny być sformatowane `<strong>Note:</strong> Pozostała część tekstu notatki...`
- Jeśli potrzebnych jest wiele notatek, wówczas wszystkie notatki należy wymienić w osobnych zdaniach w formacie `<strong>Notes:</strong>Pierwsza notatka.  Druga notatka text.`.
- Używaj cudzysłowów podwójnych tam, gdzie ma to zastosowanie.

# Writing tests

Wyzwania powinny mieć minimalną liczbę testów niezbędnych do sprawdzenia, czy kamper rozumie koncepcję.

Naszym celem jest przekazanie jednego punktu, którego wyzwanie stara się nauczyć, i sprawdzenie, czy zrozumieli ten punkt.

Testy wyzwań mogą wykorzystywać biblioteki asertywne Node.js i Chai.js. Ponadto, w razie potrzeby, kod wygenerowany przez użytkownika może być dostępny w zmiennej `code`.

## Formatowanie kodu nasion

Oto szczegółowe wytyczne dotyczące formatowania kodu nasion wyzwania:

- Użyj dwóch spacji do wcięć
- Wypowiedzi w języku JavaScript kończą się znakiem średnika.
- W stosownych przypadkach należy stosować podwójne cudzysłowy.
- Komentarze powinny mieć odstęp między znakami komentarza a samym komentarzem.

    "/// Napraw tę linię

# Curriculum Challenge Hints and Solutions (Wyzwania programowe)

Każde wyzwanie posiada przycisk `Uzyskaj podpowiedź`, dzięki czemu użytkownik ma dostęp do wszelkich podpowiedzi/rozwiązań, które zostały stworzone dla wyzwania.  Tematy podpowiedzi/rozwiązań programowych znajdują się na [naszym forum](https://forum.freecodecamp.org/c/guide) pod kategorią `Guide`.

Jeśli znajdziesz problem z istniejącym tematem podpowiedzi/rozwiązań wyzwania, możesz zgłosić sugestie w komentarzach poniżej głównego postu wiki, jeśli jesteś co najmniej użytkownikiem forum poziomu 3.  Wybierz moderatorów, którzy zapoznają się z komentarzami i zdecydują, czy włączyć zmiany w istniejącym temacie.

##### Dodawanie nowych podpowiedzi/rozwiązań na temat wyzwań

Tylko moderatorzy mogą dodawać nowe podpowiedzi i rozwiązania, gdy do programu nauczania dodawane są nowe wyzwania.

Podejmij następujące kroki podczas dodawania nowych podpowiedzi/rozwiązań związanych z tematem związanym z wyzwaniami.

1. Rozpocznij od wykonania tych samych kroków w przypadku [tworzenia nowego tematu] (tworzenie nowego przewodnika tematycznego), a następnie przejrzyj następny etap tworzenia tytułu.
2. Tytuł tematu powinien zaczynać się od "freeCodeCamp Challenge Guide: W tym celu należy zacząć od "freeCamp Challenge Guide: "freeCamp Challenge Guide: FreeCamp Challenge Guide: FreeCamp Challenge Guide: FreeCamp Challenge Guide: FreeCamp Challenge Guide: FreeCamp Challenge Guide: FreeCamp Challenge Guide. Na przykład, jeśli wyzwanie nosi nazwę "Chunky Monkey", tytuł tematu brzmiałby "freeCodeCamp Challenge Guide": Chunky Monkey".
3. 3. `camperbot` powinien być właścicielem tych tematów/pocztów, więc będziesz musiał poprosić administratora o zmianę własności głównego postu na `camperbot`.
4. Po utworzeniu nowego tematu, tworzony jest identyfikator tematu forum.  Znajduje się on na końcu adresu URL tematu forum.  Ten identyfikator musi być dodany do frontmaterii pliku wyzwania programu nauczania poprzez normalny proces pull request dla przycisku "Uzyskaj podpowiedź", aby połączyć się z tematem.

#### Wytyczne dotyczące treści podpowiedzi i rozwiązań tematów

W przypadku proponowania rozwiązania dla tematu przewodnika związanego z wyzwaniem programowym, należy dodać pełny kod. Obejmuje on wszystkie oryginalne kody zalążkowe oraz wszelkie zmiany potrzebne do przejścia wszystkich testów na wyzwania.  Poniższy szablon powinien być używany podczas tworzenia nowych podpowiedzi/rozwiązań tematycznych:

````md
# Challenge Name Goes Here

---
## Problem Explanation

This summarizes what need to be done without just restating the challenge description and/or instructions.  This is an optional section

#### Relevant Links
- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---
## Hints

### Hint 1
Hint goes here

### Hint 2
Hint goes here

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function myFunc() {
  console.log('Hello World!');
}
```

#### Code Explanation

- Code explanation goes here
- Code explanation goes here

#### Relevant Links

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

</details>
````
# Testowanie wyzwań

Przed utworzeniem [prośby o wyciągnięcie](how-to-open-a-pull-request.md) dla Twoich zmian, musisz sprawdzić, czy wprowadzone zmiany nie powodują nieumyślnie problemów z wyzwaniem.  Aby przetestować wszystkie wyzwania, należy wykonać "test npm run test:curriculum". Aby zaoszczędzić czas możesz ograniczyć testy do jednego wyzwania wykonując następujące kroki:

1. W pliku `.env` ustaw zmienną środowiskową `LOCALE` na język wyzwania (wyzwań), które musisz przetestować.  Obecnie akceptowane wartości to `angielski`, `arabski`, `chiński`, `portugalski`, `rosyjski` i `hiszpański`.

2.  Przełączyć do katalogu `curriculum`:

```
  cd program nauczania
```

3. Wykonaj następujące czynności dla każdego pliku wyzwania, dla którego zmieniłeś dowolny `testString`s lub dodane rozwiązania:

```
npm run test -- -g 'pełny angielski tytuł wyzwania'.
```
    
Po sprawdzeniu, że każde wyzwanie, nad którym pracowałeś, przejdzie pomyślnie testy, prosimy o stworzenie wniosku o ciągnięcie.

#### Przydatne linki

Tworzenie i edycja wyzwań:

1. Typy wyzwań](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13) - co oznaczają liczbowe wartości typu wyzwania (wyliczenie).

2. [Przyczyniając się do FreeCodeCamp - Writing ES6 Challenge Tests](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - film video po [Ethan Arrowood](https://twitter.com/ArrowoodTech) jako wkład do starej wersji programu nauczania.

