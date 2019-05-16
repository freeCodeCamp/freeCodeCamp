---
title: The Anatomy of the Linux Command Line
localeTitle: A anatomia da linha de comando do Linux
---
# A anatomia da linha de comando do Linux

Neste mundo de tecnologia altamente gráfico-usuário-interfaceado (GUI) o comando, muitos usuários de computador acham a idéia de inserir comandos de texto (em um prompt de comando ou terminal) para executar funções básicas como repulsivo - e deve ser deixado para programadores ou desenvolvedores (na verdade geeks).

Felizmente, a interface de linha de comando (CLI) é a principal no mundo do Linux. Embora muitos tipos de linux vêm com GUIs bem polidas e intuitivas, para uma ótima experiência com o Linux, ainda é necessário ter familiaridade com o Linux CLI (terminal ou shell) para poder executar operações essenciais de computador de maneira rápida e limpa.

A linha de comando ainda desempenha funções muito importantes na vida do usuário do Linux e também no seu caso você opte por usá-lo.

No Linux, os comandos são fornecidos (digitados) no terminal. Embora o aplicativo terminal possa ter nomes variados em diferentes distribuições de linux (distros) - mas na maioria das vezes é simplesmente chamado de “terminal” ou um termo estreitamente relacionado.

Para começar a usar o terminal aberto (para o Ubuntu, simplesmente segure o Ctrl + Alt + T) e você será recebido por uma série de personagens organizados neste formato;

```shell
user_name@machine_name:~$ 
```

Você pode ver uma linha de comando terminando com um prompt de shell piscando, significando que o shell está pronto para receber comandos do usuário.

*   O **_“user\_name”_** representa o nome de login.
    
*   O **_“machine\_name”_** (também conhecido como o nome do domínio) é o nome atribuído ao computador (ou servidor) e geralmente é definido durante a instalação. Às vezes, também pode ser representado por um endereço IP.
    
*   O sinal de til **_“~”_** mostra que o diretório atual do usuário é sua "home" `(/home/user_name)` .
    
    *   Observe que cada usuário em um sistema Linux possui um diretório HOME criado para eles e esse diretório pessoal é sempre o mesmo nome com o nome de login (ou nome de usuário) do usuário. Isto é, se o nome de login for “john”, então seu diretório inicial será / home / john. No login, todos os usuários são levados diretamente para o seu diretório pessoal.

A partir do terminal de comando, você pode começar a dar comando ao shell. Múltiplos comandos podem ser dados em uma única linha de comando usando um ponto e vírgula para separá-los. Algo assim;

`user_name@machine_name:~$ who; free; df`

Mas, na maioria das vezes, para garantir uma saída limpa, é aconselhável inserir comandos um de cada vez, para não agrupar a tela.