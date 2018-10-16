---
title: Gulp
localeTitle: Gole
---
## Gole

`Gulp` é um executor de tarefas JavaScript usado para automatizar várias tarefas que fazem parte de um fluxo de trabalho de desenvolvimento de JavaScript. Ele é usado para executar tarefas que você programou e seu principal caso de uso é executar ações repetitivas que são usadas como um caminho do processo de construção para um projeto JavaScript.

### Por que o Gulp é útil?

Essas tarefas geralmente incluem coisas como `code minification` (remoção de espaços em branco de arquivos html e redução de nomes de variáveis ​​para tornar o tamanho do arquivo menor) e `css bundling` (convertendo vários arquivos CSS em um para distribuição com seu aplicativo), que são necessários para otimizar o código para carregar rápido em um navegador da web.

A razão pela qual o `Gulp` é útil nas situações acima é que o processo de minificação e empacotamento precisa acontecer com cada mudança. Não seria eficiente fazer isso manualmente a cada mudança, que é onde uma ferramenta como o `Gulp` , que faz isso automaticamente, é uma ótima ferramenta para desenvolvedores de JavaScript.

Assim como os exemplos relativamente simples acima, o `Gulp` possui centenas de plugins para permitir a automatização de tarefas mais complexas. Essas tarefas podem incluir coisas como:

*   A execução de testes de unidade para testar seu código está funcionando corretamente.
*   Atualizando seu navegador da Web sempre que um arquivo é salvo, permitindo que suas alterações sejam visualizadas instantaneamente.
*   Conversão de `SASS` / `LESS` para `CSS` , para que possa ser usada em um navegador.
*   Otimizando imagens para criar versões `web friendly` para a `web friendly` com tamanhos de arquivo menores para velocidade.

### Como usar o Gulp

Para começar a usar o `Gulp` , o primeiro passo é instalá-lo usando o `npm` . Depois de instalado, um `gulpfile.js` deve ser criado. Este `gulpfile` é um arquivo que contém todas as tarefas `Gulp` que devem ser executadas como parte de seu processo automatizado. As tarefas são escritas em JavaScript. Abaixo está um exemplo muito simples de um `gulpfile` , que pega qualquer arquivo `CSS` da pasta `client/templates` , o qualifica e coloca o arquivo minificado na pasta `build/css` .

```javascript
var gulp = require('gulp'); 
 var minifyCSS = require('gulp-csso'); 
 
 gulp.task('css', function(){ 
  return gulp.src('client/templates/*.css') 
    .pipe(minifyCSS()) 
    .pipe(gulp.dest('build/css')) 
 }); 
```

Para executar essa tarefa de gulp, tudo que você precisa fazer é digitar `gulp css` em um terminal na raiz do seu projeto.

Assistir os arquivos CSS para quaisquer alterações e executar a tarefa "css" depois que ela for salva.

```javascript
gulp.watch('css') 
  .on('change', ['css']); 
```

### Dependências de Tarefas

Por padrão, o gulp executará todas as tarefas definidas ao mesmo tempo e não esperará nada. Para executar várias tarefas na ordem correta, você pode adicionar uma tarefa como uma dependência a outra tarefa.

```javascript
gulp.task('two', ['one'], function() { 
    // task 'one' is done now 
 }); 
```

Com o trecho de código acima, a tarefa `two` só será executada após a conclusão da tarefa `one` .

Os Gulpfiles podem ter várias tarefas por arquivo e as tarefas também podem ser divididas em vários arquivos para uma organização. Isso, junto com as centenas de plugins disponíveis, o tornam uma estrutura muito flexível e útil para desenvolvedores de JavaScript.

#### Mais Informações:

[Site Gulp](https://gulpjs.com/)

[Repositório github Gulp](https://github.com/gulpjs/gulp)

[Guia para iniciantes de gole](https://css-tricks.com/gulp-for-beginners/)