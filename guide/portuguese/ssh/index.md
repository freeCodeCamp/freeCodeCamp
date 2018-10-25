---
title: SSH
localeTitle: SSH
---
## SSH

O Secure Shell (SSH) é um protocolo de rede criptográfica destinado à transferência segura de dados em redes inseguras.

É mais comumente usado para acessar servidores remotos. Em geral tais servidores sao baseados em Linux ou BSD, no entanto outras plataformas podem oferecer SSH. Alem disto, é importante notar que outros utencilios computacionais, em particular os utilizados em redes, como switches ou roteadores, podem ter SSH tambem. SSH tambem e usado em softwares de controle de versao de codigo aberto como o git.

De um ponto de vista de redes o SSH pode, dependendo dos programas do servidor e do cliente, permitir recursos mais avancados como encaminhamento XServer para acesso remoto de aplicativos graficos ou tunelamento de rede para permitir o que é efetivamente uma Rede Privada Virtual (VPN), i.e., *Virtual Private Network*.

Embora o SSH tenha '*Seguro*' em seu nome, o seu predomínio o torna um alvo atrativo de ataques. Desta forma em geral ele é configurado para usar métodos mais elaborados que simples senhas. Normalmente isso é feito através do uso de chaves em um sistema criptográfico de chave pública e privada. O metodo criptografico exato pode variar tambem, sendo o RSA o mais comum.

Assim como a maior parte dos servicos de rede o SSH possui uma porta de rede padrão, 22; no entanto, como o SSH e um alvo atrativo para aqueles que desejam causar mal, a mesma é em geral movida para uma porta arbitrária como uma medida muito simples de segurança.

Por fim, vale a pena citar que o SSH é longe de tolerante a instabilidades na rede e existem outras alternativas que podem melhorar isto ou substituir o SSH completamente.