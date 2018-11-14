---
title: Go
localeTitle: Идти
---
## Go

![Перейти на бампер](https://golang.org/doc/gopher/bumper320x180.png)

**Go** (или **golang** ) - это язык программирования, созданный в Google в 2007 году Робертом Гриземером, Роб Пайком и Кен Томпсоном. Это составленный, статически типизированный язык в традиции Algol и C. Он имеет сбор мусора, ограниченный структурный набор, безопасность памяти и добавленные возможности параллельного программирования CSP. Компилятор и другие инструменты языка, первоначально разработанные Google, являются бесплатными и с открытым исходным кодом. Его популярность быстро растет. Это отличный выбор для создания веб-приложений.

Для получения дополнительной информации [перейдите](https://golang.org/) на [главную страницу Go](https://golang.org/)

Хотите быстро пройти [тур по Go?](https://tour.golang.org/welcome/1)

## \## Предварительные установки:

#### Установите Golang с Homebrew:

```bash
$ brew update 
 $ brew install golang 
```

#### Установка в Linux:
Компилятор Go есть практически во всех самых распространённых дистрибутивах Linux.
Например установка в Archlinux:
`pacman -S go`
Также можно установить пакет go-tools, который содержит документацию и дополнительные инструменты для разработчиков.

#### Когда установлено, попробуйте запустить go версию, чтобы увидеть установленную версию Go.
`go version`

## \### Настройка рабочего пространства:

##### Добавить переменные среды:

Во-первых, вам нужно указать «Перейти к местоположению вашего рабочего пространства».

Мы добавим некоторые переменные среды в конфигурацию оболочки. Один из файлов, расположенных в вашем домашнем каталоге bash\_profile, bashrc или .zshrc (для Oh My Zsh Army)

```bash
$ vi .bashrc 
```

\`

затем добавьте эти строки для экспорта требуемых переменных

#### Это ваш файл .bashrc

```bash
export GOPATH=$HOME/go-workspace # don't forget to change your path correctly! 
 export GOROOT=/usr/local/opt/go/libexec 
 export PATH=$PATH:$GOPATH/bin 
 export PATH=$PATH:$GOROOT/bin 
```

## \#### Создайте рабочее пространство:

##### Создайте дерево каталогов рабочей области:

```bash
$ mkdir -p $GOPATH $GOPATH/src $GOPATH/pkg $GOPATH/bin 
 $GOPATH/src : Where your Go projects / programs are located 
 $GOPATH/pkg : contains every package objects 
 $GOPATH/bin : The compiled binaries home 
```

### Быстрый старт

Для быстрого запуска и разработки шаблона Go попробуйте [сплав](https://www.growthmetrics.io/open-source/alloy)

1.  Репозиторий Clone Alloy
```
git clone https://github.com/olliecoleman/alloy 
 cd alloy 
```

2.  Установка зависимостей
```
glide install 
 npm install 
```

3.  Запустите сервер разработки
```
go install 
 alloy dev 
```

4.  Посетите веб-сайт по адресу `http://localhost:1212`

_Сплав использует Node, NPM и Webpack_

### Playground

[Playground](https://play.golang.org/)

Изучение того, как установить компилятор go на вашем локальном компьютере, важно, но если вы хотите начать изучать go прямо сейчас, тогда Go Playground - идеальная песочница! Чтобы узнать больше о игровой площадке Go, см. их статью под названием [Inside the Go Playground](https://blog.golang.org/playground)
