---
title: Set Up D3
localeTitle: Configurar D3
---
## Configuração HTML

Por enquanto, você usará apenas um arquivo de texto e o navegador da web. Você começará com uma página estática de HTML. Então você adicionará d3.js. Crie uma pasta chamada _projetos_ d3js _. Crie um arquivo HTML na pasta chamada project_ 1.html.

Comece com uma página HTML básica:

```html

<!DOCTYPE html> 
 <html> 
  <head> 
  </head> 
  <body> 
    <p>Hello!</p> 
  </body> 
 </html> 
```

Que aparece no navegador:

![](https://d1gg5jm9r4jrt6.cloudfront.net/project_1_browser_snapshot_600x198.png)

### Configuração do D3.js

Para obter o arquivo JavaScript D3.js principal, acesse o site D3.js. Após o primeiro parágrafo na página, você verá uma seção com links para a versão mais recente. Faça o download da última versão d3.v2.min.js. Salve este arquivo na pasta d3js\_projects.

O arquivo d3.v2.min.js é salvo na mesma pasta que o arquivo HTML, para que possa ser facilmente referenciado. Nós referenciamos o arquivo JavaScript da cabeça do arquivo HTML. Nosso arquivo HTML atualizado agora se parece com isto:

`html <!DOCTYPE html> <html> <head> <script type="text/javascript" src="d3.v2.min.js"></script> </head> <body> <p>Hello!</p> </body> </html>`

Teste de instalação do arquivo de origem

Para testar nossa configuração do D3.js, abrimos o kit de ferramentas do elemento inspecionar. Na aba Elemento do Webkit Inspector, nós abrimos todos os elementos para que possamos ver toda a estrutura HTML. Em seguida, passamos o mouse sobre o d3.vs.min.js src.

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)

Quando clicamos no link, nos leva para a guia de fontes. Isso mostrará o código minado do D3.js.

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.source.check.png)

\### Teste de configuração do console JavaScript

O último teste será realizado no Console JavaScript. Este teste nos diz se o D3.js está carregado corretamente para nosso uso no Console JavaScript. Neste instantâneo, localize a aba "Console" no Webkit Inspector:

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)

Quando você clica na aba, ele mostra uma tela em branco onde você pode digitar e avaliar JavaScript.

![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Console_600x170.png)

No console do JavaScript, digite o seguinte:

`javascript alert("hello");`

Isso fará com que um alerta popup seja exibido e diga "Olá!". Isto é o que parece:

![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Consoler_Alert_600x335.png)

Agora, para testar se o D3.js está carregado corretamente. Digite um "d3" minúsculo no console seguido de um ponto:

`javascript d3`

Se tivermos o D3.js instalado corretamente, deve aparecer o seguinte:

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.javascript.console_300x420.png)

Se todos os testes foram aprovados e você conseguiu carregar o D3.js corretamente, você está pronto para começar.

\#### Mais Informações