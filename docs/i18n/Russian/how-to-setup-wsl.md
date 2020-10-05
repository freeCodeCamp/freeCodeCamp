# Настройте freeCodeCamp в подсистеме Windows для Linux (WSL)

> [!ПРИМЕЧАНИЕ] Прежде чем следовать этим инструкциям, убедитесь, что ваша система соответствует требованиям
> 
> **WSL 2**: Windows 10 64-bit (Версия 2004, Build 19041 или выше) - доступно для всех дистрибутивов, включая Windows 10 Home.
> 
> **Docker Desktop для Windows**: Смотрите соответствующие требования к [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) и [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

Это руководство описывает некоторые общие шаги с настройкой WSL2. После того, как будут решены некоторые общие проблемы с WSL2, вы можете следовать нашему руководству по локальной настройке для работы с бесплатным CodeCamp на Windows, в котором установлен дистрибутив WSL, как Ubuntu.

## Включить WSL

Следуйте инструкциям на [официальной документации](https://docs.microsoft.com/en-us/windows/wsl/install-win10) для установки WSL1, а затем обновитесь до WSL2.

## Install Ubuntu

1. Мы рекомендуем использовать Ubuntu-18.04 или выше с WSL2.

   > [!ПРИМЕЧАНИЕ]
   > 
   > В то время как вы можете использовать другие дистрибутивы, не основанные на дебитах, все они приходят со своими собственными привилегиями и выходят за рамки этого руководства.

2. Обновить зависимости для ОС

   ```console
   sudo apt update
   sudo apt upgrade -y

   # очистка
   sudo apt autoremove -y
   ```

## Настроить Git

Git поставляется с предустановленным Ubuntu 18.04, убедитесь, что ваша версия Git с `git --version`.

```output
~
<unk> git --version
git версии 2.25.1
```

(Необязательно, но рекомендуется) Теперь вы можете [настроить клавиши ssh](https://help.github.com/articles/generating-an-ssh-key) с помощью GitHub.

## Установка редактора кода

Мы настоятельно рекомендуем установить [Visual Studio Code](https://code.visualstudio.com) на Windows 10. Она имеет хорошую поддержку WSL и автоматически устанавливает все необходимые расширения на ваш WSL дистрибутив.

По сути, вы будете редактировать и хранить свой код на Ubuntu-18.04 с VS кодом, установленным в Windows.

## Установка Docker Desktop

**Docker Desktop для Windows** позволяет устанавливать и запускать базы данных и сервисы MongoDB, NGINX и т.д. Это полезно во избежание общих проблем с установкой MongoDB или других служб непосредственно на Windows или WSL2. Это полезно во избежание общих проблем с установкой MongoDB или других служб непосредственно на Windows или WSL2.

Следуйте инструкциям на [официальной документации](https://docs.docker.com/docker-for-windows/install) и установите Docker Desktop для вашего дистрибутива Windows.

Существует несколько минимальных требований к оборудованию для наилучшего использования.

## Настройка Docker Desktop для WSL

После установки Docker Desktop [следуйте этим инструкциям](https://docs.docker.com/docker-for-windows/wsl) и настройте его на использование установки Ubuntu-18.04 в качестве бэкэнда.

Это делает так, что контейнеры запускаются на WSL стороне вместо работы с Windows. Вы сможете получить доступ к сервисам через `http://localhost` в Windows и Ubuntu.

## Установить MongoDB из Docker Hub

После настройки Docker Desktop для работы с WSL2, выполните следующие шаги для запуска сервиса MongoDB:

1. Запустите новый Ubuntu-18.04 терминал

2. Потяните `MongoDB 3.6` из докерхаба

   ```console
   docker pull mongo:3
   ```

3. Запустите сервис MongoDB в порту `27017`и настройте его автоматически при перезапуске системы

   ```console
   docker run -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb \
     --restart unless-stopped \
     -d mongo:3
   ```

4. Теперь вы можете получить доступ к службе в Windows или Ubuntu на `mongodb://localhost:27017`.

## Установка Node.js и npm

Мы рекомендуем вам установить LTS релиз для Node.js с помощью менеджера версий узла - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

После установки используйте эти команды для установки и использования версии Node.js при необходимости

```console
nvm install --lts

# ИЛИ
# nvm install <version>

nvm install 14

# Использование
# nvm use <version>

nvm use 12
```

Node.js поставляется в комплекте с `npm`, вы можете обновить до последних версий `npm` с:

```console
npm install -g npm@latest
```

## Настроить freeCodeCamp локально

Теперь, когда вы установили предварительные требования, следуйте [нашему локальному руководству по настройке](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) для клонирования, установки и установки freeCodeCamp локально на вашей машине.

> [!ВНИМАНИЕ]
> 
> Обратите внимание, на данный момент настройка тестов Cypress (и связанных с ними интерфейсов) находится в процессе работы. Вы все еще должны иметь возможность работать на большей части базы кода.

## Полезные ссылки

- [WSL2 Dev установка с Ubuntu 20.04, Node.js, MongoDB, VS Code и Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - статья Mrugesh Mohapatra (Staff Developer at freeCodeCamp.org)
- Часто задаваемые вопросы:
  - [Подсистема Windows для Linux](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Рабочий стол Docker для Windows](https://docs.docker.com/docker-for-windows/faqs)
