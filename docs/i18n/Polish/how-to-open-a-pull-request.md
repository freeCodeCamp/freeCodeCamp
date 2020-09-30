# Jak otworzyć Pull Request (PR)

Pull Request umożliwia wysyłanie zmian z forku na GitHub do głównego repozytorium FreCodeCamp.org. Po dokonaniu zmian w kodzie lub wyzwaniach w kodowaniu powinieneś postępować zgodnie z niniejszymi wytycznymi, aby wysłać PR.

## Przygotuj dobry tytuł PR

Zalecamy użycie [tradycyjnego tytułu i wiadomości](https://www.conventionalcommits.org/) dla poleceń i pull requesta. Konwencja ma następujący format:

> `<type>([opcjonalny zakres(y)]): <description>`
> 
> Na przykład:
> 
> `fix(learn): testy dla do...while loop challenge`

Podczas otwierania Pull Request(PR) możesz użyć poniższego przycisku, aby określić typ, zakres (opcjonalnie) i opis.

**Typ:**

| Typ       | Kiedy wybrać                                                                           |
|:--------- |:-------------------------------------------------------------------------------------- |
| Napraw    | Zmieniona lub zaktualizowana/udoskonalona funkcjonalność, testy, odwrotnie lekcji itp. |
| feat      | Tylko w przypadku dodawania nowych funkcji, testów itp.                                |
| ruda      | Zmiany niezwiązane z kodem, testami lub werbijaniem lekcji.                            |
| dokumenty | Zmiany w katalogu `/docs` lub wytycznych dotyczących wkładu, itp.                      |

**Zakres:**

Możesz wybrać zakres z [tej listy etykiet](https://github.com/freeCodeCamp/freeCodeCamp/labels?q=scope).

**Opis:**

Pozostaw to krótkie (mniej niż 30 znaków) i proste, możesz dodać więcej informacji w polu opisu PR i komentarze.

Przykładami dobrych tytułów PR:

- `fix(a11y): poprawiony kontrast paska wyszukiwania`
- `feat: dodaj więcej testów do wyzwań html i css`
- `fix(api, klient): zapobiegaj błędom CORS przy składaniu formularza`
- `docs(i18n): chińskie tłumaczenie ustawień lokalnych`

## Propozycja Pull Request

1. Gdy edycje zostaną zatwierdzone, zostaniesz poproszony o utworzenie pull request na swojej stronie GitHub forka.

   ![Obraz - Porównaj monit Pull Request na GitHub](./images/github/compare-pull-request-prompt.png)

2. Domyślnie wszystkie Pull Requesty powinny być skierowane przeciwko głównemu repozytorium FreeCamp, `master`.

   Upewnij się, że twój Fork Bazowy jest ustawiony na darmowy CodeCamp/freeCodeCamp podczas podnoszenia Pull Request.

   ![Obraz - Porównywanie forków podczas wysyłania pull request](./images/github/comparing-forks-for-pull-request.png)

3. Submit the pull request from your branch to freeCodeCamp's `master` branch.

4. W treści PR znajduje się bardziej szczegółowe podsumowanie wprowadzonych zmian i dlaczego.

   - Zostaniesz zaprezentowany z szablonem Pull Request. To jest lista kontrolna, którą powinieneś był obserwować przed otwarciem pull requesta.

   - Wypełnij szczegóły zgodnie z tym, co uważasz. Informacje te zostaną sprawdzone, a recenzenci zdecydują, czy Pull Request jest zaakceptowany.

   - Jeśli PR ma zająć się istniejącym problemem GitHub, wtedy pod koniec treści opisu PR, użyj słowa kluczowego _Zamyka_ z numerem zgłoszenia, aby [automatycznie zamknąć ten problem, jeśli PR jest akceptowany i scalony](https://help.github.com/en/articles/closing-issues-using-keywords).

     > Przykład: `Zamyka #123` zamknie problem 123

5. Wskaż, czy przetestowałeś lokalną kopię witryny.

   Jest to bardzo ważne podczas wprowadzania zmian, które nie są tylko edytowane do treści tekstowych, takich jak dokumentacja lub opis wyzwania. Przykłady zmian, które wymagają lokalnych testów, to JavaScript, CSS lub HTML, które mogą zmienić funkcjonalność lub układ strony.

## Opinie na temat pull requestów

> Gratulacje! :tada: za wypełnienie PR i bardzo dziękuję za poświęcenie czasu na wniesienie wkładu.

Nasi moderatorzy teraz spojrzą na Ciebie i zostawią Ci opinię. Proszę być cierpliwy z innymi moderatorami i szanować ich czas. Wszystkie Pull Requesty są sprawdzane w odpowiednim czasie.

Jeśli potrzebujesz jakiejkolwiek pomocy, prosimy o omówienie w [rozmowach na czacie](https://gitter.im/FreeCodeCamp/Contributors), z przyjemnością Ci pomożemy.

> [!Wskazówka] Jeśli chcesz wnieść więcej pull requestów, zalecamy przeczytanie [wprowadzanie zmian i synchronizację](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally?id=making-changes-locally) wytycznych, aby uniknąć konieczności usuwania forku.

## Konflikt na pull request

Konflikty mogą powstać, ponieważ wielu współtwórców pracuje w repozytorium, a zmiany mogą przerwać Twój PR, który oczekuje na przegląd i połączenie.

Najczęściej niż nie potrzebujesz bazy danych, ponieważ zniszczymy wszystkie zobowiązania, jednakże jeśli prośba o rebazę jest tutaj o to, co powinieneś zrobić.

### Dla zwykłych poprawek błędów i funkcji

Gdy pracujesz nad zwykłymi błędami i funkcjami w naszym oddziale programistycznym ``, możesz wykonać prostą rebasę:

1. Zmień swoją kopię lokalną:

   ```console
   git checkout <pr-branch>
   git pull --rebase upstream master
   ```

2. Rozwiąż wszelkie konflikty i dodaj / edytuj commity

   ```console
   #
   git add .
   git commit -m "chole: rozwiązywanie konfliktów"

   # lub
   git add .
   git commit --change --no-edit
   ```

3. Wciśnij ponownie swoje zmiany do PR

   ```console
   git push --force początek <pr-branch>
   ```

### Nadchodzący program nauczania i funkcje

Kiedy pracujesz nad funkcjami dla naszych przyszłych gałęzi programu nauczania, `następne-*` , wykonujesz wycinek wiśniowy:

1. Upewnij się, że twój upstream jest zsynchronizowany z twoim lokalnym:

   ```console
   git checkout master
   git fetch --all --prune
   git checkout next-python-projects
   git reset --hard upstream/next-python-projects
   ```

2. Zrób kopię zapasową

   „Technologia”, zgodnie z uwagą ogólną do technologii, służąca do „rozwoju”, „produkcji” lub „użytkowania” sprzętu lub „oprogramowania” wyszczególnionych w pozycji 1B001. Usuń swoją lokalną gałąź po wykonaniu kopii zapasowej (jeśli nadal masz ją lokalnie):

      ```console
      git checkout <pr-branch-name>

      # przykład:
      # git checkout feat/add-numpy-video-question

      git checkout -b <backup-branch-name>

      # przykład:
      # git checkout -b backup-feat/add-numpy-video-question

      git branch -D <pr-branch-name>
      ```

   „Technologia”, zgodnie z uwagą ogólną do technologii, służąca do „rozwoju”, „produkcji” lub „użytkowania” sprzętu lub „oprogramowania” wyszczególnionych w pozycji 1B001. Lub tylko kopia zapasowa swojej lub gałęzi (jeżeli nie masz jej lokalnie):

      ```console
      git checkout -b <backup-branch-name> origin/<pr-branch-name>

      # przykład:
      # git checkout -b backup-feat/add-numpy-video-question origin/feat/add-numpy-video-question
      ```

4. Rozpocznij od czystego tabliczki:

   ```console
   git checkout -b <pr-branch-name> next-python-projects
   git cherry-pick <commit-hash>
   ```

5. Rozwiąż wszelkie konflikty i czyszczenie, zainstaluj testy uruchamiania

   ```console
   npm uruchom czyste

   npm ci
   npm uruchom test :curriculum --superblock=<superblock-name>

   # przykład:

   # npm uruchom test :curriculum --superblock=python-for-everybody

   ```

6. Jeśli wszystko wygląda na dobre wciśnięcie do PR

   ```console
   git push --force początek <pr-branch-name>
   ```
