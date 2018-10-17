---
title: Learn Some Gulp Basics
localeTitle: Aprenda alguns princípios básicos do Gulp
---
Gulp pode fazer **muito** . Esta é apenas uma visão geral do básico. Depois de entender isso, você pode adicionar mais ao Gulp por conta própria. A documentação para diferentes pacotes que usei tem sido ótima e também temos uma grande comunidade no FreeCodeCamp pronta para ajudar com qualquer projeto.

![Logo Gulp](https://raw.githubusercontent.com/gulpjs/artwork/master/gulp.png)

## O que é o Gulp?

Gulp é um corredor de criação / tarefa em JavaScript. Você está usando Jade, mas precisa de HTML? Sass, mas precisa de CSS? CoffeeScript, mas precisa de JavaScript? Ou talvez você só queira concatenar e / ou minimizar o que você já tem? Gulp pode fazer tudo isso facilmente, então você não precisa voltar ao seu terminal após cada pequena mudança.

## Por que usar Gulp?

Nós usamos muito CodePen no FreeCodeCamp. CodePen permite o uso de pré-processadores sem ter que fazer mais nada. Você pode ver a versão compilada se um pré-processador foi usado. Parece muito diferente. Você pode fazer um projeto no React on CodePen, escolher o Babel como o pré-processador do JavaScript e tudo funcionará. Se você fizesse esse mesmo projeto localmente sem processar tudo, não conseguiria o que esperava. É aqui que entra o Gulp.

## Como faço para usar o Gulp?

Mais uma vez, esta é apenas uma visão geral do básico. A visão geral vai processar Sass para CSS, concatenando e diminuindo folhas de estilo e scripts, e implementando Gulp watch. Você precisa do Node e do NPM instalados no seu computador antes de fazer qualquer coisa. Você provavelmente já tem isso, mas insira o `node -v` e `npm -v` em seu terminal para verificar.

*   Mude para o diretório do projeto e execute `npm init` no terminal.
    
    *   Isso cria o arquivo `package.json` no diretório de trabalho.
        
    *   Este também seria um bom momento para executar o `touch .gitignore` no terminal e adicionar `node_modules/` no arquivo, assim você não estará empurrando todos esses pacotes para o GitHub.
        
*   Execute `npm install --save-dev gulp gulp-concat gulp-minify-css gulp-rename gulp-sass gulp-uglify` no terminal. Isso pode levar alguns minutos para terminar.
    
    *   Isso está instalando 6 `node_modules` diferentes. Você pode dar uma olhada no arquivo `package.json` e ver todos esses listados em `devDependencies` e na pasta `node_modules` e ver cada pacote que você instalou.
        
    *   `gulp-concat` é para concatenar folhas de estilo e scripts, `gulp-minify-css` é para diminuir o CSS, `gulp-rename` é para renomear o arquivo, `gulp-sass` é para Sass para CSS, e `gulp-uglify` é para diminuir o JS.
        
*   Execute o `touch gulpfile.js` no terminal.
    
    *   Agora você está pronto para começar.
*   Você precisará exigir todos os arquivos que acabou de salvar. Você faz isso em `gulpfile.js` .
    

```javascript
    'use strict'; 
 
    var gulp = require('gulp'); 
    var concat = require('gulp-concat'); 
    var minifyCss = require('gulp-minify-css'); 
    var rename = require('gulp-rename'); 
    var sass = require('gulp-sass'); 
    var uglify = require('gulp-uglify'); 
```

*   Nós precisamos começar em algum lugar, então Sass para CSS primeiro? Aqui vamos processar Sass para CSS, diminuir o CSS e renomear o arquivo.
    
    *   O nome da tarefa `sass` (mais sobre isso depois).
        
    *   No diretório atual, estamos procurando por uma pasta chamada `assets` , em seguida, uma pasta chamada `scss` , em seguida, um arquivo chamado `main.scss` .
        
    *   Estamos processando o Sass para CSS e registrando se ocorrer um erro.
        
    *   O CSS é então reduzido. Isso é apenas livrar-se de todas essas linhas e espaços extras. O computador não precisa deles para ler o arquivo e reduz drasticamente o tamanho do arquivo.
        
    *   Como o arquivo agora está reduzido, faz sentido renomeá-lo `.min.css` .
        
    *   O último passo é salvar o arquivo `main.min.css` algum lugar e ele está indo no diretório atual para uma pasta chamada `public` , em seguida, uma pasta chamada `css` .
        

```javascript
    gulp.task('sass', function() { 
        return gulp.src('./assets/scss/main.scss') 
        .pipe(sass().on('error', sass.logError)) 
        .pipe(minifyCss({compatibility: 'ie8'})) 
        .pipe(rename('main.min.css')) 
        .pipe(gulp.dest('./public/css')); 
    }); 
```

*   Agora podemos entrar um pouco mais no Gulp e tentar concatenar e diminuir todos os arquivos de script. E se você tiver apenas um script agora, então você não tem nada para concatenar? Talvez se livre de algumas das CDNs que você possui e faça scripts. Mas você chegará a projetos maiores que possuem vários scripts.
    
    *   Por favor, note que eu não estou cobrindo mapas de origem. Eu acho que esse é o próximo passo após esta visão geral básica, então olhe para lá depois de entender o que você está fazendo aqui.
        
    *   As tarefas atuais são nomeadas `concatScripts` e `minifyScripts` .
        
    *   Essa é a mesma estrutura básica do `sass` . Todos os arquivos são adicionados ao `gulp.src` , mas primeiro precisamos salvar esse arquivo concatenado antes que ele seja reduzido.
        
    *   A redução do JavaScript é chamada de `uglify` .
        
    *   Você percebe `['concatScripts]` após `minifyScripts` ? Isso significa que o `concatScripts` será executado primeiro toda vez que tentarmos executar o `minifyScripts` .
        

```javascript
    gulp.task('concatScripts', function() { 
        return gulp.src([ 
            './assets/js/script-1.js', 
            './assets/js/script-2.js', 
            './assets/js/script-3.js' 
        ]) 
        .pipe(concat('app.js')) 
        .pipe(gulp.dest('./assets/js')); 
    }); 
 
    gulp.task('minifyScripts', ['concatScripts'], function() { 
        return gulp.src('assets/js/app.js') 
        .pipe(uglify()) 
        .pipe(rename('app.min.js')) 
        .pipe(gulp.dest('public/app/js')); 
    }); 
```

*   Agora você pode ir para o terminal e digitar `gulp sass` e / ou `gulp minifyScripts` . Isso executará cada um deles, mas queremos facilitar para nós. Nós vamos fazer uma compilação padrão, então nós podemos apenas inserir `gulp` no terminal. Nós também vamos adicionar o `gulp watch` , então sempre que você salvar um arquivo listado no relógio, ele executará o que você disse para ele rodar.
    
    *   Nós fizemos uma tarefa chamada `build` . Isso é muito parecido com o `minifyScripts` já que existe um array nele. Sempre que entramos no `gulp build` no terminal, ele executa `sass` e `minifyScripts` (que, na verdade, executa `concatScripts` primeiro).
        
    *   Também fizemos uma tarefa chamada `watch` . Esta é a tarefa de economia de tempo. No terminal você executa `gulp watch` . Gulp permanecerá aberto no terminal, então você provavelmente desejará executá-lo em outra guia. Sempre que um arquivo é atualizado e salvo na pasta `scss` com uma extensão `.scss` a tarefa `sass` será executada. E a mesma coisa para um arquivo na pasta `js` com uma extensão `.js` , mas `concatScripts` e `minifyScripts` serão executados.
        
    *   A última tarefa é `default` . Você pode simplesmente executar `gulp` no terminal e ele executará a tarefa `default` . A tarefa `default` aqui é chamar a tarefa de `build` , que apenas executa todas as tarefas que temos na página.
        

```javascript
    gulp.task('build', ['sass', 'minifyScripts']); 
 
    gulp.task('watch', function() { 
        gulp.watch('./assets/scss/**/*.scss', ['sass']); 
        gulp.watch('./assets/js/**/*.js', ['minifyScripts']); 
    }); 
 
    gulp.task('default', ['build']); 
```

É assim que o seu arquivo `gulpfile.js` final deve ser:

```javascript
    'use strict'; 
 
    var gulp = require('gulp'); 
    var concat = require('gulp-concat'); 
    var minifyCss = require('gulp-minify-css'); 
    var rename = require('gulp-rename'); 
    var sass = require('gulp-sass'); 
    var uglify = require('gulp-uglify'); 
 
    gulp.task('sass', function() { 
        return gulp.src('./assets/scss/main.scss') 
        .pipe(sass().on('error', sass.logError)) 
        .pipe(minifyCss({compatibility: 'ie8'})) 
        .pipe(rename('main.min.css')) 
        .pipe(gulp.dest('./public/css')); 
    }); 
 
    gulp.task('concatScripts', function() { 
        return gulp.src([ 
            './assets/js/script-1.js', 
            './assets/js/script-2.js', 
            './assets/js/script-3.js' 
        ]) 
        .pipe(concat('app.js')) 
        .pipe(gulp.dest('./assets/js')); 
    }); 
 
    gulp.task('minifyScripts', ['concatScripts'], function() { 
        return gulp.src('assets/js/app.js') 
        .pipe(uglify()) 
        .pipe(rename('app.min.js')) 
        .pipe(gulp.dest('public/app/js')); 
    }); 
 
    gulp.task('build', ['sass', 'minifyScripts']); 
 
    gulp.task('watch', function() { 
        gulp.watch('./assets/scss/**/*.scss', ['sass']); 
        gulp.watch('./assets/js/**/*.js', ['minifyScripts']); 
    }); 
 
    gulp.task('default', ['build']); 

```