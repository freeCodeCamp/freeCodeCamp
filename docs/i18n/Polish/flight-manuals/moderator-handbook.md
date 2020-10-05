# Oficjalny podręcznik moderatora darmowego CodeCamp.

Pomoże to Ci moderować różne miejsca w naszej społeczności, w tym:

- Problemy z GitHub & pull requesty
- Forum i czaty, grupy na Facebooku i inne miejsca spotkań online
- Wydarzenia międzyludzkie, takie jak grupy analityczne, hakatony i konferencje

**Wszyscy moderatorzy darmowego CodeCamp są społecznością moderatorów. Oznacza to, że wierzymy, że nadzoruje pan dowolne z tych miejsc.**

To powiedziawszy, możesz służyć jako moderator w dowolnym miejscu o największym zainteresowaniu. Niektórzy moderatorzy po prostu pomagają na GitHubie. Inni po prostu pomagają na forum. Niektórzy moderatorzy są aktywni wszędzie.

Dolną linią jest to, że chcesz, abyś był moderatorem, i inwestuj swój rzadki czas w interesujące Cię miejsca.

> [!NOTE] "Z wielką potęgą wiąże się wielka odpowiedzialność." - Wujek Ben

Jako moderator temperament jest ważniejszy niż umiejętności techniczne.

Słuchaj. Bądź pomocny. Nie nadużywaj swojej mocy.

Darmowy CodeCamp jest społecznością sprzyjającą włączeniu społecznemu i musimy tak utrzymać.

