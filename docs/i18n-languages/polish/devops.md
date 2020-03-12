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

Nazwa domeny będzie inna niż **`freeCodeCamp.org`**. Obecnie ta publiczna wersja beta testowa jest dostępna na stronie 
