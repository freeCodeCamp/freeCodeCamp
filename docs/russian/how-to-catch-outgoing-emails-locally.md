<table>
    <tr>
        <td> Инструкции также доступны на следующих языках</td>
        <td><a href="/CONTRIBUTING.md"> English </a></td>
        <td><a href="/docs/chinese/CONTRIBUTING.md"> 中文 </a></td>
        <td><a href="/docs/russian/CONTRIBUTING.md"> русский </a></td>
        <td><a href="/docs/arabic/CONTRIBUTING.md"> عربى </a></td>
        <td><a href="/docs/spanish/CONTRIBUTING.md"> Español </a></td>
        <td><a href="/docs/portuguese/CONTRIBUTING.md"> Português </a></td>
    </tr>
</table>

# Как локально получать исходящие электронные письма (для работы с почтой)

> **Примечание:** Это ** необязательный ** шаг - требуется только при работе с электронной почтой

## Вступление

Некоторые рабочие процессы электронной почты, такие как обновление электронной почты пользователя, требуют отправки писем от внутреннего API-сервера. Во время разработки вы можете использовать инструмент для получения локальных электронных писем локально, вместо того, чтобы использовать для этих целей сервис поставщика электронной почты напрямую. MailHog - это один из таких средств тестирования электронной почты для разработчиков, который перехватит электронные письма, отправленные из под вашоего локального инстанса freeCodeCamp.

## Установка MailHog

Установка и запуск MailHog зависит от вашей ОС

- [Установка MailHog для macOS](#install-mailhog-on-macos)
- [Установка MailHog для Windows](#install-mailhog-on-windows)
- [Установка MailHog для Linux](#install-mailhog-on-linux)

### Установка MailHog для macOS

Как настроить MailHog на macOS с помощью [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

Это запустит службу почтового ящика в фоновом режиме.

После этого вы можете перейти к [использованию MailHog](#using-mailhog).

### Установка MailHog для Windows

Загрузите последнюю версию MailHog из [официального хранилища MailHog](https://github.com/mailhog/MailHog/releases). Нажмите на ссылку с вашей версией Windows (32 или 64 бит) и файл .exe будет загружен на ваш компьютер.

По завершению загрузки, нажмите на скачанный файл. Вероятнее всего, вы получите уведомление брандмауэра Windows, где вам будет необходимо разрешить доступ программе MailHog. Как только вы это сделаете, стандартная подсказка командной строки Windows откроется с уже запущенным MailHog.

Чтобы закрыть MailHog, закройте командную строку. Чтобы запустить его снова, щелкните по тому же .exe-файлу. Вам не нужно скачивать его заново.

После этого вы можете перейти к [использованию MailHog](#using-mailhog).

### Установка MailHog для Linux

Сначала установите [Go](https://golang.org).

Для систем на базе Debian, таких как Ubuntu и Linux Mint, выполните следующую команду:

```bash
sudo apt-get install golang
```

Для CentOS, Fedora, Red Hat Linux и других систем на основе RPM выполните следующую команду:

```bash
sudo dnf install golang
```

Или:

```bash
sudo yum install golang
```

Задайте путь для Go:

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Затем установите и запустите MailHog:

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

После этого вы можете перейти к [использованию MailHog](#using-mailhog).

## Использование MailHog

После того, как вы установили MailHog и запустили его, вам нужно открыть ваш почтовый ящик MailHog в вашем браузере, открыть новую вкладку или окно и перейти к [http://localhost:8025] (http://localhost:8025).
Теперь вы должны увидеть экран, подобный указанному ниже:


![MailHog Скриншот 1](images/mailhog/1.jpg)

Когда ваша установка freeCodeCamp отправит электронное письмо, вы увидите как оно появится здесь, как показано ниже:

![MailHog Скриншот 2](images/mailhog/2.jpg)

Откройте почту. Там вам должны быть видны две вкладки, где вы можете просмотреть содержимое - простой текст и источник. Убедитесь, что вы находитесь на вкладке с простым текстом.

![MailHog Скриншот 3](images/mailhog/3.jpg)

Любые ссылки в письме должны быть кликабельны.

## Полезные ссылки

По иным вопросам, связанным с MailHog или инструкциями по пользовательским настройкам, проверьте репозиторий [MailHog](https://github.com/mailhog/MailHog).
