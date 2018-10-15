---
title: Cordova iOS Application Development Setup to Deployment
localeTitle: Cordova iOS Application Development Setup para implantação
---
# Cordova iOS Application Development Setup para implantação

![iphone_1737513_1920](https://image.ibb.co/iKCSuQ/Xz_J197k8_QI32.jpg)

Desenvolvimento de aplicativos híbridos para o Android é uma brisa, seja para desenvolvimento ou configuração de produção, no entanto eu pessoalmente encontrar cordova iOS configuração, desenvolvimento e implantação um pouco complicado.

A maioria dos desenvolvedores de aplicativos híbridos que estão no estágio de aprendizado não é capaz de explorar o processo de desenvolvimento de aplicativos iOS híbrido devido à simples razão de que eles não possuem um mac, já que o desenvolvimento de aplicativos iOS exige o iOS SDK e XCode Sistema operacional de desktop. Portanto, o objetivo deste guia é mostrar o fluxo de trabalho básico do desenvolvimento de aplicativos híbridos para iOS em um mac, para que um desenvolvedor, mesmo que não possa desenvolver aplicativos para iOS, esteja mais familiarizado com a maneira como é feito.

## Criando projeto cordova

Comece abrindo o terminal e criando um novo projeto cordova (use o sudo somente se você tiver problemas de permissão, isto é, erros do EACCESS):
```
sudo cordova create iosdemo 
 cd iosdemo 
 sudo cordova platform add ios 
```

No momento de escrever este guia cordova iOS versão da plataforma é: 4.3.1

Não modificaremos nenhum código-fonte do aplicativo e continuaremos com o código de amostra padrão que é adicionado automaticamente pelo cordova quando executarmos o comando create. No entanto, é assumido que adicionaremos o código de modificação dos plugins na pasta `www` durante o fluxo de desenvolvimento normal.

O próximo passo é executar o comando cordova build. Isso converterá nosso código de aplicativo em um arquivo .xcodeproj que usaremos a seguir.
```
sudo cordova build ios 
```

O arquivo do projeto Xcode gerado estará em:
```
[Your App Folder]/platforms/ios/[Your App Name].xcodeproj 
```

Agora, no Android, a assinatura do código é feita usando o arquivo Keystore, que está no formato .jks. No entanto, no caso do iOS para distribuição de aplicativos para iOS, é necessário que você tenha uma conta de desenvolvedor da Apple, Isso é para que possamos gerar os _Certificados_ e os _Perfis de provisionamento_ necessários para distribuir o aplicativo.

Para o preço da conta do desenvolvedor, consulte [esta página](https://developer.apple.com/support/purchase-activation/)

## Criando Certificados de Desenvolvimento

Depois de ter a conta pronta, podemos prosseguir e fazer o login para a [conta de desenvolvedor da Apple](https://developer.apple.com/account/)

A tela do painel deve ser algo como isto: ![Abertura do projeto no Xcode](https://image.ibb.co/j0d8zQ/Clipboard_image_2017_09_18_11_35_58.png)

Clique em `Certificates, Identifiers & Profiles` Isso deve levar você à seguinte tela, que, por padrão, exibe Certificados emitidos de sua conta: ![Certificados, Identificadores & Perfis](https://image.ibb.co/fk8mm5/1.png)

Os Certificados iOS são principalmente de dois tipos: Desenvolvimento ou Distribuição, clique no botão Mais (+) no canto superior direito da lista que abrirá a seguinte página: ![Adicionar certificado do iOS](https://image.ibb.co/dksXtk/2.png)

Primeiro, vamos criar um perfil de desenvolvimento: Selecione _iOS App Development_ e clique em continuar.

Isso deve levá-lo à tela seguinte, onde você é solicitado a criar e fazer o upload de um arquivo de solicitação de assinatura de certificado ou CSR. ![Carregar arquivo CSR](https://image.ibb.co/iwBE65/3.png)

Siga as instruções na tela para gerá-lo e continue. Quando o certificado estiver pronto, baixe-o no seu Mac e clique duas vezes nele. Isso irá adicioná-lo ao Keychain Access no Mac. ![Baixe certificado de desenvolvimento](https://image.ibb.co/dJg6m5/4.png)

## Criando Certificados de Distribuição

Criar certificados de distribuição é semelhante ao processo de criação de certificados de desenvolvimento, No entanto, aqui, selecionamos a `App Store and Ad Hoc` da seção `Production` na página `Add iOS Certifcate Page`

![Adicionar certificado do iOS](https://image.ibb.co/bEKFeQ/5.png)

## Criando o ID do aplicativo

Selecione `App IDs` da seção `Identifiers` . Isso abrirá a lista de códigos de aplicativos existentes. Em seguida, clique no botão Mais no canto superior direito (+), Isso abrirá a página _Registrar IDs do aplicativo iOS_ .

![Registrar IDs de aplicativos iOS](https://image.ibb.co/iXTuOk/6.png)

Selecione o código do aplicativo explícito

Descrição do aplicativo pode ser qualquer nome relacionado que será exibido na lista de ID do aplicativo em relação ao ID do aplicativo específico.

Um ID de aplicativo é uma string no formato _AB11A1ABCD.com.mycompany.myapp, em_ que _AB11A1ABCD_ é o prefixo do ID do aplicativo, que é, por padrão, o ID da equipe e _com.mycompany.myapp_ é o ID do pacote exclusivo para cada aplicativo. É recomendável que o ID do pacote esteja em uma string de estilo de nome de domínio reverso, por exemplo, a empresa MYCOMPANY pode ter dois aplicativos (App1 e App2), portanto, a URL http para cada aplicativo é geralmente app1.mycompany.com e app2.mycompany .com, Assim, os IDs do pacote configurável de cada aplicativo serão com.mycompany.app1 e com.mycompany.app2

Em seguida, selecione todos os serviços da chceklist que você precisa usar em seu aplicativo, como notificações por push, carteira etc. Em seguida, clique em continuar e confirme os detalhes e, finalmente, registre o ID do aplicativo.

## Adicionando dispositivos à conta do desenvolvedor

Selecione a seção `All` partir de `Devices` , isso abrirá a lista de dispositivos já adicionados à sua conta de desenvolvedor da Apple, Apenas esses dispositivos podem executar o aplicativo durante o desenvolvimento. Para adicionar um novo dispositivo Em seguida, clique no botão Mais no canto superior direito (+) A seguinte tela será exibida: ![adicionar tela do dispositivo](https://image.ibb.co/gTmW3k/8.png)

Aqui nome pode ser qualquer exemplo de nome facilmente subvirável, iPhone 5s ABC Pvt Ltd. O dispositivo UDID é o ID exclusivo associado a cada dispositivo Apple.

Para encontrar o UDID de um dispositivo, siga as etapas abaixo mencionadas: 1) Conecte o dispositivo ao seu Mac. 2) Abra o aplicativo System Information localizado na pasta / Applications / Utilities. 3) Selecione USB em Hardware na coluna da esquerda. 4\_ À direita, selecione o dispositivo conectado na Árvore de dispositivos USB. O ID do dispositivo, ou "Número de série", aparece abaixo.

Depois de inserir o UDID e o nome do dispositivo, clique em continuar, confirme os detalhes e registre-se.

## Criando perfil de provisionamento de desenvolvimento

Para criar um perfil de provisionamento de desenvolvimento, clique em Perfis de provisionamento -> Todos Isso deve mostrar todos os perfis, desenvolvimento e distribuição. Em seguida, clique no botão Mais no canto superior direito (+) Isso deve mostrar a seguinte página: ![Criando um perfil de fornecimento de desenvolvimento](https://image.ibb.co/dk3KOk/7.png)

Aqui selecione `iOS App Development` e clique em continuar. Na lista suspensa exibida, selecione o ID do aplicativo que criamos anteriormente e continue.

Próximo Uma lista de lista de verificação de certificados é exibida a partir da qual podemos selecionar um ou vários. Estes são certificados de desenvolvimento e não de distribuição. O perfil de fornecimento gerado será vinculado a esses certificados.

Ao clicar em continuar, uma lista de verificação de dispositivos é exibida, selecione um, múltiplos ou todos. Apenas os dispositivos selecionados poderão executar o aplicativo usando este perfil de provisionamento.

Em seguida, clique em continuar, digite o nome do perfil de provisionamento e faça o download do arquivo .mobileprovision gerado.

## Criando perfil de provisionamento de distribuição ad hoc

Este processo é o mesmo que Criação de Perfil de Desenvolvimento

## Criando perfil de provisionamento de distribuição da AppStore

Esse processo é o mesmo que Criação de Perfil de Desenvolvimento, exceto que não selecionamos dispositivos, pois o aplicativo estará disponível publicamente por meio da AppStore.

Agora que temos tudo o que precisamos, podemos continuar gerando o ipa real usando o Xcode.

_Nota: O comando cordova build converte nosso código de aplicativo para o projeto xcode, usando o Xcode criamos um arquivo .ipa que é o aplicativo real a ser instalado._

* * *

Antes de avançar duplo toque em ambos os Certificados para adicioná-los ao chaveiro

## Continuando no Xcode

Em seguida, toque duas vezes no arquivo .xcodeproj que deve abri-lo no Xcode. (Por favor, use a versão mais recente do Xcode, eu usei o Xcode 8.3.2)

![Abertura do projeto no Xcode](https://image.ibb.co/mPdGKQ/Screen_Shot_2017_09_18_at_11_06_55_AM.png) A tela do Xcode deve ser algo como isso.

Clique no nome do aplicativo no canto superior esquerdo da janela, isso abrirá a exibição detalhada no lado direito. ![Configurações do projeto](https://image.ibb.co/fqb3ZQ/Screen_Shot_2017_09_18_at_5_07_53_PM.png)

Em seguida, clique em Destinos -> Nome do aplicativo

![alvos](https://image.ibb.co/i0znTk/Screen_Shot_2017_09_18_at_5_11_28_PM.png)

Isso exibirá a seguinte guia de detalhes: ![detalhes do alvo](https://image.ibb.co/ksBj8k/Screen_Shot_2017_09_18_at_5_15_29_PM.png)

Clik em geral, que deve exibir: ![Detalhes Gerais](https://image.ibb.co/k8KFEQ/Screen_Shot_2017_09_18_at_5_18_29_PM.png)

Desmarque a caixa de seleção Gerenciar assinatura automaticamente

Isso deve exibir o seguinte erro, declarando que o AppNAme requer o perfil de provisionamento ![erro de perfil](https://image.ibb.co/mDq5EQ/Screen_Shot_2017_09_18_at_5_20_35_PM.png)

Em seguida, em Assinatura (Depuração) Clique no menu suspenso Perfil de provisionamento e selecione a opção de _perfil impot_ . Na caixa de diálogo de seleção de arquivos que aparece, navegue até o caminho em que o perfil de provisionamento de desenvolvimento foi baixado e selecione-o. Ele terá uma extensão de _.mobileprovision_

Após a seleção, o erro deve ser eliminado e ele deve mostrar a Equipe como o nome da equipe na conta do Apple eveloper e o Nome do certificado de assinatura.

Faça o mesmo para a seção Assinatura (Release), no entanto, na caixa de diálogo de seleção de arquivo, selecione o perfil de distribuição Ad Hoc.

Agora que as etapas de assinatura do Código estão concluídas,

*   executar o aplicativo diretamente no dispositivo
*   execute o aplicativo em um simulador
*   gerar um arquivo ipa para distribuição
*   fazer o upload do aplicativo para o appstore

## Executando o aplicativo diretamente no dispositivo

Para executar o aplicativo no dispositivo, conecte o dispositivo ao Mac via USB. em seguida, no canto superior esquerdo da lista de dispositivos, selecione o dispositivo conectado e clique no botão executar ou reproduzir (botão triangular preto) ![executar dispositivo](https://image.ibb.co/k4xo15/Screen_Shot_2017_09_18_at_5_34_14_PM.png) ![executar dispositivo](https://image.ibb.co/hjzhuQ/Screen_Shot_2017_09_18_at_5_36_55_PM.png)

O status da compilação será exibido na barra de status na parte superior da janela. Se tudo correr bem, o aplicativo deve ser instalado no dispositivo e carregado automaticamente em um tempo.

## Executando o aplicativo em um simulador

As etapas são as mesmas que em execução no dispositivo, mas, em vez de um dispositivo real, usamos os simuladores disponíveis para iPhone e iPad da lista de dispositivos.

## Gere um arquivo ipa para distribuição

Essa abordagem pode ser feita no caso de você precisar distribuir o aplicativo para a equipe de teste, etc. No entanto, o dispositivo usado por eles deve ter um UDID presente no perfil de provisionamento.

No menu Xcode, selecione `Product` -> `Clean` , Então `Product` -> `Archive` , O organizador Archives aparece e exibe o novo arquivo. ![organizador do arquivo ios](https://image.ibb.co/iunfMG/6_ios_archive_organizer_2x.png) No painel lateral direito, selecione a opção Exportar, todos os optios serão exibidos.

Para distribuir seu aplicativo para usuários com dispositivos designados, selecione "Salvar para implantação ad hoc". O aplicativo será assinado com o certificado de distribuição.

Para distribuir seu aplicativo para testes internos, selecione "Salvar para implantação de desenvolvimento". O aplicativo será código assinado com seu certificado de desenvolvimento. ![Exportação do organizador do arquivo ios como ad hoc](https://image.ibb.co/jQJLMG/6_ios_createappstorepackage_1_2x.png)

Na caixa de diálogo exibida, escolha uma equipe no menu pop-up e clique em Escolher. ![equipe de seleção de exportação ios](https://image.ibb.co/gH2VMG/6_ios_export_choose_team_2x.png)

Em seguida, a caixa de diálogo de seleção de dispositivos aparece Selecione _Todos os dispositivos_ ou _dispositivos específicos_ clique em próximo.

Em seguida, a caixa de diálogo de revisão é exibida, Aqui ele mostrará o certificado de assinatura e o perfil de aprovisionamento usado para gerar a compilação. Revise e clique em próximo. Finalmente, o arquivo salvar como pop-up é exibido para selecionar o local no sistema de arquivos para armazenar o arquivo do aplicativo exportado.

O aplicativo é exportado como arquivo \`\` .ipa\`\`\`.

Para executar este arquivo no dispositivo, basta tocar duas vezes nele, que será aberto no iTunes.

Em seguida, conecte seu dispositivo (isso deve mostrar um pequeno ícone de dispositivo no canto superior esquerdo da janela do iTunes) tocar nele mostrará o resumo do dispositivo, como aplicativos, músicas, etc., no dispositivo. Selecione o separador apps no painel esquerdo, selecione o aplicativo a ser instalado e clique em instalar. Aguarde o processo ser concluído e clique em aplicar, Isso deve instalar o arquivo ipa no seu dispositivo.

Para depurar o aplicativo: 1) safari aberto, 2) abra o aplicativo no dispositivo 3) Na barra de menus do Safari, selecione `Develop --> Your Device Name --> Your App` .

## Isso é tudo, pessoal !!!