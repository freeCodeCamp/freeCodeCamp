# Developer Operations at freeCodeCamp.org

Dziękujemy za zainteresowanie się tym, jak robimy DevOps dla platformy na freeCodeCamp.org.

Staraliśmy się, aby język w tym przewodniku był jak najprostszy dla wszystkich. Znaleźć możesz tutaj jednak techniczny żargon. Nie jest to wyczerpujący przewodnik po wszystkich operacjach i ma być wykorzystywany tylko jako punkt odniesienia dla zrozumienia systemów.

## Jak budujemy i wdrażamy bazę danych?

Nieprzerwanie budujemy i wdrażamy [`master`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master), nasz domyślny dział rozwoju na osobnym zestawie serwerów**.

Zazwyczaj gałąź `master` jest łączona z gałęzią [`produkcyjny-stage`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-staging) raz dziennie i wydawana w izolowanej infrastrukturze. Nazywamy to naszą aplikacją "staging/beta".

Jest ona identyczna z naszym środowiskiem produkcyjnym w `freeCodeCamp.org`, innym niż wykorzystującym osobny zestaw baz danych, serwerów, web-proxy, itp. Ta izolacja pozwala nam testować ciągły rozwój i funkcje w scenariuszu "production like", bez wpływu na zwykłych użytkowników platform freeCodeCamp.org.

