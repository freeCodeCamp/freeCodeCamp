> **Note:** This is an **optional** step and is required only when working with email workflows

## Введение

Некоторые процессы электронной почты, такие как обновление электронной почты пользователя, требуют back-сервер api-server для отправки исходящих писем. Альтернатива использованию поставщика услуг электронной почты для отправки реальных сообщений электронной почты, Mailhog - это инструмент для тестирования почтовых сообщений, которые будут отлавливаться почтовыми сообщениями, отправленными вашим экземпляром freeCodeCamp.

## Установка MailHog

MailHog может быть установлен в macOS, Windows и Linux.

- [Введение](#introduction)
- [Установка MailHog](#installing-mailhog)
  - [Установка MailHog в macOS](#installing-mailhog-on-macos)
  - [Установка MailHog в Windows](#installing-mailhog-on-windows)
  - [Установка MailHog в Linux](#installing-mailhog-on-linux)
- [Использовать MailHog](#using-mailhog)
- [Полезные ссылки](#useful-links)

### Установка MailHog в macOS

Установить MailHog на macOS с [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

Вышеуказанные команды запускают сервис mailhog в фоновом режиме.

После завершения установки вы можете начать [использовать MailHog](#using-mailhog).

### Установка MailHog в Windows

Загрузите последнюю версию MailHog из [официального репозитория MailHog](https://github.com/mailhog/MailHog/releases). Найдите и нажмите на ссылку для вашей версии Windows (32 или 64 бита) и файл .exe будет загружен на ваш компьютер.

Когда загрузка завершится, нажмите для открытия файла. Может появиться уведомление о брандмауэре Windows, запрашивающее разрешение на доступ к MailHog. Открывается стандартная командная строка Windows, где будет запущен MailHog после предоставления доступа к брандмауэру.

Закройте MailHog, закрыв окно командной строки. Чтобы запустить MailHog снова, нажмите на исполняемый файл MailHog (. xe) файл, который был изначально загружен - нет необходимости загружать новый установочный файл MailHog.

Начать [использовать MailHog](#using-mailhog).

### Установка MailHog в Linux

Сначала установите [Go](https://golang.org).

Выполните следующие команды для установки GO на основанные на Debian системы, такие как Ubuntu и Linux Mint.

```bash
sudo apt-get install golang
```

Выполните следующие команды для установки GO на основанные на RPM системы, такие как CentOS, Fedora, Red Hat Linux и т.д.

```bash
sudo dnf install golang
```

Или выполните следующие команды для установки GO.

```bash
sudo yum install golang
```

Теперь установите путь для Go со следующими командами.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
источник ~/.profile
```

Наконец, введите команды ниже, чтобы установить и запустить MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Начать [использовать MailHog](#using-mailhog).

## Использовать MailHog

Откройте новую вкладку или окно браузера и перейдите к [http://localhost:8025](http://localhost:8025) , чтобы открыть свой почтовый ящик после завершения установки MailHog и запущен MailHog. Почтовый ящик будет похож на снимок экрана ниже.

![Скриншот MailHog 1](images/mailhog/1.jpg)

Письма, отправленные вашей установкой FreeCodeCamp, будут отображаться ниже

![Скриншот MailHog 2](images/mailhog/2.jpg)

При открытии данного письма будут доступны две вкладки, которые позволят вам просматривать текст или исходный текст. Убедитесь, что вкладка с обычным текстом выбрана ниже.

![Скриншот MailHog 3](images/mailhog/3.jpg)

Все ссылки в электронной почте должны быть кликабельными и решаться на их URL.

## Полезные ссылки

- Проверьте репозиторий [MailHog](https://github.com/mailhog/MailHog) для получения дополнительной информации, связанной с MailHog. Дополнительная информация также доступна в отношении пользовательских настроек MailHog.
