---
title: Hello World In Ionic 
localeTitle: Hello World In Ionic
---
# Hello World in Ionic !!

### Это редакторская статья, которая пройдет через вас для создания простой программы Hello World в Ionic.

### меры

#### 1\. Установите `ionic` , `npm` , `angular` и `cordova` если он не установлен. \[См. [Первое](https://guide.freecodecamp.org/ionic) введение для получения дополнительной информации\]

```shell
sudo apt-get install nodejs 
 sudo apt-get install npm 
 sudo npm install -g ionic cordova 
```

#### 2\. Создайте папку с именем `helloworld`

```shell
ionic start helloworld blank 
```

Заметка: Поскольку это небольшой проект, введите No или N, когда будет предложено во время выполнения программы.

#### 3\. Измените каталог на `helloworld` \[это ваш ионный каталог\]

```shell
cd helloworld 
```

#### 4\. Откройте папку в текстовом редакторе. вы увидите различные файлы и подпапку.

Не паникуйте, эти файлы генерируются автоматически с помощью npm для вас. Просто перейдите на `page` `src` -> `page` -> `home` -> `home.html` .

#### 5\. Основной формат файла
```
`home.html` is the html page where you can write html syntax.<br/> 
 
 `home.scss` is the css page to write css syntax.<br/> 
 
 `home.ts` is the typescript page to write typescript code. 
```

#### 6\. Удалите шаблон и добавьте синтаксис html, как показано на изображении.

```html

 <ion-header> 
  <ion-navbar> 
    <ion-title> 
      Ionic Project 
    </ion-title> 
   </ion-navbar> 
  </ion-header> 
 
  <ion-content padding> 
   <h2>Hello World </h2> 
  </ion-content> 
 ``` 
 
 
 #### 7. Save the code and run 
```

оболочка ионная подача \`\` \`

#### 8\. Чтобы увидеть, как работает ваш код, перейдите в браузер и откройте localhost: 8100 в URL-адресе.