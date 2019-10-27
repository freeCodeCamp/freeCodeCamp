<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# Jak otworzyć Pull Request

# Jak przygotowac dobrą nazwę Pull Request:

Przy otwieraniu Pull Request(PR), użyj poniższej tabeli, aby zdecydować, jaki tytuł ma nosić Twój PR w poniższym formacie:
`fix/feat/chore/refactor/docs/perf (zakres): Tytuł PR

Przykładem jest `fix(learn): Naprawiono testy dla do...while loop challenge`.

| Scope | Documentation |
|---|---|
| `learn`,`curriculum` | For Pull Requests making changes to the curriculum challenges. |
| `client` | For Pull Requests making changes to client platform logic or user interface |
| `guide` | For Pull Requests which make changes to the guide. |
| `docs` | For Pull Requests making changes to the project's documentation. |


# Gdy proponuijesz Pull Request (PR)

1. Po dokonaniu edycji zostanie wyświetlony monit o utworzenie żądania przeciągnięcia na stronie GitHub widelca.

    [Obraz - Porównaj prośbę o wyciągnięcie na GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. Domyślnie, wszystkie żądania pobrania powinny być skierowane przeciwko głównemu repo freeCodeCamp, gałęzi `master`.

    Upewnij się, że twój widelec bazowy jest ustawiony na freeCodeCamp/freeCodeCamp podczas podnoszenia żądania przeciągnięcia.

    ![Obraz - porównywanie widelców podczas składania żądania ciągnięcia](/docs/images/github/comparing-forks-for-pull-request.png)

3. Wyślij żądanie ściągnięcia z gałezi do gałęzi `mastera` freeCodeCamp.

4.  W treści swojego PR zamieść bardziej szczegółowe podsumowanie wprowadzonych przez Ciebie zmian i dlaczego.

    - Otrzymasz szablon wniosku o pull request. Jest to lista kontrolna, którą powinieneś był zastosować przed otwarciem pull request.

    - Wypełnij szczegóły, które wydają Ci się pasować. Informacje te zostaną zweryfikowane i zadecydują, czy wniosek o pull request zostanie przyjęty, czy też nie.

    - Jeśli PR ma na celu naprawienie istniejącego błędu/sprawy, to na końcu
      opis Twojego PR, dodaj słowo kluczowe `zamknięcia`i#xxxxxx (gdzie xxxx
      jest numerem wydania). Przykład: `zamknięcie #1337`. To mówi GitHub, aby
      automatycznie zamyka istniejącą sprawę, jeśli PR zostanie zaakceptowany i połączony.

5. Wskazać, czy testowałeś na lokalnej kopii strony, czy też nie.

    Jest to bardzo ważne, gdy dokonujesz zmian, które nie ograniczają się jedynie do edycji treści tekstowych, takich jak artykuł w Przewodniku. Przykłady zmian wymagających lokalnego testowania to JavaScript, CSS lub HTML, które mogą zmienić funkcjonalność lub układ strony.


