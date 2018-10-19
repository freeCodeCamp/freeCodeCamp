---
title: Customizing Ubuntu
localeTitle: Personalizando o Ubuntu
---
Este tutorial mostra como adicionar aliases ao terminal, aprimorando a unidade e removendo o bloatware pré-instalado.

## Passos:

### Removendo o Bloatware

Para remover todo o bloatware pré-instalado devido a preocupações com a privacidade ou para manter seu sistema operacional mínimo, verifique [essa](https://gist.github.com/ansell/61313400e26cd42289f8) essência.

### Aliases

Você pode criar um alias temporário como este:
```
alias alias_name="command_to_run" 
```

No entanto, quando você fechar sua sessão de shell, esse alias deixará de existir.

Para criar um alias permanente, você precisará criar o arquivo `~/.bash_aliases` usando o comando `touch ~/.bash_aliases` . Depois de abrir esse arquivo com o editor de texto escolhido, adicione uma linha na parte inferior do documento, semelhante ao exemplo acima.

Para saber mais, o DigitalOcean tem um ótimo tutorial que pode ser encontrado [aqui](https://www.digitalocean.com/community/tutorials/an-introduction-to-useful-bash-aliases-and-functions) .

### Ferramenta Unity Tweak

A ferramenta Unity Tweak oferece aos usuários várias opções de configuração para ajustar o Unity Desktop.

Para instalar o Unity Tweak Tool, digite `sudo apt install unity-tweak-tool` e, para iniciá-lo, o `unity-tweak-tool` .

[Aqui](http://www.techrepublic.com/blog/linux-and-open-source/six-must-have-ubuntu-unity-tweaks/) está uma lista dos seis must-have Ubuntu Unity Tweaks.

[**Baixe e instale o Ubuntu Desktop**](//forum.freecodecamp.com/t/download-and-install-ubuntu-desktop/18383) | [**Índice**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**Jazzing up the Terminal**](//forum.freecodecamp.com/t/jazzing-up-the-terminal/18386)