Gdy tylko zespół programistów [`@freeCodeCamp/dev-team`](https://github.com/orgs/freeCodeCamp/teams/dev-team/members) jest zadowolony ze zmian w aplikacji inscenizacyjnej, zmiany te są przenoszone co kilka dni do środowiska [`production-current`](https://github.com/freeCodeCamp/freeCodeCamp/tree/production-current). Następnie wydajemy zmiany w naszych platformach na żywo na freeCodeCamp.org.

Stosujemy różne poziomy testów integracyjnych i akceptacyjnych, aby sprawdzić jakość kodu. Wszystkie nasze testy są wykonywane za pomocą oprogramowania, takiego jak Travis i Azure Pipelines. Niektóre z tych zautomatyzowanych, czyli po przeniesieniu zmian do odpowiedniego oddziału, są budowane i wdrażane na platformach.

Zapraszamy do przetestowania tych wydań w trybie **"public beta testing "** i uzyskania wczesnego dostępu do nadchodzących funkcji na platformach. Czasami te funkcje/zmiany są nazywane **następnymi, beta, etapami, ** itd. zamiennie.

Twój wkład poprzez opinie i raporty o wydaniach pomoże nam uczynić platformy produkcyjne na `freeCodeCamp.org` bardziej **odpornymi**, **zgodnymi** i **stabilnymi** dla każdego.

Dziękujemy Ci za zgłaszanie błędów, które napotykasz, pomagasz w ten sposób w ulepszaniu freeCodeCamp.org. Rządzisz!

## Identyfikacja nadchodzącej wersji platformy

Nazwa domeny będzie inna niż **`freeCodeCamp.org`**. Obecnie ta publiczna wersja beta testowa jest dostępna na stronie internetowej:

<h3 align="center"><a href='https://www.freecodecamp.dev' _target='blank'><code>www.freecodecamp.dev</code></a></h4>>

Zespół dev-team łączy zmiany z gałęzi `master` do `production-stage` gdy tylko je wypuszczą. Zazwyczaj górny commit powinien być tym, co widzisz na żywo na stronie. Możesz określić dokładną wersję wdrożonej wersji odwiedzając dzienniki budowy i wdrażania dostępne poniżej w sekcji status.

## Identyfikacja aktualnej wersji platformy

**Aktualna wersja platformy jest zawsze dostępna na stronie [`freeCodeCamp.org`](https://www.freecodecamp.org).**

Zespół dev-team łączy zmiany z gałęzi `production-stage` na `production-current`, gdy tylko je wypuszczą. Górne commit powinno być to, co widzisz na żywo na stronie. Możesz określić dokładną wersję wdrożonej wersji, odwiedzając dzienniki budowy i wdrażania dostępne poniżej w sekcji statusu.

## Status budowania i wdrażania

Używamy Azure Pipelines i innego oprogramowania CI (Travis, GitHub Actions) do ciągłego testowania i wdrażania naszych aplikacji.

#### Wyzwalanie budowy

Obecnie tylko zespół programistów może przesuwać się do oddziałów produkcyjnych z powodu zautomatyzowanego wdrażania na żywo. Zmiany w oddziałach `production-*` mogą wylądować tylko poprzez szybkie łączenie się z [`upstream`](https://github.com/freeCodeCamp/freeCodeCamp).

> Uwaga: W nadchodzących dniach usprawnimy ten przepływ, który można osiągnąć dzięki prośbom o wyciągnięcie, w celu lepszego zarządzania dostępem i przejrzystości.

1. Skonfiguruj poprawnie swoje piloty.

   `````sh
   freeCodeCamp on master jest 📦 v0.0.1 poprzez ⬢ v10.16.0
   ❯ git remote -v
   origin git@github.com:raisedadead/freeCodeCamp.git (aport)
   origin git@github.com:raisedadead/freeCodeCamp.git (push)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (aport)
   upstream git@github.com:freeCodeCamp/freeCodeCamp.git (push)
   ```

2. Upewnij się, że twój mistrz jest nieskazitelnie czysty i zsynchronizowany z prądem.

   ````sh
   git checkout master
   git fetch --all --prune -all --prune
   git reset --hard upstream/master
   ```

3. Sprawdź, czy urządzenie Travis CI przechodzi przez odgałęzienie główne w górę rzeki.

   - [ ] https://travis-ci.org/freeCodeCamp/freeCodeCamp/branches should be Green.

   ![Image - Check build status on Travis CI](/docs/images/devops/travis-build.png)

4. Potwierdź, że jesteś w stanie zbudować repozytorium lokalnie.

   ```
   npm run clean-and-develop (Czyste i rozwojowe)
   ```
5. Przesunięcie zmian z fazy master na fazę produkcji

   ```
   git checkout production-stageout git
   git merge master
   git push upstream
   ```

   Nie będziesz w stanie wymusić naciśnięcia i jeśli i tak przepisałeś historię, polecenia te i tak się pomylą.

#### Wyzwalanie wdrożenia

Kiedy zmiany zostaną przeniesione do gałęzi produkcyjnych, powinny one uruchomić nasze rurociągi budowlane i uwalniające:

- Budowa rurociągu: https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build

  Ten potok jest skonfigurowany do budowania artefaktów dla wdrożeń.


- Rurociąg wydania: https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release

  Ten potok jest skonfigurowany tak, aby wdrażać artefakty na serwery docelowe.

Potok budowy uruchamia potok wydania po przytrzymaniu 15 minut, aby nasi programiści mogli wejść i interweniować w razie potrzeby. Chcielibyśmy, aby w przyszłości posiadały one ręczne zatwierdzenia dla szybszych budów.

Na razie nie należy uruchamiać więcej niż jednej kompilacji w ciągu godziny i czekać na zakończenie poprzedniej kompilacji.

Kod/konfig jest publicznie dostępny na Dev Dashboardzie Azure'a. Dostęp do niego jest ograniczony do zespołu pracowników freeCodeCamp.org.

> Uwaga: Potok wydania nie jest celowo wdrażany w zakładzie produkcyjnym przed nadchodzącym wydaniem. Powinno to ulec zmianie, gdy przewodnik zostanie uruchomiony za kilka dni.

### Build Status

| Platform        | Type       | Status      |
| :-------------- | :--------- | :---------: |
| Travis CI       | Unit Tests | [![Travis CI Build Status](https://travis-ci.org/freeCodeCamp/freeCodeCamp.svg?branch=master)](https://travis-ci.org/freeCodeCamp/freeCodeCamp) |
| Azure Pipelines | Artifacts  | [![Azure Pipelines Build Status](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_apis/build/status/freeCodeCamp-CI)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_build) |

### Deployment Status

| Application  | Version    | Status      |
| :----------- | :--------- | :---------: |
| Client       | Beta/Next  | [![Azure Pipelines Deployment Status](https://vsrm.dev.azure.com/freeCodeCamp-org/_apis/public/Release/badge/4b80aded-11d9-49ea-9b7d-596e98ff07c4/4/8)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) |
| API          | Beta/Next  | [![Azure Pipelines Deployment Status](https://vsrm.dev.azure.com/freeCodeCamp-org/_apis/public/Release/badge/4b80aded-11d9-49ea-9b7d-596e98ff07c4/4/9)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) |
| Client       | Production | [![Azure Pipelines Deployment Status](https://vsrm.dev.azure.com/freeCodeCamp-org/_apis/public/Release/badge/4b80aded-11d9-49ea-9b7d-596e98ff07c4/4/13)](https://dev.azure.com/freeCodeCamp-org/freeCodeCamp/_release) |
| API          | Production | Manual Deployments - Status Not Available |


## Knownown Limitations

Przy korzystaniu z wersji beta platformy będą znane pewne ograniczenia i kompromisy.

- #### Wszystkie dane / postęp osobisty w tych aplikacjach beta `nie zostaną zapisane lub przeniesione` do produkcji.

  **Użytkownicy w wersji beta będą mieli oddzielne konto od produkcji.** Wersja beta wykorzystuje fizycznie oddzielną bazę danych od produkcji. Daje nam to możliwość zapobiegania przypadkowej utracie danych lub modyfikacji. Zespół dev może oczyścić bazę danych z tej wersji beta w razie potrzeby.

- #### Nie ma żadnych gwarancji co do czasu sprawności i niezawodności aplikacji beta.

  Wdrożenie ma być częste i szybkie, czasami kilka razy dziennie. W rezultacie może dojść do nieoczekiwanego przestoju lub uszkodzenia funkcjonalności wersji beta. Zespół programistów zazwyczaj powiadamia o aktualizacjach w [Czat dostawców](https://gitter.im/FreeCodeCamp/Contributors).

- #### Nie wysyłaj regularnych użytkowników na tę stronę w celu potwierdzenia poprawki.

  Strona beta jest i zawsze była po to, aby powiększyć lokalny rozwój i testowanie, nic więcej. Nie jest to obietnica tego, co nadchodzi, ale wgląd w to, nad czym się pracuje.

- #### Zaloguj się i uwierzytelnianie jest dostępne tylko za pośrednictwem poczty elektronicznej, a nie społecznej.

  Loginy Google, GitHub i Facebook NIE będą dostępne w tym trybie beta. Jest to po prostu techniczne ograniczenie, ponieważ dla tej wersji używamy osobnej domeny testowej. **Loginy e-mail będą działać tak samo dobrze.**

  Strona znaku może wyglądać inaczej niż produkcja (jako środek izolujący rozwój i produkcyjne bazy danych).

## Zgłaszanie problemów i pozostawianie informacji zwrotnych

Prosimy o otwarcie nowych kwestii do dyskusji i zgłaszania błędów. Można je oznaczyć jako **[`wydanie: next/beta`](https://github.com/freeCodeCamp/freeCodeCamp/labels/release%3A%20next%2Fbeta)** dla triage.

Jeśli masz jakieś pytania, możesz wysłać e-mail do `dev@freecodecamp.org`. Jak zawsze wszystkie luki w zabezpieczeniach powinny być zgłaszane do `security@freecodecamp.org` zamiast do publicznego trackera i forum.


