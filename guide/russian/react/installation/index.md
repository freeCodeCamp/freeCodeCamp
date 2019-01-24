---
title: Installation
localeTitle: Монтаж
---
## Установка React

### Создание нового проекта React

Вы можете просто встроить библиотеку React на свою веб-страницу так как в <sup>2</sup>:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0/cjs/react.production.min.js"></script> 
```

Умные программисты хотят использовать более практичный и продуктивный способ: [создать приложение React](https://github.com/facebookincubator/create-react-app)
```bash
npm install -g create-react-app 
 create-react-app my-app 
 
 cd my-app 
 npm start 
```

Это создаст среду разработки, чтобы вы могли использовать новейшие функции JavaScript, обеспечит хороший опыт разработчиков и оптимизирует ваше приложение для производства.

`npm start` запустит сервер разработки, который позволяет осуществлять live reloading<sup>3</sup>.

После того, как вы закончите свой проект и готовы развернуть свое приложение на production, вы можете просто использовать `npm run build` для создания оптимизированной сборки вашего приложения в папке `build` .

#### Полезные ссылки

[Создать репозиторий приложения React](https://github.com/facebookincubator/create-react-app#create-react-app-)

#### Источники

[1\. Учебное пособие по установке](https://reactjs.org/docs/installation.html) [2\. Ссылка на минимизированную библиотеку JavaScript React на cdnjs.org](https://cdnjs.com/libraries/react) [3\. Команда запуска npm](https://docs.npmjs.com/cli/start)
