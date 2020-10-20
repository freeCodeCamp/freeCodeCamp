Postępuj zgodnie z niniejszymi wytycznymi, aby skonfigurować darmowy CodeCamp lokalnie w swoim systemie. Jest to wysoce zalecane, jeśli chcesz regularnie wnosić wkład.

Dla niektórych przepływów pracy z wkładem musisz mieć darmowy CodeCamp działający lokalnie. Na przykład przeglądanie wyzwań związanych z kodowaniem lub debugowanie i naprawianie błędów w kodelu.

> [!Wskazówka] Jeśli nie jesteś zainteresowany konfiguracją darmowego CodeCamp lokalnie rozważ użycie Gitpod, darmowego środowiska dev online.
> 
> [![Otwórz w Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)
> 
> (Uruchamia gotowe do kodowania środowisko dev dla freeCodeCamp w przeglądarce.)

## Przygotuj swoją lokalną maszynę

Zacznij od instalacji wstępnego oprogramowania dla Twojego systemu operacyjnego.

Wspieramy przede wszystkim rozwój w systemach **\*nix**. Nasz personel i współpracownicy społeczności regularnie pracują z bazą kodową za pomocą narzędzi zainstalowanych na Ubuntu i macOS.

Wspieramy również Windows 10 przez WSL2, który możesz przygotować [czytając ten poradnik](/how-to-setup-wsl).

Niektórzy członkowie społeczności opracowują również na Windows 10 native z Git for Windows (Git Bash) i innymi narzędziami zainstalowanymi w Windows. W tej chwili nie mamy oficjalnego wsparcia dla takiej konfiguracji, zalecamy użycie WSL2.

**Warunki wstępne:**

| Wymagany                                                                                         | Wersja | Uwagi                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Node.js](http://nodejs.org)                                                                     | `12.x` | [Harmonogram LTS](https://github.com/nodejs/Release#release-schedule)                                                                                                                           |
| npm (jest połączone z Node)                                                                      | `6,x`  | Nie ma wydań LTS, używamy wersji dołączonej do Node LTS                                                                                                                                         |
| [Serwer Społeczności MongoDB](https://docs.mongodb.com/manual/administration/install-community/) | `3.6`  | [Notatki o wydaniu](https://docs.mongodb.com/manual/release-notes/), Uwaga: obecnie jesteśmy `3.6`, [aktualizacja jest zaplanowana](https://github.com/freeCodeCamp/freeCodeCamp/issues/18275). |

> [!DANGER] Jeśli masz inną wersję, zainstaluj zalecaną wersję. Możemy obsługiwać tylko problemy z instalacją dla zalecanych wersji. Zobacz [rozwiązywanie problemów](#troubleshooting) , aby uzyskać więcej informacji.

Jeśli Node.js jest już zainstalowany na Twoim komputerze, uruchom następujące polecenia, aby zatwierdzić wersje:

```console
węzeł -v
npm -v
```

> [!TIP] Zalecamy aktualizację do najnowszych stabilnych wydań oprogramowania wymienionego powyżej, znanego również jako wydźwiękowe wsparcie (LTS).

Po zainstalowaniu warunków wstępnych, musisz przygotować środowisko programistyczne. Jest to powszechne w wielu procesach rozwoju i będzie można to zrobić tylko raz.

**Wykonaj te kroki, aby przygotować środowisko programistyczne:**

1. Zainstaluj [Git](https://git-scm.com/) lub swój ulubiony klient Git, jeśli jeszcze tego nie zrobiłeś. Aktualizacja do najnowszej wersji; wersja, która została dołączona do Twojego systemu operacyjnego, może być przestarzała.

2. (Opcjonalne, ale zalecane) [Ustaw klucz SSH](https://help.github.com/articles/generating-an-ssh-key/) dla GitHub.

3. Zainstaluj wybrany przez siebie edytor kodu.

   Zalecamy użycie [Visual Studio Code](https://code.visualstudio.com/) lub [Atom](https://atom.io/). To wspaniały, darmowy i open source edytor kodów.

4. Skonfiguruj linting dla edytora kodu.

   Powinieneś mieć [ESLint uruchomiony w swoim edytorze](http://eslint.org/docs/user-guide/integrations.html), i podświetli wszystko, co nie jest zgodne z [darmowym przewodnikiem JavaScript Style CodeCamp'a](http://forum.freecodecamp.org/t/free-code-camp-javascript-style-guide/19121).

   > [!Wskazówka] Nie ignoruj żadnych błędów liningu. Ich celem jest **pomoc** i zapewnienie czystej i prostej ebazy kodowej.

## Forkuj repozytorium na GitHub

[Forking](https://help.github.com/articles/about-forks/) to krok, w którym otrzymasz własną kopię głównego repozytorium freeCodeCampa (vel _repo_) na GitHub.

Jest to niezbędne, ponieważ pozwala ci pracować na własnej kopii FreCodeCamp na GitHubie, lub pobrać (klonuj) repozytorium do pracy lokalnie. Później będziesz mógł poprosić o wprowadzenie zmian do głównego repozytorium z forku poprzez Pull Request (PR).

> [!TIP] Główne repozytorium na stronie `https://github.com/freeCodeCamp/freeCodeCamp` jest często nazywane repozytorium `przed`.
> 
> Twój fork na `https://github.com/YOUR_USER_NAME/freeCodeCamp` jest często nazywany repozytorium `pochodzenia`.

**Wykonaj te kroki, aby rozwidlić repozytorium `https://github.com/freeCodeCamp/freeCodeCamp`:**

1. Przejdź do repozytorium freeCodeCamp na GitHub: <https://github.com/freeCodeCamp/freeCodeCamp>

2. Kliknij przycisk "Fork" w prawym górnym rogu interfejsu ([Więcej szczegółów tutaj](https://help.github.com/articles/fork-a-repo/))

3. Po rozwinięciu repozytorium zostaniesz przeniesiony do kopii repozytorium freeCodeCamp na `https://github.com/YOUR_USER_NAME/freeCodeCamp`

<details>
   <summary>
      Jak rozwidlić FreeCamp na GitHub (zrzut ekranu)
   </summary>

   <br>
   <img src="https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/github/how-to-fork-freeCodeCamp.gif" alt="Jak rozwidlić FreeCamp na GitHub" />
</details>

## Sklonuj swój fork z GitHub

[Klonowanie](https://help.github.com/articles/cloning-a-repository/) to miejsce, w którym **pobierzesz** kopię repozytorium z `zdalnego` miejsca, które jest własnością Ciebie lub kogoś innego. W Twoim przypadku, ta zdalna lokalizacja jest twoim `forkiem` repozytorium FreeCamp, które powinno być dostępne na `https://github.com/YOUR_USER_NAME/freeCodeCamp`.

Uruchom te polecenia na lokalnym komputerze:

1. Otwórz Terminal / Polecenie / Polecenie w katalogu projektów

   _np.: `/yourprojectsdirectory/`_

2. Sklonuj swój fork darmowego CodeCamp, zastępując `YOUR_USER_NAME` nazwą użytkownika GitHub

   ```console
   [PLACEHOLDER] git clone --depth=1 https://github.com/YOUR_USER_NAME/freeCodeCamp.git
   ```

Spowoduje to pobranie całego repozytorium FreCodeCamp do katalogu Twoich projektów.

Uwaga: `--depth=1` tworzy płytki klon Twojego forka, tylko z najnowszą historią/zatwierdzeniem.

## Skonfiguruj synchronizację z nadrzędnego

Teraz, gdy pobrałeś kopię forka, musisz skonfigurować zdalny `upstream` do repozytorium nadrzędnego.

[Jak wspomniano wcześniej](#fork-the-repository-on-github), główne repozytorium jest skierowane `do repozytorium`. Twój fork nazywany `źródłowym repozytorium`.

Potrzebujesz odniesienia z lokalnego klonu do repozytorium `upstream` oprócz repozytorium `pochodzenia`. Jest to tak, że możesz synchronizować zmiany z głównego repozytorium bez konieczności wielokrotnego forkowania i klonowania.

1. Zmień katalog na nowy folder freeCodeCamp:

   ```console
   cd freeCodeCamp
   ```

2. Dodaj zdalne odniesienie do głównego repozytorium freeCodeCamp:

   ```console
   git remote add upstream https://github.com/freeCodeCamp/freeCodeCamp.git
   ```

3. Upewnij się, że konfiguracja wygląda poprawnie:

   ```console
   git zdalny -v
   ```

   Wynik powinien wyglądać w sposób następujący:

   ```console
   źródło https://github.com/YOUR_USER_NAME/freeCodeCamp.git (fetch)
   pochodzenia https://github.com/YOUR_USER_NAME/freeCodeCamp.git (push)
   na górze https://github.com/freeCodeCamp/freeCodeCamp.git (fetch)
   na górze https://github.com/freeCodeCamp/freeCodeCamp/CodeCamp.git (push)
   ```

## Uruchamianie darmowego Obozowania lokalnie

Teraz, gdy masz lokalną kopię darmowego CodeCamp, możesz postępować zgodnie z tą instrukcją, aby uruchomić ją lokalnie. Pozwoli to na:

- Podgląd edycji na stronach, które pojawiłyby się na platformie nauki.
- Prace nad kwestiami i ulepszeniami dotyczącymi interfejsu użytkownika.
- Debugowanie i naprawianie problemów z serwerami aplikacji i aplikacjami klienckimi.

Jeśli napotkasz problemy, najpierw wykonaj wyszukiwanie internetowe dla swojego problemu i sprawdź, czy odpowiedź już została udzielona. Jeśli nie można znaleźć rozwiązania, przeszukaj naszą stronę [GitHub](https://github.com/freeCodeCamp/freeCodeCamp/issues) w poszukiwaniu rozwiązania i zgłoś problem, jeśli jeszcze nie został zgłoszony.

I jak zawsze, możesz przejść do naszego [pokoju na czacie współautorów na Gitterze](https://gitter.im/FreeCodeCamp/Contributors) lub [naszego serwera Discord](https://discord.gg/pFspAhS), dla szybkich zapytań.

> [!Wskazówka] Możesz pominąć uruchomienie darmowego CodeCamp lokalnie, jeśli po prostu edytujesz pliki. Na przykład, wykonanie `rebase`lub rozwiązanie `scalania` konfliktów.
> 
> Zawsze możesz wrócić do tej części instrukcji później. Powinieneś **tylko** pominąć ten krok, jeśli nie musisz uruchamiać aplikacji na swoim komputerze.
> 
> [Pomiń wprowadzanie zmian](#making-changes-locally).

### Konfigurowanie zależności

#### Krok 1: Skonfiguruj plik zmiennych środowiskowych

Domyślne klucze API i zmienne środowiskowe są przechowywane w pliku `sample.env`. Ten plik musi zostać skopiowany do nowego pliku o nazwie `.env` , który jest dostępny dynamicznie podczas etapu instalacji.

```console
# Utwórz kopię "sample.env" i nazwij ją ".env".
# Wypełnij go niezbędnymi kluczami API i sekretami:

# macOS / Linux
próbka cp. nv .env

# Windows
skopiuj przykład.env .env
```

Klucze w pliku `.env` _nie są wymagane_ do zmiany aby uruchomić aplikację lokalnie. Możesz zostawić wartości domyślne skopiowane z `sample.env` jako.

> [!Wskazówka] Pamiętaj, jeśli chcesz korzystać z usług takich jak Auth0 lub Algolia, musisz zdobyć własne klucze API dla tych usług i odpowiednio edytować wpisy w `. nv` plik.

#### Krok 2: Instalacja zależności

Ten krok zainstaluje zależności wymagane do uruchomienia aplikacji:

```console
npm ci
```

#### Krok 3: Uruchom MongoDB i seed bazy danych

Zanim będziesz mógł uruchomić aplikację lokalnie, musisz uruchomić usługę MongoDB.

> [!NOTE] chyba że MongoDB działa w konfiguracji innej niż domyślna, adres URL przechowywany jako wartość `MONGOHQ_URL` w `. Plik nv` powinien działać dobrze. Jeśli używasz konfiguracji niestandardowej, zmodyfikuj tę wartość w razie potrzeby.

Uruchom serwer MongoDB w osobnym terminalu:

- Na macOS & Ubuntu:

  ```console
  mongod
  ```

- W systemie Windows, musisz określić pełną ścieżkę do pliku binarnego `mongod`

  ```console
  "C:\Program Files\MongoDB\Server\3.6\bin\mongod"
  ```

  Upewnij się, że zastąpić `3.6` wersją, którą zainstalowałeś

> [!Wskazówka] Możesz uniknąć konieczności uruchamiania MongoDB za każdym razem instalując go jako usługę w tle. Możesz [dowiedzieć się więcej o tym w swojej dokumentacji dla systemu operacyjnego](https://docs.mongodb.com/manual/administration/install-community/)

Następnie, zacznijmy seedować bazę danych. W tym kroku uruchamiamy poniższe polecenie, które wypełnia serwer MongoDB niektórymi początkowymi zestawami danych, które są wymagane przez usługi. Obejmują one między innymi kilka programów.

```console
npm Uruchom seed
```

#### Krok 4: Uruchom aplikację klienta freeCodeCamp i serwer API

Możesz teraz uruchomić serwer API i aplikacje klientów.

```console
npm uruchom
```

Ta pojedyncza komenda wystrzeli wszystkie usługi, w tym serwer API i aplikacje klienckie dostępne do pracy.

> [!UWAGA] Kiedy gotowe, otwórz przeglądarkę internetową i **odwiedź <http://localhost:8000>**. Jeśli aplikacja się ładuje, gratulacje - wszystko gotowe! Masz teraz kopię platformy edukacyjnej FreeCamp, działającej na lokalnym komputerze.

> [!TIP] Serwer API obsługuje API na `http://localhost:3000`. Aplikacja Gatsby obsługuje aplikację klienta na `http://localhost:8000`

> Jeśli odwiedzisz <http://localhost:3000/explorer> powinieneś zobaczyć dostępne API.

## Zaloguj się przy użyciu lokalnego użytkownika

Twoja lokalna konfiguracja automatycznie wypełnia lokalnego użytkownika w bazie danych. Kliknięcie przycisku `Zaloguj się` automatycznie uwierzytelni Cię w lokalnej aplikacji.

Dostęp do strony portfolio użytkownika jest jednak nieco skomplikowany. W fazie rozwoju, Gatsby przejmuje obsługę stron po stronie klienta, a zatem otrzymasz stronę `404` dla portfolio użytkownika podczas pracy lokalnie.

Po prostu kliknięcie przycisku **"Podgląd niestandardowej strony 404** przeniesie Cię na poprawną stronę.

<details>
   <summary>
      Jak zalogować się podczas pracy lokalnie (zrzut ekranu)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/29990697/71541249-f63cdf00-2923-11ea-8a85-cefb6f9c9977.gif" alt="Jak zalogować się podczas pracy lokalnie" />
</details>

## Dokonywanie zmian lokalnie

Możesz teraz wprowadzić zmiany do plików i zatwierdzić zmiany do lokalnego klonu forku.

Wykonaj następujące kroki:

1. Sprawdź, czy jesteś na gałęzi `głównej`:

   ```console
   git status
   ```

   Powinieneś otrzymać dane wyjściowe takie jak:

   ```console
   W gałęzi
   Twoja gałąź jest aktualna z 'origin/master'.

   nic do zatwierdzenia, czyszczenie katalogu roboczego
   ```

   Jeśli nie jesteś w głównym lub Twój katalog roboczy nie jest czysty, rozwiąż zaległe pliki/commity i zamówienie `główny`:

   ```console
   Główny zamówiony git
   ```

2. Synchronizuj najnowsze zmiany z gałęzi FreCodeCamp przed `głównym` do swojej lokalnej gałęzi głównej:

   > [!OSTRZEŻENIE] Jeśli masz jakieś zaległe Pull Requesty, które wykonałeś z gałęzi `główny` fork, stracisz je na końcu tego kroku.
   > 
   > Przed wykonaniem tego kroku powinieneś upewnić się, że pull request jest scalony przez moderatora. Aby uniknąć tego scenariusza, powinieneś **zawsze** pracować nad gałęzią inną niż `master`.

   Ten krok **zsynchronizuje najnowsze zmiany** z głównego repozytorium freeCodeCamp. Ważne jest, aby przebazować swoją gałąź na najnowszym `upstream/master` tak często, jak to możliwe, aby uniknąć konfliktów później.

   Zaktualizuj swoją lokalną kopię repozytorium FreCodeCamp na upstream:

   ```console
   git pobierz w górę
   ```

   Trudno zresetować swoją główną gałąź za pomocą magisterskiego darmowego CodeCamp:

   ```console
   git reset --hard upstream/master
   ```

   Wrzuć swoją główną gałąź do swojego pochodzenia, aby mieć czystą historię na forku na GitHub:

   ```console
   Główny wyjście git --force
   ```

   Możesz sprawdzić poprawność aktualnego głównego pasującego do górnego/głównego, wykonując różnicę:

   ```console
   diff git górny/główny
   ```

   Wynikające z tego wyniki powinny być puste.

3. Utwórz nowy oddział:

   Praca nad osobną gałąź dla każdego problemu pomaga zachować kopię Twojego lokalnego utworu w czystości. Nigdy nie powinieneś pracować nad `mistrzem`. To zabrudzi twoją kopię darmowego CodeCamp i być może będziesz musiał zacząć od świeżego klonu lub widelca.

   Sprawdź, czy jesteś na `master` jak wyjaśniono wcześniej, i oddziel się stąd:

   ```console
   git checkout -b fix/update-guide-for-xyz
   ```

   Nazwa gałęzi powinna zaczynać się od `fix/`, `feat/`, `docs/`, itd. Unikaj używania numerów zgłoszeń w gałęziach. Pozostaw je krótkie, sensowne i wyjątkowe.

   Przykłady dobrych nazw oddziałów to:

   ```md
   fix/update-challenges-for-react
   fix/update-guide-for-html-css
   fix/platform-bug-sign-in-issues
   feat/add-guide-article-for-javascript
   translate/add-spanish-basic-html
   ```

4. Edytuj strony i pracuj nad kodem w swoim ulubionym edytorze tekstowym.

5. Gdy będziesz zadowolony ze zmian, powinieneś opcjonalnie uruchomić darmowy CodeCamp lokalnie, aby wyświetlić zmiany.

6. Upewnij się, że naprawiłeś błędy i sprawdź formatowanie zmian.

7. Sprawdź i potwierdź aktualizowane pliki:

   ```console
   git status
   ```

   To powinno pokazywać listę `niezłożonych` plików, które edytowałeś.

   ```console
   Na oddziale feat/dokumentacja
   Twoja gałąź jest aktualna z 'upstream/feat/documentation'.

   Zmiany do zatwierdzenia:
   (użyj "git reset HEAD <file>..." aby cofnąć)

       zmodyfikowany: CONTRIBUTING.md
       zmodyfikowany: docs/README.md
       zmodyfikowany: docs/how-to-setup-freecodecamp-lokcally.md
       zmodyfikowany: docs/how-to-work-on-guide-articles.md
   ```

8. Etapy zmian i zgłoś zatwierdzenie:

   W tym kroku należy oznaczać tylko pliki, które edytowałeś lub dodałeś. Możesz wykonać resetowanie i rozwiązywanie plików, których nie zamierzasz zmienić, jeśli to konieczne.

   ```console
   git add ścieżkę/do/my/changed/file.ext
   ```

   Lub możesz dodać wszystkie `niezłożone` pliki do obszaru testowania:

   ```console
   git dodaj .
   ```

   Tylko pliki, które zostały przeniesione do obszaru testowego, zostaną dodane po dokonaniu zatwierdzenia.

   ```console
   git status
   ```

   Wyjście:

   ```console
   Na oddziale feat/dokumentacja
   Twoja gałąź jest aktualna z 'upstream/feat/documentation'.

   d
       zmodyfikowany: docs/README.md
       zmodyfikowany: docs/how-to-setup-freecodecamp-lokalnie. d
       zmodyfikowany: docs/how-to-work-on-guide-articles.md
...
   ```

   Teraz możesz zatwierdzić swoje zmiany za pomocą krótkiej wiadomości takiej jak:

   ```console
   git commit -m "fix: mój krótki komunikat zatwierdzenia"
   ```

   Niektóre przykłady:

   ```md
   Naprawa: aktualizuj artykuł przewodnika dla Java - pętla
   feat: dodaj artykuł przewodnika dla umiejętności alexa
   ```

   Opcjonalne:

   Zalecamy wysłanie standardowego komunikatu. Jest to dobra praktyka, którą zobaczysz w niektórych popularnych repozytoriach Open Source. Jako programista zachęca Cię to do stosowania standardowych praktyk.

   Przykładami standardowych komunikatów o zobowiązaniach są:

   ```md
   Naprawa: zaktualizuj artykuł z poradnika HTML
   : aktualizuj skrypty kompilacji dla pociągów CI
   : dodaj artykuł dla podciągania JavaScript
   docs: aktualizuj wytyczne dotyczące przekazywania danych
   ```

   Zachowaj te krótkie i nie więcej niż 50 znaków. Zawsze możesz dodać dodatkowe informacje w opisie wiadomości zatwierdzenia.

   To nie wymaga dodatkowego czasu niż niekonwencjonalna wiadomość taka jak "plik aktualizacji" lub "dodaj index.md"

   Możesz dowiedzieć się więcej o tym, dlaczego powinieneś używać tradycyjnych commitów [tutaj](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. Jeśli zdajesz sobie sprawę, że musisz edytować plik lub zaktualizować wiadomość zatwierdzenia po dokonaniu zatwierdzenia, możesz to zrobić po edycji plików z:

   ```console
   git commit --change
   ```

   To otworzy domyślny edytor tekstowy, taki jak `nano` lub `vi` , gdzie możesz edytować tytuł wiadomości zatwierdzenia i dodawać/edytować opis.

10. Następnie możesz wypchnąć zmiany na fork:

    ```console
    git push branch/name-here
    ```

## Propozycja Pull Request (PR)

Po zatwierdzeniu zmian sprawdź [, jak otworzyć Pull Request](how-to-open-a-pull-request.md).

## Odwołanie do szybkich poleceń

Szybkie odwołanie do poleceń, których potrzebujesz podczas pracy lokalnej.

| polecenie                                                                | opis                                                                                      |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `npm ci`                                                                 | Instalacje / ponownie zainstaluj wszystkie zależności i bootstraps różnych usług.         |
| `npm Uruchom seed`                                                       | Analizuje wszystkie pliki markdown wyzwania i wstawia je do MongoDB.                      |
| `npm uruchom`                                                            | Uruchamia freeCodeCamp API Server i Aplikacje Klienta.                                    |
| `test npm`                                                               | Uruchom wszystkie testy JS w systemie, w tym testy klienta, serwera, krzemienia i wyzwań. |
| `npm Uruchom test :client`                                               | Uruchom zestaw testowy klienta.                                                           |
| `npm test uruchomienia: program nauczania`                               | Wykonaj test programu nauczania.                                                          |
| `npm wykonanie testu: curriculum --block='Podstawowy HTML i HTML5'`      | Przetestuj konkretny blok.                                                                |
| `npm test uruchomienia: curriculum --superblock='responsive-web-design'` | Sprawdź konkretny SuperBlock.                                                             |
| `npm run test-program nauczania pełnego-wyjścia`                         | Uruchom zestaw testowy programu nauczania, bez porażki po pierwszym błędzie               |
| `npm uruchom test:server`                                                | Uruchom zestaw testowy serwera.                                                           |
| `npm uruchom e2e`                                                        | Uruchom koniec Cypress, aby zakończyć testy.                                              |
| `npm uruchom czyste`                                                     | Odinstalowuje wszystkie zależności i czyści pamięć podręczną.                             |

## Rozwiązywanie problemów

### Problemy z instalacją zalecanych warunków wstępnych

Regularnie opracowujemy najnowsze lub najpopularniejsze systemy operacyjne, takie jak macOS 10.15 lub później, Ubuntu 18.04 lub później, Windows 10 (z WSL2).

Zaleca się zbadanie Twojego konkretnego problemu dotyczącego zasobów takich jak Google, Stack Overflow i Stack Exchange. Istnieje duża szansa, że ktoś stanął w obliczu tego samego problemu i istnieje już odpowiedź na pańskie konkretne pytanie.

Jeśli korzystasz z innego systemu operacyjnego i/lub nadal występują problemy, zobacz [uzyskaj pomoc](#getting-help).

> [!OSTRZEŻENIE]
> 
> Proszę unikać tworzenia problemów na GitHub dla wymaganych problemów. Nie wchodzą one w zakres tego projektu.

### Problemy z interfejsem użytkownika, czcionki, błędy konstrukcyjne itp.

Jeśli napotkasz problemy z interfejsem użytkownika, czcionki lub widzisz błędy kompilacji, czyszczenie może być użyteczne:

```console
npm uruchom czysty
npm ci
npm run seed
npm run develop;
```

LUB

Użyj skrótu

```
npm uruchom czysto i rozwiń
```

Jeśli nadal napotkasz problemy z budową, zaleca się sprzątanie obszaru roboczego.

Użyj `git clean` w trybie interative mode:

```
git czysty -ifdX
```

<details>
   <summary>
      Jak czyścić nieśledzone pliki git (zrzut ekranu)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Jak czyścić nieśledzone pliki git" />
</details>

### Problemy z API, Login, Przedłożenia Wyzwań itp.

Jeśli nie możesz się zalogować, zobaczysz baner z komunikatem o błędzie, że zostanie zgłoszony do freeCodeCamp, sprawdź, czy twój port lokalny `3000` nie jest używany przez inny program.

**Na systemie Linux / macOS / WSL na systemie Windows - z terminalu:**

```console
netstat -ab | grep "3000"

tcp4 0 0.0.0.0:3000 DESKTOP LISTEN
```

**Na Windows - z podwyższonego PowerShell:**

```powershell
netstat -ab | Select-String "3000"

TCP 0.0.0:3000 DESKTOP LISTENING
```

### Problemy z instalacją zależności

Jeśli pojawią się błędy podczas instalowania zależności, upewnij się, że nie jesteś w ograniczonej sieci lub Twoje ustawienia zapory nie uniemożliwiają dostępu do zasobów.

Pierwsza konfiguracja może zająć chwilę w zależności od przepustowości sieci. Bądź cierpliwy, a jeśli nadal utkniesz, zaleciliśmy użycie GitPoda zamiast konfiguracji offline.

## Uzyskanie pomocy

Jeśli utkniesz i potrzebujesz pomocy, daj nam znać, pytając do kategorii ["Współtwórcy" na naszym forum](https://forum.freecodecamp.org/c/contributors) lub ["Czat room](https://gitter.im/FreeCodeCamp/Contributors) na Gitterze.

Może wystąpić błąd w konsoli przeglądarki lub w Bash / Terminal / Linie poleceń, który pomoże zidentyfikować problem. Podaj ten komunikat o błędzie w opisie problemu, aby inni mogli łatwiej zidentyfikować problem i pomóc w znalezieniu rozwiązania.