Mamy jeden kodeks postępowania, który reguluje całą naszą społeczność. Im mniej zasad, tym łatwiej im o nich pamiętać. Możesz przeczytać te zasady i zatwierdzić je do pamięci [tutaj](https://code-of-conduct.freecodecamp.org).

# Moderating GitHub

Moderatorzy mają możliwość zamykania problemów i akceptowania lub zamykania pull requestów.

Moderatorzy mają dwie podstawowe obowiązki w odniesieniu do GitHub:

1. QA'ing i scalanie pull requestów
2. Ocena i reagowanie na kwestie

## Moderacja Pull Requestów

Pull Requests (PRs) to sposób, w jaki współtwórcy przesyłają zmiany do repozytorium freeCodeCamp. Ważne jest, abyśmy wykonywali zapewnienie jakości (QA) na pull requestów, zanim zdecydujemy, czy je połączyć, czy zamknąć.

### Rodzaje Pull Requestów

1. **Edycje instrukcji wyzwań** Są to zmiany w tekście wyzwań - Opis, Instrukcje lub Tekst testowy. Możesz również przejrzeć te prawa na GitHub i zdecydować, czy je połączyć. Musimy być nieco bardziej ostrożni w tej kwestii, ponieważ miliony ludzi spotkają się z tym tekstem, ponieważ pracują przez program nauczania freeCodeCamp. Czy pull request sprawia, że tekst staje się bardziej jasny bez przedłużania jego obowiązywania? Czy zmiany są istotne i nie są nadmiernie pedantyczne? Pamiętaj, że naszym celem jest jak najjaśniejsze i jak najkrótsze wyzwania. Nie są miejscem dla niejasnych szczegółów. Współtwórcy mogą również próbować dodać linki do zasobów do wyzwań. Możesz zamknąć te Pull Requesty i odpowiedzieć na nie w następujący sposób:

   > Dziękujemy za Pull Request.
   > 
   > Zamykam ten pull request. Zamiast tego dodaj linki i inne szczegóły do odpowiedniego artykułu poradnika wyzwania.
   > 
   > Jeśli uważasz, że nie mam racji podczas zamykania tego problemu, proszę otworzyć go ponownie i dodać dalsze wyjaśnienia. Dziękujemy i szczęśliwe kodowanie.

2. **Edycje kodu wyzwania** Są to zmiany w kodzie w wyzwaniu - Challenge Seed, Challenge Solution, i Testowe Ciągi Ciągów. Te pull requesty muszą zostać wyciągnięte z GitHub i przetestowane na lokalnym komputerze, aby upewnić się, że testy wyzwań mogą być przesłane z bieżącym rozwiązaniem, i nowy kod nie wprowadza żadnych błędów. Niektórzy współtwórcy mogą spróbować dodać dodatkowe testy, aby objąć pedantyczne przypadki. Musimy zachować ostrożność, aby nie uczynić tego wyzwania zbyt skomplikowanym. Te wyzwania i ich testy powinny być jak najbardziej proste i intuicyjne. Oprócz algorytmu wyzwania i wywiad przed sekcją, uczniowie powinni być w stanie rozwiązać każde wyzwanie w ciągu około 2 minut.

3. **Codebase Changes** Ten kod zmienia funkcjonalność samej platformy freeCodeCamp. Czasami współtwórcy próbują dokonywać zmian bez wyjaśnień, ale w przypadku zmian w kodzie musimy upewnić się, że istnieje prawdziwa potrzeba zmiany. Zatem te Pull Requesty powinny odnosić się do istniejącego problemu GitHub, w którym omawiane są przyczyny zmiany. Następnie możesz otworzyć Pull Request na swoim komputerze i przetestować je lokalnie. Po tym jak to zrobisz, jeśli zmiany wyglądają dobrze, nie łączymy ich jeszcze całkiem dobrze. Możesz skomentować pull request z napisem "LGTM", a następnie wspomnieć @raisedadead, aby mógł spojrzeć w końcu.

### Jak scalić lub zamknąć pull requesty

Po pierwsze, gdy wybierzesz Pull Request do QA, powinieneś do niego przypisać. Możesz to zrobić klikając link "przypisz siebie" poniżej części "przypisane" po prawej stronie interfejsu GitHub.

W zależności od typu polecenia ściągnięcia jest ono zgodne z odpowiednimi zasadami wymienionymi powyżej.

Przed połączeniem dowolnego Pull Request'u, upewnij się, że GitHub ma zielone znaki kontrolne dla wszystkiego. Jeśli jest jakiś X, najpierw zbadaj je i dowiesz się, jak je przekształcić w zielone znaki kontrolne.

Czasami będzie konflikt połączenia. Oznacza to, że w innym Pull Request dokonano zmiany w dokładnie tej samej części tego samego pliku. GitHub ma narzędzie do rozwiązywania konfliktów scalonych bezpośrednio na GitHubie. Możesz spróbować zająć się tymi konfliktami. Wystarczy użyć swojej najlepszej oceny. Zmiany Pull Request będą na górze, a zmiany Master branch będą na dole. Czasami pojawią się tam zbędne informacje, które mogą zostać usunięte. Przed zakończeniem upewnij się, że usuniesz `<<<<<<`, `=====`, i `>>>>>>` , który Git dodaje do wskazania obszarów konfliktu.

Jeśli pull request wygląda na gotowy do scalenia (i nie wymaga zatwierdzenia od @raisedadead), możesz przejść dalej i połączyć go. Upewnij się, że używasz domyślnej funkcji "Squash and Merge" na GitHub. Spowoduje to zniszczenie wszystkich pull requestów w dół w pojedynczy commit, co sprawia, że historia Git jest znacznie łatwiejsza do odczytania.

Następnie powinieneś skomentować żądanie ściągnięcia, dziękując współtwórcy w sposób osobisty.

Jeśli autor Pull Request jest "pierwszym współtwórcą", powinieneś im również pogratulować ich pierwszego połączenia Pull Request do repozytorium. Możesz przyjrzeć się górnemu prawemu rogowi ciała PR, aby określić pierwszego współtwórcę.  Wyświetli `pierwszy wkład` jak pokazano poniżej:

![Copy_edits_for_Java_arrays_article_by_karentobo_%C2%B7_Pull_Request__20615_%C2%B7_freeCodeCamp_freeCodeCamp|690x281](https://i.imgur.com/dTQMjGM.png)

Jeśli pull request nie wygląda na gotowy do scalenia, możesz uprzejmie odpowiedzieć na pytanie autora, co powinny zrobić, aby przygotować go. Miejmy nadzieję, że odpowiedzą i doczekają się ich pull request.

Często pull request będzie oczywiście niewielkim wysiłkiem. Często możesz to powiedzieć natychmiast, gdy współtwórca nie przeszkadza sprawdzania pól wyboru w szablonie Pull Request Template, lub użyto ogólnego tytułu pull request jak "made changes" lub "Update index.

Istnieją również sytuacje, w których podmiot przekazujący dane próbuje dodać link do własnej strony internetowej, lub dołącz bibliotekę, którą sami utworzyli, lub ma niepoważną edycję, która nie służy do pomocy nikomu oprócz siebie.

W obu tych sytuacjach powinieneś przejść do przodu i zamknąć ich pull request i odpowiedzieć tą standardową wiadomością:

> Dziękujemy za otwarcie tego Pull Requesta.
> 
> Jest to standardowa wiadomość powiadamiająca Cię, że przejrzeliśmy Pull Request i zdecydowaliśmy się go nie scalić. Będziemy mile widziać od ciebie przyszłe żądania ściągnięcia.
> 
> Dziękujemy i szczęśliwe kodowanie.

Jeśli potrzebujesz drugiej opinii na temat Pull Request, przejdź dalej i zostaw swoje komentarze na temat Pull Request, następnie dodaj etykietę "dyskusyjna" do pull requesta.

## Moderowanie zgłoszeń GitHub

freeCodeCamp jest aktywnym projektem open source. Każdego dnia pojawiają się nowe kwestie, z których wszystkie muszą być oczyszczone i oznaczone.

### Rodzaje zgłoszeń GitHub

1. **Prośby o pomoc Code**, dla których ludzie pomyłkowo stworzyli problemy z GitHub. Jeśli ktoś prosi o pomoc, wklej następującą wiadomość, a następnie zamknij problem.

   > Dziękujemy za zgłoszenie tego problemu.
   > 
   > Jest to standardowa wiadomość informująca, że ten problem wydaje się być prośbą o pomoc. Zamiast poprosić o pomoc tutaj, kliknij przycisk \*\*"Pomoc"\*\* na wyzwaniu na FreCodeCamp, co pomoże Ci zadać pytanie we właściwej części forum. Wolontariusze na forum zazwyczaj udzielają odpowiedzi na pytania w ciągu kilku godzin i mogą pomóc w ustaleniu, czy istnieje problem z Twoim kodem lub testami wyzwania.
   > 
   > Jeśli użytkownicy forum stwierdzą, że nie ma nic złego z Twoim kodem, możesz poprosić o ponowne otwarcie tego problemu. 
   > 
   > Dziękujemy i szczęśliwe kodowanie.

2. **Problemy z błędami lub wyjaśnieniem** Spróbuj odtworzyć błąd, jeśli możesz. Jeśli nie, poproś ich o kroki do odtworzenia błędu i czy mają jakiekolwiek zrzuty ekranu, filmy lub dodatkowe szczegóły, które mogą pomóc ci w powtórzeniu problemu. Gdy tylko będziesz mógł odtworzyć problem - lub przynajmniej potwierdzić, że jest to problem legitowy - etykieta `potwierdziła`. Następnie:

- Jeśli jest to prosta zmiana istniejącego wyzwania, etykieta tylko jako `pierwsze timery`, w przeciwnym razie etykieta jako `pomoc chciała`. Stosować w stosownych przypadkach inne etykiety.
- Jeśli problem jest bardziej znaczący, flaga jako `błąd`. &nbsp; Jeśli pojawią się jakiekolwiek niejasności co do właściwego przebiegu działań w danej sprawie, Możesz otagować @raisedadead na temat problemu, uzyskać opinię na ten temat, a następnie dodać etykietę `Dyskusyjna`.

3. **Duplikuj problemy** Jeśli problem jest taki sam jak inny zgłoszony problem, poprzedni zgłoszony problem powinien mieć pierwszeństwo. Flaga jako `Duplikuj`, wklej następującą wiadomość zastępującą `#XXXXX` numerem zgłoszenia, a następnie zamknij zgłoszenie.

   > Dziękujemy za zgłoszenie tego problemu.
   > 
   > To jest standardowa wiadomość powiadamiająca, że ten problem wydaje się być bardzo podobny do wydania #XXXXX, więc zamykam go jako duplikat.
   > 
   > Jeśli uważasz, że nie mam racji podczas zamykania tego problemu, proszę otworzyć go ponownie i dodać dalsze wyjaśnienia. Dziękujemy i szczęśliwe kodowanie.

4. **Naprawiono w staging** Niektóre problemy mogły być już rozwiązane w stagingu, ale nie ma problemów z GitHubem z nimi związanych. Jeśli tak jest, możesz wkleić następującą wiadomość, zamknąć problem i dodać `status: rozwiązany/wysyłka`:

   > Dziękujemy za zgłoszenie tego problemu.
   > 
   > Jest to standardowa wiadomość informująca Cię, że problem, o którym tutaj wspomniałeś, występuje w produkcji, ale został już ustalony na etapie. Oznacza to, że następnym razem, gdy nakłaniamy nasz sektor produkcyjny, problem ten powinien zostać rozwiązany. Z tego względu zamykam ten problem.
   > 
   > Jeśli uważasz, że nie mam racji podczas zamykania tego problemu, proszę otworzyć go ponownie i dodać dalsze wyjaśnienia. Dziękujemy i szczęśliwe kodowanie.

### Zamknij Stale, Nieaktualne, Nieaktywne zgłoszenia i Pull Requesty

- „Stale Issues” lub „PR” to te, które nie widziały żadnej aktywności w PO przez 21 dni (3 tygodnie od ostatniej aktywności), ale dopiero po tym, jak moderator poprosił o więcej informacji/zmian.  Mogą one być zamknięte w automatycznym skrypcie bota lub przez samych moderatorów.

- Aktywność jest zdefiniowana jako: Komentarze żądające aktualizacji w PR i triagach, takie jak `status: wymagana aktualizacja` etykieta itp.

- Jeżeli PO zwraca się o dodatkową pomoc, a nawet o czas, powyższe można złagodzić i zweryfikować po udzieleniu odpowiedzi. W każdym razie mody powinny wykorzystać swoją najlepszą ocenę do rozwiązania zaległego statusu PR.

### Inne wytyczne dla moderatorów na GitHub

Chociaż masz dostęp do zapisu repozytorium FreeCamp, **nigdy nie powinieneś wysyłać kodu bezpośrednio do repozytoriów FreCodeCamp**. Cały kod powinien wprowadzić kodową bazę FreeCampa w formie pull request z forku repozytorium.

Ponadto nigdy nie powinieneś akceptować własnych PR. Muszą być QA przez innego moderatora, tak jak w przypadku każdego innego PR.

Jeśli zauważysz, że ktoś łamie [kod postępowania](https://code-of-conduct.freecodecamp.org) w sprawach GitHub, lub otwieranie pull requestów ze złośliwymi treściami lub kodem, e-mail dev@freecodecamp. rg z linkiem do obraźliwego pull request i możemy rozważyć całkowite zablokowanie ich w darmowej organizacji GitHub CodeCamp.

# Moderacja forum

Jako moderator pomagasz utrzymać naszą społeczność w przyjemnym miejscu dla każdego, kto może się uczyć i uzyskać pomoc. Będziesz zajmować się zgłoszonymi postami i obsługiwać spam, poza tematem i inne nieodpowiednie rozmowy.

Zauważ, że gdy jesteś moderatorem na forum, zaczniesz widzieć niebieskie wskazówki moderatora o członkach forum, tak jak "to pierwszy raz [person] opublikował - powitajmy ich w społeczności! lub "[person] nie napisał w długim czasie - powitajmy ich ponownie."

![Niebieska wiadomość tekstowa mówiąca "to pierwszy raz [person] opublikowała - powitajmy ich w społeczności!](https://i.imgur.com/mPmVgzK.png)

Są to dla Ciebie możliwości powitania ich i sprawiają, że czują się one wyjątkowe. Nigdy nie wiesz, która osoba, która jest marginalnie zaangażowana, może stać się naszym następnym super-pomocnikiem, pomagając wielu innym osobom w ich podróżowaniu kodowaniem. Nawet najmniejsza życzliwość może wywołać kaskadę dobrych czynów.

### Usuwanie postów na forum

Moderatorzy forum mają możliwość usuwania postów użytkownika. Powinieneś to zrobić tylko w następujących przypadkach:

1. Ktoś opublikował obrazek pornograficzny lub graficzny.
2. Ktoś opublikował link lub kod, który jest złośliwy i może zaszkodzić innym kamerom, którzy klikają na niego.
3. Ktoś zalał wątek z wieloma wiadomościami spamu.

### Postępowanie ze spamem

W przypadku pierwszego spamu użytkownika wyślij mu wiadomość wyjaśniającą problem i usuń link lub wpis, stosownie do przypadku. Pozostaw notatkę na profilu użytkownika, wyjaśniając działania, które wykonałeś. Jeśli problem będzie się powtarzał, należy postępować zgodnie z powyższym procesem. Cicho zablokuj użytkownikowi postowanie (przy użyciu opcji ciszy w panelu Administratora użytkownika), a następnie wyślij ostrzeżenie wraz z kodeksem postępowania. Zaznacz pole w prywatnej wiadomości wskazującej, że Twoja wiadomość jest „oficjalnym ostrzeżeniem”.

Możesz zadawać pytania i zgłaszać incydenty w [sekcji forum pracowników](https://forum.freecodecamp.com/c/staff).

### Postępowanie z rozmowami poza tematem

Wpisy lub tematy, które wydają się znajdować się w niewłaściwym miejscu, mogą zostać przegrupowane lub przegrupowane na dowolne właściwe.

W wyjątkowych okolicznościach może być właściwe, aby moderator przekształcił dyskusję w wiele wątków.

Ponownie, jeśli masz jakieś problemy lub pytania, zrób post z czynnościami w kategorii Kostaryki, i otaguj innego moderatora, jeśli chcesz, aby przejrzeli swoje działania moderacyjne.

### Niepełnoletni użytkownicy

Nasz Regulamin wymaga od użytkowników darmowego CodeCamp w wieku co najmniej 13 lat. W przypadku gdy użytkownik wykaże, że ma mniej niż 13 lat, wyślij im poniższą wiadomość i usuń swoje konto na forum (jeśli usunięcie nie jest dostępne, zawieszenie konta jest wystarczające). Następnie napisz do [Quincy](https://forum.freecodecamp.org/u/QuincyLarson) (quincy@freecodecamp.org) lub [Mrugesh](https://forum.freecodecamp.org/u/raisedadead) (mrugesh@freecodecamp.org), aby usunąć również konto użytkownika freeCodeCamp.

```markdown
SUBJECT: Użytkownicy poniżej 13 roku życia nie mogą korzystać z forum na każdy Regulamin

Zauważyliśmy, że jesteś w wieku poniżej 13 lat. Za [FreCodeCamp terms of service](https://www.freecodecamp.org/news/terms-of-service), musisz mieć co najmniej 13 lat, aby korzystać z witryny lub forum. Usuniemy zarówno Twoje konto FreeCamp, jak i Twoje konto na forum. Ograniczenie to jest dla nas zgodne z prawem Stanów Zjednoczonych.

Proszę dołączyć ponownie po osiągnięciu wieku co najmniej 13 lat.

Dziękuję za zrozumienie.
```

# Moderacja Facebooka

Jeśli widzisz cokolwiek co wydaje się naruszać nasz [Kodeks postępowania](https://code-of-conduct.freecodecamp.org/), powinieneś go natychmiast usunąć.

Czasami ludzie będą wysyłać rzeczy, które ich zdaniem są zabawne. Nie zdają sobie sprawy, że to, co oni mówili, ani to, co dzielili mogą być interpretowane jako obraźliwe. W takich przypadkach ich post powinien zostać usunięty, ale osoba, która go opublikowała, nie musi być zakazana. Dzięki usunięciu ich postów będą mieli nadzieję, że wiedzą, że ich publikacja była niewłaściwa.

Jeśli jednak jest to rażąca obraźliwość, której nie można w rozsądny sposób przypisać różnicy kulturowej lub błędnemu zrozumieniu języka angielskiego, wtedy powinieneś zdecydowanie rozważyć zablokowanie użytkownika z grupy Facebook.

# Moderacja Discorda

Oto jak moderatorzy zajmują się łamaniem naszego [Kodeksu postępowania](https://code-of-conduct.freecodecamp.org/) na Discordzie:

1. **Upewnij się, że miało to na celu naruszenie Kodeksu Postępowania.** Nie wszystkie naruszenia kodeksu postępowania były jako takie. Nowy kamer może wysłać dużą ilość kodu dla pomocy, nieświadomy tego, że można to uznać za spamowanie. W takich przypadkach możesz poprosić ich o wklejenie kodu za pomocą takich usług jak Codepen czy Pastebin.

2. **Jeżeli kamer wyraźnie narusza kodeks postępowania, moderator będzie postępował w następujący sposób:**

- Zawieś obraźliwego kamera, ale nie ostrzegaj ani nie gratuluj ich. Zamiast tego niechętnie nadaj im zawieszoną rolę na Discordzie, a następnie wyślij im następujący komunikat:

```
Jest to standardowa wiadomość powiadamiająca Cię, że musiałem czasowo zawiesić rozmowę na serwerze Discorda FreeCodeCamp.

Jestem moderatorem działającym w imieniu naszej społeczności open source. Mogę rozważyć usunięcie twojej zawiesiny, ale muszę najpierw wykonać następujące 3 kroki:

1. Przeczytaj nasz kodeks postępowania: https://code-of-conduct.freecodecamp.org/
2. Napisz do mnie ponownie, potwierdzając, że zakończyłeś czytanie. 3. Wyjaśnij, dlaczego uważasz, że Cię zawiesiłem, i dlaczego powinienem usunąć twoje zawieszenie.
```

- Zgłoś krótkie podsumowanie wydarzenia i odpowiedź na nie w kanale #admin. Oto przykład takiego podsumowania:

```
Zawieszono: _@username_
Powód: _Spamming, trolling_
Dowód: _Jeden lub więcej linków do obraźliwych wiadomości_
CoC: _Wysłane_
```

- Raport o usunięciu zawieszenia powinien wyglądać następująco:

```
Usunąłem zawieszenie z ` @username `. Wysłałem im kodeks postępowania. Właśnie dziś zdali sobie sprawę, że zostali zawieszeni i przeprosieni za to, co zrobili.
```

- Na podstawie odpowiedzi sprawców moderator zdecyduje, czy usunąć zawieszenie z obraźliwego kamery. Jeżeli wydają się być szacowne i apologetyczne, moderator może usunąć zawieszenie. W ramach polityki moderatorzy będą uprzejmie w trakcie tego procesu, bez względu na to, jak źle zachowywał się oburzający kamper. Jeśli nie są one zachowane lub nie są skłonne zaakceptować CoC, po zawieszeniu należy wprowadzić zakaz z serwera Discord. Użyj tego samego podsumowania, co powyżej, ale zamiast "Zawieszenie:" zamienić "Zablokowane:".

3. **Jak zakazać lub odbanować**

- Aby zbanować kogoś, kliknij prawym przyciskiem myszy na ich nazwę użytkownika/zdjęcie profilowe i wybierz "Ban <username>". Otrzymasz możliwość usunięcia ich poprzednich wiadomości - wybierz "Nie usuwaj niko", ponieważ komunikaty powinny pozostać obecne jako rekordy historyczne.
- Jeśli zdecydujesz się zakazać kogoś, oznacza to, że nie chcą przestrzegać naszego kodeksu postępowania. Dlatego odbanowanie kamery powinno rzadko występować. Jeśli jednak zajdzie taka potrzeba, możesz to zrobić klikając na nazwę serwera, wybierając "Ustawienia serwera", wybranie "Bans", wybranie użytkownika, który chcesz odbanować i kliknięcie "Cofnij ban".

Bany Discorda są globalne - nie możesz zbanować użytkownika z określonego kanału, tylko z całego serwera.

4. **Usuwanie wiadomości** Moderatorzy mają możliwość usuwania wiadomości na Discordzie. Powinny one korzystać z tej możliwości jedynie w czterech bardzo szczególnych sytuacjach:

- Ktoś opublikował obrazek pornograficzny lub graficzny.
- Ktoś opublikował link lub kod, który jest złośliwy i może zaszkodzić innym kamerom, którzy klikają na niego.
- Ktoś zalał czat mnóstwem wiadomości spamowych w tak skrajnym stopniu (zazwyczaj dotyczących botów), że czat jest całkowicie nieużyteczny.
- Ktoś opublikował reklamę / lub wiadomość promującą własną promocję / obraz (media społecznościowe).

We wszystkich innych sytuacjach - nawet w sytuacjach, w których kodeks postępowania jest naruszony - Moderatorzy nie powinni usuwać wiadomości, ponieważ stanowią one ważny historyczny rekord. Kiedy usuniesz wiadomość, upewnij się, że najpierw wykonasz zrzut ekranu! Zrzut ekranu może być zalogowany na kanale #mod-log, ale dla #activity-log wystarczy powiedzieć, że dowody zostały "usunięte z powodu poufnych treści". Uwaga: Jeśli wiadomość zawiera materiały, które byłyby niezgodne z prawem do wykonania zrzutu ekranu, skopiuj link do wiadomości - podaj ten link do @raisedadead, aby przesłać go do zespołu Zaufania i Bezpieczeństwa Discorda.

5. **Nie używaj @everyone ani @here** Nie używaj @everyone ani @here w żadnych okolicznościach! Każda osoba w tym pokoju czatu otrzyma powiadomienie. W niektórych przypadkach dziesiątki tysięcy ludzi. Zamiast tego, jeśli chcesz, aby ludzie widzieli ogłoszenie, możesz przypiąć je do kanału, aby każdy mógł je przeczytać.

6. **Nie grożą zbanowaniem lub zawieszeniem** Jeśli kamuflaż łamie kod postępowania, nie grożą zakazem lub zawieszeniem ich i nigdy nie ostrzegają o nich publicznie. Zamiast tego porozmawiaj z nimi prywatnie lub wyślij im pamięć DM i wydaj zawieszenie (na podstawie powyższego protokołu). Nikt inny na tym kanale nie musi wiedzieć, że zbanowałeś / zawiesiłeś osobę - kamery mogą zobaczyć podsumowanie w kanale #activity-log jeśli chcą zachować te informacje. Jeśli naruszenie było wyraźnie niezamierzone i nie daje podstaw do zawieszenia lub prywatnej rozmowy, uświadomić obraźliwemu kamerzowi jego czynności, nie sprawiając, że znajdzie się on jako ostrzeżenie. Na przykład:

- Kamery dodają ścianę kodu aby poprosić o pomoc

  Moderator: @nazwa użytkownika użyj Codepen lub Pastebin podczas publikowania dużych ilości kodu.

- Lub jeśli naprawdę musisz wyjaśnić, dlaczego:

  Moderator: @username Proszę, użyj Codepen lub Pastebin podczas publikowania dużych ilości kodu, ponieważ zakłóca czat dla wszystkich i może być uznany za spamowanie zgodnie z naszym kodeksem postępowania.

- W przypadku łagodnych i niezamierzonych naruszeń kodeksu postępowania

  Moderator: To przyjazne przypomnienie dla wszystkich o stosowaniu się do kodeksu postępowania: https://code-of-conduct.freecodecamp.org/

7. **Nie przeszkadzaj o byciu moderatorem** Nie widzisz siebie powyżej społeczności. Jesteś społecznością. Społeczność zaufała Tobie za pomoc w ochronie czegoś rzadkiego, co wszyscy dzielimy - _powitalne miejsce_ dla nowych programistów. Jeśli chcesz być moderatorem, ludzie mogą odczuwać niepokój wokół Ciebie, tak samo jak ludzie mogą odczuwać niepokój wokół funkcjonariusza policji, nawet jeśli nic nie robią. To jest czysta ludzka natura.

8. **Nie przeszkadzaj innym moderatorom** Jeśli nie zgadzasz się z działaniem moderatora, porozmawiaj z nimi prywatnie lub podnieś go na kanale #mod-chat. Nigdy nie nadpisuj zakazu i nigdy nie przeszkadzać innym(-ym) moderatorowi(-om) publicznie. Zamiast tego kierować dyskusją na mod-chat i przekonać moderatora, że sami powinni odwrócić swój zakaz lub zmienić swój punkt widzenia. Pamiętaj: wszyscy jesteśmy w tym samym zespole. Chcemy godnej roli moderatorów i przedstawić jednolity front.

9. **Porozmawiaj z innymi moderatorami** Mamy miejsce tylko dla moderatorów. Użyj tego! Jeśli czujesz się niewygodny jak radzić sobie z określoną sytuacją, poproś innych moderatorów o pomoc. Jeśli uważasz, że coś należy przedyskutować, zrób to. Jesteś częścią zespołu i cenimy wkład każdego członka zespołu! Nawet jeśli całkowicie nie zgadzasz się z czymkolwiek w tych wytycznych lub w kodeksie postępowania!

10. **Tymczasowo nieaktywny** Jeśli nie będziesz aktywny jako moderator przez jakiś czas z powodu wakacji, choroba lub inny powód, upewnij się, że inni znają się na kanale #mod-chat. Tak więc wiemy czy możemy liczyć na to, że będziesz regularnie aktywny na serwerze.

# Jak zostać moderatorem

Jeśli pomagasz ludziom w społeczności konsekwentnie z upływem czasu, nasz zespół moderatorów ostatecznie uwzględni się, a jeden z nich wspomni Cię jako możliwego moderatora dla [naszego personelu](https://forum.freecodecamp.org/g/Team). Nie ma skrótów do moderatora.

Jeśli jesteś zatwierdzony, dodamy Cię do naszych Zespołów Moderatorów na [GitHub](https://github.com/orgs/freeCodeCamp/teams/moderators), [forum](https://forum.freecodecamp.org/g/moderators), itd.

> [!NOTE] > **Dla GitHub:** Po zaakceptowaniu Cię jako moderatora, otrzymasz zaproszenie do repozytorium Github. Aby zaakceptować zaproszenie, musisz przejść do [darmowego CodeCamp GitHub Organizacji](https://github.com/orgs/freeCodeCamp/invitation). Jest to wymagane dla nas, abyśmy mogli dać Ci dostęp do zapisu w niektórych z naszych repozytoriów.

# Jak przechodzimy na emeryturę nieaktywnych moderatorów

Pamiętaj, że często usuwamy mody, które uważamy za nieaktywne. Kiedy to zrobimy, wyślemy następujący komunikat:

> To jest standardowa wiadomość powiadamiająca Cię, ponieważ nie jesteś ostatnio aktywnym moderatorem, usuwamy Cię z naszego zespołu moderatora. Głęboko doceniamy Twoją pomoc w przeszłości.

> Jeśli uważasz, że zrobiliśmy to w błędzie, lub kiedy będziesz gotowy wrócić i przyczynić się do zwiększenia wkładu, po prostu odpowiedz na tę wiadomość, dając mi znać.

# Jak działa nasz pokój współtwórców

Każdy jest mile widziany w [pokoju współtwórców na naszym Discordzie](https://discord.gg/KVUmVXA). To wyznaczone miejsce na czacie dla moderatorów i innych kamerów, które na dowolny sposób przyczyniają się do naszej społeczności, w tym za pośrednictwem grup analitycznych.

Naszym założeniem jest to, że współtwórcy przeczytają wszystko w tym pomieszczeniu, które bezpośrednio wspomina o nich `@username`. Wszystko inne jest opcjonalne. Ale możesz czytać, cokolwiek tam wpisuje i interakcja.

# Postępowanie z pracownikami kontraktowymi

Do Ciebie mogą zwracać się organizacje, które chcą w jakiś sposób współpracować lub współmarki z FreCodeCamp. Gdy zdajesz sobie sprawę, że jest to to, co się po nim stanie, przestań z nimi rozmawiać i powiedz im na adres quincy@freecodecamp.org. On ciągle otrzymuje takie propozycje i jest w najlepszej sytuacji, aby ocenić, czy takie relacje będą warte tego dla naszej społeczności (a to niezmiernie nie).

# Postępowanie z badaniami zdrowotnymi (umysłowymi)

Mogą wystąpić sytuacje, w których użytkownicy szukają porady lekarskiej lub zajmują się kwestiami zdrowia psychicznego i szukają wsparcia. W ramach polityki należy unikać prywatnego mówienia o tych kwestiach. Jeżeli w pewnym momencie sytuacja będzie odzwierciedlona w fCC, chcielibyśmy odnotować rozmowę (rozmowy). Proszę jasno powiedzieć, że nie jesteśmy specjalistami medycznymi i że zachęcasz użytkownika do znalezienia profesjonalnej pomocy. Tak trudne, jak niekiedy może to być możliwe, unikaj jakichkolwiek wskazówek lub porad poza wskazaniem użytkownika w kierunku profesjonalnej pomocy!

Jeśli tak się dzieje na Discordzie: zawiesić użytkownika. Nie chodzi o ich karanie! Zawieszenie użytkownika utworzy prywatny kanał, który jest dostępny tylko dla użytkownika i zespołu. Przyniesie to korzyści zarówno użytkownikowi, jak i fCC na kilka sposobów:

- Użytkownik ma gwarancję prywatności
- Czat publiczny nie jest już zakłócony
- Inni członkowie drużyny mogą dostać się, jeśli jesteś niewygodny w sobie poradzi sobie z sytuacją

> [!UWAGA] Zawieszenie użytkownika automatycznie daje mu wiadomość o czytaniu naszego kodeksu postępowania. Upewnij się, że poinformujesz użytkownika, że zawiesiłeś go, aby dać mu trochę prywatności i że nie są karane. To bardzo ważne! Bezwzględnie chcemy unikać dawania użytkownikom pojęcia, że są karani za dotarcie do nas i otrzymanie pomocy!

Jeśli uważasz, że użytkownik może ponownie dołączyć do społeczności, kliknij prawym przyciskiem myszy na kanał prywatny i skopiuj ID. Umieść następującą wiadomość w #mod-log:

> Odesłana opinia lekarska: <channel ID> <username>

Następnie można usunąć zawiesinę z użytkownika, tak jak zwykle.

Pomocne URL:

http://www.suicide.org/international-suicide-hotlines.html

# Notatka o wolności słowa

Czasami ludzie będą bronić czegoś ofensywnego lub podżegającego, co powiedzieli jako "wolność słowa”.

Ten komiks XKCD doskonale podsumowuje myśli większości społeczności na temat wolności słowa. Więc jeśli ktoś broni czegoś, co mówi jako "wolna wypowiedź", czuje się do nich wolny.

<div align="center"><img src='https://aws1.discourse-cdn.com/freecodecamp/original/3X/4/3/43a8b2eafe4c8622e02838f66f1dc6227de32c70.png' width="400" height="400" /></div>

Dziękujemy za przeczytanie tego i dziękujemy za pomoc społeczności programistów!
