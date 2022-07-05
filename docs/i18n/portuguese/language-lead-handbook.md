# O manual oficial para os líderes de cada idioma do freeCodeCamp

Este manual o ajudará a configurar e utilizar as ferramentas para seus esforços de localização.

## Como convidar novos colaboradores para o Ghost

O Ghost permite que você defina colaboradores com diferentes níveis de autorização.

A maioria de seus convites será para o nível "Contributor" (Colaborador). Esse nível permite que o usuário crie rascunhos. Selecione esta função ao convidar um novo tradutor.

O nível "Author" (Autor) permite ao usuário criar rascunhos e publicá-los.

O nível "Editor" permite ao usuário acessar todos os rascunhos e publicá-los. Selecione esta função ao convidar um novo revisor.

O nível "Administrator" (Administrador) é reservado para funcionários e líderes de idiomas do freeCodeCamp.

## Como mencionar o autor original de um artigo traduzido

O autor original e o artigo original são vinculados automaticamente, adicionando este código à seção de cabeçalho Code Injection -> em Draft Setiings (Configurações de rascunho) no Ghost.

```html
<script>
  const fccOriginalPost = 'link';
</script>
```

Sendo `link` o link do artigo original.

## Como atualizar o glossário do Crowdin

> [!TIP] Um glossário atualizado ajuda a ter uma tradução dos termos técnicos mais homogênea.

O glossário do Crowdin é mantido no repositório [crowdin-glossaries](https://github.com/freeCodeCamp/crowdin-glossaries).

Na pasta `glossaries` há vários arquivos `*.csv` (valores separados por vírgulas, um para cada um dos projetos no Crowdin que têm um glossário que pode ser atualizado a partir deste fluxo de trabalho.

O arquivo `client.csv` é para o projeto "Learn User Interface" (Interface de aprendizagem do usuário), `curriculum.csv` é para o projeto "Coding Curriculum" (Currículo de programação) e o arquivo `docs.csv` é para o projeto "Contributing Documentation" (Documentação colaborativa).

Para atualizar os glossários do Crowdin você precisa clonar este repositório localmente. Abra o arquivo `.csv` com um programa apropriado - por exemplo, o Microsoft Excel.

No arquivo `.csv`, que você verá que a língua inglesa ocupa as primeiras três colunas, `Term:English` é a coluna para o termo em inglês, `Description:English` é a coluna para a descrição em inglês e `Part:English` é para a classe gramatical (por exemplo, substantivo, verbo etc.) do termo.

Depois delas, cada idioma-alvo tem duas colunas. Se você traduzir para o Dothraki, estará interessado nas colunas `Term:Dothraki` e `Description:Dothraki`. A coluna `Term:Dothraki` é para a tradução do termo em Dothraki, enquanto a coluna `Description:Dothraki` é para uma descrição do termo em Dothraki.

> [!TIP] Em programas como o Microsoft Excel, você pode ocultar as colunas dos outros idiomas para liberar espaço em tela e ver as colunas em inglês e as colunas do idioma de destino ao lado umas das outras.

Após ter feito as alterações e salvo o arquivo, você precisará fazer um PR com as alterações propostas. Depois de o PR ter sido aceito, você precisará executar o fluxo de trabalho do GitHub Action para atualizar o glossário do Crowdin. Suas alterações no glossário não terão efeitos imediatos, mas aparecerão em breve.
