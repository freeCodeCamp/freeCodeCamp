---
title: Hello World In Ionic 
localeTitle: Olá Mundo em Ionic
---
# Olá Mundo no Ionic !!

### Este é o editorial que vai passar por você para fazer um programa Hello World simulado no Ionic.

### Passos

#### 1\. Instale `ionic` , `npm` , `angular` e `cordova` se não for instalado \[Veja a [primeira](https://guide.freecodecamp.org/ionic) introdução para mais informações\]

```shell
sudo apt-get install nodejs 
 sudo apt-get install npm 
 sudo npm install -g ionic cordova 
```

#### 2\. Crie uma pasta chamada `helloworld`

```shell
ionic start helloworld blank 
```

Nota: Como este é um projeto pequeno, insira Não ou N quando solicitado durante a execução do programa.

#### 3\. Mude o diretório para `helloworld` \[este é o seu diretório iônico\]

```shell
cd helloworld 
```

#### 4\. Abra a pasta no seu editor de texto. você verá vários arquivos e subpastas.

Não entre em pânico, esses arquivos são gerados automaticamente pelo npm para você. Basta ir para `src` -> `page` -> `home` -> `home.html` .

#### 5\. Formato Básico de Arquivo
```
`home.html` is the html page where you can write html syntax.<br/> 
 
 `home.scss` is the css page to write css syntax.<br/> 
 
 `home.ts` is the typescript page to write typescript code. 
```

#### 6\. Exclua o modelo e adicione a sintaxe html conforme mostrado na imagem.

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
 
 
 #### 7. Salve o projeto e rode no terminal de sua preferência 
```shell
$ ionic serve
```
#### 8\. Para ver o seu código em execução, acesse o navegador e abra o host local: 8100 no URL.
