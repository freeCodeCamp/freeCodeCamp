---
title: Hello World In Ionic 
---

# Hello World in Ionic !!
### This is the editorial which will go through you for making a simlple Hello World program in Ionic.
### Steps


#### 1. Install `ionic` , `npm` ,`angular` and `cordova` if not installed.[See [first](https://guide.freecodecamp.org/ionic) introduction for more information]

```shell
sudo apt-get install nodejs
sudo apt-get install npm 
sudo npm install -g ionic cordova
```
   
#### 2. Create a folder named `helloworld`
         
```shell
ionic start helloworld blank
```
   Note:
   Since this is small project enter No or N when prompted during program execution.
   
  
#### 3. Change directory to `helloworld` [ this is your ionic directory]
         
```shell
cd helloworld
```
         
   
#### 4. Open the folder in your text editor . you will see various files and subfolder . 
Dont panic these files are generated automatically by npm for you.Just go to `src`->`page`->`home`->`home.html` .


#### 5. Basic File Format
    `home.html` is the html page where you can write html syntax.<br/>

    `home.scss` is the css page to write css syntax.<br/>

    `home.ts` is the typescript page to write typescript code.


#### 6. Delete the template and add the html syntax as shown in image.

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

```shell
ionic serve
```
   
#### 8. To see your code running go to browser and and open localhost:8100 in the url.
