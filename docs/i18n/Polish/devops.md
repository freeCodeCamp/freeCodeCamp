# Operacje dla programistów na darmowym CodeCamp.org

Ten przewodnik pomoże Ci zrozumieć nasz stos infrastruktury i sposób utrzymania naszych platform. Chociaż niniejszy przewodnik nie zawiera wyczerpujących szczegółów dotyczących wszystkich operacji, może on być wykorzystany jako punkt odniesienia dla Państwa zrozumienia systemów.

Wiedzmy, jeśli masz opinie lub zapytania i z przyjemnością wyjaśnimy.

## W jaki sposób tworzymy, przetestowujemy i wdrażamy bazę kodową?

This repository is continuously built, tested and deployed to **separate sets of infrastructure (Servers, Databases, CDNs, etc.)**.

Obejmuje to trzy etapy, które należy wykonać kolejno:

1. Nowe zmiany (zarówno poprawki jak i funkcje) są scalane w naszym głównym oddziale rozwoju (`master`) za pomocą pull requestów.
2. Zmiany te przeprowadza się poprzez szereg zautomatyzowanych testów.
3. Po przejściu testów wydamy zmiany (lub w razie potrzeby zaktualizuje) w celu wdrożenia naszej infrastruktury.

#### Budowanie ebazy kodowej - mapowanie gałęzi Git do wdrożeń.

Zwykle [`główny`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master) (domyślna gałąź rozwojowa) jest scalona w [`gałąź`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) raz dziennie i jest uwalniana do odizolowanej infrastruktury.

To jest wydanie pośrednie dla naszych programistów i wolontariuszy. Jest ona również znana jako "etap" lub "beta".

Jest to identyczne z naszym żywym środowiskiem produkcyjnym w `freeCodeCamp.org`, inne niż przy użyciu oddzielnego zestawu baz danych, serwerów, proxy internetowych itp. Izolacja ta pozwala nam przetestować bieżący rozwój i cechy w scenariuszu „produkcji”, nie wpływając na zwykłych użytkowników głównych platform FreCodeCamp.org.

Gdy zespół deweloperów [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) jest zadowolony ze zmian na platformie testowej, te zmiany są przenoszone co kilka dni do gałęzi [`aktualnej produkcji`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current).

To jest ostateczna wersja, która przenosi zmiany na nasze platformy produkcyjne na freeCodeCamp.org.

#### Testowanie zmian - Testowanie integracji i akceptacji użytkownika.

