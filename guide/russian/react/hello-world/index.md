---
title: Hello World
---
## Hello World!!

Каждое изучение языка начинается с традиционного примера Hello World. Здесь вы познакомитесь с React с той же программой HelloWorld.

Все в React - это компонент.

Но перед этим нам нужно убедиться, что на компьютере установлены node.js и npm. По желанию мы можем использовать CRA (Create React App), который является инструментом, созданным разработчиками в Facebook, чтобы помочь вам создавать React приложения. Это избавит вас от длительной настройки и конфигурации. Вы просто запускаете одну команду и create-react-app устанавливая инструменты, необходимые для запуска проекта React.

Мы можем установить его с помощью следующих команд:
```
npm install -g create-react-app 
 
 create-react-app my-app 
 
 cd my-app 
 npm start 
```

Командная строка должна предоставить вам выход, где вы можете найти приложение в браузере. Значение по умолчанию должно быть localhost:8080. Если вы используете только IE или Edge на своей машине Windows, я могу порекомендовать вам также установить Chrome, чтобы получить доступ к среде разработчика и инструментам разработки React, которые доступны в качестве расширения Chrome.

![alt стартовая страница React](https://cdn-images-1.medium.com/max/800/1*Qcry5pCXIy2KeNRsq3w7Bg.png)

#### SRC / App.js

скопируйте приведенный ниже код и вставьте его в src / App.js

```javascript
  import React from 'react'; 
 
  class App extends React.Component{ 
    constructor(props) { 
      super(props); 
    } 
 
    render(){ 
      return( 
        <div> 
          <p>Hello World !!</p> 
        </div> 
      ); 
    } 
  } 
 
  export default App; 
```

Если мы проверим файл index.js в папке src, мы обнаружим, что вышеуказанный App.js вызывается в index.js, а затем отображается.

```javascript
// Other code 
 import App from './App'; // The App component is imported 
 
 // Other code 
 ReactDOM.render(<App />, 
 document.getElementById('root'));  //The <App /> is the way components are called in react after importing them 
 
 // Other code 
```

В приведенном выше примере App.js называется компонентом. Обычно мы создаем несколько компонентов и складываем их в App.js, которые затем будут отображаться в index.js, который затем отображается в корневом div, который находится в index.html.

Поздравляю! Вы создали свое первое приложение React Hello world. Вы узнаете больше о React в следующих статьях.

Веселого кодинга!
