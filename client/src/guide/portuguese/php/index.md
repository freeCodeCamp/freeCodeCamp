---
title: PHP
localeTitle: PHP
---
![logo](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/150px-PHP-logo.svg.png "Logo do PHP")

## O que é PHP?

PHP é uma linguagem de script do lado do servidor criada em 1995 por Rasmus Lerdorf.

O PHP é uma linguagem de script de uso geral de software livre amplamente usada, especialmente adequada para o desenvolvimento da Web e que pode ser incorporada ao HTML.

## O que significa a sigla PHP?

Originalmente PHP significava 'Home Page Pessoal', como Rasmus Lerdorf criou para uso em seu próprio site. Então, em 1997, mais desenvolvedores expandiram a linguagem e acrônimo também mudou para o que é hoje: 'PHP: Hypertext Preprocessor'. Como o primeiro 'P' em PHP também significa 'PHP', é conhecido como 'acrônimo recursivo'.

## O que o PHP é usado para?

A partir de outubro de 2017, o PHP é usado em [82% dos sites cuja linguagem do lado do servidor é conhecida](https://w3techs.com/technologies/overview/programming_language/all) . Isto é normalmente usado em sites para gerar dinamicamente o conteúdo da página da web. Casos de uso incluem:

*   Websites e aplicativos da Web (scripts do lado do servidor)
*   Script de linha de comando
*   Aplicativos de desktop (GUI)

Normalmente, ele é usado no primeiro formulário para gerar dinamicamente o conteúdo da página da web. Por exemplo, se você tem um site de blog, pode escrever alguns scripts PHP para recuperar seus posts de um banco de dados e exibi-los. Outros usos para scripts PHP incluem:

*   Processando e salvando a entrada do usuário a partir de dados de formulário
*   Definir e trabalhar com cookies de sites
*   Restringindo o acesso a certas páginas do seu site

## Como o PHP funciona?

Todo código PHP é executado apenas em um servidor web, não em seu computador local. Por exemplo, se você preencher um formulário em um site e enviá-lo, ou clicar em um link para uma página da Web escrita em PHP, nenhum código PHP real será executado em seu computador. Em vez disso, os dados ou solicitação de formulário da página da Web são enviados para um servidor da Web para serem processados ​​pelos scripts PHP. O servidor da web envia o HTML processado de volta para você (que é de onde vem o 'Hypertext Preprocessor' no nome) e seu navegador da Web exibe os resultados. Por esse motivo, você não pode ver o código PHP de um site, apenas o HTML resultante que os scripts PHP produziram.

Isso é ilustrado abaixo:

![PHP-server-model](https://github.com/xeroxism/myImages/blob/master/FCC_guides/PHP-server-model.png?raw=true)

PHP é uma linguagem interpretada. Isso significa que, quando você faz alterações em seu código-fonte, você pode testar imediatamente essas alterações sem primeiro precisar compilar seu código-fonte em formato binário. Ignorar a etapa de compilação torna o processo de desenvolvimento muito mais rápido.

O código PHP é colocado entre as tags `<?php` e `?>` E pode ser incorporado ao HTML.

## Instalação

O PHP pode ser instalado com ou sem um servidor web.

### GNU / Linux

Em distribuições GNU / Linux baseadas em Debian, você pode instalar por:

```bash
sudo apt install php 
```

Após a instalação, você pode executar qualquer arquivo PHP simplesmente fazendo isso no terminal:
```
php file.php 
```

Você também pode instalar um servidor localhost para executar sites PHP. Para instalar o Apache Web Server:
```
sudo apt install apache2 libapache2-mod-php 
```

## O que o PHP pode fazer?

*   PHP pode gerar conteúdo de página dinâmico
*   PHP pode criar, abrir, ler, escrever, excluir e fechar arquivos no servidor
*   PHP pode coletar dados de formulário
*   PHP pode enviar e receber cookies
*   PHP pode adicionar, excluir, modificar dados em seu banco de dados
*   PHP pode ser usado para controlar o acesso do usuário
*   PHP pode criptografar dados

## Por que PHP?

*   PHP é executado em várias plataformas (Windows, Linux, Unix, Mac OS X, etc.)
*   PHP é compatível com quase todos os servidores usados ​​atualmente (Apache, IIS, etc.)
*   PHP suporta uma ampla gama de bancos de dados
*   PHP é grátis. Faça o download do recurso oficial do PHP: [secure.php.net](https://secure.php.net/)
*   O PHP é fácil de aprender e funciona de maneira eficiente no lado do servidor

## Frameworks PHP

Como escrever o código inteiro para um site não é realmente prático / viável para a maioria dos projetos, a maioria dos desenvolvedores tende a usar frameworks para o desenvolvimento da web. A vantagem de usar um framework é que

*   Você não tem que reinventar a roda toda vez que você cria um projeto, muitas das nuances já são cuidadas por você
*   Eles geralmente são bem estruturados para ajudar na separação de interesses
*   A maioria dos frameworks tende a seguir as melhores práticas da linguagem
*   Muitos deles seguem o padrão MVC (Model-View-Controller) para separar a camada de apresentação da lógica

## Estruturas populares

*   [Laravel](https://laravel.com/)
*   [Symfony](https://symfony.com/)
*   [Zend](http://www.zend.com/)
*   [CakePHP](https://cakephp.org/)

## Documentação

PHP está [bem documentado](http://php.net/docs.php) . Os [documentos oficiais](http://php.net/manual/en/) incluem exemplos em quase todos os guias de referência de funções, bem como comentários de usuários.

## Outros recursos

*   [Tizag.com PHP Tutorial](http://www.tizag.com/phpT/) : [tutoriais](http://www.tizag.com/phpT/) ainda relevantes para introdução ao PHP
*   [Awesome PHP](https://github.com/ziadoz/awesome-php) : uma lista curada de bibliotecas PHP, recursos e "coisas brilhantes"
*   [Laracasts.com](https://laracasts.com/) : um site de associação para aprender desenvolvimento de aplicações web com PHP