Stosujemy różne poziomy integracji i testów akceptacji w celu sprawdzenia jakości kodu. Wszystkie nasze testy są wykonywane przez oprogramowanie takie jak [Travis CI](https://travis-ci.org/freeCodeCamp/freeCodeCamp) i [Azure Ruropeline](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp).

Mamy testy jednostkowe do testowania naszych rozwiązań wyzwań, interfejsów API serwera i użytkowników klientów. Pomagają nam one przetestować integrację pomiędzy różnymi komponentami.

> [!NOTE] Jesteśmy również w trakcie pisania testów użytkowników końcowych, które pomogą w replikowaniu scenariuszy prawdziwego świata, takich jak aktualizacja wiadomości e-mail lub wywołanie połączenia do API lub usług innych firm.

Łącznie te testy pomagają zapobiec powtórzeniu się problemów i upewnić się, że nie wprowadzimy błędu podczas pracy nad innym błędem lub funkcją.

#### Wdrażanie zmian - Przesyłanie zmian na serwery.

Skonfigurowaliśmy oprogramowanie do ciągłej dostawy, aby wprowadzać zmiany do naszych serwerów rozwojowych i produkcyjnych.

Po przepychaniu zmian do chronionych gałęzi uwalniania automatycznie uruchamia się budowę rurociągu dla gałęzi. Budowa rurociągów jest odpowiedzialna za budowę artefaktów i przechowywanie ich w chłodni do późniejszego wykorzystania.

Budowa rurociągu uruchamia odpowiedni rurociąg wydania, jeśli zakończy się pomyślnym uruchomieniem. Rurociągi wydania są odpowiedzialne za zbieranie artefaktów budowy, przenoszenie ich na serwery i przechodzenie na żywo.

Status kompilacji i wydań jest [dostępny tutaj](#build-test-and-deployment-status).

## Uruchamianie budowy, testowania i rozmieszczenia.

Obecnie tylko członkowie zespołu deweloperskiego mogą przepychać do gałęzi produkcyjnych. Zmiany w `produkcji*` gałęzie mogą lądować tylko poprzez szybkie połączenie w przód do [`przed`](https://github.com/freeCodeCamp/freeCodeCamp).

> [!UWAGA] W nadchodzących dniach poprawilibyśmy ten przepływ do wykonania poprzez pull-requests, aby poprawić zarządzanie dostępem i przejrzystość.

### Przesyłanie zmian do aplikacji testowych.

1. Skonfiguruj pilota poprawnie.

   ```sh
   git zdalny -v
   ```

   **Wyniki:**

   ```
   origingit@github.com:raisedadead/freeCodeCamp.git (fetch)
   origingit@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (fetch)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Upewnij się, że Twoja gałąź `` jest niesamowita i w synchronizacji z upstreamem.

   ```sh
   git checkout master
   git fetch --all --prune
   git reset --hard upstream/master
   ```

3. Sprawdź, czy Travis CI jest przekazywany na gałęzi `główny` dla upstream.

   Testy [ciągłej integracji](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) powinny być zielone i PASSING dla `głównego` gałęzi.

    <details> <summary> Sprawdzanie statusu w Travis CI (zrzut ekranu) </summary>
      <br>
      ![Sprawdź status budowy w Travis CI](https://raw.githubusercontent.com/freeCodeCamp/freeCodeCamp/master/docs/images/devops/travis-build.png)
    </details>

   Jeśli to się nie powiedzie, powinieneś zatrzymać i zbadać błędy.

4. Potwierdź, że możesz utworzyć repozytorium lokalnie.

   ```
   npm uruchom czysto i rozwiń
   ```

5. Przenieś zmiany z `mistrza` do `etapu produkcji` poprzez szybkie scalanie

   ```
   git checkout production-staging
   git merge master
   git push upstream
   ```

   > [!NOTE] Nie będziesz w stanie wymusić wypchnięcia i jeśli przepisałeś historię w każdym razie, te polecenia będą się błędne.
   > 
   > Jeśli tak się stanie, być może zrobiłeś coś niepoprawnego i po prostu powinieneś zacząć od nowa.

Powyższe kroki automatycznie uruchomi się na rurociągu budowy dla gałęzi `etap produkcji`. Gdy kompilacja zostanie zakończona, artefakty są zapisywane jako pliki `.zip` w chłodni do pobrania i wykorzystania później.

Rurociąg uwalniania jest uruchamiany automatycznie, gdy nowy artefakt jest dostępny z podłączonego rurociągu budowy. Dla platform testowych ten proces nie wymaga ręcznego zatwierdzania, a artefakty są wysyłane na serwery CDN i API klienta.

> [!TIP|label:Estimates] Zwykle kompilacja trwa ~20-25 minut, a następnie uruchomienie wydania, które zajmuje ~15-20 minut dla klienta, i ~5-10 minut aby API było dostępne na żywo. Od wypychania kodu do bycia na platformach do testowania, cały proces zajmuje łącznie **~35-45 minut**.

### Ładowanie zmian w aplikacjach produkcyjnych.

Proces ten jest w większości taki sam jak platformy testowe, z kilkoma dodatkowymi kontrolami. Chodzi o to, aby mieć pewność, że nie niszczymy nic na wolnym CodeCamp.org, który widzi setki użytkowników z niego korzystających w każdej chwili.

| NIE wykonuj tych poleceń, chyba że sprawdziłeś czy wszystko działa na platformie testowej. Nie powinieneś omijać ani pomijać żadnych testów testowania przed kontynuowaniem testu. |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                    |


1. Upewnij się, że Twoja gałąź `stopniowania produkcji` jest niesamowita i w trakcie synchronizacji z górnym biegiem czasu.

   ```sh
   git checkout production staging
   git fetch --all --prune
   git reset --hard upstream/production-staging
   ```

2. Przenieś zmiany z `etapu produkcji` na `prąd produkcyjny` poprzez szybkie połączenie w przód

   ```
   git checkout production-current
   git scalge production-staging
   git push upstream
   ```

   > [!NOTE] Nie będziesz w stanie wymusić wypchnięcia i jeśli przepisałeś historię w każdym razie, te polecenia będą się błędne.
   > 
   > Jeśli tak się stanie, być może zrobiłeś coś niepoprawnego i po prostu powinieneś zacząć od nowa.

Powyższe kroki automatycznie uruchomi się na rurociągu budowy dla gałęzi `prądu produkcyjnego`. Gdy budowniczy artefakt będzie gotowy, uruchomi on proces uwalniania.

> [!TIP|label:Estimates] Zwykle kompilacja trwa ~20-25 minut.

**Dodatkowe kroki dla działań kadrowych**

Jeden z uruchomień wydania jest uruchomiony, członkowie zespołu deweloperów otrzymają automatyczny ręczny e-mail z interwencją. Mogą one _zatwierdzić_ lub _odrzucić_ uruchomienie wydania.

Jeżeli zmiany działają ładnie i zostały przetestowane na platformie testowej, można je zatwierdzić. Homologacja musi zostać udzielona w ciągu 4 godzin od uruchomienia zwolnienia, zanim zostanie automatycznie odrzucona. Administracja może uruchomić ponownie uruchomienie ręcznie dla odrzuconych uruchomień, lub poczekać na następny cykl zwolnienia.

Dla personelu:

| Sprawdź swój adres e-mail, aby uzyskać bezpośredni link lub [przejść do panelu wydania](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) po zakończeniu kompilacji. |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                  |


Gdy jeden z członków personelu zatwierdzi wydanie, rurociąg przepycha zmiany na żywo na serwery CDN i API freeCodeCamp.org. Zwykle zajmują około 15-20 minut dla klienta i około 5 minut dla serwerów API dostępnych na żywo.

> [!TIP|label:Estimates] Uruchamianie wydania zajmuje zazwyczaj ~15-20 minut dla każdej instancji klienta i ~5-10 minut dla każdej instancji API, aby była dostępna na żywo. Od wypychania kodu do życia na platformach produkcyjnych cały proces zajmuje łącznie **~90-120 min** (nie licząc czasu oczekiwania na zatwierdzenie personelu).

## Stan budowy, testowania i wdrożenia

Oto bieżący test, kompilacja i stan rozmieszczenia bazy.

| Typ                 | Oddział                                                                                    | Status                                                                                                                                                                                                                                                   | Pulpit                                                                                     |
|:------------------- |:------------------------------------------------------------------------------------------ |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------ |
| CI Testy            | [`mistrz`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master)                       | ![Status kompilacji Travis CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=master)                                                                                                                                                        | [Przejdź do panelu stanu](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| CI Testy            | [`etapy produkcji`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  | ![Status kompilacji Travis CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-staging)                                                                                                                                            | [Przejdź do panelu stanu](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Zbuduj rurociąg     | [`etapy produkcji`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  | [![Status kompilacji](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-dev-ci?branchName=production-staging)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=15&branchName=production-staging) | [Przejdź do panelu stanu](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Rurociąg uwolnienia | [`etapy produkcji`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging)  |                                                                                                                                                                                                                                                          | [Przejdź do panelu stanu](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |
| CI Testy            | [`prąd produkcyjny`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current) | ![Status kompilacji Travis CI](https://travis-ci.com/freeCodeCamp/freeCodeCamp.svg?branch=production-current)                                                                                                                                            | [Przejdź do panelu stanu](https://travis-ci.com/github/freeCodeCamp/freeCodeCamp/branches) |
| Zbuduj rurociąg     | [`prąd produkcyjny`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) | [![Status kompilacji](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/dot-org-ci?branchName=production-current)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build/latest?definitionId=17&branchName=production-current) | [Przejdź do panelu stanu](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build)      |
| Rurociąg uwolnienia | [`prąd produkcyjny`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) |                                                                                                                                                                                                                                                          | [Przejdź do panelu stanu](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release)    |

## Wczesny dostęp i testy beta

Witamy w przetestowaniu tych wydań w trybie **"publicznego beta testowania"** i uzyskujemy szybki dostęp do nadchodzących funkcji platformy. Czasami te funkcje/zmiany są określane jako **następne, beta, etap,** itd. wymiennie.

Twój wkład poprzez informacje zwrotne i raporty o błędach pomoże nam stworzyć platformy produkcyjne na `freeCodeCamp. rg` bardziej **odporny**, **spójny** i **stabilny** dla wszystkich.

Dziękujemy za zgłaszanie błędów, które napotkasz i pomoc w ulepszeniu freeCodeCamp.org. Jesteś skalisty!

### Identyfikacja przyszłej wersji platform

Obecnie publiczna wersja beta testowa jest dostępna na stronie:

<h1 align="center"><a href='https://www.freecodecamp.dev' _target='blank'>dev</a></h1>

> [!NOTE] Nazwa domeny jest inna niż **`freeCodeCamp.org`**. Ma to na celu zapobieganie indeksowaniu wyszukiwarek i unikanie dezorientacji dla regularnych użytkowników platformy.

### Identyfikacja obecnej wersji platform

**Obecna wersja platformy jest zawsze dostępna pod adresem [`freeCodeCamp.org`](https://www.freecodecamp.org).**

Zespół dev-team scala zmiany z gałęzi `produkcyjnej` na `produkcję, prąd` po ich wydaniu. Najlepszym zatwierdzeniem powinno być to, co widzisz na żywo na stronie.

Możesz zidentyfikować dokładną wersję, odwiedzając dzienniki budowy i wdrożenia dostępne w sekcji statusu. Alternatywnie możesz również wypchnąć nas w [kontrybucji na czacie](https://gitter.im/FreeCodeCamp/Contributors) w celu potwierdzenia.

### Znane ograniczenia

Istnieją pewne znane ograniczenia i kompromisy podczas używania wersji beta platformy.

- #### Wszystkie dane / osobisty postęp na tych platformach beta `NIE zostanie zapisany ani przeniesiony` do produkcji.

  **Użytkownicy wersji beta będą mieli oddzielne konto od produkcji.** Wersja beta używa fizycznie oddzielnej bazy danych od produkcji. Daje nam to możliwość zapobiegania przypadkowej utracie danych lub zmianom. Zespół deweloperski może w razie potrzeby oczyścić bazę danych w tej wersji beta.

- #### Nie ma gwarancji dotyczących czasu pracy i niezawodności platform beta.

  Przewiduje się, że stosowanie będzie częste i w przypadku szybkich iteracji, czasami wielokrotnych razy dziennie. W rezultacie pojawi się nieoczekiwany czas przestoju lub uszkodzona funkcjonalność wersji beta.

- #### Nie wysyłaj regularnych użytkowników na tę witrynę w celu potwierdzenia naprawienia

  Witryna beta jest i zawsze wspierała rozwój lokalny i testowanie, nic innego. Nie jest to obietnica co nadchodzi, ale gwiazdka tego, co się sprawdza.

- #### Strona znaku może wyglądać inaczej niż produkcja

   W Auth0 używamy lokatora testowego dla freecodecamp.dev i dlatego nie mają możliwości ustawiania domeny niestandardowej. To sprawia, że wszystkie wywołania zwrotne przekierowania i strona logowania pojawiają się w domenie domyślnej, takiej jak: `https://freecodecamp-dev.auth0.com/`. Nie ma to wpływu na funkcjonalność tak blisko produkcji, jak to możliwe.

## Kwestie związane ze sprawozdawczością i pozostawienie opinii

Proszę otworzyć nowe problemy do dyskusji i zgłaszania błędów. Możesz oznaczyć je jako **[`wydanie: next/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** dla triage'u.

Możesz wysłać e-mail do `dev[at]freecodecamp.org` jeśli masz jakieś zapytania. Ponieważ zawsze wszystkie luki w zabezpieczeniach powinny być zgłaszane do `zabezpieczeń[at]freecodecamp.org` zamiast publicznego trackera i forum.
