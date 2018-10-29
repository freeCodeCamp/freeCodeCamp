---
title: Front End File Structure
localeTitle: Estrutura de arquivos front-end
---
Primeiras coisas primeiro: todos os seus arquivos voltados ao usuário e arquivos angulares estão em **/ client / app /**

1.  **app.js** : define seu aplicativo e inclui algumas funções básicas de todo o aplicativo. Você provavelmente não precisa mexer nele, a menos que esteja tentando adicionar mais dependências ao seu aplicativo. Não vamos nos preocupar com isso agora.
2.  **app.css** : uma folha de estilo em todo o aplicativo, você pode colocar estilos aqui, se quiser, mas eu recomendo que você os coloque em **main / main.css** , pois esses estilos também são em todo o aplicativo.
3.  **main /** : esta pasta contém o que o usuário vê primeiro quando carrega seu site. **main.html** é o modelo de página, **main.js direciona** o usuário para **main.html** quando o usuário **acessa** o diretório de nível superior do seu site - ou seja, http: //yourapp.wherever.itis/ sem / other / url / hierarquia . Você também aprenderá em breve que pode definir o / url / heirarchy / razoavelmente / arbitrariamente do seu aplicativo. Você não precisa realmente editar **main.js** ou **main.controller.spec.js** , então não vamos nos preocupar com isso agora. Se você olhar pelo arquivo **main.html,** verá que ele usa _ng-repeat_ para mostrar _coisas_ em _awesomeThings_ . Onde fica _incrível_ ?
4.  **main / main.controller.js** : todas as funções javascript que você deseja usar para interagir diretamente com o usuário vão aqui! Você colocará funções aqui para interagir com sua API, atualizar visualizações para seu usuário, etc. Aqui, os _awesomeThings_ são extraídos do seu banco de dados e adicionados ao escopo local para que sua exibição de HTML possa exibi-los! Que legal! Nós vamos adicionar objetos personalizados ao seu banco de dados em um minuto.

Ótimo! Agora você sabe interagir com o usuário! Mas e se você quiser que seu aplicativo tenha outra página que faça outra coisa? Talvez **main.html** mostre a home page, mas você quer uma página que mostre um formulário para adicionar uma enquete? talvez http: //yourapp.wherever.itis/newpage ? Este é o lugar onde o gerador yeoman vem a calhar.

[ANTERIOR](http://forum.freecodecamp.com/t/guides-to-back-end-projects/14265) PRÓXIMO