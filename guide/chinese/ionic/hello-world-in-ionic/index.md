---
title: Hello World In Ionic 
localeTitle: 离子世界你好
---
# 爱奥尼亚的Hello World !!

### 这是一篇社论，它将通过你在Ionic制作一个简单的Hello World程序。

### 脚步

#### 1.如果没有安装，请安装`ionic` ， `npm` ， `angular`和`cordova` 。\[有关详细信息，请参阅[第一篇](https://guide.freecodecamp.org/ionic)介绍\]

```shell
sudo apt-get install nodejs 
 sudo apt-get install npm 
 sudo npm install -g ionic cordova 
```

#### 2.创建名为`helloworld`的文件夹

```shell
ionic start helloworld blank 
```

注意： 由于这是小项目，因此在程序执行期间出现提示时输入No或N.

#### 3.将目录更改为`helloworld` \[这是您的离子目录\]

```shell
cd helloworld 
```

#### 4.在文本编辑器中打开文件夹。你会看到各种文件和子文件夹。

不要惊慌这些文件由npm为你自动生成。只需转到`src` - > `page` - > `home` - > `home.html` 。

#### 5.基本文件格式
```
`home.html` is the html page where you can write html syntax.<br/> 
 
 `home.scss` is the css page to write css syntax.<br/> 
 
 `home.ts` is the typescript page to write typescript code. 
```

#### 6.删除模板并添加html语法，如图所示。

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

贝壳 离子发球 \`\`\`

#### 8.要查看运行的代码，请转到浏览器并在URL中打开localhost：8100。