> **Uwaga:** Jest to **opcjonalny** krok i jest wymagany tylko podczas pracy z workflowami wiadomości e-mail

## Wprowadzanie

Niektóre workflowy e-mail, takie jak aktualizacja adresu e-mail użytkownika, wymagają back-end api-server do wysyłania wychodzących wiadomości. Alternatywa do korzystania z dostawcy usług e-mail do wysyłania aktualnych wiadomości e-mail, Mailhog jest narzędziem deweloperskim do testowania wiadomości e-mail, które złapają wiadomości wysłane przez Twoją instancję FreeCamp.

## Instalacja MailHog

MailHog może być zainstalowany na macOS, Windows i Linux.

- [Wprowadzanie](#introduction)
- [Instalacja MailHog](#installing-mailhog)
  - [Instalowanie MailHog na macOS](#installing-mailhog-on-macos)
  - [Instalacja MailHog na Windows](#installing-mailhog-on-windows)
  - [Instalowanie MailHog na Linux](#installing-mailhog-on-linux)
- [Używanie MailHog](#using-mailhog)
- [Przydatne linki](#useful-links)

### Instalowanie MailHog na macOS

Zainstaluj MailHog na macOS z [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

Powyższe polecenia rozpoczną serwis mailhog w tle.

Po zakończeniu instalacji, możesz rozpocząć [używając MailHog](#using-mailhog).

### Instalacja MailHog na Windows

Pobierz najnowszą wersję MailHog z oficjalnego repozytorium [MailHog'a](https://github.com/mailhog/MailHog/releases). Znajdź i kliknij na link dla wersji Windows (32 lub 64 bity) i plik .exe zostanie pobrany na twój komputer.

Po zakończeniu pobierania, kliknij aby otworzyć plik. Może pojawić się powiadomienie o zaporze systemu Windows, żądając pozwolenia dostępu dla MailHog. Standardowy wiersz poleceń Windows zostanie otwarty gdzie będzie działać MailHog po przyznaniu dostępu do zapory.

Zamknij MailHog zamykając okno monitu poleceń. Aby uruchomić MailHog ponownie, kliknij na plik wykonywalny MailHog (. xe) plik który został pobrany początkowo - nie jest konieczne pobieranie nowego pliku instalacyjnego MailHog.

Zacznij [używać MailHog](#using-mailhog).

### Instalowanie MailHog na Linux

Najpierw zainstaluj [Go](https://golang.org).

Uruchom następujące polecenia, aby zainstalować GO w systemach debian, takich jak Ubuntu i Linux Mint.

```bash
sudo apt-get install golang
```

Uruchom następujące polecenia, aby zainstalować GO w systemach opartych na RPM, takich jak CentOS, Fedora, Red Hat Linux, itp.

```bash
sudo dnf install golang
```

Alternatywnie, uruchom następujące polecenia, aby zainstalować GO.

```bash
sudo yum install golang
```

Teraz ustaw ścieżkę do Idź z następującymi poleceniami.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
źródło ~/.profile
```

Na koniec wprowadź poniższe polecenia, aby zainstalować i uruchomić MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Zacznij [używać MailHog](#using-mailhog).

## Używanie MailHog

Otwórz nową kartę przeglądarki lub okno i przejdź do [http://localhost:8025](http://localhost:8025) , aby otworzyć skrzynkę odbiorczą MailHog po zakończeniu instalacji MailHog i uruchomieniu MailHog. Skrzynka odbiorcza pojawi się podobnie do zrzutu ekranu poniżej.

![Zrzut ekranu MailHog 1](images/mailhog/1.jpg)

Wiadomości wysłane przez Twoją instalację FreeCamp pojawią się poniżej

![Zrzut ekranu MailHog 2](images/mailhog/2.jpg)

Dwie zakładki, które umożliwiają wyświetlanie zwykłego tekstu lub treści źródłowych, będą dostępne po otwarciu danej wiadomości e-mail. Upewnij się, że zakładka zwykłego tekstu jest zaznaczona jak poniżej.

![Zrzut ekranu MailHog 3](images/mailhog/3.jpg)

Wszystkie linki w wiadomości e-mail powinny być klikalne i rozwiązywane na adres URL.

## Przydatne linki

- Sprawdź repozytorium [MailHog](https://github.com/mailhog/MailHog) , aby uzyskać dalsze informacje związane z MailHog. Dostępne są również dodatkowe informacje dotyczące niestandardowych konfiguracji MailHog.
