---
title: Managing multiple SSH keys
localeTitle: Gerenciando várias chaves SSH
---
# Gerenciando várias chaves SSH

É seguro dizer que a maioria dos desenvolvedores na esfera da Web, em algum momento, encontrou o SSH. O SSH é um dos protocolos mais utilizados para troca segura de dados. Você usa o SSH para conectar-se a servidores remotos, o que também inclui o gerenciamento de seu código usando o git e a sincronização com repositórios remotos.

Mesmo que seja considerado uma boa prática ter um par de chaves privado-público por dispositivo, às vezes você precisa usar várias chaves e / ou você tem nomes de chaves não ortodoxos. Você pode estar usando um par de chaves SSH para trabalhar nos projetos internos de sua empresa, mas pode estar usando uma chave diferente para acessar alguns servidores de clientes corporativos. Você pode até estar usando uma chave diferente para acessar seu próprio servidor privado.

O gerenciamento de chaves SSH pode se tornar incômodo assim que você precisar usar uma segunda chave. Espero que este artigo seja de ajuda para quem está tendo problemas com o gerenciamento de chaves SSH.

Eu suponho que o leitor tenha conhecimento básico de git e SSH. A maioria dos exemplos ao longo do artigo estará usando o git. Naturalmente, tudo isso se aplicará a qualquer outra comunicação SSH. Dito isto, existem alguns truques específicos de git incluídos.

Cinta, aqui vamos nós!

## Status quo

Primeiro, vamos ver como seu fluxo de trabalho pode parecer antes de ter várias chaves para se preocupar.

Você tem uma chave privada armazenada em `~/.ssh/id_rsa` com uma chave pública correspondente `~/.ssh/id_rsa.pub` .

Vamos imaginar que você queira empurrar / puxar mudanças de código para / de um servidor git remoto; diga GitHub, por que não? Para fazer isso, primeiro você precisa adicionar sua chave pública ao GitHub. Eu não vou passar por cima desse passo, deve ser fácil o suficiente para descobrir como fazer isso. Eu também assumi que seu nome é Steve e você está trabalhando em um projeto altamente secreto que usa Raspberry Pies para farejar o tráfego de rede.

Para começar seu trabalho, você precisa clonar um repositório git usando o SSH:

```bash
git clone git@github.com:steve/raspberry-spy.git 
```

Neste momento, o GitHub será: "Yo, este é um repositório privado! Precisamos criptografar o tráfego usando essa chave pública que tenho aqui e sua chave privada"

Você adicionou a chave pública ao seu perfil no GitHub, mas o SSH tem que descobrir de alguma forma onde sua chave privada correspondente está localizada. Já que não temos idéia de qual chave privada deve ser usada quando o SSH entrar em `git@github.com` , o cliente SSH tenta encontrar uma chave no local padrão, que é `~/.ssh/id_rsa` - é o seu melhor palpite. Se não houver arquivo nesse local, você receberá um erro:

```bash
Cloning into 'raspberry-spy'... 
 Permission denied (publickey). 
 fatal: Could not read from remote repository. 
 
 Please make sure you have the correct access rights 
 and the repository exists. 
```

Se você tiver _alguma_ chave privada armazenada no arquivo `~/.ssh/id_rsa` , o cliente SSH usará essa chave privada para criptografia de comunicação. Se essa chave é senha (como deveria ser), você será solicitado para uma senha, da seguinte maneira:

```bash
Enter passphrase for key '/Users/steve/.ssh/id_rsa': 
```

Se você digitar a senha correta e se essa chave privada for de fato aquela que corresponde à chave pública que você anexou ao seu perfil, tudo irá bem e o repositório será clonado com sucesso.

Mas e se você nomeasse sua chave de forma diferente (ex. `~/.ssh/_id_rsa` )? O cliente SSH não poderá determinar onde a chave privada é armazenada. Você receberá o mesmo erro `Permission denied ...` como antes.

Se você quiser usar uma chave privada nomeada de maneira diferente, você deverá adicioná-la manualmente:

```bash
ssh-add ~/.ssh/_id_rsa 
```

Depois de inserir a frase-senha, você pode verificar se a chave foi adicionada ao `ssh-agent` (cliente SSH) executando `ssh-add -l` . Este comando listará todas as chaves que estão atualmente disponíveis para o cliente SSH.

Se você tentar clonar o repositório agora, ele será bem-sucedido.

## Por enquanto, tudo bem?

Se você estiver interessado, pode começar a perceber alguns problemas em potencial.

Primeiramente, se você reiniciar seu computador, o `ssh-agent` será reiniciado e você terá que adicionar suas chaves não-padrão-nomeadas usando `ssh-add` novamente, digitando senhas e todas aquelas coisas tediosas.

Podemos automatizar a adição de chaves ou, de alguma forma, especificar qual chave usar ao acessar determinados servidores?

Podemos de alguma forma salvar senhas para não precisarmos digitá-las todas as vezes? Se houvesse algo como um _chaveiro_ para salvar chaves SSH protegidas por senha 🤔.

Tenha certeza, existem respostas para todas essas perguntas.

## Digite, `config` SSH

