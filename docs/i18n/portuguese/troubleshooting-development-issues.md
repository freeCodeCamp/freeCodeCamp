Se estiver com problemas, há grandes probabilidades de a resolução constar desta documentação.

### Problemas com a instalação dos pré-requisitos recomendados

Desenvolvemos regularmente nos sistemas mais recentes e populares, como o macOS 10.15, o Ubuntu 18.04 e o Windows 10 (com WSL2).

É recomendado pesquisar seu issue específico em recursos como Google, Stack Overflow e Stack Exchange. É possível que alguém já tenha enfrentado o mesmo problema que o seu e já possua uma solução.

Se você está em um sistema operacional diferente ou se ainda está encontrando problemas, veja [obtendo ajuda](#getting-help).

> [!WARNING]
> 
> Evite criar issues no GitHub para problemas com as tecnologias que são requisitadas de antemão. Estão fora do escopo deste projeto.

### Problemas de ausência da interface do usuário, fontes, strings de idioma ou erro de build.

Quando você fizer a build no client, o Gatsby armazenará em cache as fontes, as strings de idioma e a interface do usuário. Se um deles não estiver em cache, execute o seguinte:

```console
pnpm run clean
pnpm install
pnpm run seed
pnpm run develop
```

OU

Use o atalho

```
pnpm run clean-and-develop
```

Se você continua enfrentando problemas com a compilação, é recomendável limpar o espaço de trabalho.

Use `git clean` no modo interativo:

```
git clean -ifdX
```

<details>
   <summary>
      Como limpar arquivos não rastreados do git (captura de tela)
   </summary>

   <br>
   <img src="https://user-images.githubusercontent.com/1884376/94270515-ca579400-ff5d-11ea-8ff1-152cade31654.gif" alt="Como limpar arquivos git não rastreados" />
</details>

### Problemas com API, login, envio de desafios, etc.

Se você não conseguir fazer o login e se vir um banner com uma mensagem de erro dizendo que isso será reportado ao freeCodeCamp, verifique novamente se a porta local `3000` não está em uso por um programa diferente.

<!-- tabs:start -->

#### **macOS/Linux/WSL no Windows - No Terminal:**

```console
netstat -a | grep "3000"

tcp4    0   0    0.0.0.0:3000           DESKTOP      LISTEN
```

#### **No Windows – no PowerShell com privilégios:**

```powershell
netstat -ab | Select-String "3000"

TCP    0.0.0.0:3000           DESKTOP      LISTENING
```

<!-- tabs:end -->

---

### Problemas de logout ao navegar

Enquanto estiver em desenvolvimento, sua sessão é armazenada como cookies. Limpar os cookies os retirará de sua conta de desenvolvimento.

Executar `pnpm run seed:certified-user` também deslogará você. Isso sobrescreverá o usuário de desenvolvimento em seu banco de dados local.

### Problema de obter 404 ao navegar na página de perfil

Ao tentar navegar para http://localhost:8000/developmentuser para ver a página de perfil, o Gatsby assume o controle do serviço das páginas do lado do client e, portanto, você obterá uma página 404 para o perfil do usuário quando estiver trabalhando.

Há um botão de "Pré-visualização personalizada da página de 404". Clique nele para ver o perfil.

### Problemas ao instalar dependências

Se você receber erros durante a instalação das dependências, certifique-se de que você não está em uma rede restrita ou suas configurações de firewall não impedem você de acessar os recursos.

A primeira configuração pode demorar um pouco, dependendo da largura de banda da sua rede. Tenha paciência. Se você ainda tiver problemas, recomendamos usar o GitPod invés de uma configuração off-line.

> [!NOTE] Se estiver usando dispositivos da Apple com o chip M1 para executar a aplicação localmente, sugerimos usar o Node v14.7 ou uma versão mais recente. Do contrário, você poderá ter problemas com dependências como o Sharp.

## Obter ajuda

Se você está com dificuldades e precisa de ajuda, fique à vontade em perguntar na categoria ['Contributors' (colaboradores) em nosso fórum](https://forum.freecodecamp.org/c/contributors) ou [na sala de bate-papo dos colaboradores](https://discord.gg/PRyKn3Vbay).

Pode haver um erro no console do seu navegador ou no Bash/Terminal/Linha de Comando que ajudará a identificar o problema. Forneça esta mensagem de erro na descrição do seu problema para que outros possam identificá-lo mais facilmente e ajudá-lo a encontrar uma solução.
