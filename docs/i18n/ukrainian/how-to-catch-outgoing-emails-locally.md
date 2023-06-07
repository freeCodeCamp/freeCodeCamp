> **Примітка:** це **необов’язковий** крок, необхідний лише при роботі з електронною поштою

- [Вступ](#introduction)
- [Встановлення MailHog](#installing-mailhog)
- [Використання MailHog](#using-mailhog)
- [Корисні посилання](#useful-links)

## Вступ

Деякі робочі процеси (наприклад, зміна електронної пошти користувача) вимагають сервер api, який надсилатиме вихідні листи. MailHog — це альтернатива провайдерам електронної пошти для надсилання листів. Це інструмент для тестування електронної пошти, на який приходитимуть усі листи, відправлені екземпляром freeCodeCamp.

## Встановлення MailHog

MailHog можна встановити на macOS, Windows та Linux або використовувати через Docker

<details><summary>Встановлення MailHog за допомогою Docker</summary>

Якщо у вас встановлений Docker, ви можете використати

```bash
docker run -d --name mailhog --network host --rm mailhog/mailhog
```

для запуску MailHog у фоновому режимі та

```bash
docker stop mailhog
```

для його зупинки.

Коли встановлення завершено, ви можете почати [використовувати MailHog](#using-mailhog).

</details>

<details><summary>Встановлення MailHog на macOS</summary>

Встановіть MailHog на macOS за допомогою [Homebrew](https://brew.sh/):

```bash
brew install mailhog
brew services start mailhog
```

Наведені вище команди запустять MailHog у фоновому режимі.

Коли встановлення завершено, ви можете почати [використовувати MailHog](#using-mailhog).

</details>

<details><summary>Встановлення MailHog на Windows</summary>

Завантажте останню версію MailHog з [офіційного репозиторію MailHog](https://github.com/mailhog/MailHog/releases). Знайдіть та натисніть посилання для вашої версії Windows (32 або 64), і файл `.exe` буде завантажений на ваш комп’ютер.

Коли завантаження завершиться, натисніть на файл, щоб відкрити його. Може з’явитись сповіщення про заблоковані з’єднання із запитом на дозвіл для MailHog. Після надання доступу відкриється стандартний командний рядок Windows, де виконуватиметься MailHog.

Закрийте MailHog, закривши вікно командного рядка. Щоб знову запустити MailHog, натисніть на виконуваний файл MailHog (`.exe`), який був завантажений раніше — необов’язково завантажувати новий файл MailHog.

Почніть [використовувати MailHog](#using-mailhog).

</details>

<details><summary>Встановлення MailHog на Linux</summary>

Спочатку встановіть [Go](https://golang.org).

Виконайте наступні команди, щоб встановити GO на системах з основою Debian (наприклад, Ubuntu та Linux Mint).

```bash
sudo apt-get install golang
```

Виконайте наступні команди, щоб встановити GO на системах з основою RPM (наприклад, CentOS, Fedora, Red Hat Linux тощо).

```bash
sudo dnf install golang
```

Або запустіть наступні команди, щоб встановити GO.

```bash
sudo yum install golang
```

Тепер налаштуйте шлях для GO, використовуючи наступні команди.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Останнім кроком буде введення команди нижче, щоб встановити та запустити MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Почніть [використовувати MailHog](#using-mailhog).

</details>

## Використання MailHog

Відкрийте нову вкладку/вікно браузера та перейдіть до [http://localhost:8025](http://localhost:8025), щоб відкрити вхідні повідомлення на MailHog, коли налаштування MailHog буде завершене та MailHog запуститься.

## Корисні посилання

- Див. репозиторій [MailHog](https://github.com/mailhog/MailHog) для детальнішої інформації, яка стосується MailHog. Додаткова інформація щодо конфігурацій MailHog також доступна.