Como se constata, o [arquivo de configuração SSH](https://linux.die.net/man/5/ssh_config) é uma coisa, uma coisa que pode nos ajudar. É um arquivo de configuração por usuário para comunicação SSH. Crie um novo arquivo: `~/.ssh/config` e abra-o para edição.

### Gerenciando chaves SSH com nome personalizado

A primeira coisa que vamos resolver usando este arquivo de `config` é evitar ter que adicionar chaves SSH com nome personalizado usando `ssh-add` . Supondo que sua chave SSH seja nomeada `~/.ssh/_id_rsa` , inclua o seguinte no arquivo de `config` :

```bash
Host github.com 
  HostName github.com 
  User git 
  IdentityFile ~/.ssh/_id_rsa 
  IdentitiesOnly yes 
```

Agora, certifique-se de que `~/.ssh/_id_rsa` não esteja no `ssh-agent` executando `ssh-add -D` . Este comando irá remover todas as chaves da sessão `ssh-agent` atualmente ativa. A sessão é redefinida toda vez que você efetua logout ou reinicializa (ou se você mata o processo `ssh-agent` manualmente). Podemos "simular" a reinicialização executando o comando mencionado.

Se você tentar clonar seu repositório GitHub agora, será o mesmo que se tivéssemos adicionado a chave manualmente (como fizemos antes). Você será solicitado a senha:

```bash
git clone git@github.com:steve/raspberry-spy.git 
 Cloning into 'raspberry-spy'... 
 Enter passphrase for key '/Users/steve/.ssh/_id_rsa': 
```

Você deve ter notado que a chave para a qual a senha solicitada é a mesma chave que especificamos em nosso arquivo de `config` . Após inserir a senha correta da chave SSH, o repositório será clonado com sucesso.

Nota: se, após a clonagem bem-sucedida, você tentar `git pull` , será solicitada a senha novamente. Nós resolveremos isso mais tarde.

É importante que o `Host github.com` de `config` e `github.com` da URI `git@github.com:steve/raspberry-spy.git` . Você também pode alterar a `config` para ser o `Host mygithub` e clone usando o URI `git@mygithub:steve/raspberry-spy.git` .

Isso abre as comportas. Como você está reding isso, sua mente está correndo e pensando sobre como todos os seus problemas com chaves SSH acabaram. Aqui estão alguns exemplos de configuração úteis:

```bash
Host bitbucket-corporate 
        HostName bitbucket.org 
        User git 
        IdentityFile ~/.ssh/id_rsa_corp 
        IdentitiesOnly yes 
```

Agora você pode usar o `git clone git@bitbucket-corporate:company/project.git`

```bash
Host bitbucket-personal 
        HostName bitbucket.org 
        User git 
        IdentityFile ~/.ssh/id_rsa_personal 
        IdentitiesOnly yes 
```

Agora você pode usar o `git clone git@bitbucket-personal:steve/other-pi-project.git`
```
Host myserver 
        HostName ssh.steve.com 
        Port 1111 
        IdentityFile ~/.ssh/id_rsa_personal 
        IdentitiesOnly yes 
        User steve 
        IdentitiesOnly yes 
```

Agora você pode usar o SSH no seu servidor usando o `ssh myserver` . Quão legal é isso? Você não precisa digitar a porta e o nome de usuário manualmente toda vez que executar o comando `ssh` .

#### Bônus: configurações por repositório

Você também pode definir qual chave específica deve ser usada para determinado repositório, sobrescrevendo qualquer coisa na `config` SSH. O comando SSH específico pode ser definido configurando o `sshCommand` sob o `core` em `<project>/.git/config` . Exemplo:

```bash
[core] 
        sshCommand = ssh -i ~/.ssh/id_rsa_corp 
```

Isso é possível com o git 2.10 ou posterior. Você também pode usar este comando para evitar a edição manual do arquivo:

```bash
git config core.sshCommand 'ssh -i ~/.ssh/id_rsa_corp' 
```

### Gerenciamento de senha

Última peça do quebra-cabeça é gerenciar senhas. Queremos evitar ter que digitar a senha toda vez que a conexão SSH estiver sendo iniciada. Para fazer isso, podemos utilizar o software de gerenciamento de chaves que vem com o MacOS e várias distribuições Linux.

Comece adicionando sua chave ao keychain passando a opção `-K` ao comando `ssh-add` :

```bash
ssh-add -K ~/.ssh/id_rsa_whatever 
```

Agora você pode ver sua chave SSH no chaveiro. No MacOS, parece algo como isto: ![Keychain Access](https://raw.githubusercontent.com/fvoska/guides/master/static/images/pages/ssh/managing-multiple-ssh-keys/keychain-access.png "Acesso às Chaves")

Se você remover as chaves do `ssh-agent` via `ssh-add -D` (isso acontecerá quando você reiniciar o computador, como mencionado anteriormente) e tentar o SSH-ing, você será solicitado a digitar a senha novamente. Por quê? Acabamos de adicionar a chave ao chaveiro. Se você verificar o Acesso às Chaves novamente, você notará que a chave que você adicionou usando `ssh-add -K` ainda está no chaveiro. Estranho, né?

Acontece que há mais um aro para atravessar. Abra seu arquivo de `config` SSH e adicione o seguinte:

```bash
Host * 
  AddKeysToAgent yes 
  UseKeychain yes 
```

Agora, o SSH procurará a chave no keychain e, se ela for encontrada, você não será solicitado a fornecer uma senha. A chave também será adicionada ao `ssh-agent` . No MacOS, isso funcionará no MacOS Sierra 10.12.2 ou posterior. No Linux você pode usar algo como o `gnome-keyring` e ele pode funcionar mesmo sem esta última modificação na `config` SSH. Quanto ao Windows - quem sabe, certo?

Espero que alguém tenha achado isso útil. Agora vá e configure seu arquivo de `config` SSH!