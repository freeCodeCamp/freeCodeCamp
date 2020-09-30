> **Nota:** Esta é uma **etapa** opcional e é necessária somente quando trabalhando com fluxos de trabalho de e-mail

## Introdução

Alguns fluxos de e-mail, como atualizar o e-mail de um usuário, requer que o servidor api-end envie e-mails de saída. Uma alternativa ao uso de um provedor de serviço de e-mail para enviar mensagens reais de e-mail, Mailhog é uma ferramenta de desenvolvedor para teste de e-mail que irá pegar as mensagens de e-mail enviadas pela sua instância de freeCodeCamp.

## Instalando MailHog

MailHog pode ser instalado no macOS, Windows e Linux.

- [Introdução](#introduction)
- [Instalando MailHog](#installing-mailhog)
  - [Instalando MailHog no macOS](#installing-mailhog-on-macos)
  - [Instalando MailHog no Windows](#installing-mailhog-on-windows)
  - [Instalando MailHog no Linux](#installing-mailhog-on-linux)
- [Usando MailHog](#using-mailhog)
- [Links Úteis](#useful-links)

### Instalando MailHog no macOS

Instale o MailHog no macOS com [Homebrew](https://brew.sh/):

```bash

brew install mailhog 
 brew services start mailhog
```

Os comandos acima iniciarão um serviço de mailhog em segundo plano.

Quando a instalação for concluída, você pode começar [usando MailHog](#using-mailhog).

### Instalando MailHog no Windows

Baixe a versão mais recente do MailHog do [repositório oficial do MailHog](https://github.com/mailhog/MailHog/releases). Localize e clique no link para a sua versão do Windows (32 ou 64 bits) e um arquivo .exe será baixado para o computador.

Quando o download terminar, clique para abrir o arquivo. Uma notificação de firewall do Windows pode aparecer, solicitando permissão de acesso para MailHog. Um prompt de linha de comando padrão do Windows abrirá onde o MailHog será executado quando o acesso ao firewall for concedido.

Feche o MailHog fechando a janela de solicitação. Para iniciar o MailHog novamente, clique no executável do MailHog (. xe) arquivo que foi baixado inicialmente - não é necessário baixar um novo arquivo de instalação do MailHog.

Comece [usando MailHog](#using-mailhog).

### Instalando MailHog no Linux

Primeiro, instale [Go](https://golang.org).

Execute os seguintes comandos para instalar GO em sistemas baseados em Debian, como o Ubuntu e o Linux Mint.

```bash
sudo apt-get install golang
```

Execute os seguintes comandos para instalar GO em sistemas baseados em RPM, como CentOS, Fedora, Red Hat Linux, etc.

```bash
sudo dnf install golang
```

Como alternativa, execute os seguintes comandos para instalar o GO.

```bash
sudo yum install golang
```

Agora defina o caminho para ir com os seguintes comandos.

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

Finalmente, digite os comandos abaixo para instalar e executar MailHog.

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

Comece [usando MailHog](#using-mailhog).

## Usando MailHog

Abra uma nova guia ou janela do navegador e navegue até [http://localhost:8025](http://localhost:8025) para abrir sua caixa de entrada do MailHog quando a instalação do MailHog for concluída e o MailHog estiver em execução. A caixa de entrada se parece parecida com a captura de tela abaixo.

![Screenshot do MailHog 1](images/mailhog/1.jpg)

E-mails enviados pela instalação do seu CodeCamp aparecerão abaixo

![Screenshot MailHog 2](images/mailhog/2.jpg)

Duas guias que permitem que você veja texto simples ou conteúdo fonte estarão disponíveis quando você abrir um determinado e-mail. Certifique-se de que a aba de texto simples esteja selecionada como abaixo.

![Screenshot MailHog 3](images/mailhog/3.jpg)

Todos os links no e-mail devem ser clicáveis e resolver a URL deles.

## Links Úteis

- Confira o repositório [MailHog](https://github.com/mailhog/MailHog) para mais informações relacionadas ao MailHog. Informações adicionais também estão disponíveis sobre configurações personalizadas de MailHog.
