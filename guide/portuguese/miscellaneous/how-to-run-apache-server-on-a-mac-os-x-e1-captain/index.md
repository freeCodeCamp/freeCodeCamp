---
title: How to Run Apache Server on a Mac Os X E1 Captain
localeTitle: Como executar o Apache Server em um capitão do Mac Os X E1
---
[O](http://www.apache.org/) servidor [Apache](http://www.apache.org/) é pré-construído no Mac OS X, não é necessário instalar ferramentas de terceiros WAMP, LAMP, MAMP e XAMPP para executar o servidor Apache no Mac.

Quando você considera executar o servidor [Apache](http://www.apache.org/) no Mac OS X E1 Capitão / OS X Yosemite, é bastante diferente das versões anteriores. Aqui você deve a partir de janelas do terminal, opções GUI anteriores para assinalar como webserver da janela de controle do sistema é retirado.

Digite na sua janela de terminal:
```
httpd -v 
```

Ele fornece a versão do servidor e a data de construção.

Aqui http significa Protocolo de Transferência de Hipertexto d significa Daemon, que é um programa de software para uso de multitarefa que também usa no Mac OS X. `httpd` é o programa do servidor Apache HyperText Transfer Protocol (HTTP). Ele é projetado para ser executado como um processo de daemon independente. Tipo
```
sudo apachectl start 
```

na janela do seu terminal e vá para o seu navegador e digite `http://localhost` você terá, `It works!` no seu navegador.