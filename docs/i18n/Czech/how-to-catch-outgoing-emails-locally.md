> **Poznámka:** Toto je **volitelný** krok a je vyžadován pouze při práci s e-mailovými pracovními postupy

## Úvod

Některé e-mailové workflow, jako je aktualizace e-mailu uživatele, vyžaduje api-server na back-end odeslání odchozích e-mailů. alternativou k použití poskytovatele e-mailové služby pro odesílání aktuálních e-mailových zpráv, Mailhog je vývojářský nástroj pro testování e-mailů, který bude chytat zprávy odeslané instancí vašeho freeCodeCamp.

## Instalace MailHog

MailHog může být nainstalován na macOS, Windows a Linux.

- [Úvod](#introduction)
- [Instalace MailHog](#installing-mailhog)
  - [Instalace MailHog na macOS](#installing-mailhog-on-macos)
  - [Instalace MailHog na Windows](#installing-mailhog-on-windows)
  - [Instalace MailHog na Linux](#installing-mailhog-on-linux)
- [Použití MailHog](#using-mailhog)
- [Užitečné odkazy](#useful-links)

### Instalace MailHog na macOS

Nainstalujte MailHog na macOS s [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

Výše uvedené příkazy spustí mailhog službu na pozadí.

Po dokončení instalace můžete spustit [pomocí MailHog](#using-mailhog).

### Instalace MailHog na Windows

Stáhněte si nejnovější verzi MailHog z oficiálního repositáře [MailHog's](https://github.com/mailhog/MailHog/releases). Najděte a klikněte na odkaz pro verzi Windows (32 nebo 64 bitů) a soubor .exe bude stažen do vašeho počítače.

Po dokončení stahování klikněte pro otevření souboru. Může se objevit notifikace Windows firewall s žádostí o přístupové oprávnění pro MailHog. Standardní příkazová řádka Windows se otevře tam, kde bude MailHog spuštěn, jakmile bude umožněn přístup k firewall.

Zavřete MailHog zavřením okna s výzvou k příkazu. Chcete-li znovu spustit MailHog, klikněte na spustitelný soubor MailHog (. xe) soubor, který byl původně stažen - není nutné stahovat nový instalační soubor MailHog.

Začněte [používat MailHog](#using-mailhog).

### Instalace MailHog na Linux

Nejprve nainstalujte [Go](https://golang.org).

Spusťte následující příkazy k instalaci GO na systémy jako Ubuntu a Linux Mint.

```bash
sudo apt-get install golang
```

Spusťte následující příkazy k instalaci GO na systémy založené na RPM jako CentOS, Fedora, Red Hat Linux, atd.

```bash
sudo dnf install golang
```

Případně spusťte následující příkazy k instalaci GO.

```bash
sudo yum install golang
```

Nyní nastavte cestu pro Jít s následujícími příkazy.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
ozvěna 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Konečně zadejte příkazy níže pro instalaci a spuštění MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Začněte [používat MailHog](#using-mailhog).

## Použití MailHog

Otevřete novou záložku nebo okno prohlížeče a přejděte na [http://localhost:8025](http://localhost:8025) pro otevření vaší schránky MailHog po dokončení instalace MailHog a spuštění MailHog. Doručená pošta se zobrazí podobně jako snímek obrazovky níže.

![MailHog Screenshot 1](images/mailhog/1.jpg)

E-maily odeslané vaší instalací freeCodeCamp se zobrazí níže

![MailHog Screenshot 2](images/mailhog/2.jpg)

Při otevření daného e-mailu budou k dispozici dvě záložky, které vám umožní zobrazit prostý text nebo zdrojový obsah. Ujistěte se, že je vybrána záložka prostého textu, jak je uvedeno níže.

![MailHog Screenshot 3](images/mailhog/3.jpg)

Všechny odkazy v e-mailu by měly být možné kliknout a vyřešit jejich URL.

## Užitečné odkazy

- Podívejte se na úložiště [MailHog](https://github.com/mailhog/MailHog) pro další informace týkající se MailHog. Další informace jsou k dispozici také o vlastních konfiguracích MailHog.
