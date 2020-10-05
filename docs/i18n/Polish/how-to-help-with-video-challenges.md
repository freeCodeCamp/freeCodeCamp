# Jak pomóc w wyzwaniach wideo

Wyzwania wideo są nowym wyzwaniem w programie nauczania darmowego CodeCamp.

Wyzwanie wideo to mała część pełnego kursu wideo na dany temat. Strona wyzwania wideo zawiera film z YouTube. Każda strona wyzwania ma jedno pytanie wielokrotnego wyboru związane z filmem. Użytkownik musi odpowiedzieć na pytanie poprawnie, zanim przejdzie do następnego wyzwania wideo w kursie.

Strony wyzwania wideo są tworzone przez członków zespołu FreeCamp. Filmy YouTube są również przesyłane przez członków zespołu FreeCamp. Wiele wyzwań związanych z filmami wideo nie ma z nimi jeszcze pytań.

Możesz pomóc tworząc pytania wielokrotnego wyboru związane z sekcjami wideo i dodając pytania do plików markdown dla wyzwań wideo.


## Szablon wyzwania

Poniżej znajduje się szablon jak wyglądają pliki markdown wyzwań.

````md
---
id: Unikalny identyfikator (alfanumeryczny, MongoDB_id)
title: Wyzwanie Tytuł
Typ: 11
wideo Id: 'Id wideo YouTube dla wyzwania wideo'
---

## Opis

<section id='description'>
Opcjonalny opis z pomocnymi informacjami związanymi z wideo.
</section>

## Testy

<section id='tests'>

```yml
pytanie:
  tekst: 'Pytanie'
  odpowiedzi:
    - 'Odpowiedz jedną'
    - 'Odpowiedz druga'
    - 'Odpowiedz ty'
  rozwiązanie: 3
````

</section>
````

## Tworzenie pytań dla wyzwań wideo

### Uzyskaj dostęp do plików markdown wyzwania wideo

Pliki markdown dla wyzwań wideo można znaleźć w następujących lokalizacjach w programie nauczania:

- [Analiza danych z kursem Pythona](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [Kurs TensorFlow 2.0](https://github. om/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Kurs liczbowy](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/numpython/numpypy)
- [How Neural Networks WorkCourse](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Wybierz plik z powyższych opcji.

### Przeskocz przez film związany z wyzwaniem i utwórz pytanie wyboru wyboru wyboru

Najpierw znajdź identyfikator wideo.

Na przykład, w poniższym kodzie z nagłówka pliku markdown wyzwania wideo, wideo Id to "nVAaxZ34khk". Na GitHubie informacje powinny być wyświetlane w formacie tabeli.
````
---
id: 5e9a093a74c4063ca6f7c14d title: Data Analysis Example A challengeType: 11
videoId: nVAaxZ34khk
---
```

Następnie uzyskaj dostęp do filmu YouTube za pomocą tego identyfikatora wideo. Adres URL dla filmu to:
https://www.youtube. om/watch?v=[videoId]    (dodaj identyfikator wideo do adresu URL bez nawiasów kwadratowych)

W powyższym przykładzie url to https://www. outube.com/watch?v=nVAaxZ34khk

Skim wideo z YouTube za pomocą tego wideo Id i pomyśl o pytaniu wielokrotnego wyboru w oparciu o zawartość filmu.

### Dodaj pytanie do pliku markdown

Możesz dodać pytanie lokalnie lub bezpośrednio do interfejsu GitHub. Aby dodać pytanie lokalnie, musisz [skonfigurować darmowy CodeCamp lokalnie](how-to-setup-freecodecamp-lokcally.md). Możesz również znaleźć plik na GitHub i kliknąć przycisk edycji, aby dodać pytanie bezpośrednio w przeglądarce.

Jeśli pytanie nie zostało jeszcze dodane do konkretnego wyzwania wideo, będzie miało następujące domyślne pytanie:

```yml
:
  tekst: |
    Pytanie
  odpowiedzi:
    - |
      jedno
    - |
      dwa
    - |
      trzy
  rozwiązanie: 3
```

Uaktualnić słowo "Pytanie" swoim pytaniem. Zaktualizować „jedną”, „dwa” i „trze” wraz z ewentualnymi odpowiedziami. Upewnij się, że zaktualizowano numer rozwiązania, który jest poprawny. Możesz dodać więcej możliwych odpowiedzi w tym samym formacie. Pytanie i odpowiedzi można załączyć znakiem cytowania.

#### Użyj markdown aby sformatować swoje pytanie

Tekst w pytaniu jest oceniany jako markdown. Najprostszym sposobem zapewnienia prawidłowego sformatowania pytania jest rozpoczęcie pytania od `tekstu: |`, tak jak to:

```yml
pytanie:
  tekst: |
    Pytanie
```

Następnie musisz się upewnić, że Twoje pytanie jest w nowej linii i wcięto o jeden poziom więcej niż `tekstu: |`.

To samo podejście można zastosować do odpowiedzi, tak więc całe pytanie staje się

```yml
pytanie:
  tekst: |
    Pytanie
  odpowiedzi:
  - |
    Pierwsza odpowiedź
  - |
    Druga
  - |
    Trzecie
  : 2
```

Upewnij się, że każda odpowiedź jest wiarygodna, ale jest tylko jedna poprawna odpowiedź.

#### Korzystanie z HTML

Pytania i odpowiedzi mogą zawierać niektóre tagi HTML, takie jak `<br>` dla nowej linii. Znaczniki HTML powinny być używane źle, gdy pytania nie mogą być wyrażane bez nich.

### Przykłady pytań

#### Przykłady bez HTML

````yml
pytanie:
  tekst: |
    Co to jest dziennik kodu JavaScript do konsoli?
    ```js
    console.log('hello world');
    ````


    Wybierz odpowiedź!
  odpowiedzi:
    - | Witaj *świat*
    - | **Witaj** świat
    - | Witaj świat : 3
````

````yml
pytanie:
  tekst: |
    Co wydrukuje po uruchomieniu tego kodu:
    ```py
    szerokość = 15
    wysokość = 12. druk (wysokość/3)
    ````
  odpowiedzi:
    - | 39
    - | 4
    - | 4.0
    - | 5.0
    - | 5 rozwiązanie: 3
````

#### Przykład z pytaniem HTML

```yml
:
  tekst: |
    Co wydrukuje po uruchomieniu tego kodu:
    <pre><code>szerokość = 15<br>wysokość = 12.<br>print(wysokość/3)<code></pre>
  odpowiedzi:
    - |
      39
    - |
      4
    - |
      4. - |
      5. - |
      5
  rozwiązanie: 3
````

Ostatni przykład pokazuje, że HTML może być użyty, ale nie jest tak czytelny jak wersja bez niego.

Na więcej przykładów możesz zapoznać się z plikami markdown dla następującego kursu wideo. Wszystkie wyzwania mają już pytania: [Python na kurs dla wszystkich](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## Otwórz Pull Request

Po utworzeniu jednego lub więcej pytań, możesz zatwierdzić zmiany do nowej gałęzi i [otworzyć Pull Request](how-to-open-a-pull-request.md).
