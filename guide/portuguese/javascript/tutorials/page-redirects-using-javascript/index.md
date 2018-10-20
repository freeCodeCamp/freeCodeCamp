---
title: Page Redirects Using JavaScript
localeTitle: Página Redireciona Usando JavaScript
---
## Página Redireciona Usando JavaScript

Se você estiver tentando redirecionar um usuário para outra página, poderá usar o JavaScript facilmente para realizar essa tarefa. É importante observar o seguinte:

Mesmo se você tiver a biblioteca jQuery carregada em seus scripts, talvez você queira usar a solução JavaScript pura para redirecionamentos de página para fins de eficiência.

Existem várias maneiras diferentes de fazer isso, mas a maneira mais simples é usar o objeto `window.location` para enviar o usuário para a página para a qual você deseja que ele seja redirecionado. O objeto `window.location` pode usar qualquer valor de URL válido, como `http://www.yoururl.com` , `somepage.html` etc.

```javascript
window.location = 'http://www.yoururl.com'; 
 // window.location = 'somepage.html'; 
 // etc. 
```

### Redirecionamento de Caso Especial

Você pode usar um método de redirecionamento especial que, por padrão, é anexado ao objeto `window.location` em cada navegador principal denominado `replace()` . Esse método aceita os mesmos valores de URL válidos que apenas usando `window.location` .

Aqui está um exemplo de como usar esse método (ele ainda funcionará da mesma forma que usar `window.location` em outros navegadores):

```javascript
window.location.replace('http://www.yoururl.com'); 
 // window.location.replace('somepage.html'); 
 // etc. 
```

### Um redirecionamento temporizado simples usando JS

Aqui está um exemplo de um redirecionamento cronometrado simples usando a função `setTimeout()` . Os redirecionamentos cronometrados são úteis para que você possa explicar ao usuário, por meio do conteúdo na página de redirecionamento, o motivo pelo qual eles estão sendo redirecionados para outra página.

```javascript
// the 5000 below is 5000 milliseconds which equals 5 seconds until the redirect happens 
 // keep in mind that 1 second = 1000 milliseconds 
 setTimeout(function () { 
    window.location = 'http://www.yoururl.com'; 
    // window.location = 'somepage.html'; 
    // etc. 
 }, 5000); 
```

### Cair pra trás

Às vezes, os usuários navegam na Internet com o JavaScript desabilitado, e isso obviamente apresentaria problemas com uma solução de redirecionamento dependente do JS. Recomendo definir um elemento `<meta>` que atualize o navegador com o novo local. Eu definiria o tempo para esse elemento meta ser um segundo depois do suposto redirecionamento de JS. Portanto, se você tiver um redirecionamento que acontece no JS após 5 segundos, defina o redirecionamento do elemento `<meta>` para ocorrer em 6 segundos.

Coloque o elemento `<meta>` dentro do `<head>` do seu documento da seguinte forma:

```html

<head> 
    <!-- Change the 6 below to however many seconds you wish to wait until redirection to the new page.  Change the portion after "URL=" to the URL of your choice.  This can be a local page: URL=somepage.html, a web address: URL=http://www.yoururl.com, or any other valid URL. It is important to note the semicolon between the number of seconds to refresh and the URL. --> 
    <meta http-equiv="refresh" content="6;URL=http://www.yoururl.com"> 
 </head> 
```

Tenha em mente que nem todos os navegadores suportam o elemento `<meta>` (estou olhando para você, versões anteriores do IE e Safari), mas a maioria dos navegadores modernos (Microsoft Edge, Google Chrome, Mozilla Firefox, Opera).